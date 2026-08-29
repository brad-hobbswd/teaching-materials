/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Master JavaScript
========================================== */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile navigation */
  const mobileButton = document.querySelector(".mobile-menu");
  const navigation = document.querySelector(".main-nav") || document.querySelector("nav");

  if (mobileButton && navigation) {
    mobileButton.setAttribute("aria-expanded", "false");
    mobileButton.addEventListener("click", () => {
      const open = navigation.classList.contains("show") || navigation.classList.contains("active");
      navigation.classList.toggle("show", !open);
      navigation.classList.toggle("active", !open);
      mobileButton.classList.toggle("active", !open);
      mobileButton.setAttribute("aria-expanded", String(!open));
      mobileButton.setAttribute("aria-label", open ? "Open Navigation" : "Close Navigation");
    });

    navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navigation.classList.remove("show", "active");
      mobileButton.classList.remove("active");
      mobileButton.setAttribute("aria-expanded", "false");
      mobileButton.setAttribute("aria-label", "Open Navigation");
    }));
  }

  /* Active navigation */
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
      ) link.classList.add("active");
    } catch (_) {}
  });

  /* Sticky header */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => header.classList.toggle("sticky", window.scrollY > 40));
  }

  /* Smooth internal links */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* Site search forms */
  document.querySelectorAll(".search-bar, .hero-search").forEach(search => {
    const form = search.tagName === "FORM" ? search : search.closest("form");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector('input[type="search"], input[type="text"]');
      if (!input || !input.value.trim()) return;
      const searchLink = document.querySelector('a[href$="search.html"]');
      const url = searchLink ? new URL(searchLink.href, location.href) : new URL("search.html", location.href);
      url.searchParams.set("q", input.value.trim());
      location.href = url.href;
    });
  });

  /* ======================================
     BALLS STUDY PAGE
  ====================================== */
  if (document.body.classList.contains("balls-study-page")) {
    const text = el => (el?.textContent || "").replace(/\s+/g, " ").trim();
    const sectionByTitle = (...titles) => [...document.querySelectorAll("section")].find(section => {
      const h2 = section.querySelector("h2");
      return h2 && titles.some(title => text(h2).toLowerCase() === title.toLowerCase());
    });

    /* The Balls Study intentionally has no search controls. */
    document.querySelectorAll(".search-bar, .hero-search, .study-search, .search-container").forEach(el => el.remove());
    document.querySelectorAll("input").forEach(input => {
      const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
      if (placeholder.includes("search this study") || placeholder.includes("search activities in this study")) {
        input.closest("form")?.remove();
        input.remove();
      }
    });

    /* Use CSS drawn icons for the few icons whose emoji glyphs are missing in some browsers. */
    const safeIcon = (card, className) => {
      if (!card) return;
      card.querySelectorAll(".balls-safe-icon, .season-icon").forEach(icon => icon.remove());
      const icon = document.createElement("div");
      icon.className = `balls-safe-icon ${className}`;
      icon.setAttribute("aria-hidden", "true");
      card.insertBefore(icon, card.firstChild);
    };

    const findCard = title => [...document.querySelectorAll(".season-card, .why-card, .favorite-card")]
      .find(card => text(card.querySelector("h3")).toLowerCase() === title.toLowerCase());

    const lightCard = findCard("Light");
    if (lightCard) safeIcon(lightCard, "icon-light");

    const materials = sectionByTitle("Suggested Materials");
    if (materials) {
      const grid = materials.querySelector(".why-grid");
      if (grid) {
        let containerCard = [...grid.querySelectorAll(".why-card")]
          .find(card => text(card.querySelector("h3")).toLowerCase() === "containers");
        if (!containerCard) {
          grid.insertAdjacentHTML("beforeend", `
            <div class="why-card">
              <div class="balls-safe-icon icon-container" aria-hidden="true"></div>
              <h3>Containers</h3>
              <p>Buckets, baskets, hoops, cones, and bins for sorting, carrying, collecting, and movement activities.</p>
            </div>`);
          containerCard = grid.lastElementChild;
        }
        safeIcon(containerCard, "icon-container");
      }
    }

    /* Replace the sensory grid with exactly the requested four cards.
       This prevents the previous script from creating duplicate Texture Bins. */
    const sensory = sectionByTitle("Sensory Ball Play", "Sensory Play");
    if (sensory) {
      let grid = sensory.querySelector(".season-grid");
      if (!grid) {
        grid = document.createElement("div");
        grid.className = "season-grid";
        sensory.querySelector(".container")?.appendChild(grid);
      }
      if (grid) {
        grid.innerHTML = `
          <div class="season-card">
            <div class="balls-safe-icon icon-water" aria-hidden="true"></div>
            <h3>Water Balls</h3>
            <p>Explore balls in water tubs with cups, scoops, and containers.</p>
          </div>
          <div class="season-card">
            <div class="balls-safe-icon icon-texture" aria-hidden="true"></div>
            <h3>Texture Bins</h3>
            <p>Hide and find different balls in rice, oats, shredded paper, or other safe sensory materials.</p>
          </div>
          <div class="season-card">
            <div class="balls-safe-icon icon-temperature" aria-hidden="true"></div>
            <h3>Cold &amp; Warm</h3>
            <p>Compare balls stored at different temperatures and describe how they feel.</p>
          </div>
          <div class="season-card">
            <div class="balls-safe-icon icon-squeeze" aria-hidden="true"></div>
            <h3>Squeeze &amp; Press</h3>
            <p>Explore soft balls that can be squeezed, pressed, and manipulated.</p>
          </div>`;
      }
    }

    /* Family Connection: always show the complete four-card set. */
    const family = sectionByTitle("Family Connection", "Family Engagement");
    if (family) {
      family.classList.add("family-connection");
      let grid = family.querySelector(".favorite-grid, .interest-grid, .study-grid, .why-grid");
      if (!grid) {
        grid = document.createElement("div");
        grid.className = "favorite-grid balls-family-grid";
        family.querySelector(".container")?.appendChild(grid);
      }
      if (grid) {
        grid.className = "favorite-grid balls-family-grid";
        grid.innerHTML = `
          <div class="favorite-card">
            <div class="balls-safe-icon icon-home" aria-hidden="true"></div>
            <h3>Ball Hunt at Home</h3>
            <p>Invite families to find and compare balls around their home.</p>
          </div>
          <div class="favorite-card">
            <div class="balls-safe-icon icon-photo" aria-hidden="true"></div>
            <h3>Share a Photo</h3>
            <p>Invite families to share a favorite ball activity.</p>
          </div>
          <div class="favorite-card">
            <div class="balls-safe-icon icon-question" aria-hidden="true"></div>
            <h3>Ask a Question</h3>
            <p>Send home one investigation question for families to discuss.</p>
          </div>
          <div class="favorite-card">
            <div class="balls-safe-icon icon-book" aria-hidden="true"></div>
            <h3>Read Together</h3>
            <p>Visit your local library and explore books about sports, movement, and teamwork.</p>
          </div>`;
      }
    }

    /* Restore the full footer content. */
    const footer = document.querySelector("footer");
    if (footer) {
      footer.innerHTML = `
        <div class="container footer-grid">
          <div>
            <h3>Little Explorers Learning Hub</h3>
            <p>Helping Early Head Start, Head Start, Preschool, and Pre Kindergarten educators create engaging learning experiences through affordable curriculum studies, lesson plans, printable resources, classroom activities, and professional teaching tools.</p>
          </div>
          <div>
            <h4>Curriculum</h4>
            <ul>
              <li><a href="../../studies.html">All Studies</a></li>
              <li><a href="../../ages/index.html">Age Groups</a></li>
              <li><a href="../../activities.html">Activities</a></li>
              <li><a href="../../library/index.html">Library</a></li>
            </ul>
          </div>
          <div>
            <h4>Teacher Resources</h4>
            <ul>
              <li><a href="../../lesson-plans.html">Lesson Plans</a></li>
              <li><a href="../../printables.html">Printables</a></li>
              <li><a href="../../resources.html">Teacher Resources</a></li>
              <li><a href="../../assessment-center.html">Assessment Center</a></li>
              <li><a href="../../behavior-center.html">Behavior Center</a></li>
              <li><a href="../../interest-areas.html">Interest Areas</a></li>
              <li><a href="../../family-engagement.html">Family Engagement</a></li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><a href="../../about.html">About Little Explorers</a></li>
              <li><a href="../../contact.html">Contact</a></li>
              <li><a href="../../privacy.html">Privacy Policy</a></li>
              <li><a href="../../terms.html">Terms of Use</a></li>
              <li><a href="../../copyright.html">Copyright</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Little Explorers Learning Hub. All Rights Reserved.</p>
        </div>`;
    }
  }

  /* Section reveal */
  const sections = document.querySelectorAll("section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    sections.forEach(section => observer.observe(section));
  } else sections.forEach(section => section.classList.add("visible"));

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => backToTop.classList.toggle("show", window.scrollY > 500));
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
