const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');

slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
    console.log(slide);
})

let counter = 0;

nextBtn.addEventListener('click', ()=>{
    counter++;
    carousel()
})
prevBtn.addEventListener('click', ()=>{
    counter--
    carousel()
})

function carousel() {

    // opciones:
    // cambiar de extremo cuando se siga escrolleando
    // if (counter === slides.length) {
    //     counter = 0;
    // } else if (counter < 0){
    //     counter = slides.length - 1;
    // }
    // ocultar botones para seguir cuando se llegue a extremo
    if(counter < slides.length -1){
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    
    
    slides.forEach(slide=> slide.style.transform = `translateX(-${counter * 100}%)`)
}

    // ocultar botones para seguir cuando se llegue a extremo
    prevBtn.style.display = 'none';

