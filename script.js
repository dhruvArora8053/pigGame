'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//getElementById works exactly same as querySelector but the getElementById is supposed to be a little bit faster than querySelector but that's only relevant if you are selecting like thousands of elements at once.

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
//here we are specifying numbers, not strings but javascript will then automatically convert them to strings to actually display them on the page.

diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6 + 1);

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //   console.log(dice);

  //3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next player
    
  }
});
