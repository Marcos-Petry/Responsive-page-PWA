function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "componente/iconMenu/menu36px.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "componente/iconMenu/iconClose36px.png";
    }
}