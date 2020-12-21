"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
// 호이스팅 : var 또는 함수 선언들이 자동적으로 제일 위로 올라가는 것.
// 호이스팅이 된 이후로부터 코드가 나타난 순서대로 된다.
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback (즉각적인 콜백)
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));
// Asynchronous callback (언제 처리할 지 모르는 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
