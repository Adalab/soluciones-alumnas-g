const página = document.querySelector('.page');

function changeColor(event) {
    if (event.keyCode === 82) {
        página.classList.remove('purple');
        página.classList.add('red');


    } else if (event.keyCode === 77) {
        página.classList.remove('red');
        página.classList.add('purple');

    }
}

window.addEventListener('keydown', changeColor);