// 화면이 나오면 form(input)과 ul은 기본적으로 있어야 함
// 1. 저장해놓은게 없어서 등록하려면
//  1.1 submit하면 로컬스토리지에 value를 저장 
//  1.2 저장된 값으로 li와 지울 수 있는 button 생성
// 2. 저장해놓은게 있으면 기존에 생성된 자료 보여주기

// ------ 전체 지우는 버튼?
// ------ 1. todo 첫줄 등록하면 input 옆에 다 지우기 버튼 만들어보자

'use strict';
// 관련 class 등록, 다른 js파일과 겹치지 않게
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
// toDos라는 array를 만들자
let toDos = [];

//delBtn 눌렀을 때 반응하는 함수
function deleteToDo(event){
  //event의 타겟의 버튼을 지우는 것이 아닌 타겟의 부모인 li를 지워야하니까 parentNode
  //누른 버튼을 btn으로 정의
  const btn = event.target;
  //btn의 부모요소를 li정의
  const div = btn.parentNode;
  const li = div.parentNode;
  //ul의 자식요소 중 정의된 li 삭제
  toDoList.removeChild(li);
  //filter는 arrat의 모든 아이템을 통해 함수를 실행시키고
  //그 중에 true인 것들로 다시 array를 만드는 것
  // true 판별은 위에서 filterFn으로 만든다.
  const cleanToDos = toDos.filter(function(toDo){
    // return toDo.id !== li.id; 이렇게 하면 li.id는 string이다.
    //그래서 parseInt를 쓰면 숫자로 바뀐다.
    // 모든 toDos가 li의 id와 같지 않을 때
    return toDo.id !== parseInt(li.id);
  });
  //다시 ID를 지정한 cleanToDos를 toDos라 하자
  toDos = cleanToDos
  // 스토리지에 다시 저장
  saveToDos();
}

//만들어놓은 toDos를 로컬스토리에제 저장하기
function saveToDos(){
  //자바는 로컬스토리지에 있는 모든 데이터를 string으로 저장한다.
  //localStorage.setItem(TODOS_LS, toDos); 이렇게 하면 object로 나온다
  //좀 이해가 안가는데???
  // JSON.stringify가 object를 string으로 변환시켜준다.
  // 왜??? 나중에 알려준데
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//toDo ID 넘버링 하기 위한 것
let idNumbers = 1;
//화면에 나오게 하는 함수
function paintToDo(text) {
  //createElement:html안에 태그 생성
  const li = document.createElement("li");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  //그 버튼안에 텍스트 넣기
  delBtn.innerText = "X";
  delBtn.addEventListener('click', deleteToDo);
  // 적은 할 일(submit한 vaule) 나온 곳
  const span = document.createElement("span");
  //toDos 저장하는 과정에서 밖으로 뺌
  //toDos ID넘버링 작업
  const newId = idNumbers;
  idNumbers += 1;
  span.innerText = text;
  //위에는 상수정의만 한 것 , 이제는 위치 배정
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(delBtn);
  //li에도 id주기
  li.id = newId;
  //이거 안만들면 말짱 꽝
  toDoList.appendChild(li);
  //왜 id를 숫자로 만드는 걸까? 아아아아 나중에 지우는 버튼을 만들기 위해!
  //li에도 id를 주어야지 지우는 버튼이 어떤 li를 지울지 안다.
  //toDos를 저장하는 것
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  //push하기 전에 넣으면 빈공간으로 올라간다.캐스캐이딩
  saveToDos();
}

//gretting에서 한거랑 비슷
function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //이게 왜 그런거지? 문자열을 등록하기 위함인가?
  toDoInput.value = "";
  
}

// 첫화면이 나오면 로컬스토리지에서 loadToDos의 자료를 가지고 와
function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // null이 아니면! 즉, 자료가 있으면
  if (loadedToDos !== null) {
    //string을 다시 object로. 즉, object->string->object
    const parsedToDos = JSON.parse(loadedToDos);
    //forEach는 기본적인 함수인데 array에 담겨있는 함수를 한번씩 실행시켜주는것
    //forEach에 대한 공부가 필요합니다.
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init(){
  loadToDos();
  //1.1처럼 submit을 하면 handlesubmit를 실행해줘!
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

// 버그 : to do를 하나 삭제하고 새로운 to do 추가시 id가 중복되는 현상. 
// 서로 id가 중복되는 to do 중 하나를 제거하면 동시에 같은 id의 to do들이 함께 삭제됨

// 발생원인 : toDos 배열의 길이(to do 개수)에 따라 id가 배정되기 때문에 발생하는 버그
// function paintToDo(text) {
// const newId = toDos.length + 1; // 요놈 때문에 발생
// }

// 해결방안 예시.
// let idNumbers = 1;
// ~
// function paintToDo(text) {
// ~
// const newId = idNumbers;
// idNumbers += 1;
// ~

// 1) toDos 배열과 무관하게 id값을 지정할 변수 idNumbers를 생성
// 2) 새로운 to do를 생성할 때마다 idNumbers의 현재 값을 id로 지정하고 idNumbers의 값을 1씩 증가시키기.

// 부연설명) idNumber 변수의 값은 새로운 to do가 생성될 때마다 증가하지만, 생성된 to do를 삭제했을 때는 값이 변하지 않음.