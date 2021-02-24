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
import { Request } from "postman-collection";

enum CommentPrefix {
  nodejs = "//",
  go = "//",
  curl = "#",
  python = "#",
  java = "//",
  ruby = "#",
  http = "",
}

enum Extensions {
  nodejs = "js",
  go = "go",
  curl = "sh",
  python = "py",
  java = "java",
  ruby = "rb",
  http = "txt",
}

const SNIPPET_LANG_VARIANTS = [
  ["nodejs", "axios"],
  ["curl", "curl"],
  ["go", "native"],
  ["python", "requests"],
  ["java", "okhttp"],
  ["ruby", "net::http"],
  ["http", "http"],
];

const GENERATOR_OPTIONS = {
  nodejs: {},
  go: {},
  curl: { mulitLine: true, longFormat: false },
  python: { indentCount: 4 },
  java: {},
  ruby: {},
};

const urlSnippet = (request: Request): string => {
  return [
    `https://${request.url.getHost()}${request.url.getPath()}`,
    request.url.getQueryString().split("&").join("\n  &"),
  ].join("\n  ?");
};

const generateSnippet = async (
  lang: string,
  variant: string,
  request: Request,
  options: any
): Promise<string | undefined> => {
  if (lang === "http") {
    if (request.method === "GET") {
      return urlSnippet(request);
    } else {
      return;
    }
  }

  return promisify(generateSnippetCB)(lang, variant, request, options);
};

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
  let prefix = CommentPrefix[lang];

  if (prefix) {
    prefix += " ";
  }

  return `${prefix}[${type} ${regionTag}]`;
};

const main = async (argv: any) => {
  const pack = tar.pack();

  await Promise.all(
    SNIPPET_LANG_VARIANTS.map(([lang, variant]) =>
      REQUESTS.map(async (snippetRequest: SnippetRequest) => {
        const { request, regionTag } = snippetRequest;
        const code = await generateSnippet(lang, variant, request as Request, {
          trimRequestBody: true,
          ...GENERATOR_OPTIONS[lang],
        });

        if (!code) return;

        const snippet = [
          regionTagComment("START", regionTag, lang),
          code,
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
