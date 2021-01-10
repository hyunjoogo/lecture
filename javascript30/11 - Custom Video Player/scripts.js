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

let currentTime = video.currentTime;
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

toggle.addEventListener("click", playPauseVideo);
video.addEventListener("ended", stopVideo);
