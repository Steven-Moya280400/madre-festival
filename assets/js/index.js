var currentPosition;

function openCloseNav() {
    let body = document.getElementById('bodyMadre');

    if (body.classList.contains('navOpen')) {
        let navItems = document.querySelectorAll('.navMenu .navAccorderon');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('hide');
            navItems[i].classList.remove('active');
            navItems[i].querySelector('.accordeon').removeAttribute("open")
        }
        body.classList.remove('navOpen');
        window.scrollTo(0, currentPosition);
    }
    else {
        currentPosition = window.scrollY;
        body.classList.add('navOpen');
        window.scrollTo(0, 0);
    }
}

function openNavItem(id) {
    let navItems = document.querySelectorAll('.navMenu .navAccorderon');
    let navItemActivo = document.querySelector('.navMenu .navAccorderon.active');

    if (navItemActivo != null && navItemActivo != undefined) {
        navItemActivo.classList.remove('active');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('hide');
        }
    }
    else {
        for (let i = 0; i < navItems.length; i++) {
            if (navItems[i].id != id) {
                navItems[i].classList.add('hide');
            }
            else {
                navItems[i].classList.add('active');
            }
        }
    }
}

function chanceLineUpDay(id){
    let btnLineUpActive = document.querySelector('.itemMenuLineUp.active');
    let tableActive = document.querySelector('.tableArtist.show');

    btnLineUpActive.classList.remove('active');
    tableActive.classList.remove('show');

    document.getElementById('btn_'+id).classList.add('active');
    document.getElementById(id).classList.add('show');
}