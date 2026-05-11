const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function palabraInvertida(palabra){

    let pila = [];
    let nuevaPila = [];
    let invertida = "";

    for(let orden of palabra){

        pila.push(orden);

    }

    while(pila.length > 0){

        nuevaPila.push(pila.pop());

    }

    
     invertida = nuevaPila.join("");


    console.log("La palabra invertida es: " + invertida);
}

function preguntar() {

  rl.question("Introduce una palabra: ", function (palabra) {

    if (!esCorrecto(palabra)) {

      preguntar(); 

      return;
    } else{

         palabraInvertida(palabra);

    }
    rl.close();
  });
}

function esCorrecto(palabra) {

        const palabras = palabra.trim();

  if (typeof palabra !== "string" || palabra.trim() === "" || palabra === " ") {

    console.log("El valor no es válido, introduce una palabra");

    return false;

  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(palabra)) {

    console.log("El valor no es válido, la palabra solo debe contener letras");

    return false;

  } else {
    
    return true;
  }
}

preguntar();