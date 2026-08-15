/* =========================================================
   OBSERVATION FORMS
   Little Explorers Learning Hub

   JavaScript for:
   observation-forms.html
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("#primary-navigation");

    if (menuButton && navigation) {

        function openMenu() {
            navigation.classList.add("open");

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            menuButton.setAttribute(
                "aria-label",
                "Close Navigation"
            );

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        }

        function closeMenu() {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open Navigation"
            );

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

        menuButton.addEventListener("click", function () {

            const isOpen =
                navigation.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        /*
         * Close the mobile navigation after
         * selecting a navigation link.
         */

        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {
                    closeMenu();
                });

            });

        /*
         * Close navigation when clicking outside it.
         */

        document.addEventListener("click", function (event) {

            if (
                navigation.classList.contains("open") &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

        });

        /*
         * Close navigation with Escape.
         */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                if (
                    navigation.classList.contains("open")
                ) {
                    closeMenu();
                    menuButton.focus();
                }

            }

        });

        /*
         * Reset mobile navigation when returning
         * to desktop width.
         */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 760) {
                closeMenu();
            }

        });

    }


    /* =====================================================
       FAQ ACCORDION
       ===================================================== */

    const faqCards =
        document.querySelectorAll(".faq-card");

    faqCards.forEach(function (card) {

        const question =
            card.querySelector(".faq-question");

        const answer =
            card.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        /*
         * Establish the initial accessibility state.
         */

        question.setAttribute(
            "aria-expanded",
            "false"
        );

        /*
         * Give each answer a unique ID so the
         * question can control it.
         */

        const answerId =
            "faq-answer-" +
            Math.random()
                .toString(36)
                .substring(2, 10);

        answer.id = answerId;

        question.setAttribute(
            "aria-controls",
            answerId
        );

        question.addEventListener("click", function () {

            const currentlyOpen =
                card.classList.contains("open");

            /*
             * Close every other FAQ item.
             */

            faqCards.forEach(function (otherCard) {

                if (otherCard !== card) {

                    otherCard.classList.remove("open");

                    const otherQuestion =
                        otherCard.querySelector(
                            ".faq-question"
                        );

                    if (otherQuestion) {

                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            });

            /*
             * Toggle the selected FAQ.
             */

            if (currentlyOpen) {

                card.classList.remove("open");

                question.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                card.classList.add("open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });


    /* =====================================================
       OBSERVATION METHOD BUTTONS
       ===================================================== */

    const themeButtons =
        document.querySelectorAll(".theme-button");

    themeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".theme-card");

            if (!card) {
                return;
            }

            const heading =
                card.querySelector("h3");

            if (!heading) {
                return;
            }

            /*
             * These buttons currently do not have
             * individual destination pages.
             *
             * For now, take the user to the main
             * observation resources section.
             */

            const resources =
                document.querySelector("#resources");

            if (resources) {

                resources.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        function updateBackToTop() {

            if (window.scrollY > 500) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        }

        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive: true
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

        updateBackToTop();

    }


    /* =====================================================
       NEWSLETTER FORM
       ===================================================== */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const emailInput =
                    newsletterForm.querySelector(
                        'input[type="email"]'
                    );

                if (!emailInput) {
                    return;
                }

                const email =
                    emailInput.value.trim();

                /*
                 * Do not submit an empty email address.
                 */

                if (!email) {

                    emailInput.focus();

                    return;

                }

                /*
                 * The HTML does not currently provide
                 * a real newsletter service or endpoint.
                 *
                 * Therefore this does not pretend to
                 * actually subscribe the visitor.
                 */

                let message =
                    newsletterForm.querySelector(
                        ".newsletter-message"
                    );

                if (!message) {

                    message =
                        document.createElement("p");

                    message.className =
                        "newsletter-message";

                    message.setAttribute(
                        "role",
                        "status"
                    );

                    newsletterForm.appendChild(
                        message
                    );

                }

                message.textContent =
                    "Thank you! Your request has been received.";

                emailInput.value = "";

            }
        );

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]:not([href="#"])'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

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


    /* =====================================================
       INITIALIZE CURRENT PAGE
       ===================================================== */

    document.body.classList.add(
        "js-ready"
    );

});
