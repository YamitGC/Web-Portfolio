import { translations } from './translations.js';

export function initLanguageSwitcher() {
  const langToggleBtn = document.getElementById('lang-toggle');
  
  let currentLang = localStorage.getItem('lang') || 'es';
  
  if (currentLang !== 'es') {
    updateContent(currentLang);
    langToggleBtn.textContent = 'ES';
  }

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    localStorage.setItem('lang', currentLang);
    updateContent(currentLang);
    
    langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  });
}

function updateContent(lang) {
  // Traducir textos normales e HTML interno
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Traducir placeholders de inputs del formulario
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.documentElement.setAttribute('lang', lang);
}