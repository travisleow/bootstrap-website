/*
  Name: Travis Leow Wenkai
  Admin No: p2227759
  Class: DIT/FT/1A/02
*/

"use strict";

const parallax = document.getElementById('parallax')

window.addEventListener('scroll', function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px"
});