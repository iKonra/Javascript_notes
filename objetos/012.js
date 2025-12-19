"use strict"; // Corre Javascript en modo estricto - Si o si buenas practicas
// Objetos

const producto = {
    NombreProducto : "Monitor 20 pulgadas",
    precio : 200,
    disponible : true,
}

Object.freeze(producto); // Freezeo el producto para que no se puedan agregar mas propiedades
// Tampoco se pueden eliminar, ni cambiar valores
console.log(Object.isFrozen(producto)) // Esta freezeado?

Object.seal(producto); // No permite agregar ni eliminar pero si se puede modificar
console.log(Object.isSealed(producto))

// Seal si permite modificar
// frezee no
// Los dos no permiten agregar ni eliminar propiedades