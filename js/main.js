const closeTop = document.getElementById('pages-close');
const pagesInfo = document.getElementById('pages-info');
const header = document.getElementById('header');

function closeTopBlock(){
    pagesInfo.classList.add('delete');
    header.classList.add('delete');
}

closeTop.addEventListener('click', closeTopBlock);

//burger menu
const burger = document.querySelector('.burger');
const ulNav = document.querySelector('.header__nav-ul');

function mobileMenu(){
    let nav = burger.classList.toggle('active');
     ulNav.classList.toggle('active');
     if(nav){
         document.body.style.overflow = 'hidden';
     }if(!nav){
         document.body.style.overflow = 'scroll';
     }
 }

 burger.addEventListener('click', mobileMenu);

 const navLink = document.querySelectorAll('.nav-link');

 function closeMenu(){
    burger.classList.remove('active');
    ulNav.classList.remove('active');
    document.body.style.overflow = 'scroll';
}




navLink.forEach(n => n.addEventListener('click', closeMenu));

// pop up

const openPopUp = document.querySelector('.open_pop_up');
const openPopUp2 = document.querySelector('.open_pop_up_2');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

function openMenuPop(){
    popUp.classList.add('active');
}


openPopUp.addEventListener('click', openMenuPop);
openPopUp2.addEventListener('click', openMenuPop);

closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active');
});

// fix header

// header

const first = document.querySelector('.coding');

const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;

window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY;
    if(scrollDistance >= headerHeight + 10){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
})

let swiper = new Swiper(".swiper1",{
    spaceBetween: 30,
  
    centerSlides: 'true',
    fade: 'true',
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            centerSlides: 'true',
        },
        950: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1095: {
            slidesPerView: 2.5,
        },
        1290:{
          slidesPerView: 3,
        }
    }
  });

//   Анимация скрола страницы
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
