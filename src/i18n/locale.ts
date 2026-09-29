import {
  DEFAULT_LOCALE,
  LOCALE_DIR,
  LOCALE_OG,
  STORAGE_KEY,
  URL_PARAM,
} from "./config";
import { translations } from "./translations";
import type { Locale, Translations } from "./types";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "ru" || value === "he";
}

export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function readUrlLocale(): Locale | null {
  try {
    const value = new URLSearchParams(window.location.search).get(URL_PARAM);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

export function resolveInitialLocale(): Locale {
  return readUrlLocale() ?? readStoredLocale();
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export function syncLocaleToUrl(locale: Locale): void {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set(URL_PARAM, locale);
    window.history.replaceState(null, "", url);
  } catch {
    /* ignore */
  }
}

export function applyDocumentLocale(locale: Locale): void {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = LOCALE_DIR[locale];

  const t = translations[locale];
  document.title = t.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t.meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", t.meta.ogTitle);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", t.meta.ogDescription);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", LOCALE_OG[locale]);
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
