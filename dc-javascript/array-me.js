"use strict";

// Array🎉

// 1. Declaration 배열 선언 방법
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 인덱스로 접근 방법
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 콘솔로그에 보면 어느정도 나와있다.

// 3. Looping over an array
console.log(fruits[0], fruits[1]);

// fruits을 나열하는 방법
// for로 i를 0부터 시작해서 fruits의 길이보다 작으면 출력하고 i를 +1한다.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
// a라는 변수에 fruits 안의 데이터를 한번씩 순차적으로 할당하면서 {}을 실행하게 된다.
for (let a of fruits) {
  console.log(a);
}

// 제일 간단하게 사용하는 방법
// forEach

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy 추가, 제거, 복사
// push : 맨 뒤에 추가
fruits.push("🍓", "🍑");
// pop : 맨 뒤에꺼 제거
fruits.pop();

//unshift : 맨 앞에 추가
//shift : 맨 앞에꺼 제거
fruits.unshift("🍑");
fruits.shift();

//note!!! shift, unshift는 pop,push는 매우 느립니다.

// splice: 아이템을 추가하거나 제거하는거
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1); /* 0부터 사라진다. */
console.log(fruits);
fruits.splice(1, 0, "🍑");
console.log(fruits);

// combine two arrays 두개의 함수를 합치기
// 지정한 배열의 뒤에 합친다.
const fruits2 = ["🍐", "🍉"];
const newFruits = fruits2.concat(fruits);
console.log(newFruits);
console.clear();

// 5. Searching 검색
//indexOf : 그 값이 어디에 있는지, 없으면 -1
// includes : 그 값이 있으면 true, 없으면 false
//lastIndexOf : 같은 값이 있다면 맨 뒤에서 부터 시작해서 확인해줌
// (즉, 2,3번째가 같은 갑이면 indexOf는 2, lastIndexOf는 3)
console.log("🍎", "🍑", "🍓", "🍓", "🍑", "🍋");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.includes("🍓"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🍓"));
console.log(fruits.lastIndexOf("🍓"));
