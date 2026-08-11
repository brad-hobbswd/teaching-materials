/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   SIGHT WORDS
   FILE: js/sight-words.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mainNav =
        document.getElementById("mainNav");


    if (mobileMenu && mainNav) {

        mobileMenu.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileMenu.getAttribute(
                        "aria-expanded"
                    ) === "true";


                mobileMenu.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );


                mobileMenu.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Open navigation"
                        : "Close navigation"
                );


                mainNav.classList.toggle(
                    "mobile-open",
                    !isOpen
                );

            }
        );


        mainNav
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

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
                );

            });

    }



    /* =====================================================
       BUILDER ELEMENTS
    ===================================================== */

    const wordChoices =
        document.querySelectorAll(
            ".word-choice"
        );


    const resourceType =
        document.getElementById(
            "wordResourceType"
        );


    const selectAll =
        document.getElementById(
            "selectAllWords"
        );


    const clearAll =
        document.getElementById(
            "clearWords"
        );


    const status =
        document.getElementById(
            "wordBuilderStatus"
        );


    const downloadButton =
        document.getElementById(
            "downloadWordSet"
        );


    const printButton =
        document.getElementById(
            "printWordSet"
        );



    /* =====================================================
       RESOURCE NAMES
    ===================================================== */

    const resourceNames = {

        flash:
            "Sight Word Flash Cards",

        matching:
            "Sight Word Matching",

        sentence:
            "Sight Word Sentence Practice",

        center:
            "Sight Word Independent Center"

    };



    /* =====================================================
       SENTENCE STARTERS
    ===================================================== */

    const sentenceStarters = {

        a:
            "I see a ____.",

        I:
            "I can ____.",

        the:
            "I see the ____.",

        is:
            "It is ____.",

        to:
            "I like to ____.",

        and:
            "I can read and ____.",

        in:
            "It is in the ____.",

        it:
            "I like it.",

        my:
            "This is my ____.",

        we:
            "We can ____.",

        can:
            "I can ____.",

        see:
            "I see ____.",

        go:
            "We can go ____.",

        me:
            "Look at me.",

        you:
            "I see you.",

        like:
            "I like ____.",

        look:
            "Look at the ____.",

        this:
            "This is ____.",

        that:
            "I like that.",

        with:
            "I can play with ____.",

        for:
            "This is for ____.",

        have:
            "I have ____.",

        are:
            "We are ____.",

        was:
            "It was ____.",

        not:
            "It is not ____.",

        on:
            "It is on the ____.",

        of:
            "A part of ____.",

        from:
            "This is from ____.",

        one:
            "I have one."

    };



    /* =====================================================
       GET SELECTED WORDS
    ===================================================== */

    function getSelectedWords() {

        return Array.from(
            wordChoices
        )
        .filter(function (button) {

            return button.classList.contains(
                "selected"
            );

        })
        .map(function (button) {

            return button.dataset.word;

        });

    }



    /* =====================================================
       UPDATE STATUS
    ===================================================== */

    function updateStatus() {

        if (!status) {
            return;
        }


        const selected =
            getSelectedWords();


        if (
            selected.length === 0
        ) {

            status.textContent =
                "No words selected.";

            return;

        }


        status.textContent =
            selected.length +
            " word" +
            (
                selected.length === 1
                    ? ""
                    : "s"
            ) +
            " selected.";

    }



    /* =====================================================
       INDIVIDUAL WORD SELECTION
    ===================================================== */

    wordChoices.forEach(
        function (button) {

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


                    updateStatus();

                }
            );

        }
    );



    /* =====================================================
       SELECT ALL WORDS
    ===================================================== */

    if (selectAll) {

        selectAll.addEventListener(
            "click",
            function () {

                wordChoices.forEach(
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


                updateStatus();

            }
        );

    }



    /* =====================================================
       CLEAR ALL WORDS
    ===================================================== */

    if (clearAll) {

        clearAll.addEventListener(
            "click",
            function () {

                wordChoices.forEach(
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


                updateStatus();

            }
        );

    }



    /* =====================================================
       RESOURCE CARD BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".resource-button"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        button.dataset.type;


                    if (
                        resourceType &&
                        type
                    ) {

                        resourceType.value =
                            type;

                    }


                    const builder =
                        document.getElementById(
                            "builder"
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

        });



    /* =====================================================
       FLASH CARD
    ===================================================== */

    function createFlashCard(word) {

        return `

            <article class="print-card flash-card">

                <div class="small-label">
                    READ THIS WORD
                </div>

                <div class="big-word">
                    ${word}
                </div>

                <div class="practice-line">
                    Say it • Read it • Use it
                </div>

            </article>

        `;

    }



    /* =====================================================
       MATCHING CARD
    ===================================================== */

    function createMatchingCard(word) {

        return `

            <article class="print-card matching-card">

                <div class="small-label">
                    MATCH
                </div>

                <div class="match-word">
                    ${word}
                </div>

                <div class="match-line">
                    Find the same word.
                </div>

            </article>

        `;

    }



    /* =====================================================
       SENTENCE PRACTICE CARD
    ===================================================== */

    function createSentenceCard(word) {

        const sentence =
            sentenceStarters[word] ||
            `I can read ${word}.`;


        return `

            <article class="print-card sentence-card">

                <div class="small-label">
                    READ IN CONTEXT
                </div>

                <div class="sentence-word">
                    ${word}
                </div>

                <div class="sentence">
                    ${sentence}
                </div>

                <div class="writing-line"></div>

                <div class="writing-line"></div>

            </article>

        `;

    }



    /* =====================================================
       INDEPENDENT CENTER CARD
    ===================================================== */

    function createCenterCard(word) {

        return `

            <article class="print-card center-card">

                <div class="small-label">
                    LITERACY CENTER
                </div>

                <div class="center-word">
                    ${word}
                </div>

                <div class="center-task">

                    Find it.<br>
                    Read it.<br>
                    Match it.

                </div>

                <div class="center-box">

                    □ I found it

                    <br>

                    □ I read it

                    <br>

                    □ I matched it

                </div>

            </article>

        `;

    }



    /* =====================================================
       BUILD PRINTABLE DOCUMENT
    ===================================================== */

    function buildPrintable() {

        const selected =
            getSelectedWords();


        if (
            selected.length === 0
        ) {

            alert(
                "Please select at least one sight word first."
            );

            return null;

        }


        const type =
            resourceType
                ? resourceType.value
                : "flash";


        let cards = "";


        selected.forEach(
            function (word) {


                if (
                    type === "flash"
                ) {

                    cards +=
                        createFlashCard(
                            word
                        );

                }


                else if (
                    type === "matching"
                ) {

                    cards +=
                        createMatchingCard(
                            word
                        );

                }


                else if (
                    type === "sentence"
                ) {

                    cards +=
                        createSentenceCard(
                            word
                        );

                }


                else if (
                    type === "center"
                ) {

                    cards +=
                        createCenterCard(
                            word
                        );

                }

            }
        );


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
    ${resourceNames[type]}
    | Little Explorers Learning Hub
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
        #fffaf3;

    color:
        #29363d;

    font-family:
        Arial,
        sans-serif;

}


.print-header {

    margin-bottom:
        20px;

    text-align:
        center;

}


.print-header h1 {

    margin:
        0 0 5px;

    font-size:
        25px;

}


.print-header p {

    margin:
        0;

    color:
        #637179;

    font-size:
        11px;

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
        3.25in;

    padding:
        25px;

    border:
        2px solid #e4ddd4;

    border-radius:
        20px;

    background:
        #ffffff;

    text-align:
        center;

    page-break-inside:
        avoid;

}


.small-label {

    margin-bottom:
        18px;

    color:
        #776b91;

    font-size:
        9px;

    font-weight:
        800;

    letter-spacing:
        .08em;

}


.big-word,
.match-word,
.sentence-word,
.center-word {

    font-family:
        Arial,
        sans-serif;

    font-weight:
        800;

}


.big-word {

    margin:
        25px 0;

    font-size:
        62px;

}


.practice-line {

    color:
        #637179;

    font-size:
        11px;

}


.match-word {

    margin:
        25px 0;

    font-size:
        45px;

}


.match-line {

    color:
        #637179;

    font-size:
        12px;

}


.sentence-word {

    margin:
        5px 0 16px;

    color:
        #776b91;

    font-size:
        28px;

}


.sentence {

    min-height:
        55px;

    font-size:
        20px;

    line-height:
        1.5;

}


.writing-line {

    height:
        22px;

    margin-top:
        13px;

    border-bottom:
        1px solid #cbd0d2;

}


.center-word {

    margin:
        20px 0;

    font-size:
        42px;

}


.center-task {

    margin-bottom:
        18px;

    color:
        #637179;

    font-size:
        13px;

    line-height:
        1.65;

}


.center-box {

    padding:
        12px;

    border:
        1px solid #e4ddd4;

    border-radius:
        10px;

    font-size:
        11px;

    line-height:
        2;

}


@media print {

    body {

        background:
            #ffffff;

    }

}

</style>

</head>


<body>


<header class="print-header">

    <h1>
        ${resourceNames[type]}
    </h1>

    <p>
        Little Explorers Learning Hub
    </p>

</header>


<main class="print-grid">

    ${cards}

</main>


</body>

</html>

`;

    }



    /* =====================================================
       DOWNLOAD SELECTED SET
    ===================================================== */

    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            function () {

                const documentText =
                    buildPrintable();


                if (!documentText) {
                    return;
                }


                const blob =
                    new Blob(
                        [documentText],
                        {
                            type:
                                "text/html;charset=utf-8"
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
                    "little-explorers-sight-words.html";


                document.body.appendChild(
                    link
                );


                link.click();


                document.body.removeChild(
                    link
                );


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

    if (printButton) {

        printButton.addEventListener(
            "click",
            function () {

                const documentText =
                    buildPrintable();


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



    /* =====================================================
       SMOOTH SCROLLING
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


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        });



    /* =====================================================
       ESCAPE KEY CLOSES MOBILE NAV
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
       INITIALIZE
    ===================================================== */

    wordChoices.forEach(
        function (button) {

            button.setAttribute(
                "aria-pressed",
                "false"
            );

        }
    );


    updateStatus();


});
