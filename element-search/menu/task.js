const menuLink = [...document.querySelectorAll('.menu__link')];

menuLink.forEach((element) => {
  element.onclick = function(){
    const menu = element.closest('.menu');
    if (!menu) {
      return;
    }
    menu.classList.toggle('menu_active');
    return false;
  }
});