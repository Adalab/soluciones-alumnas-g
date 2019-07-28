'use strict';
const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';

const name = prompt("¿Cómo te llamas?");
const avatar = prompt('Introduce la url de tu imagen ');

userName.innerHTML = name;
userAvatar.src= (avatar || DEFAULT_AVATAR);
