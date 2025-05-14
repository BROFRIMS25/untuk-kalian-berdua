let current = 0;
let slides = [];
let currentLang = "id";
let player;

function startSlides() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slider").style.display = "flex";

  // Filter & tampilkan slide sesuai bahasa
  toggleLanguage();

  // Ambil ulang slide aktif
  slides = Array.from(document.querySelectorAll(".slide")).filter(slide => {
    const lang = slide.getAttribute("data-id");
    return lang === currentLang || lang === "all";
  });

  current = 0;
  showSlide(current);

  if (typeof player !== 'undefined' && player.playVideo) {
    player.playVideo();
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
      slide.classList.add("active");
    } else {
      slide.style.display = "none";
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  current++;
  if (current >= slides.length) current = slides.length - 1;
  showSlide(current);
  new Audio("click.mp3").play();
}

function toggleLanguage() {
  currentLang = currentLang === "id" ? "tr" : "id";

  document.querySelectorAll(".slide").forEach(slide => {
    const lang = slide.getAttribute("data-id");
    if (lang === currentLang || lang === "all") {
      slide.style.display = "none"; // kita reset semua dulu
    } else {
      slide.style.display = "none";
    }
  });

  // Ambil ulang slide yang sesuai bahasa
  slides = Array.from(document.querySelectorAll(".slide")).filter(slide => {
    const lang = slide.getAttribute("data-id");
    return lang === currentLang || lang === "all";
  });

  current = 0;
  showSlide(current);
}

// YouTube Player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '0',
    width: '0',
    videoId: 'EUYulFdP-qE',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'EUYulFdP-qE'
    }
  });
}
