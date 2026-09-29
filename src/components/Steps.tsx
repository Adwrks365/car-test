import { BadgeCheck, Phone, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Phone, Search, BadgeCheck] as const;

export function Steps() {
  const { t } = useLanguage();

  return (
    <section id="steps" className="scroll-mt-20 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow={t.steps.eyebrow} title={t.steps.title} text={t.steps.text} />
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {t.steps.items.map((step, index) => {
            const Icon: LucideIcon = icons[index] ?? Phone;
            return (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 80}
                className="hover-lift relative h-full rounded-3xl border border-steel-line bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-cta text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-extrabold tracking-[0.18em] text-cta">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{step.text}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
