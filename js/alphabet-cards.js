/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   ALPHABET CARDS PRINTABLES

   FILE:
   js/alphabet-cards.js

   PURPOSE:
   Mobile navigation
   Resource search
   FAQ accordion
   Smooth scrolling
   Back to top
   Newsletter protection
   Accessibility
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mainNav =
        document.querySelector(".main-nav");


    if (mobileMenu && mainNav) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );


        mobileMenu.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileMenu.getAttribute(
                        "aria-expanded"
                    ) === "true";


                if (isOpen) {

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                } else {

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Close navigation"
                    );

                    mainNav.classList.add(
                        "mobile-open"
                    );

                }

            }
        );


        mainNav.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth <= 900
                        ) {

                            mobileMenu.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            mobileMenu.setAttribute(
                                "aria-label",
                                "Open navigation"
                            );

                            mainNav.classList.remove(
                                "mobile-open"
                            );

                        }

                    }
                );

            });


        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 900
                ) {

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchForm =
        document.querySelector(
            ".search-form"
        );

    const searchInput =
        document.querySelector(
            ".search-form input"
        );


    if (
        searchForm &&
        searchInput
    ) {

        const searchableItems = [

            ...document.querySelectorAll(
                ".study-card"
            ),

            ...document.querySelectorAll(
                ".why-card"
            ),

            ...document.querySelectorAll(
                ".skill-card"
            ),

            ...document.querySelectorAll(
                ".application-card"
            ),

            ...document.querySelectorAll(
                ".idea-card"
            ),

            ...document.querySelectorAll(
                ".favorite-card"
            ),

            ...document.querySelectorAll(
                ".resource-card"
            )

        ];


        let searchStatus =
            document.getElementById(
                "searchStatus"
            );


        if (!searchStatus) {

            searchStatus =
                document.createElement(
                    "div"
                );

            searchStatus.id =
                "searchStatus";

            searchStatus.setAttribute(
                "role",
                "status"
            );

            searchStatus.setAttribute(
                "aria-live",
                "polite"
            );

            searchStatus.style.margin =
                "10px 0 0";

            searchStatus.style.color =
                "#59676d";

            searchStatus.style.fontSize =
                ".8rem";

            searchStatus.style.fontWeight =
                "800";

            searchForm.insertAdjacentElement(
                "afterend",
                searchStatus
            );

        }


        function runSearch() {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            let matches = 0;


            searchableItems.forEach(
                function (item) {

                    const text =
                        item.textContent
                            .toLowerCase();


                    const match =
                        !query ||
                        text.includes(query);


                    item.hidden =
                        !match;


                    if (match) {

                        matches++;

                    }

                }
            );


            if (!query) {

                searchStatus.textContent =
                    "";

                return;

            }


            if (matches === 0) {

                searchStatus.textContent =
                    "No matching resources found. Try letters, sounds, pocket charts, games, literacy, or centers.";

            } else {

                searchStatus.textContent =
                    matches +
                    " matching resource" +
                    (
                        matches === 1
                            ? ""
                            : "s"
                    ) +
                    " found.";

            }

        }


        searchInput.addEventListener(
            "input",
            runSearch
        );


        searchForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                runSearch();


                const firstMatch =
                    searchableItems.find(
                        function (item) {

                            return !item.hidden;

                        }
                    );


                if (
                    firstMatch &&
                    searchInput.value.trim()
                ) {

                    firstMatch.scrollIntoView({
                        behavior:
                            "smooth",

                        block:
                            "center"
                    });

                }

            }
        );

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item, index) {

            const button =
                item.querySelector(
                    ".faq-question"
                );

            const answer =
                item.querySelector(
                    ".faq-answer"
                );


            if (
                !button ||
                !answer
            ) {

                return;

            }


            const answerId =
                "alphabet-faq-answer-" +
                (index + 1);


            answer.id =
                answerId;


            button.setAttribute(
                "aria-controls",
                answerId
            );


            if (
                !button.hasAttribute(
                    "aria-expanded"
                )
            ) {

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            if (
                button.getAttribute(
                    "aria-expanded"
                ) !== "true"
            ) {

                answer.hidden =
                    true;

            }


            button.addEventListener(
                "click",
                function () {

                    const isOpen =
                        button.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    faqItems.forEach(
                        function (otherItem) {

                            if (
                                otherItem === item
                            ) {

                                return;

                            }


                            const otherButton =
                                otherItem.querySelector(
                                    ".faq-question"
                                );

                            const otherAnswer =
                                otherItem.querySelector(
                                    ".faq-answer"
                                );


                            if (
                                otherButton &&
                                otherAnswer
                            ) {

                                otherButton.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                                otherAnswer.hidden =
                                    true;

                            }

                        }
                    );


                    if (isOpen) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        answer.hidden =
                            true;

                    } else {

                        button.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                        answer.hidden =
                            false;

                    }

                }
            );

        }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
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


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {


        function updateBackToTop() {

            if (
                window.scrollY > 500
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive:
                    true
            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top:
                        0,

                    behavior:
                        "smooth"

                });

            }
        );


        updateBackToTop();

    }


    /* =====================================================
       NEWSLETTER FORM
    ===================================================== */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );


    if (newsletterForm) {

        const action =
            newsletterForm.getAttribute(
                "action"
            ) || "";


        const placeholderForm =
            action.includes(
                "YOUR_FORM_ID"
            ) ||
            newsletterForm.querySelector(
                '[name="YOUR_ENTRY_ID"]'
            );


        if (placeholderForm) {

            newsletterForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    let message =
                        document.getElementById(
                            "newsletterMessage"
                        );


                    if (!message) {

                        message =
                            document.createElement(
                                "p"
                            );

                        message.id =
                            "newsletterMessage";

                        message.setAttribute(
                            "role",
                            "status"
                        );

                        message.style.marginTop =
                            "12px";

                        message.style.color =
                            "#a95e53";

                        message.style.fontSize =
                            ".8rem";

                        message.style.fontWeight =
                            "800";

                        newsletterForm.appendChild(
                            message
                        );

                    }


                    message.textContent =
                        "Newsletter signup is not connected yet. Please check back soon.";

                }
            );

        }

    }


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    document.querySelectorAll(
        "img"
    ).forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    image.style.background =
                        "#fbf4df";

                    image.style.objectFit =
                        "contain";

                    image.style.padding =
                        "18px";

                },
                {
                    once:
                        true
                }
            );

        }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const footer =
        document.querySelector(
            ".footer-bottom"
        );


    if (footer) {

        footer.innerHTML =
            footer.innerHTML.replace(
                /\b20\d{2}\b/g,
                String(
                    new Date()
                        .getFullYear()
                )
            );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Escape"
            ) {

                return;

            }


            if (
                mobileMenu &&
                mainNav
            ) {

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                mainNav.classList.remove(
                    "mobile-open"
                );

            }

        }
    );


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "alphabet-cards-ready"
    );

});
