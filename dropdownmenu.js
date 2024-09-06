document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.header2 .menu');
    const menuBtn = document.querySelector('.header2 .open-btn a');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Ajoutez un gestionnaire d'événement de clic au bouton
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Basculez la classe 'show' sur le menu pour afficher/masquer
        menu.classList.toggle('show');
        overlay.classList.toggle('show');
        body.classList.toggle('no-scroll');

        // Changez le texte du bouton selon l'état du menu
        if (menu.classList.contains('show')) {
            menuBtn.textContent = 'Close'; // Change le texte en 'Close'
        } else {
            menuBtn.textContent = 'Menu'; // Change le texte en 'Menu'
        }
    });

    // Ajoutez un gestionnaire d'événement de clic à l'overlay pour fermer le menu
    overlay.addEventListener('click', function () {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        body.classList.remove('no-scroll');
        menuBtn.textContent = 'Menu'; // Réinitialise le texte du bouton
    });

    // Gestion du défilement
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        
        if (window.scrollY > 20) { // Check if the scroll is more than 20 pixels from the top
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
