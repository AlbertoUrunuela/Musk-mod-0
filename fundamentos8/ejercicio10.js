const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,
});

function secuenciaBalanceada(texto){

    const pares = new Map();
pares.set(")", "(");
pares.set("]", "[");
pares.set("}", "{");

    let pila = [];

    for(let secuencia of texto){

        if(secuencia === "(" || secuencia === "{" || secuencia === "["){

            pila.push(secuencia);
        }
        if(secuencia === ")" || secuencia === "}" || secuencia === "]"){

            if(pila.length === 0){

                console.log("La secuencia es incorrecta")

                return;
            }
            let ultimo = pila.pop();

        if(ultimo !== pares.get(secuencia)){

        console.log("La secuencia es incorrecta");

     return;
}
        }
    }
    if(pila.length === 0){

        console.log("La secuencia es correcta");
    }else{

       console.log("La secuencia es incorrecta");
        
    }

}

    function esCorrecto(texto){

    let correcto = true;

    for(let entrada of texto){

        if(entrada != "(" && entrada != ")" && entrada != "{" && entrada != "}" && entrada != "[" && entrada != "]"){

            return false;
        }
    }

    return true;
}

    function preguntar(){

    rl.question("Introduce un texto: ", function (texto) {

    if (!esCorrecto(texto)) {

        console.log("El texto solo debe incluir paréntesis, corchetes y llaves");  
        preguntar(); 

      return;
    } else{

         secuenciaBalanceada(texto);

    }
    rl.close();
  });
}

    preguntar();