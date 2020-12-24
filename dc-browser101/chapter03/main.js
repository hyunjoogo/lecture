const clickBox = document.querySelector(".clickbox");
const playBtn = document.querySelector(".playBtn");

// Item 생성
function makeItem() {
  for (let i = 0; i < 8; i++) {
    const carrot = new Image();
    carrot.src = "img/carrot.png";
    carrot.setAttribute("class", "carrot");
    clickBox.appendChild(carrot);
  }
  console.log(getRandomInt(5, 10));
  const randomBug = getRandomInt(5, 10);
  for (let i = 0; i < randomBug; i++) {
    const bug = new Image();
    bug.src = "img/bug.png";
    bug.setAttribute("class", "bug");
    clickBox.appendChild(bug);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function spreadItem(event) {}

playBtn.addEventListener("click", makeItem);
