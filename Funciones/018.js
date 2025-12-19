function sumar(numero1, numero2) { // Estos son los parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); // Estos son los argumentos o valores reales

// Expresion de la funcion
const sumar2 = function(numero1, numero2) {
    console.log(numero1 + numero2)
}
sumar2(2, 5);

// Parametros por default en caso de que algun argumento no este presente se da un valor por defecto

function sumar3(numero1 = 10, numero2 = 4) {
    console.log(numero1 + numero2);
}
sumar3(4) // Aca faltaria el numero 2