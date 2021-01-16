"use strict";

const selectElement = document.querySelector("select");

function loadCountry() {
  const options = document.querySelectorAll("option");
  options.forEach((i) => {
    if (i.value === localStorage.getItem("country")) {
      i.defaultSelected = true;
    }
  });
}

selectElement.addEventListener("change", (e) => {
  localStorage.setItem("country", e.target.value);
});
loadCountry();
