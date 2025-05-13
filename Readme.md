# Untuk-kalian-berdua-
Selamat ya ❤️❤️❤️🤍🤍🤍😁😁
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ucapan Selamat dari Kami Berdua</title>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Crimson Pro', serif;
      background: linear-gradient(to bottom right, #f8bbd0, #e1bee7);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: auto;
      padding: 20px;
    }
    .envelope {
      width: 90%;
      max-width: 600px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      overflow: hidden;
      animation: openEnvelope 2s ease forwards;
    }
    .header-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .letter {
      opacity: 0;
      transform: translateY(100%);
      transition: all 1s ease 2s;
      padding: 30px 20px;
      font-size: 17px;
      line-height: 1.7;
    }
    .envelope.open .letter {
      opacity: 1;
      transform: translateY(0);
    }
    h1 {
      font-family: 'Great Vibes', cursive;
      font-size: 36px;
      color: #880e4f;
      text-align: center;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 20px;
      color: #6a1b9a;
      margin-top: 25px;
    }
    p {
      margin: 10px 0;
    }
    .language-buttons {
      text-align: center;
      margin: 15px 0;
    }
    .language-buttons button {
      background-color: #ce93d8;
      border: none;
      color: white;
      padding: 10px 20px;
      margin: 0 10px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .language-buttons button:hover {
      background-color: #ab47bc;
    }
    .signature {
      margin-top: 30px;
      font-style: italic;
      text-align: right;
    }
    @keyframes openEnvelope {
      from {
        transform: scaleY(0.1);
        opacity: 0;
      }
      to {
        transform: scaleY(1);
        opacity: 1;
      }
    }
    .read-more {
      text-align: center;
      margin-top: 15px;
    }
    .read-more button {
      padding: 10px 20px;
      background-color: #f48fb1;
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .read-more button:hover {
      background-color: #ec407a;
    }
    .letter.collapsed {
      max-height: 250px;
      overflow: hidden;
      position: relative;
    }
  </style>
</head>
<body>

<div class="envelope open" id="envelope">
  <img src="https://i.ibb.co/xGZCGFy/romantic-letter.jpg" class="header-img" alt="romantic image" />

  <div class="language-buttons">
    <button onclick="switchLanguage('id')">Bahasa Indonesia</button>
    <button onclick="switchLanguage('tr')">Türkçe</button>
  </div>
  <!-- Bahasa Indonesia -->
  <div class="letter collapsed" id="message-id">
    <h1>Ucapan Selamat dari Kami Berdua</h1>
    <h2>Untuk Kakakku Tersayang,</h2>
    <p>Selamat ya kak... akhirnya kamu merasakan cinta pertama yang indah.</p>
    <p>Semoga cinta kalian tumbuh dalam ketulusan, kejujuran, dan kesabaran. Jadilah pasangan yang saling menguatkan dan belajar bersama menjadi dewasa.</p>
    <p>Jangan biarkan hal kecil menjadi besar. Ingatlah bahwa cinta bukan hanya tentang tawa, tapi juga tentang mendengarkan dan memaafkan.</p>
    <p><strong>Dan... jangan lupa traktir adeknya juga ya!</strong></p>
    <h2>Untuk Kekasih Kakakku,</h2>
    <p>Selamat datang dalam hidup Kakakku. Semoga kamu menjadi bagian terindah dari kisahnya.</p>
    <p>Rawat hatinya dengan baik, dan biarlah cinta ini menjadi langkah awal menuju masa depan yang penuh makna.</p>
    <p>Melihat kalian bersama membuatku ikut tersenyum. Semoga segalanya berjalan dengan indah dan penuh kebahagiaan.</p>
    <div class="signature">
      Salam hangat,<br>Salsa & Sijen
    </div>
  </div>

  <!-- Tombol untuk baca selengkapnya -->
  <div class="read-more">
    <button onclick="expandLetter()">Klik untuk lanjut baca</button>
  </div>

</div>

<audio autoplay loop style="display:none">
  <source src="https://example.com/surat-cinta-untuk-starla-instrumental.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

<script>
  function switchLanguage(lang) {
    const idMessage = document.getElementById("message-id");
    const trMessage = document.getElementById("message-tr");

    idMessage.style.display = lang === "id" ? "block" : "none";
    trMessage.style.display = lang === "tr" ? "block" : "none";
  }

  function expandLetter() {
    document.getElementById("message-id").classList.remove("collapsed");
    document.querySelector(".read-more").style.display = "none";
  }

  window.onload = function () {
    switchLanguage('id');
  };
</script>

</body>
</html>
