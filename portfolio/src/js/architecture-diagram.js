const stages = [
  { name: 'Video / Traffic Data', detail: 'Live or recorded footage of an intersection, used as the raw input to the vision pipeline.' },
  { name: 'YOLOv8', detail: 'Vehicle detection and classification.' },
  { name: 'BoT-SORT', detail: 'Multi-object tracking for vehicle trajectories.' },
  { name: 'Traffic Statistics', detail: 'Per-lane counts, queue lengths, and speeds derived from tracked vehicles.' },
  { name: 'SUMO Simulation', detail: 'Traffic simulation environment used to model and evaluate signal-control decisions.' },
  { name: 'MAPPO + GAT', detail: 'Multi-agent policy learning with graph-based intent sharing across intersections.' },
  { name: 'Adaptive Signal Control', detail: 'The learned policy\u2019s output: signal timing decisions per intersection, including emergency vehicle priority.' },
  { name: 'Operator Platform', detail: 'Monitoring, analytics, and manual signal override, built with FastAPI and PyQt5.' },
];

export function renderArchitectureDiagram(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = stages
    .map((stage, i) => {
      const connector = i < stages.length - 1 ? '<div class="arch-connector" aria-hidden="true"></div>' : '';
      return `
        <div role="listitem">
          <button class="arch-node" aria-expanded="false" aria-controls="arch-detail-${i}">
            <span class="arch-node__index">${String(i + 1).padStart(2, '0')}</span>
            ${stage.name}
          </button>
          <div class="arch-detail" id="arch-detail-${i}">
            <p class="arch-detail__inner">${stage.detail}</p>
          </div>
        </div>
        ${connector}
      `;
    })
    .join('');

  container.querySelectorAll('.arch-node').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const detail = document.getElementById(btn.getAttribute('aria-controls'));

      // Close others for a focused reading experience
      container.querySelectorAll('.arch-node').forEach((other) => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          document.getElementById(other.getAttribute('aria-controls')).classList.remove('is-open');
        }
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      detail.classList.toggle('is-open', !isOpen);
    });
  });
}
