const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function esAnagrama(palabraUno, palabraDos){

    let mapaUno = new Map();
    let mapaDos = new Map();
    let anagrama = true;

    for(let repetidas of palabraUno){

        if(!mapaUno.has(repetidas)){

                mapaUno.set(repetidas, 1);

        }else{
            
            mapaUno.set(repetidas, mapaUno.get(repetidas) + 1);
        }
    }

    for(let repetidas of palabraDos){

        if(!mapaDos.has(repetidas)){

                mapaDos.set(repetidas, 1);

        }else{
            
            mapaDos.set(repetidas, mapaDos.get(repetidas) + 1);
        }
    }

    for(let [clave, valor] of mapaUno){

        if(!mapaDos.has(clave) || mapaDos.get(clave) !== valor){

            anagrama = false;
        }
        
    }
    if(anagrama === true){

            console.log("Las palabras son anagramas");
        }else{

            console.log("Las palabras no son anagramas");
        }

}

function preguntar() {

    rl.question("Introduce una palabra: ", function (palabraUno) {
        rl.question("Introduce otra palabra: ", function (palabraDos){

            
    if (!esCorrecto(palabraUno, palabraDos)) {

      preguntar(); 

      return;
    } else{

         esAnagrama(palabraUno, palabraDos);

    }
    rl.close();

        })

    })
}
function esCorrecto(palabraUno, palabraDos) {

        const primeraPalabra = palabraUno.trim();
        const segundaPalabra = palabraDos.trim();

  if (typeof palabraUno !== "string" || palabraUno.trim() === "" || typeof palabraDos !== "string" || palabraDos.trim() === "") {

    console.log("El valor no es válido, introduce una palabra");

    return false;

  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(palabraUno) || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(palabraDos)) {

    console.log("El valor no es válido, el texto solo debe contener letras");

    return false;

  } else {
    
    return true;
  }
}

preguntar();