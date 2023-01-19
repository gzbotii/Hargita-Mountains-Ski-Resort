const navMobile = document.getElementById("nav_mobile");

function hamburgr() {
  navMobile.classList.toggle("nav_mobile_open");
}

// Add an event listener to the navMobile element that listens for a click event
navMobile.addEventListener("click", hamburgr);

if (window.innerWidth < 1080) {
  const topElementsHeight =
    document.querySelector(".top-elements").offsetHeight;
  const weatherHeight = document.querySelector(".weather").offsetHeight;
  const totalHeight = topElementsHeight + weatherHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    totalHeight - 1 + "px"
  );
} else {
  const navigationHeight = document.querySelector("nav").offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight - 1 + "px"
  );
}
