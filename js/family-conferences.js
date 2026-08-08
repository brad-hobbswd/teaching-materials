/*==================================================*
*FAMILY CONFERENCES PAGE*
*==================================================*/


/*==================================================*
*MOBILE NAVIGATION*
*==================================================*/

const mobileMenu = document.querySelector(".mobile-menu");

const mainNav = document.querySelector(".main-nav");


if(mobileMenu && mainNav){

    mobileMenu.addEventListener("click",function(){

        const isOpen = mainNav.classList.toggle("active");

        mobileMenu.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/*==================================================*
*CLOSE MOBILE NAVIGATION*
*==================================================*/

const navLinks = document.querySelectorAll(".main-nav a");


navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        if(mainNav){

            mainNav.classList.remove("active");

        }

        if(mobileMenu){

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


/*==================================================*
*SMOOTH SCROLLING*
*==================================================*/

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);


internalLinks.forEach(function(link){

    link.addEventListener("click",function(event){

        const targetId = this.getAttribute("href");

        if(
            !targetId ||
            targetId === "#"
        ){

            return;

        }


        const target = document.querySelector(
            targetId
        );


        if(target){

            event.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*==================================================*
*HEADER SCROLL EFFECT*
*==================================================*/

const siteHeader = document.querySelector(
    ".site-header"
);


function updateHeader(){

    if(!siteHeader){

        return;

    }


    if(window.scrollY > 20){

        siteHeader.classList.add("scrolled");

    }else{

        siteHeader.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/*==================================================*
*ESCAPE KEY CLOSES MOBILE NAVIGATION*
*==================================================*/

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape" &&
            mainNav &&
            mainNav.classList.contains("active")
        ){

            mainNav.classList.remove("active");


            if(mobileMenu){

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/*==================================================*
*CLOSE NAVIGATION WHEN CLICKING OUTSIDE*
*==================================================*/

document.addEventListener(
    "click",
    function(event){

        if(
            !mainNav ||
            !mobileMenu
        ){

            return;

        }


        if(
            !mainNav.classList.contains("active")
        ){

            return;

        }


        if(
            mainNav.contains(event.target) ||
            mobileMenu.contains(event.target)
        ){

            return;

        }


        mainNav.classList.remove("active");

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);


/*==================================================*
*RESOURCE DOWNLOAD LINKS*
*==================================================*/

const downloadLinks = document.querySelectorAll(
    '.study-content a[download]'
);


downloadLinks.forEach(function(link){

    link.addEventListener(
        "click",
        function(){

            this.classList.add("download-started");


            setTimeout(function(){

                link.classList.remove(
                    "download-started"
                );

            },1000);

        }
    );

});
