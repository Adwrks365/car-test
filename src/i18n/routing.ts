import { DEFAULT_LOCALE } from "./config";
import type { Locale } from "./types";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "ru" || value === "he";
}

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/he" || pathname.startsWith("/he/")) return "he";
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/he") return "/";
  if (pathname.startsWith("/he/")) return pathname.slice(3) || "/";
  if (pathname === "/ru") return "/";
  if (pathname.startsWith("/ru/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizedPath(pathname: string, locale: Locale): string {
  const bare = stripLocalePrefix(pathname);
  if (locale === "he") {
    return bare === "/" ? "/he" : `/he${bare}`;
  }
  return bare;
}
