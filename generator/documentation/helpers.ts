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
import { OpenAPIV3 } from "openapi-types";
import { html as htmlNode } from "mdast-builder";
import { Node } from "unist";

export const isRef = (
  obj:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject
): obj is OpenAPIV3.ReferenceObject => {
  return (obj as OpenAPIV3.ReferenceObject).$ref !== undefined;
};

export const feedbackLinks = (
  key: string,
  type: "schema" | "parameters"
): Node => {
  return htmlNode(
    `
<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/${type}" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[${type}] Bug - ${key}" title="File bug for ${type} on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>`
  );
};
