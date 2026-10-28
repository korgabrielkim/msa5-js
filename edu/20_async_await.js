const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (str === "a" || str === "b" || str === "c") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않는 문자가 입력되었다."));
      }
    }, ms);
  });
};

// async await 원칙 : 함수 정의를 할 때 그 앞에 반드시 async를 넣어줘야함.
const process = async () => {
  try {
    const result1 = await timer("a");
    console.log(result1.code, result1.word);
    const result2 = await timer("b");
    console.log(result2.code, result2.word);
    const result3 = await timer("d");
    console.log(result3.code, result3.word); // 이 경우 실행 X. why? timer("d")의 결과가 reject이기 때문에 바로 catch문으로 감.
  } catch (error) {
    console.log(error.message);
  }
};
process();
