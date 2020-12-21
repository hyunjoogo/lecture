//1. JSON파일에서 자료 가지고 오기
//2. 자료에 맞게 li 추가하기
"use strict";
// loadItmes() //  1. JSON파일에서 자료를 가지고 와서
//   .then(items => { // 2. JSON 안의 items를 화면에 띄우기
//     displayItems(items);
//     setEventListeners(items;)
//   })
//   .catch(console.log) 1.1 에러시 나오는것

//  fetch("data/data.json") // 외부 JSON을 받아오는 방법, url도 가능하다.
//    data를 성공적으로 받아오면 response라는 오브젝트를 넘겨준다.
//    response의 바디를 .json으로 json의 오브젝트로 변환 (그래야 볼 수 있다)
//   .then((response) => response.json())
//    json의 .items를 가지고 온다. console.log(json)을 바꾸면 된다!
//   .then((json) => json.items)

// Fetch the itens from the JSON file

function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
  <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__tumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  if (key == null || value == null) {
    return;
  }
  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
  // filterItems(items, key, value);
}

// function filterItems(items, key, value) {
//   console.log(items);
//   console.log(key, value);
//   items.forEach((item) => {
//     if (item.dataset[key] === value) {
//       item.classList.remove("invisible");
//     } else {
//       item.classList.add("invisible");
//     }
//   });
// }
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
