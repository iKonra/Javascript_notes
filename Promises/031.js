// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth == true) {
        resolve("Usuario autenticado"); // se cumple
    } else {
        reject("No se pudo iniciar sesion"); // no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// En los promises existen 3 valores
// Pending: No se cumplio pero tampoco se rechazo
// Fullfilled: Ya se cumplio el promise
// Reject: Se rechazo/ No se puede cumplir el promise