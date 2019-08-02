'use strict';
//EJERCICIO 10 ->Calculador de modelo de caja

const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const widthInput = document.querySelector('.width');
const paddingInput = document.querySelector('.padding');
const borderInput = document.querySelector('.border');


function boxModel(borderBox, widthNum, paddingNum, borderSizeNum) {
    let contentWidth;
    let boxWidth;

    borderBox = document.getElementById("border-box").checked;
    const contentBox = document.getElementById("content-box").checked;

    widthNum = parseInt(widthInput.value);
    paddingNum = parseInt(paddingInput.value);
    borderSizeNum = parseInt(borderInput.value);

    if (borderBox === true) {
        //borderbox
        contentWidth = widthNum - 2 * paddingNum - 2 * borderSizeNum;
        boxWidth = widthNum;
        result.innerHTML = `Tu modelo es BORDER-BOX.<br> El ancho del contenido es ${contentWidth} px y el ancho total de la caja es ${boxWidth}px`;
    }
    else if (contentBox === true) {
        //contentbox
        contentWidth = widthNum;
        boxWidth = widthNum + 2 * paddingNum + 2 * borderSizeNum;
        result.innerHTML = `Tu modelo es CONTENT-BOX.<br> El ancho del contenido es ${contentWidth} px y el ancho total de la caja es ${boxWidth}px`;
    }
    else {
        result.innerHTML = `Elige tu modelo de caja<br> e introduce los datos de tu caja en px`;
    }
}


btn.addEventListener('click', boxModel);

