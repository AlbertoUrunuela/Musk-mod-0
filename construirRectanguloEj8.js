const readLine = require("readline-sync");

const altura = parseInt(readLine.question("Introduce la altura del rectángulo: "));

const anchura = parseInt(readLine.question("Introduce la anchura del rectángulo: "));

for (let i = 1; i <= altura; i++) {
  let rectangulo = "";

  for (let j = 1; j <= anchura; j++) {
    
    if (i === 1 || i === altura || j === 1 || j === anchura) {

      rectangulo += "*";

    } else {

      rectangulo += " ";

    }
  }

  console.log(rectangulo);
}