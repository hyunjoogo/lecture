"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 Promis가 만들어 질 때, executor가 바로 진행된다.
const promise = new Promise((resolve, reject) => {
  console.log("doning something...");
  //바로 안에 있는 콜백함수가 진행이 된다.
  //사용자가 버튼을 눌렀을 때 실행이 되는것이 아니라 바로 진행이다.
  setTimeout(() => {
    resolve("ellie");
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
