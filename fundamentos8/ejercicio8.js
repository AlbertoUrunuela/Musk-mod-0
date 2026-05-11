const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numeroPrimo(numero){

    let primo = true;

    for(i=2; i<numero; i++){

        if(numero % i === 0){

            primo = false;

            break;
        }
    }

     if(primo === true){

            console.log(numero, "es primo.");
        }else{

            console.log(numero, "no es primo");
        }
}

    function esCorrecto(numero){
        
        let correcto = true;

        return !isNaN(numero);
    }

    function preguntar() {

  rl.question("Introduce un numero: ", (numero) => {
    numero = parseInt(numero);
    if (!esCorrecto(numero)) {

        console.log("Tienes que introducir un número.")

      preguntar(); 

      return;
    } else{

         numeroPrimo(numero);

        rl.close();

    }
  });
}

preguntar();


