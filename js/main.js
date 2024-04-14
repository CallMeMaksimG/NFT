const modalOpenBtn = document.querySelector('.header__btn');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalWindow = document.querySelector('.modal');
const blur = document.querySelector('.blur');
const mobileMenu = document.querySelector('.nav-list');
const navLogo = document.querySelector('.nav__logo');
const body = document.querySelector('.body');

const burgerBtn = document.querySelector('.burger-btn');

modalOpenBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal--open');
    blur.classList.add('blur--open');
    body.classList.add('body--no-scroll');
});

modalCloseBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal--open');
    blur.classList.remove('blur--open');
    body.classList.remove('body--no-scroll');
});

burgerBtn.addEventListener('click', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.classList.toggle('burger-icon--active');
    mobileMenu.classList.toggle('nav-list--active');
    navLogo.classList.toggle('nav__logo--hidden');
    blur.classList.toggle('blur--open');
    body.classList.toggle('body--no-scroll');
});
