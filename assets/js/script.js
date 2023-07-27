// Event Listener for Menu Button
const menuBtn = document.querySelector("#menuBtn");
const openMenu = document.querySelector('.nav__navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu__Btn--active');
  openMenu.classList.toggle('nav__navigation--active');
});

// nav background change on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('nav--active', window.scrollY > 0);
});