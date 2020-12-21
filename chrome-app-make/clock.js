const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const now = new Date();
  const option = {month: 'short', day: 'numeric'};
  const monthDate = new Intl.DateTimeFormat('en-US', option).format(now);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clockTitle.innerText = `${
    monthDate < 10 ? `0${monthDate}` : monthDate}
    ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();