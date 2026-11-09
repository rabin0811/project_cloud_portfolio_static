/* =========================================================
   PORTFOLIO WEBSITE SCRIPT
========================================================= */

/* ===== LOADING SCREEN ===== */
window.addEventListener('load', () => {

  setTimeout(() => {

    const loader = document.getElementById('loader');

    if (loader) {
      loader.classList.add('hidden');
    }

    initAnimations();

  }, 1900);

});


/* ===== THEME TOGGLE ===== */
const themeBtn = document.getElementById('themeToggle');
const html = document.documentElement;

let isDark = true;

if (themeBtn) {

  themeBtn.addEventListener('click', () => {

    isDark = !isDark;

    html.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );

    themeBtn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

  });

}


/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {

  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');

  });

}

function closeMobile() {

  if (hamburger) {
    hamburger.classList.remove('active');
  }

  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }

}


/* ===== TYPING EFFECT ===== */
const phrases = [
  'Full Stack Developer',
  'Cybersecurity Engineer',
  'Cloud Architect',
  'Network Engineer',
  'Open Source Contributor'
];

let pi = 0;
let ci = 0;
let deleting = false;

const typedEl = document.getElementById('typed-text');

function typeLoop() {

  if (!typedEl) return;

  const phrase = phrases[pi];

  if (!deleting) {

    typedEl.textContent =
      phrase.substring(0, ci + 1);

    ci++;

    if (ci === phrase.length) {

      deleting = true;

      setTimeout(typeLoop, 2000);

      return;
    }

  } else {

    typedEl.textContent =
      phrase.substring(0, ci - 1);

    ci--;

    if (ci === 0) {

      deleting = false;

      pi = (pi + 1) % phrases.length;

    }

  }

  setTimeout(
    typeLoop,
    deleting ? 60 : 90
  );

}

if (typedEl) {
  setTimeout(typeLoop, 1000);
}


/* ===== ACTIVE NAVIGATION ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add('active');
        }

      }

    });

  },

  {
    rootMargin: '-30% 0px -60% 0px'
  }

);

sections.forEach(section => {
  observer.observe(section);
});


/* ===== SCROLL REVEAL ===== */
function initAnimations() {

  const reveals = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right'
  );

  const revealObserver = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {

            entry.target.classList.add('visible');

          }, index * 80);

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      rootMargin: '0px 0px -80px 0px'
    }

  );

  reveals.forEach(item => {
    revealObserver.observe(item);
  });


  /* ===== SKILL BARS ===== */
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.width =
            entry.target.dataset.width + '%';

          skillObserver.unobserve(entry.target);

        }

      });

    },

    {
      rootMargin: '0px 0px -60px 0px'
    }

  );

  skillFills.forEach(fill => {
    skillObserver.observe(fill);
  });


  /* ===== COUNTER ===== */
  document.querySelectorAll('[data-count]')
    .forEach(counter => {

      const counterObserver = new IntersectionObserver(

        (entries) => {

          if (entries[0].isIntersecting) {

            const target =
              parseInt(counter.dataset.count);

            let current = 0;

            const increment = target / 40;

            const timer = setInterval(() => {

              current += increment;

              if (current >= target) {

                current = target;

                clearInterval(timer);

              }

              counter.textContent =
                Math.floor(current) + '+';

            }, 40);

            counterObserver.unobserve(counter);

          }

        }

      );

      counterObserver.observe(counter);

    });

}


/* ===== BACK TO TOP ===== */
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {

  if (backTop) {

    backTop.classList.toggle(
      'visible',
      window.scrollY > 400
    );

  }

});

function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}


/* ===== PROJECT FILTERS ===== */
const filterButtons =
  document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    const filter = button.dataset.filter;

    document.querySelectorAll('.project-card')
      .forEach(card => {

        const show =
          filter === 'all' ||
          card.dataset.cat === filter;

        card.classList.toggle(
          'hidden',
          !show
        );

      });

  });

});


/* ===== CONTACT FORM ===== */
const contactForm =
  document.getElementById('contactForm');

if (contactForm) {

  contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let valid = true;

    const fields = [

      {
        id: 'fname',
        err: 'err-fname',
        msg: 'First name is required'
      },

      {
        id: 'lname',
        err: 'err-lname',
        msg: 'Last name is required'
      },

      {
        id: 'email',
        err: 'err-email',
        msg: 'Valid email is required',
        isEmail: true
      },

      {
        id: 'subject',
        err: 'err-subject',
        msg: 'Subject is required'
      },

      {
        id: 'message',
        err: 'err-message',
        msg: 'Message is required'
      }

    ];

    fields.forEach(field => {

      const input =
        document.getElementById(field.id);

      const error =
        document.getElementById(field.err);

      if (!input || !error) return;

      const value = input.value.trim();

      if (
        !value ||
        (
          field.isEmail &&
          !/\S+@\S+\.\S+/.test(value)
        )
      ) {

        input.classList.add('error');

        error.textContent = field.msg;

        valid = false;

      } else {

        input.classList.remove('error');

        error.textContent = '';

      }

    });

    if (valid) {

      const success =
        document.getElementById('formSuccess');

      if (success) {

        success.classList.add('visible');

        setTimeout(() => {

          success.classList.remove('visible');

        }, 5000);

      }

      contactForm.reset();

    }

  });

}


/* ===== VISITOR COUNTER ===== */
const visitorCounter =
  document.getElementById('visitorCount');

if (visitorCounter) {

  let count =
    localStorage.getItem('visitCount') || 0;

  count++;

  localStorage.setItem(
    'visitCount',
    count
  );

  visitorCounter.textContent = count;

}


/* ===== PARTICLES BACKGROUND ===== */
const canvas =
  document.getElementById('particles-canvas');

if (canvas) {

  const ctx = canvas.getContext('2d');

  let particles = [];

  function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }

  resizeCanvas();

  window.addEventListener(
    'resize',
    resizeCanvas
  );


  class Particle {

    constructor() {
      this.reset();
    }

    reset() {

      this.x =
        Math.random() * canvas.width;

      this.y =
        Math.random() * canvas.height;

      this.size =
        Math.random() * 1.5 + 0.5;

      this.speedX =
        (Math.random() - 0.5) * 0.4;

      this.speedY =
        (Math.random() - 0.5) * 0.4;

      this.alpha =
        Math.random() * 0.4 + 0.1;

    }

    update() {

      this.x += this.speedX;
      this.y += this.speedY;

      if (
        this.x < 0 ||
        this.x > canvas.width ||
        this.y < 0 ||
        this.y > canvas.height
      ) {

        this.reset();

      }

    }

    draw() {

      ctx.save();

      ctx.globalAlpha = this.alpha;

      ctx.fillStyle =
        isDark ? '#f59e0b' : '#d97706';

      ctx.beginPath();

      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

    }

  }


  function drawConnections() {

    for (let i = 0; i < particles.length; i++) {

      for (
        let j = i + 1;
        j < particles.length;
        j++
      ) {

        const dx =
          particles[i].x - particles[j].x;

        const dy =
          particles[i].y - particles[j].y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {

          ctx.save();

          ctx.globalAlpha =
            (1 - distance / 120) * 0.08;

          ctx.strokeStyle = '#f59e0b';

          ctx.lineWidth = 0.5;

          ctx.beginPath();

          ctx.moveTo(
            particles[i].x,
            particles[i].y
          );

          ctx.lineTo(
            particles[j].x,
            particles[j].y
          );

          ctx.stroke();

          ctx.restore();

        }

      }

    }

  }


  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }


  function animateParticles() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    particles.forEach(particle => {

      particle.update();
      particle.draw();

    });

    drawConnections();

    requestAnimationFrame(
      animateParticles
    );

  }

  animateParticles();

}