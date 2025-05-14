
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>selamat ya untuk kalian berdua ❤️❤️❤️</title>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      font-family: 'Dancing Script', cursive;
    }
    html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background: linear-gradient(135deg, #fff0fc, #ff4de9);
    }
    .language-switch {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
    }
    .language-switch select {
      padding: 5px;
      border-radius: 5px;
    }
    .slide {
      display: none;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
      transition: opacity 0.8s ease;
    }
    .slide.active {
      display: block;
      opacity: 1;
    }
    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #d60087;
    }
    .button {
      background-color: #ff66cc;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1.2rem;
      border-radius: 10px;
      cursor: pointer;
      margin: 1rem;
      transition: background 0.3s ease;
    }
    .button:hover {
      background-color: #ff33aa;
    }
    .message-box {
      background: rgba(255,255,255,0.7);
      padding: 1.5rem;
      border-radius: 15px;
      font-size: 1.3rem;
      color: #600040;
    }
  </style>
</head>
<body>
  <div class="language-switch">
    <select id="languageSelect">
      <option value="id">Indonesia</option>
      <option value="tr">Türkçe</option>
    </select>
  </div>
  
  <!-- Slide 1 -->
  <div class="slide active" id="slide1">
    <div class="title" id="title1">❤️❤️Selamat untuk kalian berdua❤️❤️</div>
    <button class="button" onclick="nextSlide(2)">klick untuk lanjut</button>
  </div>

  <!-- Slide 2 -->
  <div class="slide" id="slide2">
    <div class="message-box" id="msg1">
      Dari Salsa untuk kakakku: <br>
      selamat ya kak, kakak akhirnya jadian buat pertama kalinyaa, semoga hubungan kalian selalu dipenuhi kebahagiaan, saling ngerti, dan langgeng sampai halal. Ingat, jadi pacar itu bukan cuma tentang senang-senang, tapi juga belajar jadi lebih dewasa bareng. Semangat ngejalaninnya kak... jangan sering-sering debat kayak di sinetron yaaa, dan ingat… JANGAN LUPA TRAKTIR ADEKNYA!
    </div>
    <button class="button" onclick="nextSlide(3)">Lanjut</button>
  </div>

  <!-- Slide 3 -->
  <div class="slide" id="slide3">
    <div class="message-box" id="msg2">
      Dari Salsa untuk kekasih kakakku:<br>
      Selamat ya atas hubungan barunya dengan Kakakku. Semoga ini menjadi awal dari perjalanan yang menyenangkan dan bermakna. Semoga kalian bisa saling memahami, saling mendukung, dan tumbuh bersama dalam hubungan yang sehat dan bahagia. Aku ikut senang melihat kalian bersama, dan semoga ke depannya semua berjalan lancar dan penuh kebahagiaan.
    </div>
    <button class="button" onclick="nextSlide(4)">Lanjut</button>
  </div>

  <!-- Slide 4 -->
  <div class="slide" id="slide4">
    <div class="message-box" id="msg3">
      Salam hangat dari Salsa dan Sijen.<br>
      Semoga kalian bahagia selalu!
    </div>
    <button class="button" onclick="nextSlide(1)">Kembali ke Awal</button>
  </div>

  <!-- Musik Latar dan Efek Klik -->
  <audio id="bgMusic" loop autoplay>
    <source src="surat-cinta-untuk-starla.mp3" type="audio/mpeg">
  </audio>
  <audio id="clickSound">
    <source src="click.mp3" type="audio/mpeg">
  </audio>

  <script>
    const slides = document.querySelectorAll('.slide');
    const music = document.getElementById('bgMusic');
    const clickSound = document.getElementById('clickSound');

    function nextSlide(n) {
      clickSound.play();
      slides.forEach(slide => slide.classList.remove('active'));
      document.getElementById(`slide${n}`).classList.add('active');
    }
  // Language Switcher
    const translations = {
      id: {
        title1: "Selamat untuk kalian berdua",
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
    }

    document.getElementById('languageSelect').addEventListener('change', (e) => {
      const lang = e.target.value;
      document.getElementById('title1').innerText = translations[lang].title1;
      document.getElementById('msg1').innerText = translations[lang].msg1;
      document.getElementById('msg2').innerText = translations[lang].msg2;
      document.getElementById('msg3').innerText = translations[lang].msg3;
    });

    window.onload = () => {
      music.play().catch(() => {});
    }
  </script>
</body>
</html>
