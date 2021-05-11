const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//
console.clear();
//
/**
//Una forma de obtener los valores de los argumentos
console.log(process.argv);
const [,,arg3 ='base=5'] = process.argv;
const [,base=5] = arg3.split('=');
console.log (arg3);
 */
//
crearArchivo(argv.b, argv.h, argv.l)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));