const carrito = [
    {nombre: "Monitor 20 Pulgada", precio: 500},
    {nombre: "Television 50 Pulgadas", precio: 700},
    {nombre: "Tablet", precio: 200},
    {nombre: "Auriculares", precio: 100},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 150},
    {nombre: "Mouse", precio: 50},
    {nombre: "Notebook", precio: 850},
]

// forEach
carrito.forEach( producto => console.log(producto.nombre))
// Si quieres lista los elementos de un listado o mostrarlos usar forEach
// esta hecho para iterar y mostrar resultados


// map

const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`)
// Si hay que crear un nuevo arreglo es preferible usar map
console.log(arreglo2)