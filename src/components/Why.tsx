import { Award, MapPin, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Award, MapPin, ShieldCheck] as const;

export function Why() {
  const { t } = useLanguage();

  return (
    <section id="why" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} text={t.why.text} />
          </Reveal>
          <div className="mt-8 space-y-4">
            {t.why.items.map((reason, index) => {
              const Icon: LucideIcon = icons[index] ?? Award;
              return (
                <Reveal key={reason.title} delay={index * 70}>
                  <article className="hover-lift flex gap-4 rounded-2xl border border-transparent bg-white p-4 sm:p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-amber">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">{reason.title}</h3>
                      <p className="mt-1 leading-relaxed text-steel">{reason.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <aside className="hover-lift rounded-3xl bg-navy p-6 text-white sm:p-8 lg:sticky lg:top-24">
            <img
              src="/arkady-portrait.jpg"
              alt=""
              className="size-20 rounded-2xl object-cover object-top ring-2 ring-amber/40"
            />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-amber">{t.why.asideName}</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{t.why.asideTitle}</h3>
            <p className="mt-3 text-lg text-foam">{t.why.asideSubtitle}</p>
            <p className="mt-6 border-t border-white/15 pt-6 font-serif text-xl leading-relaxed text-foam italic">
              {t.why.asideQuote}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <PhoneButton tone="amber" />
              <WhatsAppButton tone="ghost" />
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
