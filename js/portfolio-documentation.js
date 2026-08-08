/*==================================================
LITTLE EXPLORERS LEARNING HUB
PORTFOLIO DOCUMENTATION
JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", function () {


    /*==================================================
    HEADER SCROLL EFFECT
    ==================================================*/

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


    /*==================================================
    MOBILE NAVIGATION
    ==================================================*/

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mainNav =
        document.querySelector(".main-nav");


    if (mobileMenu && mainNav) {

        mobileMenu.addEventListener(
            "click",
            function () {

                const isOpen =
                    mainNav.classList.toggle("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close Navigation"
                        : "Open Navigation"
                );

                mobileMenu.textContent =
                    isOpen ? "✕" : "☰";

            }
        );


        /* Close navigation after selecting a link */

        const navigationLinks =
            mainNav.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove("active");

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
            );

        });

    }


    /*==================================================
    SMOOTH SCROLLING
    ==================================================*/

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

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
                    window.scrollY -
                    headerHeight -
                    20;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


    /*==================================================
    FADE UP ANIMATIONS
    ==================================================*/

    const fadeElements =
        document.querySelectorAll(".fade-up");


    if (fadeElements.length > 0) {

        const fadeObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );

                                fadeObserver.unobserve(
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


        fadeElements.forEach(
            function (element) {

                fadeObserver.observe(element);

            }
        );

    }


    /*==================================================
    IMAGE ERROR HANDLING
    ==================================================*/

    const cardImages =
        document.querySelectorAll(
            ".study-card img"
        );


    cardImages.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add(
                    "image-error"
                );

                image.setAttribute(
                    "aria-label",
                    "Portfolio resource image unavailable"
                );

            }
        );

    });


    /*==================================================
    NEWSLETTER FORM
    ==================================================*/

    const newsletterForms =
        document.querySelectorAll(
            ".newsletter-form"
        );


    newsletterForms.forEach(
        function (form) {

            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const button =
                        form.querySelector("button");


                    if (!button) {

                        return;

                    }


                    const originalText =
                        button.textContent;


                    button.textContent =
                        "Thank You!";


                    button.disabled = true;


                    setTimeout(
                        function () {

                            button.textContent =
                                originalText;

                            button.disabled = false;

                            form.reset();

                        },
                        2500
                    );

                }
            );

        }
    );


    /*==================================================
    ESCAPE KEY
    CLOSE MOBILE NAVIGATION
    ==================================================*/

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mainNav &&
                mobileMenu
            ) {

                mainNav.classList.remove(
                    "active"
                );

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
    );


    /*==================================================
    RESPONSIVE NAVIGATION RESET
    ==================================================*/

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 1100 &&
                mainNav &&
                mobileMenu
            ) {

                mainNav.classList.remove(
                    "active"
                );

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
    );


});
