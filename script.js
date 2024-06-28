const navIcon = document.querySelector('.nav__icon');
const navIconTop = document.querySelector('.nav__icon--top');
const navIconMiddle = document.querySelector('.nav__icon--middle');
const navIconBottom = document.querySelector('.nav__icon--bottom');
const navMenu = document.querySelector('.nav__menu');
const navMenuContainer = document.querySelector('.nav__menu--container');

navIcon.addEventListener('mouseover', () => {
  navIconTop.classList.add('nav__icon--top--hover');
  navIconBottom.classList.add('nav__icon--bottom--hover');
});

navIcon.addEventListener('mouseleave', () => {
  navIconTop.classList.remove('nav__icon--top--hover');
  navIconBottom.classList.remove('nav__icon--bottom--hover');
});

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('nav__icon--active');
  navIconTop.classList.toggle('nav__icon--top--click');
  navIconMiddle.classList.toggle('nav__icon--middle--click');
  navIconBottom.classList.toggle('nav__icon--bottom--click');
  navMenu.classList.toggle('nav__menu--active');
  navMenuContainer.classList.toggle('hidden');
});
