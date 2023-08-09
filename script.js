
// ......Swiper One
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,
  autoplay: true,
  delay: 6000,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
// .................Loader page

let loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
//.............. Swiper Two
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  freeMode: true,
  autoplay: true,
  delay: 6000,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 180px
    180: {
      slidesPerView: 1,
      spaceBetween: 28,
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
//............. Swiper Three 3
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop:true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 180px
    180: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  },
}); 

// ............. Swiper 4
var swiper = new Swiper(".mySwiper4", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  autoplay: true,
  delay: 9000,
  slidesPerView: 1,
  spaceBetween: 30,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 180px
    180: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
});

//.................... Swiper Five 5

var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 180px
    180: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    // when window width is >= 700px
    500: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


//.................... Swiper Five 6

var swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 180px
    180: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 900px
    960: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// ........................Show nav 2
let nav2 = document.getElementById("nav2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    nav2.classList.add("play");
  } else {
    nav2.classList.remove("play");
  }
});
//  ........................Show Search Page
let searchpage = document.getElementById("search-page");
let searchbtn = document.getElementById("search-btn");
let searchclose = document.getElementById("search-close-btn");

searchbtn.addEventListener("click", () => {
  searchpage.classList.add("open");
  searchclose.addEventListener("click", () => {
    searchpage.classList.remove("open");
  });
});

// .......................Show navbar-menu

let navbarmenu = document.getElementById("navbar-menu");
let navbarbtn = document.getElementById("navbar-bar-icon");
let navbarclose = document.getElementById("menu-close-icon");

navbarbtn.addEventListener("click", () => {
  navbarmenu.classList.add("opened");
  navbarclose.addEventListener("click", () => {
    navbarmenu.classList.remove("opened");
  });
});
// // //  Counter-Up for Numbers (chiffres)
// $('.count').counterUp({
//   delay: 1,
//   time: 800
// });