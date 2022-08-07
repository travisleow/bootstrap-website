/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

const parallax = document.getElementById('parallax');

// Eventlistener that changes background offset on scroll
window.addEventListener('scroll', function ()
{
  // Getting y-axis offset on scroll
  let offset = window.pageYOffset;
  // Changes the bg y position based on y-axis offset
  parallax.style.backgroundPositionY = offset * 0.8 + "px"
});