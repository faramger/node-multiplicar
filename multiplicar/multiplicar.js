const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${ base * i }\n`;
        };
        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //let base = 6;
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${ base * i }\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}