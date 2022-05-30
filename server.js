const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);

// console.log(__filename);

// const path = require('path');

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

const { add, subtract, divide, multiply } = require('./math');

const additionResult = add(1, 3);
const subtractionResult = subtract(6, 3);
const divisionResult = divide(6, 3);
const multiplicationResult = multiply(6, 3);

console.log(additionResult);
console.log(subtractionResult);
console.log(divisionResult);
console.log(multiplicationResult);