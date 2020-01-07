'use strict';

let init = document.getElementById('random-img');
let inp1 = document.getElementById('input1');
let firstInp = inp1.value;
let inp2 = document.getElementById('input2');
let secondInp = inp2.value;
let firstText = document.getElementById('text1');
let secondText = document.getElementById('text2');
let createMeme = document.getElementById('btn');
let newMeme = document.getElementById('btn-restart');

const memeData = 
  fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
      const memes = response.data.memes;
      const randomNum = Math.floor(Math.random() * memes.length);
      const imgUrl = memes[randomNum].url;
      let memeImg = new Image();
      memeImg.setAttribute('src', imgUrl);
      init.appendChild(memeImg);
    })
    .catch(err => console.log(err));

const createTextOverlay = () => {
  firstText.appendChild(document.createTextNode(inp1.value));
  secondText.appendChild(document.createTextNode(inp2.value));

  inp1.value = "";
  inp2.value = "";
};

const restart = () => window.location.reload();

createMeme.addEventListener('click', createTextOverlay);
newMeme.addEventListener('click', restart);