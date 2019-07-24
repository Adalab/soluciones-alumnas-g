'use strict';
const button = document.querySelector('.btn');
const texto = document.querySelector('.text');

function changeText() {
    texto.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener('click', changeText);