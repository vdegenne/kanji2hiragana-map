import {writeFile} from 'node:fs/promises';
import {RI} from 'japanese-data-module/full';
import w5 from 'japanese-data-module/full/word-jlpt5.json' with {type: 'json'};
import w4 from 'japanese-data-module/full/word-jlpt4.json' with {type: 'json'};
import w3 from 'japanese-data-module/full/word-jlpt3.json' with {type: 'json'};
import w2 from 'japanese-data-module/full/word-jlpt2.json' with {type: 'json'};
import w1 from 'japanese-data-module/full/word-jlpt1.json' with {type: 'json'};

const words = [...w5, ...w4, ...w3, ...w2, ...w1];

const map = words.reduce((acc, item) => {
	acc[item[RI.WORD]] = item[RI.HIRAKATA];
	return acc;
}, {});

await writeFile('data-sources/jdm.json', JSON.stringify(map));
