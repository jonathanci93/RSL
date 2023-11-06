
/** ----------------NAV FUNCTIONS-------- **/
/**---- Cambio de logos y que se muestre el menu---**/
const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav__container');
const navLinks = document.querySelectorAll('.nav__link');
navButton.addEventListener('click',() =>{
    navMenu.classList.toggle('nav__container--active');
    if(navMenu.classList.contains('nav__container--active')){
        navButton.setAttribute('src', './img/close.png');
    } else {navButton.setAttribute('src', './img/icon-hamburger.svg')
}
})


/**---- En caso que se reajuste la pantalla con el menu abierto se cierre---**/
window.addEventListener('resize', ()=>{
    const isMenuActive = document.querySelector('.nav__container--active');
    if (isMenuActive) {
        navMenu.classList.remove('nav__container--active')
        navButton.setAttribute('src', './img/icon-hamburger.svg')
    }
})
/**---- Funcion al dar click a los enlaces se cierre el menu---**/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('nav__container--active')) {
            navMenu.classList.remove('nav__container--active');
            navButton.setAttribute('src', './img/icon-hamburger.svg');
        }
    });
});

/** ----------------SLIDER FUNCTIONS-------- **/
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function () {
    Next();
});

function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnLeft.addEventListener('click', function () {
    Prev();
});