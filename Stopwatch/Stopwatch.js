let hour = document.querySelector('.container .timer .hour'); 
let minute = document.querySelector('.container .timer .minute');     
let second = document.querySelector('.container .timer .sec');     
let millisecond = document.querySelector('.container .timer .ms');
let startBtn = document.querySelector('.container .start');
let stopBtn = document.querySelector('.container .stop');
let lapBtn = document.querySelector('.container .lap');
let resetBtn = document.querySelector('.container .reset');
let lapContainer = document.querySelector('.container .lap-container');
let container = document.querySelector('.container');

let hr = min = sec = ms = "0" + 0;
let startTimer;
let lapNum = 0;

let start =()=>{
startTimer = setInterval(()=>{
   ms++;
   ms = ms < 10 ? "0" + ms : ms;
   if(ms == 100){
    sec++;
    ms = "0" + 0;
    sec = sec < 10 ? "0" + sec : sec;
   }
   if(sec == 60){
      min++;
      sec = "0" + 0;
      min =  min < 10 ? "0" + min : min;
   }
   if(min == 60){
     hr++;
     min = "0" + 0;
     hr = hr < 10 ? "0" + hr : hr;
   }
   putValue();
 },10);
 resetBtn.style.display = 'none';
 startBtn.style.display = 'none';
 lapBtn.style.display = 'block';
 stopBtn.style.display = 'block';
}

let putValue =()=>{
  millisecond.innerHTML = ms;
  second.innerHTML = sec;
  minute.innerHTML = min;
  hour.innerHTML = hr;
}

let lap = () => {
 container.style.height = '450px';
 lapContainer.style.display = 'block';
 lapNum++;
 let elem = document.createElement('li');
 let lapText = `<span class="lap-num">Lap ${lapNum}</span><span class="lap-timer">${hr}:${min}:${sec}.${ms}</span>`;
 elem.innerHTML = lapText;
 lapContainer.appendChild(elem);
}  

let stop =()=>{
 clearInterval(startTimer);  
 resetBtn.style.display = 'block';
 startBtn.style.display = 'block';
 lapBtn.style.display = 'none';
 stopBtn.style.display = 'none';
}

let reset =()=>{
 hr = min = sec = ms = "0" + 0;
 container.style.height = '280px';
 lapContainer.style.display = 'none';
 lapContainer.innerHTML = '';
 lapNum = 0;
 putValue();
}
