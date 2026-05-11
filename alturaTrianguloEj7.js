const readLine = require("readline-sync");

const altura = readLine.question("Introduce la altura del triángulo: ");

for (let i=1; i<=altura; i++){

    let triangulo = "";

    for(let j=1; j<=altura - i; j++){

        triangulo += " ";
    }

    for(let k=1; k<=(2*i-1); k++){

        triangulo += "*";
    }

    console.log(triangulo);
}