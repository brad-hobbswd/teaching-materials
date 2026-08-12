/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   COMMUNITY HELPERS COLLECTION

   File:
   js/community-helpers.js

   Page:
   library/collections/community-helpers.html
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
       ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("header nav");

    if (mobileMenu && navigation) {

        mobileMenu.setAttribute("aria-expanded", "false");

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

            mobileMenu.textContent =
                isOpen ? "✕" : "☰";
        });


        /* Close the menu after selecting a link */

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

    }


    /* ======================================================
       CARD KEYBOARD / INTERACTION SUPPORT
       ====================================================== */

    const cards =
        document.querySelectorAll(".study-card");

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("card-active");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("card-active");
        });

    });


    /* ======================================================
       IMAGE LOAD HANDLING
       ====================================================== */

    const cardImages =
        document.querySelectorAll(".study-card img");

    cardImages.forEach((image) => {

        if (image.complete) {
            image.classList.add("image-loaded");
        } else {

            image.addEventListener("load", () => {
                image.classList.add("image-loaded");
            });

        }

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                "Community Helpers image could not be loaded:",
                image.src
            );

        });

    });


    /* ======================================================
       SMOOTH INTERNAL LINKS
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

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ======================================================
       CURRENT YEAR
       ====================================================== */

    const yearElement =
        document.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.textContent =
            yearElement.textContent.replace(
                /\b20\d{2}\b/,
                currentYear
            );
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
            }

        }

    });

});