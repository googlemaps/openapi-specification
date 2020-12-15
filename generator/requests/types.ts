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

import { RequestBody, Request as Request_, Url } from "postman-collection";

// TODO current Request.definition is incorrect and requires fields
interface Options extends Partial<Request_.definition> {
  url: Url | string;
}

export class Request extends Request_ {
  constructor(options: Options) {
    if (typeof options.url === "string") {
      options.url = new Url(options.url);
    }

    if (options.url.getQueryString().indexOf("key=") == -1) {
      options.url.addQueryParams({ key: "key", value: "YOUR_API_KEY" });
    }

    options.url = options.url.toString();

    super(options as Request_.definition);
  }
}

interface PostJsonOptions extends Options {
  json: object;
}

export class PostJsonRequest extends Request {
  constructor(options: PostJsonOptions) {
    options.header = [{ key: "content-type", value: "application/json" }];
    options.method = "POST";

    options.body = {
      mode: "raw",
      raw: JSON.stringify(options.json, null, 2),
    } as RequestBody.definition;
    
    super(options);
  }
}

export interface SnippetRequest {
  request: Request;
  regionTag: string;
}
