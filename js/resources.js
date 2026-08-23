document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".main-nav");

    if (!button || !nav) return;

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        nav.classList.toggle("active");

        button.setAttribute(
            "aria-expanded",
            nav.classList.contains("active")
        );

    });

    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            button.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", (event) => {

        if (
            !nav.contains(event.target) &&
            !button.contains(event.target)
        ) {

            nav.classList.remove("active");

            button.setAttribute("aria-expanded", "false");

        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1100) {

            nav.classList.remove("active");

            button.setAttribute("aria-expanded", "false");

        }

    });

    /* ==========================================
       LITTLE EXPLORERS MONTHLY
       Add a direct path to the monthly resource
       archive in the existing Explore footer.
    ========================================== */

    const exploreLists = document.querySelectorAll(".site-footer .footer-column ul");
    const exploreList = exploreLists[0];

    if (exploreList && !exploreList.querySelector('a[href="resources/monthly/index.html"]')) {

        const monthlyItem = document.createElement("li");
        const monthlyLink = document.createElement("a");

        monthlyLink.href = "resources/monthly/index.html";
        monthlyLink.textContent = "Little Explorers Monthly";

        monthlyItem.appendChild(monthlyLink);
        exploreList.appendChild(monthlyItem);

    }

});
