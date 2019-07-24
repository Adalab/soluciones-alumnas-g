'use strict';
const parrafo = document.querySelector('.text');
const container = document.querySelector('.container');


function addParagraph() {
    const text = parrafo.innerHTML;
    const newParrafo = `<p class="text">${text}</p>`;
    container.innerHTML += newParrafo;
}


parrafo.addEventListener('mouseover', addParagraph);