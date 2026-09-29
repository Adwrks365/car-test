import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LOCALE_DIR } from "./config";
import {
  applyDocumentLocale,
  persistLocale,
  resolveInitialLocale,
  syncLocaleToUrl,
} from "./locale";
import { translations } from "./translations";
import type { Locale, Translations } from "./types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => resolveInitialLocale());

  useEffect(() => {
    persistLocale(locale);
    applyDocumentLocale(locale);
    syncLocaleToUrl(locale);
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      dir: LOCALE_DIR[locale],
    }),
    [locale],
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
