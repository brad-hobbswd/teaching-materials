/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   CURRICULUM RESOURCE LIBRARY

   File:
   js/curriculum.js

   Page:
   library/curriculum/index.html
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

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation menu"
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


        /* Close menu after selecting a link */

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
       CLOSE MOBILE NAVIGATION WHEN RESIZING
       ====================================================== */

    window.addEventListener("resize", () => {

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

    });


    /* ======================================================
       IMAGE LOADING
       ====================================================== */

    const images =
        document.querySelectorAll(
            ".featured-image img, .study-card img"
        );


    images.forEach((image) => {

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


        /* Handle missing images */

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                console.warn(
                    "Curriculum Library image could not be loaded:",
                    image.src
                );

            }
        );

    });


    /* ======================================================
       STUDY CARD INTERACTION
       ====================================================== */

    const studyCards =
        document.querySelectorAll(
            ".study-card"
        );


    studyCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.classList.add(
                    "card-active"
                );
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.classList.remove(
                    "card-active"
                );
            }
        );

    });


    /* ======================================================
       INTEREST CARD INTERACTION
       ====================================================== */

    const interestCards =
        document.querySelectorAll(
            ".interest-card"
        );


    interestCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.classList.add(
                    "card-active"
                );
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.classList.remove(
                    "card-active"
                );
            }
        );

    });


    /* ======================================================
       RESOURCE CARD INTERACTION
       ====================================================== */

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );


    resourceCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.classList.add(
                    "card-active"
                );
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.classList.remove(
                    "card-active"
                );
            }
        );

    });


    /* ======================================================
       FAMILY CARD INTERACTION
       ====================================================== */

    const familyCards =
        document.querySelectorAll(
            ".family-card"
        );


    familyCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.classList.add(
                    "card-active"
                );
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.classList.remove(
                    "card-active"
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
       FOOTER YEAR
       ====================================================== */

    const yearElement =
        document.querySelector(
            ".footer-bottom .year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ======================================================
       CURRENT PAGE NAVIGATION
       ====================================================== */

    const currentPage =
        window.location.pathname;

    const navLinks =
        document.querySelectorAll(
            "header nav a"
        );


    navLinks.forEach((link) => {

        const linkUrl =
            new URL(
                link.href,
                window.location.origin
            );

        const linkPath =
            linkUrl.pathname;


        if (
            linkPath === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });


    /* ======================================================
       ACCESSIBLE CARD LINKS
       ====================================================== */

    const cardsWithLinks =
        document.querySelectorAll(
            ".study-card, .interest-card, .resource-card"
        );


    cardsWithLinks.forEach((card) => {

        const link =
            card.querySelector("a");


        if (!link) {
            return;
        }


        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    /*
                     * Do not interfere when the
                     * actual link already has focus.
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
       FEATURED IMAGE ACCESSIBILITY
       ====================================================== */

    const featuredImages =
        document.querySelectorAll(
            ".featured-image img"
        );


    featuredImages.forEach((image) => {

        image.setAttribute(
            "loading",
            "lazy"
        );

    });


    /* ======================================================
       STUDY CARD IMAGE LAZY LOADING
       ====================================================== */

    const studyImages =
        document.querySelectorAll(
            ".study-card img"
        );


    studyImages.forEach((image) => {

        image.setAttribute(
            "loading",
            "lazy"
        );

    });


    /* ======================================================
       PAGE READY
       ====================================================== */

    document.body.classList.add(
        "curriculum-page-ready"
    );

});