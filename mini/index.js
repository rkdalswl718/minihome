const totalDisplay = document.getElementById("total");
const todayDisplay = document.getElementById("today");
let today = localStorage.getItem('today') || 1;

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
}


window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.play();
  });


  increaseToday();