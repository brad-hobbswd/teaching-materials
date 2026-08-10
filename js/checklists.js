/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   TEACHER CHECKLISTS
   checklists.js
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

                    mainNav.classList.remove(
                        "open"
                    );

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
   CHECKLIST TABS
========================================================= */

const checklistTabs =
    document.querySelectorAll(
        ".checklist-tab"
    );

const checklistPanels =
    document.querySelectorAll(
        ".checklist-panel"
    );


checklistTabs.forEach(
    function (tab) {

        tab.addEventListener(
            "click",
            function () {

                const target =
                    tab.dataset.target;


                checklistTabs.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                checklistPanels.forEach(
                    function (panel) {

                        panel.classList.remove(
                            "active"
                        );

                    }
                );


                tab.classList.add(
                    "active"
                );


                const targetPanel =
                    document.getElementById(
                        target
                    );


                if (targetPanel) {

                    targetPanel.classList.add(
                        "active"
                    );

                    targetPanel.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            }
        );

    }
);


/* =========================================================
   CHECKBOX STORAGE
========================================================= */

const checkboxes =
    document.querySelectorAll(
        '.check-item input[type="checkbox"]'
    );


checkboxes.forEach(
    function (checkbox, index) {

        const list =
            checkbox.dataset.list;

        const key =
            "littleExplorersChecklist_" +
            list +
            "_" +
            index;


        const saved =
            localStorage.getItem(key);


        if (saved === "true") {

            checkbox.checked =
                true;

        }


        checkbox.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    key,
                    checkbox.checked
                        ? "true"
                        : "false"
                );

            }
        );

    }
);


/* =========================================================
   RESET CHECKLIST
========================================================= */

const resetButtons =
    document.querySelectorAll(
        ".reset-btn"
    );


resetButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const list =
                    button.dataset.reset;


                const items =
                    document.querySelectorAll(
                        `.check-item input[data-list="${list}"]`
                    );


                items.forEach(
                    function (checkbox, index) {

                        checkbox.checked =
                            false;


                        const key =
                            "littleExplorersChecklist_" +
                            list +
                            "_" +
                            index;


                        localStorage.removeItem(
                            key
                        );

                    }
                );

            }
        );

    }
);


/* =========================================================
   PRINT
========================================================= */

const printAllBtn =
    document.getElementById(
        "printAllBtn"
    );


if (printAllBtn) {

    printAllBtn.addEventListener(
        "click",
        function () {

            window.print();

        }
    );

}


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
                        link.getAttribute(
                            "href"
                        );


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
