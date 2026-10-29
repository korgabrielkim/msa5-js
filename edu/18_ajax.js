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
form.addEventListener("submit", async (event) => {
  // 파라미터 앞에 async를 써줘야 await를 사용 가능.
  event.preventDefault(); // 기존 이벤트 취소.

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(event.target)해서 필요한 값 획득.
  const page = event.target.page.value;
  //event.target : 현재 form에 기능을 추가하는 것이기에 form의 event에 접근.
  // .page : form 안에 있는 name이 page에 접근
  // .value : 입력값
  const limit = event.target.limit.value; // target에서 선언한 limit로 데이터를 넘길때에는 숫자여도 문자열로 넘어감 why? html은 기본적으로 문자열로 인식.
  // fetch("url") .then() .cathch() : 현업에서 많이 사용하는 방식 X why? 예외처리를 하나하나 해줘야 함 and 유지보수성↓ and 데이터 인터셉터도 어려움.

  // ----- axios 작업 -----
  const baseUrl = `https://picsum.photos`;
  const path = `/v2/list`;
  // 자바스크립트는 숫자와 문자열을 더하면 문자열로 만들어 버림 ex) 1+"1" = "11" and 컴퓨터는 부동소수점이 적용됨
  const url = `${baseUrl}${path}?page=${page}&limit=${limit}`; // page와 limit는 변수임.

  try {
    const response = await axios.get(url);

    // <div class="card">
    //   <div class="card-img"></div> // 카드 이미지는 inline 스타일로 넣어야함.
    //   <p class="card-txt">2: 가가가가</p>
    // </div>

    // 카드를 넣을 컨테이너 요소 가져오기
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = "";
    // 더미 데이터에서 데이터를 받아와서 카드를 만들어 추가하는 작업과 같이 같은 작업을 반복하는 경우 루프를 돌려야함.
    // 단, 루프를 돌리는 방법은 너무 많음 => 결과를 어떻게 도출할거인가에 따라서 선택해서 사용.
    // map : 배열의 각 항목을 원하는 형태로 바꿔서 새로운 배열을 만들 때 사용.
    // filter : 배열에서 조건에 맞는 항목만 골라서 새로운 배열을 만들 때 사용.
    // foreach : 배열에 들어 있는 데이터를 하나씩 꺼내서 반복 실행할 때 사용. <- 현재 필요한 기능
    response.data.forEach((item, idx) => {
      //               현업 관례상 item : value, idx : index

      // ----- 출력 -----
      // 1. card-img 요소 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 2. card-txt 요소 생성
      const cardTxt = document.createElement("p");
      cardTxt.classList.add("card-txt");
      cardTxt.textContent = `${item.id}:${item.author}`;
      // textContent : 어떠한 문자열이 오더라도 순수한 문자열로 입력
      // innerHTMl : 문자열 안에 링크가 들어오면 링크로 입력 -> 보안상 위험이 있음.

      // 3. 카드 요소 생성
      const card = document.createElement("div");
      // card.classList = "card"; // classList는 기존에 속성을 덮어쓰는 특징이 있어, 주의가 필요함.
      card.classList.add("card");
      card.appendChild(cardImg);
      card.appendChild(cardTxt);

      // 자식 요소를 먼저 만든 후 부모요소를 만들면 부모요소 코딩 작업과 동시에 자식 요소를 바로 넣을 수 있음(순서 중요)

      // 4. card-container에 생성한 요소를 담는다.
      cardContainer.appendChild(card);
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
