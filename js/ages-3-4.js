/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   PRESCHOOL | AGES 3–4 YEARS

   ages-3-4.js

   Handles:
   Mobile navigation
   Search
   Active navigation
   Smooth scrolling
   Scroll reveal
   Back to top
   Newsletter feedback
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header =
        document.querySelector("header");

    const nav =
        document.querySelector("nav");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const searchForm =
        document.querySelector(".search-bar");

    const searchInput =
        document.querySelector(".search-bar input");

    const newsletterForm =
        document.querySelector(".newsletter-form");


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenu && nav) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        mobileMenu.addEventListener(
            "click",
            function () {

                const menuOpen =
                    nav.classList.toggle(
                        "mobile-nav-open"
                    );

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

            }
        );


        nav.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth <= 760
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

                        }

                    }
                );

            });


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    nav.classList.contains(
                        "mobile-nav-open"
                    )
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

                    mobileMenu.focus();

                }

            }
        );


        document.addEventListener(
            "click",
            function (event) {

                if (
                    window.innerWidth > 760
                ) {
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

            }
        );


        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 760
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

                }

            }
        );

    }


    /* =====================================================
       HEADER SCROLL STATE
    ===================================================== */

    if (header) {

        function updateHeader() {

            if (
                window.scrollY > 20
            ) {

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
            {
                passive: true
            }
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (
        searchForm &&
        searchInput
    ) {

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

                window.location.href =
                    "../search.html?q=" +
                    encodeURIComponent(
                        searchTerm
                    );

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    if (nav) {

        nav.querySelectorAll("a")
            .forEach(function (link) {

                const href =
                    link.getAttribute("href");

                if (!href) {
                    return;
                }

                /*
                 * Keep Age Groups highlighted
                 * because this page belongs to
                 * the Age Groups section.
                 */

                const page =
                    href
                        .split("/")
                        .pop()
                        .split("#")[0]
                        .toLowerCase();

                if (
                    page === "index.html"
                ) {

                    link.classList.add(
                        "active"
                    );

                    link.setAttribute(
                        "aria-current",
                        "page"
                    );

                }

            });

    }


    /* =====================================================
       INTERNAL SECTION LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );

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
                ".dashboard-card",
                ".material-card",
                ".week-card",
                ".center-card",
                ".book-card",
                ".assessment-card",
                ".why-card",
                ".download-card"
            ].join(",")
        );


    if (
        revealElements.length &&
        !prefersReducedMotion &&
        "IntersectionObserver" in window
    ) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "js-reveal"
                );

            }
        );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "js-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

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
            document.createElement(
                "button"
            );

        backToTop.className =
            "back-to-top";

        backToTop.type =
            "button";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        backToTop.innerHTML =
            "↑";

        document.body.appendChild(
            backToTop
        );

    }


    function updateBackToTop() {

        if (
            window.scrollY > 500
        ) {

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
        {
            passive: true
        }
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
       NEWSLETTER
    ===================================================== */

    /*
     * IMPORTANT:
     *
     * Do not prevent the form from submitting.
     *
     * The HTML uses Google Forms.
     */

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function () {

                const button =
                    newsletterForm.querySelector(
                        "button[type='submit']"
                    );

                if (!button) {
                    return;
                }

                button.disabled =
                    true;

                button.textContent =
                    "Submitting...";


                setTimeout(
                    function () {

                        button.textContent =
                            "You're In!";

                    },
                    1500
                );

            }
        );

    }


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.documentElement.classList.add(
        "js-ready"
    );


    console.log(
        "Little Explorers Learning Hub | Preschool 3–4 JavaScript loaded."
    );

});