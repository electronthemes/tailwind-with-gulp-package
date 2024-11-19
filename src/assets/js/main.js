document.addEventListener("DOMContentLoaded", function () {
    var mainMenu = document.querySelector('.main-menu'),
        hamburger = document.querySelector('.hamburger');

    function isSmallScreen() {
        return window.innerWidth < 640;
    }

    hamburger.addEventListener("click", function () {
        if (!isSmallScreen()) return;
        this.classList.toggle('is-active');
        mainMenu.classList.toggle("menu-active");
    });

    document.addEventListener('click', function (event) {
        if (!isSmallScreen()) return;
        if (
            !mainMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            hamburger.classList.remove('is-active');
            mainMenu.classList.remove("menu-active");
        }
    });
});
