// let numeroIngresado = parseInt(prompt('Ingresar numero:'));
// let tabla = [];

// for (let i = 1; i <= 10; i++){
//     tabla.push(`${numeroIngresado} x ${i} = ${numeroIngresado * i}`); 
// }

// console.log(tabla);

// ------------------------------------

let numeroIngresado = parseInt(prompt('Ingresar numero:'));
let resultado = 0;
for (let i = 1; i <= numeroIngresado; i++) {
    resultado = resultado + i;
}
console.log(`El resultado de la sumatoria desde 0 hasta ${numeroIngresado} es: ${resultado}`);