const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

console.clear();

createFile(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName, ' ha sido creado '.bgGreen))
  .catch((err) => console.log(err));
