"use strict";

const inputBtn = document.querySelectorAll("button");

let Num1Temp = [];
let CheckNum1Temp = false;
let Num2Temp = [];
let CheckNum2Temp = false;

let Operator1Temp = [];
let CheckOperator1Temp = false;
let Operator2Temp = [];
let CheckOperator2Temp = false;

function getItem(e) {
  const inputValue = e.target.value;
  if (e.target.dataset.type === "number") {
    console.log(`입력값 : Number ${inputValue} `);
    checkNum(inputValue);
  } else if (e.target.dataset.type === "operator") {
    console.log(`입력값 : Operator ${inputValue} `);
    checkOperator(inputValue);
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
    } else if (CheckOperator1Temp === false) {
      // 숫자1 두번째 이상 눌렸을 때
      const pushNum1Temp = Num1Temp.push(inputValue);
      console.log(
        `${Num1Temp}를 숫자1에 저장, ${CheckNum1Temp}, 숫자1 : ${Num1Temp}`
      );
    }
  } else if (CheckNum1Temp === false) {
    const pushNum1Temp = Num1Temp.push(inputValue);
    CheckNum1Temp = !CheckNum1Temp;
    console.log(
      `${Num1Temp}를 숫자1에 저장, ${CheckNum1Temp}, 숫자1 : ${Num1Temp}`
    );
  }
}

function checkOperator(inputValue) {
  if (CheckNum1Temp === true) {
    if (CheckOperator1Temp === true) {
      if (CheckNum2Temp === true) {
        console.log("계산해줘");
        calculate(inputValue);
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

function calculate(inputValue) {
  const resultNum1 = Number(Num1Temp.join(""));
  const resultOperator1 = Operator1Temp.join("");
  const resultNum2 = Number(Num2Temp.join(""));
  console.log(resultNum1);
  console.log(resultOperator1);
  console.log(resultNum2);
  console.log(`${resultNum1}${resultOperator1}${resultNum2}`);
}
inputBtn.forEach((input) => input.addEventListener("click", getItem));
