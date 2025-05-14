<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Surat Cinta</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
    }
 html, body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #fff0fc, #ff4de9);
      height: 100%;
      overflow-x: hidden;
 }   
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
   .container {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      max-width: 400px;
      width: 100%;
      margin: 2rem auto;
    }
   .title, .subtitle {
      background-color: #ff99ff;
      border: 1px solid red;
      padding: 1rem;
      margin-bottom: 1rem;
      color: white;
      font-style: italic;
      font-size: 1.2rem;
    }
  .subtitle {
      cursor: pointer;
      font-weight: bold;
      font-size: 0.9rem;
    }
  .envelope {
      position: relative;
      width: 100%;
      max-width: 300px;
      height: 200px;
      margin: 0 auto;
      background-color: #ff99ff;
      clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
      transition: transform 0.6s ease;
  }  
    .envelope::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      background-color: red;
      clip-path: path('M15 30 Q30 10 15 0 Q0 10 15 30 Z');
    }
    .message {
      display: none;
      margin-top: 1rem;
      background: #fff0fc;
      padding: 1rem;
      border-radius: 10px;
      font-size: 0.9rem;
      text-align: left;
    }
    .show .message {
      display: block;
    }
    .language-switch {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
    .language-switch select {
      padding: 5px;
      border-radius: 5px;
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
  <div class="container" id="letterContainer">
    <div class="title" id="titleText">selamat untuk kalian berdua</div>
    <div class="subtitle" onclick="openEnvelope()">klik tombol hati di bawah</div>
    <div class="envelope" onclick="openEnvelope()"></div>
    <div class="message" id="messageText">
      <p><strong>Dari Salsa untuk kakakku:</strong><br>
      selamat ya kak, kakak akhirnya jadian buat pertama kalinyaa, semoga hubungan kalian selalu dipenuhi kebahagiaan, saling ngerti, dan langgeng sampai halal,,, Ingat, jadi pacar itu bukan cuma tentang senang-senang, tapi juga belajar jadi lebih dewasa bareng. Semangat ngejalaninnya kak... jangan sering-sering debat kayak di sinetron yaaa, dan ingat… JANGAN LUPA TRAKTIR ADEKNYA!</p>
      <p><strong>Dari Salsa untuk kekasih kakakku:</strong><br>
      Selamat ya atas hubungan barunya dengan Kakakku. Semoga ini menjadi awal dari perjalanan yang menyenangkan dan bermakna. Semoga kalian bisa saling memahami, saling mendukung, dan tumbuh bersama dalam hubungan yang sehat dan bahagia. Aku ikut senang melihat kalian bersama, dan semoga ke depannya semua berjalan lancar dan penuh kebahagiaan.</p>
    </div>
  </div>
  <audio id="bgMusic" autoplay loop>
    <source src="surat-cinta-untuk-starla.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung audio.
  </audio>

  <script>
    const container = document.getElementById('letterContainer');
    const audio = document.getElementById('bgMusic');

    function openEnvelope() {
      container.classList.add('show');
      audio.play().catch(() => {
        // Autoplay mungkin dicegah oleh browser, abaikan
      });
    }

    const translations = {
      id: {
        title: "selamat untuk kalian berdua",
        subtitle: "klik tombol hati di bawah",
        message: document.getElementById('messageText').innerHTML
      },
      tr: {
        title: "ikinize tebrikler",
        subtitle: "aşağıdaki kalp düğmesine tıklayın",
        message: `<p><strong>Salsa'dan ablama:</strong><br>
        Tebrikler abla, sonunda ilk kez sevgili oldun. Umarım ilişkiniz mutlulukla dolar, birbirinizi anlarsınız ve nikaha kadar sürer. Unutma, sevgili olmak sadece eğlenmek değil, birlikte olgunlaşmayı da öğrenmek demektir. Bu yolculukta başarılar... Dizi gibi tartışmalar olmasın lütfen, ve UNUTMA... KARDEŞİNE YEMEK ISMARLAMAYI UNUTMA!</p>
        <p><strong>Salsa'dan ablamın sevgilisine:</strong><br>
        Ablamla olan yeni ilişkiniz için tebrikler. Umarım bu yolculuk eğlenceli ve anlamlı olur. Birbirinizi anlar, destek olur ve sağlıklı bir ilişkide birlikte büyürsünüz. Sizi birlikte görmek beni mutlu ediyor. Umarım her şey yolunda ve mutlu geçer.</p>`
      }
    };

    document.getElementById('languageSelect').addEventListener('change', (e) => {
      const lang = e.target.value;
      document.getElementById('titleText').innerText = translations[lang].title;
      document.querySelector('.subtitle').innerText = translations[lang].subtitle;
      document.getElementById('messageText').innerHTML = translations[lang].message;
    });
  </script>
</body>
</html>
