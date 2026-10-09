export function initProjectFilters() {
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('[data-project-tags]');
  if (!chips.length || !cards.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const applyFilter = (filter) => {
    cards.forEach((card) => {
      const tags = card.dataset.projectTags.split(',');
      const match = filter === 'all' || tags.includes(filter);

      if (prefersReduced) {
        card.style.display = match ? '' : 'none';
        return;
      }

      if (match) {
        card.style.display = '';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        setTimeout(() => {
          if (card.style.opacity === '0') card.style.display = 'none';
        }, 220);
      }
    });
  };

  if (!prefersReduced) {
    cards.forEach((card) => {
      card.style.transition = 'opacity 220ms ease, transform 220ms ease';
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      applyFilter(chip.dataset.filter);
    });
  });
}
