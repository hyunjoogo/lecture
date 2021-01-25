import express from "express";

const app = express();

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

const handelHome = (req, res) => res.send("Home🏠");
const handelAboutUs = (req, res) => res.send("About Us.");
const handelContact = (req, res) => res.send("Contact.");
const handelProtected = (req, res) => res.send("여기는 / 로 가게 만들꺼야");

// 미들웨어 1
const hello = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};
// 미들웨어 2 : 뒤에 페이지에 랜딩이 되지 않게 res로 끊어버린다.
const backHome = (req, res) => {
  // 처음에는 next()를 넣었는데 next가 있는 것 자체가 뒤로 넘어간다.
  // 오류가 발생한다. 인자에도 next를 빼고 next()도 안하면 된다.
  // middel 웨어라는 것이 굳이 next()가 없어도 가능하다는 것을 알았다.
  res.redirect("/");
};

app.use(hello);
app.get("/", handelHome);
app.get("/about-us", handelAboutUs);
app.get("/contact", handelContact);
app.use(backHome);
app.get("/protected", handelProtected);

// 1. 4가지 경로를 만들라 그리고 경로 이름이 페이지에 나오게 해라
// ( /, about, contact, protected )
// 2. 미들웨어 1 : 각 페이지 랜딩할 때 콘솔로그에 특정메세지 나오게 하기
// 3. 미들웨어 2 : 특정 페이지 랜딩시 원하는 페이지로 redirect되게 하기
//  *** 조건 ***
// 파일 하나에 작성 // 2개의 미들웨어 // 루트 4개
