'use strict';

const button = document.querySelector('.btn');
const text = document.querySelector('.text');
const list = document.querySelector('.tasks__list');
const items = list.querySelector('.task');
const add = document.querySelector('.addNew');
const deleteDone = document.querySelector('.deleteDone');

let inputArray = [];
let tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];

/* Función para pintar todas las tareas en la pantalla y añadir un input con su listener a cada uno */

function tareas() {
    let i = 0;
    let completed = 0;
    let notCompleted = 0;
    list.innerHTML = '';

    for (let items of tasks) {
        if (items.completed) {
            list.innerHTML += `<li class = "task line check__${i}"> ${items.name}.  <input type="checkbox" class = "input input__${i}" name="completed" id="check__${i}" checked/></li> `;
            i += 1;
            completed += 1;
        }
        else {
            list.innerHTML += `<li class = "task check__${i}">${items.name}<input type="checkbox" name="completed" id="check__${i}" class=" input input__${i}"/></li> `;
            i += 1;
            notCompleted += 1;
        }
    }

    list.addEventListener('click', check);

    text.innerHTML = `
    En nuestra lista hay ${tasks.length} tareas, de las cuales hemos completado ${completed} y aún nos queda/n ${notCompleted} por terminar.: 
    `;
};

/* Función para que nos asigne la clase completed y nos tache el elemento cuando clickamos en los check */

function check(event) {
    const pepe = event.target;
    console.log(pepe);
    if (event.target.classList.contains('input')) {
        const li = pepe.parentElement;
        let done = 0;
        let notDone = 0;

        li.classList.toggle('line');
        for (let j = 0; j < tasks.length; j++) {
            if (pepe.classList.contains(`input__${j}`)) {
                if (tasks[j].completed) {
                    tasks[j].completed = false;
                }
                else {
                    tasks[j].completed = true;
                }
            }
        }
        for (let items of tasks) {
            if (items.completed) {
                done += 1
            }
            else {
                notDone += 1;
            }
        }

    text.innerHTML = `
    En nuestra lista hay ${tasks.length} tareas, de las cuales hemos completado ${done} y aún nos queda/n ${notDone} por terminar.
    `;
    }

}

/* añadir nueva tarea mediante un prompt */

function addNewtask(event) {
    const newName = prompt('¿Cuál es el tu nueva tarea?');
    if (newName != null) {
        tasks[tasks.length] = { name: newName, completed: false };
        tareas();
    }
}

/* Función para eliminar las tareas completadas */

function deleteTasks() {
    tasks = tasks.filter(function (ok) {
        return ok.completed == false;
    });
    tareas();
}

button.addEventListener('click', tareas);
add.addEventListener('click', addNewtask);
deleteDone.addEventListener('click', deleteTasks);
