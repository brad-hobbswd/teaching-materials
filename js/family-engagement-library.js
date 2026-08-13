/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   FAMILY ENGAGEMENT LIBRARY

   File:
   js/family-engagement-library.js

   Page:
   library/family-engagement/index.html
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("header nav");

    if (mobileMenu && nav) {

        mobileMenu.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-label", "Open navigation menu");

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("mobile-nav-open");

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

            mobileMenu.textContent =
                isOpen ? "✕" : "☰";
        });


        /* Close menu when navigation link is selected */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-nav-open");

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

        document.addEventListener("click", event => {

            const clickedInsideNav =
                nav.contains(event.target);

            const clickedMenu =
                mobileMenu.contains(event.target);

            if (
                !clickedInsideNav &&
                !clickedMenu &&
                nav.classList.contains("mobile-nav-open")
            ) {

                nav.classList.remove("mobile-nav-open");

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

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });


    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

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

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ======================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    if (mobileMenu) {

        mobileMenu.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                mobileMenu.click();
            }

        });

    }


    /* ======================================================
       ESCAPE KEY CLOSES MOBILE MENU
    ====================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            nav &&
            nav.classList.contains("mobile-nav-open")
        ) {

            nav.classList.remove("mobile-nav-open");

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
            }

        }

    });


    /* ======================================================
       NEWSLETTER FORM
       Only runs if this page has a newsletter form.
    ====================================================== */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            () => {

                const submitButton =
                    newsletterForm.querySelector(
                        'button[type="submit"]'
                    );

                if (!submitButton) {
                    return;
                }

                submitButton.disabled = true;

                submitButton.textContent =
                    "Thank You! ✓";

            }
        );

    }


    /* ======================================================
       IMAGE ERROR HANDLING
       Prevents broken images from creating awkward layouts.
    ====================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

        });

    });


    /* ======================================================
       INITIALIZE
    ====================================================== */

    document.body.classList.add(
        "family-library-ready"
    );

});