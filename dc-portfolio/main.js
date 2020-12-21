'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});


// Handle scrolling navbar
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == undefined) {
    return;
  }
  scrollIntoView(link);
  navbarMenu.classList.remove('open');
  navbar.classList.remove('open');
});

// click nav-bar menu

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
  navbarMenu.classList.toggle('open');
  navbar.classList.toggle('open');
});
// Handle scrolling Button(Contact Me)
const contactButton = document.querySelector('.home__button');
contactButton.addEventListener('click', () => {
  scrollIntoView('.contact')
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}

//Transparent Home fade
const home = document.querySelector('.home-container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1-(window.scrollY / homeHeight);

});

// Up Arrow button
const about = document.querySelector('.about');
const aboutHeight = about.getBoundingClientRect().height;
const arrowUpBtn = document.querySelector('.fa-arrow-up');
document.addEventListener('scroll', () => {
  const homeAboutHeight = homeHeight + aboutHeight;
  if(window.scrollY > (homeAboutHeight /2 )) {
    arrowUpBtn.classList.add('show');
  } else {
    arrowUpBtn.classList.remove('show');
  }
});
arrowUpBtn.addEventListener('click', () => {
  scrollIntoView('.home');
});

//Categoty_Btn

const categoryContainer = document.querySelector('.work__category');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.work__project');
categoryContainer.addEventListener('click', (ev) => {
  const filter = ev.target.dataset.filter || ev.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Remove selection from the previous itme and select the new
  const active = document.querySelector('.category__btn.seleted');
  active.classList.remove('seleted');
  const target = ev.target.nodeName === 'BUTTON' ? ev.target : ev.target.parentNode;
  ev.target.classList.add('seleted');
  projectContainer.classList.add('anim-out');
  setTimeout(() =>{
    projects.forEach((project) => {
      if (filter === 'all' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

const sectionsClass = [
  '.home',
  '.about',
  '.skills',
  '.work',
  '.testimonials',
  '.contact'
];
const sections = sectionsClass.map(id => document.querySelector(id));
const navItems = sectionsClass.map(id => 
  document.querySelector(`[data-link="${id}"]`));

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
    console.log(entry.target);
  });
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));