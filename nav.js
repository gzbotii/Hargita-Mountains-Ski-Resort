const navMobile = document.getElementById("nav_mobile");

function hamburgr() {
  navMobile.classList.toggle("nav_mobile_open");
}

const navigationHeight = document.querySelector("nav").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
