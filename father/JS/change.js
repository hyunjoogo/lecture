// //자동 삽입
// const one =1
// const two = 2;
// console.log(one);
// 블록
// const one = 1, two = 1;
// if (one === two) {
//   const result = one + two;
//   console.log(result)
// }
// if
// const a = 1, b = 2;
// if (a === b)
//   console.log("block no use");
// else console.log('블록 안 사용함 ')
// if (a === b) {
//   console.log('1');
//   console.log('2');
// } else {
//   console.log('이렇게도 나오는구나 ')
// }

// debugger
// const sport = "sport";
// debugger;
// console.log(sport)

// while
// let k = 1;
// while (k < 3) {
//   console.log(k);
//   k++;
// }
// console.log("last:", k)

// do while => while 같지만 do 문을 먼저 실행
// let j = 1;
// do {
//   console.log("do:", j)
//   j++;
// } while (k < 3) {
//   console.log("while:", j)
// }

// for() => 비교옵션 true 동안 반복 실행
// for (let k = 0; k < 2; k++) {
//   console.log(k);
// }

// 1~50까지 반복
// let odd = [];
// let even = [];
// let total = [];
// for (let k = 1; k < 51; k++) {
//   total.push(k);
//   if (k % 2 === 1) {
//     odd.push(k);
//   } else
//   {
//     even.push(k)
//   }
// }
// console.log(odd);
// console.log(even);
// console.log(total)


// break : break 만나면 반복문 종료

// let k = 0, m = 0;
// while (k < 3) {
//   m++;
//   if (m === 3) {
//     break;
//   }
//   console.log(m);
// }

// break 아래줄 미실행 예시
// for (let k = 0; k < 3; k++) {
//   if (k === 1) {
//     break;
//     console.log('k=1') // 실행안됨
//   }
//   console.log(k) // 0
//  }

// continue

// for (let k = 0; k < 5; k++) {
//   if (k === 2 || k === 3) {
//     continue;
//     console.log('컨티뉴에 지나감')
//   }
//   console.log(k) // 0, 1, 4
// }


// switch

// const exp =1;
// switch(exp) {
//   case 1:
//     console.log(100);
//     break;
//   case 2:
//     console.log(200);
// } // 100


// default : 일치하는 케이스가 없으면 default 아래줄 모두 수행

// let exp =7, value;
// switch(exp) {
//   case 1:
//     value = 100;
//   case 2:
//     value = 200;
//   default:
//     value = 700;
// }
// console.log(value)


// OR case

// let exp =3 ;
// switch(exp) {
//   case 2:
//   case 3:
//     console.log(100)
// }

// try-catch

// let value;
// try {
//   value = ball;
// } catch(error) {
//   console.log("catch 실행")
// }

// // try - catch - finally (finally : 에러와 상관없이 무조건 실행)
// let value;
// try {
//   value=ball;
// } catch(error) {
//   console.log("catch 실행")
// } finally {
//   console.log('피날레')
// }

// throw ( 아래줄은 미실행 / throw 내용은 catch (error) 로 확인 가능)

// try {
//   throw "예외 발생시킴";
//   sport = "스포츠";
// } catch (error) {
//   console.log(error);
//   console.log(sport)
// }

// throw를 배열처럼 보낼 수 있다.
// try {
//   throw {
//     msg : '안되요',
//     log : 1
//   };
// } catch (error) {
//   console.log(error.msg)
//   console.log(error.log)
// }

// new Error(내용) : error.message 내용 확인 가능
// try {
//   throw new Error('no')
// } catch (error) {
//   console.log(error.message)
// }

label문장의 코드를 작성하고 사용하지 않는 이유를 설명하세요

