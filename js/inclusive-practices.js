/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   GROW AS AN EDUCATOR
   INCLUSIVE CLASSROOMS
   inclusive-practices.js
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mainNav =
    document.getElementById("mainNav");


if (mobileMenu && mainNav) {

    mobileMenu.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNav.classList.toggle("open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mainNav.classList.remove(
                            "open"
                        );

                        mobileMenu.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        mobileMenu.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
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


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".practice-card, .family-card, .environment-check, .related-card"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
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
                threshold:
                    0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   REFLECTION SECTION
========================================================= */

const reflectionSection =
    document.getElementById(
        "reflection"
    );


const reflectionLink =
    document.querySelector(
        'a[href="#reflection"]'
    );


if (
    reflectionSection &&
    reflectionLink &&
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            reflectionLink.classList.add(
                                "active"
                            );

                        } else {

                            reflectionLink.classList.remove(
                                "active"
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.35
            }
        );


    sectionObserver.observe(
        reflectionSection
    );

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mainNav &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove(
                "open"
            );

            if (mobileMenu) {

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        }

    }
);
