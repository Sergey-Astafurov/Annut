const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-mobile');
burger.addEventListener('click', () => {
  console.log('c');
  if (!nav.classList.contains('active')) {
    nav.classList.add('active');
    burger.style.overflow = 'visible';
    document.body.style.overflow = 'hidden';
  } else {
    nav.classList.remove('active');
    burger.style.overflow = 'hidden';
    document.body.style.overflow = 'visible';
  }
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

let swiperFacts;
function initFactsSlider() {
  const mobile = window.innerWidth <= 1200;

  if (mobile && !swiperFacts) {
    console.log('object');
    swiperFacts = new Swiper(".swiper-facts", {
      slidesPerView: 'auto',
      // spaceBetween: 30,
      navigation: {
        nextEl: ".sw-btn-next-facts",
        prevEl: ".sw-btn-prev-facts",
      },

    });
  } else if (window.innerWidth > 1200 && swiperFacts) {
    swiperFacts.destroy(true, true);
    swiperFacts = null;
  }
}

window.addEventListener('resize', initFactsSlider);
window.addEventListener('load', initFactsSlider);

initFactsSlider();

let swiperNewsHome;
function initNewsHomeSlider() {
  const mobile = window.innerWidth <= 852;
  if (mobile && !swiperNewsHome) {
    console.log('news');
    swiperNewsHome = new Swiper(".nw-swiper",
      {
        slidesPerView: '1',
        breakpoints: {
          852: {
            slidesPerView: '4',
          }
        },
      });
  } else if (window.innerWidth > 852 && swiperNewsHome) {
    swiperNewsHome.destroy(true, true);
    swiperNewsHome = null;
    console.log('off');
  }
}


window.addEventListener('resize', initNewsHomeSlider);
window.addEventListener('load', initNewsHomeSlider);

initNewsHomeSlider();

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

window.addEventListener('resize', initFeatureSlider);
window.addEventListener('load', initFeatureSlider);

initFeatureSlider();



const swiperNews = new Swiper(".swiper-news", {
  slidesPerView: 1,
  pagination: {
    el: ".sw-news-pagination",
  },
  breakpoints: {
    1124: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".sw-news-button-next",
    prevEl: ".sw-news-button-prev",
  },
});





