/* =========================================================
   BACK TO SCHOOL
   Little Explorers Learning Hub
   Page JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page = document.querySelector(".back-to-school-page");

    if (!page) {
        return;
    }


    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    const mobileMenu = page.querySelector(".mobile-menu");
    const nav = page.querySelector("nav");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", function (event) {

            event.stopPropagation();

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

        nav.querySelectorAll("a").forEach(function (link) {

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

    }


    /* =========================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ========================================================= */

    document.addEventListener("click", function (event) {

        if (!mobileMenu || !nav) {
            return;
        }

        const clickedInsideNavigation =
            nav.contains(event.target) ||
            mobileMenu.contains(event.target);

        if (!clickedInsideNavigation) {

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

    });


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        if (!mobileMenu || !nav) {
            return;
        }

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


    /* =========================================================
       PLACEHOLDER RESOURCE LINKS
    ========================================================= */

    const resourceLinks =
        page.querySelectorAll(".study-footer a");

    resourceLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (!href || href === "#") {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                }
            );

        }

    });


    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    const footerText =
        page.querySelector(".footer-bottom p");

    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.textContent =
            "© " +
            currentYear +
            " Little Explorers Learning Hub. All Rights Reserved.";

    }


    /* =========================================================
       CARD KEYBOARD ACCESSIBILITY
    ========================================================= */

    const cards =
        page.querySelectorAll(".study-card");

    cards.forEach(function (card) {

        card.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    const link =
                        card.querySelector(
                            ".study-footer a"
                        );

                    if (link) {
                        link.click();
                    }

                }

            }
        );

    });

});
