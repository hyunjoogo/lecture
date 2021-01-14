const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const color = ["#0A174E", "#F5D042", "#101820", "#FEE715"];

function handleBackground() {
  const width = window.innerWidth;
  h2.innerText = `현재 크기 ${width}`;
  if (width >= 1200) {
    body.style.backgroundColor = color[0];
    h1.style.color = color[1];
    h2.style.color = color[1];
  } else if (1000 < width && width < 1200) {
    body.style.backgroundColor = color[1];
    h1.style.color = color[0];
    h2.style.color = color[0];
  } else if (800 < width && width < 1000) {
    body.style.backgroundColor = color[2];
    h1.style.color = color[3];
    h2.style.color = color[3];
  } else {
    body.style.backgroundColor = color[3];
    h1.style.color = color[2];
    h2.style.color = color[2];
  }
}

window.addEventListener("resize", handleBackground);

handleBackground();
