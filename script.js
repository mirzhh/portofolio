let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-toggler');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin:'left'});
sr.reveal('.navbar',{delay:400, origin:'top'});
sr.reveal('.menu-btn',{delay:520, origin:'right'});
sr.reveal('.home-text span',{delay:600, origin:'bottom'});
sr.reveal('.home-text h1',{delay:720, origin:'left'});
sr.reveal('.home-text p',{delay:750, origin:'right'});
sr.reveal('.main-btn',{delay:780, origin:'left'});
sr.reveal('.share',{delay:750, origin:'bottom'});
sr.reveal('.home-img',{delay:780, origin:'right'});
sr.reveal('.text',{delay:800, origin:'top'})