/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   ASSESSMENT TOOLKIT JAVASCRIPT
   File: js/assessment-toolkit.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const mobileMenu = document.querySelector(".mobile-menu");
    const mainNav = document.querySelector(".main-nav");

    if (mobileMenu && mainNav) {

        mobileMenu.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("is-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            const icon = mobileMenu.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* Close mobile menu after selecting a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("is-open");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = mobileMenu.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }


    /* =========================================================
       HEADER SCROLL EFFECT
       ========================================================= */

    const header = document.querySelector(".site-header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =========================================================
       SMOOTH SCROLLING
       ========================================================= */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

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

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =========================================================
       SEARCH BUTTON
       ========================================================= */

    const searchToggle =
        document.querySelector(".search-toggle");

    if (searchToggle) {

        searchToggle.addEventListener(
            "click",
            function () {

                const searchTarget =
                    document.querySelector(
                        "#search"
                    );

                if (searchTarget) {

                    searchTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    const searchInput =
                        searchTarget.querySelector(
                            "input"
                        );

                    if (searchInput) {

                        setTimeout(
                            function () {
                                searchInput.focus();
                            },
                            400
                        );

                    }

                    return;

                }

                /*
                 * No search interface currently exists
                 * on this page. Keep the button harmless
                 * until the site's search system is added.
                 */

            }
        );

    }


    /* =========================================================
       DOWNLOAD LINK FEEDBACK
       ========================================================= */

    const downloadLinks =
        document.querySelectorAll(
            'a[download]'
        );

    downloadLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                link.classList.add(
                    "download-started"
                );

                setTimeout(
                    function () {

                        link.classList.remove(
                            "download-started"
                        );

                    },
                    1200
                );

            }
        );

    });


    /* =========================================================
       INTERSECTION OBSERVER
       ========================================================= */

    const animatedElements =
        document.querySelectorAll(
            ".why-card, " +
            ".interest-card, " +
            ".study-card, " +
            ".favorite-card, " +
            ".featured-study-card, " +
            ".stat-card"
        );


    if (
        "IntersectionObserver" in window &&
        animatedElements.length
    ) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
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


        animatedElements.forEach(
            function (element, index) {

                element.style.setProperty(
                    "--animation-delay",
                    (index * 0.04) + "s"
                );

                observer.observe(element);

            }
        );

    } else {

        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =========================================================
       NEWSLETTER FORM
       ========================================================= */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const nameInput =
                    newsletterForm.querySelector(
                        'input[type="text"]'
                    );

                const emailInput =
                    newsletterForm.querySelector(
                        'input[type="email"]'
                    );

                const button =
                    newsletterForm.querySelector(
                        "button"
                    );


                if (
                    !emailInput ||
                    !emailInput.value.trim()
                ) {

                    if (emailInput) {
                        emailInput.focus();
                    }

                    return;

                }


                /*
                 * The current page does not contain
                 * a connected newsletter service.
                 *
                 * This prevents the form from navigating
                 * away from the page while providing
                 * immediate feedback.
                 */

                if (button) {

                    const originalText =
                        button.textContent;

                    button.textContent =
                        "Thank You!";

                    button.disabled = true;


                    setTimeout(
                        function () {

                            button.textContent =
                                originalText;

                            button.disabled =
                                false;

                            newsletterForm.reset();

                        },
                        2500
                    );

                }

            }
        );

    }


    /* =========================================================
       EXTERNAL DOWNLOAD SAFETY
       ========================================================= */

    const resourceLinks =
        document.querySelectorAll(
            'a[href$=".zip"], ' +
            'a[href$=".pdf"], ' +
            'a[href$=".doc"], ' +
            'a[href$=".docx"], ' +
            'a[href$=".png"]'
        );

    resourceLinks.forEach(function (link) {

        link.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    link.classList.add(
                        "download-started"
                    );

                }

            }
        );

    });


    /* =========================================================
       CURRENT YEAR
       ========================================================= */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );


    /* =========================================================
       PAGE READY
       ========================================================= */

    document.body.classList.add(
        "page-ready"
    );


});
