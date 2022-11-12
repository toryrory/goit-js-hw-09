function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);
let timerId = 0;
stopBtn.setAttribute('disabled', 'true');
while (startBtn.onClickStart) {
  
}
  function onClickStart() {
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', 'true');
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

function onClickStop() {
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'true');
    clearInterval(timerId);
}
// как красивее организовать переключение кнопок?