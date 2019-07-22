'use strict';
const age = parseInt(prompt('que edad tienes?'));
const name = prompt('cual es tu nombre?');
const daysYear = 365;
const hoursDay = 24;
const hoursInLife = age * daysYear * hoursDay;

const resultado = `${name} ha vivido ${hoursInLife} horas en su vida`;

console.log (resultado);