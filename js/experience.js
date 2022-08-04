/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

var r = 0;
//Define text to be printed with typing effect
var txt = "Singapore Polytechnic";

function typeWriter(text) {
    //evaluates an expression every 0.3s intervals
    var interval = setInterval(function(){
        if (r < text.length) {
            //Get element by ID and add letter by letter using charAt
            document.getElementById("type_writer").innerHTML += text.charAt(r);
            r++;
        }
    }, 200);
}

typeWriter(txt);

