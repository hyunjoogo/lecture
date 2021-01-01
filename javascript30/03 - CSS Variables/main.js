"use strict";

// const spacing = document.querySelector("#spacing");
// const blur = document.querySelector("#blur");
// const base = document.querySelector("#base");

// const hl = document.querySelector(".hl");
// const img = document.querySelector("img");

// spacing.addEventListener("input", (e) => {
//   img.style.padding = `${e.target.value}px`;
// });

// blur.addEventListener("input", (e) => {
//   console.log(e);
//   img.style.filter = `blur(${e.target.value}px)`;
// });

// base.addEventListener("input", (e) => {
//   img.style.backgroundColor = `${e.target.value}`;
//   hl.style.color = `${e.target.value}`;
// });

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(`name : ${this.name}, value : ${this.value}`);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
// addEventListener에서 받아오는 이벤트의 타겟을 this라고 할 수 있다 대박 ㅋㅋㅋ

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
