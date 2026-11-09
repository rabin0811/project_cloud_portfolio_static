window.addEventListener('load', () => {

  setTimeout(() => {

    document.getElementById('loader').classList.add('hidden');

  }, 1500);

});

const themeBtn = document.getElementById('themeToggle');
const html = document.documentElement;

let dark = true;

if (themeBtn) {

  themeBtn.addEventListener('click', () => {

    dark = !dark;

    html.setAttribute(
      'data-theme',
      dark ? 'dark' : 'light'
    );

  });

}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger) {

  hamburger.addEventListener('click', () => {

    mobileMenu.classList.toggle('open');

  });

}

function closeMobile() {

  mobileMenu.classList.remove('open');

}

const phrases = [
  'Full Stack Developer',
  'Cybersecurity Learner',
  'Cloud Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typedText = document.getElementById('typed-text');

function typeEffect() {

  if (!typedText) return;

  const current = phrases[phraseIndex];

  if (!deleting) {

    typedText.textContent = current.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === current.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;

    }

  } else {

    typedText.textContent = current.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      phraseIndex = (phraseIndex + 1) % phrases.length;

    }

  }

  setTimeout(typeEffect, deleting ? 50 : 90);

}