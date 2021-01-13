// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.querySelector("h2");

const superEventHandler = {
  mouseover: function () {
    text.innerText = "왔구나 왔어! 😘";
    text.style.color = colors[0];
  },
  mouseout: function () {
    text.innerText = "날 떠나지마 😖 ";
    text.style.color = colors[1];
  },
  contextmenu: function () {
    text.innerText = "오른손이 하는 일을 왼손이 모르게 하라 😜";
    text.style.color = colors[2];
  },
  resize: function () {
    text.innerText = "사이즈 조정중? 🤔";
    text.style.color = colors[3];
  },
};

text.addEventListener("mouseover", superEventHandler.mouseover);
text.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
window.addEventListener("resize", superEventHandler.resize);
