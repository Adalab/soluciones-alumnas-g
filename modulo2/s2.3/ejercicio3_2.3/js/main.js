'use strict';

const numero = 28;


if (numero === 0) {
    console.log('El número es 0')
} else if (numero < 0) {
    console.log('El número es negativo')
} else if ((numero + 2 > 13) && (numero + 2 === 20)) {
    console.log('El número más 2 es: mayor 13 pero menor o igual que 20')
} else if ((numero > 20) && (numero < 50)) {
    console.log('El número es mayor que 20 pero menor que 50')
} else {
    console.log('el número no es 123123125')
}