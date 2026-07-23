/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   About Page JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const mobileButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector(".main-nav");

    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", (event) => {

            event.stopPropagation();

            navigation.classList.toggle("active");

            mobileButton.setAttribute(
                "aria-expanded",
                navigation.classList.contains("active")
            );

        });

        document.addEventListener("click", (event) => {

            if (
                navigation.classList.contains("active") &&
                !navigation.contains(event.target) &&
                !mobileButton.contains(event.target)
            ) {

                navigation.classList.remove("active");
                mobileButton.setAttribute("aria-expanded", "false");

            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 992) {

                navigation.classList.remove("active");
                mobileButton.setAttribute("aria-expanded", "false");

            }

        });

    }

});
