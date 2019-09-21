'use strict'

//clickable elements
const lemon = document.querySelector('.fruit1');
const apple = document.querySelector('.fruit2');
const carrot = document.querySelector('.fruit3');
const pepper = document.querySelector('.fruit4');

//Icons elements
const iconLemon = document.querySelector('.fa-lemon');
const iconApple = document.querySelector('.fa-apple-alt');
const iconCarrot = document.querySelector('.fa-carrot');
const iconPepper = document.querySelector('.fa-pepper-hot');

// function change color lemon
function changeColorLemon(event) {
	const newclass = event.currentTarget.innerHTML;
	if(iconLemon.classList.contains(newclass)) {
		iconLemon.classList.remove(newclass); 
	}else{
		iconLemon.classList.add(newclass); 
	}
}

// function change color apple
function changeColorApple(event) {
	const newclass = event.currentTarget.innerHTML;
	if(iconApple.classList.contains(newclass)) {
		iconApple.classList.remove(newclass); 
	}else{
		iconApple.classList.add(newclass); 
	}
}

// function change color carrot
function changeColorCarrot(event) {
	const newclass = event.currentTarget.innerHTML;
	if(iconCarrot.classList.contains(newclass)) {
		iconCarrot.classList.remove(newclass); 
	}else{
		iconCarrot.classList.add(newclass); 
	}
}

// function change color pepper
function changeColorPepper(event) {
	const newclass = event.currentTarget.innerHTML;
	if(iconPepper.classList.contains(newclass)) {
		iconPepper.classList.remove(newclass); 
	}else{
		iconPepper.classList.add(newclass); 
	}
}

// Add LI click listeners to change fruit colors
lemon.addEventListener('click', changeColorLemon); 
apple.addEventListener('click', changeColorApple); 
carrot.addEventListener('click', changeColorCarrot); 
pepper.addEventListener('click', changeColorPepper); 






