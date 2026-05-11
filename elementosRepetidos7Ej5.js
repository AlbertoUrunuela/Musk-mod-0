const rl = require("readline-sync");

let correcto = false;

function esCorrecto(array) {

    if (!Array.isArray(array) || array.length === 0) {

        console.log("El array no es válido o está vacío");

        return false;

    } else {
        return true;
    }
}

function elementosRepetidos(array) {

    let repetidos = [];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j] && !repetidos.includes(array[i])) {

                repetidos.push(array[i]);
            }
        }
    }

    if (repetidos.length === 0) {


        console.log("Todos los elementos son únicos");

    } else {
        
        console.log("Los elementos repetidos son: " + repetidos.join(", "));
    }
}

do {
    let elementos = rl.question("Introduce una lista de elementos: ");

    let array = elementos
        .trim()
        .split(/[\s,]+/)
        .filter(e => e !== "");

    correcto = esCorrecto(array);

    if (correcto) {
        elementosRepetidos(array);
    }

} while (!correcto);