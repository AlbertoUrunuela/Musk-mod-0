const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function contarLetras(palabras){

        let conteo = new Map();

    for (let repetidas of palabras){

        if(repetidas === " "){

            continue;
        }

        if(!conteo.has(repetidas)){

                conteo.set(repetidas, 1);

        }else{
            
            conteo.set(repetidas, conteo.get(repetidas) + 1);
        }
    }
    console.log("Mapa de frecuencias: ", conteo);
}   
function preguntar() {

  rl.question("Introduce un texto: ", function (texto) {

    if (!esCorrecto(texto)) {

      preguntar(); 

      return;
    } else{

         contarLetras(texto);

    }
    rl.close();
  });
}

 function esCorrecto(texto) {

        const palabras = texto.trim();

  if (typeof texto !== "string" || texto.trim() === "") {

    console.log("El valor no es válido, introduce un texto");

    return false;

  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto)) {

    console.log("El valor no es válido, el texto solo debe contener letras");

    return false;

  } else {
    
    return true;
  }
}

preguntar();

