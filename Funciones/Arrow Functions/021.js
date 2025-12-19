// En la declaracion de funciones no se pueden usar arrow functions
// En la sintaxis como variable si

const sumar2 = (n1,n2) => console.log(n1 + n2) // Si solo es una linea las {} son opcionales
sumar2(5, 5);

const aprendiendo = Tecnologia => console.log(`Aprendiendo ${Tecnologia}`)
// Otra caracteristica es que si hay un solo parametro el parentesis es opcional
// Me refiero al parentesis donde iria el argumento (Tecnologia)

aprendiendo("Javascript");



// Texto para trabajar con arrow functions

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

// Mas ejemplos de arrows functions: 
meses.forEach( mes => {
    if(mes == "Marzo") {
        console.log("Marzo si existe")
    }
})

resultado = carrito.some( producto => producto.nombre === "Celular") // Si hay un return, se elimina
// Ya que se da por implicito ejemplo este codigo seria: return producto.nombre === "Celular"
// Sin el arrow functions se veria asi:
// resultado = carrito.some(function(producto){
//     return producto.nombre === "Celular"
// })
console.log(resultado)


resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0); 
console.log(resultado)

resultado = carrito.filter(producto => producto.nombre  !== "Notebook");
console.log(resultado);

resultado = carrito.filter(producto => producto.precio <= 300);
console.log(resultado);