const readLine = require("readline-sync");

const num = readLine.question("Introduce un número: ");

const num1 = readLine.question("Introduce otro número: ");

const num2 = readLine.question("Introduce otro número: ");

if (isNaN(num) || isNaN(num1) || isNaN(num2)) {

    console.log("Alguno de los valores introducidos no es un número válido");

}else if (num % 2 === 0 || num1 % 2 === 0 || num2 % 2 === 0) {

	console.log("Hay al menos un numero par");
    
}else {

	console.log("Ningún número es par");
}

