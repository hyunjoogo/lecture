"use strict";

const comForm = document.querySelector(".comForm");
const userForm = document.querySelector(".userForm");
const range = comForm.querySelector("input");
const number = userForm.querySelector("input");
const restart = document.querySelector(".restart");
const restartBtn = restart.querySelector("div");

const gameResult = document.querySelector(".result");
const computerNumber = document.querySelector(".computernumber");
const usernumber = document.querySelector(".usernumber");
const counterText = document.querySelector(".counter");
const errorText = document.querySelector(".errorText");

let comNum;
let userNum;
let gameCounter = 0;

function getComNum() {
  const label = comForm.querySelector("label");
  label.innerText = `0 ~ ${range.value} 사이의 번호를 생성합니다.`;

  const min = 0;
  const max = range.value;
  comNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(comNum);
}

function getUserNum(e) {
  e.preventDefault();
  if (number.value == "") {
    errorText.innerText = "빈칸은 안됩니다";
    return console.log("빈칸");
  } else if (comNum === undefined) {
    errorText.innerText = "번호를 먼저 생성하세요!";
    return console.log("번호 생성안함");
  } else if (e.target[0].value.length > 2) {
    errorText.innerText = "숫자가 너무 길어요!";
    return console.log("세자리 이상");
  }
  range.disabled = true;
  userNum = number.value;
  compareNum(userNum, comNum);
  number.value = "";
}

function compareNum(userNum, comNum) {
  errorText.innerText = "";
  if (userNum < comNum) {
    const compareText = "업 ⬆";
    gameCounter++;
    showUserNum(userNum, compareText);
  } else if (userNum > comNum) {
    const compareText = "다운 ⬇";
    gameCounter++;
    showUserNum(userNum, compareText);
  } else if (userNum == comNum) {
    const compareText = "정답 🎉";
    gameCounter++;
    showUserNum(userNum, compareText);
    endGame("win");
  } else {
    return;
  }
}
function showUserNum(userNum, compareText) {
  if (gameCounter === 5) {
    endGame("lose");
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.innerText = `${gameCounter}번째! `;
  span.innerText = `${userNum} ${compareText}`;
  li.appendChild(span);
  usernumber.appendChild(li);
}

function endGame(result) {
  if (result === "win") {
    gameResult.innerText = "You Win 😘";
  } else if (result === "lose") {
    gameResult.innerText = "You lose 😖";
  }
  computerNumber.innerText = `랜덤번호 ${comNum}`;
  number.readOnly = true;
  restart.classList.add("showing");
}
function restartGame() {
  gameCounter = 0;
  range.disabled = false;
  number.readOnly = false;
  usernumber.textContent = "";
  computerNumber.textContent = "";
  restart.classList.remove("showing");
  gameResult.innerText = "";
}

restartBtn.addEventListener("click", restartGame);
userForm.addEventListener("submit", getUserNum);
comForm.addEventListener("change", getComNum);
