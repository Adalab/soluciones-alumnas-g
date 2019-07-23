'use strict';
let claseUsuario = prompt("Introduce la clase del elemento que quieras seleccionar");
console.log("claseusruria",claseUsuario);
function getEl(clase){
    let clasefinal = '.' + clase;
    console.log(clasefinal);
    const result = document.querySelector(clasefinal);
    console.log(result);
    if (result === null){
        console.error("No hay ningun elemento con la clase especificada");
        return "No hay ningun elemento con la clase especificada";

    }else{
        return result;
    }
    
}
console.log(getEl(claseUsuario));
