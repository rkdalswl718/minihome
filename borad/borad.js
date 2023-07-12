const totalDisplay = document.getElementById("total");
const todayDisplay = document.getElementById("today");
let today = localStorage.getItem('today') || 1;
let total = localStorage.getItem('total') || 6432;
const currentDate = new Date();
const lastResetDate = localStorage.getItem('lastResetDate');
const resetTime = 0;
const chatBox = document.querySelector(".chat");
const inputForm = document.getElementById('comment-form');
const cancelButton = document.querySelector('.form-cancel');

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


const commentForm = document.getElementById('comment-form');
        const commentList = document.getElementById('comment-list');

        // 이전에 저장된 방명록 로드
        const savedComments = JSON.parse(localStorage.getItem('guestbookComments')) || [];
        commentList.innerHTML = savedComments.join('');
        // 배열의 모든 요소를 하나의 문자열로 결합, 그 결과를 commentList 내용으로 설정하는 역할

        commentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const { name, comment } = e.target.elements;
            const timestamp = new Date().toLocaleString();
            const newComment = `<div class="comment"><p></p><span class="name">${name.value}
            </span><span class="timestamp">${timestamp}</span></p>
            <p>${comment.value}</p></div>`;
            commentList.insertAdjacentHTML('afterbegin', newComment);
            e.target.reset();

            // 새로운 방명록을 로컬 스토리지에 저장
            savedComments.unshift(newComment);
            localStorage.setItem('guestbookComments', JSON.stringify(savedComments));
        });


chatBox.addEventListener('click', () =>{
  inputForm.style.display = 'block';
})

cancelButton.addEventListener('click', () => {
  inputForm.style.display = 'none';
})