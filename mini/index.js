const todayDisplay = document.getElementById("today");
const totalDisplay = document.getElementById("total");
let today = 1;


window.addEventListener('DOMContentLoaded',() => {
  today ++;
  todayDisplay.innerText = today;
})


window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.play();
  });