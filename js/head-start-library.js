document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".mobile-menu");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("mobile-nav-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            menuButton.textContent = isOpen ? "✕" : "☰";
        });
        navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
            navigation.classList.remove("mobile-nav-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
        }));
        document.addEventListener("click", event => {
            if (!navigation.contains(event.target) && !menuButton.contains(event.target) && navigation.classList.contains("mobile-nav-open")) {
                navigation.classList.remove("mobile-nav-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
                menuButton.textContent = "☰";
            }
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navigation && menuButton) {
            navigation.classList.remove("mobile-nav-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
        }
    });

    document.querySelectorAll(".year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    const resourceLinks = {
        "Performance Standards": "resources/performance-standards.html",
        "ELOF Domains": "resources/elof-domains.html",
        "School Readiness Goals": "resources/school-readiness.html",
        "Classroom Implementation": "resources/classroom-implementation.html",
        "Observation & Documentation": "resources/observation-documentation.html",
        "Teacher Planning": "resources/teacher-planning.html"
    };

    document.querySelectorAll(".resource-card").forEach(card => {
        const heading = card.querySelector("h3");
        const link = card.querySelector("a");
        const image = card.querySelector(".resource-card-image img");
        if (!heading) return;
        const title = heading.textContent.trim();
        if (resourceLinks[title] && link) link.href = resourceLinks[title];
        if (image) {
            const imageMap = {
                "Performance Standards": "images/head-start-standards.svg",
                "ELOF Domains": "images/elof-domains.svg",
                "School Readiness Goals": "images/school-readiness.svg"
            };
            if (imageMap[title]) image.src = imageMap[title];
        } else {
            const imageMap = {
                "Classroom Implementation": "images/classroom-implementation.svg",
                "Observation & Documentation": "images/observation-documentation.svg",
                "Teacher Planning": "images/teacher-planning.svg"
            };
            if (imageMap[title]) {
                const wrapper = card.querySelector(".resource-card-image");
                if (wrapper) {
                    wrapper.classList.remove("resource-placeholder");
                    wrapper.textContent = "";
                    const newImage = document.createElement("img");
                    newImage.src = imageMap[title];
                    newImage.alt = `${title} resources`;
                    wrapper.appendChild(newImage);
                }
            }
        }
    });

    const legacyLinks = document.querySelectorAll('a[href="../../teacher-resources.html"], a[href="../../family-resources.html"]');
    legacyLinks.forEach(link => {
        if (link.textContent.includes("Teacher")) link.href = "../teacher-resources/index.html";
        if (link.textContent.includes("Family")) link.href = "../family-engagement/index.html";
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && navigation && navigation.classList.contains("mobile-nav-open") && menuButton) {
            navigation.classList.remove("mobile-nav-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
        }
    });
});