const { writeFileSync } = require('fs');
require('colors');

const createFile = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if (listar) {
      console.log('======================'.green);
      console.log('     Tabla del:'.blue, base);
      console.log('======================'.green);
      console.log(consola);
    }

    writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
