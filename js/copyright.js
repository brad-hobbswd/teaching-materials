/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Copyright Page JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Smooth Scroll
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

    /* ======================================
       Scroll Reveal
    ====================================== */

    const cards = document.querySelectorAll(".legal-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => {

        card.classList.add("hidden");

        observer.observe(card);

    });

    /* ======================================
       Last Updated Date
    ====================================== */

    const lastUpdated = document.getElementById("lastUpdated");

    if (lastUpdated) {

        lastUpdated.textContent = document.lastModified;

    }

    /* ======================================
       Copy Copyright Notice
    ====================================== */

    const copyButton = document.getElementById("copyCopyright");

    if (copyButton) {

        copyButton.addEventListener("click", () => {

            const notice = `© ${new Date().getFullYear()} Little Explorers Learning Hub. All Rights Reserved.`;

            navigator.clipboard.writeText(notice).then(() => {

                const original = copyButton.innerHTML;

                copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

                setTimeout(() => {

                    copyButton.innerHTML = original;

                }, 2000);

            });

        });

    }

    /* ======================================
       Back To Top Button
    ====================================== */

    const topButton = document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });

        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================
       Reading Progress Bar
    ====================================== */

    const progressBar = document.getElementById("progressBar");

    if (progressBar) {

        window.addEventListener("scroll", () => {

            const scrollTop = document.documentElement.scrollTop;

            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const progress = (scrollTop / height) * 100;

            progressBar.style.width = progress + "%";

        });

    }

});