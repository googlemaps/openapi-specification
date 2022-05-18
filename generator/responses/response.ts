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
import {
  createReadStream,
  writeFileSync,
  createWriteStream,
  unlinkSync,
  readFileSync,
} from "fs";
import { exec } from "child_process";
import path from "path";
import prettier from "prettier";
import axios, { AxiosResponse } from "axios";

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
  only: { type: "string" },
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

const executeJSONRequest = async (
  request: string,
  captureError: boolean = false
): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(request, function (error, stdout, stderr) {
      // request failed with non 200 error
      if (error) {
        reject(stderr);
      }

      let response: any;

      try {
        response = JSON.parse(stdout) as any;
      } catch (e) {
        reject(stdout);
        return;
      }
      // might be a 200 but have an error body
      if (response.error && !captureError) {
        reject(stdout);
        return;
      }

      resolve(response);
    });
  });
};

const xmlInsertRegionTags = (destination: string, regionTag: string) => {
  const contents = readFileSync(destination, "utf8");

  const lines = contents.split("\n").filter((value) => value !== "");
  lines.splice(1, 0, `<!-- [START ${regionTag}] -->`);
  lines.push(`<!-- [END ${regionTag}] -->`);
  lines.push("");
  writeFileSync(destination, lines.join("\n"));
};

const response = async (output, regionTag, request, xml = false) => {
  regionTag += "_response";
  console.log(`Generating response for: ${regionTag}, format: ${xml ? "xml" : "json"}`);

  const captureError = /error/i.test(regionTag);
  const captureInvalid = /invalid/i.test(regionTag);

  request = request.replace("YOUR_API_KEY", process.env.GOOGLE_MAPS_API_KEY!);

  if (regionTag.indexOf("binary") !== -1 || xml) {
    // extract the url from the curl snippet (YUCK)
    const match = request.match(/'https(.*)'/g)!;
    const url = match[0].replace(/'/g, "");

    let response: AxiosResponse;
    try {
      // use axios to get the binary data
      response = await axios.get(url, { responseType: "stream" });
    } catch (e) {
      if (e.response.status !== 200 && (captureError || captureInvalid)) {
        response = e.response;
      } else {
        throw e;
      }
    }

    // get the extension from the content-type header
    // ignoring content-disposition since it isn't always available
    const ext = {
      "image/png": "png",
      "image/jpeg": "jpg",
      "application/xml": "xml",
    }[response.headers["content-type"].split(";")[0]];

    if (!ext) {
      throw new Error(
        `Unsupported content-type: ${response.headers["content-type"]}`
      );
    }

    const destination = path.join(output, `${regionTag}.${ext}`);

    // pipe the result stream into a file on disk
    try {
      unlinkSync(destination);
    } catch (e) {}

    const writeStream = createWriteStream(destination);
    response.data.pipe(writeStream);

    // await until download finishes
    await new Promise((resolve, reject) => {
      writeStream.on("finish", () => {
        if (ext === "xml") {
          xmlInsertRegionTags(destination, regionTag);
        }
        resolve(null);
      });

      response.data.on("error", () => {
        reject();
      });
    });
    return;
  }

  // Default JSON response
  const response = await executeJSONRequest(request, captureError);

  const destination = path.join(output, `${regionTag}.yml`);

  writeFileSync(
    destination,
    prettier.format(
      `${header}
        # [START ${regionTag}]
        ${JSON.stringify(response, null, 2)}
        # [END ${regionTag}]
      `,
      { parser: "yaml" }
    )
  );
};
const toArray = (value: string | string[]): string[] => {
  return Array.isArray(value) ? value : [value];
};

const main = async (argv: any) => {
  const skip = toArray(argv.skip ?? []);
  const only = toArray(argv.only ?? []);

  const requests = Object.entries(await extractRequests(argv.archive)).filter(
    ([regionTag]) => {
      if (skip.length && skip.indexOf(regionTag) !== -1) {
        return false;
      }

      if (only.length && only.indexOf(regionTag) === -1) {
        return false;
      }
      console.log(regionTag);
      return true;
    }
  );

  for (let [regionTag, request] of requests) {
    await response(argv.output, regionTag, request, false);

    if (request.match(/\/json\?/g)) {
      await response(
        argv.output,
        regionTag,
        request.replace(/\/json\?/g, "/xml?"),
        true
      );
    }
  }
};

main(argv);
