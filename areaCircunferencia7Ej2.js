function areaCircunferencia(radio){

    var area = Math.PI * (radio * radio);

     if (radio <= 0 || isNaN(radio)){

        console.log("El número introducido no es válido, introduce un radio válido");

        return false;

    } else {

     console.log("El área de la circunferencia es " + area);

    return true;

    }

}

    
    let correcto = false;

    do{
const readLine = require("readline-sync");

const radio = readLine.question("Introduce el radio de la circunferencia: ");

correcto = areaCircunferencia (radio);
} while(!correcto);
