const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".tog");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
