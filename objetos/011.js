// Objetos

const producto = {
    NombreProducto : "Monitor 20 pulgadas",
    precio : 200,
    disponible : true,
}

// Forma anterior
// const precioProducto = producto.precio;
// const NombreProducto = producto.NombreProducto // Las "variables" adentro del objeto no son variables
// son propiedades
// console.log(precioProducto);


// Destructuring

const {precio, NombreProducto} = producto; // Tiene que tener el mismo nombre que la propiedad
console.log(precio);

// Tambien se puede hacer con objetos anidados
const usuario = {
    firstName: 'Conrado',
    lastName: 'Ejemplo',
    links: {
    social: {
        twitter: '@ejemplo'
    }
    } 
}
const {twitter} = usuario.links.social