/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Master JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Mobile Navigation
    ====================================== */

    const mobileButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("nav");

    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", () => {

            navigation.classList.toggle("show");

        });

    }

    /* ======================================
       Sticky Header
    ====================================== */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.classList.add("sticky");

            } else {

                header.classList.remove("sticky");

            }

        });

    }

    /* ======================================
       Newsletter
    ====================================== */

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", () => {

            setTimeout(() => {

                alert("🎉 Thank you for subscribing to Little Explorers Learning Hub!");

                newsletter.reset();

            }, 800);

        });

    }

    /* ======================================
       Smooth Scroll
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       Search Bars
    ====================================== */

    document.querySelectorAll('input[type="search"]').forEach(search => {

        search.addEventListener("focus", () => {

            search.parentElement.classList.add("search-active");

        });

        search.addEventListener("blur", () => {

            search.parentElement.classList.remove("search-active");

        });

    });

    /* ======================================
       Study Cards
    ====================================== */

    const studyCards = document.querySelectorAll(".study-card");

    studyCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("hover");

        });

    });

    /* ======================================
       Back To Top Button
    ====================================== */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

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

    }

});
