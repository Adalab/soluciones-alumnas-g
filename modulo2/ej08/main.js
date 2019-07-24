'use strict';

const button1 = document.querySelector('.btn--1');
const button2 = document.querySelector('.btn--2');

function changeButton(event) {
    const newStatus = event.currentTarget;
    newStatus.classList.toggle('change__btn');
}

button1.addEventListener('click', changeButton);
button2.addEventListener('click', changeButton);