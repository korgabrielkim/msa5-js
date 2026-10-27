// 01. try catch문 기본식
// console.log(1);
// console.log(2);
// try {
//   // 내가 실행할 처리를 작성
//   console.log("try문 시작");
//   console.log(test.name);
//   console.log("try문 끝");
// } catch (error) {
//   // try 문 안에서 에러나 예외가 발생했을 때 처리할 로직
//   console.log("error 발생");
//   console.log(error.name); // 발생한 에러명
//   console.log(error.message); // 발생한 에러의 축약(한문장 정도)
//   console.log(error.stack); // 발생한 에러의 상세 정보 -> 에러를 깊게 추척해야 할 때 사용(평소 잘 사용하지 않음)
// }
// console.log(3);
// console.log(4);
// console.log(5);

// 02. try catch문 강제로 예외상황 발생 시킬 때
// try {
//   console.log(1);
//   // 강제 예외 발생 시키기
//   throw new Error("강제로 예외 발생 시켰다.");
//   // throw는 가장 처음 만난 catch로 순번을 넘김.
//   console.log(2);
// } catch (error) {
//   console.log(error.stack);
// }

// 03. try catch finally문
// finally : 예외 여부와 상관 없이 무조건 실행되는 로직을 작성하기 위해 사용.
// 주로 리소스를 닫는 명령으로 이용함.
// try {
//   console.log(test.name);

//   console.log(1);
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("finally");
// }

// 04. error를 상세하게 처리하는 방법(여러 종류의 예외 처리)
// instanceof 연산자를 사용해서 예외를 구체적으로 처리
// try {
//   throw new ReferenceError(); // new 키워드에 의해서 메모리에 올라가 사용할 있는 객체를 인스턴스(instance)라고 함.
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     // instanceof는 에러의 원래 속성을 그대로 받음. 즉 여기서는 레퍼런스 오류를 받아 옴.
//     // 직역 : error의 인스턴스는 뒤에 있는 syntaxError와 같은 값인지를 보는 것임.
//     console.log("싱텍스 에러");
//   } else if (error instanceof ReferenceError) {
//     console.log("레퍼런스 에러");
//   } else {
//     console.log("에러");
//   }
// }
