const colors = require('colors');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5, hasta, listar) => {
    return new Promise((resolve, reject) => {
    const fileName = `Tabla de multiplicar del ${base}`;
    let msgFile = ` ** ${fileName} **`;
    let msgConsole = '';
    let msgError = null;
    //
    try {
        for (let c = 1; c <= hasta; c++) {
            msgConsole += `${colors.green(base)} ${'x'.red} ${colors.blue(c)} ${'='.red} ${base * c} \n`;
            msgFile += `\n   ${base} x ${c} = ${base * c}`;
        }
        if (listar){
            console.log('*********************************'.gray);
            console.log(`** ${fileName} **`.random.inverse);
            console.log('*********************************'.gray);
            console.log(msgConsole);
            console.log('*********************************'.gray);
        }
        fs.writeFileSync(`./salida/${fileName}`, msgFile);
    } catch (error) {
        msgError = `Error en proceso: ${error}`;
    }
    (msgError === null)
    ?resolve(`Archivo ${fileName} creado con exito`)
    :reject(`${msgError}`);
});
}

module.exports = {
    crearArchivo
};