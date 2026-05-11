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

function textoAMatriz(texto) {

  const palabras = texto.split(" ");
  
  const matriz = [];

  let fila = [];

  for (let i = 0; i < palabras.length; i++) {

    fila.push(palabras[i]);

    if (fila.length === 5) {

      matriz.push(fila);

      fila = [];
    }
  }

  
  if (fila.length > 0) {
    
    matriz.push(fila);
  }

  return matriz;
}

do {
    let texto = rl.question("Introduce un texto: ");

    correcto = esCorrecto(texto);

    if (correcto) {
      
        const resultado = textoAMatriz(texto);

        console.log(resultado);
    }

} while (!correcto);