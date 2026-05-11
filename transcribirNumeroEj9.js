const readLine = require("readline-sync");

let num;

let controlador = false;

while (!controlador) {

  num = parseInt(readLine.question("Introduce un número del 0 al 10: "));

  if (num >= 0 && num <= 10) {

    controlador = true;

  }
}

switch (num) {

  case 0:

    console.log("Cero");

    break;

  case 1:

    console.log("Uno");

    break;

  case 2:

    console.log("Dos");

    break;

  case 3:

    console.log("Tres");

    break;

  case 4:

    console.log("Cuatro");

    break;

  case 5:

    console.log("Cinco");

    break;

  case 6:

    console.log("Seis");

    break;

  case 7:

    console.log("Siete");

    break;

  case 8:

    console.log("Ocho");

    break;

  case 9:

    console.log("Nueve");

    break;

  case 10:

    console.log("Diez");

    break;

}
