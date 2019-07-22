'use strict';

const box = document.querySelector('.container');
const titulo = document.querySelector('.title');
const texto = document.querySelector('.text');
const clase = box.classList.add(prompt("Indica si la clase es warning, error o success, por favor:"));


if (container.classList.contains('warning')) {
    titulo.innerHTML = 'AVISO';
    texto.innerHTML = 'Tenga cuidado, ojooooo';
} else if (container.classList.contains('error')) {
    titulo.innerHTML = 'ERROR';
    texto.innerHTML = 'Ha surgido un error';

} else if (container.classList.contains('success')) {
    titulo.innerHTML = 'CORRECTO';
    texto.innerHTML = 'Los datos son correctos';
} 