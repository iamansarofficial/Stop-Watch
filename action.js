const sw=document.querySelector("#sw");
const startBtn=document.querySelector("#startBtn");
const pauseBtn=document.querySelector("#pauseBtn");
const restartBtn=document.querySelector("#restartBtn");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true
let intervalId;
let min=0;
let hrs=0;
let secs=0;

startBtn.addEventListener("click",() => {
    if (paused) {
        paused=false;
        startTime=Date.now() - elapsedTime;
        intervalId=setInterval(updateTime,1000);
    }
});
pauseBtn.addEventListener("click",() => {
    if (!paused) {
        paused=true;
        elapsedTime=Date.now() - startTime;
       clearInterval(intervalId);
    }
});
restartBtn.addEventListener("click",() => {
    
        paused=true;
        clearInterval(intervalId);
        let startTime=0;
        elapsedTime=0;
        currentTime=0;
        min=0;
        hrs=0;
        secs=0;
        sw.textContent="00:00:00";

    
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    min = pad(min);
    hrs = pad(hrs);

    sw.textContent = `${hrs}:${min}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
