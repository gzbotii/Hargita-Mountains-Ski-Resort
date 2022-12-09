const navMobile = document.getElementById("nav_mobile");

function hamburgr() {
  navMobile.classList.toggle("nav_mobile_open");
}

// Add an event listener to the navMobile element that listens for a click event
navMobile.addEventListener("click", hamburgr);

const navigationHeight = document.querySelector("nav").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);
