"use strict";

// Selecting elements
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

function newGame() {
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;

  diceElement.classList.add("hidden");
}

newGame();

btnNew.addEventListener("click", newGame);

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  console.log(dice);

  diceElement.classList.remove("hidden");

  diceElement.setAttribute("src", changeDiceImage());

  function changeDiceImage() {
    return `./src/img/dice-${dice}.png`;
  }
});
