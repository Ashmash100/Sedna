const hamMenu = document.getElementById('ham-menu');
const navMenu = document.querySelector('.nav-menu');
const scrollArrow = document.getElementById('scroll-arrow');
const body = document.body;
const navHr = document.getElementById('nav-hr');


hamMenu.onclick = () => {
    if(navMenu.classList.contains('hide')) {
        navMenu.classList.remove('hide')
        body.style.position = "fixed";

    } else {
        navMenu.classList.add('hide')
        body.style.position = "static";       
    }   
}

scrollArrow.onclick = () => {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 600) {
      document.getElementById('header').classList.add('header-scroll'); 
      navHr.classList.add('hide')      
    } else {
      document.getElementById('header').classList.remove("header-scroll");  
      navHr.classList.remove('hide')     
    }
});

window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 0) {
        navHr.classList.add('hide')
    } else {
        navHr.classList.remove('hide')
    }
})









