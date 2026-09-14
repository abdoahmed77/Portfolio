import { icons } from './icons.js';
import { initBackToTop } from './nav.js';
import { initReveal } from './reveal.js';
import { initCounters } from './counters.js';

export function mountShell() {
  const header = document.querySelector('[data-cs-header]');
  if (header) {
    header.outerHTML = `
      <header class="site-nav">
        <div class="container site-nav__inner">
          <a href="/" class="site-nav__brand">Abdalrhman Mostafa</a>
          <div class="site-nav__actions">
            <a class="btn btn--primary site-nav__cta" style="display: inline-flex;" href="/#contact">Let's Talk</a>
          </div>
        </div>
      </header>
    `;
  }

  const footer = document.querySelector('[data-cs-footer]');
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__inner">
            <p class="site-footer__identity">
              <span class="site-footer__name">Abdalrhman Ahmed Mostafa</span><br />
              <span class="site-footer__role">AI &amp; Machine Learning Engineer</span>
            </p>
            <nav class="site-footer__links" aria-label="Footer">
              <a href="https://github.com/abdoahmed77" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/abdlrhman-ahmed-ai-student" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:abdlrhmanahmed325@gmail.com">Email</a>
            </nav>
          </div>
          <p class="site-footer__copyright">© <span id="year"></span> Abdalrhman Ahmed Mostafa. Built from scratch with HTML, CSS, and JavaScript.</p>
        </div>
      </footer>
      <button class="back-to-top" aria-label="Back to top">${icons.arrowUp}</button>
    `;
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initBackToTop();
  initReveal();
  initCounters();
}
