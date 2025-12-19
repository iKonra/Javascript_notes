// Funciones

// Declaracion de funcion

function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3)
}
sumar2();

// IIFE - Se invocan se llaman ellas mismas, no se reutilizan, se usan para proteger las variables
// Para que las variables no salgan de ese archivo o se mezclen con otros archivos

(function() {
    console.log("Esto es una funcion")
})();

// Javascript tiene 2 vueltas en una ejecucion
// La primera toma todas las declaraciones de variables y funciones
// Y la segunda ejecuta
// Por lo que si tengo
sumar3();
function sumar3() {
    console.log(20 + 10);
}
// Seria valido ya que en la primera vuelta estaria tomando unicamente la funcion de la linea 29 y despues
// La ejecuta
// caso contrario pasaria si en vez de declarar directo con function uso una variable
sumar4();
const sumar4 = function() {
    console.log(4 + 4)
}
