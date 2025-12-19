// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes...")
    
        setTimeout( () => {
            resolve("Los clientes fueron descargados")
        }, 5000)

    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos...")
    
        setTimeout( () => {
            resolve("Los pedidos fueron descargados")
        }, 1000)

    })
}

async function app() {
    console.log("app lista");
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);
    console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app();