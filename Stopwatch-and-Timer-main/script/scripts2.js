const daysEL = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('min');
const secondsEl = document.getElementById('seconds');

var newDates = "15 Aug 2023 ";
var newTime='20:30:00:00';

function countdown(){
    const newYearsDate = new Date(newDates);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    
    daysEL.innerHTML= days;
    hoursEl.innerHTML= hours;
    minsEl.innerHTML= minutes;
    secondsEl.innerHTML= seconds;
}

document.getElementById("change-date").addEventListener("click",newDate)

function newDate(){
Events.innerHTML = prompt("What is the  name of event");
newDates = prompt("What is the new Date eg 24 Aug 2023 HH:MM:SS");
}

countdown();

setInterval(countdown,1000);