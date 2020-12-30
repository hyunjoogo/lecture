"use strict";

function enterKey(event) {
  const audioKey = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
  const key = document.querySelector(`div[data-key="${audioKey}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

document.addEventListener("keydown", enterKey);
