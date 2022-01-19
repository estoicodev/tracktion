const menuIcon = document.getElementById("menu-icon"),
  menuMobile = document.getElementById("menu-mobile");

function toggleMenuMobile() {
  menuMobile.classList.toggle("nav__mobile--appear");
}

menuIcon.addEventListener("click", toggleMenuMobile);
