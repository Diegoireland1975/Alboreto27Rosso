// function onClickMenu() {
//   document.getElementById("hamburger").classList.toggle("change");
//   document.querySelector(".nav-links").classList.toggle("change");
// }

// // Hamburger Menu
const menu = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("show");
  nav.classList.toggle("show");
});
// change header opacity on scroll
const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mainHeader.style.opacity = 0.96;
  } else {
    mainHeader.style.opacity = 1;
  }
});

// ##################
// LOAD MORE BUTTON
// ###################
const wrapper = document.querySelectorAll("#wrapper");
const btnLoadMore = document.querySelector("#btn-load-more");
let currentImg = 2;

btnLoadMore.addEventListener("click", () => {
  for (let i = currentImg; i < currentImg + 1; i++) {
    if (wrapper[i]) {
      wrapper[i].style.display = "inline-flex";
    }
  }
  currentImg += 1;
  if (currentImg >= wrapper.length) {
    btnLoadMore.style.display = "none";
  }
});
