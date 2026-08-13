/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   HEAD START & ELOF RESOURCE LIBRARY

   File:
   js/head-start-library.js

   Page:
   library/head-start/index.html

   Purpose:
   Mobile navigation • Current year • Smooth scrolling
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       1. MOBILE NAVIGATION
    ====================================================== */

    const menuButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("mobile-nav-open");

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

            menuButton.textContent =
                isOpen ? "✕" : "☰";
        });


        /* Close menu when a navigation link is selected */

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove(
                    "mobile-nav-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";
            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", event => {

            const clickedInsideNavigation =
                navigation.contains(event.target);

            const clickedMenuButton =
                menuButton.contains(event.target);

            if (
                !clickedInsideNavigation &&
                !clickedMenuButton &&
                navigation.classList.contains(
                    "mobile-nav-open"
                )
            ) {

                navigation.classList.remove(
                    "mobile-nav-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";
            }

        });

    }


    /* ======================================================
       2. CLOSE MOBILE MENU WHEN WINDOW EXPANDS
    ====================================================== */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 768 &&
            navigation &&
            menuButton
        ) {

            navigation.classList.remove(
                "mobile-nav-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";
        }

    });


    /* ======================================================
       3. CURRENT YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    if (yearElements.length) {

        const currentYear =
            new Date().getFullYear();

        yearElements.forEach(element => {
            element.textContent = currentYear;
        });

    }


    /* ======================================================
       4. SMOOTH INTERNAL LINKS
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

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
       5. ESCAPE KEY CLOSES MOBILE NAVIGATION
    ====================================================== */

    document.addEventListener("keydown", event => {

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

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";
            }

        }

    });


    /* ======================================================
       6. PREVENT EMPTY RESOURCE LINKS
    ====================================================== */

    document.querySelectorAll(
        '.resource-card a[href="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });

});