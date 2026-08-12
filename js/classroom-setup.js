/* =========================================================
   CLASSROOM SETUP
   Little Explorers Learning Hub
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page =
        document.querySelector(".classroom-setup-page");

    if (!page) {
        return;
    }


    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    const mobileMenu =
        page.querySelector(".mobile-menu");

    const nav =
        page.querySelector("nav");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                nav.classList.toggle(
                    "mobile-nav-open"
                );

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
       CLOSE MENU OUTSIDE
    ========================================================= */

    document.addEventListener("click", function (event) {

        if (!mobileMenu || !nav) {
            return;
        }

        const inside =
            nav.contains(event.target) ||
            mobileMenu.contains(event.target);

        if (!inside) {

            nav.classList.remove(
                "mobile-nav-open"
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
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

        mobileMenu.textContent = "☰";

    });


    /* =========================================================
       RESOURCE PLACEHOLDER LINKS
    ========================================================= */

    page.querySelectorAll(
        ".resource-card a[href='#']"
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    });


    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    const footer =
        page.querySelector(".footer-bottom p");

    if (footer) {

        footer.textContent =
            "© " +
            new Date().getFullYear() +
            " Little Explorers Learning Hub. All Rights Reserved.";

    }

});
