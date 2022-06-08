const {
	readFile: readFilePromise,
	writeFile: writeFilePromise
} = require('fs/promises');

const path = require('path');

const { readFile, writeFile } = require('fs');

readFile(path.join(__dirname, 'files', 'helloworld.txt'), 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
})

writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
	if (err) throw err;
	console.log('written the file!');
})


const readFileFromPromise = async () => {
	try {
		const response = await readFilePromise(path
			.join(__dirname, 'files', 'lorem.txt'), 'utf-8');
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

const writeFileFromPromise = async () => {
	try {
		const response = await writeFilePromise(path
			.join(__dirname, 'files', 'newfile.txt'), 'replaced text');
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

readFileFromPromise();

writeFileFromPromise();


process.on('uncaughtException', (err) => {
	console.log('there is an exception occurred', err);
	process.exit(1);
})