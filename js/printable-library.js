/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   PRINTABLE LIBRARY

   File:
   js/printable-library.js

   Purpose:
   Mobile navigation
   Smooth scrolling
   Current year
   Printable resource interactions
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       1. MOBILE NAVIGATION
       ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", function () {

            nav.classList.toggle("mobile-nav-open");

            const isOpen =
                nav.classList.contains("mobile-nav-open");

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

            mobileMenu.textContent = isOpen ? "✕" : "☰";
        });
    }


    /* ======================================================
       2. CLOSE MOBILE MENU AFTER LINK CLICK
       ====================================================== */

    if (nav) {

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (
                    window.innerWidth <= 768 &&
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
        });
    }


    /* ======================================================
       3. CLOSE MENU WHEN CLICKING OUTSIDE
       ====================================================== */

    document.addEventListener("click", function (event) {

        if (!nav || !mobileMenu) {
            return;
        }

        const clickedInsideNav =
            nav.contains(event.target);

        const clickedMenu =
            mobileMenu.contains(event.target);

        if (
            window.innerWidth <= 768 &&
            nav.classList.contains("mobile-nav-open") &&
            !clickedInsideNav &&
            !clickedMenu
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


    /* ======================================================
       4. ESCAPE KEY CLOSES MOBILE MENU
       ====================================================== */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
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

                mobileMenu.focus();
            }
        }
    });


    /* ======================================================
       5. SMOOTH INTERNAL LINKS
       ====================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

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

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.pushState(
                null,
                "",
                targetId
            );
        });
    });


    /* ======================================================
       6. CURRENT YEAR
       ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    /* ======================================================
       7. PRINTABLE RESOURCE LINKS
       ====================================================== */

    const printableLinks =
        document.querySelectorAll(
            'a[href$=".pdf"]'
        );

    printableLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            link.classList.add("opening-printable");

            setTimeout(function () {
                link.classList.remove(
                    "opening-printable"
                );
            }, 1000);
        });
    });


    /* ======================================================
       8. KEYBOARD ACCESSIBILITY
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
       9. HANDLE SCREEN RESIZE
       ====================================================== */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 768 &&
            nav &&
            nav.classList.contains("mobile-nav-open")
        ) {

            nav.classList.remove(
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