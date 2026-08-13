/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   TEACHER RESOURCE LIBRARY

   File:
   scripts/teacher-resources-library.js

   Page:
   library/teacher-resources/index.html
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
       ====================================================== */

    const menuButton =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector("header nav");

    if (menuButton && navigation) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.addEventListener("click", () => {

            const menuIsOpen =
                navigation.classList.toggle(
                    "mobile-nav-open"
                );

            menuButton.setAttribute(
                "aria-expanded",
                String(menuIsOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                menuIsOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuButton.textContent =
                menuIsOpen ? "✕" : "☰";

        });


        /* Close menu after selecting a link */

        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

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
                );

            });


        /* Close when clicking outside */

        document.addEventListener(
            "click",
            event => {

                if (
                    !navigation.contains(event.target) &&
                    !menuButton.contains(event.target)
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

            }
        );


        /* Close with Escape */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

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

            }
        );


        /* Reset navigation when returning to desktop */

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 768) {

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

            }
        );

    }


    /* ======================================================
       CURRENT YEAR
       ====================================================== */

    const yearElements =
        document.querySelectorAll(".year");

    const year =
        new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = year;
    });


    /* ======================================================
       NEWSLETTER FORM
       ====================================================== */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            () => {

                const button =
                    newsletterForm.querySelector(
                        "button[type='submit']"
                    );

                if (!button) {
                    return;
                }

                button.disabled = true;

                button.textContent =
                    "Joining...";

            }
        );

    }


    /* ======================================================
       NEWSLETTER EMAIL FIELD
       ====================================================== */

    const emailInput =
        document.querySelector(
            ".newsletter-form input[type='email']"
        );

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            () => {

                emailInput.setCustomValidity("");

            }
        );

    }


    /* ======================================================
       SMOOTH INTERNAL LINKS
       ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

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

                }
            );

        });


    /* ======================================================
       EXTERNAL LINKS
       ====================================================== */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* ======================================================
       NEWSLETTER SUBMISSION FEEDBACK
       ====================================================== */

    const newsletter =
        document.querySelector(".newsletter");

    if (newsletter) {

        newsletter.addEventListener(
            "animationend",
            () => {

                newsletter.classList.remove(
                    "newsletter-highlight"
                );

            }
        );

    }

});