const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    //Obtiene la altura del elemento incluidos el padding y border:
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}