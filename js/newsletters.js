/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   NEWSLETTER TEMPLATES
========================================================= */

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

if (mobileMenu && mainNav) {
    mobileMenu.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        mobileMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
        mobileMenu.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-label", "Open navigation");
        });
    });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const newsletterCards = document.querySelectorAll(".newsletter-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        newsletterCards.forEach(card => {
            const matches = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("hidden", !matches);
        });
    });
});

const printPreviewBtn = document.getElementById("printPreviewBtn");
if (printPreviewBtn) {
    printPreviewBtn.addEventListener("click", () => window.print());
}

function createNewsletterPrintWindow(templateName) {
    const printWindow = window.open("", "_blank", "width=900,height=1000");
    if (!printWindow) return;

    printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${templateName}</title>
<style>
@page { size: Letter portrait; margin: .45in; }
* { box-sizing: border-box; }
body { margin:0; font-family: Arial, sans-serif; color:#2f2f3a; background:#fff; }
.page { width:100%; max-width:7.6in; margin:0 auto; }
.newsletter { border:3px solid #65558F; min-height:9.7in; padding:.22in; }
.header { background:#65558F; color:#fff; text-align:center; padding:.22in; }
.header .brand { font-size:10px; font-weight:800; letter-spacing:3px; }
.header h1 { margin:7px 0 4px; font-size:27px; }
.header .subtitle { font-size:9px; font-weight:700; letter-spacing:1px; }
.month-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:12px 0; }
.field { min-height:36px; border-bottom:1.5px solid #777; padding:7px 4px; font-size:12px; }
.field strong { color:#4F4372; }
.photo { height:1.45in; border:2px dashed #aaa; display:flex; align-items:center; justify-content:center; color:#777; margin-bottom:12px; font-size:12px; }
.grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.box { min-height:1.38in; border:1px solid #aaa; padding:10px; }
.box h2 { margin:0 0 8px; font-size:12px; color:#4F4372; letter-spacing:.3px; }
.write-line { height:18px; border-bottom:1px solid #bbb; }
.footer-box { margin-top:10px; min-height:1.05in; border:1px solid #aaa; padding:10px; }
.footer-box h2 { margin:0 0 8px; font-size:12px; color:#4F4372; }
.note { margin-top:10px; padding:9px; background:#F3F0FA; text-align:center; font-size:9px; color:#4F4372; }
@media print { body { print-color-adjust:exact; -webkit-print-color-adjust:exact; } }
</style>
</head>
<body>
<div class="page">
<div class="newsletter">
<div class="header">
<div class="brand">LITTLE EXPLORERS</div>
<h1>FAMILY NEWS</h1>
<div class="subtitle">MONTHLY CLASSROOM NEWSLETTER</div>
</div>
<div class="month-row">
<div class="field"><strong>MONTH / YEAR:</strong> ____________________</div>
<div class="field"><strong>CLASSROOM:</strong> ____________________</div>
</div>
<div class="photo">CLASSROOM PHOTO</div>
<div class="grid">
<section class="box"><h2>WHAT WE ARE LEARNING</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<section class="box"><h2>CLASSROOM NEWS</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<section class="box"><h2>BIRTHDAYS</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<section class="box"><h2>IMPORTANT DATES</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<section class="box"><h2>FAMILY CONNECTION</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<section class="box"><h2>REMINDERS</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
</div>
<section class="footer-box"><h2>TEACHER MESSAGE / NOTES</h2><div class="write-line"></div><div class="write-line"></div><div class="write-line"></div></section>
<div class="note">We are growing, learning, and exploring together!</div>
</div>
</div>
</body>
</html>`);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 350);
}

const templateButtons = document.querySelectorAll(".template-action");
templateButtons.forEach(button => {
    button.addEventListener("click", () => {
        createNewsletterPrintWindow(button.dataset.template || "Little Explorers Newsletter");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
