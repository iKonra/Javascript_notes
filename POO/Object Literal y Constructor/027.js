// POO

// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500,
}

// Object Constructor
// Esta en las reglas de la programacion que el nombre de una clase siempre empieze en mayuscula
function Producto(nombre,precio,disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new Producto("Monitor de 20 Pulgadas",800,true);
const producto3 = new Producto("Laptop",300,false);
const producto4 = new Producto("Mouse Gamer", 120, true)

