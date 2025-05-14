
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.getElementById('controls');
const slidesContainer = document.getElementById('slides');
const clickSound = document.getElementById("click-sound");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  if (slidesContainer.classList.contains('hidden')) {
    slidesContainer.classList.remove('hidden');
    controls.classList.remove('hidden');
  }
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function toggleLanguage() {
  currentSlide = (currentSlide + 2) % slides.length;
  showSlide(currentSlide);
}

function playClickSound() {
  clickSound.play();
}
