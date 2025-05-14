
let currentSlide = 1;
const totalSlides = 4;
const msg1id = document.getElementById("msg1-id");
const msg1tr = document.getElementById("msg1-tr");
const msg2id = document.getElementById("msg2-id");
const msg2tr = document.getElementById("msg2-tr");

function openEnvelope() {
  nextSlide();
  const sound = new Audio("https://www.myinstants.com/media/sounds/pop-cat-original-meme.mp3");
  sound.play();
}

function nextSlide() {
  document.getElementById("slide" + currentSlide).classList.remove("active");
  currentSlide++;
  if (currentSlide <= totalSlides) {
    document.getElementById("slide" + currentSlide).classList.add("active");
  }
}

document.getElementById("translate-btn").addEventListener("click", () => {
  msg1id.classList.toggle("hidden");
  msg1tr.classList.toggle("hidden");
  msg2id.classList.toggle("hidden");
  msg2tr.classList.toggle("hidden");
});
