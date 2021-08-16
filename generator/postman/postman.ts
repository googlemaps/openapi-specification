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
import { readFileSync } from "fs";

import axios from "axios";
import path from "path";

const argv = options({
  collection: {
    type: "string",
    demandOption: true,
  },
  file: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = async (argv: any) => {
  const data = JSON.parse(
    readFileSync(path.join(__dirname, "../../../", argv.file), "utf8")
  ) as any;
  await axios.put(
    `https://api.getpostman.com/collections/${argv.collection}`,
    {
      collection: data,
    },
    { headers: { "X-API-KEY": process.env.POSTMAN_API_KEY } }
  );
};

main(argv);
