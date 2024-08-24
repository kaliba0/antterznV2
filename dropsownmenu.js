document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menubtn');
    const closeBtn = document.getElementById('close');
    const showProducts = document.getElementById('products');
    const showProductsIcon = document.getElementById('showProductsIcon');
    const subProducts = document.getElementById('sub-products');
    const dropdownMenu = document.getElementById('dropdownmenu');
    const body = document.body;
    let scrollPosition = 0;

    menuBtn.addEventListener('click', function() {
        scrollPosition = window.scrollY;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
        dropdownMenu.classList.add('show');
    });

    closeBtn.addEventListener('click', function() {
        body.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, scrollPosition);
        dropdownMenu.classList.remove('show');
    });

    showProducts.addEventListener('click', function() {
        // Basculer l'affichage du sous-menu avec effet de glissement
        subProducts.classList.toggle('show');
        showProductsIcon.classList.toggle('rotate-90');
    });
});
