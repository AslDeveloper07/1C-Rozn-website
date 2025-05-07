

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


// Toggle sidebar open/close
document.getElementById('navbarToggle').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // Toggle sidebar
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');

  // Change menu icon
  const menuIcon = this.querySelector('i');
  menuIcon.classList.toggle('ri-menu-fill');
  menuIcon.classList.toggle('ri-close-line');
});

// Close sidebar when clicking overlay
document.getElementById('overlay').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const navbarToggle = document.getElementById('navbarToggle');

  sidebar.classList.remove('open');
  this.classList.remove('active');

  // Reset menu icon
  const menuIcon = navbarToggle.querySelector('i');
  menuIcon.classList.remove('ri-close-line');
  menuIcon.classList.add('ri-menu-fill');
});

// Accordion functionality for sidebar items
document.querySelectorAll('.sidebar__header').forEach(header => {
  header.addEventListener('click', function() {
      const item = this.parentElement;
      const wasActive = item.classList.contains('active');

      // Close all items first
      document.querySelectorAll('.sidebar__item').forEach(i => {
          i.classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!wasActive) {
          item.classList.add('active');
      }
  });
});