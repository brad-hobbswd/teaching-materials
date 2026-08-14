/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   SCIENCE & STEM RESOURCE LIBRARY
   Page-Specific JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", function () {

            nav.classList.toggle("mobile-open");

            const isOpen =
                nav.classList.contains("mobile-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* ======================================================
       CLOSE MOBILE NAVIGATION AFTER LINK CLICK
    ====================================================== */

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("mobile-open");
            }

            if (mobileMenu) {
                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* ======================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const currentPage =
        window.location.pathname;

    navLinks.forEach(function (link) {

        const linkPath =
            new URL(
                link.href,
                window.location.origin
            ).pathname;

        if (linkPath === currentPage) {

            link.classList.add("active");

        }

    });


    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {

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
       IMAGE FALLBACK
       Prevents broken STEM images from creating
       awkward empty spaces.
    ====================================================== */

    const images =
        document.querySelectorAll(
            ".science-library-page img"
        );

    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* ======================================================
       CARD REVEAL
       Gives STEM resource cards a subtle entrance effect.
    ====================================================== */

    const cards =
        document.querySelectorAll(
            ".science-library-page .study-card, " +
            ".science-library-page .interest-card, " +
            ".science-library-page .family-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach(function (card) {

            card.classList.add(
                "reveal-card"
            );

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.classList.add(
                "is-visible"
            );

        });

    }


    /* ======================================================
       EXTERNAL RESOURCE LINKS
       Opens PDF and external resources safely in a
       new tab when explicitly marked.
    ====================================================== */

    document.querySelectorAll(
        'a[data-external="true"]'
    ).forEach(function (link) {

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* ======================================================
       BACK TO TOP
       Works with an optional .back-to-top button.
    ====================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "visible"
                    );

                } else {

                    backToTop.classList.remove(
                        "visible"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* ======================================================
       SCIENCE/STEM PAGE READY
    ====================================================== */

    document.body.classList.add(
        "science-page-ready"
    );

});