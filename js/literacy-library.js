/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   LITERACY LIBRARY
   Page-Specific JavaScript

   File:
   js/literacy-library.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenu && nav) {

        mobileMenu.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-label", "Open navigation menu");

        mobileMenu.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("is-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            mobileMenu.textContent = isOpen ? "✕" : "☰";

        });


        /* Close menu when a navigation link is selected */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("is-open");

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


        /* Close mobile navigation when clicking outside */

        document.addEventListener("click", event => {

            const clickedInsideNav =
                nav.contains(event.target);

            const clickedMenu =
                mobileMenu.contains(event.target);

            if (
                !clickedInsideNav &&
                !clickedMenu &&
                nav.classList.contains("is-open")
            ) {

                nav.classList.remove("is-open");

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

        });


        /* Close navigation with Escape */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                nav.classList.contains("is-open")
            ) {

                nav.classList.remove("is-open");

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

        });

    }


    /* ======================================================
       CLOSE MOBILE NAV WHEN SCREEN EXPANDS
    ====================================================== */

    const desktopBreakpoint = window.matchMedia(
        "(min-width: 821px)"
    );

    const handleDesktopChange = event => {

        if (event.matches && nav && mobileMenu) {

            nav.classList.remove("is-open");

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

    };

    if (desktopBreakpoint.addEventListener) {

        desktopBreakpoint.addEventListener(
            "change",
            handleDesktopChange
        );

    } else {

        desktopBreakpoint.addListener(
            handleDesktopChange
        );

    }


    /* ======================================================
       CURRENT YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(element => {

        element.textContent = currentYear;

    });


    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector("header");

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                16;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ======================================================
       IMAGE FALLBACK
       
       Prevent broken images from making cards look broken.
    ====================================================== */

    const images =
        document.querySelectorAll(
            ".resource-card-image img"
        );

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const parent =
                image.parentElement;

            if (
                parent &&
                !parent.querySelector(
                    ".resource-placeholder"
                )
            ) {

                const placeholder =
                    document.createElement("div");

                placeholder.className =
                    "resource-placeholder";

                placeholder.textContent = "📖";

                parent.appendChild(
                    placeholder
                );

            }

        });

    });


    /* ======================================================
       CARD KEYBOARD ACCESSIBILITY
       
       Allows cards containing links to receive a subtle
       visual focus state without changing navigation.
    ====================================================== */

    const cards =
        document.querySelectorAll(
            ".resource-card, .pathway-card"
        );

    cards.forEach(card => {

        const link =
            card.querySelector("a");

        if (!link) {
            return;
        }

        link.addEventListener(
            "focus",
            () => {
                card.classList.add("is-focused");
            }
        );

        link.addEventListener(
            "blur",
            () => {
                card.classList.remove("is-focused");
            }
        );

    });


    /* ======================================================
       PREVENT EMPTY HASH LINKS
       
       Links such as href="#" should return the user to the
       current position rather than jumping unexpectedly.
    ====================================================== */

    const emptyHashLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );

    emptyHashLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {
                event.preventDefault();
            }
        );

    });


    /* ======================================================
       REDUCED MOTION SUPPORT
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (prefersReducedMotion.matches) {

        document.documentElement.style.scrollBehavior =
            "auto";

    }


    /* ======================================================
       PAGE READY
    ====================================================== */

    document.body.classList.add(
        "page-ready"
    );

});