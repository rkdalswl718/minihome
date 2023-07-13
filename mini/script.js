const totalDisplay = document.getElementById("total");
const todayDisplay = document.getElementById("today");
let today = localStorage.getItem('today') || 1;
let total = localStorage.getItem('total') || 6432;
const currentDate = new Date();
const lastResetDate = localStorage.getItem('lastResetDate');
const resetTime = 0;

if (!lastResetDate || currentDate.getDate() > parseInt(lastResetDate)) {
  today = 1;
  localStorage.setItem('lastResetDate', currentDate.getDate());
}

const increaseToday = () => {
  today++;
  todayDisplay.innerText = today;
  localStorage.setItem('today', today);
};

const increaseTotal = () => {
  total++;
  totalDisplay.innerText = total;
  localStorage.setItem('total', total);
};

const resetToday = () => {
  today = 1;
  todayDisplay.innerText = today;
  localStorage.setItem('today', today);
  localStorage.setItem('lastResetDate', currentDate.getDate());
};

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  audio.play();
});

// 하루가 지나면 자동으로 초기화하는 함수 호출
if (!lastResetDate || currentDate.getDate() > parseInt(lastResetDate)) {
  resetToday();
} else {
  increaseToday();
}

increaseTotal();
