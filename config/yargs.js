const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas', opciones)
    .command('crear', 'Crea archivod e texto', opciones)
    .help()
    .argv;

module.exports = {
    argv
}