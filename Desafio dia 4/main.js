"use strict";

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 3;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const bgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const textNumber = function (text) {
  document.querySelector(".number").textContent = text;
};

const widthNumber = function (sWidth) {
  document.querySelector(".number").style.width = sWidth;
};

const textScore = function (tScore) {
  document.querySelector(".score").textContent = tScore;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //Quando não há número informado
  if (!guess) {
    displayMessage("Não foi informado nenhum número! ⛔");
    bgColor("#CD853F");

    //Quando o jogador ganha
  } else if (guess === secretNumber) {
    displayMessage("Sim, o número está correto! 👌");
    bgColor("#60b347");
    textNumber(secretNumber);
    widthNumber("65rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Quando o jogador erra
  } else if (guess !== secretNumber) {
    if (score == 3) {
      displayMessage(
        guess > secretNumber
          ? `Não, o número é menor! 👇 Você tem mais ${score - 1} chances.`
          : `Não, o número é maior! 👆 Você tem mais ${score - 1} chances.`
      );
      bgColor("#222");
      textScore(score);
      score--;
    } else if (score == 2) {
      displayMessage(
        guess > secretNumber
          ? `Não, o número é menor! 👇 Você tem mais ${score - 1} chance.`
          : `Não, o número é maior! 👆 Você tem mais ${score - 1} chance.`
      );
      bgColor("#222");
      textScore(score);
      score--;
    } else if (score == 1) {
      displayMessage(
        guess > secretNumber
          ? `Não, o número é menor! 👇 Você só tem a última chance.`
          : `Não, o número é maior! 👆 Você só tem a última chance.`
      );
      bgColor("#222");
      textScore(score);
      score--;
    } else {
      displayMessage("Você perdeu o jogo! 😢");
      bgColor("#FF0000");
      textScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 3;

  displayMessage("Comece a advinhar...");
  bgColor("#222");
  textNumber("?");
  widthNumber("15rem");
  textScore(score);
  document.querySelector(".guess").value = "";
});
