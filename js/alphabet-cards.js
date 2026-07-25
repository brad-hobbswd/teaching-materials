/*==================================================
  LITTLE EXPLORERS LEARNING HUB
  Alphabet Cards JavaScript
==================================================*/

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {

"use strict";

/*==================================================
  MOBILE NAVIGATION
==================================================*/

const mobileButton = document.querySelector(".mobile-menu");
const navigation = document.querySelector(".main-nav");

if (mobileButton && navigation) {

    mobileButton.addEventListener("click", (event) => {

        event.stopPropagation();

        navigation.classList.toggle("active");

        mobileButton.classList.toggle("active");

        const expanded =
            mobileButton.getAttribute("aria-expanded") === "true";

        mobileButton.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

    document.addEventListener("click", (event) => {

        if (!navigation.contains(event.target) &&
            !mobileButton.contains(event.target)) {

            navigation.classList.remove("active");

            mobileButton.classList.remove("active");

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}

/*==================================================
  STICKY HEADER EFFECT
==================================================*/

const header = document.querySelector(".site-header");

function updateHeader(){

    if(!header) return;

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();

/*==================================================
  SMOOTH SCROLL LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(event)=>{

        const target=document.querySelector(link.getAttribute("href"));

        if(!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

        navigation?.classList.remove("active");

        mobileButton?.classList.remove("active");

    });

});

/*==================================================
  SEARCH FORM
==================================================*/

const searchForm=document.querySelector(".search-form");

if(searchForm){

    searchForm.addEventListener("submit",(event)=>{

        event.preventDefault();

        const input=searchForm.querySelector("input");

        if(!input) return;

        const value=input.value.trim();

        if(value===""){

            input.focus();

            return;

        }

        alert(`Searching for "${value}"...`);

    });

}

/*==================================================
  FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button=item.querySelector(".faq-question");

    if(!button) return;

    button.addEventListener("click",()=>{

        const active=item.classList.contains("active");

        faqItems.forEach(faq=>{

            faq.classList.remove("active");

        });

        if(!active){

            item.classList.add("active");

        }

    });

});

/*==================================================
  SCROLL TO TOP BUTTON
==================================================*/

const scrollButton=document.createElement("button");

scrollButton.className="scroll-top";

scrollButton.setAttribute("aria-label","Scroll to top");

scrollButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(scrollButton);

scrollButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollButton.classList.add("show");

    }else{

        scrollButton.classList.remove("show");

    }

});


  /*==================================================
  ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".stat-card h2");

const animateCounter = (counter) => {

    const text = counter.textContent.trim();

    const number = parseInt(text.replace(/\D/g, ""), 10);

    if (isNaN(number)) return;

    const suffix = text.replace(/[0-9]/g, "");

    let current = 0;

    const increment = Math.max(1, Math.ceil(number / 80));

    function update() {

        current += increment;

        if (current >= number) {

            counter.textContent = number + suffix;

            return;

        }

        counter.textContent = current + suffix;

        requestAnimationFrame(update);

    }

    update();

};

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        animateCounter(entry.target);

        observer.unobserve(entry.target);

    });

}, {

    threshold: .4

});

counters.forEach(counter => counterObserver.observe(counter));

/*==================================================
  SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(

    ".study-card," +
    ".skill-card," +
    ".why-card," +
    ".application-card," +
    ".idea-card," +
    ".favorite-card," +
    ".resource-card," +
    ".featured-image," +
    ".featured-content"

);

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition =

        "opacity .7s ease, transform .7s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

    });

}, {

    threshold: .15

});

revealItems.forEach(item => revealObserver.observe(item));

/*==================================================
  BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =

            `${event.clientX - rect.left}px`;

        ripple.style.top =

            `${event.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==================================================
  IMAGE HOVER EFFECT
==================================================*/

document.querySelectorAll(

".featured-image img, .favorite-card img, .resource-card img"

).forEach(image => {

    image.addEventListener("mousemove", (event) => {

        const rect = image.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        image.style.transformOrigin = `${x}px ${y}px`;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transformOrigin = "center";

    });

});

/*==================================================
  NEWSLETTER FORM
==================================================*/

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = newsletter.querySelector("input");

        if (!email) return;

        const value = email.value.trim();

        const valid =

            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!valid) {

            alert("Please enter a valid email address.");

            email.focus();

            return;

        }

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

/*==================================================
  DOWNLOAD BUTTONS
==================================================*/

document.querySelectorAll(".download-button").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("loading");

        button.disabled = true;

        setTimeout(() => {

            button.classList.remove("loading");

            button.disabled = false;

        }, 1200);

    });

});

/*==================================================
  ACCESSIBILITY
==================================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("keyup", (event) => {

        if (event.key === "Enter") {

            button.click();

        }

    });

});

/*==================================================
  LAZY IMAGE LOADING
==================================================*/

const lazyImages = document.querySelectorAll("img[data-src]");

const lazyObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const image = entry.target;

        image.src = image.dataset.src;

        image.removeAttribute("data-src");

        observer.unobserve(image);

    });

});

lazyImages.forEach(image => lazyObserver.observe(image));

/*==================================================
  ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".main-nav a");

const sectionObserver = new IntersectionObserver((entries) => {

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

    threshold: .55

});

sections.forEach(section => sectionObserver.observe(section));

/*==================================================
  PAGE FINISHED LOADING
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==================================================
  END INITIALIZATION
==================================================*/

});
