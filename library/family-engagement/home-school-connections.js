/* ==========================================
   HOME SCHOOL CONNECTIONS PAGE
   Page specific JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const mobileButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("header nav");

    if (mobileButton && navigation) {
        mobileButton.setAttribute("aria-expanded", "false");

        mobileButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("show");
            mobileButton.setAttribute("aria-expanded", String(isOpen));
            mobileButton.setAttribute("aria-label", isOpen ? "Close Navigation" : "Open Navigation");
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("show");
                mobileButton.setAttribute("aria-expanded", "false");
                mobileButton.setAttribute("aria-label", "Open Navigation");
            });
        });

        document.addEventListener("click", event => {
            if (!navigation.contains(event.target) && !mobileButton.contains(event.target)) {
                navigation.classList.remove("show");
                mobileButton.setAttribute("aria-expanded", "false");
                mobileButton.setAttribute("aria-label", "Open Navigation");
            }
        });
    }

    const currentPath = window.location.pathname;
    document.querySelectorAll("header nav a").forEach(link => {
        const linkPath = new URL(link.href, window.location.href).pathname;
        link.classList.toggle("active", currentPath === linkPath);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", event => {
            const targetId = anchor.getAttribute("href");
            const target = targetId && document.querySelector(targetId);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelectorAll(".study-card").forEach(card => {
        card.addEventListener("mouseenter", () => card.style.transform = "translateY(-6px)");
        card.addEventListener("mouseleave", () => card.style.transform = "");
    });
});
