/* ==========================================
   LITTLE EXPLORERS LEARNING HUB
   Master JavaScript
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

  /* ======================================
   Active Navigation
  ====================================== */
  const currentPath = window.location.pathname;

  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    const href = new URL(link.href).pathname;

    if (
      currentPath === href ||
      (currentPath.startsWith("/teaching-materials/studies/") && href.endsWith("/studies.html")) ||
      (currentPath.startsWith("/teaching-materials/library/") && href.endsWith("/library/index.html")) ||
      (currentPath.startsWith("/teaching-materials/ages/") && href.endsWith("/ages/index.html"))
    ) {
      link.classList.add("active");
    }
  });

  /* ======================================
   Sticky Header
  ====================================== */
  const header = document.querySelector(".site-header");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 40);
    });
  }

  /* ======================================
   Smooth Scroll
  ====================================== */
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

  /* ======================================
   Search
  ====================================== */
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

  /* ======================================
   Back To Top Button
  ====================================== */
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ======================================
   Balls Study Page Enhancements
  ====================================== */
  if (document.body.classList.contains("balls-study-page")) {

    /* Remove any study-specific search controls if an older cached HTML copy still contains them. */
    document.querySelectorAll(".search-bar, .hero-search").forEach(el => el.remove());

    /* Identify the Family Connection section so its three cards can be centered. */
    document.querySelectorAll("section").forEach(section => {
      const heading = section.querySelector("h2");
      if (heading && heading.textContent.trim() === "Family Connection") {
        section.classList.add("family-connection");
      }
    });

    /* Ensure Suggested Materials contains the expected classroom container item. */
    const materialsSection = [...document.querySelectorAll("section")].find(section => {
      const heading = section.querySelector("h2");
      return heading && heading.textContent.trim() === "Suggested Materials";
    });

    if (materialsSection) {
      const grid = materialsSection.querySelector(".why-grid");
      if (grid) {
        const hasContainers = [...grid.querySelectorAll("h3")].some(h => h.textContent.trim().toLowerCase() === "containers");
        if (!hasContainers) {
          grid.insertAdjacentHTML("beforeend", `
            <div class="why-card">
              <div class="why-icon">🪣</div>
              <h3>Containers</h3>
              <p>Buckets, baskets, hoops, cones, and bins for sorting, carrying, and movement activities.</p>
            </div>
          `);
        }
      }
    }

    /* Make sure the sensory section includes both Water Balls and Texture Bins. */
    const sensorySection = [...document.querySelectorAll("section")].find(section => {
      const heading = section.querySelector("h2");
      return heading && heading.textContent.trim() === "Sensory Ball Play";
    });

    if (sensorySection) {
      const grid = sensorySection.querySelector(".season-grid");
      if (grid) {
        const titles = [...grid.querySelectorAll("h3")].map(h => h.textContent.trim().toLowerCase());
        if (!titles.includes("water balls")) {
          grid.insertAdjacentHTML("afterbegin", `
            <div class="season-card">
              🫧
              <h3>Water Balls</h3>
              <p>Explore balls in water tubs with cups, scoops, and containers.</p>
            </div>
          `);
        }
        if (!titles.includes("texture bins") && !titles.includes("texture bin")) {
          grid.insertAdjacentHTML("beforeend", `
            <div class="season-card">
              🫘
              <h3>Texture Bins</h3>
              <p>Hide and find different balls in rice, oats, shredded paper, or other safe sensory materials.</p>
            </div>
          `);
        }
      }
    }

    /* Restore the full site-style footer while recoloring it for the Balls theme. */
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

});