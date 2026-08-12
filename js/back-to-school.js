/* =========================================================
   BACK TO SCHOOL PAGE JAVASCRIPT
   Little Explorers Learning Hub
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

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

        mobileMenu.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("mobile-nav-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            mobileMenu.textContent = isOpen ? "✕" : "☰";

        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-nav-open");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.textContent = "☰";

            });

        });
    }


    /* =========================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================================= */

    document.addEventListener("click", event => {

        if (!mobileMenu || !nav) {
            return;
        }

        const clickedInside =
            mobileMenu.contains(event.target) ||
            nav.contains(event.target);

        if (!clickedInside) {

            nav.classList.remove("mobile-nav-open");

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

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (!nav || !mobileMenu) {
            return;
        }

        nav.classList.remove("mobile-nav-open");

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.textContent = "☰";

    });


    /* =========================================================
       PLACEHOLDER RESOURCE LINKS
    ========================================================= */

    const resourceLinks =
        page.querySelectorAll(".study-footer a");

    resourceLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            /*
             * Prevent "#" placeholder links from
             * jumping the page to the top.
             */

            if (!href || href === "#") {
                event.preventDefault();
            }

        });

    });


    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    const yearElement =
        page.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.textContent =
            `© ${currentYear} Little Explorers Learning Hub. All Rights Reserved.`;

    }

});
