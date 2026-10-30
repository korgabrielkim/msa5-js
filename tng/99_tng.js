// 예제 : https://picsum.photos/v2/list?page=2&limit=100 // 파라미터(키와 값으로 세팅)에는 객체를 넣을 수 없다. 기본적으로 string임.
// BaseURL : https://picsum.photos
// Resource/Path : /v2/list
// parameter :
//      - page : number
//      - limit : number
//      -> key : value
//특이사항 : 이미지는 1,000개가 준비되어 있다.

const nextBtn = document.querySelector(".next-btn");
const resetBtn = document.querySelector(".reset-btn");
let page = 0;
const cardContainer = document.querySelector(".card-container");
const limit = 3;
nextBtn.addEventListener("click", async () => {
  nextBtn.disabled = true;
  page += 1;
  const baseUrl = `https://picsum.photos`;
  const path = `/v2/list`;
  const url = `${baseUrl}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    // cardContainer.textContent = "";
    response.data.forEach((item, idx) => {
      // <div class="card">
      //   <div class="card-img"></div>
      //   <div class="card-txt">
      //     <p>0: Alejandro</p>
      // </div>
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url(${item.download_url})`;

      const cardTxt = document.createElement("div");
      cardTxt.classList.add("card_txt");
      cardTxt.textContent = `${item.id}:${item.author}`;

      const card = document.createElement("div");
      card.classList.add("card");
      card.appendChild(cardImg);
      card.appendChild(cardTxt);

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
  setTimeout(() => {
    nextBtn.disabled = false;
  }, 500);
});
resetBtn.addEventListener("click", () => {
  console.log("확인");
  page = 0;
  cardContainer.textContent = "";
});
