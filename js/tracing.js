/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   TRACING PRACTICE
   FILE: js/tracing.js
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

    const choices =
        document.querySelectorAll(
            ".practice-choice"
        );


    const practiceType =
        document.getElementById(
            "practiceType"
        );


    const selectAll =
        document.getElementById(
            "selectAll"
        );


    const clearAll =
        document.getElementById(
            "clearAll"
        );


    const status =
        document.getElementById(
            "builderStatus"
        );


    const downloadSet =
        document.getElementById(
            "downloadSet"
        );


    const printSet =
        document.getElementById(
            "printSet"
        );



    /* =====================================================
       PRACTICE NAMES
    ===================================================== */

    const practiceNames = {

        horizontal:
            "Horizontal Lines",

        vertical:
            "Vertical Lines",

        curved:
            "Curved Lines",

        zigzag:
            "Zigzag Lines",

        circle:
            "Circle Tracing",

        square:
            "Square Tracing",

        triangle:
            "Triangle Tracing",

        path:
            "Follow the Path"

    };



    /* =====================================================
       RESOURCE TYPE NAMES
    ===================================================== */

    const typeNames = {

        lines:
            "Pre Writing Lines",

        shapes:
            "Shape Tracing",

        letters:
            "Letter Formation",

        motor:
            "Fine Motor Practice"

    };



    /* =====================================================
       GET SELECTED PRACTICE
    ===================================================== */

    function getSelectedPractice() {

        return Array.from(
            choices
        )
        .filter(function (button) {

            return button.classList.contains(
                "selected"
            );

        })
        .map(function (button) {

            return button.dataset.practice;

        });

    }



    /* =====================================================
       UPDATE BUILDER STATUS
    ===================================================== */

    function updateStatus() {

        if (!status) {
            return;
        }


        const selected =
            getSelectedPractice();


        if (
            selected.length === 0
        ) {

            status.textContent =
                "No practice activities selected.";

            return;

        }


        status.textContent =
            selected.length +
            " practice " +
            (
                selected.length === 1
                    ? "activity"
                    : "activities"
            ) +
            " selected.";

    }



    /* =====================================================
       INDIVIDUAL PRACTICE SELECTION
    ===================================================== */

    choices.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const isSelected =
                        button.classList.toggle(
                            "selected"
                        );


                    button.setAttribute(
                        "aria-pressed",
                        String(isSelected)
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

                choices.forEach(
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

                choices.forEach(
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
                        practiceType &&
                        type
                    ) {

                        practiceType.value =
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
       TRACE GRAPHICS
    ===================================================== */

    function getTraceGraphic(type) {

        switch (type) {


            case "horizontal":

                return `
                    <div class="line"></div>
                `;


            case "vertical":

                return `
                    <div class="vertical"></div>
                `;


            case "curved":

                return `
                    <div class="curved"></div>
                `;


            case "zigzag":

                return `
                    <div class="zigzag">
                        /\\/\\/\\
                    </div>
                `;


            case "circle":

                return `
                    <div class="shape circle"></div>
                `;


            case "square":

                return `
                    <div class="shape"></div>
                `;


            case "triangle":

                return `
                    <div class="triangle"></div>
                `;


            case "path":

                return `
                    <div class="path"></div>
                `;


            default:

                return `
                    <div class="line"></div>
                `;

        }

    }



    /* =====================================================
       CREATE PRINTABLE DOCUMENT
    ===================================================== */

    function createPrintable() {

        const selected =
            getSelectedPractice();


        if (
            selected.length === 0
        ) {

            alert(
                "Please select at least one practice activity first."
            );

            return null;

        }


        const type =
            practiceType
                ? practiceType.value
                : "lines";


        let cards = "";


        selected.forEach(
            function (item) {

                const name =
                    practiceNames[item] ||
                    item;


                cards += `

                    <article class="trace-card">

                        <h2>
                            ${name}
                        </h2>

                        <div class="trace-area">

                            <div class="trace-example">

                                ${getTraceGraphic(item)}

                            </div>


                            <div class="trace-repeat">

                                ${getTraceGraphic(item)}

                                ${getTraceGraphic(item)}

                            </div>

                        </div>


                        <p>
                            Trace carefully.
                            Take your time.
                        </p>

                    </article>

                `;

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
    ${typeNames[type]}
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
        #26353c;

    font-family:
        Arial,
        sans-serif;

}


.print-title {

    margin-bottom:
        22px;

    text-align:
        center;

}


.print-title h1 {

    margin:
        0 0 5px;

    font-size:
        26px;

}


.print-title p {

    margin:
        0;

    color:
        #617078;

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


.trace-card {

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

    text-align:
        center;

    page-break-inside:
        avoid;

}


.trace-card h2 {

    margin:
        0 0 16px;

    font-size:
        19px;

}


.trace-area {

    display:
        grid;

    gap:
        15px;

}


.trace-example {

    min-height:
        55px;

}


.trace-repeat {

    display:
        flex;

    justify-content:
        space-around;

    align-items:
        center;

    gap:
        12px;

}


.trace-card p {

    margin:
        15px 0 0;

    color:
        #617078;

    font-size:
        11px;

}


/* HORIZONTAL */

.line {

    width:
        100%;

    height:
        4px;

    border-radius:
        99px;

    background:
        #82a9c0;

}


/* VERTICAL */

.vertical {

    width:
        4px;

    height:
        55px;

    margin:
        auto;

    background:
        #91aa8f;

}


/* CURVED */

.curved {

    width:
        85px;

    height:
        45px;

    margin:
        auto;

    border:
        4px dotted #d98b7d;

    border-bottom:
        0;

    border-radius:
        80px 80px 0 0;

}


/* ZIGZAG */

.zigzag {

    color:
        #d8b36a;

    font-size:
        42px;

    font-weight:
        900;

    letter-spacing:
        7px;

}


/* SHAPES */

.shape {

    display:
        inline-block;

    width:
        55px;

    height:
        55px;

    border:
        4px dotted #aaa1c7;

}


.circle {

    border-radius:
        50%;

}


/* TRIANGLE */

.triangle {

    width:
        0;

    height:
        0;

    margin:
        auto;

    border-left:
        31px solid transparent;

    border-right:
        31px solid transparent;

    border-bottom:
        55px solid #aaa1c7;

}


/* PATH */

.path {

    width:
        100%;

    height:
        50px;

    border:
        4px dotted #82a9c0;

    border-radius:
        50%;

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


<div class="print-title">

    <h1>
        ${typeNames[type]}
    </h1>

    <p>
        Little Explorers Learning Hub
    </p>

</div>


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

    if (downloadSet) {

        downloadSet.addEventListener(
            "click",
            function () {

                const documentText =
                    createPrintable();


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


                const downloadURL =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    downloadURL;


                link.download =
                    "little-explorers-tracing-practice.html";


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
                            downloadURL
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

    if (printSet) {

        printSet.addEventListener(
            "click",
            function () {

                const documentText =
                    createPrintable();


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
       INITIALIZE
    ===================================================== */

    updateStatus();


});
