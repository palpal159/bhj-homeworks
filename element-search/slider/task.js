const sliderItems = [...document.querySelectorAll('.slider__item')];
const nextButton = document.querySelector('.slider__arrow_prev');
const prevButton = document.querySelector('.slider__arrow_next');
let currentIndex = 0;


function next(){
  const current = currentIndex;
  if (currentIndex === sliderItems.length -1) {
    currentIndex = 0;
  } else {
    currentIndex +=1;
  }
  changeSlide(current, currentIndex);
};

function prev(){
  const current = currentIndex;
  if (currentIndex === 0) {
    currentIndex = sliderItems.length -1;
  } else {
    currentIndex -=1;
  }
  changeSlide(current, currentIndex);
};

function changeSlide(current, active){
  sliderItems[current].classList.remove('slider__item_active');
  sliderItems[active].classList.add('slider__item_active');
}

nextButton.onclick = next;
prevButton.onclick = prev;