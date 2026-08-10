/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   CLASSROOM LABELS
   classroom-labels1.js

   Handles:
   - Mobile navigation
   - Category filtering
   - Label builder
   - Label preview
   - Label size
   - Label icon
   - Use Label buttons
   - Smooth scrolling
   - Footer year
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENT REFERENCES
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mainNav =
        document.getElementById("mainNav");

    const currentYear =
        document.getElementById("currentYear");

    const labelText =
        document.getElementById("labelText");

    const labelDescription =
        document.getElementById("labelDescription");

    const labelIcon =
        document.getElementById("labelIcon");

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

    const previewDescription =
        document.getElementById("previewDescription");

    const categoryButtons =
        document.querySelectorAll(".label-category-card");

    const printableCards =
        document.querySelectorAll(".printable-card");

    const downloadButtons =
        document.querySelectorAll(".download-btn");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    function openMobileMenu() {

        if (!mobileMenu || !mainNav) {
            return;
        }

        mainNav.classList.add("open");

        mobileMenu.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Close navigation"
        );

    }


    function closeMobileMenu() {

        if (!mobileMenu || !mainNav) {
            return;
        }

        mainNav.classList.remove("open");

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }


    function toggleMobileMenu() {

        if (!mainNav) {
            return;
        }

        if (mainNav.classList.contains("open")) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU WHEN NAV LINK IS SELECTED
    ===================================================== */

    if (mainNav) {

        const navigationLinks =
            mainNav.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU WITH ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("open")
            ) {

                closeMobileMenu();

                if (mobileMenu) {

                    mobileMenu.focus();

                }

            }

        }
    );


    /* =====================================================
       CATEGORY FILTERING
    ===================================================== */

    function showAllLabels() {

        printableCards.forEach((card) => {

            card.hidden = false;

            card.style.display = "";

        });

    }


    function filterLabels(category) {

        printableCards.forEach((card) => {

            const cardCategory =
                card.dataset.category;

            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.hidden = false;

                card.style.display = "";

            } else {

                card.hidden = true;

                card.style.display = "none";

            }

        });

        const library =
            document.getElementById(
                "label-library"
            );

        if (library) {

            library.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    categoryButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category ||
                    "all";

                filterLabels(category);

            }
        );

    });


    /* =====================================================
       LABEL BUILDER
    ===================================================== */

    function getLabelText() {

        if (!labelText) {
            return "Blocks";
        }

        const value =
            labelText.value.trim();

        return value || "Blocks";

    }


    function getLabelDescription() {

        if (!labelDescription) {
            return "Building Center";
        }

        const value =
            labelDescription.value.trim();

        return value || "Building Center";

    }


    function getLabelIcon() {

        if (!labelIcon) {
            return "🧩";
        }

        return labelIcon.value || "🧩";

    }


    function getLabelSize() {

        if (!labelSize) {
            return "standard";
        }

        return labelSize.value || "standard";

    }


    function updateLabelPreview() {

        if (!labelPreview) {
            return;
        }


        const text =
            getLabelText();

        const description =
            getLabelDescription();

        const icon =
            getLabelIcon();

        const size =
            getLabelSize();


        /* -----------------------------------------------
           TEXT
        ------------------------------------------------ */

        if (previewText) {

            previewText.textContent =
                text;

        }


        /* -----------------------------------------------
           DESCRIPTION
        ------------------------------------------------ */

        if (previewDescription) {

            previewDescription.textContent =
                description;

        }


        /* -----------------------------------------------
           ICON
        ------------------------------------------------ */

        if (previewIcon) {

            previewIcon.textContent =
                icon;

        }


        /* -----------------------------------------------
           SIZE
        ------------------------------------------------ */

        labelPreview.classList.remove(
            "small",
            "standard",
            "large"
        );

        labelPreview.classList.add(
            size
        );


        /* -----------------------------------------------
           ACCESSIBILITY
        ------------------------------------------------ */

        labelPreview.setAttribute(
            "aria-label",
            `${text}${description ? `, ${description}` : ""}`
        );

    }


    /* =====================================================
       LIVE PREVIEW
    ===================================================== */

    if (labelText) {

        labelText.addEventListener(
            "input",
            updateLabelPreview
        );

    }


    if (labelDescription) {

        labelDescription.addEventListener(
            "input",
            updateLabelPreview
        );

    }


    if (labelIcon) {

        labelIcon.addEventListener(
            "change",
            updateLabelPreview
        );

    }


    if (labelSize) {

        labelSize.addEventListener(
            "change",
            updateLabelPreview
        );

    }


    if (updateLabel) {

        updateLabel.addEventListener(
            "click",
            () => {

                updateLabelPreview();

                if (labelPreview) {

                    labelPreview.classList.add(
                        "preview-updated"
                    );

                    window.setTimeout(
                        () => {

                            labelPreview.classList.remove(
                                "preview-updated"
                            );

                        },
                        350
                    );

                }

            }
        );

    }


    /* =====================================================
       USE LABEL BUTTONS
    ===================================================== */

    function loadLabelIntoBuilder(
        text,
        description = "",
        icon = "🏷️"
    ) {

        if (labelText) {

            labelText.value =
                text;

        }


        if (labelDescription) {

            labelDescription.value =
                description;

        }


        if (labelIcon) {

            const matchingOption =
                Array.from(
                    labelIcon.options
                ).find(
                    (option) =>
                        option.value === icon
                );

            if (matchingOption) {

                labelIcon.value =
                    icon;

            }

        }


        updateLabelPreview();


        const builder =
            document.getElementById(
                "label-builder"
            );

        if (builder) {

            builder.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        if (labelText) {

            window.setTimeout(
                () => {

                    labelText.focus();

                    labelText.select();

                },
                500
            );

        }

    }


    downloadButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const text =
                    button.dataset.label ||
                    "Classroom Label";


                const card =
                    button.closest(
                        ".printable-card"
                    );


                let description =
                    "Classroom Label";


                let icon =
                    "🏷️";


                if (card) {

                    const preview =
                        card.querySelector(
                            ".label-preview"
                        );

                    const previewStrong =
                        card.querySelector(
                            ".label-preview strong"
                        );


                    if (previewStrong) {

                        const labelName =
                            previewStrong.textContent
                                .trim()
                                .toLowerCase();


                        if (
                            labelName.includes("block")
                        ) {

                            icon = "🧩";

                            description =
                                "Building Center";

                        } else if (
                            labelName.includes("book")
                        ) {

                            icon = "📚";

                            description =
                                "Library Center";

                        } else if (
                            labelName.includes("art")
                        ) {

                            icon = "🎨";

                            description =
                                "Creative Area";

                        } else if (
                            labelName.includes("puzzle")
                        ) {

                            icon = "🧠";

                            description =
                                "Puzzle Area";

                        } else if (
                            labelName.includes("science")
                        ) {

                            icon = "🔬";

                            description =
                                "Discovery Center";

                        } else if (
                            labelName.includes("dramatic")
                        ) {

                            icon = "🎭";

                            description =
                                "Dramatic Play";

                        } else if (
                            labelName.includes("writing")
                        ) {

                            icon = "✏️";

                            description =
                                "Writing Center";

                        } else if (
                            labelName.includes("music")
                        ) {

                            icon = "🎵";

                            description =
                                "Music Center";

                        }

                    }

                }


                loadLabelIntoBuilder(
                    text,
                    description,
                    icon
                );

            }
        );

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


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
                    behavior: "smooth",
                    block: "start"
                });


                if (
                    history.pushState
                ) {

                    history.pushState(
                        null,
                        "",
                        targetId
                    );

                }

            }
        );

    });


    /* =====================================================
       CATEGORY CARD KEYBOARD ACCESSIBILITY
    ===================================================== */

    categoryButtons.forEach((button) => {

        button.setAttribute(
            "aria-label",
            `View ${
                button
                    .querySelector(
                        ".feature-content strong"
                    )
                    ?.textContent
                    .trim() ||
                "classroom labels"
            }`
        );

    });


    /* =====================================================
       INITIAL PREVIEW
    ===================================================== */

    updateLabelPreview();


    /* =====================================================
       RESIZE HANDLING
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            window.clearTimeout(
                resizeTimer
            );


            resizeTimer =
                window.setTimeout(
                    () => {

                        if (
                            window.innerWidth >
                            900
                        ) {

                            closeMobileMenu();

                        }

                    },
                    150
                );

        }
    );


    /* =====================================================
       OPTIONAL: ADD FADE-IN TO RESOURCE CARDS
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".highlight-card, " +
            ".label-category-card, " +
            ".printable-card, " +
            ".organization-grid .feature-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       CONSOLE CONFIRMATION
       Useful while developing locally.
    ===================================================== */

    console.log(
        "Little Explorers Learning Hub: Classroom Labels initialized."
    );

});
