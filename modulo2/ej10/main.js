'use strict';
const button = document.querySelector('.start__btn');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function addContent() {
    const body = document.querySelector('body');
    body.innerHTML = `<ul class="list">
                        <li class="item i--1">${inception}</li>
                        <li class="item i--2">${theButterFlyEffect}</li>
                        <li class="item i--3">${eternalSunshineOfTheSM}</li>
                        <li class="item i--4">${blueVelvet}</li>
                        <li class="item i--5">${split}</li>    
                    </ul>`;

    const li = document.querySelector('.item');
    const movie_1 = document.querySelector('.i--1');
    const movie_2 = document.querySelector('.i--2');
    const movie_3 = document.querySelector('.i--3');
    const movie_4 = document.querySelector('.i--4');
    const movie_5 = document.querySelector('.i--5');

    function showName(event) {
        const click = event.currentTarget;
        console.log(click.innerHTML);
    }

    movie_1.addEventListener('click', showName);
    movie_2.addEventListener('click', showName);
    movie_3.addEventListener('click', showName);
    movie_4.addEventListener('click', showName);
    movie_5.addEventListener('click', showName);
}


button.addEventListener('click', addContent);