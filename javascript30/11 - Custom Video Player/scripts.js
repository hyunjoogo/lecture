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
      skipVideo();
      console.log(e);
      break;
  }
}

function skipVideo() {
  video.currentTime += Number(this.dataset.skip);
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
  progressBar.style.flexBasis = `${barLength}%`;
} // 대문자 css property중 - 있으면 빼고 - 다음 문자 대문자

function handleRanges() {
  // if (this.name === "volume") {
  //   video.volume = this.value;
  // } else if (this.name === "playbackRate") {
  //   video.playbackRate = this.value;
  // }
  video[this.name] = this.value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", playPauseVideo);
toggle.addEventListener("click", playPauseVideo);
video.addEventListener("ended", stopVideo);
stopButton.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", setTime);

document.addEventListener("keydown", handleKeyVideo);

skipButtons.forEach((button) => button.addEventListener("click", skipVideo));
ranges.forEach((input) => input.addEventListener("change", handleRanges));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
