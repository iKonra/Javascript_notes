// Objetos
const producto = {
    NombreProducto : "Monitor 20 pulgadas",
    precio : 200,
    disponible : true,
}

// console.log(producto.precio);
// console.log(producto.NombreProducto);
// O podemos acceder a las propiedades asi
// console.log(producto["precio"])
// console.log(producto["NombreProducto"])

producto.imagen = 'imagen.jpg' // agregar propiedades

// Eliminar propiedades

delete producto.disponible;

console.log(producto);