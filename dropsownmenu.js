document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menubtn');
    const dropdownMenu = document.getElementById('dropdownmenu');

    menuBtn.addEventListener('click', function() {
        // Toggle la classe "show" sur le dropdown menu
        dropdownMenu.classList.toggle('show');
    });
});