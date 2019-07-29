'use strict';

const usuario = document.querySelector('.user__name');
const imagen = document.querySelector('.user__avatar');
// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
//Avatar y usuario pedidos por pantalla
const nombre = prompt("Por favor, introduce tu nombre de usuario");
const userAvatar = prompt("Por favor, introduce una URL de tu imagen");

usuario.innerHTML = nombre;
imagen.alt = "Avatar del usuario";
imagen.src = userAvatar || DEFAULT_AVATAR;

/*otra forma de añadir/modificar atributos:

variable/const.setAttribute ("atributo", condición);
*/