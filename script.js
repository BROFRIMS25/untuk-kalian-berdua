let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function openEnvelope() {
  showSlide(1);
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  currentSlide = index;
  if (index < slides.length - 1) {
    setTimeout(() => showSlide(index + 1), 5000);
  }
}

function toggleLanguage() {
  const lang = document.getElementById("message1").innerText.includes("selamat");
  document.getElementById("message1").innerHTML = lang
    ? `Salsa’dan ablasına:<br />
      Tebrikler abla! Sonunda ilk kez bir ilişkiye başladın...`
    : `Dari Salsa untuk kakakku:<br />
      "selamat ya kak, kakak akhirnya jadian buat pertama kalinyaa,..."`;

  document.getElementById("message2").innerHTML = lang
    ? `Salsa’dan ablamın sevgilisine:<br />
      Ablamla yeni ilişkiniz için tebrik ederim...`
    : `Dari Salsa untuk kekasih kakakku:<br />
      Selamat ya atas hubungan barunya dengan Kakakku...`;
}

showSlide(0);
