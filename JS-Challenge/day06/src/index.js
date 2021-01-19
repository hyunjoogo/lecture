"use strict";

// const selectElement = document.querySelector("select");

// function loadCountry() {
//   const options = document.querySelectorAll("option");
//   options.forEach((i) => {
//     if (i.value === localStorage.getItem("country")) {
//       i.defaultSelected = true;
//     }
//   });
// }

// selectElement.addEventListener("change", (e) => {
//   localStorage.setItem("country", e.target.value);
// });
// loadCountry();

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

loadCountries();
select.addEventListener("change", handleChange);
