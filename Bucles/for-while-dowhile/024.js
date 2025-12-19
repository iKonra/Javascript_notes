// For Loop

for(let i= 1;i<=10;i++)
    // console.log(i);

for(let i=1;i<=100;i++) {
    if(i%2 !== 0) {
        // console.log(i)
    }
}

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

for(let i=0;i<carrito.length;i++) {
    // console.log(carrito[i].nombre)
}

// While loop

let i = 1;
while(i <= 100) {
    i++;
}

// Do While Loop

let j = 100;

do {
    console.log(j)
    j++
} while( j < 10); // La diferencia con el while es que el do while primero hace la primera vuelta y despues
// Evalua