'use strict';

const isra = document.querySelector('.teacher--isra');
const carlos = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

function faveTeacher(event) {
    const chosenTeacher = event.currentTarget;
    if (chosenTeacher.classList.contains('teacher--selected')) {
        chosenTeacher.classList.remove('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        chosenTeacher.classList.add('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    }

}

isra.addEventListener('click', faveTeacher);
carlos.addEventListener('click', faveTeacher);
nasi.addEventListener('click', faveTeacher);