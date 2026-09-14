function animateValue(el, target, suffix, finalDisplay, duration) {
  const isDecimal = !Number.isInteger(target);
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const current = target * eased;

    if (progress < 1) {
      el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)).toString() + suffix;
      requestAnimationFrame(tick);
    } else {
      // Always land on the authored display string (handles thousands
      // separators, "5th" ordinal suffixes, and exact decimal precision
      // that a recomputed value from target/suffix alone can't reproduce).
      el.textContent = finalDisplay;
    }
  }

  requestAnimationFrame(tick);
}

export function initCounters() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll('[data-counter]');
  if (!nodes.length) return;

  if (prefersReduced) {
    nodes.forEach((el) => {
      el.textContent = el.dataset.counterDisplay || el.dataset.counter;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.counterSuffix || '';
        const finalDisplay = el.dataset.counterDisplay || target.toString() + suffix;
        animateValue(el, target, suffix, finalDisplay, 1100);
        observer.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  nodes.forEach((el) => observer.observe(el));
}
