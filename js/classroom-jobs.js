/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   CLASSROOM JOB CHARTS
   classroom-jobs.js
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
   JOB FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const jobCards =
    document.querySelectorAll(
        ".job-card"
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


                jobCards.forEach(
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
   INDIVIDUAL JOB PRINTING
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

                            }

                            .page {

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

                            .job-card {

                                width:
                                    6.8in;

                                min-height:
                                    7.5in;

                                display:
                                    flex;

                                flex-direction:
                                    column;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                                padding:
                                    .6in;

                                border:
                                    10px solid #FFFFFF;

                                outline:
                                    6px solid #65558F;

                                border-radius:
                                    30px;

                                background:
                                    #F3F0FA;

                                text-align:
                                    center;

                            }

                            .star {

                                margin-bottom:
                                    20px;

                                font-size:
                                    70px;

                            }

                            .brand {

                                margin-bottom:
                                    12px;

                                color:
                                    #65558F;

                                font-size:
                                    13px;

                                font-weight:
                                    900;

                                letter-spacing:
                                    3px;

                            }

                            h1 {

                                margin:
                                    0 0 18px;

                                color:
                                    #2F2F3A;

                                font-size:
                                    42px;

                            }

                            .helper {

                                width:
                                    100%;

                                padding:
                                    25px;

                                border:
                                    2px dashed #65558F;

                                border-radius:
                                    20px;

                                background:
                                    #FFFFFF;

                            }

                            .helper-label {

                                margin-bottom:
                                    10px;

                                color:
                                    #6A6F7C;

                                font-size:
                                    14px;

                                font-weight:
                                    800;

                                text-transform:
                                    uppercase;

                                letter-spacing:
                                    2px;

                            }

                            .helper-line {

                                height:
                                    50px;

                                border-bottom:
                                    2px solid #65558F;

                            }

                            .footer {

                                margin-top:
                                    25px;

                                color:
                                    #65558F;

                                font-size:
                                    12px;

                                font-weight:
                                    800;

                                letter-spacing:
                                    1px;

                            }

                        </style>

                    </head>

                    <body>

                        <div class="page">

                            <div class="job-card">

                                <div class="star">
                                    ⭐
                                </div>

                                <div class="brand">
                                    LITTLE EXPLORERS
                                    LEARNING HUB
                                </div>

                                <h1>
                                    ${resourceName}
                                </h1>

                                <div class="helper">

                                    <div class="helper-label">
                                        My Helper
                                    </div>

                                    <div class="helper-line"></div>

                                </div>

                                <div class="footer">
                                    I HELP OUR CLASSROOM GROW
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
