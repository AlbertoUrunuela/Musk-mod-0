const rl = require("readline-sync");

const matrizEntrada = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]

];

function esCorrecto(matriz) {

    if (!Array.isArray(matriz) || matriz.length === 0) {

        console.log("La matriz no es válida o está vacía");

        return false;
    }

    return true;

    }


function matrizTraspuesta(matriz) {

  const filas = matriz.length;

  const columnas = matriz[0].length;
  
  const traspuesta = [];

  for (let i = 0; i < columnas; i++) {

    let fila = [];

    for (let j = 0; j < filas; j++) {

      fila.push(matriz[j][i]);
    }

    traspuesta.push(fila);
  }

  return traspuesta;
}

if (esCorrecto(matrizEntrada)) {

    console.log("Matriz de entrada:");

    console.log(matrizEntrada);

    const resultado = matrizTraspuesta(matrizEntrada);

    console.log("Matriz traspuesta:");
    
    console.log(resultado);
}