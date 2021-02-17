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

import $RefParser from '@apidevtools/json-schema-ref-parser';

import { options } from 'yargs';
import { readFileSync, writeFileSync } from 'fs';
import { OpenAPIV3 } from 'openapi-types';

const argv = options({
	output: {
		type: 'string',
		demandOption: true,
	},
	spec: {
		type: 'string',
		demandOption: true,
	},
}).argv;

export const isRef = (
	obj: OpenAPIV3.ReferenceObject | OpenAPIV3.ArraySchemaObject | OpenAPIV3.NonArraySchemaObject | OpenAPIV3.RequestBodyObject
): obj is OpenAPIV3.ReferenceObject => {
	return (obj as OpenAPIV3.ReferenceObject).$ref !== undefined;
};

const main = async (argv: any) => {
	let schema = JSON.parse(readFileSync(argv.spec).toString()) as OpenAPIV3.Document;

	const dereferencedSchema = (await $RefParser.dereference(argv.spec)) as OpenAPIV3.Document;

	Object.entries(schema.components!.schemas!).forEach(([key, o]) => {
		const deref = dereferencedSchema['components']!['schemas']![key];

		if (isRef(o) || isRef(deref)) return;

		if (o.example) {
			o.example = deref.example;
		}
	});

	for (let path of Object.keys(schema.paths)) {
		for (let method of Object.keys(schema.paths[path]!)) {
			const operationObject: OpenAPIV3.OperationObject = schema.paths[path]![method]!;

			if (operationObject.requestBody && !isRef(operationObject.requestBody)) {
				const requestBody = operationObject.requestBody;

				for (let content of Object.keys(requestBody.content)) {
					const mediaTypeObject: OpenAPIV3.MediaTypeObject = requestBody.content[content]!;
					console.log(content);
					mediaTypeObject.examples = dereferencedSchema.paths[path]![method]!.requestBody!.content![content].examples;
				}
			}
			for (let code of Object.keys(operationObject.responses!)) {
				const responseObject: OpenAPIV3.ResponseObject | OpenAPIV3.ReferenceObject = operationObject.responses![
					code
				]!;
				if (isRef(responseObject)) continue;

				if (responseObject.content) {
					for (let content of Object.keys(responseObject.content)) {
						const mediaTypeObject: OpenAPIV3.MediaTypeObject = responseObject.content[content]!;
						mediaTypeObject.examples = dereferencedSchema.paths[path]![method]!.responses![code]!.content![
							content
						].examples;
					}
				}
			}
		}
	}

	writeFileSync(argv.output, JSON.stringify({ ...schema }, null, 2));
};

main(argv);
