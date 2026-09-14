import { projects } from '../data/projects.js';
import { tag, externalLinkAttrs } from './render-helpers.js';
import { icons } from './icons.js';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'nlp', label: 'NLP' },
  { id: 'data', label: 'Data' },
];

function statBlock(stat) {
  return `
    <div class="project-stat">
      <span class="project-stat__value" data-counter="${stat.numeric}" data-counter-suffix="${stat.suffix}" data-counter-display="${stat.value}">${stat.value}</span>
      <span class="project-stat__label">${stat.label}</span>
    </div>
  `;
}

function projectCard(project, index) {
  const reverse = index % 2 === 1 ? ' project-card--reverse' : '';
  return `
    <article class="project-card project-card--no-media reveal${reverse}" data-project-tags="${project.filterTags.join(',')}">
      <div class="project-card__body">
        <p class="project-card__category">${project.categoryFull}</p>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.description}</p>
        <div class="project-card__stats">
          ${project.stats.map(statBlock).join('')}
        </div>
        <div class="project-card__tags">
          ${project.tech.slice(0, 6).map((t) => tag(t)).join('')}
        </div>
        <div class="project-card__actions">
          <a class="btn btn--primary project-card__cta" href="${project.page}">
            View Case Study ${icons.arrowRight}
          </a>
          <a class="btn btn--secondary" href="${project.github}" ${externalLinkAttrs}>
            ${icons.github} GitHub
          </a>
        </div>
      </div>
    </article>
  `;
}

export function buildProjectsSection() {
  return `
    <div class="container">
      <div class="section__head reveal">
        <span class="section__kicker">Selected Projects</span>
        <h2 class="section__title">Things I've built</h2>
        <p class="section__lede">Three projects spanning multi-agent reinforcement learning, NLP, and applied data science — each with a full technical write-up.</p>
      </div>
      <div class="project-filters" role="group" aria-label="Filter projects by category">
        ${filters
          .map(
            (f, i) => `
          <button class="filter-chip" data-filter="${f.id}" aria-pressed="${i === 0}">${f.label}</button>
        `
          )
          .join('')}
      </div>
      <div class="project-list">
        ${projects.map(projectCard).join('')}
      </div>
    </div>
  `;
}
