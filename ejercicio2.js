/*Realizar una función que almacene en un arreglo todos los numeros pares desde a hasta b*/

function numerosPares(a = 0, b = 0) { /*Creamos la funcion y le damos los parametros */
    let pares = []; /*Aca creamos el arreglo en el cual se almacenaran los numeros pares*/

    for (let i = a; i <= b; i++) { /*creamos un ciclo que recorre desde a hasta b*/
        if (i % 2 === 0) { /*verificamos si el numero actual 'i' es par*/
            pares.push(i); /*si 'i' es par se agrega al arreglo*/
        }
    }
    return pares; /*Devolvemos el arreglo que contiene todos los numeros pares entre a y b*/
}

let resultado = numerosPares(0, 100 ); /*damos los parametros del limite entre a y b*/
console.log(resultado); /*imprimimos el resultado*/
