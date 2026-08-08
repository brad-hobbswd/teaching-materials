/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   PLANNING TEMPLATES
   planning.js
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");

const templateModal =
    document.getElementById("templateModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const closeTemplate =
    document.getElementById("closeTemplate");

const modalTitle =
    document.getElementById("modalTitle");

const modalLabel =
    document.getElementById("modalLabel");

const modalDescription =
    document.getElementById("modalDescription");

const templatePreview =
    document.getElementById("templatePreview");

const printTemplate =
    document.getElementById("printTemplate");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNavigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


document
    .querySelectorAll(".main-navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (mainNavigation) {

                    mainNavigation.classList.remove("open");

                }

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================================================
   TEMPLATE DATA
========================================================= */

const templates = {

    lesson: {

        label:
            "LESSON PLAN TEMPLATE",

        title:
            "Lesson Plan",

        description:
            "Use this planning structure to organize an intentional learning experience from beginning to reflection.",

        rows: [

            ["Teacher", "Enter teacher name"],

            ["Date", "Enter date"],

            ["Study / Topic", "Enter study or topic"],

            ["Learning Objective", "What should children learn or experience?"],

            ["Materials", "List materials and resources"],

            ["Introduction", "How will you introduce the experience?"],

            ["Teaching Strategy", "What will you model, ask, demonstrate, or scaffold?"],

            ["Child Experience", "What will children do?"],

            ["Differentiation", "How will you support individual needs?"],

            ["Assessment / Observation", "What will you look for?"],

            ["Reflection", "What happened and what comes next?"]

        ]

    },


    weekly: {

        label:
            "WEEKLY PLANNING TEMPLATE",

        title:
            "Weekly Planning Page",

        description:
            "Plan the learning experiences, materials, routines, and intentional teaching opportunities for the entire week.",

        rows: [

            ["Week of", "Enter week"],

            ["Weekly Focus", "Enter study, topic, or focus"],

            ["Monday", "Learning experiences and notes"],

            ["Tuesday", "Learning experiences and notes"],

            ["Wednesday", "Learning experiences and notes"],

            ["Thursday", "Learning experiences and notes"],

            ["Friday", "Learning experiences and notes"],

            ["Materials Needed", "List materials for the week"],

            ["Family Connection", "Family engagement opportunity"],

            ["Reflection", "What worked? What should continue?"]

        ]

    },


    curriculum: {

        label:
            "CURRICULUM MAP",

        title:
            "Curriculum Mapping Template",

        description:
            "Map intentional learning experiences across studies, developmental domains, objectives, and standards.",

        rows: [

            ["Study / Theme", "Enter study or theme"],

            ["Time Frame", "Enter dates"],

            ["Learning Goals", "Identify learning goals"],

            ["Language / Literacy", "Experiences and objectives"],

            ["Mathematics", "Experiences and objectives"],

            ["Science", "Experiences and objectives"],

            ["Social Emotional", "Experiences and objectives"],

            ["Physical Development", "Experiences and objectives"],

            ["Creative Expression", "Experiences and objectives"],

            ["Standards / Framework", "Record relevant connections"],

            ["Assessment Evidence", "What evidence will demonstrate learning?"]

        ]

    },


    calendar: {

        label:
            "PLANNING CALENDAR",

        title:
            "Monthly Planning Calendar",

        description:
            "Use this template to organize studies, classroom events, family engagement, important dates, and instructional priorities.",

        rows: [

            ["Month", "Enter month and year"],

            ["Week 1", "Studies, events, and priorities"],

            ["Week 2", "Studies, events, and priorities"],

            ["Week 3", "Studies, events, and priorities"],

            ["Week 4", "Studies, events, and priorities"],

            ["Week 5", "Studies, events, and priorities"],

            ["Family Events", "Family engagement opportunities"],

            ["Important Dates", "Birthdays, celebrations, deadlines"],

            ["Materials", "Materials to prepare"],

            ["Notes", "Additional planning notes"]

        ]

    },


    schedule: {

        label:
            "CLASSROOM SCHEDULE",

        title:
            "Daily Classroom Schedule",

        description:
            "Create a predictable daily rhythm that supports learning, routines, transitions, relationships, and children's independence.",

        rows: [

            ["Classroom", "Enter classroom"],

            ["Opening", "Arrival and welcome"],

            ["Morning Routine", "Routine activities"],

            ["Group Experience", "Large-group learning"],

            ["Learning Centers", "Center exploration"],

            ["Small Group", "Intentional small-group instruction"],

            ["Outdoor / Gross Motor", "Movement and outdoor experience"],

            ["Meals", "Breakfast, lunch, or snack"],

            ["Rest", "Rest and quiet experience"],

            ["Closing", "Reflection and departure"]

        ]

    },


    reflection: {

        label:
            "TEACHER REFLECTION",

        title:
            "Planning Reflection",

        description:
            "Reflect on children's learning, your teaching decisions, and the next steps for intentional planning.",

        rows: [

            ["Date", "Enter date"],

            ["Experience", "What experience did you provide?"],

            ["What Happened?", "Describe what children demonstrated."],

            ["What Worked?", "Identify successful strategies."],

            ["What Did Children Need?", "Identify support or challenges."],

            ["What Did I Learn?", "What did the observation tell you?"],

            ["What Will I Change?", "Identify adjustments."],

            ["Next Steps", "What should happen next?"],

            ["Family Connection", "Is there information to share with families?"],

            ["Additional Notes", "Additional reflection"]

        ]

    }

};


/* =========================================================
   OPEN TEMPLATE
========================================================= */

function openTemplate(templateKey) {

    const template =
        templates[templateKey];

    if (!template || !templateModal) {
        return;
    }

    modalLabel.textContent =
        template.label;

    modalTitle.textContent =
        template.title;

    modalDescription.textContent =
        template.description;


    let html = `

        <div class="preview-header">

            <h3>
                ${template.title}
            </h3>

        </div>

    `;


    template.rows.forEach(row => {

        html += `

            <div class="preview-row">

                <strong>
                    ${row[0]}
                </strong>

                <span>
                    ${row[1]}
                </span>

            </div>

        `;

    });


    templatePreview.innerHTML =
        html;


    templateModal.classList.add("open");

    templateModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   TEMPLATE BUTTONS
========================================================= */

document
    .querySelectorAll(".card-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const templateKey =
                    button.dataset.template;

                openTemplate(templateKey);

            }
        );

    });


/* =========================================================
   CLOSE TEMPLATE
========================================================= */

function closeModal() {

    if (!templateModal) {
        return;
    }

    templateModal.classList.remove("open");

    templateModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (closeTemplate) {

    closeTemplate.addEventListener(
        "click",
        closeModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            templateModal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   PRINT TEMPLATE
========================================================= */

if (printTemplate) {

    printTemplate.addEventListener(
        "click",
        () => {

            const title =
                modalTitle.textContent;

            const preview =
                templatePreview.innerHTML;


            const printWindow =
                window.open(
                    "",
                    "_blank",
                    "width=900,height=700"
                );


            if (!printWindow) {

                alert(
                    "Please allow pop-ups to print this template."
                );

                return;

            }


            printWindow.document.write(`

                <!DOCTYPE html>

                <html lang="en">

                <head>

                    <meta charset="UTF-8">

                    <title>
                        ${title}
                    </title>

                    <style>

                        * {
                            box-sizing: border-box;
                        }

                        body {

                            font-family:
                                Arial,
                                sans-serif;

                            color:
                                #29312d;

                            padding:
                                40px;

                            line-height:
                                1.5;

                        }

                        h1 {

                            font-family:
                                Georgia,
                                serif;

                            color:
                                #244638;

                            margin-bottom:
                                30px;

                        }

                        .preview-header {

                            border-bottom:
                                2px solid #315c4b;

                            padding-bottom:
                                12px;

                            margin-bottom:
                                20px;

                        }

                        .preview-header h3 {

                            font-family:
                                Georgia,
                                serif;

                            color:
                                #244638;

                        }

                        .preview-row {

                            display:
                                grid;

                            grid-template-columns:
                                30% 70%;

                            min-height:
                                55px;

                            border:
                                1px solid #d8d2c7;

                            border-bottom:
                                0;

                        }

                        .preview-row:last-child {

                            border-bottom:
                                1px solid #d8d2c7;

                        }

                        .preview-row strong {

                            padding:
                                14px;

                            background:
                                #dfeae3;

                        }

                        .preview-row span {

                            padding:
                                14px;

                        }

                        @media print {

                            body {
                                padding:
                                    20px;
                            }

                        }

                    </style>

                </head>

                <body>

                    <h1>
                        ${title}
                    </h1>

                    ${preview}

                </body>

                </html>

            `);


            printWindow.document.close();

            printWindow.focus();

            setTimeout(
                () => {

                    printWindow.print();

                    printWindow.close();

                },
                300
            );

        }

    );


/* =========================================================
   INTERSECTION REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".planning-card, .cycle-step, .principle"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(18px)";

        element.style.transition =
            "opacity 0.55s ease, transform 0.55s ease";

        observer.observe(element);

    });

}
