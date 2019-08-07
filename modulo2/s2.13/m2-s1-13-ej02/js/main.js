'use strict';

const p = document.querySelector('.uvas');
let count = 1;


function contador() {
    count++;
    const image = document.createElement('img');
    image.classList.add('small');
    image.src = 'uva.jpeg';
    p.appendChild(image);
    if (count > 12) {
        clearInterval(tarea);
    }
}

const tarea = setInterval(contador, 1000);