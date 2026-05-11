const rl = require("readline-sync");

let correcto = false;

function sumaNumeros(array) {

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        
        suma += array[i];
    }
    return suma;
}

function mediaNumeros(array) {

    const suma = sumaNumeros(array);

    return suma / array.length;
}

function esCorrecto(array) {

    if (!Array.isArray(array) || array.length === 0) {

        console.log("El array no es válido o está vacío");

        return false;

    } else {
        return true;

    }
}

do {
    let num = rl.question("Introduce una lista de números: ");

    let array = num  
        .trim()
        .split(/[\s,]+/)
        .map(Number)
        .filter(n => !isNaN(n));

    correcto = esCorrecto(array);

    if (correcto) {

        const suma = sumaNumeros(array);

        const media = mediaNumeros(array);

        console.log("La suma de los números es: " + suma);
        console.log("La media aritmética de los números es: " + media);
    }

} while (!correcto);