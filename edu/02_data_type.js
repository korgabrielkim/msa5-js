// ----- Primitive Type -----
let num1 = 1;
let num2 = num1; // Primitive Type은 num1의 값인 1자체를 복사·전달함.
num2 = 99; // => 이 경우, num1은 1, num2는 99로 값이 출력됨. / why? let num2 = num1;에서 num1에는 값 자체를 가져 왔기에.
// console.log(num1);

// ----- Reference Type -----
let obj1 = {
  id: 1,
  name: "둘리",
  etc: {
    addr: "대구",
    test: {
      key1: "val1",
    },
  },
};
let obj2 = obj1; // Reference Type은 obj1의 값을 복사·전달하는 것이 아니라 값이 저장되어 있는 공간의 주소를 전달하고 obj2는 참조를 하는 거임.(약간 동기화 느낌인 것 같음.)
obj2.name = "고길동"; // 동일한 의미로 obj1.name = "고길동"이랑 같은 의미임.
console.log(obj1.name); // 이 경우, obj1도 '고길동'으로 바뀜.
console.log(obj2.name);
// 원본은 보존을 하고 작업을 하는 경우가 대부분이기에, 단순하게 대입 연산자로만 복사를 하면 안됨!
// 얕은 복사 (Shallow Copy) : 빠르지만 간단한 복사에 사용. 복사된 객체의 중첩 객체를 수정하면 원본도 변경 되는 참조 공유 문제 발생.
// 깊은 복사 (Deep Copy) : 느리지만 확신한 복사에 사용.

// ----- 얕은 복사 (Shallow Copy) -----
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우, 주소만 복사하는 방식.
// let obj3 = { ...obj1 }; // 이렇게 하면 shallow copy가 됨.
// obj3.name = "또치";
// obj3.etc.addr = "서울"; // 최상위 계층이 아닌 하위 계층은 여전히 참조를 하기에 obj1도 "서울"로 바뀌는 것. -> 잠재적인 버그의 위험성 존재.
// console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);

// ----- 깊은 복사 (Deep Copy) -----
// 객체의 모든 계층의 값을 복사. -> 루트가 계속 도는 것이기에 객체의 부피가 커지면 커질수록 느려질 수 밖에 없음.
// 제이슨은 그냥 텍스트로 만들어진 형태이며, 자바스립트의 객체와 형식이 매우 비슷. 단 제이슨은 ""이 거의 다 들어감.
let obj4 = JSON.parse(JSON.stringify(obj1));
//                         stringify : 객체를 JSON 형태의 문자열로 바꾸는 매소드.
obj4.name = "또치";
obj4.etc.addr = "서울";
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);
