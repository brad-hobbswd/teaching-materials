document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".main-nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        nav.classList.toggle("active");

        button.setAttribute(
            "aria-expanded",
            nav.classList.contains("active")
        );

    });

});