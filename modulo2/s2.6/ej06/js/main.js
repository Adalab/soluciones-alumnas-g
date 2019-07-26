'use strict';

const pearNumber = document.querySelector('.pear-number');
const sum = document.querySelector('.suma');
const minus = document.querySelector('.resta');
const reset = document.querySelector('.reset');
const btn = document.querySelector('.btn');
const alert = document.querySelector('.alert');

console.log(minus);

const numPeras='';
const cestaPeras = {
    max:40,
    min:0,
    now:39,
    initial:0,
    add1: function(){
        if(this.now<this.max){return this.now+=1;}
        else {return this.now};
    },
    remove1: function(){
        if(this.now>this.initial){return this.now-=1;}
        else {return this.now};
    },
    resetBasket: function(){
       return this.now=this.initial;
    },
}


//esto define la función de que en el h2.pearNumber aparezca la suma 

function addBtn (event){
    const recolecta = cestaPeras.add1();
    pearNumber.innerHTML=recolecta;
};

//esto escucha el click del boton "suma"

sum.addEventListener('click',addBtn);



//esto define la función de que en el h2.pearNumber aparezca la resta 

function restBtn (event){
    const recolecta1 = cestaPeras.remove1();
    pearNumber.innerHTML=recolecta1;
    if (recolecta1===0){
        alerta();
    }
};

//esto escucha el click del boton "resta"

minus.addEventListener('click',restBtn);


//esto define la función de que en el h2.pearNumber aparezca el reseteo 

function resett (event){
    const recolecta2 = cestaPeras.resetBasket();
    pearNumber.innerHTML=recolecta2;
    alerta();
};

//esto escucha el click del boton "resta"

reset.addEventListener('click',resett);


//mensajes de alerta

function alerta(){
    alert.innerHTML ='cuidado, no puedes tener menos peras que cero';
};

