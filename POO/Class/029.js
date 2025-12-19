// Clases

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} vale ${this.precio}`
    }
    precioProducto() {
        return this.precio
    }
}

const producto2 = new Producto("Billetera",40);
const producto3 = new Producto("Perfume Nautica", 50);


console.log(producto2);
console.log(producto3);
console.log(producto2.precioProducto())

// Herencia

class Libro extends Producto {
    constructor(nombre,precio,isbn) {
        super(nombre,precio) // Aca van las propiedades que quiero que busque, solo se pone lo que esta
        // en la clase padre
        this.isbn = isbn;
    }
        formatearProducto() {
            return `${super.formatearProducto()} y su isbn es: ${this.isbn}`
    }
}


const libro1 = new Libro("Harry Potter",20000, 39853524);
console.log(libro1)
console.log(libro1.formatearProducto())