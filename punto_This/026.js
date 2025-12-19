// This

const reservacion = {
    nombre: "Conrado",
    apellido: "De Napoli",
    total: 4000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y tiene que pagar ${this.total}`)
    }
}

reservacion.informacion();

// Ojo, no se pueden hacer con los arrow functions ya que el arrow functions toma la ventana total
// no el objeto
