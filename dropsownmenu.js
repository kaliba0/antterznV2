document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menubtn');
    const closeBtn = document.getElementById('close');
    const showProducts = document.getElementById('products');
    const showProductsIcon = document.getElementById('showProductsIcon');
    const subProducts = document.getElementById('sub-products')
    const dropdownMenu = document.getElementById('dropdownmenu');

    menuBtn.addEventListener('click', function() {
        // Toggle la classe "show" sur le dropdown menu
        dropdownMenu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        // Toggle la classe "show" sur le dropdown menu
        dropdownMenu.classList.toggle('show');
    });

    showProducts.addEventListener('click', function() {
        // Toggle la classe "show" sur le dropdown menu
        subProducts.classList.toggle('show');
        showProductsIcon.classList.toggle('rotate-90');

    });
});