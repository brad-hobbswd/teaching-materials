/*==================================================
  LITTLE EXPLORERS LEARNING HUB
  OBSERVATION FORMS

  observation-forms.js

  Part 1
  Initialization
==================================================*/

"use strict";

/*==================================================
  WAIT FOR PAGE TO LOAD
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializePage();

});


/*==================================================
  GLOBAL VARIABLES
==================================================*/

let header;
let mobileMenuButton;
let navigation;
let navigationLinks;

let backToTopButton;

let fadeElements;
let cards;

let downloadButtons;

let newsletterForm;

let statisticCards;


/*==================================================
  INITIALIZE PAGE
==================================================*/

function initializePage(){

    cacheElements();

    initializeNavigation();

    initializeHeader();

    initializeBackToTop();

    initializeSmoothScrolling();

    initializeAnimations();

    initializeButtons();

    initializeForms();

    initializeUtilities();

}


/*==================================================
  CACHE DOM ELEMENTS
==================================================*/

function cacheElements(){

    header = document.querySelector(".site-header");

    mobileMenuButton = document.querySelector(".mobile-menu");

    navigation = document.querySelector(".main-nav");

    navigationLinks = document.querySelectorAll(".main-nav a");

    backToTopButton = document.querySelector(".back-to-top");

    fadeElements = document.querySelectorAll(
        ".fade-up, .study-card, .interest-card, .favorite-card, .why-card, .featured-study-card, .stat-card"
    );

    cards = document.querySelectorAll(
        ".study-card, .interest-card, .favorite-card, .why-card"
    );

    downloadButtons = document.querySelectorAll(
        ".study-content a, .btn"
    );

    newsletterForm = document.querySelector(
        ".newsletter-form"
    );

    statisticCards = document.querySelectorAll(
        ".stat-card h2"
    );

}

/*==================================================
  MOBILE NAVIGATION
==================================================*/

function initializeNavigation(){

    if(!mobileMenuButton || !navigation){

        return;

    }

    mobileMenuButton.addEventListener("click", toggleMobileMenu);

    navigationLinks.forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });

    document.addEventListener("click", handleOutsideClick);

    document.addEventListener("keydown", handleEscapeKey);

    window.addEventListener("resize", handleWindowResize);

}


/*==================================================
  TOGGLE MOBILE MENU
==================================================*/

function toggleMobileMenu(){

    navigation.classList.toggle("active");

    const expanded = navigation.classList.contains("active");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        expanded
    );

    mobileMenuButton.innerHTML = expanded ? "✕" : "☰";

}


/*==================================================
  CLOSE MOBILE MENU
==================================================*/

function closeMobileMenu(){

    if(!navigation.classList.contains("active")){

        return;

    }

    navigation.classList.remove("active");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.innerHTML = "☰";

}


/*==================================================
  CLOSE MENU WHEN CLICKING OUTSIDE
==================================================*/

function handleOutsideClick(event){

    if(window.innerWidth > 1100){

        return;

    }

    const clickedMenu = navigation.contains(event.target);

    const clickedButton = mobileMenuButton.contains(event.target);

    if(!clickedMenu && !clickedButton){

        closeMobileMenu();

    }

}


/*==================================================
  ESCAPE KEY SUPPORT
==================================================*/

function handleEscapeKey(event){

    if(event.key === "Escape"){

        closeMobileMenu();

    }

}


/*==================================================
  DESKTOP RESET
==================================================*/

function handleWindowResize(){

    if(window.innerWidth > 1100){

        closeMobileMenu();

    }

}

/*==================================================
  STICKY HEADER
==================================================*/

function initializeHeader(){

    if(!header){

        return;

    }

    updateHeader();

    window.addEventListener(

        "scroll",

        throttle(updateHeader, 15),

        { passive:true }

    );

}


/*==================================================
  UPDATE HEADER
==================================================*/

function updateHeader(){

    const scrollPosition = window.scrollY;

    if(scrollPosition > 20){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

}


/*==================================================
  BACK TO TOP BUTTON
==================================================*/

function initializeBackToTop(){

    if(!backToTopButton){

        return;

    }

    updateBackToTop();

    window.addEventListener(

        "scroll",

        throttle(updateBackToTop, 15),

        { passive:true }

    );

    backToTopButton.addEventListener(

        "click",

        scrollToTop

    );

}


/*==================================================
  SHOW / HIDE BUTTON
==================================================*/

function updateBackToTop(){

    if(window.scrollY > 500){

        backToTopButton.classList.add("visible");

    }

    else{

        backToTopButton.classList.remove("visible");

    }

}


/*==================================================
  SCROLL TO TOP
==================================================*/

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/*==================================================
  SMOOTH INTERNAL LINKS
==================================================*/

function initializeSmoothScrolling(){

    const links = document.querySelectorAll(

        'a[href^="#"]:not([href="#"])'

    );

    links.forEach(link=>{

        link.addEventListener("click",event=>{

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if(!target){

                return;

            }

            event.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}
