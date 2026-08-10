/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   NEWSLETTER TEMPLATES
   newsletters.js
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
   NEWSLETTER FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const newsletterCards =
    document.querySelectorAll(
        ".newsletter-card"
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


                newsletterCards.forEach(
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
   TEMPLATE ACTION
========================================================= */

const templateButtons =
    document.querySelectorAll(
        ".template-action"
    );


templateButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const templateName =
                    button.dataset.template;


                const card =
                    button.closest(
                        ".newsletter-card"
                    );


                if (!card) {

                    return;

                }


                const preview =
                    card.querySelector(
                        ".template-preview"
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
                            ${templateName}
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

                                font-family:
                                    Arial,
                                    sans-serif;

                            }

                            .print-page {

                                width:
                                    7.5in;

                                min-height:
                                    9.5in;

                                margin:
                                    0 auto;

                                padding:
                                    .3in;

                            }

                            .newsletter {

                                width:
                                    100%;

                                min-height:
                                    8.7in;

                                padding:
                                    .4in;

                                border:
                                    4px solid #65558F;

                                background:
                                    #ffffff;

                            }

                            .header {

                                padding:
                                    .3in;

                                background:
                                    #65558F;

                                color:
                                    #ffffff;

                                text-align:
                                    center;

                            }

                            .header span {

                                display:
                                    block;

                                font-size:
                                    11px;

                                font-weight:
                                    800;

                                letter-spacing:
                                    3px;

                            }

                            .header h1 {

                                margin:
                                    8px 0;

                                font-size:
                                    32px;

                            }

                            .month {

                                padding:
                                    15px;

                                color:
                                    #65558F;

                                font-size:
                                    22px;

                                font-weight:
                                    800;

                                text-align:
                                    center;

                            }

                            .photo {

                                height:
                                    150px;

                                display:
                                    flex;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                                margin-bottom:
                                    20px;

                                border:
                                    2px dashed #CFCFE0;

                                background:
                                    #F3F0FA;

                                color:
                                    #65558F;

                                font-size:
                                    18px;

                            }

                            .columns {

                                display:
                                    grid;

                                grid-template-columns:
                                    1fr 1fr;

                                gap:
                                    20px;

                            }

                            .box {

                                min-height:
                                    150px;

                                padding:
                                    18px;

                                border:
                                    1px solid #E4E7F0;

                            }

                            .box h2 {

                                margin:
                                    0 0 12px;

                                color:
                                    #4F4372;

                                font-size:
                                    15px;

                            }

                            .lines {

                                height:
                                    8px;

                                margin:
                                    12px 0;

                                border-radius:
                                    20px;

                                background:
                                    #E4E7F0;

                            }

                            .lines.short {

                                width:
                                    65%;

                            }

                            .footer {

                                margin-top:
                                    20px;

                                padding:
                                    15px;

                                background:
                                    #F3F0FA;

                                color:
                                    #4F4372;

                                font-size:
                                    12px;

                                text-align:
                                    center;

                            }

                        </style>

                    </head>

                    <body>

                        <div class="print-page">

                            <div class="newsletter">

                                <div class="header">

                                    <span>
                                        LITTLE EXPLORERS
                                    </span>

                                    <h1>
                                        FAMILY NEWS
                                    </h1>

                                    <span>
                                        MONTHLY CLASSROOM NEWSLETTER
                                    </span>

                                </div>

                                <div class="month">
                                    MONTH / YEAR
                                </div>

                                <div class="photo">
                                    Add classroom photo here
                                </div>

                                <div class="columns">

                                    <div class="box">

                                        <h2>
                                            WHAT WE ARE LEARNING
                                        </h2>

                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                        <div class="lines short"></div>

                                    </div>

                                    <div class="box">

                                        <h2>
                                            IMPORTANT DATES
                                        </h2>

                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                        <div class="lines short"></div>

                                    </div>

                                    <div class="box">

                                        <h2>
                                            FAMILY CONNECTION
                                        </h2>

                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                        <div class="lines short"></div>

                                    </div>

                                    <div class="box">

                                        <h2>
                                            REMINDERS
                                        </h2>

                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                        <div class="lines short"></div>

                                    </div>

                                </div>

                                <div class="footer">
                                    We are growing and learning together!
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
