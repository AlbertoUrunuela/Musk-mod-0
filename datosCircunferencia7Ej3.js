
    let correcto = false;

function calcularCircunferencia(radio){

     var circunferencia = Math.PI * 2 * radio;

     console.log("La circunferencia es:  " + circunferencia);
     
    }

    function calcularArea(radio){

    var area = Math.PI * radio * radio;

    console.log("El área del círculo es: " + area);
 
}

    function esCorrecto(radio){

        if (radio <= 0 || isNaN(radio)){

        console.log("El número introducido no es válido, introduce un radio válido");

        return false;

    } else {

    return true;

    }}
    do{

    const rl = require("readline-sync");

    const radio = parseInt(rl.question("Introduce el radio: "));

    correcto = esCorrecto(radio); 

    if(correcto){

    calcularCircunferencia(radio);

    calcularArea(radio);
    }
    }while(!correcto);
