  // 날짜 숫자를 업데이트하는 화살표 함수
  const updateDateNumbers = () => {
    // today와 total의 span 요소를 가져옵니다.
    const todaySpan = document.getElementById("today");
    const totalSpan = document.getElementById("total");

    // today와 total의 현재 값을 가져옵니다.
    let today = parseInt(todaySpan.innerText);
    let total = parseInt(totalSpan.innerText);

    // 값을 증가시킵니다.
    today++;
    total++;

    // 새로운 값을 span 요소에 업데이트합니다.
    todaySpan.innerText = today;
    totalSpan.innerText = total;
  };

  // 페이지가 로드될 때 updateDateNumbers 함수를 호출합니다.
  window.addEventListener("load", updateDateNumbers);
