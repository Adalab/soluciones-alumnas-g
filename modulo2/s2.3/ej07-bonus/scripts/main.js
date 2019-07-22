'use strict';
//Condición bisiesto ejercicio: cada 4 años desde el 0.
//let currentYear = 2019;
let currentYear = parseInt(prompt("Por favor, introduce el año terrestre en el que estés:"));

if (currentYear === 0) {
    console.log(`Año cero, no había ni dios para inventar los bisiestos.`);
} else if (currentYear % 4 === 0 && !currentYear === 0) {
    console.log(`el siguiente año bisiesto es: ${currentYear}`);
} else if (++currentYear % 4 === 0) {
    console.log(`el siguiente año bisiesto es: ${currentYear}`);
} else if (++currentYear % 4 === 0) {
    console.log(`el siguiente año bisiesto es: ${currentYear}`);
} else if (++currentYear % 4 === 0) {
    console.log(`el siguiente año bisiesto es: ${currentYear}`);
}

//Sin usar ni for ni funciones, es lo único que se me ha ocurrido.