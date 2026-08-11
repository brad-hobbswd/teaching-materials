/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   ALPHABET & LITERACY PRINTABLES
   ---------------------------------------------------------
   File:
   js/alphabet.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const nav =
        document.querySelector("nav");


    if (mobileMenu && nav) {

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );


        mobileMenu.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.getAttribute(
                        "aria-expanded"
                    ) === "true";


                if (isOpen) {

                    closeMobileNavigation();

                } else {

                    openMobileNavigation();

                }

            }
        );


        function openMobileNavigation() {

            mobileMenu.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Close navigation"
            );

            nav.classList.add(
                "mobile-open"
            );

        }


        function closeMobileNavigation() {

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Open navigation"
            );

            nav.classList.remove(
                "mobile-open"
            );

        }


        nav.querySelectorAll("a")
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        () => {

                            if (
                                window.innerWidth <= 820
                            ) {

                                closeMobileNavigation();

                            }

                        }
                    );

                }
            );


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 820
                ) {

                    closeMobileNavigation();

                }

            }
        );

    }


    /* =====================================================
       PRINTABLE RESOURCE SEARCH
    ===================================================== */

    const searchForm =
        document.querySelector(
            ".search-bar"
        );

    const searchInput =
        document.querySelector(
            ".search-bar input"
        );


    const searchableCards = [
        ...document.querySelectorAll(
            ".collection-card"
        ),

        ...document.querySelectorAll(
            ".resource-card"
        ),

        ...document.querySelectorAll(
            ".download-card"
        )
    ];


    if (
        searchForm &&
        searchInput &&
        searchableCards.length
    ) {


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

            searchStatus.style.marginTop =
                "12px";

            searchStatus.style.fontSize =
                ".8rem";

            searchStatus.style.fontWeight =
                "700";

            searchStatus.style.color =
                "#56646b";

            searchForm.insertAdjacentElement(
                "afterend",
                searchStatus
            );

        }


        function filterResources() {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            let visibleCount =
                0;


            searchableCards.forEach(
                card => {

                    const searchableText =
                        card.textContent
                            .toLowerCase();


                    const matches =
                        !query ||
                        searchableText.includes(
                            query
                        );


                    card.hidden =
                        !matches;


                    if (matches) {

                        visibleCount++;

                    }

                }
            );


            if (!query) {

                searchStatus.textContent =
                    "";

                return;

            }


            if (
                visibleCount === 0
            ) {

                searchStatus.textContent =
                    `No printable resources found for "${searchInput.value}". Try alphabet, sounds, tracing, games, or centers.`;

            } else {

                searchStatus.textContent =
                    `${visibleCount} resource${visibleCount === 1 ? "" : "s"} found.`;

            }

        }


        searchInput.addEventListener(
            "input",
            filterResources
        );


        searchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                filterResources();


                const firstVisible =
                    searchableCards.find(
                        card =>
                            !card.hidden
                    );


                if (
                    firstVisible
                ) {

                    firstVisible.scrollIntoView({
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

    const faqCards =
        document.querySelectorAll(
            ".faq-card"
        );


    faqCards.forEach(
        (card, index) => {

            const question =
                card.querySelector("h3");

            const answer =
                card.querySelector("p");


            if (
                !question ||
                !answer
            ) {

                return;

            }


            const answerId =
                `faq-answer-${index + 1}`;


            answer.id =
                answerId;


            question.setAttribute(
                "role",
                "button"
            );

            question.setAttribute(
                "tabindex",
                "0"
            );

            question.setAttribute(
                "aria-expanded",
                "false"
            );

            question.setAttribute(
                "aria-controls",
                answerId
            );


            answer.style.maxHeight =
                "0";

            answer.style.overflow =
                "hidden";

            answer.style.paddingTop =
                "0";

            answer.style.paddingBottom =
                "0";

            answer.style.transition =
                "max-height .3s ease, padding .3s ease";


            function toggleFAQ() {

                const isOpen =
                    question.getAttribute(
                        "aria-expanded"
                    ) === "true";


                faqCards.forEach(
                    otherCard => {

                        const otherQuestion =
                            otherCard.querySelector(
                                "h3"
                            );

                        const otherAnswer =
                            otherCard.querySelector(
                                "p"
                            );


                        if (
                            otherCard !== card &&
                            otherQuestion &&
                            otherAnswer
                        ) {

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            otherAnswer.style.maxHeight =
                                "0";

                            otherAnswer.style.paddingTop =
                                "0";

                            otherAnswer.style.paddingBottom =
                                "0";

                        }

                    }
                );


                if (isOpen) {

                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    answer.style.maxHeight =
                        "0";

                    answer.style.paddingTop =
                        "0";

                    answer.style.paddingBottom =
                        "0";

                } else {

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                    answer.style.paddingTop =
                        "0";

                    answer.style.paddingBottom =
                        "22px";

                }

            }


            question.addEventListener(
                "click",
                toggleFAQ
            );


            question.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        toggleFAQ();

                    }

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
            () => {

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
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

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
       IMAGE FALLBACK
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    () => {

                        image.style.background =
                            "#fff4d6";

                        image.style.objectFit =
                            "contain";

                        image.style.padding =
                            "20px";

                    },
                    {
                        once:
                            true
                    }
                );

            }
        );


    /* =====================================================
       AUTOMATIC FOOTER YEAR
    ===================================================== */

    const footerText =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerText) {

        footerText.innerHTML =
            footerText.innerHTML.replace(
                /\b20\d{2}\b/,
                new Date()
                    .getFullYear()
            );

    }


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "alphabet-page-ready"
    );

});
