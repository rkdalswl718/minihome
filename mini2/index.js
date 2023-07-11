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
  localStorage.setItem('total',total);
}


window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.play();
  });


  increaseToday();
  increaseTotal();