/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   PROFESSIONAL DEVELOPMENT LIBRARY

   File:
   js/professional-development-library.js

   Page:
   library/professional-development/index.html
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */
    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenu && nav) {
        mobileMenu.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("mobile-nav-open");
            mobileMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
            mobileMenu.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            mobileMenu.textContent = isOpen ? "✕" : "☰";
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("mobile-nav-open");
                mobileMenu.setAttribute("aria-expanded", "false");
                mobileMenu.setAttribute("aria-label", "Open navigation menu");
                mobileMenu.textContent = "☰";
            });
        });

        document.addEventListener("click", function (event) {
            if (!nav.contains(event.target) && !mobileMenu.contains(event.target)) {
                nav.classList.remove("mobile-nav-open");
                mobileMenu.setAttribute("aria-expanded", "false");
                mobileMenu.setAttribute("aria-label", "Open navigation menu");
                mobileMenu.textContent = "☰";
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                nav.classList.remove("mobile-nav-open");
                mobileMenu.setAttribute("aria-expanded", "false");
                mobileMenu.setAttribute("aria-label", "Open navigation menu");
                mobileMenu.textContent = "☰";
                mobileMenu.focus();
            }
        });
    }

    /* ======================================================
       CURRENT YEAR
    ====================================================== */
    const currentYear = new Date().getFullYear();
    document.querySelectorAll(".year").forEach(function (element) {
        element.textContent = currentYear;
    });

    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const target = document.querySelector(targetId);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    /* ======================================================
       RESOURCE CARD KEYBOARD SUPPORT
    ====================================================== */
    document.querySelectorAll(".resource-card").forEach(function (card) {
        const link = card.querySelector("a");
        if (!link) return;

        card.setAttribute("tabindex", "0");
        card.addEventListener("keydown", function (event) {
            if ((event.key === "Enter" || event.key === " ") && document.activeElement !== link) {
                event.preventDefault();
                link.click();
            }
        });
    });

    /* ======================================================
       EXTERNAL RESOURCE LINKS
    ====================================================== */
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        link.setAttribute("rel", "noopener noreferrer");
    });

    /* ======================================================
       PROFESSIONAL DEVELOPMENT ARTWORK
       The HTML originally referenced PNG placeholders.
       Use the new scalable SVG artwork instead.
    ====================================================== */
    const artworkMap = {
        "images/cda-support.png": "images/cda-support.svg",
        "images/coaching.png": "images/coaching.svg",
        "images/leadership.png": "images/leadership.svg",
        "images/classroom-environments.png": "images/classroom-environments.svg",
        "images/continuing-education.png": "images/continuing-education.svg"
    };

    document.querySelectorAll(".resource-card-image img").forEach(function (image) {
        const source = image.getAttribute("src");
        if (artworkMap[source]) {
            image.src = artworkMap[source];
        }
    });

    /* Replace the final placeholder card with its new artwork. */
    const reflectionPlaceholder = document.querySelector(
        '.resource-card a[href="professional-reflection.html"]'
    );

    if (reflectionPlaceholder) {
        const card = reflectionPlaceholder.closest(".resource-card");
        const imageArea = card ? card.querySelector(".resource-card-image") : null;
        if (imageArea) {
            imageArea.innerHTML = '<img src="images/professional-reflection.svg" alt="Professional reflection and educator growth resources">';
        }
    }

    /* ======================================================
       HEADER SHADOW ON SCROLL
    ====================================================== */
    const header = document.querySelector("body > header");

    if (header) {
        function updateHeader() {
            header.classList.toggle("scrolled", window.scrollY > 10);
        }

        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    /* ======================================================
       REDUCED MOTION
    ====================================================== */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
        document.documentElement.style.scrollBehavior = "auto";
    }

    /* ======================================================
       RESIZE HANDLING
    ====================================================== */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && nav && mobileMenu) {
            nav.classList.remove("mobile-nav-open");
            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-label", "Open navigation menu");
            mobileMenu.textContent = "☰";
        }
    });

    /* ======================================================
       INITIALIZE MOBILE BUTTON ACCESSIBILITY
    ====================================================== */
    if (mobileMenu) {
        mobileMenu.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-label", "Open navigation menu");
    }

    document.body.classList.add("page-ready");
});
