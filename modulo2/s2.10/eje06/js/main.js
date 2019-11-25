'use strict';

const btn = document.querySelector('.btn');

const ENDPOINTdogsList = 'https://dog.ceo/api/breeds/list/all';
const ENDPOINTnumber = 'https://api.rand.fun/number/integer?max=';

let dogArrNames = [];
let totalImgs = [];

function chooseDog() {
fetch(ENDPOINTdogsList)
  .then(response => response.json())
  .then(data => {
    const dogListNames = data.message;
    dogArrNames = Object.keys(dogListNames);
    return dogArrNames.length;
  })
  .then(numBreeds =>
    fetch(`${ENDPOINTnumber}${numBreeds}`)
  )
  .then(response => response.json())
  .then(data => {
    const randomNumber = data.result;
    return dogArrNames[randomNumber];
  })
  .then((breed) => {
    renderDogName(breed);
    const ENDPOINTdogsImages = `https://dog.ceo/api/breed/${breed}/images`;
    return fetch(ENDPOINTdogsImages);
  })
  .then(response => response.json())
  .then(data => {
    totalImgs = data.message;
    return totalImgs.length;
  })
  .then(numImgs =>
    fetch(`${ENDPOINTnumber}${numImgs}`)
  )
  .then(response => response.json())
  .then(data => {
    const randomNumber2 = data.result;
    return totalImgs[randomNumber2];
  })
  .then(imgDog => renderDogImg(imgDog));
}

let currentDogNameElement;
let currentDogImgElement;

function renderDogName(breed) {
  const textBreed = `La raza de perro es ${breed}`;

  if (currentDogNameElement) {
    currentDogNameElement.innerText = textBreed;
  } else {
    const text = document.createElement('h1');
    const textContent = document.createTextNode(textBreed);
    text.appendChild(textContent);
    document.querySelector('body').appendChild(text);
    currentDogNameElement = text;
  }
}

function renderDogImg(imgDog) {
  if (currentDogImgElement) {
    currentDogImgElement.src = imgDog;
  } else {
  const img = document.createElement('img');
  img.src = imgDog;
  img.alt = 'perrete';
  document.querySelector('body').appendChild(img);
  currentDogImgElement = img;
  }
}

//listeners
btn.addEventListener('click', chooseDog);