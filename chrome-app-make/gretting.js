// 1. 사용자의 이름을 받아 적을 칸이 필요
  // 1.1 저장되어 있는 이름이 있는지 확인해 볼 것
  // 1.2 없으면 물어보는 함수
  // 1.3 있으면 인사하는 함수
// 2. 완료 후 계속 나오게

// 정리
// 1. 화면이 열리면 로컬스토리지에 유저부터 확인해
// 1.1. 유저가 없다면 
  // 1. form은 보이게, 인사는 안하게
  // 2. 유저 이름을 로컬스토리지에 넣는다.
    // 2.1 form을 submit하면 A함수가 하나 발동
    // 2.2 A함수는 이벤트가 다시 페이지가 리플레쉬 되는걸 막고
        // input value를 상수로 만들어서 인사하는데도 쓰고 해
    // 2.3 로컬스토리지에 key : currentUser , Value : text 저장해.
//  2.1. 유저가 있으면 
  // 1. 로컬스토리지에서 이름을 가지고 와
  // 2. form 안보이게, 인사는 할 수 있도록
  // 3. 인사는 이렇게 해.

// html의 .js-form을 form이라는 친구로 정의한다.
// 그 form이라는 친구 안에 <input>은 input이라 정의한다.
// html의 .js-greetings을 greeting이라고 정의한다.
// querySelector는 첫번째 것을 가지고 와
// querySelectorAll은 전부를 가지고 오.지.만. array라고 배열을 해버려서 
//   그 중에 하나를 가지고 오는 작업을 한 번 더 해야해.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input");
  greeting = document.querySelector(".js-greetings");


// 계속 정의할 수 있도록 대문자로 특히 건들지 말아줬으면 하는건
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// input에 value값을 저장하는 함수
function saveName(text) {
  //setItem은 저장이라고 생각하면 됨
  //로컬스토리지에 key : currentUser , Value : text 저장해.
  localStorage.setItem(USER_LS, text);
}
// submit하면 발생되는 함수
function handleSubmit(event) {
  //event가 발생되면 document가 발생되고
  // https://opentutorials.org/course/1363/6629 이고잉 이벤트설명
  // 이벤트가 다시 불러오는것을 막는거야
  event.preventDefault();
  // input의 value값을 가지고 오는 상수
  const currentValue = input.value;
  // currentValue 상수가 생기면 아래 함수에 써 , 근데 저장은 안되니까 저장함수 만들어
  paintGreeting(currentValue);
  saveName(currentValue);
}
// 이름을 물어보는 함수. form을 보이게 한다.
function askForName() {
  // 일단 보이게 하고 
  form.classList.add(SHOWING_CN);
  // 이게 없으면 form눌러도 아무소용없어. addEventListener를 만든는거야
  // submit를 하면 handleSubmit 함수를 사용해줘.
  // 이거 그냥 아래서 정의해도 될텐데..? (엘리강의는 대부분 이렇게 함)
  form.addEventListener("submit", handleSubmit);
}
// text는 argument , 사용자의 이름이 있으면 argument 를 글자와 함께 나오게 하기
function paintGreeting(text) {
  // 유저가 있으니까  form이 보이면 안돼! SHOWING_CN(CN은 Class-Name)을 class에서 제거.
  // .form때문에 안보이지만 그래도 제거.
  form.classList.remove(SHOWING_CN);
  // 유저가 있으니까 SHOWING_CN(CN은 Class-Name)을 class에 추가.
  // default display : none
  greeting.classList.add(SHOWING_CN);
  // 니콜 이거부터 적었어. greeting이라는 변수에 글씨 추가하는 거야.
  greeting.innerText = `Hello, ${text}`;
}
// 1.로컬 스토리지의 값을 받아오는 작업
//먼저 생각해보자. 무엇이 필요하고 어떤 구현이 필요한지.
function loadName() {
  //로컬스토리지의 아이템 중 currentUser를 받아오자.
  const currentUser = localStorage.getItem(USER_LS);
  // 만약 없으면 이름을 물어보는 함수를 만들고
  // 그 때 form이 보여야겠지? 그럼 form의 기본상태는 안보이게 하고 
  if (currentUser === null) {
    askForName();
  } else { 
    // 그 이름을 가지고 오자. 그리고 인사하는 함수를 만들자
    paintGreeting(currentUser);
  }
}

// 갑자기 생각난거 localStorage의 아이템을 없애는 버튼을 만들 수 있지 않을까?
// saveName 같은 함수로 처리가능할듯
// 사용자를 새로 등록하면서 로컬스토리지의 값은 놔두고 (그 값이 보이게 아이콘이나 링크 같은걸로 대체)
//  차곡차곡 쌓게 해야겠지? 삭제버튼은 setItem말고 다른걸 쓰면 될 듯한데.

function init() {
  loadName();
}

init();