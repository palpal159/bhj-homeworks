let clicker__counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let count = 0;

cookie.onclick = function(){
  count++;
  clicker__counter.innerHTML = `${count}`;
  changeSide();
}

function changeSide(){
  if (cookie.width === 200) {
    cookie.width = 210;
  } else if (cookie.width === 210) {
    cookie.width = 200;
  }
}