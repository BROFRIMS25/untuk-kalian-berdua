
const slides = document.querySelectorAll(".slide");
const clickSound = document.getElementById("clickSound");
const music = document.getElementById("bgMusic");

function nextSlide(n) {
  clickSound.play();
  slides.forEach(slide => slide.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");
}

const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

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
