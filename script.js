/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Master JavaScript
========================================== */
document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded", () => {

  const mobileButton = document.querySelector(".mobile-menu");
  const navigation = document.querySelector(".main-nav") || document.querySelector("nav");

  if (mobileButton && navigation) {
    mobileButton.setAttribute("aria-expanded", "false");
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
    document.addEventListener("click", e => {
      if (!navigation.contains(e.target) && !mobileButton.contains(e.target)) {
        navigation.classList.remove("show", "active");
        mobileButton.classList.remove("active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.setAttribute("aria-label", "Open Navigation");
      }
    });
  }

  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    const href = new URL(link.href).pathname;
    if (
      currentPath === href ||
      (currentPath.startsWith("/teaching-materials/studies/") && href.endsWith("/studies.html")) ||
      (currentPath.startsWith("/teaching-materials/library/") && href.endsWith("/library/index.html")) ||
      (currentPath.startsWith("/teaching-materials/ages/") && href.endsWith("/ages/index.html"))
    ) link.classList.add("active");
  });

  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 40);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".search-bar, .hero-search").forEach(search => {
    const form = search.tagName === "FORM" ? search : search.closest("form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="search"], input[type="text"]');
      if (!input) return;
      const query = input.value.trim();
      if (!query) return;
      const searchLink = document.querySelector('a[href$="search.html"]');
      const searchUrl = searchLink
        ? new URL(searchLink.href, window.location.href)
        : new URL("search.html", window.location.href);
      searchUrl.searchParams.set("q", query);
      window.location.href = searchUrl.href;
    });
  });

  /* ======================================
     Balls Study Page Enhancements
  ====================================== */
  if (document.body.classList.contains("balls-study-page")) {

    const headingText = element => (element?.textContent || "").replace(/\s+/g, " ").trim();
    const findSection = title => [...document.querySelectorAll("section")].find(section => {
      const heading = section.querySelector("h2");
      return heading && headingText(heading).toLowerCase() === title.toLowerCase();
    });

    /* No search bars on the Balls Study. */
    document.querySelectorAll("input").forEach(input => {
      const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
      if (placeholder.includes("search this study") || placeholder.includes("search activities in this study")) {
        const form = input.closest("form");
        if (form) form.remove();
        else input.closest(".search-bar, .hero-search, .study-search, .search-container")?.remove();
      }
    });

    document.querySelectorAll(".search-bar, .hero-search").forEach(el => el.remove());

    /* Vocabulary: make absolutely certain Light has its feather icon. */
    const lightHeading = [...document.querySelectorAll("h3")].find(h => headingText(h).toLowerCase() === "light");
    if (lightHeading) {
      const card = lightHeading.closest(".season-card, .vocabulary-card, .card");
      if (card) {
        const firstText = card.firstChild?.textContent?.trim() || "";
        if (!firstText.includes("🪶") && !card.querySelector(".season-icon")) {
          const icon = document.createElement("div");
          icon.className = "season-icon";
          icon.setAttribute("aria-hidden", "true");
          icon.textContent = "🪶";
          card.insertBefore(icon, card.firstChild);
        }
      }
    }

    /* Suggested Materials: Containers. */
    const materialsSection = findSection("Suggested Materials");
    if (materialsSection) {
      const grid = materialsSection.querySelector(".why-grid");
      if (grid) {
        const hasContainers = [...grid.querySelectorAll("h3")].some(h => headingText(h).toLowerCase() === "containers");
        if (!hasContainers) {
          grid.insertAdjacentHTML("beforeend", `
            <div class="why-card">
              <div class="why-icon">🪣</div>
              <h3>Containers</h3>
              <p>Buckets, baskets, hoops, cones, and bins for sorting, carrying, collecting, and movement activities.</p>
            </div>
          `);
        }
      }
    }

    /* Sensory Ball Play: create the whole section if the older page does not have it. */
    let sensorySection = findSection("Sensory Ball Play");

    if (!sensorySection) {
      sensorySection = document.createElement("section");
      sensorySection.className = "season-section balls-sensory-section";
      sensorySection.innerHTML = `
        <div class="container">
          <div class="section-title">
            <h2>Sensory Ball Play</h2>
            <p>Give children opportunities to explore texture, temperature, pressure, and movement.</p>
          </div>
          <div class="season-grid">
            <div class="season-card">
              <div class="season-icon">🫧</div>
              <h3>Water Balls</h3>
              <p>Explore balls in water tubs with cups, scoops, and containers.</p>
            </div>
            <div class="season-card">
              <div class="season-icon">🫘</div>
              <h3>Texture Bins</h3>
              <p>Hide and find different balls in rice, oats, shredded paper, or other safe sensory materials.</p>
            </div>
            <div class="season-card">
              <div class="season-icon">🧊</div>
              <h3>Cold & Warm</h3>
              <p>Compare balls stored at different temperatures and describe how they feel.</p>
            </div>
            <div class="season-card">
              <div class="season-icon">👐</div>
              <h3>Squeeze & Press</h3>
              <p>Explore soft balls that can be squeezed, pressed, and manipulated.</p>
            </div>
          </div>
        </div>
      `;

      const engineeringSection = findSection("Engineering Challenges");
      if (engineeringSection) engineeringSection.parentNode.insertBefore(sensorySection, engineeringSection);
    } else {
      const grid = sensorySection.querySelector(".season-grid");
      if (grid) {
        const titles = [...grid.querySelectorAll("h3")].map(h => headingText(h).toLowerCase());

        if (!titles.includes("water balls")) {
          grid.insertAdjacentHTML("afterbegin", `
            <div class="season-card">
              <div class="season-icon">🫧</div>
              <h3>Water Balls</h3>
              <p>Explore balls in water tubs with cups, scoops, and containers.</p>
            </div>
          `);
        }

        if (!titles.includes("texture bins") && !titles.includes("texture bin")) {
          grid.insertAdjacentHTML("beforeend", `
            <div class="season-card">
              <div class="season-icon">🫘</div>
              <h3>Texture Bins</h3>
              <p>Hide and find different balls in rice, oats, shredded paper, or other safe sensory materials.</p>
            </div>
          `);
        } else {
          const textureHeading = [...grid.querySelectorAll("h3")].find(h => headingText(h).toLowerCase() === "texture bin");
          if (textureHeading) textureHeading.textContent = "Texture Bins";
        }
      }
    }

    /* Family Connection: center the complete set of cards. */
    const familySection = findSection("Family Connection") || findSection("Family Engagement");
    if (familySection) {
      familySection.classList.add("family-connection");
      const grid = familySection.querySelector(".favorite-grid, .interest-grid, .study-grid, .why-grid");
      if (grid) grid.classList.add("balls-family-grid");
    }

    /* Restore the full Balls-themed footer. */
    const footer = document.querySelector("body.balls-study-page footer");
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
        </div>
      `;
    }
  }

  /* ======================================
   Card Animation
  ====================================== */
  document.querySelectorAll(".study-card,.favorite-card,.activity-card,.interest-card,.season-card,.why-card,.age-card").forEach(card => {
    card.addEventListener("mouseenter", () => { card.style.transform = "translateY(-8px)"; });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });

  /* ======================================
   Fade In Sections
  ====================================== */
  const sections = document.querySelectorAll("section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    sections.forEach(section => observer.observe(section));
  } else {
    sections.forEach(section => section.classList.add("visible"));
  }

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});