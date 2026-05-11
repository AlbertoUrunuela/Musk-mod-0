const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function esCorrecto(texto) {

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

function encontrarRepetidas(texto) {

  const palabras = texto.toLowerCase().split(" ");

  const conteo = {};

  const repetidas = [];

  for (let i = 0; i < palabras.length; i++) {

    const palabra = palabras[i];

    if (conteo[palabra] === undefined) {

      conteo[palabra] = 1;

    } else {

      conteo[palabra]++;
    }
  }

  for (let palabra in conteo) {

    if (conteo[palabra] > 1) {

      repetidas.push(palabra);

    }
  }

  return repetidas;
}

function preguntar() {

  rl.question("Introduce un texto: ", function (texto) {

    if (!esCorrecto(texto)) {

      preguntar(); 

      return;
    }

    const palabrasRepetidas = encontrarRepetidas(texto);


    if (palabrasRepetidas.length === 0) {

      console.log("No hay palabras repetidas.");

    } else {

      console.log("Se repiten las siguientes palabras: " + palabrasRepetidas.join(", "));
    }

    rl.close();
  });
}

preguntar();