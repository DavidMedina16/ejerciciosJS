/*Realizar una función que nos permita realizar las 4 operaciones aritmeticas: sumar, restar, dividir y multipliciar*/

/*------------------------------------------------------------------------------*/

function ejercicioUno(a = 0, b = 0, operation = "suma") { /*Creamos una funcion en la cual encapsulamos la logica para esto le damos unos parametros a y b*/
    switch (operation) {
        case "suma":
            return console.log(a + b);
        case "resta":
            return console.log(a - b);
        case "multiplicacion":
            return console.log(a * b);
        case "division":
            return console.log(a / b);
        default:
            console.error(`La operacion ${operation} no es valida `)
    }
}

/*Ejecucion de funciones*/

ejercicioUno(2,3, "resta");
