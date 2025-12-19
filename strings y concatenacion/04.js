// Strings o Cadenas de texto
const tweet = "Hoy estoy aprendiendo a programar en Javascript que epico";  
const producto2 = "Monitor H2";  
const email = "conrado@gmail.com"
// Otras formas
// const producto2 = String('Monitor 30 pulgadas');
// const producto3 = new String('Monitor de 40 pulgadas');


// Length es para saber cuantos caracteres mide
console.log(tweet.length);
console.log(producto2);

// IndexOf Me indica en que posicion esta algo que busco

console.log(tweet.indexOf('Javascript'))
console.log(email.indexOf('@'))
// Si el numero es -1 significa que no se pudo encontrar
// indexOf es Case sensitive

// Includes retorna true or false

console.log(tweet.includes('Javascript')) // Si encuentra = true, sino false
