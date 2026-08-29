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
  if (header) window.addEventListener("scroll", () => header.classList.toggle("sticky", window.scrollY > 40));

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

    /* Desktop Balls Study navigation uses the full worded menu. */
    const navStyle = document.createElement("style");
    navStyle.id = "balls-desktop-navigation-style";
    navStyle.textContent = `
      @media (min-width: 769px) {
        body.balls-study-page .mobile-menu {
          display: none !important;
        }
        body.balls-study-page nav {
          display: block !important;
          width: auto !important;
          order: initial !important;
        }
        body.balls-study-page nav ul {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: flex-end !important;
          gap: 22px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        body.balls-study-page nav li {
          display: block !important;
          width: auto !important;
          border: 0 !important;
        }
        body.balls-study-page nav a {
          display: inline-block !important;
          white-space: nowrap !important;
          padding: 10px 0 !important;
          color: var(--balls-navy) !important;
          font-weight: 800 !important;
          text-decoration: none !important;
        }
        body.balls-study-page nav a:hover,
        body.balls-study-page nav a.active {
          color: var(--balls-blue) !important;
        }
      }
    `;
    document.head.appendChild(navStyle);

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
    if (lightCard) {
      safeIcon(lightCard, "icon-light");
      const icon = lightCard.querySelector(".icon-light");
      if (icon) {
        icon.innerHTML = `
          <svg viewBox="0 0 64 64" role="img" aria-label="Feather" xmlns="http://www.w3.org/2000/svg">
            <path d="M53 8C36 9 18 17 11 31c-5 10-1 19 7 19 13 0 28-15 35-35 2-5 2-7 0-7Z" fill="#dff4ff" stroke="#3d9be9" stroke-width="3.5" stroke-linejoin="round"/>
            <path d="M10 56C19 43 30 30 50 12" fill="none" stroke="#24476b" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M18 43 11 42M24 37 15 34M31 30 21 27M38 24 29 20M44 18 37 14" fill="none" stroke="#3d9be9" stroke-width="3" stroke-linecap="round"/>
          </svg>`;
      }
    }

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

    /* Replace the sensory grid with exactly the requested four cards. */
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
          <div class="season-card"><div class="balls-safe-icon icon-water" aria-hidden="true"></div><h3>Water Balls</h3><p>Explore balls in water tubs with cups, scoops, and containers.</p></div>
          <div class="season-card"><div class="balls-safe-icon icon-texture" aria-hidden="true"></div><h3>Texture Bins</h3><p>Hide and find different balls in rice, oats, shredded paper, or other safe sensory materials.</p></div>
          <div class="season-card"><div class="balls-safe-icon icon-temperature" aria-hidden="true"></div><h3>Cold &amp; Warm</h3><p>Compare balls stored at different temperatures and describe how they feel.</p></div>
          <div class="season-card"><div class="balls-safe-icon icon-squeeze" aria-hidden="true"></div><h3>Squeeze &amp; Press</h3><p>Explore soft balls that can be squeezed, pressed, and manipulated.</p></div>`;
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
          <div class="favorite-card"><div class="balls-safe-icon icon-home" aria-hidden="true"></div><h3>Ball Hunt at Home</h3><p>Invite families to find and compare balls around their home.</p></div>
          <div class="favorite-card"><div class="balls-safe-icon icon-photo" aria-hidden="true"></div><h3>Share a Photo</h3><p>Invite families to share a favorite ball activity.</p></div>
          <div class="favorite-card"><div class="balls-safe-icon icon-question" aria-hidden="true"></div><h3>Ask a Question</h3><p>Send home one investigation question for families to discuss.</p></div>
          <div class="favorite-card"><div class="balls-safe-icon icon-book" aria-hidden="true"></div><h3>Read Together</h3><p>Visit your local library and explore books about sports, movement, and teamwork.</p></div>`;
      }
    }

    /* Restore the full footer content. */
    const footer = document.querySelector("footer");
    if (footer) {
      footer.innerHTML = `
        <div class="container footer-grid">
          <div><h3>Little Explorers Learning Hub</h3><p>Helping Early Head Start, Head Start, Preschool, and Pre Kindergarten educators create engaging learning experiences through affordable curriculum studies, lesson plans, printable resources, classroom activities, and professional teaching tools.</p></div>
          <div><h4>Curriculum</h4><ul><li><a href="../../studies.html">All Studies</a></li><li><a href="../../ages/index.html">Age Groups</a></li><li><a href="../../activities.html">Activities</a></li><li><a href="../../library/index.html">Library</a></li></ul></div>
          <div><h4>Teacher Resources</h4><ul><li><a href="../../lesson-plans.html">Lesson Plans</a></li><li><a href="../../printables.html">Printables</a></li><li><a href="../../resources.html">Teacher Resources</a></li><li><a href="../../assessment-center.html">Assessment Center</a></li><li><a href="../../behavior-center.html">Behavior Center</a></li><li><a href="../../interest-areas.html">Interest Areas</a></li><li><a href="../../family-engagement.html">Family Engagement</a></li></ul></div>
          <div><h4>About</h4><ul><li><a href="../../about.html">About Little Explorers</a></li><li><a href="../../contact.html">Contact</a></li><li><a href="../../privacy.html">Privacy Policy</a></li><li><a href="../../terms.html">Terms of Use</a></li><li><a href="../../copyright.html">Copyright</a></li></ul></div>
        </div>
        <div class="footer-bottom"><p>© 2026 Little Explorers Learning Hub. All Rights Reserved.</p></div>`;
    }

    /* Remove the legacy emoji text nodes from the two cards. */
    const removeLegacyEmoji = (card, emoji) => {
      if (!card) return;
      const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        if (node.parentElement?.matches("h3, p")) return;
        if (node.nodeValue.includes(emoji)) node.nodeValue = node.nodeValue.replaceAll(emoji, "");
      });
    };
    removeLegacyEmoji(lightCard, "🪶");
    const containers = [...document.querySelectorAll(".why-card")]
      .find(card => (card.querySelector("h3")?.textContent || "").trim() === "Containers");
    removeLegacyEmoji(containers, "🪣");
  }

  /* ======================================
     TREES STUDY PAGE
  ====================================== */
  const treeBannerImage = document.querySelector('img[src*="trees-banner.png"]');

  if (treeBannerImage) {
    document.body.classList.add("trees-study-page");

    /* Trees uses the same clean study navigation as Balls, but with a forest palette. */
    document.querySelectorAll(".search-bar, .hero-search, .study-search, .search-container").forEach(el => el.remove());
    document.querySelectorAll("input").forEach(input => {
      const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
      if (placeholder.includes("search this study") || placeholder.includes("search activities in this study")) {
        input.closest("form")?.remove();
        input.remove();
      }
    });

    const treeStyle = document.createElement("style");
    treeStyle.id = "trees-study-theme";
    treeStyle.textContent = `
      body.trees-study-page {
        --tree-deep: #315C3B;
        --tree-green: #4F7A3A;
        --tree-leaf: #7BAE4A;
        --tree-sage: #EAF3E3;
        --tree-moss: #DCE8D1;
        --tree-bark: #7A5134;
        --tree-gold: #D9A441;
        --tree-cream: #FBF8EF;
        --tree-text: #344238;
        --tree-muted: #66756A;
        --tree-border: #D7E1D0;
        background: var(--tree-cream) !important;
        color: var(--tree-text) !important;
      }

      body.trees-study-page header {
        background: rgba(251,248,239,.97) !important;
        border-bottom: 1px solid var(--tree-border) !important;
      }

      body.trees-study-page .logo span { color: var(--tree-green) !important; }

      body.trees-study-page nav {
        display: block !important;
        width: auto !important;
      }

      body.trees-study-page nav ul {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 22px !important;
      }

      body.trees-study-page nav a {
        color: var(--tree-deep) !important;
        font-weight: 800 !important;
      }

      body.trees-study-page nav a:hover,
      body.trees-study-page nav a.active {
        color: var(--tree-green) !important;
      }

      body.trees-study-page nav a::after {
        background: var(--tree-gold) !important;
      }

      body.trees-study-page .study-banner {
        background:
          radial-gradient(circle at 85% 15%, rgba(123,174,74,.18), transparent 28%),
          linear-gradient(135deg, #F7F3E8 0%, #EAF3E3 100%) !important;
        padding: 72px 0 84px !important;
        border-bottom: 1px solid var(--tree-border);
      }

      body.trees-study-page .study-label {
        background: var(--tree-deep) !important;
        color: #fff !important;
        border-radius: 999px !important;
        padding: 9px 18px !important;
        font-weight: 800 !important;
      }

      body.trees-study-page .study-banner h1 {
        color: var(--tree-deep) !important;
        font-size: clamp(3rem, 6vw, 5.2rem) !important;
        letter-spacing: -1px;
      }

      body.trees-study-page .study-banner p { color: var(--tree-muted) !important; }

      body.trees-study-page .study-banner-grid > div:last-child img {
        border-radius: 34px !important;
        border: 8px solid rgba(255,255,255,.75) !important;
        box-shadow: 0 24px 60px rgba(49,92,59,.20) !important;
      }

      body.trees-study-page .study-highlights div {
        background: rgba(255,255,255,.82) !important;
        border: 1px solid var(--tree-border) !important;
        color: var(--tree-deep) !important;
      }

      body.trees-study-page .btn-primary {
        background: var(--tree-deep) !important;
      }

      body.trees-study-page .btn-primary:hover { background: var(--tree-green) !important; }

      body.trees-study-page .btn-secondary:hover {
        background: var(--tree-gold) !important;
        border-color: var(--tree-gold) !important;
        color: #fff !important;
      }

      body.trees-study-page .study-dashboard {
        background: var(--tree-deep) !important;
        color: #fff !important;
      }

      body.trees-study-page .study-dashboard h2,
      body.trees-study-page .study-dashboard > .container > p { color: #fff !important; }

      body.trees-study-page .dashboard-card {
        background: rgba(255,255,255,.10) !important;
        border: 1px solid rgba(255,255,255,.20) !important;
        color: #fff !important;
        border-radius: 20px !important;
        transition: transform .25s ease, background .25s ease !important;
      }

      body.trees-study-page .dashboard-card:hover {
        background: rgba(255,255,255,.18) !important;
        transform: translateY(-5px) !important;
      }

      body.trees-study-page .dashboard-card h3 { color: #fff !important; }

      body.trees-study-page #overview,
      body.trees-study-page #books,
      body.trees-study-page #centers {
        background: var(--tree-cream) !important;
      }

      body.trees-study-page #weeks,
      body.trees-study-page #vocabulary,
      body.trees-study-page #songs {
        background: var(--tree-sage) !important;
      }

      body.trees-study-page #materials,
      body.trees-study-page #questions,
      body.trees-study-page #assessment,
      body.trees-study-page #family,
      body.trees-study-page #downloads {
        background: #F5F1E7 !important;
      }

      body.trees-study-page .section-title h2 {
        color: var(--tree-deep) !important;
      }

      body.trees-study-page .section-title p { color: var(--tree-muted) !important; }

      body.trees-study-page .week-grid,
      body.trees-study-page .materials-grid,
      body.trees-study-page .question-grid,
      body.trees-study-page .vocabulary-grid,
      body.trees-study-page .books-grid,
      body.trees-study-page .songs-grid,
      body.trees-study-page .center-grid {
        align-items: start !important;
        grid-auto-rows: auto !important;
      }

      body.trees-study-page .week-card,
      body.trees-study-page .material-card,
      body.trees-study-page .question-card,
      body.trees-study-page .book-card,
      body.trees-study-page .song-card,
      body.trees-study-page .center-card {
        height: auto !important;
        min-height: 0 !important;
        align-self: start !important;
        background: rgba(255,255,255,.96) !important;
        border: 1px solid var(--tree-border) !important;
        box-shadow: 0 12px 28px rgba(49,92,59,.08) !important;
        color: var(--tree-text) !important;
      }

      body.trees-study-page .week-card:hover,
      body.trees-study-page .material-card:hover,
      body.trees-study-page .book-card:hover,
      body.trees-study-page .song-card:hover,
      body.trees-study-page .center-card:hover {
        border-color: var(--tree-leaf) !important;
        transform: translateY(-6px) !important;
      }

      body.trees-study-page .week-number {
        background: var(--tree-deep) !important;
        color: #fff !important;
      }

      body.trees-study-page .week-card h3,
      body.trees-study-page .book-card h3,
      body.trees-study-page .song-card h3,
      body.trees-study-page .center-card h3 {
        color: var(--tree-deep) !important;
      }

      body.trees-study-page .week-card p,
      body.trees-study-page .book-card p,
      body.trees-study-page .song-card p,
      body.trees-study-page .center-card p {
        color: var(--tree-muted) !important;
      }

      body.trees-study-page .study-button {
        background: var(--tree-green) !important;
        color: #fff !important;
        border-radius: 999px !important;
      }

      body.trees-study-page .material-card {
        font-weight: 800 !important;
        color: var(--tree-deep) !important;
      }

      body.trees-study-page .vocabulary-grid span {
        background: #fff !important;
        color: var(--tree-deep) !important;
        border: 1px solid var(--tree-border) !important;
        box-shadow: none !important;
      }

      body.trees-study-page .question-card {
        color: var(--tree-deep) !important;
        font-weight: 800 !important;
      }

      body.trees-study-page .question-card::before {
        color: var(--tree-gold) !important;
      }

      body.trees-study-page footer {
        background: var(--tree-deep) !important;
        color: #EAF3E3 !important;
        border-top: 5px solid var(--tree-gold) !important;
      }

      body.trees-study-page footer h3,
      body.trees-study-page footer h4 { color: #fff !important; }
      body.trees-study-page footer p,
      body.trees-study-page footer li,
      body.trees-study-page footer a { color: #DCE8D1 !important; }
      body.trees-study-page footer a:hover { color: #fff !important; }
      body.trees-study-page .footer-bottom {
        border-top-color: rgba(255,255,255,.18) !important;
      }

      @media (max-width: 900px) {
        body.trees-study-page .nav-container {
          flex-wrap: wrap !important;
          padding-bottom: 14px !important;
        }
        body.trees-study-page nav {
          width: 100% !important;
          order: 3 !important;
        }
        body.trees-study-page nav ul {
          justify-content: center !important;
          flex-wrap: wrap !important;
          gap: 12px 20px !important;
        }
        body.trees-study-page .study-banner-grid {
          grid-template-columns: 1fr !important;
        }
        body.trees-study-page .study-banner-grid > div:last-child {
          order: -1;
        }
      }
    `;
    document.head.appendChild(treeStyle);
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
