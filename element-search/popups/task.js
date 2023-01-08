let close = [...document.querySelectorAll('.modal__close')];
let show = document.querySelector('.show-success');
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success');
let modal = document.querySelector('.modal');

window.onload = function(){
  modal.className = 'modal modal_active'
}

for (let i = 0; i < close.length; i++){
  close[i].onclick = function(){
    close[i].closest('.modal').remove('modal_active');
  }
}

show.onclick = function(){
  modalMain.remove('modal_active');
  modalSuccess.className = 'modal modal_active';
};






