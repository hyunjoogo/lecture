const formNumber = document.querySelector(".formNumber");
const inputNumber = formNumber.querySelector("input");

const firstNumber = Math.floor(Math.random() * 10);
const secondNumber = Math.floor(Math.random() * 10);

let randomNumber = { firstNumber, secondNumber };
console.log(randomNumber);

function checkNumber() {
  let userNumber = inputNumber.value;
  userNumber.split();
  console.log(userNumber.split());
}

formNumber.addEventListener("submit", checkNumber);
