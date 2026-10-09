import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/newsreader/500.css';
import '@fontsource/newsreader/500-italic.css';
import '@fontsource/newsreader/600.css';

import './css/tokens.css';
import './css/base.css';
import './css/layout.css';
import './css/components.css';

import { buildProjectsSection } from './js/build-projects.js';
import { initNav, initBackToTop } from './js/nav.js';
import { initReveal } from './js/reveal.js';
import { initCounters } from './js/counters.js';
import { initProjectFilters } from './js/filters.js';
import { initSkillsTabs } from './js/skills-tabs.js';

document.getElementById('projects').outerHTML = `<section class="section" id="projects">${buildProjectsSection()}</section>`;

document.getElementById('year').textContent = new Date().getFullYear();

initNav();
initBackToTop();
initReveal();
initCounters();
initProjectFilters();
initSkillsTabs();
