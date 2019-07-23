'use strict';


const valorA = prompt('Introduce el elemento a seleccionar');
const aviso = document.querySelector('.title');

function getEl(realElement){
    
    if(realElement === ''){
        console.error(`No existe ningún elemento con clase, id o tag llamado ${realElement}`);
    }
    else{
        const element2 = document.querySelector(realElement);
        if(element2 === null){
            console.error(`No existe ningún elemento con clase, id o tag llamado ${realElement}`);           
        }
        else{
            return element2;
        }
    }   
}

const operation = getEl(valorA);

if(operation === undefined){
    aviso.classList.add('resultado');
    aviso.innerHTML = `No ha sido elegido ningún elemento, mira la consola`;
}
else{
    operation.classList.add('resultado');
    operation.innerHTML = `El elemento ha sido seleccionado`;
}