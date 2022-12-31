let close = [...document.querySelectorAll('.modal__close')];
let show = document.querySelector('.show-success');
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success');

close[0].onclick = function(){
  modalMain.remove('modal_active');
};

show.onclick = function(){
  modalMain.remove('modal_active');
  modalSuccess.className = 'modal modal_active';
};

close[2].onclick = function(){
  modalSuccess.remove('modal_active');
};





