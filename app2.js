const argv = require('yargs')
    .command('listar', 'Capturar la base', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Funcion para la creacion de un archivo de texto con la tabla definida', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
/*
console.log(argv.base);
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = argv.base;

crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado: ${archivo}`))
    .catch(err => console.log(err));
*/
let comando = argv._[0];
console.log(argv);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}