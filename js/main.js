// Header scroll effect

const header = document.querySelector('.header');
window.addEventListener('scroll', function(){
   window.scrollY > 10
      ? header.classList.add('sticky') 
      : header.classList.remove('sticky')
})

// Navigation menu items active

window.addEventListener('scroll', function(){
   const section = document.querySelectorAll("section");
   const scrollY = window.scrollY;

   section.forEach(function(current){
      let sectionHight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");
      let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`);
      
      if (navItem) {
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
            navItem.classList.add("active");
         } else {
            navItem.classList.remove("active");
         }
      }
   })
})

// Scroll to top

const scrollToTop = document.querySelector('.scrollToTop');
window.addEventListener('scroll', function(){
   scrollToTop.classList.toggle('active', this.window.scrollY > 500)
})

scrollToTop.addEventListener('click', function(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
})

// Responsive navigation menu toggle 

const navBtn = document.querySelector('.nav-menu-btn');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener("click", function(){
   navBtn.classList.toggle('close');
   navBar.classList.toggle('active');
   navMenu.classList.toggle('active');
});

navLinks.forEach(function(link){
   link.addEventListener("click", function(){
      navBtn.classList.remove('close');
      navBar.classList.remove('active');
      navMenu.classList.remove('active');
   })
});

// initial Scroll reveal

const revealConfigurations = [
   {selector: '.inner-title, inner-second-title', config: {opacity: 0, delay: 500}},
   {selector: '.home-info h1, .about-img, .contact-card, title', config: {delay: 500, origin: "left"}},
   {selector: '.home-img, .description', config: {delay: 600, origin: "right"}},
   {selector: '.skills-description, .work-exp-title, .services-description, contact-right p, .contact-left h2', config: {delay: 600, origin: "top"}},
   {selector: '.media-icons a, .list-item, inner-info-link', config: {delay: 700, origin: "bottom", interval: 400}},
   {selector: '.education, .skills-info', config: {origin: "bottom", delay: 600, interval: 400}},
   {selector: '.work-exp, .experience-card, .services-container, .portfolio-img-card, .contact-list li, .first-row, .second-row, .third-row', config: {origin: "bottom", delay: 600, interval: 400}},
   {selector: '.home-info h3, .home-info p, .home-info-link', config: {delay: 600, origin: "left"}},
];

function initializeScrollReveal(){
   window.sr = ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2500,
      delay: 100
   })
   revealConfigurations.forEach(({selector, config}) => {
      sr.reveal(selector, config)
   })
};

initializeScrollReveal();

// Функция отключения ScrollReveal

function disableScrollReveal(){
   sr.clean() // Очистка всех элементов от анимация
   document.documentElement.style.overflowY = "hidden";
   document.body.style.overflowY = "hidden";

   revealConfigurations.forEach(({selector}) => {
      document.querySelectorAll(selector).forEach(el => {
         el.style.transform = ''
         el.style.opacity = ''
         el.style.transition = ''
         el.style.visibility = ''
      })
   })
}

// Функция повторной инициализации ScrollReveal

function enableScrollReveal(){
   document.documentElement.style.overflowY = "";
   document.body.style.overflowY = "";
}

// theme button Light/Dark

const themeBtn = document.querySelector('.them-btn');
// Функция для получения текущей темы
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
// Функция для получения текущего значка
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";
// Слушатель событий для переключения темы
themeBtn.addEventListener("click", function(){
   document.body.classList.toggle("dark-theme");
   themeBtn.classList.toggle("sun");

   localStorage.setItem("saved-theme", getCurrentTheme());
   localStorage.setItem("saved-icon", getCurrentIcon());
})

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

// Применение сохраненную тему и значку

if(savedTheme){
   document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Service section - Modal
const serviceModal = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function(modalClick){
   serviceModal[modalClick].classList.add('active');
   disableScrollReveal()
}

learnMoreBtn.forEach((button, i) => {
   button.addEventListener('click', function(){
      modal(i)
   })
})

modalCloseBtn.forEach(button => {
   button.addEventListener('click', () => {
      serviceModal.forEach(modal => {
         modal.classList.remove('active')
      })
      enableScrollReveal();
   })
})

// Portfolio section - Modal
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCard = document.querySelectorAll('.img-card');
const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');

const portfolioModal = function(modalClick){
   portfolioModals[modalClick].classList.add("active");
};

imgCard.forEach((button, i) => {
   button.addEventListener("click", () => {
      portfolioModal(i);
   });
});

portfolioCloseBtn.forEach(button => {
   button.addEventListener("click", () => {
      portfolioModals.forEach(modelView => {
         modelView.classList.remove("active")
      })
      enableScrollReveal()
   })
})

// Swiper_slider

const swiper = new Swiper(".client-wrapper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});