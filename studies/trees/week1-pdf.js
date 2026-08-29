/* Trees Study Week 1 print / PDF control */
(function () {
  function addPrintButton() {
    if (document.getElementById('week1-pdf-download')) return;

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
