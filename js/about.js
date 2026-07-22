/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   About Page JavaScript
========================================== */

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

            mobileButton.innerHTML = expanded
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("show");

                mobileButton.setAttribute("aria-expanded", "false");

                mobileButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

        document.addEventListener("click", event => {

            if (
                !navigation.contains(event.target) &&
                !mobileButton.contains(event.target)
            ) {

                navigation.classList.remove("show");

                mobileButton.setAttribute("aria-expanded", "false");

                mobileButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }

    /* ======================================
       Sticky Header
    ====================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            header.classList.toggle(
                "sticky",
                window.scrollY > 40
            );

        });

    }

    /* ======================================
       Smooth Scroll
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ======================================
       Newsletter
    ====================================== */

    const newsletter = document.querySelector(".newsletter");

    if (newsletter) {

        newsletter.addEventListener("submit", event => {

            event.preventDefault();

            const button = newsletter.querySelector("button");

            if (!button) return;

            button.disabled = true;

            button.textContent = "Subscribing...";

            setTimeout(() => {

                button.textContent = "✓ Thank You!";

                newsletter.reset();

                setTimeout(() => {

                    button.disabled = false;

                    button.textContent = "Subscribe";

                }, 2500);

            }, 1200);

        });

    }

    /* ======================================
       FAQ Animation
    ====================================== */

    document.querySelectorAll(".faq-grid details").forEach(item => {

        item.addEventListener("toggle", () => {

            if (!item.open) return;

            document.querySelectorAll(".faq-grid details").forEach(other => {

                if (other !== item) {

                    other.removeAttribute("open");

                }

            });

        });

    });

    /* ======================================
       Reveal Sections
    ====================================== */

    const sections = document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15

        });

        sections.forEach(section => observer.observe(section));

    } else {

        sections.forEach(section => {

            section.classList.add("visible");

        });

    }

});