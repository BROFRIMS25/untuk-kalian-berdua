
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pesan Romantis Salsa</title>
  <!-- Google Fonts: Pinyon Script -->
  <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Pinyon Script', cursive;
      background: #ffe4e1; /* Light pink */
      color: #800000;      /* Dark red */
      overflow: hidden;    /* Hilangkan scroll */
    }
    /* Kontainer slide */
    .slideshow-container {
      position: relative;
      width: 100vw;
      height: 100vh;
    }
    .slide {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
    }
    .slide.active { display: block; }
    .message {
      margin: auto;
      padding: 20px;
      max-width: 800px;
      background: rgba(255, 255, 240, 0.8);
      border: 2px solid #ffb6c1;
      border-radius: 10px;
      line-height: 1.5;
      font-size: 1.5rem;
      text-align: left;
    }
    /* Tombol navigasi */
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255,182,193,0.8);
      border: none;
      color: #800000;
      font-weight: bold;
      font-size: 2rem;
      padding: 10px 15px;
      border-radius: 50%;
      user-select: none;
    }
    .prev:hover, .next:hover { background-color: #ffb6c1; }
    .prev { left: 20px; }
    .next { right: 20px; }
    /* Tombol toggle bahasa */
    #langToggle {
      position: absolute;
      top: 20px; right: 20px;
      padding: 5px 10px;
      font-size: 1rem;
      background: #fff0f0;
      border: 1px solid #ffb6c1;
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
    }
    /* Dekorasi animasi */
    .animations { position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none; }
    .animations span {
      position: absolute;
      bottom: -100px;
      font-size: 3rem;
      opacity: 0;
      animation: floatUp 10s ease-in infinite;
    }
    @keyframes floatUp {
      0%   { transform: translateY(0); opacity: 0; }
      10%  { opacity: 1; }
      100% { transform: translateY(-120vh); opacity: 0; }
    }
    /* Pemutar musik */
    .music-player {
      position: fixed;
      bottom: 10px; left: 0; width: 100%;
      text-align: center;
    }
    .music-player audio {
      width: 200px;
    }
  </style>
</head>
<body>

<div class="slideshow-container">
  <!-- Slide 1: Pesan untuk kakak (ID dan TR dengan toggle) -->
  <div class="slide active" id="slide1">
    <div class="message">
      <!-- Teks Bahasa Indonesia -->
      <p id="slide1_id">
        selamat ya kak, kakak akhirnya jadian buat pertama kalinyaa. Semoga hubungan kalian selalu dipenuhi kebahagiaan, saling ngerti, dan langgeng sampai halal. Ingat, jadi pacar itu bukan cuma tentang senang-senang, tapi juga belajar jadi lebih dewasa bareng. Semangat ngejalaninnya kak... jangan sering-sering debat kayak di sinetron yaaa, dan ingat… <strong>KAMU JANGAN LUPA TRAKTIR ADEKNYA 😘😘</strong>
      </p>
      <!-- Teks Terjemahan Bahasa Turki (tersimpan awalnya tersembunyi) -->
      <p id="slide1_tr" style="display:none">
        Tebrikler abi, sonunda ilk kez bir ilişki yaşıyorsun. Umarım ilişkiniz her zaman mutluluk ve anlayışla dolu olur, evliliğe kadar devam eder. Unutma, sevgili olmak sadece eğlenmekle ilgili değil; aynı zamanda birlikte olgunlaşmayı öğrenmektir. İlişkinizi özenle yürütün abi... dizilerdekine benzer şekilde sık sık tartışmayın ve unutma… <strong>KÜÇÜK KARDEŞİNİ YEMEĞE ÇIKARMAYI UNUTMA 😘😘</strong>
      </p>
    </div>
  </div>

  <!-- Slide 2: Pesan untuk kekasih kakak (Tampil TR, dengan toggle ke ID) -->
  <div class="slide" id="slide2">
    <div class="message">
      <!-- Teks Bahasa Turki (ditampilkan) -->
      <p id="slide2_tr">
        Abimle yeni ilişkin için tebrikler. Umarım bu, güzel ve anlamlı bir yolculuğun başlangıcı olur. Umarım birbirinizi anlayıp destekleyerek sağlıklı ve mutlu bir ilişkide birlikte büyürsünüz. Sizi birlikte görmek beni mutlu ediyor, umarım bundan sonra her şey sorunsuz ve mutlulukla devam eder.
      </p>
      <!-- Teks Bahasa Indonesia (tersimpan tersembunyi) -->
      <p id="slide2_id" style="display:none">
        Selamat ya atas hubungan barumu dengan kakakku. Semoga ini menjadi awal dari perjalanan yang menyenangkan dan bermakna. Semoga kalian bisa saling memahami, saling mendukung, dan tumbuh bersama dalam hubungan yang sehat dan bahagia. Aku ikut senang melihat kalian bersama, dan semoga ke depannya semua berjalan lancar dan penuh kebahagiaan.
      </p>
    </div>
  </div>

  <!-- Slide 3: Salam penutup -->
  <div class="slide" id="slide3">
    <div class="message">
      <p>Salam dari Salsa dan Sijen ❤️</p>
    </div>
  </div>

  <!-- Tombol prev/next -->
  <button class="prev" onclick="plusSlides(-1)">❮</button>
  <button class="next" onclick="plusSlides(1)">❯</button>
</div>

<!-- Toggle Bahasa -->
<button id="langToggle" onclick="toggleLanguage()">TR / ID</button>

<!-- Dekorasi animasi hati dan hewan -->
<div class="animations">
  <span class="heart" style="left: 10%; animation-delay: 0s;">❤️</span>
  <span class="heart" style="left: 30%; animation-delay: 2s;">🐱</span>
  <span class="heart" style="left: 50%; animation-delay: 4s;">🐰</span>
  <span class="heart" style="left: 70%; animation-delay: 6s;">❤️</span>
  <span class="heart" style="left: 90%; animation-delay: 1s;">🐱</span>
</div>

<!-- Pemutar musik latar -->
<div class="music-player">
  <audio id="bgmusic" controls autoplay loop>
    <source src="surat-cinta-untuk-starla.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung audio.
  </audio>
</div>

<!-- Efek suara klik -->
<audio id="clickSound">
  <source src="click.mp3" type="audio/mpeg">
</audio>

<script>
// Inisialisasi slide
let slideIndex = 1;
showSlide(slideIndex);

// Fungsi navigasi slide
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > 3) slideIndex = 1;
  if (slideIndex < 1) slideIndex = 3;
  showSlide(slideIndex);
  document.getElementById('clickSound').currentTime = 0;
  document.getElementById('clickSound').play();
}

// Tampilkan slide sesuai indeks
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  // Hide semua
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // Show slide ke-n
  slides[n-1].classList.add('active');
  // Atur tombol toggle bahasa
  if (n === 1 || n === 2) {
    document.getElementById('langToggle').style.display = 'inline-block';
  } else {
    document.getElementById('langToggle').style.display = 'none';
  }
}

// Fungsi toggle bahasa
function toggleLanguage() {
  if (slideIndex === 1) {
    let idText = document.getElementById('slide1_id');
    let trText = document.getElementById('slide1_tr');
    if (idText.style.display === "none") {
      idText.style.display = "block";
      trText.style.display = "none";
    } else {
      idText.style.display = "none";
      trText.style.display = "block";
    }
  } 
  else if (slideIndex === 2) {
    let idText = document.getElementById('slide2_id');
    let trText = document.getElementById('slide2_tr');
    if (idText.style.display === "none") {
      idText.style.display = "block";
      trText.style.display = "none";
    } else {
      idText.style.display = "none";
      trText.style.display = "block";
    }
  }
}
</script>

</body>
</html>
