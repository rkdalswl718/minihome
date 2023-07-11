const gameBoard = document.querySelector('.gameBoard');
const scoreDisplay = document.querySelector('.score');
const timerDisplay = document.createElement('h3');
const timerInput = document.getElementById('timer');
const startButton = document.getElementById('startButton');
let score = 0;
let timer = 0; // 타이머 초기값
let gameStarted = false; // 게임 시작 여부

gameBoard.addEventListener('click', (event) => {
    if (gameStarted && event.target.classList.contains('apple')) {
        event.target.remove();
        score++;
        scoreDisplay.textContent = score;
        createApple();
    }
});

const createApple = () => {
    const apple = document.createElement('img');
    apple.src = 'https://emojigraph.org/media/apple/red-apple_1f34e.png';
    apple.classList.add('apple');
    const x = getRandomCoordinate();
    const y = getRandomCoordinate();
    apple.style.left = x + 'px';
    apple.style.top = y + 'px';

    gameBoard.appendChild(apple);
};

const getRandomCoordinate = () => {
    return Math.floor(Math.random() * 370); // 랜덤 좌표 400
};

const updateTimer = () => {
    timerDisplay.textContent = `남은 시간: ${timer}초`;
};

const startTimer = () => {
    const timerInterval = setInterval(() => {
        timer--;
        updateTimer();

        if (timer === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000); // 1초마다 타이머를 업데이트
};

const endGame = () => {
    alert(`게임 종료. 점수는 ${score}점 입니다.`);
    window.location.reload()
    startButton.style.display = 'block'; // 게임 종료 후 시작 버튼 표시
    timerDisplay.style.display = 'none';
    score = 0;
    gameStarted = false; // 게임 종료
};

startButton.addEventListener('click', () => {
    timer = parseInt(timerInput.value);
    if (timer > 0) {
        initGame();
    }
});

const initGame = () => {
    gameBoard.innerHTML = '';
    gameBoard.appendChild(timerDisplay);
    updateTimer();
    startTimer();
    createApple();
    gameStarted = true; // 게임 시작
};

startButton.style.display = 'block'; // 페이지 로드 시 시작 버튼 표시

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startButton.style.display = 'none'; // 시작 버튼 숨기기
        initGame();
    }
});
