/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Observation Forms JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Mobile Navigation
    ====================================== */

    const mobileButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector(".main-nav");

    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", (event) => {

            event.stopPropagation();

            navigation.classList.toggle("active");

            const icon = mobileButton.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");

            }

        });

        document.addEventListener("click", (event) => {

            if (
                !navigation.contains(event.target) &&
                !mobileButton.contains(event.target)
            ) {

                navigation.classList.remove("active");

                const icon = mobileButton.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }

    /* ======================================
       FAQ Accordion
    ====================================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {

        question.addEventListener("click", () => {

            const currentCard = question.parentElement;

            document.querySelectorAll(".faq-card").forEach((card) => {

                if (card !== currentCard) {

                    card.classList.remove("active");

                }

            });

            currentCard.classList.toggle("active");

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

    /* ======================================
       Smooth Anchor Scrolling
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                document.querySelector(".site-header")?.offsetHeight || 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                20;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

            navigation?.classList.remove("active");

            const icon = mobileButton?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

    /* ======================================
       Fade In Sections
    ====================================== */

    const animatedItems = document.querySelectorAll(

        ".stat-card, .step-card, .category-card, .theme-card, .resource-card, .tip-card, .faq-card"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    animatedItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .6s ease";

        observer.observe(item);

    });

});
