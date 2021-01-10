"use strict";

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const stopButton = player.querySelector(".stop");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
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
  let minuteValue = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secondValue = seconds < 10 ? `0${seconds}` : `${seconds}`;

  let totalMinutes = Math.floor(video.duration / 60);
  let totalSeconds = Math.floor(video.duration - totalMinutes * 60);
  let totalMinuteValue =
    totalMinutes < 10 ? `0${totalMinutes}` : `${totalMinutes}`;
  let totalSecondValue =
    totalSeconds < 10 ? `0${totalSeconds}` : `${totalSeconds}`;

  let mediaTime = `${minuteValue}:${secondValue} / ${totalMinuteValue}:${totalSecondValue}`;
  playTime.textContent = mediaTime;

  let barLength = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = barLength + "%";
} // 대문자 css property중 - 있으면 빼고 - 다음 문자 대문자

function handleRanges() {
  if (this.name === "volume") {
    video.volume = this.value;
  } else if (this.name === "playbackRate") {
    video.playbackRate = this.value;
  }
}

skipButtons.forEach((button) =>
  button.addEventListener("click", backForwardVideo)
);
document.addEventListener("keydown", handleKeyVideo);
stopButton.addEventListener("click", stopVideo);
toggle.addEventListener("click", playPauseVideo);
ranges.forEach((input) => input.addEventListener("change", handleRanges));
video.addEventListener("ended", stopVideo);
video.addEventListener("timeupdate", setTime);
