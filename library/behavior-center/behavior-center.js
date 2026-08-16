document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".mobile-menu");
    const nav = document.querySelector("header nav");

    if (button && nav) {
        button.setAttribute("aria-expanded", "false");
        button.addEventListener("click", () => {
            const open = nav.classList.toggle("show");
            button.setAttribute("aria-expanded", String(open));
            button.setAttribute("aria-label", open ? "Close Navigation" : "Open Navigation");
        });
        nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
            nav.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open Navigation");
        }));
        document.addEventListener("click", event => {
            if (!nav.contains(event.target) && !button.contains(event.target)) {
                nav.classList.remove("show");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Open Navigation");
            }
        });
    }

    const currentPath = window.location.pathname;
    document.querySelectorAll("header nav a").forEach(link => {
        const path = new URL(link.href, window.location.href).pathname;
        link.classList.toggle("active", currentPath === path);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", event => {
            const id = anchor.getAttribute("href");
            const target = id && document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    document.querySelectorAll(".study-card").forEach(card => {
        card.addEventListener("mouseenter", () => card.style.transform = "translateY(-6px)");
        card.addEventListener("mouseleave", () => card.style.transform = "");
    });

    const year = document.querySelector(".year");
    if (year) year.textContent = new Date().getFullYear();
});
