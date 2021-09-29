const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const lastPosition = window.scrollY;
  if (lastPosition > 50) {
    navbar.classList.add("nav-active");
  } else if (navbar.classList.contains("nav-active")) {
    navbar.classList.remove("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
});
