const argv = require('yargs/yargs')(process.argv.slice(2))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla a multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que numero se desea multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Mustra la tala en consola',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;
