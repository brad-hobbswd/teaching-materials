/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   TEACHER FORMS
   teacher-forms.js
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
   FORM FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const formCards =
    document.querySelectorAll(
        ".form-card"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                formCards.forEach(
                    function (card) {

                        const category =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   PRINT PREVIEW
========================================================= */

const printPreviewBtn =
    document.getElementById(
        "printPreviewBtn"
    );


if (printPreviewBtn) {

    printPreviewBtn.addEventListener(
        "click",
        function () {

            window.print();

        }
    );

}


/* =========================================================
   INDIVIDUAL FORM PRINTING
========================================================= */

const resourceButtons =
    document.querySelectorAll(
        ".resource-action"
    );


resourceButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const resourceName =
                    button.dataset.resource;


                const printWindow =
                    window.open(
                        "",
                        "_blank",
                        "width=900,height=900"
                    );


                if (!printWindow) {

                    return;

                }


                printWindow.document.write(`

                    <!DOCTYPE html>

                    <html lang="en">

                    <head>

                        <meta charset="UTF-8">

                        <title>
                            ${resourceName}
                        </title>

                        <style>

                            @page {

                                size:
                                    letter portrait;

                                margin:
                                    .5in;

                            }

                            * {

                                box-sizing:
                                    border-box;

                            }

                            html,
                            body {

                                margin:
                                    0;

                                padding:
                                    0;

                                width:
                                    100%;

                                min-height:
                                    100%;

                            }

                            body {

                                display:
                                    flex;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                                font-family:
                                    Arial,
                                    sans-serif;

                                background:
                                    #ffffff;

                            }

                            .page {

                                width:
                                    7.5in;

                                min-height:
                                    9.5in;

                                padding:
                                    .35in;

                            }

                            .form-sheet {

                                width:
                                    100%;

                                min-height:
                                    8.8in;

                                padding:
                                    .45in;

                                border:
                                    4px solid #65558F;

                                border-radius:
                                    18px;

                            }

                            .brand {

                                color:
                                    #65558F;

                                font-size:
                                    12px;

                                font-weight:
                                    900;

                                letter-spacing:
                                    2px;

                                text-align:
                                    center;

                            }

                            h1 {

                                margin:
                                    12px 0 28px;

                                color:
                                    #2F2F3A;

                                font-family:
                                    Arial,
                                    sans-serif;

                                font-size:
                                    30px;

                                text-align:
                                    center;

                            }

                            .field {

                                margin-bottom:
                                    22px;

                            }

                            .field-label {

                                display:
                                    block;

                                margin-bottom:
                                    8px;

                                color:
                                    #4A4E59;

                                font-size:
                                    12px;

                                font-weight:
                                    800;

                                text-transform:
                                    uppercase;

                                letter-spacing:
                                    1px;

                            }

                            .line {

                                height:
                                    34px;

                                border-bottom:
                                    1px solid #777777;

                            }

                            .large-box {

                                height:
                                    150px;

                                border:
                                    1px solid #BBBBBB;

                            }

                            .two-column {

                                display:
                                    grid;

                                grid-template-columns:
                                    1fr 1fr;

                                gap:
                                    25px;

                            }

                            .footer {

                                margin-top:
                                    35px;

                                padding-top:
                                    15px;

                                border-top:
                                    1px solid #DDDDDD;

                                color:
                                    #777777;

                                font-size:
                                    10px;

                                text-align:
                                    center;

                            }

                        </style>

                    </head>

                    <body>

                        <div class="page">

                            <div class="form-sheet">

                                <div class="brand">
                                    LITTLE EXPLORERS
                                    LEARNING HUB
                                </div>

                                <h1>
                                    ${resourceName}
                                </h1>

                                <div class="two-column">

                                    <div class="field">

                                        <span class="field-label">
                                            Date
                                        </span>

                                        <div class="line"></div>

                                    </div>

                                    <div class="field">

                                        <span class="field-label">
                                            Teacher
                                        </span>

                                        <div class="line"></div>

                                    </div>

                                </div>

                                <div class="field">

                                    <span class="field-label">
                                        Child / Classroom
                                    </span>

                                    <div class="line"></div>

                                </div>

                                <div class="field">

                                    <span class="field-label">
                                        Notes
                                    </span>

                                    <div class="large-box"></div>

                                </div>

                                <div class="field">

                                    <span class="field-label">
                                        Follow Up
                                    </span>

                                    <div class="large-box"></div>

                                </div>

                                <div class="footer">
                                    Teacher Documentation Form
                                </div>

                            </div>

                        </div>

                    </body>

                    </html>

                `);


                printWindow.document.close();

                printWindow.focus();


                setTimeout(
                    function () {

                        printWindow.print();

                    },
                    300
                );

            }
        );

    }
);


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
