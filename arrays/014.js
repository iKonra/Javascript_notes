// Arreglos o arrays, sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10, 20, 30, 40, 50];

// Usando new
// const meses = new Array("Enero","Febrero","Marzo","Abril","Mayo")
const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]
console.log(meses); // Muestra el array todo en una misma fila
console.table(meses) // Lo muestra en formato tablas
const arreglo = ["Hola", 10, true, "Si", null, {nombre: "Conra", trabajo: "Programador"},[1, 2, 3]];
// Puede tener todo tipo de valores

// Acceder a los valores de un arreglo
 console.log(numeros[4]); // Se usa el indice
// Conocer la extension de un arreglo
console.log(meses.length)
// Iteramos todos los elementos de un arreglo
meses.forEach( function(mes) {
    console.log(mes)
})

numeros[5] = 60; // Si se pone una posicion que no existe la agrega si es una que existe la reemplaza

numeros.push(100, 70, 30); // Agrega al final los numeros
numeros.unshift(-10,-20,-30) // Agrega al principio los numeros

//? meses.pop(); // Elimina el ultimo elemento de un arreglo
//? meses.shift(); // Elimina el primer elemento 

meses.splice(2, 1); // Recorre el valor hasta el indice 2 y borra 1 elemento(asimismo)

console.table(meses);


// Rest Operator o Spread Operator - Se convierte en buenas practicas
// Ya que esta mal visto modificar el arreglo original

const nuevoarreglo = [...meses, "Junio"]; // Agregar al final
const nuevoarreglo2 = ["Junio", ...meses]; // Agregar al principio

console.log(nuevoarreglo2);