"use strict";

const inputBtn = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let Num1Temp = [];
let CheckNum1Temp = false;
let Num2Temp = [];
let CheckNum2Temp = false;

let Operator1Temp = [];
let CheckOperator1Temp = false;

function getItem(e) {
  const inputValue = e.target.value;
  if (e.target.dataset.type === "number") {
    console.log(`입력값 : Number ${inputValue} `);
    checkNum(inputValue);
  } else if (e.target.dataset.type === "operator") {
    console.log(`입력값 : Operator ${inputValue} `);
    checkOperator(inputValue);
  } else {
    clearAll(inputValue);
  }
}

function checkNum(inputValue) {
  if (CheckNum1Temp === true) {
    if (CheckOperator1Temp === true) {
      if (CheckNum2Temp === true) {
        //숫자2 두번째
        const pushNum2Temp = Num2Temp.push(inputValue);
        console.log(
          `${Num2Temp}를 숫자2에 저장, ${CheckNum2Temp},숫자1 : ${Num1Temp}, 숫자2 : ${Num2Temp}`
        );
      } else {
        //숫자2 첫번째
        const pushNum2Temp = Num2Temp.push(inputValue);
        CheckNum2Temp = !CheckNum2Temp;
        console.log(
          `${Num2Temp}를 숫자2에 저장, ${CheckNum2Temp},숫자1 : ${Num1Temp}, 숫자2 : ${Num2Temp}`
        );
      }
      fillScreen(Num2Temp);
    } else if (CheckOperator1Temp === false) {
      // 숫자1 두번째 이상 눌렸을 때
      const pushNum1Temp = Num1Temp.push(inputValue);
      console.log(
        `${Num1Temp}를 숫자1에 저장, ${CheckNum1Temp}, 숫자1 : ${Num1Temp}`
      );
      fillScreen(Num1Temp);
    }
  } else if (CheckNum1Temp === false) {
    const pushNum1Temp = Num1Temp.push(inputValue);
    CheckNum1Temp = !CheckNum1Temp;
    console.log(
      `${Num1Temp}를 숫자1에 저장, ${CheckNum1Temp}, 숫자1 : ${Num1Temp}`
    );
    fillScreen(Num1Temp);
  }
}

function checkOperator(inputValue) {
  if (CheckNum1Temp === true) {
    if (CheckOperator1Temp === true) {
      if (CheckNum2Temp === true) {
        console.log("계산해줘");
        transform(inputValue);
      } else {
        //연산자2 없음 => 무시
        return;
      }
    } else if (CheckOperator1Temp === false) {
      //연산자1 없음 => 연산자1에 저장
      const pushOperator1Temp = Operator1Temp.push(inputValue);
      CheckOperator1Temp = !CheckOperator1Temp;
      console.log(`${Operator1Temp}를 연산자1에 저장, ${Operator1Temp}`);
    }
  } else {
    // 숫자1 없음 => 무시
    return;
  }
}

function transform(inputValue) {
  const resultNum1 = Number(Num1Temp.join(""));
  const resultOperator1 = Operator1Temp.join("");
  const resultNum2 = Number(Num2Temp.join(""));
  const totalResult = calculate(resultNum1, resultOperator1, resultNum2); //계산완료
  fillScreen(totalResult);
  console.log(totalResult);
  if (inputValue === "=") {
    clearAll(inputValue);
  } else {
    Num1Temp = [];
    const pushNum1Temp = Num1Temp.push(totalResult);
    Num2Temp = [];
    Operator1Temp = [];
    const pushOperator1Temp = Operator1Temp.push(inputValue);
    console.log(
      Num1Temp,
      CheckNum1Temp,
      Num2Temp,
      CheckNum2Temp,
      Operator1Temp,
      CheckOperator1Temp
    );
  }
}

function fillScreen(a) {
  if (typeof a === "object") {
    screen.innerText = `${Number(a.join(""))}`;
  } else {
    screen.innerText = `${a}`;
  }
}
function clearAll(inputValue) {
  Num1Temp = [];
  CheckNum1Temp = false;
  Num2Temp = [];
  CheckNum2Temp = false;
  Operator1Temp = [];
  CheckOperator1Temp = false;
  if (inputValue === "clear") {
    fillScreen(0);
  }
}
inputBtn.forEach((input) => input.addEventListener("click", getItem));

function calculate(a, command, b) {
  switch (command) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      throw error("unknown command");
  }
}
