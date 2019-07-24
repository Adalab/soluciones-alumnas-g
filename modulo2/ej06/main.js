'use strict';

const texto = document.querySelector('.text');
const párrafo = document.querySelector('.paragraph');

function addText(event) {
    párrafo.innerHTML = event.currentTarget.value;
}

texto.addEventListener('keydown', addText);