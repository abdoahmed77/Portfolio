import { icons } from './icons.js';

export const placeholder = (label, icon = 'image') => `
  <div class="placeholder">
    ${icons[icon]}
    <span class="placeholder__label">${label}</span>
  </div>
`;

export const tag = (text, accent = false) =>
  `<span class="tag${accent ? ' tag--accent' : ''}">${text}</span>`;

export const externalLinkAttrs = 'target="_blank" rel="noopener noreferrer"';
