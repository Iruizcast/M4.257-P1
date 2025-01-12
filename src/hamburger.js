const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
});