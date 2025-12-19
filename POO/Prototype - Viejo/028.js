// POO

function Producto(nombre,precio,disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new Producto("Monitor de 20 Pulgadas",800,true);
const producto3 = new Producto("Laptop",300,false);
const producto4 = new Producto("Mouse Gamer", 120, true)

// EL prototype nos va a permitir crear funciones que se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}


function Cliente(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
const cliente1 = new Cliente("Conrado","De Napoli")
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`
}



console.log(cliente1.formatearCliente())
console.log(Producto)
console.log(producto2.formatearProducto())