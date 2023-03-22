let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuItem = document.querySelector(".menu__item");

const menuPressed = e => {
  menu.classList.toggle('menu--visible');
}

menu.addEventListener("click", menuPressed);

menuButton.addEventListener('click', function () {
  menu.classList.toggle('menu--visible');
});


