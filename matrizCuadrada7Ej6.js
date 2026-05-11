const rl = require("readline-sync");

let correcto = false;

function esCorrecto(n) {

    if (!Number.isInteger(n) || n <= 0) {

        console.log("El valor no es válido, introduce un número entero positivo");

        return false;

    } else {
        return true;
    }
}

function matrizCuadrada(n) {

    let matriz = [];

    let contador = 1;

    for (let i = 0; i < n; i++) {

        let fila = [];

        for (let j = 0; j < n; j++) {

            fila.push(contador);
            
            contador++;
        }
        matriz.push(fila);
    }

    return matriz;
}

do {
    let n = parseInt(rl.question("Introduce el tamaño de la matriz cuadrada: "));

    correcto = esCorrecto(n);

    if (correcto) {

        const matriz = matrizCuadrada(n);
        
        console.log(matriz);
    }

} while (!correcto);
