const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.querySelector(".nav");
const navSpan = document.querySelectorAll(".span");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("nav-active");
});

// Slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// base slider
var swiper = new Swiper(".baseSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Company slider

// base slider
var swiper = new Swiper(".companySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// Accordion
let acc = document.querySelectorAll(".questions__list__content");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.children[1].classList.toggle("accortion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
