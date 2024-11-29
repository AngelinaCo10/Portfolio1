




let slideIndex = 0; // Huidige slide-index

function showSlides(index) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Zorg dat de index niet buiten bereik gaat
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // Verberg alle slides en verwijder actieve dot
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Toon de huidige slide en markeer de actieve dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Navigatieknoppen
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Dots
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Initialiseer de slideshow
showSlides(slideIndex);