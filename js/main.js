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
        console.log(scrollDistance)
    }else{
        header.classList.remove('fixed');
    }
})

