/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   Editable Classroom Labels
   Part 1
   Application Foundation
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENT CACHE
    ========================================== */

    const elements = {

        /* Text */

        labelText: document.getElementById("labelText"),
        labelSubtitle: document.getElementById("labelSubtitle"),

        /* Fonts */

        fontFamily: document.getElementById("fontFamily"),
        fontSize: document.getElementById("fontSize"),
        fontWeight: document.getElementById("fontWeight"),

        /* Colors */

        textColor: document.getElementById("textColor"),
        backgroundColor: document.getElementById("backgroundColor"),
        borderColor: document.getElementById("borderColor"),

        /* Border */

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

        /* Theme */

        themeButtons: document.querySelectorAll(".js-theme"),

        /* Sizes */

        sizeButtons: document.querySelectorAll(".js-size"),

        /* Categories */

        categoryButtons: document.querySelectorAll(".js-category"),

        /* Print */

        printLayout: document.getElementById("printLayout"),

        layoutButtons: document.querySelectorAll(".js-layout"),

        paperSize: document.getElementById("paperSize"),

        orientation: document.getElementById("orientation"),

        paperType: document.getElementById("paperType"),

        margins: document.getElementById("margins"),

        /* Action Buttons */

        printBtn: document.getElementById("printBtn"),
        duplicateBtn: document.getElementById("duplicateBtn"),
        downloadBtn: document.getElementById("downloadBtn"),
        resetBtn: document.getElementById("resetBtn"),

        previewSheet: document.getElementById("previewSheet"),
        duplicatePage: document.getElementById("duplicatePage"),
        downloadPdf: document.getElementById("downloadPdf"),
        printLabels: document.getElementById("printLabels")

    };

    /* ==========================================
       DEFAULT SETTINGS
    ========================================== */

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

    /* ==========================================
       CURRENT APPLICATION STATE
    ========================================== */

    const state = {

        ...defaults

    };

    /* ==========================================
       INITIALIZE
    ========================================== */

    initialize();

    function initialize() {

        loadDefaults();

        bindEvents();

        refreshPreview();

        console.log("Classroom Label Studio Loaded");

    }

    /* ==========================================
       LOAD DEFAULT VALUES
    ========================================== */

    function loadDefaults() {

        elements.labelText.value = state.title;

        elements.labelSubtitle.value = state.subtitle;

        elements.fontFamily.value = state.fontFamily;

        elements.fontSize.value = state.fontSize;

        elements.fontWeight.value = "Bold";

        elements.textColor.value = state.textColor;

        elements.backgroundColor.value = state.backgroundColor;

        elements.borderColor.value = state.borderColor;

        elements.borderWidth.value = state.borderWidth;

        elements.radius.value = state.borderRadius;

        elements.borderStyle.value = "Solid";

    }

    /* ==========================================
       BIND EVENTS
    ========================================== */

    function bindEvents() {

        /* Text */

        elements.labelText.addEventListener("input", updateTitle);

        elements.labelSubtitle.addEventListener("input", updateSubtitle);

        /* Fonts */

        elements.fontFamily.addEventListener("change", updateTypography);

        elements.fontSize.addEventListener("input", updateTypography);

        elements.fontWeight.addEventListener("change", updateTypography);

        /* Colors */

        elements.textColor.addEventListener("input", updateColors);

        elements.backgroundColor.addEventListener("input", updateColors);

        elements.borderColor.addEventListener("input", updateBorders);

        /* Borders */

        elements.borderWidth.addEventListener("input", updateBorders);

        elements.radius.addEventListener("input", updateBorders);

        elements.borderStyle.addEventListener("change", updateBorders);

    }

    /* ==========================================
       REFRESH PREVIEW
    ========================================== */

    function refreshPreview() {

        updateTitle();

        updateSubtitle();

        updateTypography();

        updateColors();

        updateBorders();

    }

    /* ==========================================
       TITLE
    ========================================== */

    function updateTitle() {

        state.title = elements.labelText.value.trim() || defaults.title;

        elements.previewTitle.textContent = state.title;

    }

    /* ==========================================
       SUBTITLE
    ========================================== */

    function updateSubtitle() {

        state.subtitle =

            elements.labelSubtitle.value.trim()

            || defaults.subtitle;

        elements.previewSubtitle.textContent = state.subtitle;

    }

});

    /* ==========================================
       TYPOGRAPHY
    ========================================== */

    function updateTypography() {

        state.fontFamily = elements.fontFamily.value;

        state.fontSize = Number(elements.fontSize.value);

        switch (elements.fontWeight.value) {

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

        elements.previewCard.style.fontFamily = state.fontFamily;

        elements.previewCard.style.fontSize =
            state.fontSize + "px";

        elements.previewCard.style.fontWeight =
            state.fontWeight;

    }

    /* ==========================================
       COLORS
    ========================================== */

    function updateColors() {

        state.textColor =
            elements.textColor.value;

        state.backgroundColor =
            elements.backgroundColor.value;

        elements.previewCard.style.color =
            state.textColor;

        elements.previewCard.style.backgroundColor =
            state.backgroundColor;

    }

    /* ==========================================
       BORDER
    ========================================== */

    function updateBorders() {

        state.borderColor =
            elements.borderColor.value;

        state.borderWidth =
            Number(elements.borderWidth.value);

        state.borderRadius =
            Number(elements.radius.value);

        state.borderStyle =
            elements.borderStyle.value.toLowerCase();

        elements.previewCard.style.borderColor =
            state.borderColor;

        elements.previewCard.style.borderWidth =
            state.borderWidth + "px";

        elements.previewCard.style.borderRadius =
            state.borderRadius + "px";

        elements.previewCard.style.borderStyle =
            state.borderStyle;

    }

    /* ==========================================
       ICON
    ========================================== */

    elements.labelIcon.addEventListener("change", updateIcon);

    function updateIcon() {

        const icon =
            elements.labelIcon.value.split(" ")[0];

        state.icon = icon;

        elements.previewIcon.textContent = icon;

    }

    /* ==========================================
       ALIGNMENT
    ========================================== */

    elements.alignButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.alignButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            state.alignment =
                button.dataset.align;

            elements.previewCard.style.textAlign =
                state.alignment;

        });

    });

    /* ==========================================
       THEME ENGINE
    ========================================== */

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

            elements.themeButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const theme =
                themes[button.dataset.theme];

            state.theme =
                button.dataset.theme;

            state.backgroundColor =
                theme.background;

            state.borderColor =
                theme.border;

            state.textColor =
                theme.text;

            elements.backgroundColor.value =
                theme.background;

            elements.borderColor.value =
                theme.border;

            elements.textColor.value =
                theme.text;

            updateColors();

            updateBorders();

        });

    });

    /* ==========================================
       LABEL SIZE ENGINE
    ========================================== */

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

            elements.sizeButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            state.size =
                button.dataset.size;

            elements.previewCard.dataset.size =
                state.size;

            elements.previewCard.style.width =
                sizes[state.size];

        });

    });

    /* ==========================================
       CATEGORY SHORTCUTS
    ========================================== */

    elements.categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".category-card");

            if (!card) return;

            const heading =
                card.querySelector("h3");

            if (!heading) return;

            elements.labelText.value =
                heading.textContent.trim();

            updateTitle();

        });

    });

    /* ==========================================
       PRINT LAYOUT
    ========================================== */

    elements.layoutButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.layoutButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            state.layout =
                button.dataset.layout;

            elements.printLayout.value =
                button.textContent.trim();

        });

    });

    elements.printLayout.addEventListener("change", () => {

        state.layout =
            elements.printLayout.value;

    });

    /* ==========================================
       THEME ENGINE
    ========================================== */

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

            elements.themeButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const theme =
                themes[button.dataset.theme];

            state.theme =
                button.dataset.theme;

            state.backgroundColor =
                theme.background;

            state.borderColor =
                theme.border;

            state.textColor =
                theme.text;

            elements.backgroundColor.value =
                theme.background;

            elements.borderColor.value =
                theme.border;

            elements.textColor.value =
                theme.text;

            updateColors();

            updateBorders();

        });

    });

    /* ==========================================
       LABEL SIZE ENGINE
    ========================================== */

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

            elements.sizeButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            state.size =
                button.dataset.size;

            elements.previewCard.dataset.size =
                state.size;

            elements.previewCard.style.width =
                sizes[state.size];

        });

    });

    /* ==========================================
       CATEGORY SHORTCUTS
    ========================================== */

    elements.categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".category-card");

            if (!card) return;

            const heading =
                card.querySelector("h3");

            if (!heading) return;

            elements.labelText.value =
                heading.textContent.trim();

            updateTitle();

        });

    });

    /* ==========================================
       PRINT LAYOUT
    ========================================== */

    elements.layoutButtons.forEach(button => {

        button.addEventListener("click", () => {

            elements.layoutButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            state.layout =
                button.dataset.layout;

            elements.printLayout.value =
                button.textContent.trim();

        });

    });

    elements.printLayout.addEventListener("change", () => {

        state.layout =
            elements.printLayout.value;

    });

    /* ==========================================
       PRINTABLE SHEET PREVIEW
    ========================================== */

    elements.previewSheet.addEventListener("click", previewPrintableSheet);

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

padding:20px;
font-family:Arial,sans-serif;
background:#ffffff;

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

min-height:140px;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

}

.icon{

font-size:44px;

margin-bottom:10px;

}

.subtitle{

font-size:.55em;

margin-top:8px;

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

    /* ==========================================
       CREATE LABEL HTML
    ========================================== */

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

    /* ==========================================
       LABEL COUNT
    ========================================== */

    function getLabelCount(layout) {

        switch(layout){

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

    /* ==========================================
       PRINT
    ========================================== */

    function printLabels(){

        previewPrintableSheet();

        setTimeout(()=>{

            window.print();

        },500);

    }

    elements.printBtn.addEventListener("click",printLabels);

    elements.printLabels.addEventListener("click",printLabels);

    /* ==========================================
       DUPLICATE PAGE
    ========================================== */

    function duplicatePage(){

        previewPrintableSheet();

    }

    elements.duplicateBtn.addEventListener("click",duplicatePage);

    elements.duplicatePage.addEventListener("click",duplicatePage);

    /* ==========================================
       DOWNLOAD PDF
    ========================================== */

    function downloadPDF(){

        alert(

"Use your browser's Print dialog and choose Save as PDF."

        );

        previewPrintableSheet();

    }

    elements.downloadBtn.addEventListener("click",downloadPDF);

    elements.downloadPdf.addEventListener("click",downloadPDF);

    /* ==========================================
       RESET DESIGN
    ========================================== */

    function resetStudio(){

        Object.assign(state,defaults);

        loadDefaults();

        refreshPreview();

        elements.previewCard.style.width="300px";

        elements.previewCard.dataset.size="medium";

        elements.previewCard.dataset.theme="custom";

        elements.alignButtons.forEach(button=>{

            button.classList.remove("active");

            if(button.dataset.align==="center"){

                button.classList.add("active");

            }

        });

        elements.themeButtons.forEach(button=>{

            button.classList.remove("active");

            if(button.dataset.theme==="custom"){

                button.classList.add("active");

            }

        });

        elements.sizeButtons.forEach(button=>{

            button.classList.remove("active");

            if(button.dataset.size==="medium"){

                button.classList.add("active");

            }

        });

    }

    elements.resetBtn.addEventListener("click",resetStudio);

    /* ==========================================
       SIMPLE ANIMATIONS
    ========================================== */

    function pulsePreview(){

        elements.previewCard.animate(

            [

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.03)"

                },

                {

                    transform:"scale(1)"

                }

            ],

            {

                duration:250

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

    ].forEach(control=>{

        if(!control) return;

        control.addEventListener("input",pulsePreview);

        control.addEventListener("change",pulsePreview);

    });

    /* ==========================================
       READY
    ========================================== */

    console.log(

        "Little Explorers Classroom Label Studio Ready"

    );

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
