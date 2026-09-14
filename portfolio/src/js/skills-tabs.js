export function initSkillsTabs() {
  const tabs = document.querySelectorAll('.skills-tabs [role="tab"]');
  const panels = document.querySelectorAll('.skills-panel');
  if (!tabs.length) return;

  function activate(tab) {
    tabs.forEach((t) => {
      const isSelected = t === tab;
      t.setAttribute('aria-selected', String(isSelected));
      t.setAttribute('tabindex', isSelected ? '0' : '-1');
    });
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.id === tab.getAttribute('aria-controls'));
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        activate(next);
      }
    });
  });
}
