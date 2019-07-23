'use strict';

function price (sinIVA) {
    const iVA = sinIVA * (21/100);
    const total = sinIVA + iVA;
    return (`El precio sin IVA: ${sinIVA}, IVA: ${iVA} y Total: ${total}`);
}

const result1 = price (10);
console.log(result1);

const result2 = price (20);
console.log(result2);

const result3 = price (100);
console.log(result3);