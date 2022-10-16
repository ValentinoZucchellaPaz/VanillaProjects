// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// nav
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const linksUl = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    // para hacer dinamico se usa metodo que retorna tamaño y posicion relativa al viewport: Element.getBouncingClientRect()
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = linksUl.getBoundingClientRect().height;

    containerHeight === 0 ?
    linksContainer.style.height = `${linksHeight}px`
    : linksContainer.style.height = 0;
});


// fixed navbar
const navBar = document.getElementById('nav');
const btnUp = document.querySelector('.top-link')
window.addEventListener('scroll', ()=>{
    // scrollY: devuelve numero pixeles que se scrollearon para arriba o abajo (solo lee, no cambia)
    const scrollHeight = window.scrollY;
    const navHeight = navBar.getBoundingClientRect().height;

    scrollHeight > navHeight ? 
    navBar.classList.add('fixed-nav')
    : navBar.classList.remove('fixed-nav')

    scrollHeight > 400 ?
    btnUp.classList.add('show-link')
    : btnUp.classList.remove('show-link')
})


// precise smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link=> {
    link.addEventListener('click', (e)=>{
        // prevent default
        e.preventDefault()
        // ir a donde envia el link
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id)
        // calcular la altura del top
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;
        console.log(position);
        if(!fixedNav){
            position = position - navHeight;
        }
        if (navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position
        })
        // cerrar links cuando pantalla pequeña al clickearlos (solo afecta pantalla pequeña porque en pantalla grande hay !important en estilos)
        linksContainer.style.height = 0;
    })
})