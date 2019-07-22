'use strict'

const namefirst = 'Alexandra';
const namesecond = 'Marta';
const user = prompt('como te llamas');



if (user === namefirst) {
    console.log ('Bienvenida, Alexandra'); 
} else if (user === namesecond) {
    console.log ('Bienvenida, Marta'); 
} else {
    console.log ('Lo siento pero el usuario que has introducido no está registrado');
}