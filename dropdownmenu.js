window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    
    if (window.scrollY > 20) { // Check if the scroll is more than 20 pixels from the top
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});