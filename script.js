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

    newsletter.addEventListener("submit", function () {

        const button = newsletter.querySelector("button");

        button.textContent = "Joining...";

        button.disabled = true;

        setTimeout(() => {

            button.textContent = "✓ Welcome!";

            newsletter.reset();

        }, 1500);

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
   Search
====================================== */

document.querySelectorAll(".search-bar").forEach(form => {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const input = form.querySelector("input");

        const query = input.value.trim();

        if(query !== ""){

            window.location.href =
                "search.html?q=" +
                encodeURIComponent(query);

        }

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
   Card Animation
====================================== */

document.querySelectorAll(

".study-card,.favorite-card,.activity-card,.interest-card,.season-card,.why-card,.age-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

   /* ======================================
   Fade In Sections
====================================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

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
