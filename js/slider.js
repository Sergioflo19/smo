const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
}

/* Auto slide suave */
setInterval(() => {
  nextSlide();
}, 5000);
