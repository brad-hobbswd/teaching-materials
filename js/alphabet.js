/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Alphabet Printables

   Master JavaScript
   Part 1

   Navigation
   Header
   Search
   Back To Top
========================================== */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       ELEMENTS
    ====================================== */

    const header = document.querySelector("header");

    const mobileButton = document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector("header nav");

    const navigationLinks =
        document.querySelectorAll("header nav a");

    const searchForm =
        document.querySelector(".search-bar");

    const searchInput =
        document.querySelector(".search-bar input");

    const backToTop =
        document.querySelector(".back-to-top");

    /* ======================================
       MOBILE NAVIGATION
    ====================================== */

    if (mobileButton && navigation) {

        mobileButton.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileButton.addEventListener("click", (event) => {

            event.stopPropagation();

            navigation.classList.toggle("active");

            const isOpen =
                navigation.classList.contains("active");

            mobileButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            mobileButton.innerHTML =
                isOpen ? "✕" : "☰";

        });

        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                mobileButton.innerHTML = "☰";

                mobileButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

        document.addEventListener("click", (event) => {

            if (

                !navigation.contains(event.target) &&

                !mobileButton.contains(event.target)

            ) {

                navigation.classList.remove("active");

                mobileButton.innerHTML = "☰";

                mobileButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }

    /* ======================================
       STICKY HEADER
    ====================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ======================================
       ACTIVE NAVIGATION
    ====================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    navigationLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;

        if (

            href.endsWith(currentPage)

        ) {

            navigationLinks.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        }

    });

    /* ======================================
       SEARCH FORM
    ====================================== */

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const value =
                searchInput.value
                .trim()
                .toLowerCase();

            if (value === "") {

                searchInput.focus();

                return;

            }

            const cards = document.querySelectorAll(

                "article, .study-card, .favorite-card, .interest-card, .season-card, .why-card"

            );

            let firstMatch = null;

            cards.forEach(card => {

                const text =
                    card.textContent.toLowerCase();

                if (text.includes(value)) {

                    card.style.outline =
                        "3px solid #4F46E5";

                    card.style.outlineOffset =
                        "4px";

                    if (!firstMatch) {

                        firstMatch = card;

                    }

                } else {

                    card.style.outline = "";

                    card.style.outlineOffset = "";

                }

            });

            if (firstMatch) {

                firstMatch.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            } else {

                alert(
                    "No matching resources were found."
                );

            }

        });

    }

    /* ======================================
       BACK TO TOP
    ====================================== */

    if (backToTop) {

        function toggleBackToTop() {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

        toggleBackToTop();

        window.addEventListener(

            "scroll",

            toggleBackToTop

        );

        backToTop.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================
       ESC KEY CLOSES MOBILE MENU
    ====================================== */

    document.addEventListener("keydown", event => {

        if (

            event.key === "Escape" &&

            navigation &&

            navigation.classList.contains("active")

        ) {

            navigation.classList.remove("active");

            if (mobileButton) {

                mobileButton.innerHTML = "☰";

                mobileButton.setAttribute(

                    "aria-expanded",

                    "false"

                );

            }

        }

    });

});

/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Alphabet Printables

   Master JavaScript
   Part 2

   Scroll Animations
   Counters
   Smooth Scrolling
   Active Sections
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       SCROLL REVEAL ELEMENTS
    ====================================== */

    const revealElements = document.querySelectorAll(

        ".study-card," +

        ".favorite-card," +

        ".interest-card," +

        ".season-card," +

        ".why-card," +

        ".stat-card," +

        ".featured-study-card," +

        ".section-title," +

        ".newsletter-box"

    );

    revealElements.forEach(element => {

        element.classList.add("fade-up");

    });

    /* ======================================
       INTERSECTION OBSERVER
    ====================================== */

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            });

        },

        {

            threshold:0.15,

            rootMargin:"0px 0px -50px 0px"

        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

    /* ======================================
       STAGGER CARD ANIMATIONS
    ====================================== */

    document.querySelectorAll(

        ".study-grid," +

        ".favorite-grid," +

        ".interest-grid," +

        ".season-grid," +

        ".why-grid," +

        ".stats-grid"

    ).forEach(grid => {

        [...grid.children].forEach((card,index)=>{

            card.style.transitionDelay =
                `${index * 90}ms`;

        });

    });

    /* ======================================
       ANIMATED COUNTERS
    ====================================== */

    const statNumbers = document.querySelectorAll(

        ".stat-card h2"

    );

    function animateCounter(element){

        const text = element.textContent.trim();

        const numeric = parseInt(text.replace(/\D/g,""));

        if(isNaN(numeric)) return;

        const suffix = text.replace(/[0-9]/g,"");

        let current = 0;

        const duration = 1500;

        const increment = numeric / (duration / 16);

        function update(){

            current += increment;

            if(current >= numeric){

                element.textContent = numeric + suffix;

                return;

            }

            element.textContent =

                Math.floor(current) + suffix;

            requestAnimationFrame(update);

        }

        update();

    }

    const counterObserver = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    animateCounter(

                        entry.target

                    );

                    counterObserver.unobserve(

                        entry.target

                    );

                }

            });

        },

        {

            threshold:.6

        }

    );

    statNumbers.forEach(counter=>{

        counterObserver.observe(counter);

    });

    /* ======================================
       SMOOTH ANCHOR SCROLLING
    ====================================== */

    document.querySelectorAll(

        'a[href^="#"]'

    ).forEach(link=>{

        link.addEventListener(

            "click",

            event=>{

                const targetID =

                    link.getAttribute("href");

                if(

                    targetID === "#" ||

                    targetID.length < 2

                ) return;

                const target =

                    document.querySelector(

                        targetID

                    );

                if(!target) return;

                event.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        );

    });

    /* ======================================
       ACTIVE SECTION HIGHLIGHT
    ====================================== */

    const sections =

        document.querySelectorAll("section[id]");

    const navLinks =

        document.querySelectorAll(

            'nav a[href^="#"]'

        );

    if(sections.length && navLinks.length){

        const sectionObserver =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(!entry.isIntersecting) return;

                    const id =

                        entry.target.id;

                    navLinks.forEach(link=>{

                        link.classList.remove(

                            "active"

                        );

                        if(

                            link.getAttribute("href")

                            ===

                            "#" + id

                        ){

                            link.classList.add(

                                "active"

                            );

                        }

                    });

                });

            },

            {

                threshold:.35

            }

        );

        sections.forEach(section=>{

            sectionObserver.observe(section);

        });

    }

    /* ======================================
       PARALLAX HERO
    ====================================== */

    const hero =

        document.querySelector(

            ".study-hero"

        );

    if(hero){

        window.addEventListener(

            "scroll",

            ()=>{

                const offset =

                    window.scrollY * .35;

                hero.style.backgroundPosition =

                    `center ${offset}px`;

            },

            {

                passive:true

            }

        );

    }

    /* ======================================
       CARD HOVER TILT
    ====================================== */

    const interactiveCards =

        document.querySelectorAll(

            ".study-card," +

            ".favorite-card," +

            ".interest-card"

        );

    interactiveCards.forEach(card=>{

        card.addEventListener(

            "mousemove",

            event=>{

                const rect =

                    card.getBoundingClientRect();

                const x =

                    event.clientX - rect.left;

                const y =

                    event.clientY - rect.top;

                const rotateY =

                    ((x / rect.width) - .5) * 6;

                const rotateX =

                    ((y / rect.height) - .5) * -6;

                card.style.transform =

                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }

        );

        card.addEventListener(

            "mouseleave",

            ()=>{

                card.style.transform="";

            }

        );

    });

    /* ======================================
       IMAGE FADE IN
    ====================================== */

    document.querySelectorAll("img").forEach(image=>{

        if(image.complete){

            image.classList.add("loaded");

        }else{

            image.addEventListener(

                "load",

                ()=>{

                    image.classList.add(

                        "loaded"

                    );

                }

            );

        }

    });

});

/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Alphabet Printables

   Master JavaScript
   Part 3

   FAQ
   Newsletter
   Toast Notifications
   Lazy Loading
   Accessibility
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       FAQ ACCORDION
    ====================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button =

            item.querySelector(".faq-question");

        const answer =

            item.querySelector(".faq-answer");

        if (!button || !answer) return;

        button.setAttribute(
            "aria-expanded",
            "false"
        );

        answer.style.maxHeight = "0px";

        button.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                const q =
                    faq.querySelector(".faq-question");

                const a =
                    faq.querySelector(".faq-answer");

                if (q) {

                    q.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

                if (a) {

                    a.style.maxHeight = "0px";

                }

            });

            if (!isOpen) {

                item.classList.add("active");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });

    /* ======================================
       NEWSLETTER FORM
    ====================================== */

    const newsletterForm =

        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(

            "submit",

            function () {

                setTimeout(() => {

                    showToast(

                        "Thank you for joining our community!",

                        "success"

                    );

                    newsletterForm.reset();

                }, 700);

            }

        );

    }

    /* ======================================
       EMAIL VALIDATION
    ====================================== */

    const emailField =

        document.querySelector(

            '.newsletter-form input[type="email"]'

        );

    if (emailField) {

        emailField.addEventListener(

            "blur",

            () => {

                const value =
                    emailField.value.trim();

                if (

                    value === ""

                ) return;

                const valid =

                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                    .test(value);

                if (!valid) {

                    emailField.classList.add(

                        "input-error"

                    );

                    showToast(

                        "Please enter a valid email address.",

                        "error"

                    );

                } else {

                    emailField.classList.remove(

                        "input-error"

                    );

                }

            }

        );

    }

    /* ======================================
       TOAST NOTIFICATION
    ====================================== */

    function showToast(

        message,

        type = "success"

    ) {

        const toast =

            document.createElement("div");

        toast.className =

            `toast toast-${type}`;

        toast.innerHTML =

            `<span>${message}</span>`;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {

            toast.classList.add("show");

        });

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 3500);

    }

    window.showToast = showToast;

    /* ======================================
       LAZY IMAGE LOADING
    ====================================== */

    const lazyImages =

        document.querySelectorAll(

            "img[data-src]"

        );

    if (lazyImages.length) {

        const imageObserver =

            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (

                            !entry.isIntersecting

                        ) return;

                        const image =

                            entry.target;

                        image.src =

                            image.dataset.src;

                        image.removeAttribute(

                            "data-src"

                        );

                        imageObserver.unobserve(

                            image

                        );

                    });

                },

                {

                    rootMargin:"100px"

                }

            );

        lazyImages.forEach(image => {

            imageObserver.observe(image);

        });

    }

    /* ======================================
       IMAGE ERROR HANDLING
    ====================================== */

    document.querySelectorAll("img")

        .forEach(image => {

            image.addEventListener(

                "error",

                () => {

                    image.src =

                        "../images/placeholder.jpg";

                }

            );

        });

    /* ======================================
       KEYBOARD ACCESSIBILITY
    ====================================== */

    document.addEventListener(

        "keydown",

        event => {

            if (

                event.key === "/"

            ) {

                const active =

                    document.activeElement;

                const typing =

                    active.tagName === "INPUT" ||

                    active.tagName === "TEXTAREA";

                if (!typing) {

                    event.preventDefault();

                    const search =

                        document.querySelector(

                            ".search-bar input"

                        );

                    if (search) {

                        search.focus();

                    }

                }

            }

        }

    );

    /* ======================================
       COPY DOWNLOAD LINKS
    ====================================== */

    document.querySelectorAll(

        '.study-footer a'

    ).forEach(link => {

        link.addEventListener(

            "click",

            event => {

                if (

                    link.getAttribute("href") === "#"

                ) {

                    event.preventDefault();

                    showToast(

                        "Download coming soon.",

                        "success"

                    );

                }

            }

        );

    });

    /* ======================================
       RIPPLE EFFECT
    ====================================== */

    document.querySelectorAll(

        ".btn, button"

    ).forEach(button => {

        button.addEventListener(

            "click",

            function (event) {

                const ripple =

                    document.createElement("span");

                ripple.className =

                    "ripple";

                const rect =

                    this.getBoundingClientRect();

                ripple.style.left =

                    `${event.clientX - rect.left}px`;

                ripple.style.top =

                    `${event.clientY - rect.top}px`;

                this.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }

        );

    });

    /* ======================================
       PRELOAD IMAGES
    ====================================== */

    const importantImages = [

        "../images/printables/alphabet-cards.jpg",

        "../images/printables/letter-tracing.jpg",

        "../images/printables/alphabet-posters.jpg"

    ];

    importantImages.forEach(src => {

        const image = new Image();

        image.src = src;

    });

    /* ======================================
       ONLINE STATUS
    ====================================== */

    window.addEventListener(

        "offline",

        () => {

            showToast(

                "You appear to be offline.",

                "error"

            );

        }

    );

    window.addEventListener(

        "online",

        () => {

            showToast(

                "Connection restored.",

                "success"

            );

        }

    );

});

/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Alphabet Printables

   Master JavaScript
   Part 4

   Performance
   Accessibility
   User Experience
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       DEBOUNCE
    ====================================== */

    function debounce(callback, delay = 250) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback.apply(null, args);

            }, delay);

        };

    }

    /* ======================================
       THROTTLE
    ====================================== */

    function throttle(callback, delay = 100) {

        let waiting = false;

        return (...args) => {

            if (waiting) return;

            callback.apply(null, args);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    }

    /* ======================================
       WINDOW RESIZE
    ====================================== */

    const handleResize = debounce(() => {

        const navigation =

            document.querySelector("header nav");

        const mobileButton =

            document.querySelector(".mobile-menu");

        if (

            window.innerWidth > 992 &&

            navigation

        ) {

            navigation.classList.remove("active");

            if (mobileButton) {

                mobileButton.innerHTML = "☰";

                mobileButton.setAttribute(

                    "aria-expanded",

                    "false"

                );

            }

        }

    }, 250);

    window.addEventListener(

        "resize",

        handleResize

    );

    /* ======================================
       SCROLL PROGRESS BAR
    ====================================== */

    let progressBar =

        document.querySelector(

            ".scroll-progress"

        );

    if (!progressBar) {

        progressBar =

            document.createElement("div");

        progressBar.className =

            "scroll-progress";

        document.body.appendChild(

            progressBar

        );

    }

    const updateProgress = throttle(() => {

        const scrollTop =

            window.scrollY;

        const height =

            document.documentElement

            .scrollHeight -

            window.innerHeight;

        const progress =

            (scrollTop / height) * 100;

        progressBar.style.width =

            progress + "%";

    });

    window.addEventListener(

        "scroll",

        updateProgress,

        {

            passive:true

        }

    );

    /* ======================================
       READING TIME
    ====================================== */

    const article =

        document.querySelector("main") ||

        document.body;

    const words =

        article.innerText

        .trim()

        .split(/\s+/).length;

    const readingTime =

        Math.max(

            1,

            Math.ceil(words / 200)

        );

    console.log(

        `Estimated reading time: ${readingTime} minute(s).`

    );

    /* ======================================
       EXTERNAL LINKS
    ====================================== */

    document.querySelectorAll(

        'a[href^="http"]'

    ).forEach(link => {

        if (

            !link.hostname.includes(

                window.location.hostname

            )

        ) {

            link.setAttribute(

                "target",

                "_blank"

            );

            link.setAttribute(

                "rel",

                "noopener noreferrer"

            );

        }

    });

    /* ======================================
       COPY EMAIL
    ====================================== */

    document.querySelectorAll(

        '[data-copy]'

    ).forEach(element => {

        element.addEventListener(

            "click",

            async () => {

                try {

                    await navigator.clipboard.writeText(

                        element.dataset.copy

                    );

                    if (

                        window.showToast

                    ) {

                        showToast(

                            "Copied to clipboard."

                        );

                    }

                }

                catch(error){

                    console.error(error);

                }

            }

        );

    });

    /* ======================================
       KEYBOARD CARD SUPPORT
    ====================================== */

    document.querySelectorAll(

        ".study-card," +

        ".favorite-card," +

        ".interest-card," +

        ".season-card"

    ).forEach(card => {

        card.setAttribute(

            "tabindex",

            "0"

        );

        card.addEventListener(

            "keydown",

            event => {

                if (

                    event.key === "Enter"

                ) {

                    const link =

                        card.querySelector("a");

                    if (link) {

                        link.click();

                    }

                }

            }

        );

    });

    /* ======================================
       AUTO CLOSE TOASTS
    ====================================== */

    const observer =

        new MutationObserver(() => {

            document.querySelectorAll(

                ".toast"

            ).forEach(toast => {

                if (

                    toast.dataset.bound

                ) return;

                toast.dataset.bound = true;

                toast.addEventListener(

                    "click",

                    () => {

                        toast.remove();

                    }

                );

            });

        });

    observer.observe(

        document.body,

        {

            childList:true,

            subtree:true

        }

    );

    /* ======================================
       FOCUS OUTLINES
    ====================================== */

    document.body.addEventListener(

        "mousedown",

        () => {

            document.body.classList.add(

                "using-mouse"

            );

        }

    );

    document.body.addEventListener(

        "keydown",

        () => {

            document.body.classList.remove(

                "using-mouse"

            );

        }

    );

    /* ======================================
       PAGE VISIBILITY
    ====================================== */

    document.addEventListener(

        "visibilitychange",

        () => {

            if (

                document.hidden

            ) {

                console.log(

                    "Page hidden"

                );

            } else {

                console.log(

                    "Page active"

                );

            }

        }

    );

    /* ======================================
       PREFERS REDUCED MOTION
    ====================================== */

    const reducedMotion =

        window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        );

    if (

        reducedMotion.matches

    ) {

        document.documentElement

            .classList.add(

                "reduce-motion"

            );

    }

    /* ======================================
       TOUCH DEVICE
    ====================================== */

    if (

        "ontouchstart" in window ||

        navigator.maxTouchPoints > 0

    ) {

        document.documentElement

            .classList.add(

                "touch-device"

            );

    }

    /* ======================================
       IDLE CALLBACK
    ====================================== */

    if (

        "requestIdleCallback" in window

    ) {

        requestIdleCallback(() => {

            console.log(

                "Browser is idle."

            );

        });

    }

    /* ======================================
       PAGE LOADED
    ====================================== */

    window.addEventListener(

        "load",

        () => {

            document.body.classList.add(

                "page-loaded"

            );

        }

    );

});

/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Alphabet Printables

   Master JavaScript
   Part 5

   Final Utilities
   Performance
   Production Polish
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       HELPER FUNCTIONS
    ====================================== */

    const $ = selector =>
        document.querySelector(selector);

    const $$ = selector =>
        [...document.querySelectorAll(selector)];

    const random = (min, max) =>
        Math.floor(
            Math.random() * (max - min + 1)
        ) + min;

    /* ======================================
       CSS VARIABLE HELPER
    ====================================== */

    function cssVariable(name) {

        return getComputedStyle(

            document.documentElement

        ).getPropertyValue(name);

    }

    /* ======================================
       LOCAL STORAGE
    ====================================== */

    const storage = {

        set(key, value) {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

        },

        get(key) {

            const value =

                localStorage.getItem(key);

            return value

                ? JSON.parse(value)

                : null;

        },

        remove(key) {

            localStorage.removeItem(key);

        }

    };

    /* ======================================
       LAST VISIT
    ====================================== */

    const lastVisit =

        storage.get("lastVisit");

    if (lastVisit) {

        console.log(

            `Welcome back.
             Last visit:

             ${lastVisit}`

        );

    }

    storage.set(

        "lastVisit",

        new Date().toLocaleString()

    );

    /* ======================================
       SAVE SCROLL POSITION
    ====================================== */

    const pageKey =

        window.location.pathname;

    const scrollKey =

        `scroll-${pageKey}`;

    const savedScroll =

        storage.get(scrollKey);

    if (

        savedScroll !== null

    ) {

        window.scrollTo({

            top: savedScroll,

            behavior: "instant"

        });

    }

    window.addEventListener(

        "beforeunload",

        () => {

            storage.set(

                scrollKey,

                window.scrollY

            );

        }

    );

    /* ======================================
       IMAGE PRELOADER
    ====================================== */

    function preloadImages() {

        $$("img").forEach(image => {

            const preload =

                new Image();

            preload.src = image.src;

        });

    }

    window.addEventListener(

        "load",

        preloadImages

    );

    /* ======================================
       RANDOM HERO ANIMATION
    ====================================== */

    const hero =

        $(".study-hero");

    if (hero) {

        const animations = [

            "float",

            "pulse",

            "fade-in"

        ];

        hero.classList.add(

            animations[

                random(

                    0,

                    animations.length - 1

                )

            ]

        );

    }

    /* ======================================
       CARD HOVER SOUND
       Optional
    ====================================== */

    const enableSound = false;

    if (enableSound) {

        const audio =

            new Audio(

                "../sounds/hover.mp3"

            );

        $$(
            ".study-card, .favorite-card"
        ).forEach(card => {

            card.addEventListener(

                "mouseenter",

                () => {

                    audio.currentTime = 0;

                    audio.play();

                }

            );

        });

    }

    /* ======================================
       PRINT BUTTON
    ====================================== */

    const printButton =

        $(".print-page");

    if (printButton) {

        printButton.addEventListener(

            "click",

            () => {

                window.print();

            }

        );

    }

    /* ======================================
       SHARE BUTTON
    ====================================== */

    const shareButton =

        $(".share-page");

    if (

        shareButton &&

        navigator.share

    ) {

        shareButton.addEventListener(

            "click",

            async () => {

                try {

                    await navigator.share({

                        title:document.title,

                        text:

                        document.title,

                        url:

                        location.href

                    });

                }

                catch(error){

                    console.log(error);

                }

            }

        );

    }

    /* ======================================
       COPY PAGE URL
    ====================================== */

    const copyButton =

        $(".copy-link");

    if (copyButton) {

        copyButton.addEventListener(

            "click",

            async () => {

                try {

                    await navigator.clipboard

                        .writeText(

                            location.href

                        );

                    if (

                        window.showToast

                    ) {

                        showToast(

                            "Page link copied."

                        );

                    }

                }

                catch(error){

                    console.log(error);

                }

            }

        );

    }

    /* ======================================
       CURRENT YEAR
    ====================================== */

    $$("[data-year]").forEach(element => {

        element.textContent =

            new Date().getFullYear();

    });

    /* ======================================
       PERFORMANCE TIMER
    ====================================== */

    window.addEventListener(

        "load",

        () => {

            const timing =

                performance.now();

            console.log(

                `Loaded in

                ${timing.toFixed(0)}ms`

            );

        }

    );

    /* ======================================
       SERVICE WORKER
       Optional
    ====================================== */

    if (

        "serviceWorker" in navigator

    ) {

        window.addEventListener(

            "load",

            () => {

                navigator.serviceWorker

                    .register(

                        "../service-worker.js"

                    )

                    .catch(() => {});

            }

        );

    }

    /* ======================================
       KEYBOARD SHORTCUTS
    ====================================== */

    document.addEventListener(

        "keydown",

        event => {

            if (

                event.altKey &&

                event.key === "t"

            ) {

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        }

    );

    /* ======================================
       REMOVE EMPTY LINKS
    ====================================== */

    $$("a").forEach(link => {

        if (

            link.getAttribute("href") === "#"

        ) {

            link.classList.add(

                "disabled-link"

            );

        }

    });

    /* ======================================
       CONSOLE BRANDING
    ====================================== */

    console.log(

        "%cLittle Explorers Learning Hub",

        "color:#4F46E5;font-size:18px;font-weight:bold;"

    );

    console.log(

        "%cHelping educators inspire lifelong learners.",

        "color:#10B981;font-size:13px;"

    );

    /* ======================================
       DIAGNOSTICS
    ====================================== */

    console.table({

        JavaScript:"Loaded",

        MobileMenu:!!$(".mobile-menu"),

        Navigation:!!$("nav"),

        Search:!!$(".search-bar"),

        Newsletter:!!$(".newsletter-form"),

        Cards:$$(".study-card").length,

        Images:$$("img").length

    });

    /* ======================================
       FINAL PAGE READY
    ====================================== */

    document.body.classList.add(

        "site-ready"

    );

    document.dispatchEvent(

        new CustomEvent(

            "littleExplorersReady"

        )

    );

});

/* ==========================================
   END OF MASTER JAVASCRIPT

   Little Explorers Learning Hub
   Alphabet Printables

   Version 1.0
========================================== */
