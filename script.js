
/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Master JavaScript
========================================== */
document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded", () => {

  /* ======================================
   Mobile Navigation
====================================== */

const mobileButton = document.querySelector(".mobile-menu");
const navigation = document.querySelector(".main-nav");

if (mobileButton && navigation) {

    mobileButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

        const expanded = navigation.classList.contains("show");

        mobileButton.setAttribute("aria-expanded", expanded);

    });

    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

            mobileButton.setAttribute("aria-expanded","false");

        });

    });

    document.addEventListener("click", e => {

        if (
            !navigation.contains(e.target) &&
            !mobileButton.contains(e.target)
        ) {

            navigation.classList.remove("show");

            mobileButton.setAttribute("aria-expanded","false");

        }

    });

}

  /* ======================================
   Active Navigation
====================================== */

const currentPath = window.location.pathname;

document.querySelectorAll("nav a").forEach(link => {

    link.classList.remove("active");

    const href = new URL(link.href).pathname;

    if (
        currentPath === href ||
        (currentPath.startsWith("/teaching-materials/studies/") && href.endsWith("/studies.html")) ||
        (currentPath.startsWith("/teaching-materials/library/") && href.endsWith("/library/index.html")) ||
        (currentPath.startsWith("/teaching-materials/ages/") && href.endsWith("/ages/index.html"))
    ) {
        link.classList.add("active");
    }

});
    /* ======================================
       Sticky Header
    ====================================== */

    const header = document.querySelector(".site-header");

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

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

   /* ======================================
   Search
====================================== */

document.querySelectorAll(".search-bar, .hero-search").forEach(search => {

    const form = search.tagName === "FORM"
        ? search
        : search.closest("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const input = form.querySelector('input[type="search"], input[type="text"]');

        if (!input) return;

        const query = input.value.trim();

        if (query) {

            window.location.href =
                "search.html?q=" + encodeURIComponent(query);

        }

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

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => observer.observe(section));

} else {

    sections.forEach(section => section.classList.add("visible"));

}

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
