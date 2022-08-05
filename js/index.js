/*
Name: Travis Leow Wenkai
Admin No: p2227759
Class: DIT/FT/1A/02
*/

"use strict";

const textDisplay = document.getElementById('text');
const phrases = ['Hello!', '你好!', 'வணக்கம்!', '안녕하세요!', 'こんにちは!', 'привет!'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  
  const spedUp = 65;
  const normalSpeed = 250;
  let time;
  if (isEnd)
  time = 1500;
  else if (isDeleting)
  time = spedUp;
  else 
  time = normalSpeed;
  setTimeout(loop, time);
}
loop();


let r = 0;
//Define text to be printed with typing effect
let txt = "About Me.";

function typeWriter(text) {
    //evaluates an expression every 0.3s intervals
    let interval = setInterval(function(){
        if (r < text.length) {
            //Get element by ID and add letter by letter using charAt
            document.getElementById("type_writer").innerHTML += text.charAt(r);
            r++;
        }
    }, 300);
}

//Only execute upon scrolling to that section. This is implemented by using a listener and offsets
document.addEventListener('scroll',function(e){
    if (window.pageYOffset + window.innerHeight > document.querySelector("#first").offsetTop + 200){
        typeWriter(txt);
    }
})
