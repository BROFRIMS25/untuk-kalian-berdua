
let current = 0;
let slides = [];
let currentLang = "id";

function startSlides() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slider").style.display = "flex";
  slides = document.querySelectorAll(".slide");
  showSlide(current);

  // Putar lagu jika player sudah siap
  if (typeof player !== 'undefined' && player.playVideo) {
    player.playVideo();
  } else {
    console.log("Player belum siap, akan diputar saat siap.");
  }
}
function startSlides() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slider").style.display = "flex";
  slides = document.querySelectorAll(".slide");

  toggleLanguage(); // PENTING: sembunyikan slide yang tidak sesuai bahasa

  showSlide(current);

  // Putar lagu jika player sudah siap
  if (typeof player !== 'undefined' && player.playVideo) {
    player.playVideo();
  }
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

function nextSlide() {
  current++;
  console.log("Maju ke slide:", current);
  if (current >= slides.length) current = slides.length - 1;
  showSlide(current);
  new Audio("click.mp3").play();
}

// Fungsi YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '0',
    width: '0',
    videoId: 'EUYulFdP-qE', https://youtu.be/EUYulFdP-qE?si=VkRlaYru1nNFFRoI
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'EUYulFdP-qE'
    },
    events: {
      'onReady': (event) => {
        // Tidak langsung play, hanya siap
      }
    }
  });
}
