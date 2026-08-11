/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   LETTER MATCHING
   FILE: js/letter-matching.js

   Features:
   • Mobile navigation
   • Resource card selection
   • Individual A-Z letter selection
   • Select All
   • Clear
   • Resource type selection
   • Printable preview
   • Print / Save as PDF
   • Download selected printable set
========================================================= */

"use strict";


/* =========================================================
   LETTER DATA
========================================================= */

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LOWERCASE = LETTERS.map(function(letter) {
    return letter.toLowerCase();
});


/* =========================================================
   DOM ELEMENTS
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mainNav =
    document.getElementById("mainNav");

const resourceType =
    document.getElementById("letterResourceType");

const selectAllButton =
    document.getElementById("selectAllLetters");

const clearButton =
    document.getElementById("clearLetters");

const builderStatus =
    document.getElementById("letterBuilderStatus");

const downloadButton =
    document.getElementById("downloadLetterSet");

const printButton =
    document.getElementById("printLetterSet");

const letterChoices =
    Array.from(
        document.querySelectorAll(".letter-choice")
    );

const resourceButtons =
    Array.from(
        document.querySelectorAll(".resource-button")
    );


/* =========================================================
   STATE
========================================================= */

let selectedLetters = [];

let selectedResourceType =
    resourceType
        ? resourceType.value
        : "uppercase";


/* =========================================================
   RESOURCE LABELS
========================================================= */

const RESOURCE_LABELS = {

    uppercase:
        "Upper & Lowercase Matching",

    memory:
        "Memory Games",

    puzzles:
        "Letter Puzzles",

    interactive:
        "Interactive Printables"

};


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (mobileMenu && mainNav) {

    mobileMenu.addEventListener(
        "click",
        function() {

            const isOpen =
                mainNav.classList.toggle(
                    "mobile-open"
                );

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                mainNav.classList.remove(
                    "mobile-open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =========================================================
   RESOURCE TYPE CHANGE
========================================================= */

if (resourceType) {

    resourceType.addEventListener(
        "change",
        function() {

            selectedResourceType =
                resourceType.value;

            updateBuilderStatus();

        }
    );

}


/* =========================================================
   LETTER SELECTION
========================================================= */

letterChoices.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const letter =
                button.dataset.letter;

            if (!letter) {
                return;
            }

            if (
                selectedLetters.includes(letter)
            ) {

                selectedLetters =
                    selectedLetters.filter(
                        function(item) {
                            return item !== letter;
                        }
                    );

                button.classList.remove(
                    "selected"
                );

                button.setAttribute(
                    "aria-pressed",
                    "false"
                );

            } else {

                selectedLetters.push(letter);

                selectedLetters.sort(
                    function(a, b) {
                        return (
                            LETTERS.indexOf(a) -
                            LETTERS.indexOf(b)
                        );
                    }
                );

                button.classList.add(
                    "selected"
                );

                button.setAttribute(
                    "aria-pressed",
                    "true"
                );

            }

            updateBuilderStatus();

        }
    );

});


/* =========================================================
   SELECT ALL LETTERS
========================================================= */

if (selectAllButton) {

    selectAllButton.addEventListener(
        "click",
        function() {

            selectedLetters =
                [...LETTERS];

            letterChoices.forEach(
                function(button) {

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


/* =========================================================
   CLEAR LETTERS
========================================================= */

if (clearButton) {

    clearButton.addEventListener(
        "click",
        function() {

            selectedLetters = [];

            letterChoices.forEach(
                function(button) {

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


/* =========================================================
   RESOURCE CARD BUTTONS
========================================================= */

resourceButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const type =
                button.dataset.type;

            if (
                type &&
                resourceType
            ) {

                resourceType.value =
                    type;

                selectedResourceType =
                    type;

            }

            const builder =
                document.getElementById(
                    "builder"
                );

            if (builder) {

                builder.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

            updateBuilderStatus();

        }
    );

});


/* =========================================================
   UPDATE STATUS
========================================================= */

function updateBuilderStatus() {

    if (!builderStatus) {
        return;
    }


    const resourceName =
        RESOURCE_LABELS[
            selectedResourceType
        ] ||
        "Letter Matching";


    if (
        selectedLetters.length === 0
    ) {

        builderStatus.textContent =
            "No letters selected. Choose one or more letters to create your printable set.";

        return;

    }


    if (
        selectedLetters.length === LETTERS.length
    ) {

        builderStatus.textContent =
            "All 26 letters selected • " +
            resourceName +
            " ready to create.";

        return;

    }


    builderStatus.textContent =
        selectedLetters.length +
        " letter" +
        (
            selectedLetters.length === 1
                ? ""
                : "s"
        ) +
        " selected • " +
        resourceName +
        " ready to create.";

}


/* =========================================================
   CREATE PRINTABLE DOCUMENT
========================================================= */

function createPrintableDocument() {

    if (
        selectedLetters.length === 0
    ) {

        showMessage(
            "Please select at least one letter first."
        );

        return null;

    }


    const resourceName =
        RESOURCE_LABELS[
            selectedResourceType
        ] ||
        "Letter Matching";


    const cards =
        selectedLetters.map(
            function(letter) {

                return createPrintableCard(
                    letter,
                    selectedResourceType
                );

            }
        ).join("");


    return `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>
    ${escapeHtml(resourceName)} |
    Little Explorers Learning Hub
</title>

<style>

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 30px;
        background: #ffffff;
        color: #29363d;
        font-family: Arial, Helvetica, sans-serif;
    }

    .print-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .print-header h1 {
        margin: 0 0 8px;
        font-size: 28px;
    }

    .print-header p {
        margin: 0;
        color: #637179;
        font-size: 14px;
    }

    .print-grid {
        display: grid;
        grid-template-columns:
            repeat(3, 1fr);
        gap: 18px;
    }

    .print-card {
        min-height: 190px;
        padding: 20px;
        border: 2px solid #d9d4cd;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        page-break-inside: avoid;
    }

    .print-card .uppercase {
        font-size: 68px;
        font-weight: 800;
        line-height: 1;
        margin-bottom: 8px;
    }

    .print-card .lowercase {
        font-size: 46px;
        font-weight: 700;
        line-height: 1;
    }

    .print-card .label {
        margin-top: 12px;
        font-size: 12px;
        color: #637179;
        text-transform: uppercase;
        letter-spacing: .08em;
        font-weight: 700;
    }

    .memory-card {
        min-height: 190px;
        border: 2px solid #71688f;
        background: #f0eef7;
    }

    .puzzle-card {
        min-height: 190px;
        border: 2px solid #88aebe;
        background: #edf5f8;
    }

    .interactive-card {
        min-height: 190px;
        border: 2px solid #8da58d;
        background: #edf3eb;
    }

    .match-line {
        width: 80%;
        border-bottom: 2px dashed #c8c0b8;
        margin: 14px auto;
    }

    .cut-line {
        border: 2px dashed #d59a88;
        background: #fffaf3;
    }

    @media print {

        body {
            padding: 10px;
        }

        .print-grid {
            gap: 12px;
        }

        .print-card {
            break-inside: avoid;
        }

    }

    @media (max-width: 700px) {

        .print-grid {
            grid-template-columns: 1fr 1fr;
        }

    }

</style>

</head>

<body>

<div class="print-header">

    <h1>
        ${escapeHtml(resourceName)}
    </h1>

    <p>
        Little Explorers Learning Hub
    </p>

</div>

<div class="print-grid">

    ${cards}

</div>

</body>

</html>`;

}


/* =========================================================
   CREATE INDIVIDUAL PRINTABLE CARD
========================================================= */

function createPrintableCard(
    letter,
    type
) {

    const lowercase =
        letter.toLowerCase();


    if (type === "memory") {

        return `
            <div class="print-card memory-card">

                <div class="uppercase">
                    ${escapeHtml(letter)}
                </div>

                <div class="label">
                    Memory Match
                </div>

            </div>

            <div class="print-card memory-card">

                <div class="lowercase">
                    ${escapeHtml(lowercase)}
                </div>

                <div class="label">
                    Memory Match
                </div>

            </div>
        `;

    }


    if (type === "puzzles") {

        return `
            <div class="print-card puzzle-card">

                <div class="uppercase">
                    ${escapeHtml(letter)}
                </div>

                <div class="match-line"></div>

                <div class="lowercase">
                    ${escapeHtml(lowercase)}
                </div>

                <div class="label">
                    Cut • Match • Connect
                </div>

            </div>
        `;

    }


    if (type === "interactive") {

        return `
            <div class="print-card interactive-card cut-line">

                <div class="uppercase">
                    ${escapeHtml(letter)}
                </div>

                <div class="match-line"></div>

                <div class="lowercase">
                    ${escapeHtml(lowercase)}
                </div>

                <div class="label">
                    Interactive Letter Match
                </div>

            </div>
        `;

    }


    return `
        <div class="print-card">

            <div class="uppercase">
                ${escapeHtml(letter)}
            </div>

            <div class="lowercase">
                ${escapeHtml(lowercase)}
            </div>

            <div class="label">
                Uppercase & Lowercase Match
            </div>

        </div>
    `;

}


/* =========================================================
   DOWNLOAD PRINTABLE SET
========================================================= */

if (downloadButton) {

    downloadButton.addEventListener(
        "click",
        function() {

            const documentContent =
                createPrintableDocument();

            if (!documentContent) {
                return;
            }


            const blob =
                new Blob(
                    [documentContent],
                    {
                        type:
                            "text/html;charset=utf-8"
                    }
                );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");


            const resourceName =
                RESOURCE_LABELS[
                    selectedResourceType
                ] ||
                "letter-matching";


            const safeName =
                resourceName
                    .toLowerCase()
                    .replace(
                        /[^a-z0-9]+/g,
                        "-"
                    )
                    .replace(
                        /^-+|-+$/g,
                        ""
                    );


            link.href =
                url;


            link.download =
                safeName +
                "-printable-set.html";


            document.body.appendChild(
                link
            );


            link.click();


            link.remove();


            setTimeout(
                function() {

                    URL.revokeObjectURL(
                        url
                    );

                },
                1000
            );

        }
    );

}


/* =========================================================
   PRINT / SAVE AS PDF
========================================================= */

if (printButton) {

    printButton.addEventListener(
        "click",
        function() {

            const documentContent =
                createPrintableDocument();

            if (!documentContent) {
                return;
            }


            const printWindow =
                window.open(
                    "",
                    "_blank",
                    "width=1000,height=800"
                );


            if (!printWindow) {

                showMessage(
                    "Your browser blocked the printable window. Please allow pop-ups for this site and try again."
                );

                return;

            }


            printWindow.document.open();

            printWindow.document.write(
                documentContent
            );

            printWindow.document.close();


            printWindow.onload =
                function() {

                    printWindow.focus();

                    printWindow.print();

                };

        }
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(message) {

    if (
        builderStatus
    ) {

        builderStatus.textContent =
            message;

        builderStatus.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;

    }


    alert(message);

}


/* =========================================================
   INITIALIZE
========================================================= */

updateBuilderStatus();
