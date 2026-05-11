const readLine = require("readline-sync"); 

const num = readLine.question("Introduce un número: ");

let resultado = 0;

for(let i = 1; i <= 10; i++){

    resultado = num*i;

    console.log(num + " x " + i + " = " + resultado);
}

