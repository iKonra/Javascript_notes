// Arrays Methods   

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];

const carrito = [
    {nomre: "Monitor 20 Pulgada", precio: 500},
    {nombre: "Television 50 Pulgadas", precio: 700},
    {nombre: "Tablet", precio: 200},
    {nombre: "Auriculares", precio: 100},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 150},
    {nombre: "Mouse", precio: 50},
    {nombre: "Notebook", precio: 850},
]

// forEach

meses.forEach(function(mes) {
    if(mes == "Marzo") {
        console.log("Marzo si existe")
    }
})

let resultado = meses.includes("Marzo"); // Includes para arreglos planos
console.log(resultado);

// Arreglos de objetos - Some

resultado = carrito.some(function(producto){
    return producto.nombre === "Celular"
})


// Reduce - Para sumar el carrito por ejemplo

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0); // El 0 es el valor inicial en donde comienza la cuenta


// Filter

resultado = carrito.filter(function(producto) {
    return producto.nombre  !== "Notebook"
});


console.log(resultado);