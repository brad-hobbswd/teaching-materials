/*==================================================
  LITTLE EXPLORERS LEARNING HUB
  OBSERVATION & ASSESSMENT

  assessment.js

  PART 1
  INITIALIZATION
  MOBILE NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";



    /*==================================================
      ELEMENTS
    ==================================================*/

    const header = document.querySelector(".site-header");

    const menuButton = document.querySelector(".mobile-menu");

    const navigation = document.querySelector(".main-nav");

    const navigationLinks = document.querySelectorAll(".main-nav a");



    /*==================================================
      MOBILE MENU FUNCTIONS
    ==================================================*/

    function openMenu(){

        if(!navigation || !menuButton) return;

        navigation.classList.add("active");

        menuButton.setAttribute("aria-expanded","true");

        menuButton.innerHTML = "✕";

    }



    function closeMenu(){

        if(!navigation || !menuButton) return;

        navigation.classList.remove("active");

        menuButton.setAttribute("aria-expanded","false");

        menuButton.innerHTML = "☰";

    }



    function toggleMenu(){

        if(!navigation) return;

        navigation.classList.contains("active")

            ? closeMenu()

            : openMenu();

    }



    /*==================================================
      MOBILE MENU EVENT
    ==================================================*/

    if(menuButton){

        menuButton.addEventListener("click",toggleMenu);

    }



    /*==================================================
      CLOSE MENU WHEN LINK IS CLICKED
    ==================================================*/

    navigationLinks.forEach(link=>{

        link.addEventListener("click",closeMenu);

    });


        /*==================================================
      PART 2
      HEADER EFFECTS
      WINDOW EVENTS
    ==================================================*/



    /*==================================================
      HEADER ON SCROLL
    ==================================================*/

    function updateHeader(){

        if(!header) return;

        if(window.scrollY > 20){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }



    /*==================================================
      CLOSE MENU WHEN CLICKING OUTSIDE
    ==================================================*/

    document.addEventListener("click",(event)=>{

        if(
            !navigation ||
            !menuButton ||
            !navigation.classList.contains("active")
        ){
            return;
        }

        if(
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ){

            closeMenu();

        }

    });



    /*==================================================
      CLOSE MENU WITH ESCAPE KEY
    ==================================================*/

    document.addEventListener("keydown",(event)=>{

        if(event.key === "Escape"){

            closeMenu();

        }

    });



    /*==================================================
      CLOSE MENU WHEN RETURNING TO DESKTOP
    ==================================================*/

    window.addEventListener("resize",()=>{

        if(window.innerWidth > 1100){

            closeMenu();

        }

    });



    /*==================================================
      WINDOW SCROLL
    ==================================================*/

    window.addEventListener("scroll",updateHeader);



    /*==================================================
      INITIALIZE HEADER
    ==================================================*/

    updateHeader();
