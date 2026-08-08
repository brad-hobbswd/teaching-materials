/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   PRE KINDERGARTEN | AGES 4–5 YEARS

   FILE:
   js/ages-4-5.js

   STANDALONE PAGE SCRIPT

   Designed specifically for:
   4-5.html
========================================================= */


/* =========================================================
   01. DOCUMENT READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeMobileNavigation();

    initializeSearch();

    initializeSmoothScrolling();

    initializeNewsletterForm();

    initializeKeyboardNavigation();

});


/* =========================================================
   02. MOBILE NAVIGATION
========================================================= */

function initializeMobileNavigation() {

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector("nav");


    if (!mobileMenu || !navigation) {

        return;

    }


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

            const isOpen =
                navigation.classList.toggle(
                    "mobile-nav-open"
                );


            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );


            mobileMenu.innerHTML =
                isOpen
                    ? "✕"
                    : "☰";

        }
    );


    /* ------------------------------------------
       CLOSE MENU WHEN A LINK IS SELECTED
    ------------------------------------------ */

    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 1050
                    ) {

                        navigation.classList.remove(
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


                        mobileMenu.innerHTML =
                            "☰";

                    }

                }
            );

        }
    );


    /* ------------------------------------------
       CLOSE MENU WHEN CLICKING OUTSIDE
    ------------------------------------------ */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideNavigation =
                navigation.contains(event.target);

            const clickedMenu =
                mobileMenu.contains(event.target);


            if (
                !clickedInsideNavigation &&
                !clickedMenu
            ) {

                navigation.classList.remove(
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


                mobileMenu.innerHTML =
                    "☰";

            }

        }
    );


    /* ------------------------------------------
       RESET MENU WHEN RETURNING TO DESKTOP
    ------------------------------------------ */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 1050) {

                navigation.classList.remove(
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


                mobileMenu.innerHTML =
                    "☰";

            }

        }
    );

}


/* =========================================================
   03. SEARCH
========================================================= */

function initializeSearch() {

    const searchForm =
        document.querySelector(".search-bar");

    const searchInput =
        document.querySelector(
            ".search-bar input"
        );


    if (!searchForm || !searchInput) {

        return;

    }


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
             * The site can later be connected to a
             * complete search system.
             *
             * For now, send the user to the main
             * studies page with the search term.
             */

            const destination =
                "../studies.html?search=" +
                encodeURIComponent(searchTerm);


            window.location.href =
                destination;

        }
    );

}


/* =========================================================
   04. SMOOTH INTERNAL NAVIGATION
========================================================= */

function initializeSmoothScrolling() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        function (link) {

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


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    /*
                     * Update browser URL without
                     * causing a page reload.
                     */

                    if (
                        history.replaceState
                    ) {

                        history.replaceState(
                            null,
                            "",
                            targetID
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   05. NEWSLETTER FORM
========================================================= */

function initializeNewsletterForm() {

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );


    if (!newsletterForm) {

        return;

    }


    newsletterForm.addEventListener(
        "submit",
        function () {

            const emailInput =
                newsletterForm.querySelector(
                    'input[type="email"]'
                );


            if (!emailInput) {

                return;

            }


            const email =
                emailInput.value.trim();


            if (!email) {

                emailInput.focus();

                return;

            }


            /*
             * The form currently submits directly
             * to Google Forms.
             *
             * We intentionally do not prevent
             * the submission here.
             */

        }
    );

}


/* =========================================================
   06. KEYBOARD NAVIGATION
========================================================= */

function initializeKeyboardNavigation() {

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector("nav");


    if (!mobileMenu || !navigation) {

        return;

    }


    document.addEventListener(
        "keydown",
        function (event) {

            /*
             * ESC closes the mobile navigation.
             */

            if (
                event.key === "Escape"
            ) {

                navigation.classList.remove(
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


                mobileMenu.innerHTML =
                    "☰";


                mobileMenu.focus();

            }

        }
    );

}


/* =========================================================
   07. IMAGE ERROR HANDLING
========================================================= */

function initializeImageProtection() {

    const images =
        document.querySelectorAll("img");


    images.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        }
    );

}


/* =========================================================
   08. INITIALIZE IMAGE HANDLING
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeImageProtection();

    }
);


/* =========================================================
   09. EXTERNAL LINK SAFETY
========================================================= */

function initializeExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    links.forEach(
        function (link) {

            const currentHost =
                window.location.hostname;

            let linkHost = "";

            try {

                linkHost =
                    new URL(
                        link.href,
                        window.location.href
                    ).hostname;

            } catch (error) {

                return;

            }


            if (
                linkHost &&
                linkHost !== currentHost
            ) {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeExternalLinks();

    }
);


/* =========================================================
   10. PAGE LOAD CLASS
========================================================= */

document.documentElement.classList.add(
    "page-ready"
);


/* =========================================================
   END OF PRE KINDERGARTEN SCRIPT
========================================================= */