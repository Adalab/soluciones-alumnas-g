'use strict';

const BIS_YEARS = 4;
const nowYear = parseInt(prompt('¿En qué años estamos?'));
const text = document.querySelector('.year__text');
let resultText;

if (!nowYear) {
  resultText = 'Por favor introduce un año válido';
} else { 
  const calcYear = nowYear % BIS_YEARS;
  let nextYear;

  if (calcYear === 0) {
    nextYear = nowYear + 4;
  } else if (calcYear === 1) {
    nextYear = nowYear + 3;
  } else if (calcYear === 2) {
    nextYear = nowYear + 2;
  } else {
    nextYear = nowYear + 1;
  }
 
  resultText = `El próximo año bisiesto será ${nextYear}`;
}

text.innerHTML = resultText;