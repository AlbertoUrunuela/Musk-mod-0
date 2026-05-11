function longitudCircunferencia(radio){

    var longitud = 2 * Math.PI * radio;

    if (radio <= 0 || isNaN(radio)){

        console.log("El número introducido no es válido, introduce un radio válido");

        return false;

    } else {

    console.log("La longitud de la circunferencia es " + longitud);

    return true;

    }
} 

    let correcto = false;

do{
const readLine = require("readline-sync");

const radio = readLine.question("Introduce el radio de la circunferencia: ");

correcto = longitudCircunferencia (radio);

} while(!correcto);