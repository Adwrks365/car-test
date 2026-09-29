import he from "./locales/he.json";
import ru from "./locales/ru.json";
import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  ru: ru as Translations,
  he: he as Translations,
};
