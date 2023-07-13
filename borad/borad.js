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

const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');
const chatBox = document.querySelector(".chat");
const inputForm = document.getElementById('post-form');
const cancelButton = document.querySelector('.form-cancel');
const imageFileInput = document.getElementById('image-file-input');
const imagePreview = document.getElementById('image-preview');

// 이전에 저장된 방명록 로드
const savedPosts = JSON.parse(localStorage.getItem('savePoster')) || [];
postList.innerHTML = savedPosts.join('');

postForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const { name, post } = e.target.elements;
  const timestamp = new Date().toLocaleString();

  if (!imageFileInput.files[0]) { //사진을 선택하지 않았을 때
    alert("사진을 선택해주세요.");
    return;
  }
  const reader = new FileReader();

  reader.onload = (event) => {
    const imageUrl = event.target.result;

    const newPost = `<div class="post">
      <p><span class="name">${name.value}</span><span class="timestamp">${timestamp}</span></p>
      <img class="img" src="${imageUrl}" alt="Uploaded Image">
      <p>${post.value}</p>
    </div>`;

    postList.insertAdjacentHTML('afterbegin', newPost);
    e.target.reset();

    // 새로운 방명록을 로컬 스토리지에 저장
    savedPosts.unshift(newPost);
    localStorage.setItem('savePoster', JSON.stringify(savedPosts));

    // 이미지 미리보기 초기화
    imagePreview.setAttribute('src', '');
    imagePreview.style.display = 'none';

    inputForm.style.display = 'none';
    chatBox.style.display = 'block';
  };
  reader.readAsDataURL(imageFileInput.files[0]);
});


imageFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const imageUrl = event.target.result;
    imagePreview.setAttribute('src', imageUrl);
    imagePreview.style.display = 'block';
  };
  
  reader.readAsDataURL(file);
});

chatBox.addEventListener('click', () => {
  chatBox.style.display = 'none';
  inputForm.style.display = 'block';
});

cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  inputForm.style.display = 'none';
  chatBox.style.display = 'block';
});


postForm.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    postForm.dispatchEvent(new Event('submit'));
    chatBox.style.display = 'block';
  }
});
