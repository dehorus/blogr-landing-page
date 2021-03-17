let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');

document.addEventListener('click', (e) => {
    if (e.target.matches('.hamburger *')) {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle('active-nav');
    }
})

window.addEventListener('scroll', (e) => {
    const $navbar = document.querySelector('header');
    console.log(window.pageYOffset);
    if (window.pageYOffset > 635) {
        $navbar.classList.add('bg-gradient');
    } else {
        $navbar.classList.remove('bg-gradient');
    }
})