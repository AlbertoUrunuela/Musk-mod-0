const rl = require("readline-sync");

let correcto = false;

function esCorrecto(texto) {
    if (typeof texto !== "string" || texto.trim() === "") {

        console.log("El valor no es válido, introduce un texto");

        return false;

  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto)) {

    console.log("El valor no es válido, el texto solo debe contener letras");

    return false;
    
}

     else {

        return true;
    }
}

function esPalindromo(texto) {

  const derecho = texto.toLowerCase().split(" ").join("");

  const alReves = derecho.split("").reverse().join("");

  return derecho === alReves;
}

do {
    let texto = rl.question("Introduce un texto: ");

    correcto = esCorrecto(texto);

    if (correcto) {

        if (esPalindromo(texto)) {

            console.log("Sí es palíndromo");

        } else {

            console.log("No es palíndromo");
        }
    }

} while (!correcto);
