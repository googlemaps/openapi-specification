/**
 * Copyright 2021 Google LLC
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

import { options } from "yargs";
import { OpenAPIV3 } from "openapi-types";
import fs from "fs";

const argv = options({
  spec: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = (argv) => {
  const spec = JSON.parse(
    fs.readFileSync(argv.spec).toString()
  ) as OpenAPIV3.Document;

  const schemas = spec.components!.schemas!;
  
  Object.keys(schemas).forEach((key) => {
    const schema = schemas[key] as OpenAPIV3.SchemaObject;
    if (schema.title !== key) {
      throw `Schema Title - Expected: ${key}, Actual: ${schema.title}`
    }

    if (!schema.title.match(/^([A-Z][a-zA-Z0-9]*)$/)) {
      throw `Schema Title - Expected PascalCase format, Actual: ${schema.title}`
    }

  });
};

main(argv);
