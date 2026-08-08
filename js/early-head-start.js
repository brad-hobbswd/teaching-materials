/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   EARLY HEAD START JAVASCRIPT
   early-head-start.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("nav");

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("mobile-nav-open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close Navigation"
                    : "Open Navigation"
            );

            mobileMenu.textContent =
                isOpen ? "✕" : "☰";
        });

    }


    /* =====================================================
       CLOSE MOBILE NAVIGATION WHEN A LINK IS SELECTED
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll("nav a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (
                navigation &&
                navigation.classList.contains(
                    "mobile-nav-open"
                )
            ) {

                navigation.classList.remove(
                    "mobile-nav-open"
                );

                if (mobileMenu) {

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open Navigation"
                    );

                    mobileMenu.textContent = "☰";
                }

            }

        });

    });


    /* =====================================================
       CLOSE MOBILE NAVIGATION WHEN SCREEN EXPANDS
    ===================================================== */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 760 &&
            navigation
        ) {

            navigation.classList.remove(
                "mobile-nav-open"
            );

            if (mobileMenu) {

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open Navigation"
                );

                mobileMenu.textContent = "☰";
            }

        }

    });


    /* =====================================================
       MOBILE NAVIGATION KEYBOARD SUPPORT
    ===================================================== */

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {

                    if (navigation) {

                        navigation.classList.remove(
                            "mobile-nav-open"
                        );
                    }

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open Navigation"
                    );

                    mobileMenu.textContent = "☰";

                    mobileMenu.focus();
                }

            }
        );

    }


    /* =====================================================
       DESKTOP SEARCH
    ===================================================== */

    const headerSearch =
        document.querySelector(".search-bar");

    if (headerSearch) {

        headerSearch.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const input =
                    headerSearch.querySelector(
                        "input[type='search']"
                    );

                if (!input) {
                    return;
                }

                const searchTerm =
                    input.value.trim();

                if (!searchTerm) {

                    input.focus();

                    return;
                }

                performSearch(searchTerm);
            }
        );

    }


    /* =====================================================
       HERO SEARCH
    ===================================================== */

    const heroSearch =
        document.querySelector(".hero-search");

    if (heroSearch) {

        heroSearch.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const input =
                    heroSearch.querySelector(
                        "input[type='search']"
                    );

                if (!input) {
                    return;
                }

                const searchTerm =
                    input.value.trim();

                if (!searchTerm) {

                    input.focus();

                    return;
                }

                performSearch(searchTerm);
            }
        );

    }


    /* =====================================================
       SEARCH FUNCTION
    ===================================================== */

    function performSearch(searchTerm) {

        const encodedSearch =
            encodeURIComponent(searchTerm);

        /*
         * Sends the user to the site's search page.
         *
         * Example:
         * search.html?q=music
         */

        window.location.href =
            `../search.html?q=${encodedSearch}`;
    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    navigationLinks.forEach((link) => {

        const linkPath =
            link.getAttribute("href");

        if (!linkPath) {
            return;
        }

        const linkPage =
            linkPath
                .split("/")
                .pop()
                .split("?")[0]
                .split("#")[0]
                .toLowerCase();

        if (
            linkPage &&
            linkPage === currentPage
        ) {

            navigationLinks.forEach(
                (item) => {
                    item.classList.remove(
                        "active"
                    );
                }
            );

            link.classList.add("active");

        }

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

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

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       NEWSLETTER FORM
    ===================================================== */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            () => {

                const submitButton =
                    newsletterForm.querySelector(
                        "button[type='submit']"
                    );

                if (!submitButton) {
                    return;
                }

                submitButton.disabled = true;

                submitButton.textContent =
                    "Submitting...";

                /*
                 * The Google Form still receives
                 * the actual submission because
                 * the HTML form uses its action
                 * and target attributes.
                 */

                setTimeout(() => {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "Subscribe Free →";

                }, 5000);

            }
        );

    }


    /* =====================================================
       CARD KEYBOARD ACCESSIBILITY
    ===================================================== */

    document
        .querySelectorAll(
            ".interest-card, .study-card"
        )
        .forEach((card) => {

            if (
                card.tagName.toLowerCase() === "a"
            ) {
                return;
            }

            const link =
                card.querySelector("a");

            if (!link) {
                return;
            }

            card.setAttribute(
                "tabindex",
                "0"
            );

            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        link.click();
                    }

                }
            );

        });


    /* =====================================================
       ESCAPE KEY
       CLOSES MOBILE NAVIGATION
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }

            if (
                navigation &&
                navigation.classList.contains(
                    "mobile-nav-open"
                )
            ) {

                navigation.classList.remove(
                    "mobile-nav-open"
                );

                if (mobileMenu) {

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open Navigation"
                    );

                    mobileMenu.textContent = "☰";

                    mobileMenu.focus();
                }

            }

        }
    );


    /* =====================================================
       REDUCED MOTION DETECTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (
        prefersReducedMotion.matches
    ) {

        document.documentElement
            .classList
            .add("reduced-motion");

    }


    /* =====================================================
       LOG
    ===================================================== */

    console.log(
        "Little Explorers Learning Hub | Early Head Start loaded."
    );

});