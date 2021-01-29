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

import { createWriteStream, readFileSync } from "fs";
import { options } from "yargs";
import tar from "tar-stream";
import { dereference } from "@apidevtools/json-schema-ref-parser";
import {
  root,
  paragraph,
  text,
  inlineCode,
  html as htmlNode,
  table,
  tableRow,
  tableCell,
  link,
} from "mdast-builder";
import stringify from "remark-stringify";
import unified from "unified";
import { OpenAPIV3 } from "openapi-types";
import gfm from "remark-gfm";
import slugify from "slugify";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import prettier from "prettier";

const argv = options({
  output: {
    type: "string",
    demandOption: true,
  },
  spec: {
    type: "string",
    demandOption: true,
  },
}).argv;

const mdProcessor = unified().use(gfm).use(stringify, {
  bullet: "-",
  fence: "`",
  fences: true,
  incrementListMarker: false,
});

const htmlProcessor = unified().use(remarkParse).use(gfm).use(remarkHtml);

const isRef = (
  obj:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject
): obj is OpenAPIV3.ReferenceObject => {
  return (obj as OpenAPIV3.ReferenceObject).$ref !== undefined;
};

const main = async (argv: any) => {
  const spec = JSON.parse(
    readFileSync(argv.spec).toString()
  ) as OpenAPIV3.Document;

  const pack = tar.pack();

  for (const key in spec.components!.schemas) {
    const schema = spec.components!.schemas[key] as
      | OpenAPIV3.ArraySchemaObject
      | OpenAPIV3.NonArraySchemaObject;

    const nodes: any = [];

    nodes.push(
      htmlNode(
        `<h3 id="${key}">${"title" in schema ? schema.title! : key}</h3>`
      )
    );

    if ("description" in schema) {
      nodes.push(paragraph(text(schema.description!)));
    }

    nodes.push(paragraph(text(`type: ${schema.type}`)));

    if (schema.type === "object") {
      const rows: any = [];

      rows.push(
        tableRow([
          tableCell(text("Field")),
          tableCell(text("Type")),
          tableCell(text("Description")),
        ])
      );

      Object.keys(schema.properties!).forEach((prop) => {
        const property = schema.properties![prop];
        const row: any[] = [];
        row.push(tableCell(inlineCode(prop)));

        if (isRef(property)) {
          const name = property.$ref.split("/").pop()!;
          const refLink = link(`#${name}`, name, [text(name)]);
          row.push(tableCell(refLink));
          row.push(tableCell([text("See "), refLink]));
        } else {
          if (property.type === "array") {
            const name = (property.items as OpenAPIV3.ReferenceObject).$ref
              .split("/")
              .pop()!;
            const refLink = link(`#${name}`, name, [text(name)]);
            row.push(tableCell([text("Array<"), refLink, text(">")]));
            row.push(
              tableCell([text("See "), refLink, text(" for more information.")])
            );
          } else {
            row.push(tableCell(text(property.type!)));
            row.push(tableCell(text(property.description || "")));
          }
        }

        rows.push(tableRow(row));
      });
      nodes.push(table(["left"], rows));
    }

    const regionTag = `maps_http_schema_${slugify(key)}`;

    const markdown = mdProcessor.stringify(root(nodes));
    pack.entry(
      {
        name: `documentation/schemas/${key}.md`,
      },
      `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${markdown}\n<!--- [END ${regionTag}] -->`
    );

    const html = await htmlProcessor.process(markdown);
    pack.entry(
      {
        name: `documentation/schemas/${key}.html`,
      },
      prettier.format(
        `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${html}\n<!--- [END ${regionTag}] -->`,
        { parser: "html" }
      )
    );
  }
  pack.finalize();
  pack.pipe(createWriteStream(argv.output));
};

main(argv);
