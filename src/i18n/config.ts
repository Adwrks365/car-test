import type { Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "ru";
export const STORAGE_KEY = "site-locale";
export const HEBREW_PATH_PREFIX = "/he";
export const LOCALES: readonly Locale[] = ["ru", "he"];

export const LOCALE_DIR: Record<Locale, "ltr" | "rtl"> = {
  ru: "ltr",
  he: "rtl",
};

export const LOCALE_OG: Record<Locale, string> = {
  ru: "ru_RU",
  he: "he_IL",
};
