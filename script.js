
let current = 0;
let slides = [];
let currentLang = "id";

function startSlides() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slider").style.display = "flex";
  slides = document.querySelectorAll(".slide");
  showSlide(current);
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current++;
  if (current >= slides.length) current = slides.length - 1;
  showSlide(current);
  new Audio("click.mp3").play();
}

function toggleLanguage() {
  currentLang = currentLang === "id" ? "tr" : "id";
  slides.forEach(slide => {
    const lang = slide.getAttribute("data-id");
    if (lang === currentLang || lang === "all") {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  showSlide(current = 0);
}
