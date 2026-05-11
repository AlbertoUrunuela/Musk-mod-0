
const crypto = require("crypto");
const { FORMERR } = require("dns");

const lista = [];

for(i = 0; i < 100000; i++){

    lista.push(crypto.randomInt(1000));

}

function busquedaRecursiva(lista){

    const subLista1 = [];
    const subLista2 = [];

    if(lista.length <= 1){

    return lista;

}

    const elemento = lista[0];

    for(i = 1; i<lista.length; i++){

    if(lista[i] < elemento){

    subLista1.push(lista[i]);

    }else{

    subLista2.push(lista[i]);

}

    }

    return [...busquedaRecursiva(subLista1), elemento, ...busquedaRecursiva(subLista2)];
    
}

const principio = Date.now();

let busqueda = busquedaRecursiva(lista);

const final = Date.now();

console.log("El algoritmo quicksort ha tardado " + ((final - principio) / 1000) + " segundos en ordenar 100000 elementos.");