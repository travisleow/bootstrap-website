/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

function calcScrollValue() {
    let scrollProgress = document.getElementById('progress');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    }
    else {
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', function(){
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#87AAAA ${scrollValue}%, #C8E3D4 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;