"use strict";
//async & await
//clear style of using promise 😊

// 1. async
async function fetchUser() {
  return "ellie";
}

// 원래는 아래대로 해야하는데 async를 사용하면 간편하게 사용가능
//function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("ellie");
//   });
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}
