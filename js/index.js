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

let acc = document.querySelectorAll(".questions__list__content");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Barcha accordionlarni yopamiz
    acc.forEach((item) => {
      if (item !== this) {
        item.children[1].classList.remove("accortion-active");
        let panel = item.nextElementSibling;
        panel.style.maxHeight = null;
      }
    });

    // Aktiv bo‘lsa yopamiz, yo‘q bo‘lsa ochamiz
    let panel = this.nextElementSibling;
    let icon = this.children[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.classList.remove("accortion-active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.classList.add("accortion-active");
    }
  });
}
