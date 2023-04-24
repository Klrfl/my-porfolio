// sidebar
const body = document.body;
const sidebar = document.getElementById("sidebar");
const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarLinks = document.querySelectorAll(".navlinks");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("active");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("active");
});

for (let i = 0; i < sidebarLinks.length; i++) {
  sidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

//slide code
const slidePreviousBtn = document.getElementById("previous");
const slideNextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let currentSlide = 1;

slidePreviousBtn.addEventListener("click", () => {
  currentSlide--;
  moveSlide();
});

slideNextBtn.addEventListener("click", () => {
  currentSlide++;
  moveSlide();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = dot.dataset.slide;
    moveSlide();
  });
});

function pagination() {
  dots.forEach((dot) => {
    dot.classList.remove("active");

    if (currentSlide == dot.dataset.slide) {
      dot.classList.add("active");
    }
  });
}

function moveSlide() {
  if (currentSlide > slides.length) {
    currentSlide = 1;
  } else if (currentSlide < 1) {
    currentSlide = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100 - 100}%)`;
  });

  pagination();
}
