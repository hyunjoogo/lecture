"use strict";

const inputBtn = document.querySelectorAll("button");

let progress = [];
// 계산하는 함수

function getItem(e) {
  const inputValue = e.target.value;
  saveItems(inputValue);
  console.log(`입력값 : ${inputValue}`);
}

function saveItems(inputValue) {
  const pushProgress = progress.push(inputValue);
  console.log(progress);
  if (inputValue === "=") {
    changeNum();
  }
}

function changeNum() {
  const stringResult = progress.join("");
  console.log(Number(stringResult));
}

inputBtn.forEach((input) => input.addEventListener("click", getItem));

//join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
