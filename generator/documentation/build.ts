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

import {
  root,
  paragraph,
  text,
  strong,
  inlineCode,
  html as htmlNode,
  table,
  tableRow,
  tableCell,
  link,
} from "mdast-builder";
import { Parent, Node } from "unist";
import { OpenAPIV3 } from "openapi-types";
import { isRef } from "./helpers";
import syntax from "micromark-extension-gfm";
import gfm from "mdast-util-gfm";

import fromMarkdown_ from "mdast-util-from-markdown";

const fromMarkdown = (s: string) =>
  fromMarkdown_(s, {
    extensions: [syntax()],
    mdastExtensions: [gfm.fromMarkdown],
  });

export interface PropertyRow {
  field: Parent;
  type: Parent;
  description?: Parent;
}

export const build = (
  schema:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject,
  key: string
): Parent => {
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
  nodes.push(paragraph([text(`type: `), inlineCode(schema.type!)]));

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
    Object.keys(schema.properties!)
      .sort((a: string, b: string) => {
        if (schema.required) {
          if (
            schema.required.indexOf(a) !== -1 &&
            schema.required.indexOf(b) !== -1
          ) {
            return a < b ? -1 : 1;
          } else if (schema.required.indexOf(a) !== -1) {
            return -1;
          } else if (schema.required.indexOf(b) !== -1) {
            return 1;
          }
        }
        return a < b ? -1 : 1;
      })
      .forEach((key) => {
        const required = Boolean(
          schema.required && schema.required.indexOf(key) !== -1
        );

        rows.push(propertyToRow(key, schema.properties![key], required));
      });

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
  return root(nodes);
};

const propertyToRow = (
  key: string,
  property:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject,
  required: boolean
): Parent => {
  const row: any[] = [];
  row.push(tableCell(inlineCode(key)));

  // bold if required
  if (required) {
    row.push(tableCell([strong(text("required"))]));
  } else {
    row.push(tableCell([text("optional")]));
  }

  if (isRef(property)) {
    const name = refName(property);
    const refLink = link(`#${name}`, name, [text(name)]);
    row.push(tableCell(refLink));
    row.push(
      tableCell(refPropertyDesciption(refLink, property["description"]))
    );
  } else {
    if (property.type === "array") {
      if (isRef(property.items)) {
        const name = refName(property.items);
        const refLink = link(`#${name}`, name, [text(name)]);
        row.push(tableCell([text("Array&lt;"), refLink, text("&gt;")]));
        row.push(
          tableCell(refPropertyDesciption(refLink, property.description))
        );
      } else if (property.items.type === "object") {
        throw `Error: extract object to ref from array items for better documentation.`;
      } else {
        const name = property.items.type;
        row.push(tableCell([text(`Array&lt;${name}&gt;`)]));
        row.push(tableCell(nonRefPropertyDescription(property, key)));
      }
    } else {
      row.push(tableCell(text(property.type!)));
      row.push(tableCell(nonRefPropertyDescription(property, key)));
    }
  }

  return tableRow(row);
};

const refPropertyDesciption = (refLink: any, description?: string) => {
  if (description) {
    return [
      paragraph(fromMarkdown(description)),
      text(" See "),
      refLink,
      text(" for more information."),
    ];
  }

  return [text("See "), refLink, text(" for more information.")];
};

const nonRefPropertyDescription = (
  property: OpenAPIV3.ArraySchemaObject | OpenAPIV3.NonArraySchemaObject,
  key: string
) => {
  const nodes: Node[] = [];

  if (!property.description) {
    throw `
		
		
		Please add a description for '${key}'.
		
		
		`;
  }

  nodes.push(fromMarkdown(property.description));

  if (property.enum) {
    if (property.description) {
      nodes.push(text(" "));
    }
    nodes.push(paragraph(text("The allowed values include: ")));
    property.enum.forEach((value, i) => {
      if (i !== 0) nodes.push(text(", "));
      if (i == property.enum!.length - 1) nodes.push(text("and "));
      nodes.push(inlineCode(value));
    });
  }
  return nodes;
};

const refName = ({ $ref }: OpenAPIV3.ReferenceObject): string => {
  return $ref.split("/").pop()!.replace("#", "");
};
