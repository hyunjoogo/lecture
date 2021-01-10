"use strict";

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const stopButton = player.querySelector(".stop");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".playter__slider");
const playtime = player.querySelector(".player__time");

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

skipButtons.forEach((button) =>
  button.addEventListener("click", backForwardVideo)
);
document.addEventListener("keydown", handleKeyVideo);
stopButton.addEventListener("click", stopVideo);
toggle.addEventListener("click", playPauseVideo);
video.addEventListener("ended", stopVideo);

// function showCurrentTime() {
//   console.log(currentTime);
//   console.log(video.duration);
// }

// showCurrentTime();
