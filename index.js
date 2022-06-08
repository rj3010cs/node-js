const {
	readFile: readFilePromise
} = require('fs/promises');

const path = require('path');

const { readFile } = require('fs');

readFile(path.join(__dirname, 'files', 'helloworld.txt'), 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
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

readFileFromPromise();


process.on('uncaughtException', (err) => {
	console.log('there is an exception occurred', err);
	process.exit(1);
})