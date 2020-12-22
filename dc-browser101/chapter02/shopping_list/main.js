const input = document.querySelector(".insert-text__input");
const list = document.querySelector(".main-content-list");

function addList(event) {
  event.preventDefault();
  const text = input.value;

  // li 추가
  const li = document.createElement("li");
  li.setAttribute("class", "main-content-item");
  list.appendChild(li);
  // li 안에 completeBtn 추가
  const completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "main-content__check");
  completeBtn.innerHTML = '<i class="fas fa-check complete"></i>';
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
}

document.addEventListener("submit", addList);
