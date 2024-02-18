import kanjis from '../data-sources/kanjis.json' with {type: 'json'};
import jdm from '../data-sources/jdm.json' with {type: 'json'};
import {writeFile} from 'node:fs/promises';

await writeFile(
	'data-sources/mergeds.json',
	JSON.stringify({...kanjis, ...jdm}),
);
