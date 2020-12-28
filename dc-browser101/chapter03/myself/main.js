"use strict";
const clickBox = document.querySelector(".clickbox");
const playBtn = document.querySelector(".playBtn");
// const carrot = document.querySelector(".carrot");
// const bug = document.querySelector(".bug");

// Item 생성
function makeItem() {
  let arr = [];
  console.log(arr);
  for (let i = 0; i < 8; i++) {
    const carrotImg = new Image();
    carrotImg.src = "img/carrot.png";
    carrotImg.setAttribute("class", "carrot");
    carrotImg.setAttribute("carrotNum", i);
    carrotImg.style.left = `${getRandomInt(0, 520)}px`;
    carrotImg.style.top = `${getRandomInt(0, 110)}px`;
    clickBox.appendChild(carrotImg);
    arr.push(carrotImg);
  }

  const randomBug = getRandomInt(5, 10);
  for (let i = 0; i < randomBug; i++) {
    const bugImg = new Image();
    bugImg.src = "img/bug.png";
    bugImg.setAttribute("class", "bug");
    bugImg.style.left = `${getRandomInt(0, 520)}px`;
    bugImg.style.top = `${getRandomInt(0, 110)}px`;
    clickBox.appendChild(bugImg);
  }

  return arr;
}
// 난수 생성 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
playBtn.addEventListener("click", makeItem);

function startGame(e, arr) {
  const target = e.target;
  if (target.className === "carrot") {
    console.log("continue Game");
    continueGame(arr);
  } else if (target.className === "bug") {
    loseGame();
  } else {
    return;
  }
}

function continueGame(arr) {
  console.log(arr);
}

function loseGame() {
  const body = document.querySelector("body");
  body.insertAdjacentHTML(
    "beforeend",
    `<div class="endbox">
      <div class="regamebox">
        <i class="fas fa-redo regame"></i>
      </div>
      <span class="endbox-text">😢YOU LOSE😢</span>
    </div>`
  );

  const regame = document.querySelector(".regame");
  regame.addEventListener("click", (event) => {
    if (event.target.className === "fas fa-redo regame") {
      console.log("regame");
    } else {
      return;
    }
  });
}

clickBox.addEventListener("click", startGame);
