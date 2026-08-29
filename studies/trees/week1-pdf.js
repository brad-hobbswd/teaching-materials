/* Trees Study Week 1 PDF download */
(function () {
  const pdfBase64 = 'JVBERi0xLjQKJf////8KNyAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9Db3VudCAyCi9LaWRzIFs0IDAgUiA2IDAgUl0KPj4KZW5kb2JqCg==';

  function addPdfButton() {
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
            <p>Finished reading? Download the complete Week One Trees lesson plan as a printable PDF for your lesson-plan binder.</p>
            <button id="week1-pdf-download" type="button" class="week-pdf-button">Download Week One PDF →</button>
          </div>
        </div>
      </div>`;
    const footer = document.querySelector('footer');
    if (footer) footer.parentNode.insertBefore(section, footer);
    else document.body.appendChild(section);
    document.getElementById('week1-pdf-download').addEventListener('click', function () {
      const bytes = Uint8Array.from(atob(pdfBase64), c => c.charCodeAt(0));
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Trees_Study_Week_1_Lesson_Plan.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addPdfButton);
  else addPdfButton();
})();
