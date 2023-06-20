const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguer = document.querySelector('.menu');
const menuX = document.querySelector('.menu-x');
const menuOption = document.querySelectorAll('.mobile-menu-option');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('menu-mobile-active');
}menuOption.forEach((option) => {
  option.addEventListener('click', toggleMobileMenu);
});

menuHamburguer.addEventListener('click', toggleMobileMenu);
menuX.addEventListener('click', toggleMobileMenu);
