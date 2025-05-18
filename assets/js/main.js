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

const swiperFacts = new Swiper(".swiper-facts", {

  slidesPerView: 1,
  freeMode: false,
  pagination: {
    el: '.sw-facts-pagination',
  },
  // breakpoints: {
  //   290: {
  //     slidesPerView: 1,
  //     spaceBetween: 100,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1194: {
  //     slidesPerView: 2,
  //   },
  //   1440: {
  //     slidesPerView: 1,
  //   },
  // },
});

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


    const swiperFeature = new Swiper(".sw-feature", {
      slidesPerView: 2.2,
      freeMode: true,
      loop: true,

      // spaceBetween: 50,
    });









