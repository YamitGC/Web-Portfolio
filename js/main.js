import { initThemeSwitcher } from './theme.js';
import { initLanguageSwitcher } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initLanguageSwitcher();
});