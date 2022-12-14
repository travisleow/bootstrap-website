/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

const textDisplay = document.getElementById('text');
const phrases = ['Thank you!', '谢谢!', 'நன்றி!', '감사합니다!', 'ありがとうございました!', 'благодарю вас!'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loopWriter() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    // Checks if phrase is not completed
    if (!isDeleting && j <= phrases[i].length) {
      // Adds character to currentPhrase
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    // Checks if phrase is on last character
    if(isDeleting && j <= phrases[i].length) {
      // Removes last character from currentPhrase
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    // Checks if current phrase is complete
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    // Reset currentPhrase array, isDeleting boolean and i value if current phrase is complete
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  let time;
  // Set delay based on different events
  if (isEnd)
  time = 1500;
  else if (isDeleting)
  time = 65;
  else 
  time = 250;
  // Calls loopWriter based on specified time
  setTimeout(loopWriter, time);
}
loopWriter();


var r = 0;
var txt = "Enquiry and Feedback";

function typeWriter(text) {
    //evaluates an expression every 0.3s intervals
    var interval = setInterval(function(){
        if (r < text.length) {
            //Get element by ID and add letter by letter using charAt
            document.getElementById("type_writer").innerHTML += text.charAt(r);
            r++;
        }
    }, 300);
}

//Only execute upon scrolling to that section. This is implemented by using a listener and offsets
document.addEventListener('scroll',function(e){
    if (window.pageYOffset + window.innerHeight > document.querySelector("#first").offsetTop + 120){
        typeWriter(txt);
    }
})

