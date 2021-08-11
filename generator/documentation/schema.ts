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
import { OpenAPIV3 } from "openapi-types";
import slugify from "slugify";
import prettier from "prettier";
import { build } from "./build";
import { mdProcessor, htmlProcessor } from "./processors";

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

const main = async (argv: any) => {
  const spec = JSON.parse(
    readFileSync(argv.spec).toString()
  ) as OpenAPIV3.Document;

  const pack = tar.pack();

  for (const key in spec.components!.schemas) {
    const schema = spec.components!.schemas[key];
    const regionTag = `maps_http_schema_${slugify(key).toLowerCase()}`;
    const markdown = mdProcessor.stringify(await build(schema, key, spec, regionTag));
    // write markdown file
    pack.entry(
      {
        name: `documentation/schemas/${regionTag}.md`,
      },
      prettier.format(
        `<!--- This is a generated file, do not edit! -->\n<!--- [START ${regionTag}] -->\n${markdown}\n<!--- [END ${regionTag}] -->`,
        { parser: "markdown" }
      )
    );

    const html = await htmlProcessor.process(markdown);
    // write html file
    pack.entry(
      {
        name: `documentation/schemas/${regionTag}.html`,
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
