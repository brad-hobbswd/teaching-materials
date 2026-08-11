/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   BEGINNING SOUNDS

   FILE:
   js/beginning-sounds.js

   PURPOSE:
   Interactive controls for the Beginning Sounds page
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

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       BEGINNING SOUND DATA
    ===================================================== */

    const soundData = {

        A: {
            word: "Apple",
            emoji: "🍎"
        },

        B: {
            word: "Ball",
            emoji: "⚽"
        },

        C: {
            word: "Cat",
            emoji: "🐱"
        },

        D: {
            word: "Dog",
            emoji: "🐶"
        },

        F: {
            word: "Fish",
            emoji: "🐟"
        },

        G: {
            word: "Giraffe",
            emoji: "🦒"
        },

        H: {
            word: "Hat",
            emoji: "🎩"
        },

        J: {
            word: "Juice",
            emoji: "🧃"
        },

        K: {
            word: "Kite",
            emoji: "🪁"
        },

        L: {
            word: "Lion",
            emoji: "🦁"
        },

        M: {
            word: "Moon",
            emoji: "🌙"
        },

        N: {
            word: "Nest",
            emoji: "🪺"
        },

        P: {
            word: "Pig",
            emoji: "🐷"
        },

        R: {
            word: "Rainbow",
            emoji: "🌈"
        },

        S: {
            word: "Sun",
            emoji: "☀️"
        },

        T: {
            word: "Turtle",
            emoji: "🐢"
        },

        V: {
            word: "Van",
            emoji: "🚐"
        },

        W: {
            word: "Whale",
            emoji: "🐋"
        },

        Y: {
            word: "Yo-yo",
            emoji: "🪀"
        }

    };


    /* =====================================================
       BUILDER ELEMENTS
    ===================================================== */

    const soundChoices =
        document.querySelectorAll(
            ".sound-letter-choice"
        );

    const resourceType =
        document.getElementById(
            "soundResourceType"
        );

    const selectAll =
        document.getElementById(
            "selectAllSounds"
        );

    const clearAll =
        document.getElementById(
            "clearSounds"
        );

    const status =
        document.getElementById(
            "soundBuilderStatus"
        );

    const downloadButton =
        document.getElementById(
            "downloadSoundSet"
        );

    const printButton =
        document.getElementById(
            "printSoundSet"
        );


    /* =====================================================
       GET SELECTED SOUNDS
    ===================================================== */

    function getSelectedSounds() {

        return Array.from(
            soundChoices
        )
        .filter(function (button) {

            return button.classList.contains(
                "selected"
            );

        })
        .map(function (button) {

            return button.dataset.sound;

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
            getSelectedSounds();


        if (
            selected.length === 0
        ) {

            status.textContent =
                "No sounds selected.";

            return;

        }


        if (
            selected.length ===
            soundChoices.length
        ) {

            status.textContent =
                "All available beginning sounds selected.";

            return;

        }


        status.textContent =
            selected.length +
            " sound" +
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
       INDIVIDUAL SOUND BUTTONS
    ===================================================== */

    soundChoices.forEach(
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

                soundChoices.forEach(
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

                soundChoices.forEach(
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
   RESOURCE CARD SHORTCUTS
===================================================== */

document
    .querySelectorAll(
        ".resource-builder-button"
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
   RESOURCE NAMES
===================================================== */

const resourceNames = {

    matching:
        "Picture Matching",

    sort:
        "Initial Sound Sorts",

    clip:
        "Beginning Sound Clip Cards",

    phonics:
        "Beginning Sound Phonics Activities"

};


/* =====================================================
   BUILD PRINTABLE CARDS
===================================================== */

function buildCards() {

    const selected =
        getSelectedSounds();


    const type =
        resourceType
            ? resourceType.value
            : "matching";


    if (
        selected.length === 0
    ) {

        return null;

    }


    let cards = "";


    selected.forEach(
        function (letter) {

            const item =
                soundData[letter];


            if (!item) {

                return;

            }


            /* -----------------------------------------
               PICTURE MATCHING
            ----------------------------------------- */

            if (
                type === "matching"
            ) {

                cards += `

                    <article
                        class="sound-print-card"
                    >

                        <div
                            class="print-letter"
                        >
                            ${letter}
                        </div>

                        <div
                            class="print-picture"
                        >
                            ${item.emoji}
                        </div>

                        <div
                            class="print-word"
                        >
                            ${item.word}
                        </div>

                        <div
                            class="print-sound"
                        >
                            Beginning sound:
                            / ${letter.toLowerCase()} /
                        </div>

                    </article>

                `;

            }


            /* -----------------------------------------
               INITIAL SOUND SORT
            ----------------------------------------- */

            else if (
                type === "sort"
            ) {

                cards += `

                    <article
                        class="sound-print-card"
                    >

                        <div
                            class="print-label"
                        >
                            SORT BY BEGINNING SOUND
                        </div>

                        <div
                            class="print-letter"
                        >
                            ${letter}
                        </div>

                        <div
                            class="print-picture"
                        >
                            ${item.emoji}
                        </div>

                        <div
                            class="print-word"
                        >
                            ${item.word}
                        </div>

                        <div
                            class="print-sound"
                        >
                            / ${letter.toLowerCase()} /
                        </div>

                    </article>

                `;

            }


            /* -----------------------------------------
               CLIP CARDS
            ----------------------------------------- */

            else if (
                type === "clip"
            ) {

                cards += `

                    <article
                        class="sound-print-card clip-card"
                    >

                        <div
                            class="print-label"
                        >
                            WHICH WORD STARTS WITH
                        </div>

                        <div
                            class="print-letter"
                        >
                            ${letter}
                        </div>

                        <div
                            class="print-picture"
                        >
                            ${item.emoji}
                        </div>

                        <div
                            class="print-word"
                        >
                            ${item.word}
                        </div>

                        <div
                            class="clip-options"
                        >

                            <span>
                                ☐ YES
                            </span>

                            <span>
                                ☐ NO
                            </span>

                        </div>

                    </article>

                `;

            }


            /* -----------------------------------------
               PHONICS ACTIVITIES
            ----------------------------------------- */

            else if (
                type === "phonics"
            ) {

                cards += `

                    <article
                        class="sound-print-card"
                    >

                        <div
                            class="print-letter"
                        >
                            ${letter}
                        </div>

                        <div
                            class="print-sound"
                        >
                            / ${letter.toLowerCase()} /
                        </div>

                        <div
                            class="print-picture"
                        >
                            ${item.emoji}
                        </div>

                        <div
                            class="print-word"
                        >
                            ${item.word}
                        </div>

                        <div
                            class="print-label"
                        >
                            SAY IT • HEAR IT • MATCH IT
                        </div>

                    </article>

                `;

            }

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

function buildPrintableDocument() {

    const result =
        buildCards();


    if (!result) {

        alert(
            "Please select at least one beginning sound first."
        );

        return null;

    }


    const title =
        resourceNames[result.type];


    return `<!DOCTYPE html>

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
        #fffaf3;

    color:
        #26353c;

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
        0 0 7px;

    font-size:
        25px;

}


.print-header p {

    margin:
        0;

    color:
        #5d6c73;

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


.sound-print-card {

    min-height:
        3.25in;

    padding:
        20px;

    border:
        2px solid #e5ddd3;

    border-radius:
        20px;

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


.print-letter {

    font-size:
        80px;

    line-height:
        .9;

    font-weight:
        800;

}


.print-picture {

    margin:
        12px 0;

    font-size:
        68px;

    line-height:
        1;

}


.print-word {

    font-size:
        22px;

    font-weight:
        700;

}


.print-sound {

    margin-top:
        8px;

    color:
        #66747a;

    font-size:
        13px;

}


.print-label {

    margin-top:
        13px;

    color:
        #708f73;

    font-size:
        9px;

    font-weight:
        800;

    letter-spacing:
        .06em;

}


.clip-options {

    display:
        flex;

    gap:
        25px;

    margin-top:
        18px;

    font-size:
        13px;

    font-weight:
        700;

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

</html>`;

}
