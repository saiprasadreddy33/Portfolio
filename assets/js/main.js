const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
function updateViewCount () {
  let viewCount = localStorage.getItem('viewCount')
  if (!viewCount) {
    viewCount = 0
  } else {
    viewCount = parseInt(viewCount)
  }

  const viewCountElement = document.getElementById('viewCount')
  viewCountElement.textContent = viewCount.toLocaleString()

  localStorage.setItem('viewCount', viewCount + 1)
}

function showViewCount () {
  const viewCountCard = document.querySelector('.view-count')
  const footer = document.querySelector('footer')
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight

  if (scrollTop + clientHeight >= footer.offsetTop) {
    viewCountCard.style.display = 'block'
  } else {
    viewCountCard.style.display = 'none'
  }
}

window.addEventListener('scroll', showViewCount)

document.addEventListener('DOMContentLoaded', updateViewCount)

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.loading-screen').style.top = 'calc(-100%)'
    document.querySelector('.nav').style.display = 'flex'
  }, 5000) 
})

function isInViewport (element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function handleScroll () {
  console.log('Scrolling...')
  const skillBars = document.querySelectorAll('.skills__bar')
  skillBars.forEach(skillBar => {
    if (isInViewport(skillBar)) {
      skillBar.classList.add('animate')
      skillBar.style.width = skillBar.getAttribute('data-skill-level') + '%'
    }
  })
}

window.addEventListener('scroll', handleScroll)

document.addEventListener('DOMContentLoaded', function () {
  const dynamicTitle = document.getElementById('dynamicTitle')
  const titles = [
    'Software Engineer',
    'MERN full <br>Stack Developer',
    'Web Developer',
    'AI & ML <br> Enthusiast',
    
  ]
  let index = 0
  let charIndex = 0

  function updateTitle () {
    dynamicTitle.innerHTML = `Hi,<br>I'am <span class="home__title-color">Prasad Reddy</span><br> ${titles[
      index
    ].substring(0, charIndex)}<span id="cursor"></span>`
  }

  function typeTitle () {
    if (charIndex < titles[index].length) {
      charIndex++
      updateTitle()
      setTimeout(typeTitle, 100)
    } else {
      setTimeout(eraseTitle, 1000)
    }
  }

  function eraseTitle () {
    if (charIndex > 0) {
      charIndex--
      updateTitle()
      setTimeout(eraseTitle, 50)
    } else {
      index = (index + 1) % titles.length
      setTimeout(typeTitle, 500)
    }
  }

  function startTypingEffect () {
    const homeSection = document.getElementById('home')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeTitle()
          observer.unobserve(entry.target) 
        }
      })
    }, options)

    observer.observe(homeSection)
  }

  startTypingEffect()
})

showMenu('nav-toggle', 'nav-menu')

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

const darkModeToggle = document.getElementById('darkModeToggle')
const body = document.body
const slider = document.querySelector('.slider')
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')

body.classList.remove('dark-mode')

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
  sunIcon.style.display = body.classList.contains('dark-mode')
    ? 'none'
    : 'inline-block'
  moonIcon.style.display = body.classList.contains('dark-mode')
    ? 'inline-block'
    : 'none'
  slider.style.transform = body.classList.contains('dark-mode')
    ? 'translateX(25px)'
    : 'translateX(0)'
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive () {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {})
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400
})
sr.reveal('.home__social-icon', { interval: 200 })
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 })
