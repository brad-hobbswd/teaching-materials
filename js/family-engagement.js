/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   FAMILY ENGAGEMENT
   family-engagement.js
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");

const resourceModal =
    document.getElementById("resourceModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const closeResource =
    document.getElementById("closeResource");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalResourceGrid =
    document.getElementById("modalResourceGrid");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   CURRENT YEAR
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

            const isOpen =
                mainNavigation.classList.toggle(
                    "open"
                );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
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
   RESOURCE DATA
========================================================= */

const resources = {

    newsletters: {

        label:
            "COMMUNICATION RESOURCE",

        title:
            "Family Newsletter Tools",

        description:
            "Use newsletters to keep families informed, connected, and invited into the learning taking place in the classroom.",

        resources: [

            {
                title:
                    "Monthly Newsletter",

                description:
                    "Share classroom learning, upcoming events, important reminders, family resources, celebrations, and ways families can connect learning to home."
            },

            {
                title:
                    "Weekly Classroom Update",

                description:
                    "Provide a short snapshot of what children explored, what they are learning, and what families may notice or continue at home."
            },

            {
                title:
                    "Learning Highlight",

                description:
                    "Celebrate a classroom experience and explain what children were learning through the activity."
            },

            {
                title:
                    "Family Question",

                description:
                    "End communication with a genuine question that invites families to respond and share their knowledge."
            }

        ]

    },


    activities: {

        label:
            "HOME CONNECTION RESOURCE",

        title:
            "Family Activity Ideas",

        description:
            "Family learning can happen through ordinary routines, conversations, play, exploration, reading, cooking, and shared experiences.",

        resources: [

            {
                title:
                    "Read and Talk",

                description:
                    "Invite families to read together and talk about characters, pictures, feelings, predictions, and connections to their own lives."
            },

            {
                title:
                    "Math in Everyday Life",

                description:
                    "Count objects, compare sizes, notice patterns, measure ingredients, or sort household items together."
            },

            {
                title:
                    "Family Science",

                description:
                    "Explore what happens when children make predictions, observe changes, ask questions, and investigate everyday materials."
            },

            {
                title:
                    "Conversation Starters",

                description:
                    "Provide simple questions families can use to encourage children to describe experiences, explain ideas, and share thinking."
            }

        ]

    },


    conferences: {

        label:
            "CONFERENCE RESOURCE",

        title:
            "Family Conference Tools",

        description:
            "Prepare for conversations that celebrate strengths, share observations, listen to family perspectives, and identify meaningful next steps.",

        resources: [

            {
                title:
                    "Before the Conference",

                description:
                    "Review observations, learning experiences, strengths, questions, family information, and possible goals before meeting."
            },

            {
                title:
                    "Conversation Starters",

                description:
                    "Begin with strengths and invite families to share what they are seeing, wondering about, and hoping for."
            },

            {
                title:
                    "Strengths Based Discussion",

                description:
                    "Describe what the child demonstrates and explain the classroom experiences that allow those strengths to be visible."
            },

            {
                title:
                    "Follow Up",

                description:
                    "Document shared decisions and identify who will do what next so the partnership continues after the conference."
            }

        ]

    },


    communication: {

        label:
            "COMMUNICATION RESOURCE",

        title:
            "Communication Tools",

        description:
            "Create communication that is clear, respectful, strengths based, and designed to support genuine two way relationships.",

        resources: [

            {
                title:
                    "Welcome Message",

                description:
                    "Introduce yourself, your classroom, and your commitment to building a respectful partnership with each family."
            },

            {
                title:
                    "Positive Connection",

                description:
                    "Send a brief message when a child demonstrates something meaningful, helpful, kind, persistent, creative, or exciting."
            },

            {
                title:
                    "Daily Connection",

                description:
                    "Share one meaningful moment from the child's day rather than relying only on routine information."
            },

            {
                title:
                    "Family Feedback",

                description:
                    "Ask families what is working, what they need, and how communication can better support their relationship with the classroom."
            }

        ]

    },


    partnerships: {

        label:
            "PARTNERSHIP RESOURCE",

        title:
            "Family Partnership Tools",

        description:
            "Build relationships around mutual respect, family strengths, shared goals, and meaningful participation.",

        resources: [

            {
                title:
                    "Family Strengths",

                description:
                    "Invite families to identify what their child enjoys, what they do well, and what makes their family unique."
            },

            {
                title:
                    "Shared Goals",

                description:
                    "Work with families to identify goals that matter to them and determine how classroom and home experiences can support those goals."
            },

            {
                title:
                    "Family Voice",

                description:
                    "Create opportunities for families to influence classroom experiences, events, communication, and program decisions."
            },

            {
                title:
                    "Partnership Reflection",

                description:
                    "Reflect on whether families feel welcomed, heard, respected, informed, and included in meaningful ways."
            }

        ]

    },


    events: {

        label:
            "FAMILY EXPERIENCE RESOURCE",

        title:
            "Family Event Tools",

        description:
            "Create family experiences that are welcoming, meaningful, flexible, and connected to children's learning.",

        resources: [

            {
                title:
                    "Family Learning Night",

                description:
                    "Invite families into hands on learning experiences that demonstrate how children explore and learn through play."
            },

            {
                title:
                    "Family Reading Event",

                description:
                    "Create a relaxed environment where families can share books, stories, songs, and conversations."
            },

            {
                title:
                    "Family Workshop",

                description:
                    "Provide practical information and opportunities for families to learn, ask questions, practice strategies, and share experiences."
            },

            {
                title:
                    "Family Celebration",

                description:
                    "Celebrate children's learning, family contributions, classroom accomplishments, and the relationships built throughout the year."
            }

        ]

    }

};


/* =========================================================
   OPEN RESOURCE
========================================================= */

function openResource(resourceKey) {

    const resource =
        resources[resourceKey];

    if (!resource) {
        return;
    }


    modalLabel.textContent =
        resource.label;

    modalTitle.textContent =
        resource.title;

    modalDescription.textContent =
        resource.description;


    modalResourceGrid.innerHTML =
        "";


    resource.resources.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "modal-resource-card";


        const heading =
            document.createElement("h3");

        heading.textContent =
            item.title;


        const description =
            document.createElement("p");

        description.textContent =
            item.description;


        card.appendChild(
            heading
        );

        card.appendChild(
            description
        );

        modalResourceGrid.appendChild(
            card
        );

    });


    resourceModal.classList.add(
        "open"
    );

    resourceModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   RESOURCE BUTTONS
========================================================= */

document
    .querySelectorAll("[data-resource]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const resourceKey =
                    button.dataset.resource;

                openResource(
                    resourceKey
                );

            }
        );

    });


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeResourceModal() {

    resourceModal.classList.remove(
        "open"
    );

    resourceModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeResourceModal
    );

}


if (closeResource) {

    closeResource.addEventListener(
        "click",
        closeResourceModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeResourceModal
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
            resourceModal.classList.contains("open")
        ) {

            closeResourceModal();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".principle-card, .resource-card, .communication-item, .activity-card, .conference-step, .question-card"
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
