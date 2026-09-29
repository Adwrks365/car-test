import { LOCALE_DIR, LOCALE_OG, STORAGE_KEY } from "./config";
import { localeFromPathname } from "./routing";
import { translations } from "./translations";
import type { Locale, Translations } from "./types";

export { isLocale, localeFromPathname, localizedPath, stripLocalePrefix } from "./routing";

export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "he") return stored;
  } catch {
    /* ignore */
  }
  return "ru";
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
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

export function resolveLocaleFromWindow(): Locale {
  return localeFromPathname(window.location.pathname);
}
