"use strict";

/*===== MENU SHOW =====*/
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
var tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var target = document.querySelector(tab.dataset.target);
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');
    tabs.forEach(function (tab) {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});
var darkModeToggle = document.getElementById('darkModeToggle');
var body = document.body;
var slider = document.querySelector('.slider');
var sunIcon = document.querySelector('.sun');
var moonIcon = document.querySelector('.moon'); // Check if the user has a preference for dark mode

var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; // Set initial mode based on user preference

if (prefersDarkMode) {
  body.classList.add('dark-mode');
  sunIcon.style.display = 'inline';
  moonIcon.style.display = 'none';
  slider.style.transform = 'translateX(25px)';
} // Toggle between dark and light mode with slider animation


darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline';
  moonIcon.style.display = body.classList.contains('dark-mode') ? 'inline' : 'none';
  slider.style.transform = body.classList.contains('dark-mode') ? 'translateX(25px)' : 'translateX(0)';
});
/*==================== REMOVE MENU MOBILE ====================*/

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); // When we click on each nav__link, we remove the show-menu class

  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);
/*===== SCROLL REVEAL ANIMATION =====*/

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200 //     reset: true

});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 200
});
//# sourceMappingURL=main.dev.js.map
