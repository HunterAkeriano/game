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
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }else{
        change.target.classList.remove('element-show');
      }
    });
  }
let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


//   swiper 2
let swiper2 = new Swiper(".swiper2",{
    spaceBetween: 30,
  
    centerSlides: 'true',
    fade: 'true',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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