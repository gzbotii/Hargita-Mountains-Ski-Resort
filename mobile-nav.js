const navMobile = document.getElementById("nav_mobile");
const navMobileChildItem = document.querySelectorAll(".nav-mobile-child-item");

function hamburgr() {
  navMobile.classList.toggle("nav_mobile_open");
  }

function hamburgrClosed() {
  navMobileChildItem.forEach((item) => {
    // console.log(item);
    item.addEventListener("click", function() {
      console.log('click')
      
    })
  }) 
}
