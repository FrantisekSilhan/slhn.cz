const hamburgerMenu = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});