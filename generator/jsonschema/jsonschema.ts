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

import $RefParser from "@apidevtools/json-schema-ref-parser";
import { OpenAPIV3 } from "openapi-types";
import { options } from "yargs";
import prettier from "prettier";
import slugify from "slugify";
import tar from "tar-stream";
import toJsonSchema from "@openapi-contrib/openapi-schema-to-json-schema";

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
  const spec = (await $RefParser.dereference(
    JSON.parse(readFileSync(argv.spec).toString()) as OpenAPIV3.Document
  )) as OpenAPIV3.Document;

  const pack = tar.pack();

  for (const key in spec.components!.schemas) {
    const schema = spec.components!.schemas[key];
    const jsonSchema = toJsonSchema(schema);
    // write markdown file
    pack.entry(
      {
        name: `jsonschema/${key}.json`,
      },
      prettier.format(JSON.stringify(jsonSchema), { parser: "json" })
    );
  }
  pack.finalize();
  pack.pipe(createWriteStream(argv.output));
};

main(argv);
