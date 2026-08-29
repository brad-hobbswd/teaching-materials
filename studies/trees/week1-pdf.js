/* Trees Study Week 1 print / PDF control */
(function () {
  function addStyles() {
    if (document.getElementById('week1-pdf-styles')) return;
    const style = document.createElement('style');
    style.id = 'week1-pdf-styles';
    style.textContent = `
      .week-pdf-download { background: #f2f7ed; padding: 64px 0; }
      .week-pdf-card { max-width: 980px; margin: 0 auto; padding: 38px 42px; border: 1px solid #d8e3d3; border-radius: 24px; background: #ffffff; box-shadow: 0 12px 30px rgba(47,101,68,.10); display: flex; align-items: center; gap: 28px; }
      .week-pdf-icon { width: 76px; height: 76px; flex: 0 0 76px; border-radius: 20px; background: #e8f1e4; display: grid; place-items: center; font-size: 34px; }
      .week-pdf-content { flex: 1; }
      .week-pdf-label { display: inline-block; margin-bottom: 8px; font-size: 12px; font-weight: 800; letter-spacing: .12em; color: #2f6544; }
      .week-pdf-content h2 { margin: 0 0 8px; color: #214b34; font-size: clamp(1.55rem, 3vw, 2.1rem); }
      .week-pdf-content p { margin: 0 0 20px; color: #5d6f63; line-height: 1.7; }
      .week-pdf-button { border: 0; border-radius: 999px; padding: 14px 24px; background: #2f6544; color: #fff; font: inherit; font-weight: 800; cursor: pointer; box-shadow: 0 8px 18px rgba(47,101,68,.18); }
      .week-pdf-button:hover { transform: translateY(-1px); }
      @media (max-width: 700px) { .week-pdf-download { padding: 42px 0; } .week-pdf-card { padding: 28px 22px; flex-direction: column; text-align: center; } .week-pdf-icon { width: 64px; height: 64px; flex-basis: 64px; } .week-pdf-button { width: 100%; } }
      @media print { .week-pdf-download, header, nav, .mobile-menu, .week-navigation, footer { display: none !important; } body { background: #fff !important; } }
    `;
    document.head.appendChild(style);
  }

  function addPrintButton() {
    if (document.getElementById('week1-pdf-download')) return;
    addStyles();

    const section = document.createElement('section');
    section.className = 'week-pdf-download';
    section.innerHTML = `
      <div class="container">
        <div class="week-pdf-card">
          <div class="week-pdf-icon">📄</div>
          <div class="week-pdf-content">
            <span class="week-pdf-label">WEEK ONE COMPLETE</span>
            <h2>Print or Save This Lesson Plan</h2>
            <p>Finished reading? Print the complete Week One Trees lesson plan, or choose <strong>Save as PDF</strong> in your browser's print window.</p>
            <button id="week1-pdf-download" type="button" class="week-pdf-button">🖨️ Print Week One Lesson Plan</button>
          </div>
        </div>
      </div>`;

    const footer = document.querySelector('footer');
    if (footer) footer.parentNode.insertBefore(section, footer);
    else document.body.appendChild(section);

    document.getElementById('week1-pdf-download').addEventListener('click', function () {
      window.print();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPrintButton);
  } else {
    addPrintButton();
  }
})();
