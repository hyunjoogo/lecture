// 1. 랜덤으로 숫자를 하나 뽑아
// 2. 그 숫자와 맞는 이미지를 배경으로 바꾸어준다.
// 숫자와 이미지 매칭해주는 함수
// 배경을 바꾸어주는 함수


const body = document.querySelector("body");
//1.3.1 랜덤숫자 범위 설정
const IMG_NUMBER = 3;
const changeBtn = document.querySelector(".js-bgchange")

// 2.1 배경화면 채우는 함수
function paintImage(imgNumber){
  // 2.2 이미지 사용하는 정의 (아래 두줄)
  const image = new Image();
  // 랜덤숫자는 0,1,2 밖에 안나온다. 그래서 +1을 해야 이미지와 매칭이 된다.
  image.src = `img/${imgNumber + 1}.jpg`;
  // 2.3 이미지 채우기. 여기까지만 하면 body 안에 요소로 나온다.
  body.appendChild(image);
  // 2.4 클래스를 추가하고 CSS에서 포지션 및 z-index 설정
  image.classList.add('bgImg');
}
// 1.2 랜덤숫자 함수만들기
function getRandom() {
  // 1.3 랜덤숫자 정의. IMG_NUMBER도 정의. 즉, 0 ~ 2.9사이의 정수만 가지고 온다
  const number = ~~(Math.random() * IMG_NUMBER);
  // 1.4  랜덤숫자 리턴하기
  return number;
}

// ㅁㄴ이ㅏ럼ㄴ이ㅏ럼ㄴ이ㅏ런ㅇ미ㅏ 럼ㄴㅇㄹ  changeBtn 완성
// changeBtn을 누르면 새로운 번호를 뽑는다.
// 그 번호로 다시 배경화면 함수를 호출한다.

changeBtn.addEventListener('click', () => {
  getRandom();
  console.log(getRandom());
  paintImage(getRandom());
});

// 1.1 randomNumber 준비
function init(){
  // 1.5 랜덤숫자를 정의하기
  const randomNumber = getRandom();
  // 2.0 배경화면에 랜덤숫자 넣는 함수 호출
  paintImage(randomNumber);
};

init();


// 기본배경화면을 만든다.
// 버튼을 누르면 다음 화면으로 바뀐다.
// 버튼

// 뻘짓의 흔적

// const bodyBackgroundImage = body.style.backgroundImage;
// const backgroundImg1 = "url('img/1.jpg')";
// const backgroundImg2 = "url('img/2.jpg')";
// const backgroundImg3 = "url('img/3.jpg')";

// console.log(bodyBackgroundImage);
// const arrayBGI = ['backgroundImg1', 'backgroundImg2', 'backgroundImg3'];
// function randomImg(event) {
//   event.preventDefault();
//   const random = arrayBGI[~~(Math.random() * arrayBGI.length)];
//   changeBGImage(random);
// }

// function changeBGImage(random) {
//   backgroundImage = random;
//   console.log(random);
// } 