const readLine = require("readline-sync");

const num = readLine.question("Introduce un número: ");

let factorial = 1;

 for (let i = 1; i <= num; i++){

	factorial = factorial*i;
 } 
 
 console.log("El factorial de " + num + " es igual a " + factorial);