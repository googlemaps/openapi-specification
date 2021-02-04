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
