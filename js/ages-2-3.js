/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   HEAD START | AGES 2–3 YEARS

   JavaScript for:
   2-3.html

   Stylesheet:
   ../styles/ages-2-3.css

   Script:
   ../js/ages-2-3.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================================
       GLOBAL ELEMENTS
    ===================================================== */

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const mobileMenu = document.querySelector(".mobile-menu");
    const searchForm = document.querySelector(".search-bar");
    const searchInput = document.querySelector(".search-bar input");

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenu && nav) {

        mobileMenu.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-label", "Open navigation menu");

        mobileMenu.addEventListener("click", function () {

            const menuOpen =
                nav.classList.toggle("mobile-nav-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                menuOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            document.body.classList.toggle(
                "mobile-menu-active",
                menuOpen
            );

        });


        /* Close menu after selecting a navigation item */

        const navigationLinks =
            nav.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 760) {

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

                    document.body.classList.remove(
                        "mobile-menu-active"
                    );

                }

            });

        });


        /* Close menu with Escape */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                nav.classList.contains("mobile-nav-open")
            ) {

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

                document.body.classList.remove(
                    "mobile-menu-active"
                );

                mobileMenu.focus();

            }

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            if (window.innerWidth > 760) {
                return;
            }

            if (
                !nav.classList.contains(
                    "mobile-nav-open"
                )
            ) {
                return;
            }

            if (
                nav.contains(event.target) ||
                mobileMenu.contains(event.target)
            ) {
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

            document.body.classList.remove(
                "mobile-menu-active"
            );

        });


        /* Reset menu when returning to desktop */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 760) {

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

                document.body.classList.remove(
                    "mobile-menu-active"
                );

            }

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    if (header) {

        function updateHeader() {

            if (window.scrollY > 20) {

                header.classList.add(
                    "header-scrolled"
                );

            } else {

                header.classList.remove(
                    "header-scrolled"
                );

            }

        }

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (searchForm && searchInput) {

        searchForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const searchTerm =
                    searchInput.value.trim();

                if (!searchTerm) {

                    searchInput.focus();

                    return;

                }

                /*
                 * Search page is one level above this
                 * ages folder.
                 *
                 * Example:
                 *
                 * 2-3.html
                 * ../search.html
                 */

                window.location.href =
                    "../search.html?q=" +
                    encodeURIComponent(searchTerm);

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    if (nav) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();

        const navigationLinks =
            nav.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }

            const linkPage =
                href
                    .split("/")
                    .pop()
                    .split("#")[0]
                    .toLowerCase();

            /*
             * The Age Groups link points to index.html,
             * while this page is 2-3.html.
             *
             * Therefore we intentionally keep
             * "Age Groups" active.
             */

            if (
                linkPage === "index.html" &&
                currentPage === "2-3.html"
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

                return;

            }

            if (
                linkPage === currentPage
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        });

    }


    /* =====================================================
       SMOOTH INTERNAL NAVIGATION
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetID
                    );

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
                    window.scrollY -
                    headerHeight -
                    15;

                window.scrollTo({

                    top: targetPosition,

                    behavior:
                        prefersReducedMotion
                            ? "auto"
                            : "smooth"

                });

                history.replaceState(
                    null,
                    "",
                    targetID
                );

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            [
                ".development-card",
                ".material-card",
                ".week-card",
                ".center-card",
                ".book-card",
                ".assessment-card",
                ".why-card",
                ".dashboard-card",
                ".download-card"
            ].join(",")
        );


    if (
        revealElements.length &&
        !prefersReducedMotion &&
        "IntersectionObserver" in window
    ) {

        revealElements.forEach(function (element) {

            element.classList.add(
                "js-reveal"
            );

        });


        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "js-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(
                element
            );

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    let backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (!backToTop) {

        backToTop =
            document.createElement("button");

        backToTop.className =
            "back-to-top";

        backToTop.type =
            "button";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        backToTop.setAttribute(
            "title",
            "Back to top"
        );

        backToTop.innerHTML = "↑";

        document.body.appendChild(
            backToTop
        );

    }


    function updateBackToTop() {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }


    updateBackToTop();


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    /* =====================================================
       NEWSLETTER FORM
    ===================================================== */

    /*
     * IMPORTANT:
     *
     * The newsletter form already submits to Google Forms.
     *
     * DO NOT preventDefault() here.
     *
     * The browser must be allowed to submit the form
     * to Google Forms using the hidden iframe.
     *
     * We only provide a little visual feedback.
     */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function () {

                const submitButton =
                    newsletterForm.querySelector(
                        "button[type='submit']"
                    );

                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.textContent =
                        "Joining...";

                }

                /*
                 * Allow the native Google Forms
                 * submission to continue.
                 */

                setTimeout(
                    function () {

                        if (submitButton) {

                            submitButton.textContent =
                                "You're In!";

                        }

                    },
                    1500
                );

            }
        );

    }


    /* =====================================================
       HASH / ANCHOR POSITIONING
    ===================================================== */

    function positionForHash() {

        if (!window.location.hash) {
            return;
        }

        const target =
            document.querySelector(
                window.location.hash
            );

        if (!target) {
            return;
        }

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        setTimeout(
            function () {

                window.scrollTo({

                    top:
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        15,

                    behavior:
                        prefersReducedMotion
                            ? "auto"
                            : "smooth"

                });

            },
            100
        );

    }


    positionForHash();


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    document
        .querySelectorAll(
            ".current-year"
        )
        .forEach(function (element) {

            element.textContent =
                new Date().getFullYear();

        });


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.documentElement.classList.add(
        "js-ready"
    );


    console.log(
        "Little Explorers Learning Hub | Ages 2–3 JavaScript loaded."
    );

});