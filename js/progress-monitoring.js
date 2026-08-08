/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   PROGRESS MONITORING JAVASCRIPT
   File: js/progress-monitoring.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mainNav =
        document.querySelector(".main-nav");


    if (mobileMenu && mainNav) {

        mobileMenu.addEventListener(
            "click",
            function () {

                const isOpen =
                    mainNav.classList.toggle(
                        "is-open"
                    );


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


                const icon =
                    mobileMenu.querySelector("i");


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

            }
        );


        /* Close navigation after selecting a link */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mainNav.classList.remove(
                            "is-open"
                        );


                        mobileMenu.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        mobileMenu.setAttribute(
                            "aria-label",
                            "Open Navigation"
                        );


                        const icon =
                            mobileMenu.querySelector("i");


                        if (icon) {

                            icon.classList.remove(
                                "fa-xmark"
                            );

                            icon.classList.add(
                                "fa-bars"
                            );

                        }

                    }
                );

            }
        );

    }


    /* =========================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mainNav ||
                !mobileMenu ||
                !mainNav.classList.contains("is-open")
            ) {
                return;
            }


            const clickedInsideNavigation =
                mainNav.contains(event.target);


            const clickedMenuButton =
                mobileMenu.contains(event.target);


            if (
                !clickedInsideNavigation &&
                !clickedMenuButton
            ) {

                mainNav.classList.remove(
                    "is-open"
                );


                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenu.setAttribute(
                    "aria-label",
                    "Open Navigation"
                );


                const icon =
                    mobileMenu.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );


    /* =========================================================
       ESCAPE KEY CLOSES MOBILE NAVIGATION
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("is-open")
            ) {

                mainNav.classList.remove(
                    "is-open"
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


                    const icon =
                        mobileMenu.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }

        }
    );


    /* =========================================================
       HEADER SCROLL EFFECT
       ========================================================= */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 20) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
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


    /* =========================================================
       SMOOTH ANCHOR SCROLLING
       ========================================================= */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
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
                        window.pageYOffset -
                        headerHeight -
                        15;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );


    /* =========================================================
       RESOURCE DOWNLOAD FEEDBACK
       ========================================================= */

    const resourceLinks =
        document.querySelectorAll(
            ".resource-content a"
        );


    resourceLinks.forEach(
        function (link) {

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

        }
    );


    /* =========================================================
       INTERSECTION OBSERVER
       ========================================================= */

    const animatedElements =
        document.querySelectorAll(
            ".intro-card, " +
            ".cycle-card, " +
            ".domain-card, " +
            ".resource-card, " +
            ".reflection-box"
        );


    if (
        "IntersectionObserver" in window &&
        animatedElements.length
    ) {


        const observer =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

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
            function (
                element,
                index
            ) {

                element.style.setProperty(
                    "--animation-delay",
                    (index * 0.04) + "s"
                );


                observer.observe(
                    element
                );

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
       HERO BUTTONS
       ========================================================= */

    const heroButtons =
        document.querySelectorAll(
            ".hero-actions .btn"
        );


    heroButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    button.classList.add(
                        "button-selected"
                    );


                    setTimeout(
                        function () {

                            button.classList.remove(
                                "button-selected"
                            );

                        },
                        500
                    );

                }
            );

        }
    );


    /* =========================================================
       FINAL CTA BUTTON
       ========================================================= */

    const finalCtaButton =
        document.querySelector(
            ".final-cta .btn"
        );


    if (finalCtaButton) {

        finalCtaButton.addEventListener(
            "click",
            function () {

                finalCtaButton.classList.add(
                    "button-selected"
                );


                setTimeout(
                    function () {

                        finalCtaButton.classList.remove(
                            "button-selected"
                        );

                    },
                    500
                );

            }
        );

    }


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
       KEYBOARD ACCESSIBILITY
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Tab"
            ) {

                document.body.classList.add(
                    "keyboard-navigation"
                );

            }

        }
    );


    document.addEventListener(
        "mousedown",
        function () {

            document.body.classList.remove(
                "keyboard-navigation"
            );

        }
    );


    /* =========================================================
       PAGE READY
       ========================================================= */

    document.body.classList.add(
        "page-ready"
    );


});
