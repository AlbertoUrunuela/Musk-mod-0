const crypto = require("crypto");

const lista = [];

for(i = 0; i < 100000; i++){

    lista.push(crypto.randomInt(1000));

}

const principio = Date.now();


for(i=0; i < lista.length-1; i++){

for(j=0; j < lista.length-i-1; j++){


 if(lista[j] > lista[j+1]){
            
    let temp = lista[j];

     lista[j] = lista[j+1];

     lista[j+1] = temp;
     
    }
}
}

const final = Date.now();

console.log("El algoritmo bubble sort ha tardado " + ((final - principio) / 1000) + " segundos en ordenar 100000 elementos.");