const headerHeight = document.querySelector(".header").offsetHeight;

let mixerPortfolio = mixitup(".projects__list", {
  selectors: {
    target: ".projects__item",
  },
  animation: {
    duration: 300,
  },
});
/* Link active work */

const linkWork = document.querySelectorAll(".project__filter-item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// SWIPER.JS
let son = 2;
if (document.body.style.width < 1011) {
  son = 1;
} else {
  const hero = document.querySelector(".hero");
  hero.style.height = `calc(100vh - ${headerHeight}px)`;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: son,
  spaceBetween: 60,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 60,
  slidesPerGroup: 1,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
