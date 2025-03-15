const carousel = document.getElementById('car_con');
const items = document.querySelectorAll('.carousel_item');
let currentIndex = 0;

function rotar() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}