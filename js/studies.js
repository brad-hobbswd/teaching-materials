document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".main-nav");
  if (button && nav) {
    button.addEventListener("click", () => {
      nav.classList.toggle("active");
      button.setAttribute("aria-expanded", String(nav.classList.contains("active")));
    });
    document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  const grid = document.querySelector(".study-grid");
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll(".study-card"));
  const search = document.getElementById("studySearch");
  const heroSearch = document.getElementById("heroStudySearch");
  const categorySelect = document.getElementById("studyCategoryFilter");
  const sortSelect = document.getElementById("studySort");
  const summary = document.getElementById("studyResultsSummary");
  const chips = Array.from(document.querySelectorAll("[data-study-category]"));
  let activeCategory = "all";

  const categoriesFor = card => {
    const text = (card.innerText || "").toLowerCase();
    const classes = Array.from(card.querySelectorAll(".study-tag")).map(tag => tag.className.toLowerCase() + " " + tag.textContent.toLowerCase()).join(" ");
    const combined = text + " " + classes;
    const categories = [];
    if (/tree|garden|insect|recycl|nature|water/.test(combined)) categories.push("nature");
    if (/stem|engineering|building|box|machine|tube|wheel/.test(combined)) categories.push("stem");
    if (/literacy|sign|bread|clothes|story|book/.test(combined)) categories.push("literacy");
    if (/sand|sensory|water|tube/.test(combined)) categories.push("sensory");
    if (/art|paint|creative/.test(combined)) categories.push("art");
    if (/community|pet|clothes|sign|bread/.test(combined)) categories.push("community");
    if (/health|exercise|ball|movement|physical/.test(combined)) categories.push("health");
    return categories;
  };
  cards.forEach(card => card.dataset.studyCategories = categoriesFor(card).join(" "));

  const applyFilters = () => {
    const term = (search?.value || heroSearch?.value || "").trim().toLowerCase();
    const category = categorySelect?.value || activeCategory;
    let visible = cards.filter(card => {
      const matchesTerm = !term || card.innerText.toLowerCase().includes(term);
      const matchesCategory = category === "all" || (card.dataset.studyCategories || "").split(" ").includes(category);
      return matchesTerm && matchesCategory;
    });
    if (sortSelect?.value === "alphabetical") {
      visible.sort((a,b) => a.querySelector("h3").textContent.trim().localeCompare(b.querySelector("h3").textContent.trim()));
    }
    cards.forEach(card => { card.hidden = !visible.includes(card); });
    visible.forEach(card => grid.appendChild(card));
    if (summary) summary.textContent = visible.length
      ? "Showing " + visible.length + " of " + cards.length + " curriculum studies. Choose a study to explore its classroom investigation."
      : "No studies match those filters yet. Try another search term or choose All Categories.";
    chips.forEach(chip => {
      const selected = chip.dataset.studyCategory === category;
      chip.classList.toggle("active", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    if (categorySelect && categorySelect.value !== category) categorySelect.value = category;
  };
  chips.forEach(chip => chip.addEventListener("click", () => {
    activeCategory = chip.dataset.studyCategory;
    if (categorySelect) categorySelect.value = activeCategory;
    applyFilters();
    document.getElementById("study-library")?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
  [search,heroSearch].filter(Boolean).forEach(input => input.addEventListener("input", () => {
    const other = input === search ? heroSearch : search;
    if (other) other.value = input.value;
    applyFilters();
  }));
  categorySelect?.addEventListener("change", () => { activeCategory = categorySelect.value; applyFilters(); });
  sortSelect?.addEventListener("change", applyFilters);
  applyFilters();
});
