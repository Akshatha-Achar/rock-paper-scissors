"use strict";
const player1_container = document.querySelector(".player1-container");
const player2_container = document.querySelector(".player2-container");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const score1 = document.querySelector(".score1-value");
const score2 = document.querySelector(".score2-value");
const restart = document.querySelector(".restart");
const comment = document.querySelector(".display-text");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const level = document.querySelector(".level-count");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

const arr = ["Rock", "Paper", "Scissors"];

const getRandomCard = () => {
  const index = Math.trunc(Math.random(10) * 3);
  return arr[index];
};

let player1_score = Number(score1.textContent);
let player2_score = Number(score2.textContent);

player1.addEventListener("click", function () {
  img1.classList.remove("hidden");
  img1.src = `src/${getRandomCard()}.png`;
  comment.classList.add("hidden");
});

player2.addEventListener("click", function () {
  img2.classList.remove("hidden");
  const c2 = getRandomCard();
  img2.src = `src/${c2}.png`;
  const c1 = img1.getAttribute("src").split("/").at(-1).split(".").at(0);

  let level_count = Number(level.textContent);
  if (
    (c1 === "Rock" && c2 === "Paper") ||
    (c1 === "Paper" && c2 === "Scissors") ||
    (c1 === "Scissors" && c2 === "Rock")
  ) {
    player2_score += 20;
  } else if (
    (c1 === "Paper" && c2 === "Rock") ||
    (c1 === "Rock" && c2 === "Scissors") ||
    (c1 === "Scissors" && c2 === "Paper")
  ) {
    player1_score += 20;
  }
  score1.textContent = player1_score;
  score2.textContent = player2_score;

  if (level_count !== 5) {
    level.textContent = level_count + 1;
  } else {
    comment.classList.remove("hidden");
    comment.classList.add("winner-text");
    comment.textContent = `Game ended...🚩 ${
      player2_score === player1_score
        ? "It's a draw"
        : player2_score > player1_score
        ? "Player 2 won the game..🥇🎉"
        : "Player 1 won the game..🏆🎉"
    }\n\ Press Restart button to play`;

    comment.style.color = "red";
    img1.classList.add("hidden");
    img2.classList.add("hidden");

    player1_container.removeChild(player1);
    player2_container.removeChild(player2);

    level.textContent = 1;
    player1_score = 0;
    player2_score = 0;
  }
});

restart.addEventListener("click", function () {
  comment.classList.remove("winner-text");
  img1.classList.add("hidden");
  img2.classList.add("hidden");
  player1_container.appendChild(player1);
  player2_container.appendChild(player2);

  score1.textContent = 0;
  score2.textContent = 0;
  level.textContent = 1;
  comment.style.color = "white";
  comment.textContent = "Press Player 1 button to start..🤩";
  player1_score = 0;
  player2_score = 0;
});
