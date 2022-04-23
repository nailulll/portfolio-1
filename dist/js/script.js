window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fix");
  } else {
    header.classList.remove("navbar-fix");
  }
};
// Hamburger
const hamburher = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
  hamburher.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});
// NavbarFix
window.addEventListener("click", function (e) {
  if (e.target != navbar && e.target != hamburher) {
    hamburher.classList.remove("hamburger-active");
    navbar.classList.add("hidden");
  }
});
// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = 'dark';
  } else {
    html.classList.remove("dark");
    localStorage.theme = 'light';
  }
});

// pindah posisi toggle
if (localStorage.theme == 'dark' || (!('theme' in localStorage) && window.watchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
}else{
  darkToggle.checked = false;
}