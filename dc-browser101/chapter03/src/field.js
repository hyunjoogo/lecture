"use strict";

import * as sound from "./sound.js";

const CARROT_SIZE = 80;

export default class Field {
  // game.js에서 당근갯수, 벌레갯수를 받아온다.
  constructor(carrotCount, bugCount) {
    // class 안에서 정의
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    //field 관련한 아이들을 정의
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    // 이벤트리스너 등록 (자바스크립트니까 행동다음에 함수가 오는것이지.)
    this.field.addEventListener("click", this.onclick);
    //
  }

  // 콜백함수?
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  // field 클래스는 게임정보에 대한 것은 몰라.
  // 게임을 정확하게 생성하고 아이템을 원래 자리에 배치시는것 + 클릭까지만 담당하는 아이
  init() {
    this.field.innerHTML = "";
    //addItem도 가지고 오면 됨
    this._addItem("carrot", this.carrotCount, "img/carrot.png");
    this._addItem("bug", this.bugCount, "img/bug.png");
  }

  //Private funcution으로 등록하기 위에 앞에 _ 붙인다.
  //중간 class안에서 정의한 field, fieldRect 앞에 this.를 붙인다
  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("src", imgPath);
      item.setAttribute("class", className);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  // 클릭했을 때 일어나는 함수
  // 게임이 시작여부는 여기서 나오지 않는다.
  // 함수를 인자로 전달할 때는 바인딩을 해야한다.
  // 직접 함수를 바인딩하는 방법, 이벤트리스너에서 콜백함수를 하나 더 만드는 방법, 그 함수에서 바인딩하는 방법이 있다. 마지막 방법임.
  onclick = (e) => {
    const target = e.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      // onItemClick에 콜백이 등록 되어져 있으면
      // onItemClick의 함수를 호출하고 당근이면 당근, 버그면 버그를 인자로 넘겨준다.
      this.onItemClick && this.onItemClick("carrot");
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick("bug");
      sound.playBug();
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
