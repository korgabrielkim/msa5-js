// 구조분해 문법(distruction 문법) ※ 실무에서는 map / foreach / filter 등을 활용하여 사용함 -> 프론트엔드 외에는 구조분해 문법을 잘 사용하지 않음
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];

let idx1 = arr[0];
let idx2 = arr[1];
let idx3 = arr[2];
let idx4 = arr[3];
let idx5 = arr[4];

let [i1, i2, i3, i4, i5] = arr; // arr 안에 담겨 있는 인덱서 순서데로 그대로 받아 온다고 보면 됨.
console.log(i3);
console.log(idx3);

// 오브젝트 내의 데이터 불러오기
const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  addr: "대구광역시",
  info: {
    board: 1,
  },
};
// const {가져오고 싶은 키, 가져오고 싶은 키} = user;
// 주의할 점은 불러오고 싶은 키(변수)랑 해당 프로퍼티(property)명과 동일하게 작성해야함.
// const { name, age } = user;
// console.log(name, age); // name에 줄이 끄인 이유 : name이라는 code를 너무나 많이 사용하기에 비추천한다는 의미임.
// 구조분해를 할 때 변수명을 바꾸고 싶을 때
// const { name: userName, age } = user;
// console.log(userName, age);

// 구조분해를 할때 오브젝트에 없는 값을 선언하는데, 초기값을 주고 싶을 때
const { name: userName, age, addr2 = "없음" } = user;
console.log(userName, age, addr2);

// // num의 초기값을 999로 세팅.
// function test(num = 999) {
//   console.log(num);
// }

// // ※ 만약에 파라미터의 값을 지정해주지 않으면 undefinded가 뜸.
// // function test(num) {
// //   console.log(num);
// // }
// test();
