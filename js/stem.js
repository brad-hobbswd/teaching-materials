/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   YOUNG SCIENTISTS / STEM COLLECTION

   File:
   js/stem.js

   Page:
   library/collections/stem.html
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
       ====================================================== */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector("header nav");


    if (mobileMenu && navigation) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle(
                    "mobile-nav-open"
                );

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


        /* Close navigation after selecting a link */

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
       CLOSE MOBILE MENU WITH ESCAPE
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


    /* ======================================================
       STEM CARD INTERACTION
       ====================================================== */

    const cards =
        document.querySelectorAll(".study-card");


    cards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.classList.add("card-active");
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.classList.remove("card-active");
            }
        );

    });


    /* ======================================================
       IMAGE LOAD HANDLING
       ====================================================== */

    const cardImages =
        document.querySelectorAll(
            ".study-card img"
        );


    cardImages.forEach((image) => {

        if (image.complete) {

            image.classList.add(
                "image-loaded"
            );

        } else {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "image-loaded"
                    );

                }
            );

        }


        /* Image error handling */

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                console.warn(
                    "Young Scientists image could not be loaded:",
                    image.src
                );

            }
        );

    });


    /* ======================================================
       SMOOTH INTERNAL LINKS
       ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                /*
                 * Ignore placeholder links such as href="#"
                 */

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


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* ======================================================
       CURRENT YEAR
       ====================================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {

        footerYear.textContent =
            footerYear.textContent.replace(
                /\b20\d{2}\b/,
                new Date().getFullYear()
            );

    }


    /* ======================================================
       WINDOW RESIZE
       ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            /*
             * If the screen becomes desktop-sized,
             * make sure the mobile menu is reset.
             */

            if (
                window.innerWidth > 768 &&
                navigation
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

        }
    );

});