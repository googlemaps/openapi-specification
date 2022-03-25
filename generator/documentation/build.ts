/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from "clsx";
import { Node, Parent } from "unist";
import {
  feedbackLinks,
  localRefLink,
  sortSchemaProperties,
  deprecatedAsideNode,
} from "./helpers";
import { fromMarkdown, htmlProcessor } from "./processors";
import {
  html as htmlNode,
  paragraph,
  root,
  strong,
  table,
  tableCell,
  tableRow,
  text,
} from "mdast-builder";

import { OpenAPIV3 } from "openapi-types";
import { isRef } from "./helpers";

export interface PropertyRow {
  field: Parent;
  type: Parent;
  description?: Parent;
}

export const build = async (
  schema:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject,
  key: string,
  spec: OpenAPIV3.Document,
  regionTag: string
): Promise<Parent> => {
  if (isRef(schema)) {
    throw "cannot handle ref here";
  }

  console.log(`Generating documentation for ${key}`);

  const title = schema.title == undefined ? key : schema.title;
  const nodes: any = [];

  nodes.push(htmlNode(`<h3 class="schema-object" id="${key}">${title}</h3>`));

  if (schema.description) {
    nodes.push(paragraph(fromMarkdown(schema.description)));
  }

  // if an object, build a table of fields
  if (schema.type === "object") {
    const rows: any = [];

    // header row
    rows.push(
      tableRow([
        tableCell(text("Field")),
        tableCell(text("Required")),
        tableCell(text("Type")),
        tableCell(text("Description")),
      ])
    );

    // all fields
    (
      await Promise.all(
        Object.keys(schema.properties!)
          .sort(sortSchemaProperties(schema))
          .map(async (key) => {
            const required = Boolean(
              schema.required && schema.required.indexOf(key) !== -1
            );
            const row = await propertyToRow(
              key,
              schema.properties![key],
              required,
              spec,
              title
            );
            return row;
          })
      )
    ).forEach((row) => rows.push(row));

    nodes.push(table(["left"], rows));

    if (schema.example) {
      nodes.push(
        htmlNode(
          `<h4 class="schema-object-example" id="${key}-example">Example</h4>`
        )
      );
      nodes.push(
        htmlNode(
          `<pre class="notranslate lang-json prettyprint">${JSON.stringify(
            schema.example,
            null,
            2
          )}</pre>`
        )
      );
    }
  }

  // add feedback links to documentation
  nodes.push(feedbackLinks(key, "schemas", regionTag));

  return root(nodes);
};

const propertyToRow = async (
  key: string,
  property:
    | (OpenAPIV3.ReferenceObject & OpenAPIV3.BaseSchemaObject)
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject,
  required: boolean,
  spec: OpenAPIV3.Document,
  title: string
): Promise<Parent> => {
  const row: any[] = [];
  row.push(
    tableCell(
      htmlNode(
        // class="add-link" forces the link anchor button on hover
        // need to override styling to provide room for button on hover
        `<h4 id="${title}-${key}" class="${clsx(
          "add-link",
          "schema-object-property-key",
          {
            "deprecated-item": property.deprecated,
            "hide-from-toc": property.deprecated,
          }
        )}"><code>${key}</code></h4>`
      )
    )
  );

  // bold if required
  if (required) {
    row.push(tableCell([strong(text("required"))]));
  } else {
    row.push(tableCell([text("optional")]));
  }

  if (isRef(property)) {
    const name = refName(property);
    const refLink = localRefLink(name, spec);
    row.push(tableCell(refLink));
    row.push(
      tableCell(await refPropertyDescription(refLink, property["description"]))
    );
  } else {
    if (property.type === "array") {
      if (!property.items) {
        throw `property.items is undefined for ${key}`;
      }

      if (isRef(property.items)) {
        const name = refName(property.items);
        const refLink = localRefLink(name, spec);
        row.push(tableCell([text("Array&lt;"), refLink, text("&gt;")]));
        row.push(
          tableCell(await refPropertyDescription(refLink, property.description))
        );
      } else if (property.items.type === "object") {
        throw `Error: extract object to ref from array items for better documentation. ${JSON.stringify(
          property,
          null,
          2
        )}`;
      } else {
        const name = property.items.type;
        row.push(tableCell([text(`Array&lt;${name}&gt;`)]));
        row.push(tableCell(await nonRefPropertyDescription(property, key)));
      }
    } else {
      row.push(tableCell(text(property.type!)));
      row.push(tableCell(await nonRefPropertyDescription(property, key)));
    }
  }

  return tableRow(row);
};

const refPropertyDescription = async (refLink: any, description?: string) => {
  if (description) {
    let html = (await htmlProcessor.process(description))
      .toString()
      .replace(/\n/g, "");

    return [
      htmlNode(
        `<div class="ref-property-description">${html}<p>See <a href="${refLink.url}">${refLink.title}</a> for more information.</div>`
      ),
    ];
  }

  return [text("See "), refLink, text(" for more information.")];
};

const nonRefPropertyDescription = async (
  property: OpenAPIV3.ArraySchemaObject | OpenAPIV3.NonArraySchemaObject,
  key: string
) => {
  const nodes: Node[] = [];

  if (!property.description && !property.deprecated) {
    throw `
		
		
		Please add a description for '${key}'.
		
		
		`;
  }

  // process description text as html since markdown does not support complex
  // values in table cells. this wraps all paragraphs in a div and removes new lines
  let description = (
    await htmlProcessor.process(property.description || "")
  ).toString();

  if (property.enum) {
    let footer = "";

    footer += "The allowed values include: ";
    property.enum.forEach((value, i) => {
      if (i !== 0) footer += ", ";
      if (i == property.enum!.length - 1) footer += "and ";
      footer += `\`${value}\``;
    });

    description += `<div class="notranslate">${footer}</div>`;
  }

  description = description.replace(/\n/g, "");

  if (property.deprecated) {
    nodes.push(deprecatedAsideNode(key));
  }

  nodes.push(
    htmlNode(`<div class="nonref-property-description">${description}</div>`)
  );

  return nodes;
};

const refName = ({ $ref }: OpenAPIV3.ReferenceObject): string => {
  return $ref.split("/").pop()!.replace("#", "");
};
