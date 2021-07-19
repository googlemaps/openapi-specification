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
import $RefParser from "@apidevtools/json-schema-ref-parser";

import { createWriteStream, readFileSync } from "fs";
import { options } from "yargs";
import tar from "tar-stream";
import { OpenAPIV3 } from "openapi-types";
import slugify from "slugify";
import prettier from "prettier";
import { mdProcessor, htmlProcessor, fromMarkdown } from "./processors";
import {
  root,
  paragraph,
  html as htmlNode,
  list,
  listItem,
} from "mdast-builder";
import { Parent } from "unist";

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

const build = (p: OpenAPIV3.ParameterObject): Parent => {
  const nodes: any = [];
  nodes.push(
    htmlNode(
      `<h3 id="${p.name.toLowerCase()}">${p.name}</h3>`
    )
  );

  if (p.description) {
    nodes.push(paragraph(fromMarkdown(p.description)));
  }

  return listItem(nodes);
};

const main = async (argv: any) => {
  const spec = (await $RefParser.dereference(
    JSON.parse(readFileSync(argv.spec).toString()) as OpenAPIV3.Document
  )) as OpenAPIV3.Document;

  const pack = tar.pack();

  for (const key in spec.paths!) {
    const path = spec.paths![key];
    for (const method in path) {
      const { parameters } = path[method];

      if (parameters) {
        const regionTag = `maps_http_parameters_${slugify(key)
          .toLowerCase()
          .replace(/(v1|mapsapi|json)/g, "")}`;
        const nodes: any = [];

        parameters.sort(
          (a: OpenAPIV3.ParameterObject, b: OpenAPIV3.ParameterObject) => {
            if (a.required && b.required) {
              return a.name < b.name ? -1 : 1;
            } else if (a.required) {
              return -1;
            } else if (b.required) {
              return 1;
            } else {
              return a.name < b.name ? -1 : 1;
            }
          }
        );

        const required = parameters.filter(
          (p: OpenAPIV3.ParameterObject) => p.required
        );

        const optional = parameters.filter(
          (p: OpenAPIV3.ParameterObject) => !p.required
        );

        if (required.length) {
          nodes.push(
            htmlNode('<h2 id="required-parameters">Required parameters</h2>')
          );
        }
        nodes.push(list("unordered", required.map(build)));

        if (required.length) {
          nodes.push(
            htmlNode('<h2 id="optional-parameters">Optional parameters</h2>')
          );
        } else {
          nodes.push(htmlNode('<h2 id="parameters">Parameters</h2>'));
        }
        nodes.push(list("unordered", optional.map(build)));

        const markdown = mdProcessor.stringify(root(nodes));
        // write markdown file
        pack.entry(
          {
            name: `documentation/parameters/${regionTag}.md`,
          },
          `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${markdown}\n<!--- [END ${regionTag}] -->`
        );

        const html = await htmlProcessor.process(markdown);
        // write html file
        pack.entry(
          {
            name: `documentation/parameters/${regionTag}.html`,
          },
          prettier.format(
            `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${html}\n<!--- [END ${regionTag}] -->`,
            { parser: "html" }
          )
        );
      }
    }
  }

  pack.finalize();
  pack.pipe(createWriteStream(argv.output));
};

main(argv);
