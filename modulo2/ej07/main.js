'use strict';

const button = document.querySelector('.btn');

function changeButton(event) {
    const newStatus = event.currentTarget;
    newStatus.classList.toggle('change__btn');
}

button.addEventListener('click', changeButton);