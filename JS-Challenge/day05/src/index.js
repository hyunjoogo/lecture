"use strict";

//Using the boilerplate, make an app that shows the time until Christmas Eve in days, hours, minutes and seconds.

// You're gonna need this

const NINE_HOURS_MILLISECONDS = 32400000;
const untilTimeText = document.querySelector(".untiltime h2");
const passTimeText = document.querySelector(".passtime h2");
const secProgressBar = document.querySelector(".secprogressbar");
const totalProgressBar = document.querySelector(".totalprogressbar");

function getTime() {
  // Don't delete this.
  const now = new Date();
  const thisXmasDay = new Date("2021-12-24:00:00:00+0900");
  const lastXmasDay = new Date("2020-12-24:00:00:00+0900");
  const remain = thisXmasDay - now;

  const remainSeconds = Math.floor((remain / 1000) % 60); // 초
  const remainMinutes = Math.floor((remain / 1000 / 60) % 60); // 분
  const remainhours = Math.floor((remain / 1000 / 60 / 60) % 24); // 시
  const remainDays = Math.floor(remain / 1000 / 60 / 60 / 24); // 일

  untilTimeText.innerText = `${remainDays}일 ${remainhours}시 ${remainMinutes}분 ${remainSeconds}초 전까지 여자친구를 만드시오`;

  fillBar(remainSeconds, remainDays);

  const last = now - lastXmasDay;
  const lastSeconds = Math.floor((last / 1000) % 60); // 초
  const lastMinutes = Math.floor((last / 1000 / 60) % 60); // 분
  const lasthours = Math.floor((last / 1000 / 60 / 60) % 24); // 시
  const lastDays = Math.floor(last / 1000 / 60 / 60 / 24); // 일
  passTimeText.innerText = `${lastDays}일 ${lasthours}시 ${lastMinutes}분 ${lastSeconds}초가 지났습니다.`;
}

function fillBar(remainSeconds, remainDays) {
  const secPercent = (remainSeconds / 60) * 100;
  secProgressBar.style.flexBasis = `${secPercent}%`;
  const totalPercent = (remainDays / 365) * 100;
  totalProgressBar.style.flexBasis = `${totalPercent}%`;
}

function init() {
  setInterval(getTime, 1000);
}
init();

// const thisXmasDay = new Date("2021-12-24:00:00:00+0900");
// const lastXmasDay = new Date("2020-12-24:00:00:00+0900");
// console.log(thisXmasDay);

// const remain = (thisXmasDay - now) / 1000 / 60 / 60;
// console.log(remain);
