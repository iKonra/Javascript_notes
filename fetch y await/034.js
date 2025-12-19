function obtenerEmpleados() {
    
    const archivo = 'js/empleados.json'
    fetch(archivo)
        .then( resultado => resultado.json())
        .then( datos => {
            const { empleados } = datos;
            empleados.forEach(empleado => {
                console.log(empleado.nombre)

                document.querySelector('.contenido').textContent += ` ${empleado.nombre} `
            });

        })
}
// obtenerEmpleados();

async function obtenerEmpleados2() {
    
    const archivo = 'js/empleados.json'
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
}
obtenerEmpleados2();