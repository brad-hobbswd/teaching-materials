/* =========================================================
   LITTLE EXPLORERS LEARNING HUB
   PROFESSIONAL DEVELOPMENT
   professional-development.js
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
   PROFESSIONAL DEVELOPMENT DATA
========================================================= */

const resources = {

    leadership: {

        label:
            "LEADERSHIP RESOURCE",

        title:
            "Teacher Leadership",

        description:
            "Leadership can begin in the classroom. Explore ways educators can strengthen professional influence, collaboration, communication, and responsibility.",

        resources: [

            {
                title:
                    "Lead Yourself",

                description:
                    "Develop reliability, self awareness, professionalism, reflection, and a commitment to continued learning."
            },

            {
                title:
                    "Lead the Classroom",

                description:
                    "Create environments that support relationships, independence, exploration, learning, and children's development."
            },

            {
                title:
                    "Lead With Others",

                description:
                    "Collaborate with colleagues, communicate respectfully, share knowledge, and contribute to team problem solving."
            },

            {
                title:
                    "Mentor Others",

                description:
                    "Use experience and reflection to support colleagues who are developing their own professional practice."
            }

        ]

    },


    training: {

        label:
            "PROFESSIONAL TRAINING",

        title:
            "Professional Learning",

        description:
            "Build a professional learning pathway around the knowledge and skills that matter most to your role and career.",

        resources: [

            {
                title:
                    "Identify a Learning Goal",

                description:
                    "Choose one area of practice you want to understand more deeply or strengthen."
            },

            {
                title:
                    "Find Quality Learning",

                description:
                    "Look for credible training, professional organizations, research, coaching, mentoring, and other learning opportunities."
            },

            {
                title:
                    "Apply the Learning",

                description:
                    "Identify one specific way to use what you learned in your classroom or professional role."
            },

            {
                title:
                    "Document Growth",

                description:
                    "Keep notes about completed learning, reflections, changes in practice, and future learning goals."
            }

        ]

    },


    research: {

        label:
            "RESEARCH RESOURCE",

        title:
            "Research Based Practice",

        description:
            "Use research as one source of professional knowledge while considering children's needs, context, experience, and professional judgment.",

        resources: [

            {
                title:
                    "Read the Evidence",

                description:
                    "Look beyond headlines and consider the methods, population, limitations, and findings of research."
            },

            {
                title:
                    "Ask What It Means",

                description:
                    "Consider what the research may mean for children, educators, classrooms, families, and programs."
            },

            {
                title:
                    "Connect Research to Practice",

                description:
                    "Identify specific classroom decisions or teaching practices that may be informed by the evidence."
            },

            {
                title:
                    "Reflect on Context",

                description:
                    "Consider whether an approach fits the children, families, culture, environment, and goals of your setting."
            }

        ]

    },


    strategies: {

        label:
            "TEACHING STRATEGIES",

        title:
            "Intentional Teaching Strategies",

        description:
            "Strengthen everyday teaching through responsive interactions, intentional questioning, modeling, scaffolding, and observation.",

        resources: [

            {
                title:
                    "Observe",

                description:
                    "Watch closely before deciding what children need. Observation provides information that supports intentional decisions."
            },

            {
                title:
                    "Question",

                description:
                    "Use questions that invite children to explain, predict, compare, reason, describe, and communicate."
            },

            {
                title:
                    "Model",

                description:
                    "Demonstrate language, problem solving, social interaction, literacy, movement, and other skills in meaningful contexts."
            },

            {
                title:
                    "Scaffold",

                description:
                    "Provide support that helps children participate successfully while gradually increasing independence."
            }

        ]

    },


    reflection: {

        label:
            "PROFESSIONAL REFLECTION",

        title:
            "Reflective Practice",

        description:
            "Use reflection to examine your decisions, interactions, environment, relationships, and impact.",

        resources: [

            {
                title:
                    "What Happened?",

                description:
                    "Describe the experience objectively before deciding what it means."
            },

            {
                title:
                    "Why Did It Happen?",

                description:
                    "Consider the environment, interactions, expectations, materials, relationships, and context."
            },

            {
                title:
                    "What Did I Learn?",

                description:
                    "Identify what the experience revealed about children, teaching, relationships, or your own practice."
            },

            {
                title:
                    "What Comes Next?",

                description:
                    "Choose one thoughtful adjustment or next step based on what you learned."
            }

        ]

    },


    career: {

        label:
            "CAREER DEVELOPMENT",

        title:
            "Professional Career Growth",

        description:
            "Create a deliberate pathway toward the educator, leader, mentor, specialist, or administrator you want to become.",

        resources: [

            {
                title:
                    "Set Professional Goals",

                description:
                    "Identify short term and long term goals that are specific enough to guide action."
            },

            {
                title:
                    "Build a Professional Portfolio",

                description:
                    "Collect evidence of teaching practice, professional learning, accomplishments, reflections, and leadership."
            },

            {
                title:
                    "Strengthen Credentials",

                description:
                    "Identify degrees, credentials, certifications, training, and experiences that support your professional direction."
            },

            {
                title:
                    "Seek Leadership Opportunities",

                description:
                    "Look for meaningful opportunities to mentor, collaborate, lead projects, support teams, or contribute to program improvement."
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
        ".principle-card, .resource-card, .leadership-item, .practice-card, .cycle-step, .reflection-question"
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
