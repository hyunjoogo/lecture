function paintScreen() {
  const screen = document.querySelector(".screen");
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  screen.innerText = `window.screen: ${screenWidth}, ${screenHeight}`;
}

window.addEventListener("resize", paintScreen);
paintScreen();

// 이벤트는 보통 이벤트 오브젝트가 들어오게 된다.
// 전달받은 이벤트가 아무것도 없어서 작성을 해주면 된다.
// 그런데
