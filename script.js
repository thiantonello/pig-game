"use strict";

// Selecting elements
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.getElementById("score--1");

const currentPlayer0 = document.getElementById("current--0");
const currentPlayer1 = document.getElementById("current--1");

const backgroundPlayer0 = document.querySelector(".player--0");
const backgroundPlayer1 = document.querySelector(".player--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore, activePlayer, gameFinished, scores;

newGame();

function newGame() {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;

  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  diceElement.classList.add("hidden");

  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  backgroundPlayer0.classList.add("player--active");
  backgroundPlayer1.classList.remove("player--active");

  gameFinished = false;
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  backgroundPlayer0.classList.toggle("player--active");
  backgroundPlayer1.classList.toggle("player--active");
}

btnNew.addEventListener("click", newGame);

btnRoll.addEventListener("click", function () {
  if (!gameFinished) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (!gameFinished) {
    // Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      diceElement.classList.add("hidden");

      gameFinished = true;
    } else {
      switchPlayer();
    }
  }
});
