/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   ALPHABET CARDS PRINTABLES

   FILE:
   js/alphabet-cards.js

   FEATURES:
   • Mobile navigation
   • Alphabet resource selection
   • Individual letter selection
   • Select all / clear
   • Resource type selection
   • Printable alphabet generation
   • Download selected alphabet set
   • Print / Save as PDF
   • Resource card shortcuts
   • FAQ accordion
   • Smooth scrolling
   • Newsletter protection
   • Accessibility support
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
                        "Open Navigation"
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
                        "Close Navigation"
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
                                "Open Navigation"
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
                        "Open Navigation"
                    );

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       ALPHABET RESOURCE BUILDER
    ===================================================== */

    const letterChoices =
        document.querySelectorAll(
            ".letter-choice"
        );

    const selectAllLetters =
        document.getElementById(
            "selectAllLetters"
        );

    const clearLetters =
        document.getElementById(
            "clearLetters"
        );

    const builderStatus =
        document.getElementById(
            "builderStatus"
        );

    const resourceType =
        document.getElementById(
            "alphabetResourceType"
        );

    const downloadAlphabet =
        document.getElementById(
            "downloadAlphabet"
        );

    const printAlphabet =
        document.getElementById(
            "printAlphabet"
        );


    /* =====================================================
       BEGINNING SOUND WORDS
    ===================================================== */

    const soundWords = {

        A: "Apple",
        B: "Ball",
        C: "Cat",
        D: "Dog",
        E: "Elephant",
        F: "Fish",
        G: "Giraffe",
        H: "Hat",
        I: "Igloo",
        J: "Juice",
        K: "Kite",
        L: "Lion",
        M: "Moon",
        N: "Nest",
        O: "Orange",
        P: "Pig",
        Q: "Queen",
        R: "Rainbow",
        S: "Sun",
        T: "Turtle",
        U: "Umbrella",
        V: "Van",
        W: "Whale",
        X: "Xylophone",
        Y: "Yo-yo",
        Z: "Zebra"

    };


    /* =====================================================
       GET SELECTED LETTERS
    ===================================================== */

    function getSelectedLetters() {

        return Array.from(
            letterChoices
        )
        .filter(
            function (button) {

                return button.classList.contains(
                    "selected"
                );

            }
        )
        .map(
            function (button) {

                return button.dataset.letter;

            }
        );

    }


    /* =====================================================
       UPDATE BUILDER STATUS
    ===================================================== */

    function updateBuilderStatus() {

        if (!builderStatus) {

            return;

        }


        const selected =
            getSelectedLetters();


        if (
            selected.length === 0
        ) {

            builderStatus.textContent =
                "No letters selected.";

            return;

        }


        if (
            selected.length === 26
        ) {

            builderStatus.textContent =
                "All 26 letters selected.";

            return;

        }


        builderStatus.textContent =
            selected.length +
            " letter" +
            (
                selected.length === 1
                    ? ""
                    : "s"
            ) +
            " selected: " +
            selected.join(", ") +
            ".";

    }


    /* =====================================================
       INDIVIDUAL LETTER BUTTONS
    ===================================================== */

    letterChoices.forEach(
        function (button) {

            button.setAttribute(
                "aria-pressed",
                "false"
            );


            button.addEventListener(
                "click",
                function () {

                    const selected =
                        button.classList.toggle(
                            "selected"
                        );


                    button.setAttribute(
                        "aria-pressed",
                        String(selected)
                    );


                    updateBuilderStatus();

                }
            );

        }
    );


    /* =====================================================
       SELECT ALL
    ===================================================== */

    if (selectAllLetters) {

        selectAllLetters.addEventListener(
            "click",
            function () {

                letterChoices.forEach(
                    function (button) {

                        button.classList.add(
                            "selected"
                        );

                        button.setAttribute(
                            "aria-pressed",
                            "true"
                        );

                    }
                );


                updateBuilderStatus();

            }
        );

    }


    /* =====================================================
       CLEAR ALL
    ===================================================== */

    if (clearLetters) {

        clearLetters.addEventListener(
            "click",
            function () {

                letterChoices.forEach(
                    function (button) {

                        button.classList.remove(
                            "selected"
                        );

                        button.setAttribute(
                            "aria-pressed",
                            "false"
                        );

                    }
                );


                updateBuilderStatus();

            }
        );

    }


    /* =====================================================
       RESOURCE CARD SHORTCUTS
    ===================================================== */

    document.querySelectorAll(
        ".resource-select-button"
    ).forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        button.dataset.resourceType;


                    if (
                        resourceType &&
                        type
                    ) {

                        resourceType.value =
                            type;

                    }


                    const builder =
                        document.getElementById(
                            "downloads"
                        );


                    if (builder) {

                        builder.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        }
    );


    /* =====================================================
       CREATE ALPHABET MARKUP
    ===================================================== */

    function createAlphabetMarkup() {

        const selected =
            getSelectedLetters();


        const type =
            resourceType
                ? resourceType.value
                : "both";


        if (
            selected.length === 0
        ) {

            return null;

        }


        let cards = "";


        selected.forEach(
            function (letter) {

                let content = "";
                let title = "";


                /* -----------------------------------------
                   UPPERCASE
                ----------------------------------------- */

                if (
                    type === "uppercase"
                ) {

                    title =
                        letter;

                    content =
                        `
                        <div class="card-letter">
                            ${letter}
                        </div>
                        `;

                }


                /* -----------------------------------------
                   LOWERCASE
                ----------------------------------------- */

                else if (
                    type === "lowercase"
                ) {

                    title =
                        letter.toLowerCase();

                    content =
                        `
                        <div class="card-letter">
                            ${letter.toLowerCase()}
                        </div>
                        `;

                }


                /* -----------------------------------------
                   BEGINNING SOUNDS
                ----------------------------------------- */

                else if (
                    type === "beginning"
                ) {

                    title =
                        letter +
                        " Beginning Sound";

                    content =
                        `
                        <div class="card-letter">
                            ${letter}
                        </div>

                        <div class="card-word">
                            ${soundWords[letter]}
                        </div>

                        <div class="card-sound">
                            / ${letter.toLowerCase()} /
                        </div>
                        `;

                }


                /* -----------------------------------------
                   UPPERCASE + LOWERCASE
                ----------------------------------------- */

                else {

                    title =
                        letter +
                        " Letter Card";

                    content =
                        `
                        <div class="card-letter">
                            ${letter}
                        </div>

                        <div class="card-lower">
                            ${letter.toLowerCase()}
                        </div>
                        `;

                }


                cards +=
                    `
                    <article class="print-card">

                        ${content}

                        <div class="card-title">
                            ${title}
                        </div>

                    </article>
                    `;

            }
        );


        return {

            cards:
                cards,

            type:
                type,

            selected:
                selected

        };

    }


    /* =====================================================
       CREATE PRINTABLE DOCUMENT
    ===================================================== */

    function buildDownloadDocument() {

        const result =
            createAlphabetMarkup();


        if (!result) {

            alert(
                "Please select at least one letter first."
            );

            return null;

        }


        const typeNames = {

            both:
                "Uppercase and Lowercase Alphabet Cards",

            uppercase:
                "Uppercase Alphabet Cards",

            lowercase:
                "Lowercase Alphabet Cards",

            beginning:
                "Beginning Sound Cards"

        };


        const title =
            typeNames[result.type];


        return `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
    ${title} | Little Explorers Learning Hub
</title>


<style>

@page {

    size:
        Letter portrait;

    margin:
        .45in;

}


* {

    box-sizing:
        border-box;

}


body {

    margin:
        0;

    background:
        #fffdf9;

    color:
        #28343a;

    font-family:
        Arial,
        sans-serif;

}


.print-header {

    text-align:
        center;

    margin-bottom:
        24px;

}


.print-header h1 {

    margin:
        0 0 6px;

    font-size:
        26px;

}


.print-header p {

    margin:
        0;

    color:
        #59676d;

    font-size:
        12px;

}


.print-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        14px;

}


.print-card {

    min-height:
        3.35in;

    border:
        2px solid #e6ddd2;

    border-radius:
        18px;

    background:
        #ffffff;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    text-align:
        center;

    page-break-inside:
        avoid;

}


.card-letter {

    font-size:
        105px;

    font-weight:
        800;

    line-height:
        .9;

}


.card-lower {

    margin-top:
        8px;

    font-size:
        58px;

    color:
        #d98a7d;

    font-weight:
        700;

}


.card-word {

    margin-top:
        15px;

    font-size:
        24px;

    font-weight:
        700;

}


.card-sound {

    margin-top:
        7px;

    color:
        #59676d;

    font-size:
        15px;

}


.card-title {

    margin-top:
        18px;

    color:
        #59676d;

    font-size:
        11px;

    font-weight:
        700;

    letter-spacing:
        .04em;

    text-transform:
        uppercase;

}


@media print {

    body {

        background:
            #ffffff;

    }


    .print-header {

        display:
            none;

    }

}

</style>

</head>


<body>


<header class="print-header">

    <h1>
        ${title}
    </h1>

    <p>
        Little Explorers Learning Hub
    </p>

</header>


<main class="print-grid">

    ${result.cards}

</main>


</body>

</html>
`;

    }


    /* =====================================================
       DOWNLOAD SELECTED SET
    ===================================================== */

    if (downloadAlphabet) {

        downloadAlphabet.addEventListener(
            "click",
            function () {

                const documentText =
                    buildDownloadDocument();


                if (!documentText) {

                    return;

                }


                const blob =
                    new Blob(
                        [documentText],
                        {
                            type:
                                "text/html"
                        }
                    );


                const url =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    url;


                link.download =
                    "little-explorers-alphabet-cards.html";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                setTimeout(
                    function () {

                        URL.revokeObjectURL(
                            url
                        );

                    },
                    1000
                );

            }
        );

    }


    /* =====================================================
       PRINT / SAVE AS PDF
    ===================================================== */

    if (printAlphabet) {

        printAlphabet.addEventListener(
            "click",
            function () {

                const documentText =
                    buildDownloadDocument();


                if (!documentText) {

                    return;

                }


                const printWindow =
                    window.open(
                        "",
                        "_blank"
                    );


                if (!printWindow) {

                    alert(
                        "Please allow pop-ups for this site so the printable can open."
                    );

                    return;

                }


                printWindow.document.open();

                printWindow.document.write(
                    documentText
                );

                printWindow.document.close();


                printWindow.focus();


                setTimeout(
                    function () {

                        printWindow.print();

                    },
                    500
                );

            }
        );

    }


    updateBuilderStatus();


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


        function runSearch() {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            searchableItems.forEach(
                function (item) {

                    const text =
                        item.textContent
                            .toLowerCase();


                    item.hidden =
                        query &&
                        !text.includes(
                            query
                        );

                }
            );

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

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            answer.hidden =
                true;


            button.addEventListener(
                "click",
                function () {

                    const isOpen =
                        button.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    faqItems.forEach(
                        function (otherItem) {

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


                    if (!isOpen) {

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
                    "Open Navigation"
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
