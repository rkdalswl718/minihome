const todaySpan = document.getElementById("today");
const totalSpan = document.getElementById("total");

const updateVisitCount = () => {
  const currentTime = new Date();
  const currentDay = currentTime.getDate().toString(); // 현재 날짜를 문자열로 변환
  const storedDate = localStorage.getItem("date"); // 이전에 저장된 날짜 정보 가져옴

  if (storedDate && storedDate !== currentDay) {
    localStorage.setItem("date", currentDay);
    todaySpan.innerText = "1";
  } else {
    let today = parseInt(todaySpan.innerText.trim());
    today++;
    todaySpan.innerText = today.toString(); // 숫자를 문자열로 변환하여 설정
  }

  let total = parseInt(totalSpan.innerText.trim()); // total의 현재 값을 가져옴
  total++;
  totalSpan.innerText = total.toString(); // 숫자를 문자열로 변환하여 설정
};

const resetVisitCountAtMidnight = () => {
  setInterval(() => {
    updateVisitCount();
  }, 1000 * 60 * 60 * 24); // 하루마다 실행
};

window.addEventListener("load", resetVisitCountAtMidnight);
window.addEventListener("load", updateVisitCount);
