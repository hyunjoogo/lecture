"use strict";
const input = document.querySelector(".insert-text__input");
const list = document.querySelector(".main-content-list");
const trashBtn = document.querySelector(".main-content__icon");
const filterBtn = document.querySelector(".sort-select");

// sort 동작

function filter(e) {
  const filterLists = list.childNodes;
  console.log(e.target.value);
  console.log(filterLists);
}

filterBtn.addEventListener("click", filter);

// li안 버튼 동작내용

function deleteCheck(e) {
  const item = e.target;
  const itemClassName = item.className;
  const deleteli = e.toElement.parentNode.parentNode;
  const lineSpan = item.parentNode.parentNode.querySelector("span");
  switch (itemClassName) {
    case "far fa-trash-alt trash":
      deleteli.classList.add("fall");
      deleteli.addEventListener("transitionend", () => deleteli.remove());
      break;
    case "far fa-circle notdone":
      item.className = "fas fa-check-circle done";
      lineSpan.classList.toggle("check-line");
      deleteli.setAttribute("value", "done");
      break;
    case "fas fa-check-circle done":
      item.className = "far fa-circle notdone";
      lineSpan.classList.toggle("check-line");
      deleteli.setAttribute("value", "notdone");
      break;
    default:
      return;
  }
}

list.addEventListener("click", deleteCheck);

// submit하면 발생하는 이벤트
function addList(event) {
  event.preventDefault();
  const text = input.value;
  // li 추가
  const li = document.createElement("li");
  li.setAttribute("class", "main-content-item");
  li.setAttribute("value", "notdone");
  list.appendChild(li);
  // li 안에 completeBtn 추가
  const completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "main-content__check");
  completeBtn.innerHTML = '<i class="far fa-circle notdone"></i>';
  li.appendChild(completeBtn);
  // li 안에 input 내용 추가
  const span = document.createElement("span");
  span.setAttribute("class", "main-content__text");
  span.innerText = text;
  li.appendChild(span);
  // li 안에 trashBtn 추가
  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "main-content__icon");
  trashBtn.innerHTML = '<i class="far fa-trash-alt trash"></i>';
  li.appendChild(trashBtn);
  input.value = "";
}

document.addEventListener("submit", addList);
