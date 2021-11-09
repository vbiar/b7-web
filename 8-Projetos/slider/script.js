const qS = (el) => document.querySelector(el);
const qSA = (el) => document.querySelectorAll(el);

let totalSlide = qSA('.slider--item').length;
let currentSlide = 0;

qS('.slider--width').style.width = `calc(100vw *  ${totalSlide})`;
qS('.slider--controls').style.height = `${qS('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlide - 1;
    }
    updateMargin();
};

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlide -1 )) {
        currentSlide = 0;
    }
    updateMargin();
};

function updateMargin() {
    let sliderItemWidth = qS('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    qS('.slider--width').style.marginLeft = `-${newMargin}px`
}


setInterval (goNext, 5000);