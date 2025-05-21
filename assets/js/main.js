



const newsItem = document.querySelectorAll('.news__item');
console.log(newsItem);
newsItem.forEach(el => {
  el.addEventListener('hover', (e) => {
    console.log(e.target);
  }
);
})






const swiper = new Swiper(".mySwiper", {
  spaceBetween: 90,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    480: {
      slidesPerView: 1,

    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1124: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 90,
    },
  },
  pagination: {
    el: '.swiper-pagination',

  },
});
const swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper,
  },

});
let swiperFacts = null;

function initFactsSlider() {
  const mobile = window.innerWidth <= 800;

  if (mobile && !swiperFacts) {
    swiperFacts = new Swiper(".swiper-facts", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.sw-facts-pagination',
      },
    });
  } else if (!mobile && swiperFacts) {
    swiperFacts.destroy(true, true);
    swiperFacts = null;
  }
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initFactsSlider, 200);
});

initFactsSlider();

const swiperUsely = new Swiper(".sw-usely", {

  slidesPerView: 1,
  freeMode: false,
  // centeredSlides: true,

  pagination: {
    el: '.sw-usely-pagination',
    type: "progressbar",

  },
  navigation: {
    nextEl: ".sw-btn-next-usely",
    prevEl: ".sw-btn-prev-usely",
  },




});


// const swiperFeature = new Swiper(".sw-feature", {
//   slidesPerView: 1,
//   freeMode: true,
//   loop: true,


//   // spaceBetween: 50,
// });


let swiperFeatures = null;

function initFeatureSlider() {
  const mobile = window.innerWidth <= 800;

  if (mobile && !swiperFeatures) {
    swiperFeatures = new Swiper(".sw-feature", {
      slidesPerView: 'auto',
      navigation: {
        nextEl: ".sw-btn-next-feature",
        prevEl: ".sw-btn-prev-feature",
      },
    });
  } else if (!mobile && swiperFeatures) {
    swiperFeatures.destroy(true, true);
    swiperFeatures = null;
  }
}

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initFeatureSlider, 200);
});

initFeatureSlider();







