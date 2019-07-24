'use strict';
const button = document.querySelector('.btn');
const texto = document.querySelector('.text');

function addName() {
    const nombre = texto.value;
    return console.log(`Hola, ${nombre}`);
}

button.addEventListener('click', addName);