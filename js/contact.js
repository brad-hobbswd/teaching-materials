/* ==========================================================
   LITTLE EXPLORERS LEARNING HUB
   Contact Page JavaScript
========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();
    initializeSmoothScrolling();
    initializeFAQ();
    initializeContactForm();
    initializeNewsletter();
    initializeCharacterCounter();
    initializeScrollAnimations();
    initializeBackToTop();
    initializeRevealAnimations();
    initializeAccessibility();

});

/* ======================================
   Mobile Navigation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const mobileButton = document.getElementById("mobile-menu-button");
    const navigation = document.getElementById("primary-navigation");

    if (!mobileButton || !navigation) return;

    mobileButton.addEventListener("click", (event) => {

        event.stopPropagation();

        navigation.classList.toggle("active");

        const expanded =
            navigation.classList.contains("active");

        mobileButton.setAttribute(
            "aria-expanded",
            expanded
        );

        mobileButton.innerHTML = expanded
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.addEventListener("click", (event) => {

        if (
            !navigation.contains(event.target) &&
            !mobileButton.contains(event.target)
        ) {

            navigation.classList.remove("active");

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

});

/* ==========================================================
   Smooth Scrolling
========================================================== */

function initializeSmoothScrolling() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", event => {

                const target =
                    document.querySelector(anchor.getAttribute("href"));

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            });

        });

}

/* ==========================================================
   FAQ Accordion
========================================================== */

function initializeFAQ() {

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!button || !answer) return;

        button.setAttribute("aria-expanded", "false");

        if (!answer.id) {

            answer.id = `faq-${Math.random().toString(36).slice(2, 9)}`;

        }

        button.setAttribute("aria-controls", answer.id);
        answer.setAttribute("role", "region");
        answer.setAttribute("aria-hidden", "true");

        button.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            closeAllFAQs();

            if (!isOpen) {

                openFAQ(item);

            }

        });

        button.addEventListener("keydown", event => {

            switch (event.key) {

                case "Enter":
                case " ":

                    event.preventDefault();
                    button.click();

                    break;

                case "ArrowDown":

                    event.preventDefault();

                    focusNextFAQ(item);

                    break;

                case "ArrowUp":

                    event.preventDefault();

                    focusPreviousFAQ(item);

                    break;

                case "Home":

                    event.preventDefault();

                    faqItems[0]
                        .querySelector(".faq-question")
                        .focus();

                    break;

                case "End":

                    event.preventDefault();

                    faqItems[faqItems.length - 1]
                        .querySelector(".faq-question")
                        .focus();

                    break;

            }

        });

    });

}

/* ==========================================================
   Open FAQ
========================================================== */

function openFAQ(item) {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    item.classList.add("active");

    button.setAttribute("aria-expanded", "true");
    answer.setAttribute("aria-hidden", "false");

    answer.style.maxHeight =
        answer.scrollHeight + "px";

}

/* ==========================================================
   Close FAQ
========================================================== */

function closeFAQ(item) {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    item.classList.remove("active");

    button.setAttribute("aria-expanded", "false");
    answer.setAttribute("aria-hidden", "true");

    answer.style.maxHeight = null;

}

/* ==========================================================
   Close All FAQs
========================================================== */

function closeAllFAQs() {

    document.querySelectorAll(".faq-item.active")
        .forEach(closeFAQ);

}

/* ==========================================================
   Keyboard Navigation
========================================================== */

function focusNextFAQ(currentItem) {

    const items =
        [...document.querySelectorAll(".faq-item")];

    const index =
        items.indexOf(currentItem);

    const next =
        items[index + 1] || items[0];

    next.querySelector(".faq-question").focus();

}

function focusPreviousFAQ(currentItem) {

    const items =
        [...document.querySelectorAll(".faq-item")];

    const index =
        items.indexOf(currentItem);

    const previous =
        items[index - 1] ||
        items[items.length - 1];

    previous.querySelector(".faq-question").focus();

}


      /* ==========================================================
   Contact Form
   Part 3A
   Validation & User Experience
========================================================== */

function initializeContactForm() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');

    const requiredFields =
        form.querySelectorAll("[required]");

    /* ==========================================
       Live Validation
    ========================================== */

    requiredFields.forEach(field => {

        field.addEventListener("blur", () => {

            validateField(field);

        });

        field.addEventListener("input", () => {

            clearFieldError(field);

        });

    });

    /* ==========================================
       Phone Formatting
    ========================================== */

    const phone =
        form.querySelector('input[type="tel"]');

    if (phone) {

        phone.addEventListener("input", formatPhoneNumber);

    }

    /* ==========================================
       Submit
    ========================================== */

   form.addEventListener("submit", event => {

    event.preventDefault();

    /* ==========================================
       Spam Protection
    ========================================== */

    if (!checkHoneypot(form)) {

        return;

    }

    if (!canSubmit()) {

        showFormMessage(

            "Please wait a few seconds before submitting again.",

            "error"

        );

        return;

    }

    let valid = true;

    requiredFields.forEach(field => {

        if (!validateField(field)) {

            valid = false;

        }

    });

        if (!valid) {

            showFormMessage(
                "Please correct the highlighted fields before submitting.",
                "error"
            );

            return;

        }

       startLoading(submitButton);

fetch("YOUR_FORM_ENDPOINT", {

    method: "POST",

    body: new FormData(form),

    headers: {

        Accept: "application/json"

    }

})
.then(response => {

    stopLoading(submitButton);

    if (response.ok) {

        showFormMessage(
            "Thank you! Your message has been sent.",
            "success"
        );

        form.reset();

    } else {

        showFormMessage(
            "Sorry, something went wrong. Please try again.",
            "error"
        );

    }

})
.catch(() => {

    stopLoading(submitButton);

    showFormMessage(
        "Unable to connect. Please try again later.",
        "error"
    );

});

    });

}

/* ==========================================================
   Validate Individual Field
========================================================== */

function validateField(field) {

    const value = field.value.trim();

    clearFieldError(field);

    if (field.hasAttribute("required") && !value) {

        showFieldError(field, "This field is required.");

        return false;

    }

    if (field.type === "email") {

        if (!validateEmail(value)) {

            showFieldError(
                field,
                "Please enter a valid email address."
            );

            return false;

        }

    }

    return true;

}

/* ==========================================================
   Email Validation
========================================================== */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}

/* ==========================================================
   Display Field Error
========================================================== */

function showFieldError(field, message) {

    field.classList.add("invalid");

    const error =
        document.createElement("div");

    error.className = "field-error";

    error.textContent = message;

    field.parentNode.appendChild(error);

}

/* ==========================================================
   Remove Field Error
========================================================== */

function clearFieldError(field) {

    field.classList.remove("invalid");

    const existing =
        field.parentNode.querySelector(".field-error");

    if (existing) {

        existing.remove();

    }

}

/* ==========================================================
   Form Message
========================================================== */

function showFormMessage(message, type) {

    const existing =
        document.querySelector(".form-success, .form-error");

    if (existing) {

        existing.remove();

    }

    const form =
        document.querySelector(".contact-form");

    const alert =
        document.createElement("div");

    alert.className =
        type === "success"
            ? "form-success"
            : "form-error";

    alert.innerHTML = `

        <i class="fas ${
            type === "success"
                ? "fa-circle-check"
                : "fa-circle-exclamation"
        }"></i>

        <div>

            <h3>${
                type === "success"
                    ? "Success!"
                    : "Please Review"
            }</h3>

            <p>${message}</p>

        </div>

    `;

    form.prepend(alert);

    alert.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}

/* ==========================================================
   Loading Button
========================================================== */

function startLoading(button) {

    button.disabled = true;

    button.dataset.original =
        button.innerHTML;

    button.innerHTML = `

        <i class="fas fa-spinner fa-spin"></i>

        Sending...

    `;

}

function stopLoading(button) {

    button.disabled = false;

    button.innerHTML =
        button.dataset.original;

}


          /* ==========================================================
   Contact Form
   Part 3B
   Auto Save • Character Counter • Phone Formatting
========================================================== */

/* ==========================================================
   Phone Number Formatting
========================================================== */

function formatPhoneNumber(event) {

    let value = event.target.value.replace(/\D/g, "");

    value = value.substring(0, 10);

    if (value.length > 6) {

        value =
            `(${value.substring(0,3)}) ${value.substring(3,6)}-${value.substring(6)}`;

    }

    else if (value.length > 3) {

        value =
            `(${value.substring(0,3)}) ${value.substring(3)}`;

    }

    else if (value.length > 0) {

        value =
            `(${value}`;

    }

    event.target.value = value;

}

/* ==========================================================
   Character Counter
========================================================== */

function initializeCharacterCounter() {

    const textarea =
        document.querySelector("textarea[maxlength]");

    if (!textarea) return;

    const max =
        Number(textarea.getAttribute("maxlength"));

    let counter =
        textarea.parentElement.querySelector(".character-counter");

    if (!counter) {

        counter = document.createElement("div");

        counter.className = "character-counter";

        textarea.parentElement.appendChild(counter);

    }

    const updateCounter = () => {

        const remaining =
            max - textarea.value.length;

        counter.textContent =
            `${remaining} characters remaining`;

        counter.style.color =
            remaining < 25
                ? "#dc2626"
                : "";

    };

    textarea.addEventListener("input", updateCounter);

    updateCounter();

}

/* ==========================================================
   Auto Save Form
========================================================== */

(function initializeFormPersistence() {

    document.addEventListener("DOMContentLoaded", () => {

        const form =
            document.querySelector(".contact-form");

        if (!form) return;

        const fields =
            form.querySelectorAll("input, textarea, select");

        fields.forEach(field => {

            const key =
                `contact_${field.name}`;

            const saved =
                sessionStorage.getItem(key);

            if (saved !== null) {

                field.value = saved;

            }

            field.addEventListener("input", () => {

                sessionStorage.setItem(
                    key,
                    field.value
                );

            });

        });

        form.addEventListener("submit", () => {

            fields.forEach(field => {

                sessionStorage.removeItem(
                    `contact_${field.name}`
                );

            });

        });

    });

})();

/* ==========================================================
   Honeypot Spam Protection
========================================================== */

function checkHoneypot(form) {

    const honeypot =
        form.querySelector(".website");

    if (!honeypot) return true;

    return honeypot.value.trim() === "";

}

/* ==========================================================
   Submit Throttle
========================================================== */

let lastSubmission = 0;

function canSubmit() {

    const now = Date.now();

    if (now - lastSubmission < 5000) {

        return false;

    }

    lastSubmission = now;

    return true;

}

/* ==========================================================
   Screen Reader Announcements
========================================================== */

function announce(message) {

    let liveRegion =
        document.getElementById("live-region");

    if (!liveRegion) {

        liveRegion =
            document.createElement("div");

        liveRegion.id = "live-region";

        liveRegion.setAttribute(
            "aria-live",
            "polite"
        );

        liveRegion.setAttribute(
            "aria-atomic",
            "true"
        );

        liveRegion.className =
            "visually-hidden";

        document.body.appendChild(liveRegion);

    }

    liveRegion.textContent = "";

    setTimeout(() => {

        liveRegion.textContent = message;

    }, 100);

}

/* ==========================================================
   Update Form Submission
========================================================== */

const originalShowFormMessage = showFormMessage;

showFormMessage = function(message, type) {

    announce(message);

    originalShowFormMessage(message, type);

};

/* ==========================================================
   Focus First Invalid Field
========================================================== */

function focusFirstError(form) {

    const invalid =
        form.querySelector(".invalid");

    if (invalid) {

        invalid.focus();

    }

}

/* ==========================================================
   Copy Email Buttons
========================================================== */

document.addEventListener("click", event => {

    const button =
        event.target.closest("[data-copy-email]");

    if (!button) return;

    const email =
        button.dataset.copyEmail;

    navigator.clipboard.writeText(email)
        .then(() => {

            announce("Email copied to clipboard.");

        });

});

/* ==========================================================
   Copy Phone Buttons
========================================================== */

document.addEventListener("click", event => {

    const button =
        event.target.closest("[data-copy-phone]");

    if (!button) return;

    navigator.clipboard.writeText(
        button.dataset.copyPhone
    );

    announce("Phone number copied.");

});

/* ==========================================================
   Form Reset Button
========================================================== */

document.addEventListener("click", event => {

    const button =
        event.target.closest("[data-reset-form]");

    if (!button) return;

    const form =
        document.querySelector(".contact-form");

    if (!form) return;

    form.reset();

    form.querySelectorAll(".field-error")
        .forEach(error => error.remove());

    form.querySelectorAll(".invalid")
        .forEach(field =>
            field.classList.remove("invalid"));

    sessionStorage.clear();

    announce("Form cleared.");

});

  /* ==========================================================
   Newsletter
========================================================== */

function initializeNewsletter() {

    const form = document.querySelector(".newsletter-form");

    if (!form) return;

    const submitButton =
        form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async event => {

        event.preventDefault();

        const email =
            form.querySelector('input[type="email"]').value.trim();

        if (!validateEmail(email)) {

            showNewsletterMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }

        startNewsletterLoading(submitButton);

        try {

            const response = await fetch(
                "https://formspree.io/f/YOUR_FORM_ID",
                {

                    method: "POST",

                    body: new FormData(form),

                    headers: {

                        Accept: "application/json"

                    }

                }

            );

            stopNewsletterLoading(submitButton);

            if (response.ok) {

                showNewsletterMessage(

                    "Thank you for subscribing! You'll receive future updates from Little Explorers Learning Hub.",

                    "success"

                );

                announce("Newsletter subscription successful.");

                form.reset();

            }

            else {

                showNewsletterMessage(

                    "Subscription failed. Please try again.",

                    "error"

                );

            }

        }

        catch (error) {

            stopNewsletterLoading(submitButton);

            showNewsletterMessage(

                "Unable to connect. Please check your internet connection and try again.",

                "error"

            );

        }

    });

}

/* ==========================================================
   Newsletter Loading
========================================================== */

function startNewsletterLoading(button) {

    if (!button) return;

    button.disabled = true;

    button.dataset.original = button.innerHTML;

    button.innerHTML = `

        <i class="fas fa-spinner fa-spin"></i>

        Subscribing...

    `;

}

function stopNewsletterLoading(button) {

    if (!button) return;

    button.disabled = false;

    button.innerHTML = button.dataset.original;

}

/* ==========================================================
   Newsletter Message
========================================================== */

function showNewsletterMessage(message, type) {

    const form = document.querySelector(".newsletter-form");

    if (!form) return;

    form.querySelectorAll(".newsletter-message")
        .forEach(message => message.remove());

    const alert = document.createElement("div");

    alert.className = `newsletter-message ${type}`;

    alert.innerHTML = `

        <i class="fas ${
            type === "success"
                ? "fa-circle-check"
                : "fa-circle-exclamation"
        }"></i>

        <span>${message}</span>

    `;

    form.prepend(alert);

    setTimeout(() => {

        alert.remove();

    }, 5000);

}

      /* ==========================================================
   Scroll Effects & Page Interactions
========================================================== */

function initializeScrollAnimations() {

    initializeSectionReveal();
    initializeActiveNavigation();
    initializeStickyHeader();

}

/* ==========================================================
   Reveal Sections
========================================================== */

function initializeSectionReveal() {

    const sections = document.querySelectorAll(

        ".contact-options,\
        .custom-resources,\
        .contact-form-section,\
        .faq-section,\
        .partnerships,\
        .community-section,\
        .newsletter-section,\
        .promise-section"

    );

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.15,

        rootMargin: "0px 0px -75px 0px"

    });

    sections.forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });

}

/* ==========================================================
   Active Navigation Highlight
========================================================== */

function initializeActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".main-nav a");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${id}`) {

                    link.classList.add("active");

                }

            });

        });

    }, {

        threshold: .5

    });

    sections.forEach(section => observer.observe(section));

}

/* ==========================================================
   Sticky Header
========================================================== */

function initializeStickyHeader() {

    const header = document.querySelector(".site-header");

    if (!header) return;

    let previous = 0;

    let ticking = false;

    function updateHeader() {

        const current = window.scrollY;

        header.classList.toggle(

            "scrolled",

            current > 40

        );

        header.classList.toggle(

            "scroll-down",

            current > previous && current > 150

        );

        header.classList.toggle(

            "scroll-up",

            current < previous

        );

        previous = current;

        ticking = false;

    }

    window.addEventListener("scroll", () => {

        if (!ticking) {

            requestAnimationFrame(updateHeader);

            ticking = true;

        }

    }, {

        passive: true

    });

}

/* ==========================================================
   Back To Top
========================================================== */

function initializeBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        button.classList.toggle(

            "visible",

            window.scrollY > 500

        );

    }, {

        passive: true

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   Reveal Animations
========================================================== */

function initializeRevealAnimations() {

    const elements = document.querySelectorAll(

        "[data-reveal]"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: .2

    });

    elements.forEach(element => {

        observer.observe(element);

    });

}


  /* ==========================================================
   Accessibility & Performance
   Part 6
========================================================== */

function initializeAccessibility() {

    initializeKeyboardSupport();
    initializeFocusVisibility();
    initializeEscapeHandling();
    initializeReducedMotion();

}

/* ==========================================================
   Keyboard Navigation
========================================================== */

function initializeKeyboardSupport() {

    document.addEventListener("keydown", event => {

        /* Back to Top */

        if (
            event.altKey &&
            event.key.toLowerCase() === "t"
        ) {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    });

}

/* ==========================================================
   Focus Visibility
========================================================== */

function initializeFocusVisibility() {

    document.body.addEventListener("keyup", event => {

        if (event.key === "Tab") {

            document.body.classList.add("user-is-tabbing");

        }

    });

    document.body.addEventListener("mousedown", () => {

        document.body.classList.remove("user-is-tabbing");

    });

}

/* ==========================================================
   Escape Key Handling
========================================================== */

function initializeEscapeHandling() {

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        /* Close Mobile Navigation */

        const navigation =
            document.querySelector(".main-nav");

        const button =
            document.querySelector(".mobile-menu");

        if (
            navigation &&
            navigation.classList.contains("active")
        ) {

            navigation.classList.remove("active");

            button?.classList.remove("active");

            button?.setAttribute(
                "aria-expanded",
                "false"
            );

        }

        /* Close Open FAQs */

        closeAllFAQs();

    });

}

/* ==========================================================
   Reduced Motion
========================================================== */

function initializeReducedMotion() {

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (!prefersReducedMotion.matches) return;

    document.documentElement.classList.add(
        "reduce-motion"
    );

}

/* ==========================================================
   Resize Optimization
========================================================== */

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        window.dispatchEvent(

            new Event("optimizedResize")

        );

    }, 200);

});


/* ==========================================================
   Clipboard Helper
========================================================== */

async function copyToClipboard(text) {

    try {

        await navigator.clipboard.writeText(text);

        announce("Copied to clipboard.");

        return true;

    }

    catch {

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        announce("Copied to clipboard.");

        return true;

    }

}

/* ==========================================================
   Debounce Utility
========================================================== */

function debounce(callback, delay = 250) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ==========================================================
   Throttle Utility
========================================================== */

function throttle(callback, limit = 100) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}

/* ==========================================================
   Initialize Custom Events
========================================================== */

document.dispatchEvent(

    new CustomEvent("contactPageReady")

);


/* ======================================
   FAQ Accordion
====================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        faqItems.forEach(other => {

            if (other !== item) {

                other.removeAttribute("open");

            }

        });

    });

});
/* ==========================================================
   End of File
========================================================== */
