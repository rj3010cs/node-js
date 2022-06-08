const {
	readFile: readFilePromise
} = require('fs/promises');

const { readFile } = require('fs');

readFile('./files/lorem.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
})


const readFileFromPromise = async () => {
	try {
		const response = await readFilePromise('./files/lorem.txt', 'utf-8');
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