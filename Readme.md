
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ucapan dari Salsa</title>
  <!-- Tambahkan font sambung -->
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
  <style>
    body {
      margin: 0;
      font-family: 'Dancing Script', cursive;
      background-color: #ffe4e1;
      color: #800000;
      overflow: hidden;
    }
   .slideshow-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slide {
      display: none;
      text-align: center;
      width: 80%;
      max-width: 800px;
    }
    .slide.active {
      display: block;
    }
    .message {
      background: rgba(255,255,255,0.85);
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 15px #fbb;
      font-size: 1.8rem;
      line-height: 1.7;
    }
    .nav-buttons {
      margin-top: 30px;
    }
    .nav-buttons button {
      font-size: 2rem;
      margin: 0 15px;
      padding: 10px 20px;
      background-color: #ffc0cb;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .nav-buttons button:hover {
      background-color: #ff8fa3;
    }
    #langToggle {
      position: fixed;
      top: 15px;
      right: 15px;
      background-color: #fff0f0;
      border: 1px solid #ffb6c1;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 1rem;
      cursor: pointer;
    }
    .music-player {
      position: fixed;
      bottom: 10px;
      left: 0;
      width: 100%;
      text-align: center;
    }
    .music-player audio {
      width: 250px;
    }
  </style>
</head>
<body>

<!-- Tombol toggle bahasa -->
<button id="langToggle" onclick="toggleLanguage()">TR / ID</button>

<div class="slideshow-container">
  <!-- Slide 1 -->
  <div class="slide active" id="slide1">
    <div class="message">
      <p id="slide1_id">
        Selamat ya kak, kakak akhirnya jadian buat pertama kalinya. Semoga hubungan kalian selalu dipenuhi kebahagiaan, saling ngerti, dan langgeng sampai halal. Ingat, jadi pacar itu bukan cuma tentang senang-senang, tapi juga belajar jadi lebih dewasa bareng. Semangat ngejalaninnya kak... jangan sering-sering debat kayak di sinetron yaaa, dan ingat… <strong>JANGAN LUPA TRAKTIR ADEKNYA 😘😘</strong>
      </p>
      <p id="slide1_tr" style="display:none">
        Tebrikler abla, sonunda ilk kez bir ilişki yaşıyorsun. Umarım ilişkiniz her zaman mutlulukla dolu olur, birbirinizi anlarsınız ve evliliğe kadar gider. Unutma, sevgili olmak sadece eğlenmek değil, birlikte olgunlaşmayı da öğrenmektir. Bu yolculukta başarılar... ve unutma... <strong>KÜÇÜK KARDEŞİNİ YEMEĞE ÇIKARMAYI UNUTMA 😘😘</strong>
      </p>
    </div>
    <div class="nav-buttons">
      <button onclick="plusSlides(-1)">❮</button>
      <button onclick="plusSlides(1)">❯</button>
    </div>
  </div>

  <!-- Slide 2 -->
  <div class="slide" id="slide2">
    <div class="message">
      <p id="slide2_tr">
        Abimle yeni ilişkin için tebrikler. Umarım bu, güzel ve anlamlı bir yolculuğun başlangıcı olur. Umarım birbirinizi anlayıp destekleyerek sağlıklı ve mutlu bir ilişkide birlikte büyürsünüz. Sizi birlikte görmek beni mutlu ediyor, umarım bundan sonra her şey sorunsuz ve mutlulukla devam eder.
      </p>
      <p id="slide2_id" style="display:none">
        Selamat ya atas hubungan barunya dengan Kakakku. Semoga ini menjadi awal dari perjalanan yang menyenangkan dan bermakna. Semoga kalian bisa saling memahami, saling mendukung, dan tumbuh bersama dalam hubungan yang sehat dan bahagia.
      </p>
    </div>
    <div class="nav-buttons">
      <button onclick="plusSlides(-1)">❮</button>
      <button onclick="plusSlides(1)">❯</button>
    </div>
  </div>

  <!-- Slide 3 -->
  <div class="slide" id="slide3">
    <div class="message">
      <p>Salam dari Salsa dan Sijen ❤️</p>
    </div>
    <div class="nav-buttons">
      <button onclick="plusSlides(-1)">❮</button>
      <button onclick="plusSlides(1)">❯</button>
    </div>
  </div>
</div>

<!-- Musik -->
<div class="music-player">
  <audio controls autoplay loop>
    <source src="surat-cinta-untuk-starla.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung audio.
  </audio>
</div>

<script>
  let slideIndex = 1;
  showSlide(slideIndex);

  function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > 3) slideIndex = 1;
    if (slideIndex < 1) slideIndex = 3;
    showSlide(slideIndex);
  }

  function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === n - 1) slide.classList.add("active");
    });
  }

  function toggleLanguage() {
    if (slideIndex === 1) {
      const id = document.getElementById('slide1_id');
      const tr = document.getElementById('slide1_tr');
      if (id.style.display === "none") {
        id.style.display = "block";
        tr.style.display = "none";
      } else {
        id.style.display = "none";
        tr.style.display = "block";
      }
    } else if (slideIndex === 2) {
      const id = document.getElementById('slide2_id');
      const tr = document.getElementById('slide2_tr');
      if (id.style.display === "none") {
        id.style.display = "block";
        tr.style.display = "none";
      } else {
        id.style.display = "none";
        tr.style.display = "block";
      }
    }
  }
</script>

</body>
</html>
