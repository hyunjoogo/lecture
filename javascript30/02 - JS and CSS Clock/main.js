"use strict";

function showTime(hours, mins, secs) {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");
  hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
  minHand.style.transform = `rotate(${mins * 6 + 90}deg)`;
  secHand.style.transform = `rotate(${secs * 6 + 90}deg)`;
  console.log(
    `시간 ${hours * 30 + 90} / 분 ${mins * 6 + 90} / 초 ${secs * 6 + 90}`
  );
}

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  console.log(hours, mins, secs);
  showTime(hours, mins, secs);
}
setInterval(getTime, 1000);
