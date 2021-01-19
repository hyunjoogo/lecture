"use strict";

const addTodos = document.querySelector(".todoform");
const pendingTodo = document.querySelector(".pendingtodo");
const finishedTodo = document.querySelector(".finishedtodo");

let toDos = JSON.parse(localStorage.getItem("PENDING")) || [];
let finishToDos = JSON.parse(localStorage.getItem("FINISHED")) || [];
let idNumbers = 1;

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("input").value;
  const newId = idNumbers;
  idNumbers += 1;
  const todo = {
    text: text,
    done: false,
    id: newId,
  };
  toDos.push(todo);
  localStorage.setItem("PENDING", JSON.stringify(toDos));
  fillList(toDos, pendingTodo);
  this.reset();
}

function fillList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => {
      return `
  <li data-index=${i}>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      } />
    <span data-index=${i}>${item.text}</span>
    <button data-index=${i}>🗑</button>
  </li>`;
    })
    .join("");
}

function deleteTodos(e) {
  const target = e.target;
  const targetParent = target.parentNode;
  const ulListName = targetParent.parentNode.className;
  const index = e.target.dataset.index;
  if (ulListName === "pendingtodo") {
    targetParent.remove();
    delete toDos[index];
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo;
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    localStorage.setItem("PENDING", JSON.stringify(toDos));
  } else if (ulListName === "finishedtodo") {
    targetParent.remove();
    delete finishToDos[index];
    const cleanToDos = finishToDos.filter(function (toDo) {
      return toDo;
    });
    console.log(cleanToDos);
    finishToDos = cleanToDos;
    localStorage.setItem("FINISHED", JSON.stringify(finishToDos));
  }
}

function toggleDone(e) {
  const index = e.target.dataset.index;
  if (e.target.matches("button")) {
    deleteTodos(e);
  } else if (e.target.matches("input")) {
    toDos[index].done = !toDos[index].done;
    e.target.parentNode.remove();
    const cleanToDos = toDos.filter(function (a) {
      return a.done === false;
    });
    const moveToDos = toDos.filter(function (a) {
      return a.done === true;
    });
    finishToDos.push(...moveToDos);
    toDos = cleanToDos;
    localStorage.setItem("PENDING", JSON.stringify(toDos));
    localStorage.setItem("FINISHED", JSON.stringify(finishToDos));
    console.log(toDos, finishToDos);
    fillList(toDos, pendingTodo);
    fillList(finishToDos, finishedTodo);
  } else {
    return;
  }
}

function toggleNotDone(e) {
  const index = e.target.dataset.index;
  if (e.target.matches("button")) {
    deleteTodos(e);
  } else if (e.target.matches("input")) {
    finishToDos[index].done = !finishToDos[index].done;
    e.target.parentNode.remove();
    const cleanToDos = finishToDos.filter(function (a) {
      return a.done === true;
    });
    const moveToDos = finishToDos.filter(function (a) {
      return a.done === false;
    });
    toDos.push(...moveToDos);
    finishToDos = cleanToDos;
    localStorage.setItem("PENDING", JSON.stringify(toDos));
    localStorage.setItem("FINISHED", JSON.stringify(finishToDos));
    console.log(toDos, finishToDos);
    fillList(toDos, pendingTodo);
    fillList(finishToDos, finishedTodo);
  } else {
    return;
  }
}

finishedTodo.addEventListener("click", toggleNotDone);
pendingTodo.addEventListener("click", toggleDone);
addTodos.addEventListener("submit", addItem);

fillList(toDos, pendingTodo);
fillList(finishToDos, finishedTodo);
