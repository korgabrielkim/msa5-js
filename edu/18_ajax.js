// 예제 : https://picsum.photos/v2/list?page=2&limit=100
// BaseURL : https://picsum.photos
// Resource/Path : /v2/list
// parameter :
//      - page : number
//      - limit : number
//      -> key : value
//특이사항 : 이미지는 1,000개가 준비되어 있다.
const form = document.querySelector("form");
// 만약, form이 html에 다수가 있다면 가장 위에 있는 하나가 잡히게 됨.
// = : 대입연산자 / 이퀄
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 기존 이벤트 취소.

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(event.target)해서 필요한 값 획득.
  const page = event.target.page.value;
  //event.target : 현재 form에 기능을 추가하는 것이기에 form의 event에 접근.
  // .page : form 안에 있는 name이 page에 접근
  // .value : 입력값
  const limit = event.target.limit.value;
});
