import { getProject } from '../data/projects.js';

export function renderModelComparison(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { models } = getProject('sentiment');
  let active = models.find((m) => m.name === 'GRU') || models[0];

  const maxAccuracy = Math.max(...models.map((m) => m.accuracy));

  function render() {
    container.innerHTML = `
      <div class="model-compare__tabs" role="tablist" aria-label="Select a model">
        ${models
          .map(
            (m) => `
          <button class="filter-chip" role="tab" data-model="${m.id}" aria-selected="${m.id === active.id}">${m.name}</button>
        `
          )
          .join('')}
      </div>

      <div class="model-compare__panel">
        <div class="model-metric">
          <p class="model-metric__label">Accuracy</p>
          <p class="model-metric__value">${(active.accuracy * 100).toFixed(1)}%</p>
        </div>
        <div class="model-metric">
          <p class="model-metric__label">F1 Score</p>
          <p class="model-metric__value">${active.f1.toFixed(3)}</p>
        </div>
      </div>

      <div class="model-compare__bars" role="list" aria-label="Accuracy comparison across all models">
        ${models
          .map((m) => {
            const pct = (m.accuracy / maxAccuracy) * 100;
            return `
            <div class="model-bar-row${m.id === active.id ? ' is-active' : ''}" role="listitem">
              <span class="model-bar-row__name">${m.name}</span>
              <span class="model-bar-track"><span class="model-bar-fill" style="width: ${pct}%"></span></span>
              <span class="model-bar-row__value">${(m.accuracy * 100).toFixed(1)}%</span>
            </div>
          `;
          })
          .join('')}
      </div>
    `;

    container.querySelectorAll('[data-model]').forEach((btn) => {
      btn.addEventListener('click', () => {
        active = models.find((m) => m.id === btn.dataset.model);
        render();
        container.querySelector(`[data-model="${active.id}"]`).focus();
      });
    });
  }

  render();
}
