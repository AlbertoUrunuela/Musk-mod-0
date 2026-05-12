
const arrayUno = [1, 3, 5, 7, 9];

const arrayDos = [7, 9, 11, 13, 15];

const conjunto = new Set(arrayDos);

function elementosRepetidos(conjunto, arrayUno){

   const repetidos = new Set();

   for (let repetido of arrayUno){
    
      if (!conjunto.has(repetido)){

         repetidos.add(repetido);
      }
   }

   if(repetidos.size === 0){

      console.log("Todos los elementos del primer conjunto están en el segundo");

   }else{

    console.log("La diferencia entre ambos conjuntos es: " + JSON.stringify([...repetidos]));

    }

   }

    elementosRepetidos(conjunto, arrayUno);