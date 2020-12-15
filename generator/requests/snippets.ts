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

import { REQUESTS } from "./requests";
import { SnippetRequest } from "./types";
import { createWriteStream } from "fs";
import { convert as generateSnippetCB } from "postman-code-generators";
import { options } from "yargs";
import { promisify } from "util";
import tar from "tar-stream";

enum CommentForm {
  nodejs = "//",
  go = "//",
  curl = "#",
  python = "#",
  java = "//",
  ruby = "#",
}

enum Extensions {
  nodejs = "js",
  go = "go",
  curl = "sh",
  python = "py",
  java = "java",
  ruby = "rb",
}

const SNIPPET_LANG_VARIANTS = [
  ["nodejs", "axios"],
  ["curl", "curl"],
  ["go", "native"],
  ["python", "requests"],
  ["java", "okhttp"],
  ["ruby", "net::http"],
];

const generateSnippet = promisify(generateSnippetCB);

const argv = options({
  output: {
    type: "string",
    demandOption: true,
  },
}).argv;

const regionTagComment = (
  type: "START" | "END",
  regionTag: string,
  lang: string
) => {
  return `${CommentForm[lang]} [${type} ${regionTag}]`;
};

const main = async (argv: any) => {
  const pack = tar.pack();
  
  await Promise.all(
    SNIPPET_LANG_VARIANTS.map(([lang, variant]) =>
      REQUESTS.map(async (snippetRequest: SnippetRequest) => {
        const { request, regionTag } = snippetRequest;
        const snippet = [
          regionTagComment("START", regionTag, lang),
          await generateSnippet(lang, variant, request, {
            indentCount: 4,
            indentType: "Space",
            trimRequestBody: true,
            followRedirect: true,
          }),
          regionTagComment("END", regionTag, lang),
        ].join("\n");

        pack.entry(
          {
            name: `snippets/${regionTag}/${regionTag}.${Extensions[lang]}`,
          },
          snippet
        );
      })
    ).flat()
  );

  pack.finalize();
  pack.pipe(createWriteStream(argv.output));
};

main(argv);
