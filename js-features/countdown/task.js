let time = 1200;
let count = document.getElementById("timer");

setInterval(timeDown,1000);

function timeDown(){
  let minutes = Math.floor(time/60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let hour = Math.floor(minutes/60);
  hour = hour < 10 ? '0' + hour : hour;
  let second =  time%60;
  second = second < 10 ? '0' + second : second;
  count.innerHTML = `${hour}:${minutes}:${second}`;
  time --;
  if (time === -2) {
    alert('Вы победили в конкурсе')
    location.reload(true);
  }
}
