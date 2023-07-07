const cat1 = document.querySelector(".cat1");
const scoreDisplay = document.querySelector(".score");
const resetBtn = document.querySelector(".reset");

let score; // 로컬 스토리지에서 점수 불러오기
let isClicked = false; // 클릭 상태를 저장하는 변수
let previousSrc = cat1.src;

const changeCat = () => {
    if (!isClicked) {
        if (score % 100 === 0) {
            cat1.src = "./cat3.png";
        } else {
            cat1.src = "./cat2.png";
        }
        
        isClicked = true; // 클릭 상태로 변경
        score++;
        const audio = new Audio('./bbyk.mp3');
        audio.play();
        // 로컬 스토리지에 점수 저장
        localStorage.setItem("score", score);
        scoreDisplay.textContent = score; 
    }
};

window.addEventListener('load', () => {
    score = localStorage.getItem('score');
    scoreDisplay.textContent = score;
});

const restoreCat = () => {
    if (isClicked) {
        cat1.src = previousSrc; // 이전 이미지로 변경
        isClicked = false; // 클릭 상태 해제
    }

};

const reset = () => {
        localStorage.clear();
        score = 0;
        scoreDisplay.textContent = score;
}

cat1.addEventListener("mousedown", changeCat);
document.addEventListener("keydown", changeCat);
cat1.addEventListener("mouseup", restoreCat);
document.addEventListener("keyup", restoreCat);
resetBtn.addEventListener("click", reset);