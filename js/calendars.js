/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   CALENDAR RESOURCES
   calendars.js
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


    mainNav.querySelectorAll("a").forEach(
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
   RESOURCE FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const resourceCards =
    document.querySelectorAll(
        ".resource-card"
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


                resourceCards.forEach(
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
   RESOURCE PRINT BUTTONS
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


                const card =
                    button.closest(
                        ".resource-card"
                    );


                if (!card) {

                    return;

                }


                const preview =
                    card.querySelector(
                        ".resource-preview"
                    );


                if (!preview) {

                    return;

                }


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

                                width:
                                    100%;

                                min-height:
                                    100%;

                                margin:
                                    0;

                                padding:
                                    0;

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

                            }

                            .print-page {

                                width:
                                    7.5in;

                                min-height:
                                    9.5in;

                                display:
                                    flex;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                            }

                            .calendar-print {

                                width:
                                    7in;

                                min-height:
                                    7in;

                                padding:
                                    .45in;

                                border:
                                    8px solid #FFFFFF;

                                outline:
                                    5px solid #65558F;

                                border-radius:
                                    28px;

                                background:
                                    #65558F;

                                color:
                                    #FFFFFF;

                                text-align:
                                    center;

                            }

                            .calendar-print .title {

                                margin-bottom:
                                    15px;

                                font-size:
                                    14px;

                                font-weight:
                                    800;

                                letter-spacing:
                                    3px;

                            }

                            .calendar-print h1 {

                                margin:
                                    0 0 12px;

                                font-size:
                                    42px;

                            }

                            .calendar-print h2 {

                                margin:
                                    0 0 30px;

                                font-size:
                                    30px;

                            }

                            .calendar-print .content-box {

                                min-height:
                                    260px;

                                display:
                                    flex;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                                border:
                                    2px dashed rgba(255,255,255,.6);

                                border-radius:
                                    18px;

                                background:
                                    rgba(255,255,255,.12);

                                font-size:
                                    24px;

                            }

                            .calendar-print .footer {

                                margin-top:
                                    25px;

                                font-size:
                                    14px;

                                font-weight:
                                    700;

                            }

                        </style>

                    </head>

                    <body>

                        <div class="print-page">

                            <div class="calendar-print">

                                <div class="title">
                                    LITTLE EXPLORERS
                                </div>

                                <h1>
                                    ${resourceName}
                                </h1>

                                <h2>
                                    CLASSROOM RESOURCE
                                </h2>

                                <div class="content-box">

                                    Add classroom
                                    information here

                                </div>

                                <div class="footer">

                                    Print • Laminate • Display

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
