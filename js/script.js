let seconds = 0;
let tens = 0;
let interval;
const secondsCount = document.querySelector(".seconds");
const tensCount = document.querySelector(".tens");
const resetToggle = document.querySelector(".reset-toggle");
const startToggle = document.querySelector(".start-toggle");
const stopToggle = document.querySelector(".stop-toggle");
const timerCounter = document.querySelector(".timer-counter");

const startTimer = () => {
    tens++;
    if(tens <= 9){
        tensCount.innerHTML = "0" + tens;
    }
    if(tens > 9 && tens <= 99){
        tensCount.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        if(seconds <= 9){
            secondsCount.innerHTML = "0" + seconds;
            tens = 0;
        }
        if(seconds > 9 && seconds <= 99){
            secondsCount.innerHTML = seconds;
            tens = 0;
        }
        if(seconds > 99 && seconds <= 999){
            timerCounter.style.cssText = `font-size: 55px`;
            secondsCount.innerHTML = seconds;
            tens = 0;
        }
        if(seconds > 999){
            clearInterval(interval);
        }
    }
}

const startCounter = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

const stopCounter = () => {
    clearInterval(interval);
}

const resetCounter = () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    tensCount.innerHTML = "00";
    secondsCount.innerHTML = "00";
}

startToggle.addEventListener("click", startCounter);
stopToggle.addEventListener("click", stopCounter);
resetToggle.addEventListener("click", resetCounter);