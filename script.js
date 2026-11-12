document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item a');
    const navbarDrawer = document.getElementById('navbarNav');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navbarDrawer.close();
        });
    });
});