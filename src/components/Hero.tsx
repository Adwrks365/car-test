import { BadgeCheck, Clock3, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref } from "../config";
import { useLanguage } from "../i18n";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";

function HeroHeadline({ lead, rest }: { lead: string; rest: string }) {
  return (
    <h1 className="hero-headline mt-5 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]">
      <span className="text-pretty">{lead}</span>
      <span className="hero-headline-separator" aria-hidden="true">
        {"\u00A0\u2014\u00A0"}
      </span>
      <span className="text-pretty">{rest}</span>
    </h1>
  );
}

function LicenseStampBadge({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none absolute top-[36%] right-[4%] z-10 size-[clamp(6.75rem,38%,10.5rem)] rotate-[-12deg]"
      aria-hidden="true"
    >
      <div className="absolute inset-[-6px] rounded-full bg-white shadow-sm" />
      <div className="license-stamp relative flex h-full w-full flex-col items-center justify-center rounded-full border-[3px] border-emerald-700 bg-[#ecfdf5] p-2 text-center shadow-[0_10px_28px_-10px_rgba(4,120,87,0.55)] ring-2 ring-emerald-600/30">
        <p className="max-w-[88%] text-[clamp(0.72rem,2.4vw,0.95rem)] font-extrabold leading-[1.1] tracking-wide text-emerald-900">
          {label}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section id="top" className="hero-grid text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-sm font-semibold text-amber">
            {t.hero.badge}
          </p>
          <HeroHeadline lead={t.hero.titleLead} rest={t.hero.titleRest} />
          <blockquote className="mt-6 max-w-xl border-s-4 border-amber ps-5">
            <p className="font-serif text-lg leading-relaxed text-white italic sm:text-xl">{t.hero.quote}</p>
          </blockquote>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <Clock3 className="size-4 text-amber" aria-hidden="true" />
              {t.hero.experienceBadge}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <BadgeCheck className="size-4 text-amber" aria-hidden="true" />
              {t.hero.compitestBadge}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton tone="amber" className="sm:min-w-44" />
            <WhatsAppButton tone="ghost" className="sm:min-w-56" />
          </div>
          <p className="mt-4 text-sm text-foam">{t.hero.personalNote}</p>
        </div>

        <figure className="hover-lift overflow-hidden rounded-3xl bg-white text-ink shadow-[0_28px_70px_-32px_rgba(0,0,0,0.65)]">
          <div className="relative">
            <img
              key={locale}
              src={t.assets.licenseImage}
              alt={t.hero.licenseAlt}
              className="h-auto w-full"
            />
            {t.assets.showStampOverlay ? <LicenseStampBadge label={t.hero.stampPrimary} /> : null}
          </div>
          <figcaption className="flex flex-col gap-3 border-t border-steel-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-extrabold tracking-wide text-emerald-800">{t.hero.stampPrimary}</p>
              <p className="text-base font-semibold text-navy">{t.hero.stampSecondary}</p>
            </div>
            <a
              href={telHref()}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-lg font-extrabold whitespace-nowrap text-navy"
            >
              <Phone className="size-5 shrink-0 text-cta" aria-hidden="true" />
              <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
