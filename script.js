
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const messages = document.querySelectorAll('.message');
let lang = 'id';

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    playClickSound();
}

function restartSlides() {
    slides[currentSlide].classList.remove('active');
    currentSlide = 0;
    slides[currentSlide].classList.add('active');
    playClickSound();
}

function toggleLanguage() {
    lang = lang === 'id' ? 'tr' : 'id';
    messages.forEach(msg => {
        if (msg.dataset.id === lang) {
            msg.classList.remove('hidden');
        } else {
            msg.classList.add('hidden');
        }
    });
}

function playClickSound() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/mouse-click.mp3');
    audio.play();
}
