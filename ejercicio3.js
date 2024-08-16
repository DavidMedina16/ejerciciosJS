/*Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.*/
function tablaMultiplicacion (a = 0 , x = 0) { /*creamos la funcion y le damos los paramatros */
    let  tabla = []; /*creamos el arreglo vacio en el cual se almacenaran los datos de la tabla*/

    for ( let i = 0; i <= x; i++ ) { /*Iniciamos un ciclo desde 0 hasta 'x' */
        if ( i === 5 ) { /*demos la indicacion de condicionamiento de que si el multiplicador es 5*/
            continue; /* salte este paso del bucle */
        }
        let resultado = a * i; /*Realizamos la multiplicacion de a por i*/
        tabla.push(`${a} * ${i} = ${resultado}`);
    }
    return tabla; /*Devolvemos el arreglo con los resultados almaacenados*/
}

/*Uso*/
console.log(tablaMultiplicacion(1,10).join('\n'));