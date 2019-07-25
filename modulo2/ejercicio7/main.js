'use strict';
const job = 'developer';
const user = {} //declaro este objeto vacío

user['firstName']= 'Fernando'; //objeto=user
user['lastName']= 'Alonso';
user['age']= 35;
user['job']= job;

console.log(user['firstName']);
console.log(user['lastName']);
console.log(user['age']);
console.log(user['job']);
console.log(user['age']= user['age']+1);


/*
Añadiremos una propiedad llamada firstName y le asignaremos un valor.
Añadiremos una propiedad llamada lastName y le asignaremos un valor.
Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
Añadiremos una propiedad job a la que asignaremos el valor de la constante job
Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
Cambiaremos el nombre del usuario por otro distinto
Aumentaremos en 1 la edad del usuario
Comprobaremos de nuevo que todo sigue funcionando correctamente
*/
