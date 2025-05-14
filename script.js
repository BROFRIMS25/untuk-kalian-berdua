
const slides = document.querySelectorAll(".slide");
const clickSound = document.getElementById("clickSound");
const music = document.getElementById("bgMusic");

function nextSlide(n) {
 const ytIframe = document.getElementById('yt-audio');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = true;

musicToggle.addEventListener('click', () => {
  const src = ytIframe.src;
  if (isPlaying) {
    // pause by removing autoplay and reloading
    ytIframe.src = '';
    musicToggle.innerText = '⏯️ Putar Musik';
  } else {
    // resume by reinstating src
    ytIframe.src = src || 
      'https://youtu.be/EUYulFdP-qE?si=6OueP0wWOb-07-bD?autoplay=1&loop=1&playlist=VIDEO_ID&controls=0&iv_load_policy=3&modestbranding=1&rel=0';
    musicToggle.innerText = '❤️ Hentikan Musik';
  }
  isPlaying = !isPlaying;
});
 

const translations = {
  id: {
    title1: "selamat untuk kalian\nberdua",
    msg1: "Dari Salsa untuk kakakku: selamat ya kak...",
    msg2: "Dari Salsa untuk kekasih kakakku: Selamat ya...",
    msg3: "Salam hangat dari Salsa dan Sijen. Semoga kalian bahagia selalu!"
  },
  tr: {
    title1: "İkinize tebrikler",
    msg1: "Salsa'dan ablama: Tebrikler abla...",
    msg2: "Salsa'dan ablamın sevgilisine: Tebrikler...",
    msg3: "Salsa ve Sijen'den sıcak selamlar. Umarız hep mutlu olursunuz!"
  }
};

document.getElementById("languageSelect").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.getElementById("title1").innerText = translations[lang].title1;
  document.getElementById("msg1").innerText = translations[lang].msg1;
  document.getElementById("msg2").innerText = translations[lang].msg2;
  document.getElementById("msg3").innerText = translations[lang].msg3;
});
