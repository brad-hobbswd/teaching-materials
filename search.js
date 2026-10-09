(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const index = Array.isArray(window.SEARCH_INDEX) ? window.SEARCH_INDEX : (typeof SEARCH_INDEX !== "undefined" ? SEARCH_INDEX : []);
    const form = document.getElementById("main-search");
    const mainInput = document.getElementById("searchInput");
    const heroInput = document.getElementById("heroSearch");
    const heroButton = document.getElementById("searchButton");
    const results = document.getElementById("searchResults");
    const noResults = document.getElementById("noResults");
    const summary = document.getElementById("searchSummary");
    const categoryButtons = [...document.querySelectorAll("[data-category]")];
    const ageFilter = document.getElementById("ageFilter");
    const domainFilter = document.getElementById("domainFilter");
    const clearButton = document.getElementById("clearSearchFilters");
    if (!results || !summary) return;

    let activeCategory = "Everything";
    const normalize = value => String(value || "").toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    const getQuery = () => (heroInput?.value || mainInput?.value || "").trim();
    const categoryMatches = item => {
      if (activeCategory === "Everything") return true;
      if (activeCategory === "Interest Areas") return item.category === "Classroom Environment" || normalize(item.title).includes("interest area");
      if (activeCategory === "Lesson Plans") return item.category === "Lesson Plans";
      if (activeCategory === "Printables") return item.category === "Printables";
      if (activeCategory === "Books") return item.category === "Books" || item.category === "Literacy";
      if (activeCategory === "Songs") return item.category === "Songs";
      if (activeCategory === "Activities") return item.category === "Activities" || item.category === "Family Resources" || normalize(item.title + " " + (item.keywords || []).join(" ")).includes("activity");
      if (activeCategory === "Studies") return item.category === "Studies";
      return normalize(item.category) === normalize(activeCategory);
    };
    const ageMatches = item => {
      const selected = ageFilter?.value || "";
      if (!selected || item.age === "All ages") return true;
      const age = normalize(item.age);
      const wanted = normalize(selected);
      if (selected === "Pre-K") return age.includes("pre k");
      if (selected === "Preschool") return age.includes("preschool");
      if (selected === "Early Head Start") return age.includes("early head start");
      return age === wanted || age.includes(wanted);
    };
    const domainMatches = item => !domainFilter?.value || normalize(item.domain) === normalize(domainFilter.value);
    const queryMatches = (item, query) => {
      if (!query) return true;
      const haystack = normalize([item.title, item.category, item.description, item.age, item.domain, ...(item.keywords || [])].join(" "));
      return normalize(query).split(" ").filter(Boolean).every(term => haystack.includes(term));
    };
    const createText = (tag, className, value) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      node.textContent = value || "";
      return node;
    };
    const render = (updateUrl = false) => {
      const query = getQuery();
      const matched = index.filter(item => categoryMatches(item) && ageMatches(item) && domainMatches(item) && queryMatches(item, query));
      results.replaceChildren();
      matched.forEach(item => {
        const card = document.createElement("article");
        card.className = "study-card search-result-card";
        const content = document.createElement("div");
        content.className = "study-content";
        content.appendChild(createText("span", "study-tag search-result-tag", item.category));
        content.appendChild(createText("h3", "", item.title));
        content.appendChild(createText("p", "", item.description));
        const meta = createText("p", "search-result-meta", [item.age, item.domain].filter(Boolean).join(" • "));
        content.appendChild(meta);
        const footer = document.createElement("div");
        footer.className = "study-footer";
        const link = createText("a", "resource-result-link", "Open resource →");
        link.href = item.url;
        footer.appendChild(link);
        content.appendChild(footer);
        card.appendChild(content);
        results.appendChild(card);
      });
      noResults.style.display = matched.length ? "none" : "block";
      summary.textContent = matched.length + (matched.length === 1 ? " resource found" : " resources found") + (query ? ' for "' + query + '"' : "") + ".";
      if (updateUrl) {
        const url = new URL(window.location.href);
        if (query) url.searchParams.set("q", query); else url.searchParams.delete("q");
        window.history.replaceState({}, "", url);
      }
    };
    const setQuery = value => {
      if (mainInput) mainInput.value = value;
      if (heroInput) heroInput.value = value;
      render(true);
    };

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("q") || "";
    if (mainInput) mainInput.value = initialQuery;
    if (heroInput) heroInput.value = initialQuery;

    categoryButtons.forEach(button => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category || "Everything";
        categoryButtons.forEach(candidate => {
          const active = candidate === button;
          candidate.classList.toggle("active", active);
          candidate.setAttribute("aria-pressed", String(active));
        });
        render();
      });
    });
    form?.addEventListener("submit", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      setQuery(mainInput?.value || "");
      document.getElementById("searchResults")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    heroButton?.addEventListener("click", () => {
      setQuery(heroInput?.value || "");
      document.getElementById("searchResults")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    heroInput?.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        setQuery(heroInput.value);
        document.getElementById("searchResults")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    ageFilter?.addEventListener("change", render);
    domainFilter?.addEventListener("change", render);
    clearButton?.addEventListener("click", () => {
      activeCategory = "Everything";
      categoryButtons.forEach(button => {
        const active = button.dataset.category === "Everything";
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      if (ageFilter) ageFilter.value = "";
      if (domainFilter) domainFilter.value = "";
      setQuery("");
    });
    categoryButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === "Everything")));
    render();
  });
})();
