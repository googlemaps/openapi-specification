import { html as htmlNode, link, text } from "mdast-builder";
import { Node } from "unist";
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

export const isRef = (
  obj:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject
): obj is OpenAPIV3.ReferenceObject => {
  return (obj as OpenAPIV3.ReferenceObject).$ref !== undefined;
};

export const isArray = (
  obj:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject
): obj is OpenAPIV3.ArraySchemaObject => {
  return (obj as OpenAPIV3.SchemaObject).type === "array";
};

export const feedbackLinks = (
  key: string,
  type: "schemas" | "parameters",
  regionTag: string
): Node => {
  let link = "https://github.com/googlemaps/openapi-specification";

  if (type === "schemas") {
    link += `/blob/main/specification/${type}/${key}.yml`;
  } else {
    link += `/tree/main/specification/${type}`;
  }

  regionTag = regionTag.replace(/_/g, "-");

  return htmlNode(
    `
<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-${regionTag}" data-action="edit" style="margin-left: 5px;" href="${link}" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-${regionTag}" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[${type}] Bug - ${key}" title="File bug for ${type} on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>`
  );
};

export const localRefLink = (name: string, spec: OpenAPIV3.Document): Node => {
  const schema = spec.components!.schemas![name] as OpenAPIV3.SchemaObject;
  return link(`#${name}`, schema.title || name, [text(schema.title || name)]);
};

export const sortSchemaProperties = (schema: OpenAPIV3.SchemaObject) => {
  return (a: string, b: string) => {
    if (schema.required) {
      if (
        schema.required.indexOf(a) !== -1 &&
        schema.required.indexOf(b) !== -1
      ) {
        return a < b ? -1 : 1;
      } else if (schema.required.indexOf(a) !== -1) {
        return -1;
      } else if (schema.required.indexOf(b) !== -1) {
        return 1;
      }
    }
    return a < b ? -1 : 1;
  };
};

export const deprecatedAsideNode = (name: string) =>
  htmlNode(
    `<aside class="deprecated"><code>${name}</code> is deprecated.</aside>`
  );
