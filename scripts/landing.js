/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Landing Page JavaScript
========================================== */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {

  /* ======================================
     Mobile Navigation
  ====================================== */
  const mobileButton = document.querySelector(".mobile-menu");
  const navigation = document.querySelector(".main-nav") || document.querySelector("nav");

  if (mobileButton && navigation) {
    mobileButton.setAttribute("aria-expanded", "false");
    mobileButton.setAttribute("aria-label", "Open Navigation");

    mobileButton.addEventListener("click", () => {
      const isOpen = navigation.classList.contains("show") || navigation.classList.contains("active");

      navigation.classList.toggle("show", !isOpen);
      navigation.classList.toggle("active", !isOpen);
      mobileButton.classList.toggle("active", !isOpen);
      mobileButton.setAttribute("aria-expanded", String(!isOpen));
      mobileButton.setAttribute("aria-label", !isOpen ? "Close Navigation" : "Open Navigation");
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("show", "active");
        mobileButton.classList.remove("active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.setAttribute("aria-label", "Open Navigation");
      });
    });

    document.addEventListener("click", event => {
      if (!navigation.contains(event.target) && !mobileButton.contains(event.target)) {
        navigation.classList.remove("show", "active");
        mobileButton.classList.remove("active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.setAttribute("aria-label", "Open Navigation");
      }
    });
  }

  /* ======================================
     Active Navigation
  ====================================== */
  const currentPath = window.location.pathname;

  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");

    try {
      const href = new URL(link.href).pathname;

      if (
        currentPath === href ||
        (currentPath.startsWith("/teaching-materials/studies/") && href.endsWith("/studies.html")) ||
        (currentPath.startsWith("/teaching-materials/library/") && href.endsWith("/library/index.html")) ||
        (currentPath.startsWith("/teaching-materials/ages/") && href.endsWith("/ages/index.html"))
      ) {
        link.classList.add("active");
      }
    } catch {
      /* Ignore malformed navigation URLs. */
    }
  });

  /* ======================================
     Homepage Search
  ====================================== */
  document.querySelectorAll(".search-bar, .hero-search").forEach(search => {
    const form = search.tagName === "FORM" ? search : search.closest("form");
    if (!form) return;

    form.addEventListener("submit", event => {
      event.preventDefault();

      const input = form.querySelector('input[type="search"], input[type="text"]');
      if (!input) return;

      const query = input.value.trim();
      if (query) {
        window.location.href = "search.html?q=" + encodeURIComponent(query);
      }
    });
  });

  /* ======================================
     Newsletter
  ====================================== */
  const newsletter = document.querySelector(".newsletter-form");

  if (newsletter) {
    newsletter.addEventListener("submit", event => {
      event.preventDefault();

      const button = newsletter.querySelector("button");
      if (!button) return;

      button.textContent = "Joining...";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = "✓ Welcome!";
        newsletter.reset();
        button.disabled = false;
      }, 1500);
    });
  }

  /* ======================================
     Smooth Scroll
  ====================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ======================================
     Homepage Card Interaction
  ====================================== */
  document.querySelectorAll(
    ".study-card,.favorite-card,.activity-card,.interest-card,.season-card,.why-card,.age-card"
  ).forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ======================================
     Section Reveal
  ====================================== */
  const sections = document.querySelectorAll("section");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => observer.observe(section));
  } else {
    sections.forEach(section => section.classList.add("visible"));
  }

  /* ======================================
     Back To Top
  ====================================== */
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
