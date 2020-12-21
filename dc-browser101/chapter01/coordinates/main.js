const targetCoordinate = document.querySelector(".target-coordinate");
const target = document.querySelector(".target");
const columnBox = document.querySelector(".column-box");
const rowBox = document.querySelector(".row-box");
const rect = target.getBoundingClientRect();
const width = rect.width / 2;
const height = rect.height / 2;
console.log(width, height);

window.addEventListener("mousemove", (event) => {
  const x = event.x;
  const y = event.y;

  target.style.transform = `translate(${x - width}px, ${y - height}px)`;
  targetCoordinate.style.transform = `translate(${x}px, ${y}px)`;
  targetCoordinate.innerText = `${x}px, ${y}px`;
  rowBox.style.transform = `translateY(${y}px)`;
  columnBox.style.transform = `translateX(${x}px)`;
});
