const carousel = document.getElementById('car_con');
const tab_num = document.getElementById('table_number')
const items = document.querySelectorAll('.carousel_item');
let currentIndex = 0;

function rotar_d() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    tab_num.innerHTML = `${currentIndex + 1}/3`;
}

function rotar_i() {
    currentIndex = (currentIndex === (items.length - 1)) ? 0 : currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    tab_num.innerHTML = `${currentIndex + 1}/3`;
}