import { CarFront, ClipboardCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [ClipboardCheck, Wrench, CarFront] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.text} />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon: LucideIcon = icons[index] ?? ClipboardCheck;
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article className="hover-lift flex h-full flex-col rounded-3xl border border-steel-line bg-white p-6 shadow-[0_16px_40px_-32px_rgba(12,27,48,0.6)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-navy text-amber">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-extrabold tracking-[0.16em] text-navy/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{service.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-steel-line pt-5 text-sm leading-snug text-ink">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-cta" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
