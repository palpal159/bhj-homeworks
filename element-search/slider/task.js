const sliderItems = [...document.querySelectorAll('.slider__item')];
const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
let currentIndex = sliderItems.findIndex(index => index.classList.value.includes('slider__item_active'));


function next(){
  const current = currentIndex;
  currentIndex = currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
  changeSlide(current, currentIndex);
};

function prev(){
  const current = currentIndex;
  currentIndex = currentIndex === 0 ? sliderItems.length - 1 : currentIndex + 1;
  changeSlide(current, currentIndex);
};

function changeSlide(current, active){
  sliderItems[current].classList.remove('slider__item_active');
  sliderItems[active].classList.add('slider__item_active');
};

nextButton.onclick = next;
prevButton.onclick = prev;