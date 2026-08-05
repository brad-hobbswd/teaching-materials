/*==================================================
  LITTLE EXPLORERS LEARNING HUB
  OBSERVATION & ASSESSMENT

  assessment.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".mobile-menu");

    const navigation = document.querySelector(".main-nav");

    const navLinks = document.querySelectorAll(".main-nav a");

    const header = document.querySelector(".site-header");



    /*==============================================
      MOBILE MENU
    ==============================================*/

    if(menuButton && navigation){

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("active");

            const expanded = navigation.classList.contains("active");

            menuButton.setAttribute("aria-expanded", expanded);

            menuButton.innerHTML = expanded ? "✕" : "☰";

        });

    }



    /*==============================================
      CLOSE MENU AFTER CLICKING A LINK
    ==============================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded","false");

            menuButton.innerHTML = "☰";

        });

    });



    /*==============================================
      CLOSE MENU WHEN RETURNING TO DESKTOP
    ==============================================*/

    window.addEventListener("resize", () => {

        if(window.innerWidth > 1100){

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded","false");

            menuButton.innerHTML = "☰";

        }

    });



    /*==============================================
      HEADER SHADOW ON SCROLL
    ==============================================*/

    window.addEventListener("scroll", () => {

        if(window.scrollY > 15){

            header.style.boxShadow = "0 12px 30px rgba(25,40,70,.10)";

        }

        else{

            header.style.boxShadow = "0 4px 16px rgba(0,0,0,.05)";

        }

    });



    /*==============================================
      FADE UP ANIMATION
    ==============================================*/

    const fadeItems = document.querySelectorAll(".fade-up");

    if(fadeItems.length){

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },{

            threshold:.15

        });

        fadeItems.forEach(item => observer.observe(item));

    }

});