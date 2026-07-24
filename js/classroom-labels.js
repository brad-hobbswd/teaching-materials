/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   Editable Classroom Labels
   Master JavaScript
   Part 1
   Application Foundation
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       ELEMENT CACHE
    ====================================================== */

    const elements = {

        /* Text */

        labelText: document.getElementById("labelText"),
        labelSubtitle: document.getElementById("labelSubtitle"),

        /* Typography */

        fontFamily: document.getElementById("fontFamily"),
        fontSize: document.getElementById("fontSize"),
        fontWeight: document.getElementById("fontWeight"),

        /* Colors */

        textColor: document.getElementById("textColor"),
        backgroundColor: document.getElementById("backgroundColor"),
        borderColor: document.getElementById("borderColor"),

        /* Borders */

        borderWidth: document.getElementById("borderWidth"),
        radius: document.getElementById("radius"),
        borderStyle: document.getElementById("borderStyle"),

        /* Icons */

        labelIcon: document.getElementById("labelIcon"),

        /* Preview */

        previewCard: document.getElementById("labelPreview"),
        previewTitle: document.getElementById("previewTitle"),
        previewSubtitle: document.getElementById("previewSubtitle"),
        previewIcon: document.getElementById("previewIcon"),

        /* Alignment */

        alignButtons: document.querySelectorAll(".align-button"),

        /* Themes */

        themeButtons: document.querySelectorAll(".js-theme"),

        /* Sizes */

        sizeButtons: document.querySelectorAll(".js-size"),

        /* Categories */

        categoryButtons: document.querySelectorAll(".js-category"),

        /* Print Center */

        printLayout: document.getElementById("printLayout"),
        paperSize: document.getElementById("paperSize"),
        orientation: document.getElementById("orientation"),
        paperType: document.getElementById("paperType"),
        margins: document.getElementById("margins"),

        layoutButtons: document.querySelectorAll(".js-layout"),

        previewSheet: document.getElementById("previewSheet"),
        duplicatePage: document.getElementById("duplicatePage"),
        downloadPdf: document.getElementById("downloadPdf"),
        printLabels: document.getElementById("printLabels"),

        /* Builder Buttons */

        printBtn: document.getElementById("printBtn"),
        duplicateBtn: document.getElementById("duplicateBtn"),
        downloadBtn: document.getElementById("downloadBtn"),
        resetBtn: document.getElementById("resetBtn"),

        /* Navigation */

        mobileMenu: document.querySelector(".mobile-menu"),
        navigation: document.querySelector(".main-nav"),

        /* FAQ */

        faqCards: document.querySelectorAll(".faq-card"),

        /* Back To Top */

        backToTop: document.getElementById("backToTop"),

        /* Animation */

        animatedItems: document.querySelectorAll(".fade-up, .scale-in")

    };

    /* ======================================================
       DEFAULT SETTINGS
    ====================================================== */

    const defaults = {

        title: "Reading Center",

        subtitle: "Books and Stories",

        icon: "📚",

        fontFamily: "Fredoka",

        fontSize: 34,

        fontWeight: "700",

        textColor: "#2b2b2b",

        backgroundColor: "#ffffff",

        borderColor: "#4CAF50",

        borderWidth: 3,

        borderRadius: 20,

        borderStyle: "solid",

        alignment: "center",

        theme: "custom",

        size: "medium",

        layout: "12"

    };

    /* ======================================================
       APPLICATION STATE
    ====================================================== */

    const state = {

        ...defaults

    };

    /* ======================================================
       INITIALIZE APPLICATION
    ====================================================== */

    initialize();

    function initialize() {

        loadDefaults();

        bindEvents();

        refreshPreview();

        console.log("Little Explorers Classroom Label Studio Loaded");

    }

    /* ======================================================
       LOAD DEFAULT VALUES
    ====================================================== */

    function loadDefaults() {

        if (elements.labelText)
            elements.labelText.value = state.title;

        if (elements.labelSubtitle)
            elements.labelSubtitle.value = state.subtitle;

        if (elements.fontFamily)
            elements.fontFamily.value = state.fontFamily;

        if (elements.fontSize)
            elements.fontSize.value = state.fontSize;

        if (elements.fontWeight)
            elements.fontWeight.value = "Bold";

        if (elements.textColor)
            elements.textColor.value = state.textColor;

        if (elements.backgroundColor)
            elements.backgroundColor.value = state.backgroundColor;

        if (elements.borderColor)
            elements.borderColor.value = state.borderColor;

        if (elements.borderWidth)
            elements.borderWidth.value = state.borderWidth;

        if (elements.radius)
            elements.radius.value = state.borderRadius;

        if (elements.borderStyle)
            elements.borderStyle.value = "Solid";

    }

    /* ======================================================
       BIND EVENTS
    ====================================================== */

    function bindEvents() {

        /* Text */

        elements.labelText?.addEventListener("input", updateTitle);

        elements.labelSubtitle?.addEventListener("input", updateSubtitle);

        /* Typography */

        elements.fontFamily?.addEventListener("change", updateTypography);

        elements.fontSize?.addEventListener("input", updateTypography);

        elements.fontWeight?.addEventListener("change", updateTypography);

        /* Colors */

        elements.textColor?.addEventListener("input", updateColors);

        elements.backgroundColor?.addEventListener("input", updateColors);

        /* Borders */

        elements.borderColor?.addEventListener("input", updateBorders);

        elements.borderWidth?.addEventListener("input", updateBorders);

        elements.radius?.addEventListener("input", updateBorders);

        elements.borderStyle?.addEventListener("change", updateBorders);

        /* Icon */

        elements.labelIcon?.addEventListener("change", updateIcon);

    }

    /* ======================================================
       REFRESH PREVIEW
    ====================================================== */

    function refreshPreview() {

        updateTitle();

        updateSubtitle();

        updateTypography();

        updateColors();

        updateBorders();

        updateIcon();

    }

   /* ======================================================
       PART 2 STARTS HERE
    ====================================================== */

    /* ======================================================
       TITLE
    ====================================================== */

    function updateTitle() {

        state.title = elements.labelText?.value.trim() || defaults.title;

        if (elements.previewTitle) {

            elements.previewTitle.textContent = state.title;

        }

    }

    /* ======================================================
       SUBTITLE
    ====================================================== */

    function updateSubtitle() {

        state.subtitle = elements.labelSubtitle?.value.trim() || defaults.subtitle;

        if (elements.previewSubtitle) {

            elements.previewSubtitle.textContent = state.subtitle;

        }

    }

    /* ======================================================
       TYPOGRAPHY
    ====================================================== */

    function updateTypography() {

        state.fontFamily = elements.fontFamily?.value || defaults.fontFamily;

        state.fontSize = Number(elements.fontSize?.value || defaults.fontSize);

        switch (elements.fontWeight?.value) {

            case "Normal":

                state.fontWeight = "400";

                break;

            case "Medium":

                state.fontWeight = "500";

                break;

            case "Extra Bold":

                state.fontWeight = "800";

                break;

            default:

                state.fontWeight = "700";

        }

        if (!elements.previewCard) return;

        elements.previewCard.style.fontFamily = state.fontFamily;

        elements.previewCard.style.fontSize = state.fontSize + "px";

        elements.previewCard.style.fontWeight = state.fontWeight;

    }

    /* ======================================================
       COLORS
    ====================================================== */

    function updateColors() {

        state.textColor = elements.textColor?.value || defaults.textColor;

        state.backgroundColor = elements.backgroundColor?.value || defaults.backgroundColor;

        if (!elements.previewCard) return;

        elements.previewCard.style.color = state.textColor;

        elements.previewCard.style.backgroundColor = state.backgroundColor;

    }

    /* ======================================================
       BORDERS
    ====================================================== */

    function updateBorders() {

        state.borderColor = elements.borderColor?.value || defaults.borderColor;

        state.borderWidth = Number(elements.borderWidth?.value || defaults.borderWidth);

        state.borderRadius = Number(elements.radius?.value || defaults.borderRadius);

        state.borderStyle = (elements.borderStyle?.value || defaults.borderStyle).toLowerCase();

        if (!elements.previewCard) return;

        elements.previewCard.style.borderColor = state.borderColor;

        elements.previewCard.style.borderWidth = state.borderWidth + "px";

        elements.previewCard.style.borderRadius = state.borderRadius + "px";

        elements.previewCard.style.borderStyle = state.borderStyle;

    }

    /* ======================================================
       ICON
    ====================================================== */

    function updateIcon() {

        if (!elements.labelIcon || !elements.previewIcon) return;

        const icon = elements.labelIcon.value.split(" ")[0];

        state.icon = icon;

        elements.previewIcon.textContent = icon;

    }

    /* ======================================================
       ALIGNMENT
    ====================================================== */

    elements.alignButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.alignButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            state.alignment = button.dataset.align;

            if (elements.previewCard) {

                elements.previewCard.style.textAlign = state.alignment;

            }

        });

    });

    /* ======================================================
       LABEL PULSE ANIMATION
    ====================================================== */

    function pulsePreview() {

        if (!elements.previewCard) return;

        elements.previewCard.animate(

            [

                {

                    transform: "scale(1)"

                },

                {

                    transform: "scale(1.03)"

                },

                {

                    transform: "scale(1)"

                }

            ],

            {

                duration: 250

            }

        );

    }

    [

        elements.labelText,

        elements.labelSubtitle,

        elements.fontFamily,

        elements.fontSize,

        elements.fontWeight,

        elements.textColor,

        elements.backgroundColor,

        elements.borderColor,

        elements.borderWidth,

        elements.radius,

        elements.borderStyle,

        elements.labelIcon

    ].forEach(control => {

        if (!control) return;

        control.addEventListener("input", pulsePreview);

        control.addEventListener("change", pulsePreview);

    });

    /* ======================================================
       PART 3 STARTS HERE
    ====================================================== */

       /* ======================================================
       THEME ENGINE
    ====================================================== */

    const themes = {

        rainbow: {
            background: "#ffffff",
            border: "#ff4081",
            text: "#222222"
        },

        boho: {
            background: "#f6f0e8",
            border: "#c69c6d",
            text: "#4b3f35"
        },

        woodland: {
            background: "#eef6ea",
            border: "#4f772d",
            text: "#2d4739"
        },

        ocean: {
            background: "#eaf8ff",
            border: "#0288d1",
            text: "#01579b"
        },

        safari: {
            background: "#fff5dd",
            border: "#c7922b",
            text: "#5d4037"
        },

        space: {
            background: "#182848",
            border: "#6c63ff",
            text: "#ffffff"
        },

        farm: {
            background: "#fff8ec",
            border: "#7cb342",
            text: "#4e342e"
        },

        construction: {
            background: "#fff8e1",
            border: "#ff9800",
            text: "#212121"
        },

        camping: {
            background: "#edf7ed",
            border: "#2e7d32",
            text: "#1b4332"
        },

        dinosaur: {
            background: "#eef7dd",
            border: "#558b2f",
            text: "#2d4739"
        },

        nature: {
            background: "#f3faef",
            border: "#43a047",
            text: "#2e4630"
        },

        custom: {
            background: "#ffffff",
            border: "#4CAF50",
            text: "#2b2b2b"
        }

    };

    elements.themeButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.themeButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const theme = themes[button.dataset.theme];

            if (!theme) return;

            state.theme = button.dataset.theme;

            state.backgroundColor = theme.background;

            state.borderColor = theme.border;

            state.textColor = theme.text;

            elements.backgroundColor.value = theme.background;

            elements.borderColor.value = theme.border;

            elements.textColor.value = theme.text;

            updateColors();

            updateBorders();

        });

    });

    /* ======================================================
       LABEL SIZE ENGINE
    ====================================================== */

    const sizes = {

        tiny: "160px",

        small: "220px",

        medium: "300px",

        large: "420px",

        "extra-large": "600px",

        custom: "350px"

    };

    elements.sizeButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.sizeButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            state.size = button.dataset.size;

            if (elements.previewCard) {

                elements.previewCard.dataset.size = state.size;

                elements.previewCard.style.width = sizes[state.size];

            }

        });

    });

    /* ======================================================
       CATEGORY SHORTCUTS
    ====================================================== */

    elements.categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".category-card");

            if (!card) return;

            const heading = card.querySelector("h3");

            if (!heading) return;

            elements.labelText.value = heading.textContent.trim();

            updateTitle();

        });

    });

    /* ======================================================
       PRINT LAYOUT
    ====================================================== */

    elements.layoutButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.layoutButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            state.layout = button.dataset.layout;

            if (elements.printLayout) {

                elements.printLayout.value = state.layout;

            }

        });

    });

    elements.printLayout?.addEventListener("change", () => {

        state.layout = elements.printLayout.value;

    });

    /* ======================================================
       PRINT SETTINGS
    ====================================================== */

    elements.paperSize?.addEventListener("change", () => {

        state.paperSize = elements.paperSize.value;

    });

    elements.orientation?.addEventListener("change", () => {

        state.orientation = elements.orientation.value;

    });

    elements.paperType?.addEventListener("change", () => {

        state.paperType = elements.paperType.value;

    });

    elements.margins?.addEventListener("change", () => {

        state.margins = elements.margins.value;

    });

    /* ======================================================
       PART 4 STARTS HERE
    ====================================================== */

       /* ======================================================
       PRINTABLE SHEET PREVIEW
    ====================================================== */

    function previewPrintableSheet() {

        const previewWindow = window.open("", "_blank");

        if (!previewWindow) return;

        const total = getLabelCount(state.layout);

        let labels = "";

        for (let i = 0; i < total; i++) {

            labels += createLabelHTML();

        }

        previewWindow.document.write(`

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<title>Printable Classroom Labels</title>

<style>

*{

    box-sizing:border-box;

    margin:0;

    padding:0;

}

body{

    background:#ffffff;

    padding:20px;

    font-family:Arial,sans-serif;

}

.sheet{

    display:grid;

    grid-template-columns:repeat(auto-fill,minmax(240px,1fr));

    gap:20px;

}

.label{

    background:${state.backgroundColor};

    color:${state.textColor};

    border:${state.borderWidth}px ${state.borderStyle} ${state.borderColor};

    border-radius:${state.borderRadius}px;

    padding:18px;

    text-align:${state.alignment};

    font-family:${state.fontFamily};

    font-size:${state.fontSize}px;

    font-weight:${state.fontWeight};

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    min-height:140px;

}

.icon{

    font-size:44px;

    margin-bottom:10px;

}

.subtitle{

    margin-top:8px;

    font-size:.55em;

    opacity:.8;

}

</style>

</head>

<body>

<div class="sheet">

${labels}

</div>

</body>

</html>

`);

        previewWindow.document.close();

    }

    /* ======================================================
       LABEL HTML
    ====================================================== */

    function createLabelHTML() {

        return `

<div class="label">

<div class="icon">${state.icon}</div>

<div>${state.title}</div>

<div class="subtitle">

${state.subtitle}

</div>

</div>

`;

    }

    /* ======================================================
       LABEL COUNT
    ====================================================== */

    function getLabelCount(layout) {

        switch (layout) {

            case "single":

                return 1;

            case "2":

                return 2;

            case "4":

                return 4;

            case "6":

                return 6;

            case "12":

                return 12;

            case "20":

                return 20;

            case "30":

                return 30;

            default:

                return 12;

        }

    }

    /* ======================================================
       PRINT
    ====================================================== */

    function printLabels() {

        previewPrintableSheet();

        setTimeout(() => {

            window.print();

        }, 500);

    }

    elements.printBtn?.addEventListener("click", printLabels);

    elements.printLabels?.addEventListener("click", printLabels);

    /* ======================================================
       DUPLICATE PAGE
    ====================================================== */

    function duplicatePage() {

        previewPrintableSheet();

    }

    elements.duplicateBtn?.addEventListener("click", duplicatePage);

    elements.duplicatePage?.addEventListener("click", duplicatePage);

    /* ======================================================
       DOWNLOAD PDF
    ====================================================== */

    function downloadPDF() {

        alert("Use your browser's Print dialog and choose Save as PDF.");

        previewPrintableSheet();

    }

    elements.downloadBtn?.addEventListener("click", downloadPDF);

    elements.downloadPdf?.addEventListener("click", downloadPDF);

    /* ======================================================
       RESET
    ====================================================== */

    function resetStudio() {

        Object.assign(state, defaults);

        loadDefaults();

        refreshPreview();

        if (elements.previewCard) {

            elements.previewCard.style.width = "300px";

            elements.previewCard.dataset.size = "medium";

            elements.previewCard.dataset.theme = "custom";

        }

        elements.alignButtons.forEach(button => {

            button.classList.toggle(

                "active",

                button.dataset.align === "center"

            );

        });

        elements.themeButtons.forEach(button => {

            button.classList.toggle(

                "active",

                button.dataset.theme === "custom"

            );

        });

        elements.sizeButtons.forEach(button => {

            button.classList.toggle(

                "active",

                button.dataset.size === "medium"

            );

        });

    }

    elements.resetBtn?.addEventListener("click", resetStudio);

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    if (elements.mobileMenu && elements.navigation) {

        elements.mobileMenu.addEventListener("click", event => {

            event.stopPropagation();

            elements.navigation.classList.toggle("active");

            elements.mobileMenu.classList.toggle("active");

        });

        document.addEventListener("click", () => {

            elements.navigation.classList.remove("active");

            elements.mobileMenu.classList.remove("active");

        });

        elements.navigation.addEventListener("click", event => {

            event.stopPropagation();

        });

    }

    /* ======================================================
       FAQ ACCORDION
    ====================================================== */

    elements.faqCards.forEach(card => {

        const button = card.querySelector(".faq-question");

        if (!button) return;

        button.addEventListener("click", () => {

            const isOpen = card.classList.contains("active");

            elements.faqCards.forEach(item => {

                item.classList.remove("active");

            });

            if (!isOpen) {

                card.classList.add("active");

            }

        });

    });

    /* ======================================================
       SCROLL ANIMATIONS
    ====================================================== */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        }, {

            threshold: 0.15

        });

        elements.animatedItems.forEach(item => {

            observer.observe(item);

        });

    }

    /* ======================================================
       BACK TO TOP
    ====================================================== */

    if (elements.backToTop) {

        window.addEventListener("scroll", () => {

            elements.backToTop.classList.toggle(

                "show",

                window.scrollY > 500

            );

        });

        elements.backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================================
       READY
    ====================================================== */

    console.log("Little Explorers Classroom Label Studio Ready");

});
