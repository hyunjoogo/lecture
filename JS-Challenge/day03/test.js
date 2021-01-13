text.addEventListener("mouseover", () => {
  text.innerText = "왔구나?!";
  text.style.color = colors[0];
});
text.addEventListener("mouseout", () => {
  text.innerText = "날 떠나지마....";
  text.style.color = colors[1];
});
window.addEventListener("contextmenu", () => {
  text.innerText = "오른쪽은 안됩니다.";
  text.style.color = colors[2];
});
window.addEventListener("resize", () => {
  text.innerText = "사이즈 조정중?";
  text.style.color = colors[3];
});
