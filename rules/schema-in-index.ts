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
import tar from "tar";
import tmp from "tmp";
import fs from "fs";
import path from "path";
import glob from "glob";

const argv = options({
  archive: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = (argv) => {
  const dir = tmp.dirSync();

  tar.x({
    file: argv.archive,
    sync: true,
    C: dir.name,
  });

  const generatedSchemaFiles = fs.readdirSync(
    path.join(dir.name, "documentation", "schemas")
  );

  glob(
    path.join(__dirname, "..", "specification", "schemas", "**", "*.yml"),
    (_: any, files: string[]) => {
      files
        .map(
          (f) =>
            `maps_http_schema_${path
              .basename(f)
              .toLocaleLowerCase()
              .replace(".yml", ".md")}`
        )
        // remove the index files as those are not generated
        .filter((f) => f.indexOf("_index") === -1)
        .forEach((f) => {
          console.log(f);
          if (generatedSchemaFiles.indexOf(f) === -1) {
            throw `
		
Please update specification/schemas/_index.yml to generate ${f}.
		
`;
          }
        });
    }
  );
};

main(argv);
