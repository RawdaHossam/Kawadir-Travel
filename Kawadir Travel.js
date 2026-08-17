const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close')

// menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show--menu')
  })
}

// nav hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show--menu')
  })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav--link')

const linkAction = () => {
  navMenu.classList.remove('show--menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// JS
const themeBtn = document.getElementById("theme-button");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
});

// animation

/* ===== Scroll Reveal Animation ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100; 

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);












