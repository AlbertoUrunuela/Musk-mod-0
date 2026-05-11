const rl = require("readline-sync");

let correcto = false;

function esCorrecto(tamaño) {

    if (!Number.isInteger(tamaño) || tamaño <= 0) {

        console.log("El valor no es válido, introduce un número entero positivo");

        return false;

    } else {
        return true;
    }
}

function matrizCuadrada(tamaño) {
  const matriz = [];

  for (let i = 0; i < tamaño; i++) {
    let fila = [];

    for (let j = 0; j < tamaño; j++) {
      fila.push(i * j);
    }

    matriz.push(fila);
  }

  return matriz;
}

do {

    let tamaño = parseInt(rl.question("Introduce el tamaño de la matriz cuadrada: "));

    correcto = esCorrecto(tamaño);

    if (correcto) {

        const resultado = matrizCuadrada(tamaño);

        console.log(resultado);
    }

} while (!correcto);