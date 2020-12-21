// function paintScreen() {
//   const screen = document.querySelector(".screen");
//   const screenWidth = window.screen.width;
//   const screenHeight = window.screen.height;
//   const outerWidth = window.outerWidth;
//   const outerHeight = window.outerHeight;
//   const innerWidth = window.innerWidth;
//   const innerHeight = window.innerHeight;
//   const clientWidth = document.documentElement.clientWidth;
//   const clientHeight = document.documentElement.clientHeight;
//   screen.innerText = `window.screen: ${screenWidth}, ${screenHeight}\n
//   window.outer: ${outerWidth}, ${outerHeight}\n
//   window.inner: ${innerWidth}, ${innerHeight}\n
//   documentElement.clientWidth: ${clientWidth}, ${clientHeight}`;
// }

// window.addEventListener("resize", paintScreen);
// paintScreen();

// 더 간단하게 만들었네.

const tag = document.querySelector(".screen");
function updateTag() {
  // 따로 const를 하지 않고 바로 넣었음
  tag.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerHeight} <br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

window.addEventListener("resize", () => {
  // 이벤트는 보통 이벤트 오브젝트가 들어오게 된다.
  // 전달받은 이벤트가 아무것도 없어서 작성을 해주면 된다.
  updateTag();
});
updateTag();
