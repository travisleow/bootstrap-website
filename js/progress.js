/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

function calcScrollValue() {
    let scrollProgress = document.getElementById('progress');
    // Distance scrolled from the top to the page to screen
    let pos = document.documentElement.scrollTop;
    // Getting the height relative to user's resolution
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Getting the percentage value
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // If scroll pos < 100, display nothing
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    }
    else {
        scrollProgress.style.display = 'none';
    }
    // Eventlistener that scrolls back to top on click
    scrollProgress.addEventListener('click', function(){
        document.documentElement.scrollTop = 0;
    });
    // Styling of gradient based on height percentage
    scrollProgress.style.background = `conic-gradient(#87AAAA ${scrollValue}%, #C8E3D4 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;