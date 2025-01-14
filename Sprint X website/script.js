// const slidesWrapper = document.querySelector(".slideswrapper");
// const totalSlides = document.querySelectorAll(".fotocontainer").length;
// const slidesToShow = 1; // Aantal zichtbare slides
// let currentIndex = 0;

// function showNextSlides() {
//   // Bereken hoeveel je moet verschuiven
//   const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1; // Maximale index
//   currentIndex = (currentIndex + 1) % (maxIndex + 1);

//   // Bereken de nieuwe verschuiving
//   const translateX = -currentIndex * 30; // 100% van de containerbreedte per set slides
//   slidesWrapper.style.transform = `translateX(${translateX}%)`;
// }

// // Start de slideshow
// // setInterval(showNextSlides, 3000); // Wissel elke 3 seconden

// // buttons slideshow

// document.getElementById("prev").addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + totalSlides / slidesToShow) % (totalSlides / slidesToShow);
//     const translateX = -currentIndex * (100 / slidesToShow); // Verplaats op basis van 100% / zichtbare slides
//     slidesWrapper.style.transform = `translateX(${translateX}%)`;
//   });
  
//   document.getElementById("next").addEventListener("click", showNextSlides);
  
// 2de poging

const slidesWrapper = document.querySelector(".slideswrapper");
const totalSlides = document.querySelectorAll(".fotocontainer").length;
const slidesToShow = 3; // Aantal slides zichtbaar tegelijk
let currentIndex = 0;

function updateSlidePosition() {
  // Bereken de nieuwe verschuiving
  const translateX = -currentIndex * (90 / slidesToShow); // 100% / aantal zichtbare slides
  slidesWrapper.style.transform = `translateX(${translateX}%)`;
}

function showNextSlides() {
  currentIndex = (currentIndex + 1) % (totalSlides - slidesToShow + 1); // Herstart naar 0 als je voorbij het laatste punt gaat
  updateSlidePosition();
}

function showPrevSlides() {
  currentIndex = (currentIndex - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1);
  updateSlidePosition();
}

// Automatisch schakelen
// setInterval(showNextSlides, 3000); // Wissel elke 3 seconden

// Handmatige knoppen
document.getElementById("prev").addEventListener("click", showPrevSlides);
document.getElementById("next").addEventListener("click", showNextSlides);

// 3de poging
// const slidesWrapper = document.querySelector(".slideswrapper");
// const totalSlides = document.querySelectorAll(".fotocontainer").length;
// const slidesToShow = 3; // Aantal slides zichtbaar tegelijk
// let currentIndex = 0;

// // Update slidepositie
// function updateSlidePosition() {
//   const translateX = -currentIndex * (90 / slidesToShow);
//   slidesWrapper.style.transform = `translateX(${translateX}%)`;
// }

// // Spring naadloos terug naar de echte eerste slide
// function resetToFirstSlide() {
//   slidesWrapper.style.transition = "none"; // Schakel animatie tijdelijk uit
//   currentIndex = 0; // Ga naar de echte eerste slide
//   updateSlidePosition();
//   setTimeout(() => {
//     slidesWrapper.style.transition = "transform 0.5s ease"; // Zet animatie weer aan
//   }, 50); // Korte vertraging voor een vloeiende overgang
// }

// // Ga naar de volgende slides
// function showNextSlides() {
//   currentIndex++;
//   if (currentIndex === totalSlides - slidesToShow) {
//     // Laatste set bereikt, spring terug
//     setTimeout(resetToFirstSlide, 500); // Wacht tot de animatie klaar is
//   }
//   updateSlidePosition();
// }

// // Ga naar de vorige slides
// function showPrevSlides() {
//   if (currentIndex === 0) {
//     // Als we op de eerste slide staan, ga naar het einde
//     slidesWrapper.style.transition = "none"; // Schakel animatie tijdelijk uit
//     currentIndex = totalSlides - slidesToShow; // Ga naar de gekloonde slides
//     updateSlidePosition();
//     setTimeout(() => {
//       slidesWrapper.style.transition = "transform 0.5s ease"; // Zet animatie weer aan
//     }, 50);
//   }
//   currentIndex--;
//   updateSlidePosition();
// }


// // Handmatige knoppen
// document.getElementById("prev").addEventListener("click", showPrevSlides);
// document.getElementById("next").addEventListener("click", showNextSlides);

// 5de poging

// alert
