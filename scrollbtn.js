// button//

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down 100px
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); 