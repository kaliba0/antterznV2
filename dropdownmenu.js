// Variable to keep track of the scroll state
let lastScrollY = 0;
const header = document.querySelector('header');

// Function to handle scroll events
function onScroll() {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Throttle the scroll event with requestAnimationFrame
function handleScroll() {
    if (Math.abs(lastScrollY - window.scrollY) > 5) { // Avoid small scroll movements
        requestAnimationFrame(onScroll);
        lastScrollY = window.scrollY;
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
