/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   ELOF RESOURCES
   elof.js
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");

const domainModal =
    document.getElementById("domainModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const closeDomain =
    document.getElementById("closeDomain");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalContent =
    document.getElementById("modalContent");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener(
        "click",
        () => {

            const open =
                mainNavigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                open
            );

        }
    );

}


document
    .querySelectorAll(".main-navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNavigation.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   ELOF DOMAIN DATA
========================================================= */

const domains = {

    approaches: {

        label:
            "ELOF DOMAIN 01",

        title:
            "Approaches to Learning",

        description:
            "Help children develop curiosity, initiative, persistence, attention, flexibility, and engagement as they approach new experiences and learning opportunities.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Investigation baskets",
                    "Mystery objects",
                    "Open ended building challenges",
                    "Choice based learning centers",
                    "Problem solving games"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Follow children's interests",
                    "Allow meaningful choices",
                    "Encourage persistence",
                    "Model flexible thinking",
                    "Provide appropriate challenges"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "How does the child approach something new?",
                    "Does the child continue after difficulty?",
                    "How does the child respond to changes?",
                    "Does the child maintain attention?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Offer opportunities for investigation",
                    "Increase challenge gradually",
                    "Provide multiple ways to participate",
                    "Use children's interests as entry points"
                ]

            }

        ]

    },


    social: {

        label:
            "ELOF DOMAIN 02",

        title:
            "Social and Emotional Development",

        description:
            "Support children's relationships, emotional expression, self regulation, social interaction, cooperation, and developing sense of identity.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Feelings conversations",
                    "Cooperative games",
                    "Dramatic play",
                    "Friendship activities",
                    "Calm down experiences"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Name and validate emotions",
                    "Model respectful interactions",
                    "Teach problem solving",
                    "Support peer relationships",
                    "Create predictable routines"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "How does the child communicate emotions?",
                    "How does the child respond to peers?",
                    "How does the child seek help?",
                    "How does the child manage transitions?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Build relationship based routines",
                    "Plan cooperative experiences",
                    "Embed emotional vocabulary",
                    "Provide opportunities for independence"
                ]

            }

        ]

    },


    language: {

        label:
            "ELOF DOMAIN 03",

        title:
            "Language and Communication",

        description:
            "Create rich opportunities for children to listen, understand, communicate, participate in conversations, and express thoughts, ideas, needs, and experiences.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Conversation baskets",
                    "Story retelling",
                    "Puppet conversations",
                    "Picture discussions",
                    "Vocabulary investigations"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Expand children's language",
                    "Use rich vocabulary",
                    "Ask open ended questions",
                    "Pause and allow response time",
                    "Connect words to experiences"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "What does the child communicate?",
                    "How does the child participate in conversation?",
                    "Does the child understand questions?",
                    "How does the child use new vocabulary?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Plan intentional conversations",
                    "Introduce meaningful vocabulary",
                    "Use books and real experiences",
                    "Invite children to explain their thinking"
                ]

            }

        ]

    },


    literacy: {

        label:
            "ELOF DOMAIN 04",

        title:
            "Literacy",

        description:
            "Build children's understanding of books, print, sounds, writing, stories, symbols, and the many ways people use literacy to communicate.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Interactive read alouds",
                    "Story sequencing",
                    "Name writing",
                    "Environmental print hunts",
                    "Classroom message center"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Model reading behaviors",
                    "Point out meaningful print",
                    "Discuss story events",
                    "Invite predictions",
                    "Encourage children's writing"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "How does the child interact with books?",
                    "Does the child recognize meaningful print?",
                    "How does the child represent ideas?",
                    "What does the child communicate through drawing or writing?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Provide accessible books",
                    "Embed print throughout the environment",
                    "Offer authentic writing opportunities",
                    "Connect literacy to children's interests"
                ]

            }

        ]

    },


    cognition: {

        label:
            "ELOF DOMAIN 05",

        title:
            "Cognition",

        description:
            "Encourage thinking, reasoning, memory, mathematical concepts, scientific investigation, problem solving, and children's developing knowledge of the world.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Sorting investigations",
                    "Counting collections",
                    "Science experiments",
                    "Pattern challenges",
                    "Prediction activities"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Ask children to explain thinking",
                    "Encourage prediction",
                    "Provide materials to compare",
                    "Introduce mathematical language",
                    "Support investigation and discovery"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "How does the child solve problems?",
                    "Does the child make predictions?",
                    "How does the child classify objects?",
                    "What does the child remember and connect?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Provide hands on investigation",
                    "Use real world mathematics",
                    "Offer materials that encourage comparison",
                    "Build from children's existing knowledge"
                ]

            }

        ]

    },


    physical: {

        label:
            "ELOF DOMAIN 06",

        title:
            "Perceptual, Motor, and Physical Development",

        description:
            "Support children's movement, coordination, perceptual development, physical health, safety, and growing independence in everyday routines.",

        resources: [

            {
                title:
                    "Classroom Activities",

                items: [
                    "Obstacle courses",
                    "Dance and movement",
                    "Fine motor stations",
                    "Outdoor exploration",
                    "Self help routines"
                ]

            },

            {
                title:
                    "Teaching Strategies",

                items: [
                    "Provide daily movement",
                    "Model safe physical practices",
                    "Offer varied motor experiences",
                    "Encourage independence",
                    "Adjust materials for individual needs"
                ]

            },

            {
                title:
                    "Observation Ideas",

                items: [
                    "How does the child move through space?",
                    "How does the child manipulate materials?",
                    "What routines can the child complete independently?",
                    "How does the child coordinate movements?"
                ]

            },

            {
                title:
                    "Planning Connections",

                items: [
                    "Include movement throughout the day",
                    "Plan fine motor experiences",
                    "Use outdoor environments",
                    "Embed independence into routines"
                ]

            }

        ]

    }

};


/* =========================================================
   OPEN DOMAIN
========================================================= */

function openDomain(domainKey) {

    const domain =
        domains[domainKey];

    if (!domain) {
        return;
    }


    modalLabel.textContent =
        domain.label;

    modalTitle.textContent =
        domain.title;

    modalDescription.textContent =
        domain.description;


    modalContent.innerHTML = "";


    domain.resources.forEach(resource => {

        const article =
            document.createElement("article");

        article.className =
            "modal-resource";


        const heading =
            document.createElement("h3");

        heading.textContent =
            resource.title;


        const list =
            document.createElement("ul");


        resource.items.forEach(item => {

            const listItem =
                document.createElement("li");

            listItem.textContent =
                item;

            list.appendChild(
                listItem
            );

        });


        article.appendChild(
            heading
        );

        article.appendChild(
            list
        );

        modalContent.appendChild(
            article
        );

    });


    domainModal.classList.add(
        "open"
    );

    domainModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   DOMAIN BUTTONS
========================================================= */

document
    .querySelectorAll("[data-domain]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const domainKey =
                    button.dataset.domain;

                openDomain(
                    domainKey
                );

            }
        );

    });


/* =========================================================
   CLOSE DOMAIN
========================================================= */

function closeDomainModal() {

    domainModal.classList.remove(
        "open"
    );

    domainModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeDomainModal
    );

}


if (closeDomain) {

    closeDomain.addEventListener(
        "click",
        closeDomainModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeDomainModal
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            domainModal.classList.contains("open")
        ) {

            closeDomainModal();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".domain-card, .intro-point, .strategy-card, .idea-card, .observation-question"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(18px)";

            element.style.transition =
                "opacity 0.55s ease, transform 0.55s ease";

            revealObserver.observe(
                element
            );

        }
    );

}
