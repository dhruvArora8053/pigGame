'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//getElementById works exactly same as querySelector but the getElementById is supposed to be a little bit faster than querySelector but that's only relevant if you are selecting like thousands of elements at once.

const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
//here we are specifying numbers, not strings but javascript will then automatically convert them to strings to actually display them on the page.

diceEl.classList.add('hidden');
