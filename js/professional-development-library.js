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

            const isOpen =
                nav.classList.toggle("mobile-nav-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            mobileMenu.textContent =
                isOpen ? "✕" : "☰";

        });


        /* Close menu when a navigation link is selected */

        const navLinks =
            nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove(
                    "mobile-nav-open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                mobileMenu.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideNav =
                    nav.contains(event.target);

                const clickedMenu =
                    mobileMenu.contains(event.target);

                if (
                    !clickedInsideNav &&
                    !clickedMenu
                ) {

                    nav.classList.remove(
                        "mobile-nav-open"
                    );

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                    mobileMenu.textContent = "☰";

                }

            }
        );


        /* Close mobile navigation with Escape */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    nav.classList.remove(
                        "mobile-nav-open"
                    );

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                    mobileMenu.textContent = "☰";

                    mobileMenu.focus();

                }

            }
        );

    }


    /* ======================================================
       CURRENT YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {

        element.textContent =
            currentYear;

    });


    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* ======================================================
       RESOURCE CARD KEYBOARD SUPPORT
    ====================================================== */

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );

    resourceCards.forEach(function (card) {

        const link =
            card.querySelector("a");

        if (!link) {
            return;
        }

        card.setAttribute(
            "tabindex",
            "0"
        );


        card.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    /*
                     * Do not trigger the card
                     * when the actual link already
                     * has keyboard focus.
                     */

                    if (
                        document.activeElement === link
                    ) {
                        return;
                    }

                    event.preventDefault();

                    link.click();

                }

            }
        );

    });


    /* ======================================================
       EXTERNAL RESOURCE LINKS
    ====================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );

    externalLinks.forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* ======================================================
       HEADER SHADOW ON SCROLL
    ====================================================== */

    const header =
        document.querySelector("body > header");

    if (header) {

        function updateHeader() {

            if (window.scrollY > 10) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }


    /* ======================================================
       REDUCED MOTION
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (prefersReducedMotion.matches) {

        document.documentElement.style
            .scrollBehavior = "auto";

    }


    /* ======================================================
       RESIZE HANDLING
       Prevents mobile navigation from remaining open
       after returning to desktop width.
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 768 &&
                nav &&
                mobileMenu
            ) {

                nav.classList.remove(
                    "mobile-nav-open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                mobileMenu.textContent = "☰";

            }

        }
    );


    /* ======================================================
       INITIALIZE MOBILE BUTTON ACCESSIBILITY
    ====================================================== */

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }


    /* ======================================================
       PAGE READY
    ====================================================== */

    document.body.classList.add(
        "page-ready"
    );

});