
const slider = document.querySelector('.mainslider');
const slides = document.querySelectorAll('.slide'); 

let currentIndex = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const updateSliderPosition = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

const rightArrow = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log("right clicked");
    updateSliderPosition();
}
const leftArrow = () => {
    currentIndex = (currentIndex -1) % slides.length;
    console.log("left clicked");
    updateSliderPosition();
}


document.querySelector('.right-arrow').addEventListener('click', rightArrow);
document.querySelector('.left-arrow').addEventListener('click', leftArrow);

