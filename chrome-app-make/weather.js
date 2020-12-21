// 날씨 정보 알려주기
// 1. 사용자의 위치 정보 가지고 오기
// 2. 위치에 따른 날씨 보여주기
const weather = document.querySelector(".js-weather")
const API_KEY = "dd4f3e227774a294cbdd1e924a02bc04";
const COORDS = 'coords';

// 2.1 위치를 먼저 저장해라
function saveCoords(coordsObj){
  //오브젝트를 JSON문자열로 변환하는 과정
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
// 2.2 위도와 경도에 따른 날씨 가지고 오기
function getWeather(lat, lon) {
  // API를 가지고 오는 구문
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ) //then은 그리고 나서 . response는 API를 다시 요청하는거
    .then(function(response) {
      return response.json();
    }) // json안에 자료들을 아래와 같이 써줘라.
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} . ${place}`;
    })
  }
// 1.1.1.2 위치정보 가지고 올 수 있다면
function locationSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //위도와 경도를 하나의 오브젝트로 묶는다.
  // latitude=latitude 라면 하나만 써도 된다.
  const coordsObj = {
    latitude,
    longitude
  };
  //이 오브젝트를 로컬스토리지에 저장해라.
  saveCoords(coordsObj);
  //그리고 날씨를 가지고 와라
  getWeather(latitude, longitude);
}
// 1.1.1.1 위치정보 가지고 올 수 없음
function locationFail() {
  console.log('Failed');
}
// 1.1.1 위치 정보 가지고 오기
function askCoords() {
  //하나의 구문이다. 위치정보를 가지고 오기. 위도와 경도로 가지고 온다.
  navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
// 1. 로컬스토리에 있는 위치 가지고 오기
function loadCoords() {
  const loadedCoord = localStorage.getItem(COORDS);
  // 1.1 로컬스토리지에 위치가 없으면 위치 묻기
  if(loadedCoord === null) {
    askCoords();
  // 1.2 있다면 JSON에서 날씨관련 분석 가지고 오기
  } else {
    const parseCoords = JSON.parse(loadedCoord);
    getWeather(parseCoords.latitude,  parseCoords.longitude);

  }
}
//0. 함수 콜하기
function init() {
  loadCoords();

}

init();