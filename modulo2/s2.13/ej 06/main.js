'use strict';
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const continuar = document.querySelector('.continue');
const time = document.querySelector('.time');
let counter = 0;
let temp;
let activo=false;


function incrementAndShowCounter () {
  counter++;
  time.innerHTML = counter;
  }

function stopFunction () {
  if (activo===true) {
    activo=false;
    clearInterval(temp);
  }

}

function continueFunction () {
  if(activo===false) {
    activo= true;
    temp = setInterval(incrementAndShowCounter, 1000); 
  }
  else {
    console.log('magia,el contador ya está activo');
  }
}

stop.addEventListener('click',stopFunction);
continuar.addEventListener('click',continueFunction);
  