/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   LEARNING CENTER SIGNS
   center-signs.js
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
   SIGN FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const signCards =
    document.querySelectorAll(
        ".sign-card"
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


                signCards.forEach(
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
   INDIVIDUAL SIGN PRINTING
========================================================= */

const printButtons =
    document.querySelectorAll(
        ".print-sign-btn"
    );


printButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const signName =
                    button.dataset.sign;


                const card =
                    button.closest(
                        ".sign-card"
                    );


                if (!card) {

                    return;

                }


                const sign =
                    card.querySelector(
                        ".printable-sign"
                    );


                if (!sign) {

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
                            ${signName}
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

                                height:
                                    9.5in;

                                display:
                                    flex;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                            }

                            .sign {

                                width:
                                    7in;

                                height:
                                    7in;

                                display:
                                    flex;

                                flex-direction:
                                    column;

                                align-items:
                                    center;

                                justify-content:
                                    center;

                                padding:
                                    1in;

                                border:
                                    12px solid #ffffff;

                                outline:
                                    5px solid #65558F;

                                border-radius:
                                    28px;

                                background:
                                    #65558F;

                                color:
                                    #ffffff;

                                text-align:
                                    center;

                            }

                            .sign span {

                                margin-bottom:
                                    .35in;

                                font-size:
                                    48px;

                            }

                            .sign strong {

                                font-size:
                                    42px;

                                line-height:
                                    1.1;

                                letter-spacing:
                                    .08em;

                            }

                            .sign b {

                                margin-top:
                                    6px;

                                font-size:
                                    60px;

                                line-height:
                                    1.05;

                            }

                        </style>

                    </head>

                    <body>

                        <div class="print-page">

                            ${sign.outerHTML}

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
