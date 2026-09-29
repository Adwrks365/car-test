import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOCALE_DIR } from "./config";
import { applyDocumentLocale, localeFromPathname, localizedPath, persistLocale } from "./locale";
import { translations } from "./translations";
import type { Locale, Translations } from "./types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  path: (pathname: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = useMemo(() => localeFromPathname(location.pathname), [location.pathname]);

  useEffect(() => {
    persistLocale(locale);
    applyDocumentLocale(locale);
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      const target = `${localizedPath(location.pathname, next)}${location.hash}`;
      navigate(target);
    },
    [locale, location.pathname, location.hash, navigate],
  );

  const path = useCallback((pathname: string) => localizedPath(pathname, locale), [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      dir: LOCALE_DIR[locale],
      path,
    }),
    [locale, setLocale, path],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
