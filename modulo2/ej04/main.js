'use strict';
const container = document.querySelector('.container');

function bajar() {
    if (window.scrollY > 250) {
        container.classList.add("yellow");
        container.classList.remove("red");


    } else {
        container.classList.remove("yellow");
        container.classList.add("red");
    }

}

window.addEventListener('scroll', bajar);