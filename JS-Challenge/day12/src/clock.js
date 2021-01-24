const timeTitle = document.querySelector(".timeTitle");
const hour12 = document.querySelector("label");
const hour12Input = document.querySelector("#hour12");
const analog = document.querySelector(".analog");
const digital = document.querySelector(".digital");

let options = { hour: "numeric", minute: "numeric", hour12: false };

function nowTime() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("ko-KR", options).format(now);
  timeTitle.innerText = time;
}

hour12.addEventListener("click", (e) => {
  options.hour12 = !options.hour12;
});

function changeClock(e) {
  console.log(e.target.className);
  console.log(e.target.parentNode.className);
  // 디지털로 바꾸기
  timeTitle.style.display = "block";
}
digital.addEventListener("click", changeClock);

nowTime();
setInterval(nowTime, 1000);
