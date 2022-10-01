const headerHeight = document.querySelector('.header').offsetHeight
console.log(headerHeight);
const hero = document.querySelector('.hero')
hero.style.height = `calc(100vh - ${headerHeight}px)`


let mixerPortfolio = mixitup('.projects__list', {
    selectors: {
        target: '.projects__item'
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ 

const linkWork = document.querySelectorAll('.project__filter-item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click',activeWork))

// SWIPER.JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
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
