const askNameForm = document.querySelector(".askNameForm");
const askNameInput = document.querySelector(".askNameInput");
const helloScreen = document.querySelector(".helloScreen");
const greetingText = document.querySelector(".greetingText");
const greetingName = document.querySelector(".greetingName");

const testBtn = document.querySelector(".testBtn");

const USER_LS = "currentUser";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = askNameInput.value;
  saveName(currentValue);
  askNameInput.value = "";
  // 이름 물어보는 세션 사라지기
  // helloScreen 보여주기
  helloScreen.innerText = `반가워요! ${currentValue}님`;
  setTimeout(function () {
    greetingUser(currentValue);
    console.log("이벤트 보냄");
  }, 100);
}

function greetingUser(text) {
  const now = new Date();
  const hours = now.getHours();
  function greetingMessage(hours) {
    let result;
    if (0 < hours && hours < 6) {
      result = "잘자요!";
    } else if (5 < hours && hours < 12) {
      result = "좋은 아침입니다!";
    } else if (11 < hours && hours < 14) {
      result = "점심 맛있게 드셨나요?";
    } else if (11 < hours && hours < 18) {
      result = "활기한 하루 되세요!";
    } else {
      result = "좋은 저녁입니다!";
    }
    return result;
  }
  // helloScreen.classList.remove('showing-hello');
  // helloScreen.classList.add('disappear');
  // mainSection.classList.add('showing');
  // askNameSection.classList.add('noshow');
  greetingText.innerText = greetingMessage(hours);
  greetingName.innerText = `${text}님`;
}

function askUserName() {
  askNameForm.addEventListener("submit", handleSubmit);
}

function loadUser() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askUserName();
  } else {
    console.log("인사문구 나옴");
    greetingUser(currentUser);
  }
}
loadUser();

testBtn.addEventListener("click", del);
function del() {
  localStorage.removeItem(USER_LS);
}
