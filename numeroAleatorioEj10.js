const readline = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 10) + 1;

let intentos = 0;
let num = 0;

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

while (num !== randomNumber) {
    num = parseInt(readline.question("Adivina: "));
    intentos++;
    
    if (num !== randomNumber) {
        console.log("¡Fallo!");
    }
}

console.log(`¡Correcto! Has necesitado ${intentos} intentos`);