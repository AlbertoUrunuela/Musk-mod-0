const readLine = require("readline-sync"); 

const palabra = readLine.question("Introduce una palabra: ");

let vocales = "aeiouAEIOU";
let contador = 0;

for(let i of palabra){

    if(vocales.includes(i)){

        contador++;
    }

}
     console.log(contador); 