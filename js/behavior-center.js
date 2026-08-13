/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   BEHAVIOR RESOURCE LIBRARY
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       MOBILE NAVIGATION
       ====================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("header nav");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", function () {
            nav.classList.toggle("mobile-nav-open");
        });

    }


    /* ======================================================
       CLOSE MENU AFTER NAVIGATION
       ====================================================== */

    if (nav) {

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove(
                    "mobile-nav-open"
                );

            });

        });

    }


    /* ======================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
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
            !clickedInsideNav &&
            !clickedMenu
        ) {

            nav.classList.remove(
                "mobile-nav-open"
            );

        }

    });


    /* ======================================================
       CLOSE MENU WITH ESCAPE
       ====================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && nav) {

            nav.classList.remove(
                "mobile-nav-open"
            );

        }

    });


    /* ======================================================
       CURRENT YEAR
       ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });


    /* ======================================================
       SMOOTH INTERNAL SECTION LINKS
       ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetID);

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

});