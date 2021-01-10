"use strict";

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const stopButton = player.querySelector(".stop");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".playter__slider");
const playTime = player.querySelector(".time");

const totalTime = video.duration;

function playPauseVideo() {
  if (video.paused) {
    video.play();
    toggle.innerText = "||";
  } else {
    video.pause();
    toggle.innerText = "►";
  }
}
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function handleKeyVideo(e) {
  console.log(e.code);
  switch (e.code) {
    case "Space":
      playPauseVideo();
      break;
    // 뒤로 / 앞으로 / 불륨 업 /다운
    case "ArrowLeft":
    case "ArrowRight":
      backForwardVideo();
      console.log(e);
      break;
  }
}

function backForwardVideo() {
  const skip = this.dataset.skip;
  let currentTime = video.currentTime;
  if (skip === "25") {
    skipVideo(currentTime, skip);
  } else {
    skipVideo(currentTime, skip);
  }
}

function skipVideo(currentTime, skipTime) {
  const NumSkipTime = Number(skipTime);
  let skipedTime = currentTime + NumSkipTime;
  video.currentTime = skipedTime;
  video.play();
}

function setTime() {
  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = `0${minutes}`;
  } else {
    minuteValue = `${minutes}`;
  }

  if (seconds < 10) {
    secondValue = `0${seconds}`;
  } else {
    secondValue = `${seconds}`;
  }

  let totalMinutes = Math.floor(video.duration / 60);
  let totalSeconds = Math.floor(video.duration - totalMinutes * 60);
  let totalMinuteValue;
  let totalSecondValue;

  if (totalMinutes < 10) {
    totalMinuteValue = `0${totalMinutes}`;
  } else {
    totalMinuteValue = `${totalMinutes}`;
  }

  if (totalSeconds < 10) {
    totalSecondValue = `0${totalSeconds}`;
  } else {
    totalSecondValue = `${totalSeconds}`;
  }

  let mediaTime = `${minuteValue}:${secondValue} / ${totalMinuteValue}:${totalSecondValue}`;
  playTime.textContent = mediaTime;

  let barLength = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = barLength + "%";
} // 대문자 css property중 - 있으면 빼고 - 다음 문자 대문자

skipButtons.forEach((button) =>
  button.addEventListener("click", backForwardVideo)
);
document.addEventListener("keydown", handleKeyVideo);
stopButton.addEventListener("click", stopVideo);
toggle.addEventListener("click", playPauseVideo);

video.addEventListener("ended", stopVideo);
video.addEventListener("timeupdate", setTime);
