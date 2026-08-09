/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   CLASSROOM LABELS
   classroom-labels.js
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");

const labelText =
    document.getElementById("labelText");

const labelSubtext =
    document.getElementById("labelSubtext");

const labelCategory =
    document.getElementById("labelCategory");

const labelSize =
    document.getElementById("labelSize");

const updateLabel =
    document.getElementById("updateLabel");

const labelPreview =
    document.getElementById("labelPreview");

const previewIcon =
    document.getElementById("previewIcon");

const previewText =
    document.getElementById("previewText");

const previewSubtext =
    document.getElementById("previewSubtext");

const printPage =
    document.getElementById("printPage");

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
                mainNavigation.classList.toggle(
                    "open"
                );

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

                mainNavigation.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   CATEGORY ICONS
========================================================= */

const categoryIcons = {

    centers:
        "🧩",

    cubbies:
        "🎒",

    shelves:
        "📚",

    supplies:
        "✏️",

    routines:
        "🕐",

    teacher:
        "🍎"

};


/* =========================================================
   UPDATE LABEL
========================================================= */

function updateLabelPreview() {

    const text =
        labelText.value.trim();

    const subtext =
        labelSubtext.value.trim();

    const category =
        labelCategory.value;

    const size =
        labelSize.value;


    previewText.textContent =
        text || "Classroom Label";


    previewSubtext.textContent =
        subtext || "Little Explorers";


    previewIcon.textContent =
        categoryIcons[category] || "🏷️";


    labelPreview.classList.remove(
        "standard",
        "large",
        "small"
    );


    labelPreview.classList.add(
        size
    );

}


if (updateLabel) {

    updateLabel.addEventListener(
        "click",
        updateLabelPreview
    );

}


/* =========================================================
   LIVE PREVIEW
========================================================= */

[
    labelText,
    labelSubtext,
    labelCategory,
    labelSize
].forEach(element => {

    if (!element) {
        return;
    }

    element.addEventListener(
        "input",
        updateLabelPreview
    );

    element.addEventListener(
        "change",
        updateLabelPreview
    );

});


/* =========================================================
   SUGGESTED LABELS
========================================================= */

document
    .querySelectorAll(".suggestion-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const text =
                    button.dataset.label || "";

                const subtext =
                    button.dataset.subtext || "";


                labelText.value =
                    text;

                labelSubtext.value =
                    subtext;


                updateLabelPreview();


                document
                    .getElementById("label-builder")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }
        );

    });


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document
    .querySelectorAll(".label-category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                if (
                    labelCategory &&
                    category
                ) {

                    labelCategory.value =
                        category;

                    updateLabelPreview();

                }


                document
                    .getElementById("label-builder")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }
        );

    });


/* =========================================================
   PRINT PAGE
========================================================= */

if (printPage) {

    printPage.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}


/* =========================================================
   ENTER KEY
========================================================= */

if (labelText) {

    labelText.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                updateLabelPreview();

            }

        }
    );

}


/* =========================================================
   INITIAL PREVIEW
========================================================= */

updateLabelPreview();
