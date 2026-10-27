// 타이머 함수 => 대표적인 비동기 처리
// 1. 내가 지정한 특정 시간 지나서 실행시키는 타이머 함수
console.log("a");
// setTimeoust(cb, ms[ , args...]) : return 값으로 number를 줌.
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가해줌
// return 값은 timeoutId를 반환하고, 이는 정수값(숫자)를 의미함. 이때 정수값은 해당 타이머의 고유한 식별값이 됨.
const timeoutId = setTimeout(() => {
  console.log("b");
}, 500); //1000 = 1초임 why? /ms로 자바스크립트는 구동됨.
console.log("c");
// clearTimeout()은 해당 ID의 setTimeout을 취소 시킨다.

// clearTimeout(timeoutId); // => 이런 과정을 이용해서 디바운싱 및 쓰로틀링 현상을 처리함.
// 만약 clearTimeout을 더 늦게 작동하게 한다면? 결과값은 유지되고 있음 / Why? 컴퓨터는 정직하니까! 명령한데로만 작동함!
setTimeout(() => clearTimeout(timeoutId), 1500);

// 2. 인터벌 타이머 함수
// setInterval(cb, ms[,args...]) : return 값으로 number를 줌.
// 설정한 일정 시간마다 콜백함수를 실행하는 함수.
// return 값은 intervalId를 반환하고, 이는 정수값(숫자)를 의미함. 이때 정수값은 해당 인터벌의 고유한 식별값이 됨.
const intervalId = setInterval(() => {
  console.log("인터벌");
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 6000);
