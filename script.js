let current = 0;
let slides = [];
let currentLang = "id";
let player;

function startSlides() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slider").style.display = "flex";

  toggleLanguage(); // sembunyikan slide sesuai bahasa
  slides = Array.from(document.querySelectorAll(".slide")).filter(slide => {
    const lang = slide.getAttribute("data-id");
    return lang === currentLang || lang === "all";
  });

  current = 0;
  showSlide(current);

  // Putar lagu jika player siap
  if (typeof player !== 'undefined' && player.playVideo) {
    player.playVideo();
  } else {
    console.log("Player belum siap, akan diputar saat siap.");
  }
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  if (slides[index]) {
    slides[index].classList.add("active");
  }
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
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  // perbarui list slide yang aktif setelah toggle
  slides = Array.from(document.querySelectorAll(".slide")).filter(slide => {
    const lang = slide.getAttribute("data-id");
    return lang === currentLang || lang === "all";
  });

  current = 0;
  showSlide(current);
}

// YouTube API
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
