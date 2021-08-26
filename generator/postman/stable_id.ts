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
import { readFileSync, writeFileSync } from "fs";

import slugify from "slugify";
import path from "path";

const argv = options({
  output: {
    type: "string",
    demandOption: true,
  },
  file: {
    type: "string",
    demandOption: true,
  },
}).argv;

const traverse = (obj: any, ids: string[] = []) => {
  const replacement = "-";

  if (obj.id && obj.name) {
    ids.push(obj.name.replace(/^[\W]/, "").replace(/[\W]/g, replacement).toLowerCase());
    obj.id = ids.join(replacement);
  }

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      traverse(obj[key], [...ids]);
    }
  });
};

const main = async (argv: any) => {
  const data = JSON.parse(readFileSync(argv.file, "utf8")) as any;

  traverse(data);

  writeFileSync(argv.output, JSON.stringify(data, null, 2));
};

main(argv);
