import { Globe } from "lucide-react";
import { useLanguage, type Locale } from "../i18n";

const locales: { id: Locale; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "he", label: "HE" },
];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={compact ? "flex items-center gap-1" : "flex items-center gap-2"}
      role="group"
      aria-label={t.header.languageSwitcher}
    >
      {!compact ? <Globe className="size-4 text-foam" aria-hidden="true" /> : null}
      <div className="inline-flex overflow-hidden rounded-lg border border-white/20 bg-white/5 p-0.5">
        {locales.map((item) => {
          const active = locale === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`min-h-8 min-w-10 rounded-md px-2.5 text-xs font-extrabold tracking-wide transition-colors ${
                active ? "bg-amber text-navy" : "text-foam hover:bg-white/10 hover:text-white"
              }`}
              aria-pressed={active}
              aria-label={item.id === "ru" ? t.header.switchToRu : t.header.switchToHe}
              onClick={() => setLocale(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
