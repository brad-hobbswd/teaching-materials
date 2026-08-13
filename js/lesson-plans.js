/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   LESSON PLAN LIBRARY JAVASCRIPT

   File:
   js/lesson-plans.js

   Purpose:
   Mobile navigation
   Current year
   Smooth navigation
   Image handling
   Accessibility
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
       ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("header nav");

    if (mobileMenu && navigation) {

        mobileMenu.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-label", "Open navigation menu");

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("mobile-nav-open");

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


        /* Close menu after selecting a navigation link */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove(
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

        document.addEventListener("click", (event) => {

            const clickedInsideNavigation =
                navigation.contains(event.target);

            const clickedMenu =
                mobileMenu.contains(event.target);

            if (
                !clickedInsideNavigation &&
                !clickedMenu &&
                navigation.classList.contains(
                    "mobile-nav-open"
                )
            ) {

                navigation.classList.remove(
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

        });


        /* Close mobile navigation when returning to desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                navigation.classList.remove(
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

        });

    }


    /* ======================================================
       CURRENT YEAR
       ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });


    /* ======================================================
       SMOOTH INTERNAL NAVIGATION
       ====================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

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

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ======================================================
       IMAGE LOADING
       ====================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("load", () => {

            image.classList.add("image-loaded");

        });

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                "Lesson Plan Library image could not be loaded:",
                image.src
            );

        });

    });


    /* ======================================================
       KEYBOARD ACCESSIBILITY
       ====================================================== */

    if (mobileMenu) {

        mobileMenu.addEventListener("keydown", (event) => {

            if (event.key === "Enter" ||
                event.key === " ") {

                event.preventDefault();

                mobileMenu.click();
            }

        });

    }


    /* ======================================================
       ESCAPE KEY CLOSES MOBILE MENU
       ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navigation &&
            navigation.classList.contains(
                "mobile-nav-open"
            )
        ) {

            navigation.classList.remove(
                "mobile-nav-open"
            );

            if (mobileMenu) {

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

    });


    /* ======================================================
       CARD HOVER ACCESSIBILITY
       ====================================================== */

    const cards =
        document.querySelectorAll(
            ".study-card, .interest-card, .resource-card, .family-card"
        );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });

    });


    /* ======================================================
       PAGE READY
       ====================================================== */

    document.body.classList.add("lesson-plans-ready");

});