 const readLine = require("readline-sync"); 

 const input = readLine.question("Introduce un número: ");

 const num = parseInt(input);


 if(isNaN(num)){

      console.log(input, "no es un número");

 } else if (num == 0){

      console.log("No es par ni impar ni positivo ni negativo");
    
 } else if (num > 0 && num % 2 === 0){

      console.log("El número es positivo y par")

 }else if (num < 0 && num % 2 !== 0){

      console.log("El número es negativo e impar")

 }else if (num < 0 && num % 2 === 0){

      console.log("El número es negativo y par")
 }else if (num > 0 && num % 2 !== 0){

      console.log ("El número es positivo e impar")
 }
