/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   LEARNING CENTERS
   classroom-centers.js
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mainNav =
    document.getElementById("mainNav");


if (mobileMenu && mainNav) {

    mobileMenu.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNav.classList.toggle("open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );


    mainNav.querySelectorAll("a").forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove("open");

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }
            );

        }
    );

}


/* =========================================================
   CENTER FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const centerCards =
    document.querySelectorAll(".center-card");


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                centerCards.forEach(
                    function (card) {

                        const category =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems =
    document.querySelectorAll(
        ".highlight-card, .center-card, .planning-checklist, .environment-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.12
            }
        );


    revealItems.forEach(
        function (item) {

            observer.observe(item);

        }
    );

}
