import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/newsreader/500.css';
import '@fontsource/newsreader/500-italic.css';
import '@fontsource/newsreader/600.css';

import '../../css/tokens.css';
import '../../css/base.css';
import '../../css/layout.css';
import '../../css/components.css';
import '../../css/case-study.css';

import { mountShell } from '../case-study-shell.js';
import { renderArchitectureDiagram } from '../architecture-diagram.js';

mountShell();
renderArchitectureDiagram('arch-diagram');
