const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function analizarTextos(textoUno, textoDos){

      let primero = contarLetras(textoUno);
      let segundo = contarLetras(textoDos);

      const repetidas = new Set();
      const exclusivasUno = new Set();
      const exclusivasDos = new Set();

      let frecuenciaUno = Array.from(primero);
      let frecuenciaDos = Array.from(segundo);

      let ordenadoUno = busquedaRecursiva(frecuenciaUno);
      let ordenadoDos = busquedaRecursiva(frecuenciaDos);

      for(let [clave, valor] of primero){

      if (segundo.has(clave)){

         repetidas.add(clave);

      }else{

        exclusivasUno.add(clave);

      }
   }

   for(let [clave, valor] of segundo){
    
      if (!primero.has(clave)){

        exclusivasDos.add(clave);

      }
   }

   console.log("Las letras repetidas en ambos textos son: ", JSON.stringify([...repetidas]));

   console.log("Las letras exclusivas del primer texto son: ",JSON.stringify([...exclusivasUno]));

   console.log("Las letras exclusivas del segundo texto son: ", JSON.stringify([...exclusivasDos]));

   console.log("Frecuencia de letras del primer texto: ");

    for(let [letra, repeticionUno] of ordenadoUno){

   console.log(letra + ": " + repeticionUno);
}

  
   console.log("Frecuencia de letras del segundo texto: ");

    for(let [letra, repeticionDos] of ordenadoDos){

   console.log(letra + ": " + repeticionDos);
}
           

}

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
    return conteo;
}

function busquedaRecursiva(lista){

    const subLista1 = [];
    const subLista2 = [];

    if(lista.length <= 1){

    return lista;

}

    const elemento = lista[0];

    for(i = 1; i<lista.length; i++){

    if(lista[i][1] > elemento[1]){

    subLista1.push(lista[i]);

    }else{

    subLista2.push(lista[i]);

}

    }

    return [...busquedaRecursiva(subLista1), elemento, ...busquedaRecursiva(subLista2)];
    
}

function preguntar() {

  rl.question("Introduce el primer texto: ", function (textoUno) {

    if (!esCorrecto(textoUno)) {

      preguntar(); 

      return;

    } else{

      rl.question("Introduce el segundo texto: ", function (textoDos) {

        if (!esCorrecto(textoDos)) {

      preguntar(); 

      return;

      } else {

          const principio = Date.now();

          let analisis = analizarTextos(textoUno, textoDos);

          const final = Date.now();

          rl.close();
          
          console.log("El analisis ha tardado: " + ((final - principio) / 1000) + " segundos en llevarse a cabo");

        }

      });}

      });}

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

          