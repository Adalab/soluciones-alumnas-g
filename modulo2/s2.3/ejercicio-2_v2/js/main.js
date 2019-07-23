'use strict';

/* ENUNCIADO: 
Control de acceso
 En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
*/

// Forma 1 si el nombre puede ser Eva o Coco

const nameAdalaber = prompt('¿Cómo te llamas?')
const welcome = document.querySelector('.adalab__login-text');
let result = '';

if ((nameAdalaber === 'Coco') || (nameAdalaber === 'Eva')) {
  result = `Bienvenida, ${nameAdalaber}.`;
}
else {
  result = 'Lo siento pero el usuario que has introducido no está registrado';
}

welcome.innerHTML = result;

// Forma 2 de hacerlo, primero valida si es Coco, si es negativo valida si es Eva y si no, da el mensaje de usuario no registrado (descomentarlo)

// const nameAdalaber = 'Pepa';
// const welcome = document.querySelector('.adalab__login-text');

// if (nameAdalaber === 'Coco') {
//   welcome.innerHTML = (`Bienvenida, ${nameAdalaber}.`);
// }
// else if (nameAdalaber === 'Eva') {
//   welcome.innerHTML = (`Bienvenida, ${nameAdalaber}.`);
// }
// else {
//   welcome.innerHTML = ('Lo siento pero el usuario que has introducido no está registrado');
// }


