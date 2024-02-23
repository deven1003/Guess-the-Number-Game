"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) { 
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Generate multiple glitter elements
    const NUM_GLITTERS = 10;
    for (let i = 0; i < NUM_GLITTERS; i++) {
      const glitter = document.createElement('div');
      glitter.textContent = "✨"; // Glitter emoji
      glitter.classList.add('glitter', 'paper-falling'); // Add falling animation class
      document.body.appendChild(glitter);
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";

  // Remove existing glitter elements
  const existingGlitters = document.querySelectorAll('.glitter');
  existingGlitters.forEach(glitter => glitter.parentNode.removeChild(glitter));
});
