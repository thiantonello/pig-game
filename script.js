"use strict";

// Selecting elements
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.getElementById("score--1");

const currentPlayer0 = document.getElementById("current--0");
const currentPlayer1 = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
let currentScore = 0;
let activePlayer = 0;

const scores = [0, 0];

newGame();

function newGame() {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;

  scores[0] = 0;
  scores[1] = 0;

  currentScore = 0;
  activePlayer = 0;

  diceElement.classList.add("hidden");
}

btnNew.addEventListener("click", newGame);

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  console.log(dice);

  diceElement.classList.remove("hidden");

  // diceElement.setAttribute("src", changeDiceImage());
  diceElement.src = changeDiceImage();

  function changeDiceImage() {
    return `./src/img/dice-${dice}.png`;
  }

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // Add currentScore to activePlayer currentScore
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
