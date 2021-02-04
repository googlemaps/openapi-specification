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
import tar from "tar-stream";
import { createReadStream, writeFileSync } from "fs";
import { exec } from "child_process";
import path from "path";
import prettier from "prettier";

const header = `# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
`;

const argv = options({
  archive: {
    type: "string",
    demandOption: true,
  },
  output: {
    type: "string",
    demandOption: true,
  },
  skip: { type: "string" },
}).argv;

const extractRequests = async (
  archive: string
): Promise<{ [key: string]: string }> => {
  return new Promise((resolve) => {
    const extract = tar.extract();
    const requests: { [key: string]: string } = {};

    extract.on("entry", function (header, stream, callback) {
      stream.on("data", function (chunk) {
        const match = header.name.match(/snippets\/.*\/(.*)\.sh/);

        if (match) {
          const name = match[1];

          requests[name] = requests[name] || "";
          requests[name] += chunk;
        }
      });

      stream.on("end", function () {
        callback();
      });

      stream.resume();
    });

    extract.on("finish", function () {
      resolve(requests);
    });

    createReadStream(archive).pipe(extract);
  });
};

const executeRequest = async (request: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(request, function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
      }

      const response = JSON.parse(stdout) as any;

      if (response.error) {
        reject(stdout);
        return;
      }

      resolve(response);
    });
  });
};

const main = async (argv: any) => {
  for (let [regionTag, request] of Object.entries(
    await extractRequests(argv.archive)
  )) {
    if (argv.skip.indexOf(regionTag) != -1) continue;

    request = request.replace("YOUR_API_KEY", process.env.GOOGLE_MAPS_API_KEY!);

    const response = await executeRequest(request);

    writeFileSync(
      path.join(argv.output, `${regionTag}.yml`),
      prettier.format(
        `${header}
        # [START ${regionTag}_response]
        ${JSON.stringify(response, null, 2)}
        # [END ${regionTag}_response]
      `,
        { parser: "yaml" }
      )
    );
  }
};

main(argv);
