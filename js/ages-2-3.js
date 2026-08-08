/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   HEAD START | AGES 2–3 YEARS
   ages-2-3.js

   Page interactions:
   • Mobile navigation
   • Search
   • Active navigation
   • Smooth scrolling
   • Newsletter feedback
   • Header behavior
   • Reduced motion support
   • Back to top
   • Accessibility support
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENT REFERENCES
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

    const searchButton =
        document.querySelector(".search-bar button");

    const newsletterForm =
        document.querySelector(".newsletter-form");

    const newsletterInput =
        newsletterForm
            ? newsletterForm.querySelector("input")
            : null;

    const navLinks =
        document.querySelectorAll("nav a");

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    function applyMotionPreference() {

        if (prefersReducedMotion.matches) {

            document.documentElement
                .classList.add("reduced-motion");

        } else {

            document.documentElement
                .classList.remove("reduced-motion");

        }

    }

    applyMotionPreference();

    if (prefersReducedMotion.addEventListener) {

        prefersReducedMotion.addEventListener(
            "change",
            applyMotionPreference
        );

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenu && nav) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-controls",
            "main-navigation"
        );

        if (!nav.id) {
            nav.id = "main-navigation";
        }


        function openMobileMenu() {

            nav.classList.add(
                "mobile-nav-open"
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            document.body.classList.add(
                "mobile-menu-active"
            );

        }


        function closeMobileMenu() {

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


        mobileMenu.addEventListener(
            "click",
            () => {

                const isOpen =
                    nav.classList.contains(
                        "mobile-nav-open"
                    );

                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );


        /* ================================================
           CLOSE AFTER NAVIGATION
        ================================================ */

        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth <= 760
                    ) {

                        closeMobileMenu();

                    }

                }
            );

        });


        /* ================================================
           CLOSE WITH ESCAPE
        ================================================ */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    nav.classList.contains(
                        "mobile-nav-open"
                    )
                ) {

                    closeMobileMenu();

                    mobileMenu.focus();

                }

            }
        );


        /* ================================================
           CLOSE WHEN CLICKING OUTSIDE
        ================================================ */

        document.addEventListener(
            "click",
            event => {

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

                const clickedInsideNav =
                    nav.contains(event.target);

                const clickedMenu =
                    mobileMenu.contains(
                        event.target
                    );

                if (
                    !clickedInsideNav &&
                    !clickedMenu
                ) {

                    closeMobileMenu();

                }

            }
        );


        /* ================================================
           RESET MOBILE NAV ON RESIZE
        ================================================ */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 760
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNavigation() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();

        navLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }

            const linkPage =
                href
                    .split("#")[0]
                    .split("/")
                    .pop()
                    .toLowerCase();

            link.classList.remove(
                "active"
            );

            link.removeAttribute(
                "aria-current"
            );

            if (
                linkPage &&
                linkPage === currentPage
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

    updateActiveNavigation();


    /* =====================================================
       SECTION NAVIGATION
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");

                if (!href) {
                    return;
                }

                const hashIndex =
                    href.indexOf("#");

                if (
                    hashIndex === -1
                ) {
                    return;
                }

                const hash =
                    href.substring(
                        hashIndex
                    );

                const target =
                    document.querySelector(
                        hash
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
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    10;

                const behavior =
                    prefersReducedMotion.matches
                        ? "auto"
                        : "smooth";

                window.scrollTo({
                    top: targetPosition,
                    behavior
                });

                history.replaceState(
                    null,
                    "",
                    hash
                );

            }
        );

    });


    /* =====================================================
       HEADER SCROLL STATE
    ===================================================== */

    if (header) {

        function updateHeader() {

            if (
                window.scrollY > 12
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
            event => {

                event.preventDefault();

                const query =
                    searchInput.value
                        .trim();

                if (!query) {

                    searchInput.focus();

                    return;

                }

                /*
                 * If your site later has a dedicated
                 * search page, replace this destination
                 * with that page.
                 */

                const searchURL =
                    `search.html?q=${
                        encodeURIComponent(query)
                    }`;

                window.location.href =
                    searchURL;

            }
        );

    }


    /* =====================================================
       SEARCH KEYBOARD SUPPORT
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    searchInput.value = "";

                    searchInput.blur();

                }

            }
        );

    }


    /* =====================================================
       NEWSLETTER FORM
    ===================================================== */

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const email =
                    newsletterInput
                        ? newsletterInput.value.trim()
                        : "";

                if (!email) {

                    if (newsletterInput) {

                        newsletterInput.focus();

                    }

                    return;

                }

                if (
                    !isValidEmail(email)
                ) {

                    showNewsletterMessage(
                        "Please enter a valid email address."
                    );

                    if (newsletterInput) {

                        newsletterInput.focus();

                    }

                    return;

                }

                const submitButton =
                    newsletterForm.querySelector(
                        "button"
                    );

                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.textContent =
                        "Thank You!";

                }

                showNewsletterMessage(
                    "You're signed up for Little Explorers resources!"
                );

                /*
                 * This is front-end feedback only.
                 *
                 * Connect this form to your email
                 * service when the backend is ready.
                 */

            }
        );

    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }


    /* =====================================================
       NEWSLETTER MESSAGE
    ===================================================== */

    function showNewsletterMessage(message) {

        let messageElement =
            newsletterForm
                ? newsletterForm.querySelector(
                    ".form-message"
                )
                : null;

        if (!newsletterForm) {
            return;
        }

        if (!messageElement) {

            messageElement =
                document.createElement(
                    "p"
                );

            messageElement.className =
                "form-message";

            messageElement.setAttribute(
                "role",
                "status"
            );

            newsletterForm.appendChild(
                messageElement
            );

        }

        messageElement.textContent =
            message;

    }


    /* =====================================================
       BACK TO TOP BUTTON
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


    /* =====================================================
       BACK TO TOP VISIBILITY
    ===================================================== */

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


    /* =====================================================
       BACK TO TOP ACTION
    ===================================================== */

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior:
                    prefersReducedMotion.matches
                        ? "auto"
                        : "smooth"
            });

        }
    );


    /* =====================================================
       INTERSECTION OBSERVER
       REVEAL SECTIONS AS THEY ENTER VIEW
    ===================================================== */

    if (
        "IntersectionObserver"
        in window &&
        !prefersReducedMotion.matches
    ) {

        const revealElements =
            document.querySelectorAll(
                ".development-card, " +
                ".material-card, " +
                ".week-card, " +
                ".center-card, " +
                ".book-card, " +
                ".assessment-card, " +
                ".why-card, " +
                ".dashboard-card, " +
                ".download-card"
            );

        revealElements.forEach(
            element => {

                element.classList.add(
                    "js-reveal"
                );

            }
        );


        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

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

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       INITIAL PAGE HASH
    ===================================================== */

    if (
        window.location.hash
    ) {

        const target =
            document.querySelector(
                window.location.hash
            );

        if (target) {

            setTimeout(
                () => {

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    window.scrollTo({
                        top:
                            target.getBoundingClientRect()
                                .top
                            +
                            window.scrollY
                            -
                            headerHeight
                            -
                            10,
                        behavior:
                            prefersReducedMotion.matches
                                ? "auto"
                                : "smooth"
                    });

                },
                100
            );

        }

    }


    /* =====================================================
       YEAR
       Automatically updates elements using .current-year
    ===================================================== */

    const currentYear =
        new Date().getFullYear();

    document
        .querySelectorAll(
            ".current-year"
        )
        .forEach(
            element => {

                element.textContent =
                    currentYear;

            }
        );


    /* =====================================================
       FINAL INITIALIZATION
    ===================================================== */

    document.documentElement
        .classList.add(
            "js-ready"
        );

});