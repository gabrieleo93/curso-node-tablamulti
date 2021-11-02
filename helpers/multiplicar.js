
const { rejects } = require('assert');
const fs =require('fs');

const crearArchivo = async(base, listar = false, limite = 10) =>{

    try {

        let salida = '';
    
        for( let i = 1; i<= limite; i++){
    
            salida +=`${base} X  ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log('==================');
            console.log('   Tabla del:', base);
            console.log('==================');
            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/Tabla-${ base }.txt`, salida);
    
        return(`Tabla-${ base }.txt creada`); 
    }catch(err){
        return err;
    }



}


module.exports = {
    crearArchivo
}