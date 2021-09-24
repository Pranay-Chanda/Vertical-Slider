const container = document.querySelector('.container');
const slideRight = document.querySelector('.rightSlider');
const slideLeft = document.querySelector('.leftSlider');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');
const sliderLength = slideRight.querySelectorAll('div').length;

let slideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight;
    if (direction === 'up') {
        slideIndex++;
        if (slideIndex > sliderLength - 1) {
            slideIndex = 0;
        }
    } else if (direction === 'down') {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = sliderLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(+${slideIndex * sliderHeight}px)`;
}