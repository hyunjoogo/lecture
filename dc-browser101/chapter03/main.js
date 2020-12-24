const clickBox = document.querySelector(".clickbox");
const playBtn = document.querySelector(".playBtn");
const carrot = document.querySelector(".carrot");
const bug = document.querySelector(".bug");

// Item 생성
function makeItem() {
  for (let i = 0; i < 8; i++) {
    const carrotImg = new Image();
    carrotImg.src = "img/carrot.png";
    carrotImg.setAttribute("class", "carrot");
    carrotImg.style.left = `${getRandomInt(0, 520)}px`;
    carrotImg.style.top = `${getRandomInt(0, 110)}px`;
    clickBox.appendChild(carrotImg);
  }

  const randomBug = getRandomInt(5, 10);
  for (let i = 0; i < randomBug; i++) {
    const bugImg = new Image();
    bugImg.src = "img/bug.png";
    bugImg.setAttribute("class", "bug");
    bugImg.style.left = `${getRandomInt(0, 520)}px`;
    bugImg.style.top = `${getRandomInt(0, 110)}px`;
    clickBox.appendChild(bugImg);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spreadItem() {
  getRandomInt();
  console.log(getRandomInt(5, 10));
}

playBtn.addEventListener("click", makeItem);
