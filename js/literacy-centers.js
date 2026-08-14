/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   LEARNING CENTERS
   Page-Specific JavaScript

   File:
   /js/learning-centers.js
========================================================== */


/* ==========================================================
   WAIT FOR PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    const menuButton =
        document.querySelector(".learning-centers-page .mobile-menu");

    const navigation =
        document.querySelector(".learning-centers-page nav");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* ----------------------------------------------
           CLOSE MENU WHEN NAVIGATION LINK IS SELECTED
        ---------------------------------------------- */

        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });


        /* ----------------------------------------------
           CLOSE MENU WHEN CLICKING OUTSIDE
        ---------------------------------------------- */

        document.addEventListener("click", function (event) {

            const clickedInsideNavigation =
                navigation.contains(event.target);

            const clickedMenuButton =
                menuButton.contains(event.target);


            if (
                !clickedInsideNavigation &&
                !clickedMenuButton &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });


        /* ----------------------------------------------
           CLOSE MENU WITH ESCAPE
        ---------------------------------------------- */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.focus();

            }

        });

    }


    /* ======================================================
       LEARNING CENTER CARDS
    ====================================================== */

    const cards =
        document.querySelectorAll(
            ".learning-centers-page .study-card"
        );


    cards.forEach(function (card) {


        /* ----------------------------------------------
           KEYBOARD ACCESSIBILITY
        ---------------------------------------------- */

        const link =
            card.querySelector(".study-footer a");


        if (link && link.getAttribute("href") !== "#") {

            card.setAttribute("tabindex", "0");


            card.addEventListener("keydown", function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    link.click();

                }

            });

        }


        /* ----------------------------------------------
           PREVENT EMPTY LINKS FROM JUMPING TO TOP
        ---------------------------------------------- */

        if (link && link.getAttribute("href") === "#") {

            link.addEventListener("click", function (event) {

                event.preventDefault();

            });

        }

    });


    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            '.learning-centers-page a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

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
       IMAGE ERROR HANDLING
    ====================================================== */

    const images =
        document.querySelectorAll(
            ".learning-centers-page img"
        );


    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.classList.add("image-error");

            image.setAttribute(
                "aria-label",
                "Learning center image unavailable"
            );

        });

    });


    /* ======================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const currentPath =
        window.location.pathname;


    const navLinks =
        document.querySelectorAll(
            ".learning-centers-page nav a"
        );


    navLinks.forEach(function (link) {

        const linkPath =
            new URL(
                link.href,
                window.location.origin
            ).pathname;


        if (
            linkPath === currentPath ||
            (
                currentPath.endsWith("/interest-areas/") &&
                linkPath.endsWith("/interest-areas/index.html")
            )
        ) {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            link.classList.add("active");

        }

    });


    /* ======================================================
       CARD IMAGE LOADING
    ====================================================== */

    images.forEach(function (image) {

        if (image.complete) {

            image.classList.add("loaded");

        } else {

            image.addEventListener(
                "load",
                function () {

                    image.classList.add("loaded");

                }
            );

        }

    });


    /* ======================================================
       REDUCED MOTION SUPPORT
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (prefersReducedMotion.matches) {

        document.documentElement.classList.add(
            "reduced-motion"
        );

    }


    /* ======================================================
       RESIZE HANDLING
    ====================================================== */

    let resizeTimer;


    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);


        resizeTimer = setTimeout(function () {

            /*
             * If the viewport becomes desktop sized,
             * make sure the mobile menu is reset.
             */

            if (
                window.innerWidth > 800 &&
                navigation
            ) {

                navigation.classList.remove("open");

            }


            if (
                window.innerWidth > 800 &&
                menuButton
            ) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }, 150);

    });


});