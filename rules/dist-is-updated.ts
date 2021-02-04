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

import { options } from 'yargs';
import tar from 'tar';
import tmp from 'tmp';
import { compareSync } from 'dir-compare';

const argv = options({
	archive: {
		type: 'string',
		demandOption: true,
	},
	dist: {
		type: 'string',
		demandOption: true,
	},
}).argv;

const main = (argv) => {
	const dir = tmp.dirSync();

	tar.x({
		file: argv.archive,
		sync: true,
		C: dir.name,
	});

	const res = compareSync('dist', dir.name, { compareContent: true });
	if (!res.same) {
		throw `
${JSON.stringify(res, null, 2)}




Please run 'npm run build' to update the dist folder.


		`;
	}
};

main(argv);
