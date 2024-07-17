
const stopwatch = document.getElementById("stopwatch");
let starttime = 0;
let timerinterval = null;
let elaspedtime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime =Date.now() - elaspedtime;
        timerinterval = setInterval(updatetime, 100);
        isrunning = true;
    }
}
function stop(){
    if(isrunning){
        clearInterval(timerinterval);
        elaspedtime = Date.now() - starttime;
        isrunning = false;
    }
}
function reset(){
    clearInterval(timerinterval);
    elaspedtime= 0;
    isrunning = false;
    stopwatch.textContent = `00:00:00:00`;
}
function updatetime(){
    elaspedtime = Date.now() - starttime;
    let hours = Math.floor(elaspedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspedtime / 1000 % 60);
    let milliseconds = Math.floor(elaspedtime % 100);

    stopwatch.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}


