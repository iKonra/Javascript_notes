// function sumar(n1,n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);
// console.log(resultado);

let total = 0;

function Agregar_Carrito(precio) {
    return total+= precio;
}

function CalcularImpuesto(total) {
    return 1.15 * total
}

total = Agregar_Carrito(200);
total = Agregar_Carrito(400);
total = Agregar_Carrito(20);

console.log(total);
const TotalAPagar = CalcularImpuesto(total);
console.log(`Total a pagar: ${TotalAPagar}`)
