// 체이닝 기법

// setTimeout(() => {
//   console.log("a");
// }, 1500);
// setTimeout(() => {
//   console.log("b");
// }, 1000);
// setTimeout(() => {
//   console.log("c");
// }, 500);
// c -> b -> a 가 찍히는 이유는 비동기 처리의 특징 때문임.
// JS Callstack에서는 위에서 아래로 실행이 되지만, setTimeout()은 비동기 처리이기에, API로 보냄. API에서는 지정해준 시간에 맞춰 Queue에 대기시키고 대기 순서에 따라 실행이 되기 때문임.

// 만약 a -> b -> c로 찍히게 하고 싶다면, 비동기처리를 동기처리로 변환해줘야 함.
// 비동기처리를 동기처리로 이런 형식으로 바꾸게 되면, 전체적으로 처리 속도가 늦어 질 수 있음. A 출력 : 1.5초 B 출력 : 1초 C 출력 : 0.5초
// 비동기처리를 동기처리로 바꾸는 작업은 주로 리소스 작업(데이터를 받아올 때)을 할때 사용함.
// 이걸로 콜백지옥을 만들 수 있음.
// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//     }, 500);
//   }, 1000);
// }, 1500);

// promise는 비동기처리를 동기처리로 바꿀 때, 콜백지옥과 같이 가독성이 너무 떨어지는 현상 때문에 만들어졌음.
// 위 콜백 지옥을 회피하기 위해서 promise 기반으로 변경.
// function test(){} // 함수 정의식
// const test2 = () =>{} // 함수 표현식
// const timer = (str) => {
//   // timer = (함수인)상수(why 상수? const로 선언을 했으니까) // str = 파라미터
//   // return new Promise(); 기본 형태
//   return new Promise((resolve, reject) => {
//     // 여기서 resolve와 reject는 자바스크립터가 자동으로 채워주는 함수임.
//     // ※ 파라미터는 변수이기에 내가 원하는 것을 적을 수 있지만, resolve와 reject를 넣을 때는 조심해야함.
//     // Why? resolve와 reject는 자바스크립터에서 내용을 포함하고 있는 함수이기에.
//     setTimeout(() => {
//       console.log(str);
//       if (true) {
//         // -> 여기서 true의 의미 : str === "a"
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// };
// // timer("a")
// // .then() -> resolove 상태
// // .catch() -> reject 상태
// // .finally(); -> 절대값
// timer("a")
//   .then(() => {
//     console.log("성공");
//   })
//   .catch(() => {
//     console.log("실패");
//   })
//   .finally(() => {
//     console.log("파이널리");
//   });
// // promise 객체는 외부의 실행을 먼저함
// // setTimeout() -> 자체에 비동기 성격을 포함하기 때문에, 지연 시간을 주지 않더라고 외부가 먼적 찍히게 되어 있음
// // (비동기처리는 자연적으로 발생하는 불가항력적 지연시간이 있음).
// console.log("외부");

// arguement를 주었을 때
const timer = (str, ms = 500) => {
  // 지연시간을 ms = 500이라고 지정해주는 것임
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (str === "a" || str === "b" || str === "c") {
        // ||(버디컬바) = or // or 연산자를 이용할 경우, 순서가 중요함. 가장 참이 될 빈도수가 가장 높은 조건을 먼저 적어야함. -> 처리속도 때문에.
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않는 문자가 입력되었다."));
      }
    }, ms);
  });
};

// 비동기처리를 동기처리로 변환하기 위하여 .then을 계속 써야한다는 문제가 발생함 : 프로미스 지옥.
timer("a", 300) //300은 ms를 변경하는 것임.
  .then((result) => {
    // result는 파라미터이기에 아무 단어나 작성해도 됨. result는 관례적을 사용하는 단어임.
    // resolve 일때 실행되는 코드 작성
    console.log(result.code, result.word);
    return timer("b", 1000); // 동기 처리를 하기위한 방법
  }) // reurn을 했을 때 그다음 then.으로 들어감.
  .then((result) => {
    console.log(result.code, result.word);
    return timer("c", 700);
  })
  .then((result) => {
    console.log(result.code, result.word);
  })
  .catch((error) => {
    // reject 일때 실행되는 코드 작성
    console.log(error.message);
  })
  .finally(() => {
    // 절대값 코드 작성
    console.log("파이널리");
  });
