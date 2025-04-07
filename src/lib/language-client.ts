/// <reference lib="dom" />

import type { Language } from './content';
import { DEFAULT_LANGUAGE } from './content';

// No need for declarations when using DOM lib reference
/**
 * Client-side function to get the preferred language
 * Checks localStorage first, then browser setting, then falls back to default
 */
export function getPreferredLanguage(): Language {
  // Check if running in browser
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  // Check for saved language preference
  const savedLang = window.localStorage.getItem('language') as Language;
  if (savedLang && (savedLang === 'en' || savedLang === 'pl')) {
    return savedLang;
  }

  // Check for browser language preference
  const browserLang = window.navigator.language.substring(0, 2);
  if (browserLang === 'pl') {
    return 'pl';
  }

  // Fall back to default
  return DEFAULT_LANGUAGE;
}

/**
 * Client-side function to set the preferred language
 * Saves to localStorage
 */
export function setPreferredLanguage(lang: Language): void {
  window.localStorage.setItem('language', lang);

  // Reload the page to apply the language change
  window.location.reload();
}

/**
 * Initialize the language preference on page load
 * To be called in a client-side script
 */
export function initLanguage(): Language {
  const lang = getPreferredLanguage();
  document.documentElement.setAttribute('lang', lang);
  return lang;
}
