// Unir dos objetos con el spread operator

const producto = {
    NombreProducto : "Monitor 20 pulgadas",
    precio : 200,
    disponible : true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}
// Se hace esto ya que las buenas practicas nos dicen que no se deben modificar/mutar
// los datos originales

const nuevoproducto = { ...producto, ...medidas};
console.log(nuevoproducto)