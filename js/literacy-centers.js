
/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   LITERACY CENTERS
   FILE: js/literacy-centers.js
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

    const activityChoices =
        document.querySelectorAll(
            ".center-choice"
        );


    const centerType =
        document.getElementById(
            "centerResourceType"
        );


    const selectAll =
        document.getElementById(
            "selectAllCenters"
        );


    const clearAll =
        document.getElementById(
            "clearCenters"
        );


    const status =
        document.getElementById(
            "centerBuilderStatus"
        );


    const downloadButton =
        document.getElementById(
            "downloadCenterSet"
        );


    const printButton =
        document.getElementById(
            "printCenterSet"
        );



    /* =====================================================
       ACTIVITY NAMES
    ===================================================== */

    const activityNames = {

        pictureMatch:
            "Picture and Word Match",

        letterMatch:
            "Letter Matching",

        beginningSounds:
            "Beginning Sound Sort",

        wordSort:
            "Word Sort",

        pocketChart:
            "Pocket Chart Activity",

        sentenceBuild:
            "Sentence Building",

        bookResponse:
            "Book Response",

        literacySort:
            "Literacy Sort",

        wordHunt:
            "Word Hunt",

        teacherGroup:
            "Teacher Guided Activity",

        partnerGame:
            "Partner Literacy Game",

        independent:
            "Independent Literacy Practice"

    };



    /* =====================================================
       GET SELECTED ACTIVITIES
    ===================================================== */

    function getSelectedActivities() {

        return Array.from(
            activityChoices
        )
        .filter(function (button) {

            return button.classList.contains(
                "selected"
            );

        })
        .map(function (button) {

            return button.dataset.activity;

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
            getSelectedActivities();


        if (
            selected.length === 0
        ) {

            status.textContent =
                "No activities selected.";

            return;

        }


        status.textContent =
            selected.length +
            " center " +
            (
                selected.length === 1
                    ? "activity"
                    : "activities"
            ) +
            " selected.";

    }



    /* =====================================================
       INDIVIDUAL ACTIVITY SELECTION
    ===================================================== */

    activityChoices.forEach(
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
       SELECT ALL
    ===================================================== */

    if (selectAll) {

        selectAll.addEventListener(
            "click",
            function () {

                activityChoices.forEach(
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
       CLEAR ALL
    ===================================================== */

    if (clearAll) {

        clearAll.addEventListener(
            "click",
            function () {

                activityChoices.forEach(
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
                        centerType &&
                        type
                    ) {

                        centerType.value =
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
       CREATE CENTER ACTIVITY
    ===================================================== */

    function createActivity(activity) {


        const name =
            activityNames[activity] ||
            "Literacy Center Activity";


        switch (activity) {


            case "pictureMatch":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Picture & Word Match
                        </h2>

                        <p class="print-instruction">
                            Match each picture with the
                            word that belongs with it.
                        </p>

                        <div class="match-row">

                            <div class="match-box">
                                🍎
                            </div>

                            <div class="match-line"></div>

                            <div class="match-box">
                                apple
                            </div>

                        </div>

                        <div class="match-row">

                            <div class="match-box">
                                ☀
                            </div>

                            <div class="match-line"></div>

                            <div class="match-box">
                                sun
                            </div>

                        </div>

                    </article>

                `;


            case "letterMatch":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Letter Matching
                        </h2>

                        <p class="print-instruction">
                            Match uppercase and lowercase
                            letters.
                        </p>

                        <div class="letter-grid">

                            <div class="letter-box">
                                A
                            </div>

                            <div class="letter-box">
                                a
                            </div>

                            <div class="letter-box">
                                B
                            </div>

                            <div class="letter-box">
                                b
                            </div>

                            <div class="letter-box">
                                M
                            </div>

                            <div class="letter-box">
                                m
                            </div>

                        </div>

                    </article>

                `;


            case "beginningSounds":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Beginning Sound Sort
                        </h2>

                        <p class="print-instruction">
                            Sort pictures by their
                            beginning sound.
                        </p>

                        <div class="sound-sort">

                            <div>
                                <strong>
                                    B
                                </strong>

                                <span>
                                    🐝
                                </span>

                                <span>
                                    ⚽
                                </span>

                            </div>

                            <div>
                                <strong>
                                    S
                                </strong>

                                <span>
                                    ☀
                                </span>

                                <span>
                                    ⭐
                                </span>

                            </div>

                        </div>

                    </article>

                `;


            case "wordSort":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Word Sort
                        </h2>

                        <p class="print-instruction">
                            Sort words by the feature
                            your teacher chooses.
                        </p>

                        <div class="sort-columns">

                            <div class="sort-column">
                                <strong>
                                    Same
                                </strong>

                                <div>
                                    look
                                </div>

                                <div>
                                    like
                                </div>

                            </div>

                            <div class="sort-column">
                                <strong>
                                    Different
                                </strong>

                                <div>
                                    see
                                </div>

                                <div>
                                    can
                                </div>

                            </div>

                        </div>

                    </article>

                `;


            case "pocketChart":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            POCKET CHART
                        </div>

                        <h2>
                            Pocket Chart Activity
                        </h2>

                        <p class="print-instruction">
                            Build, match, sort, or sequence
                            cards using a pocket chart.
                        </p>

                        <div class="pocket-chart">

                            <div>
                                I
                            </div>

                            <div>
                                can
                            </div>

                            <div>
                                see
                            </div>

                            <div>
                                ___
                            </div>

                        </div>

                    </article>

                `;


            case "sentenceBuild":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Sentence Building
                        </h2>

                        <p class="print-instruction">
                            Put the words in an order that
                            makes a meaningful sentence.
                        </p>

                        <div class="sentence-cards">

                            <span>
                                I
                            </span>

                            <span>
                                can
                            </span>

                            <span>
                                read
                            </span>

                            <span>
                                .
                            </span>

                        </div>

                    </article>

                `;


            case "bookResponse":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            BOOK RESPONSE
                        </div>

                        <h2>
                            After I Read
                        </h2>

                        <p class="print-instruction">
                            Draw or write something you
                            remember from the story.
                        </p>

                        <div class="response-box">

                            I remember...

                        </div>

                        <div class="writing-line"></div>

                        <div class="writing-line"></div>

                    </article>

                `;


            case "literacySort":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            LITERACY CENTER
                        </div>

                        <h2>
                            Literacy Sort
                        </h2>

                        <p class="print-instruction">
                            Sort the cards by the feature
                            your teacher provides.
                        </p>

                        <div class="sort-area">

                            <div>
                                Sort Here
                            </div>

                            <div>
                                Sort Here
                            </div>

                        </div>

                    </article>

                `;


            case "wordHunt":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            INDEPENDENT PRACTICE
                        </div>

                        <h2>
                            Word Hunt
                        </h2>

                        <p class="print-instruction">
                            Find the focus word in books,
                            classroom print, or a teacher
                            provided text.
                        </p>

                        <div class="hunt-box">

                            I found:

                            <strong>
                                __________
                            </strong>

                        </div>

                    </article>

                `;


            case "teacherGroup":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            TEACHER GUIDED
                        </div>

                        <h2>
                            Small Group Literacy
                        </h2>

                        <p class="print-instruction">
                            Use this activity with a small
                            group while modeling language,
                            print awareness, or early literacy.
                        </p>

                        <div class="teacher-notes">

                            <strong>
                                Teacher Notes
                            </strong>

                            <div></div>

                            <div></div>

                            <div></div>

                        </div>

                    </article>

                `;


            case "partnerGame":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            PARTNER ACTIVITY
                        </div>

                        <h2>
                            Literacy Partner Game
                        </h2>

                        <p class="print-instruction">
                            Take turns drawing a card,
                            reading, matching, sorting,
                            or responding.
                        </p>

                        <div class="game-box">

                            My Turn

                            <span>
                                →
                            </span>

                            Your Turn

                        </div>

                    </article>

                `;


            case "independent":

                return `

                    <article class="print-card">

                        <div class="print-label">
                            INDEPENDENT CENTER
                        </div>

                        <h2>
                            Independent Practice
                        </h2>

                        <p class="print-instruction">
                            Choose a task, complete it,
                            and check your work.
                        </p>

                        <div class="check-list">

                            □ I chose a task

                            <br><br>

                            □ I completed it

                            <br><br>

                            □ I checked my work

                        </div>

                    </article>

                `;


            default:

                return `

                    <article class="print-card">

                        <div class="print-label">
                            ${name}
                        </div>

                        <h2>
                            Literacy Activity
                        </h2>

                        <p>
                            Explore this literacy activity
                            with a teacher, partner, or
                            independently.
                        </p>

                    </article>

                `;

        }

    }



    /* =====================================================
       BUILD PRINTABLE DOCUMENT
    ===================================================== */

    function buildPrintable() {

        const selected =
            getSelectedActivities();


        if (
            selected.length === 0
        ) {

            alert(
                "Please select at least one literacy center activity first."
            );

            return null;

        }


        const type =
            centerType
                ? centerType.value
                : "centers";


        let cards = "";


        selected.forEach(
            function (activity) {

                cards +=
                    createActivity(
                        activity
                    );

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
    Literacy Center Activities
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
        22px;

    text-align:
        center;

}


.print-header h1 {

    margin:
        0 0 5px;

    font-size:
        26px;

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
        3.35in;

    padding:
        22px;

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


.print-label {

    margin-bottom:
        12px;

    color:
        #776b91;

    font-size:
        9px;

    font-weight:
        900;

    letter-spacing:
        .08em;

}


.print-card h2 {

    margin:
        0 0 12px;

    font-size:
        20px;

}


.print-instruction {

    margin:
        0 0 18px;

    color:
        #637179;

    font-size:
        11px;

    line-height:
        1.55;

}


.match-row {

    display:
        grid;

    grid-template-columns:
        70px 1fr 100px;

    align-items:
        center;

    gap:
        10px;

    margin:
        12px 0;

}


.match-box {

    display:
        grid;

    place-items:
        center;

    min-height:
        48px;

    padding:
        7px;

    border:
        1px solid #e4ddd4;

    border-radius:
        10px;

    font-size:
        18px;

}


.match-line {

    border-top:
        2px dotted #b9c3c6;

}


.letter-grid {

    display:
        grid;

    grid-template-columns:
        repeat(3,1fr);

    gap:
        9px;

}


.letter-box {

    display:
        grid;

    place-items:
        center;

    height:
        58px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

    font-size:
        25px;

    font-weight:
        800;

}


.sound-sort {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        12px;

}


.sound-sort > div {

    display:
        grid;

    gap:
        8px;

    padding:
        12px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

}


.sound-sort strong {

    font-size:
        24px;

}


.sound-sort span {

    font-size:
        26px;

}


.sort-columns {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        12px;

}


.sort-column {

    padding:
        12px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

}


.sort-column strong {

    display:
        block;

    margin-bottom:
        8px;

}


.sort-column div {

    padding:
        8px;

    border-bottom:
        1px solid #ece7e1;

    font-size:
        14px;

}


.pocket-chart {

    display:
        grid;

    grid-template-columns:
        repeat(4,1fr);

    border:
        2px solid #b9c9d1;

}


.pocket-chart div {

    min-height:
        60px;

    display:
        grid;

    place-items:
        center;

    border-right:
        1px solid #b9c9d1;

    font-size:
        22px;

    font-weight:
        800;

}


.pocket-chart div:last-child {

    border-right:
        0;

}


.sentence-cards {

    display:
        flex;

    flex-wrap:
        wrap;

    justify-content:
        center;

    gap:
        8px;

}


.sentence-cards span {

    padding:
        12px 17px;

    border:
        1px solid #e4ddd4;

    border-radius:
        10px;

    font-size:
        19px;

    font-weight:
        700;

}


.response-box {

    min-height:
        90px;

    padding:
        15px;

    border:
        1px solid #d7d0c8;

    border-radius:
        12px;

    text-align:
        left;

    color:
        #637179;

}


.writing-line {

    height:
        25px;

    border-bottom:
        1px solid #c9ced0;

}


.sort-area {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        12px;

}


.sort-area div {

    min-height:
        100px;

    display:
        grid;

    place-items:
        center;

    border:
        2px dashed #b9c3c6;

    border-radius:
        12px;

    color:
        #637179;

}


.hunt-box {

    padding:
        20px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

    font-size:
        13px;

    line-height:
        2;

}


.hunt-box strong {

    display:
        block;

    font-size:
        18px;

}


.teacher-notes {

    text-align:
        left;

}


.teacher-notes div {

    height:
        30px;

    margin-top:
        5px;

    border-bottom:
        1px solid #c9ced0;

}


.game-box {

    display:
        flex;

    justify-content:
        space-between;

    align-items:
        center;

    padding:
        20px 12px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

    font-weight:
        700;

}


.game-box span {

    color:
        #776b91;

    font-size:
        20px;

}


.check-list {

    padding:
        18px;

    border:
        1px solid #e4ddd4;

    border-radius:
        12px;

    text-align:
        left;

    font-size:
        13px;

    line-height:
        1.8;

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
        Literacy Center Activities
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
                    "little-explorers-literacy-centers.html";


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

    activityChoices.forEach(
        function (button) {

            button.setAttribute(
                "aria-pressed",
                "false"
            );

        }
    );


    updateStatus();

});
