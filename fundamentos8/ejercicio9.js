const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function parentesisBalanceados(texto){

    let pila = [];

    for(let parentesis of texto){

        if(parentesis === "("){

            pila.push(parentesis);
        }
        if(parentesis === ")"){

            if(pila.length === 0){

                console.log("No están balanceados")

                return;
            }
            pila.pop(parentesis);
        }
    }
    if(pila.length === 0){

        console.log("Están balanceados");
    }else{

       console.log("No están balanceados");
        
    }
}

function esCorrecto(texto){

    let correcto = true;

    for(let entrada of texto){

        if(entrada != "(" && entrada != ")"){

            return false;
        }
    }

    return true;
}

function preguntar(){

    rl.question("Introduce un texto: ", function (texto) {

    if (!esCorrecto(texto)) {

        console.log("El texto solo debe incluir paréntesis");  
        preguntar(); 

      return;
    } else{

         parentesisBalanceados(texto);

    }
    rl.close();
  });
}

    preguntar();