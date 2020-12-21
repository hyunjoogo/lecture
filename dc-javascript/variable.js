// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
// let 자리에
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디 선언했느냐에 상관없이 제일 위로 올려주는 것
// has no block scope
// 즉, var 쓰지마
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

const now = new Date();
const hours = now.getHours();

function greetingMessage(hours) {
  let result;
  if (0 < hours && hours < 6) {
    result = "잘자요!";
  } else if (5 < hours && hours < 12) {
    result = "좋은 아침입니다!";
  } else if (11 < hours && hours < 14) {
    result = "점심 맛있게 드셨나요?";
  } else if (11 < hours && hours < 18) {
    result = "활기한 하루 되세요!";
  } else {
    result = "좋은 저녁입니다!";
  }
  return result;
}

console.log(greetingMessage(hours));

let counter = 2;
const namea = "ellie";
const numberIncrement = ++counter;
console.log(numberIncrement);
console.log(counter);
namea === "ellie" ? console.log(counter) : "no";

// 안녕하세요! Javascript To-Do list 코딩중에 문제가 생겨서 글 남겨봅니다.

// https://github.com/hyunjoogo/to-do-list
// https://repl.it/@hyunjoogo/to-do-list#todo.js

// 강의 중에는 버튼을 사용했는데
// https://youtu.be/b8sUhU_eq3g?t=1205
// 이쁘게 해볼 겸 유튜브를 참고해서 바꾸려고 해보았습니다.

// 현재 발생되고 있는 이슈는

// 1. 페이지 refresh 이후에 버튼 Value 안의 true/false 값이 변경이 안 됨.
// 하지만 페이지를 refresh 하기 전에는 버튼 Value 안의 true/false 값이 잘 변경됨.
// (예상 : refresh 이후 loadToDos의 문제일듯함. refresh 전에는 작동하는 것을 보아 loadToDos를 하면서 다른 값이 불러지는 듯함. console의 error가 `todo.js:22 Uncaught TypeError: Cannot read property 'done' of undefined` 인것으로 볼 때 localStorage의 값을 잘못 load되는 것으로 보여짐.)

// 2. 페이지 refresh 이후에 할일을 추가하면 data가 다 사라짐.
// (예상 : 역시나 loadToDos의 문제로 봄)

// 새벽에 고민해서 이것저것 해보았는데 object가 어떻게 저장이 되고 저장값을 어떻게 가지고 오는 부분이 숙지가 안된 듯 같습니다.

// 도움주시면 부탁드립니다.

function calculate(command, a, b) {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  const remainder = (a, b) => a % b;
  if ((command = add)) {
    return add(1, 3);
  }
}

console.log(calculate("add", 1, 3));
