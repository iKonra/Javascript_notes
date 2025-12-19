
// Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo la cancion ${id}`)
    },
    pausar : function() {
        console.log("Pausando...")
    },
    CrearPlaylist : function(nombre) {
        console.log(`Creando playlist ${nombre}`)
    }
}
// O por fuera del objeto se puede agregar tambien
reproductor.borrarCancion = function(id) {
    console.log(`Borrando la cancion ${id}`)
}


reproductor.reproducir(3); // El 3 seria la id de la cancion por ejemplo
reproductor.pausar();
reproductor.borrarCancion(3);
reproductor.CrearPlaylist("Test")