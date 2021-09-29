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

import { readFileSync, writeFileSync } from "fs";

import glob from "glob";
import { options } from "yargs";
import path from "path";

const argv = options({
  output: {
    demandOption: true,
    string: true,
  },
}).argv;

const main = (argv) => {
  glob(
    path.join("specification", "parameters", "**", "*.yml"),
    (_: any, files: string[]) => {
      const header = readFileSync("./specification/parameters/_index.yml")
        .toString()
        .split("\n").slice(0, 13).join("\n");

      writeFileSync(
        argv.output,
        [
          header,
          "# WARNING: This file is automatically updated as part of `npm run build`.",
          files
            .filter((file) => !file.endsWith("_index.yml"))
            .map((file) => file.replace("specification/parameters/", ""))
            .map((file) => {
              return `${file
                .replace("/", "_")
                .replace(".yml", "")
                .toLowerCase()}:\n  $ref: "./${file}"`;
            })
            .join("\n"),
        ].join("\n\n")
      );
    }
  );
};

main(argv as any);
