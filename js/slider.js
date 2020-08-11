let slides = document.querySelectorAll('.slide');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideIndex = 1;

const startSlide = (slide, prev=null,direction = "none") => {
    // slideIndex shouldn't be less than 0 or more than total number of slides
    slide < 1 ? slideIndex = slides.length: null;
    slide > slides.length ? slideIndex = 1: null;
    
    // Hide slides
    for (let i = 0; i < slides.length; i++) {
        
        slides[i].style.display = 'none';
    }

    // Choose slide to display
    slides[slideIndex - 1].style.display = "grid";

    // Hide element slowly after sliding
    
    

    // slides[slideIndex - 1].classList.remove(`fade`);
    slides[slideIndex - 1].classList.add(`animate__${direction}`);
    setTimeout(() => slides[slideIndex - 1].classList.remove(`animate__${direction}`), 500);
}

startSlide(slideIndex);

const moveSlide = (slide, direction, prev) => {
    startSlide(slideIndex += slide, prev, direction);
}

const slideLeft = (slide) => {
    moveSlide(slide, "slideInRight", slide + 1);
}

const slideRight = (slide) => {
    moveSlide(slide, "slideInLeft", slide - 1);
}
