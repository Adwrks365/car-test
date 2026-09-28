import { BadgeCheck, Clock3 } from "lucide-react";
import { CORE_QUOTE } from "../config";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";

const included = [
  "Предварительный осмотр и честный разбор",
  "Подготовка к требованиям теста",
  "Сопровождение или прохождение за вас",
];

export function Hero() {
  return (
    <section id="top" className="hero-grid text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-sm font-semibold text-amber">
            Кармиэль · годовой тест автомобиля
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Годовой техосмотр — беру хлопоты на себя
          </h1>
          <blockquote className="mt-6 max-w-xl border-l-4 border-amber pl-5">
            <p className="font-serif text-lg leading-relaxed text-white italic sm:text-xl">{CORE_QUOTE}</p>
          </blockquote>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <Clock3 className="size-4 text-amber" aria-hidden="true" />
              30+ лет опыта
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <BadgeCheck className="size-4 text-amber" aria-hidden="true" />
              Бывший главный эксперт Компитест
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton tone="amber" className="sm:min-w-44" />
            <WhatsAppButton tone="ghost" className="sm:min-w-56" />
          </div>
          <p className="mt-4 text-sm text-foam">Отвечаю лично. Кармиэль и подготовка к местному тесту.</p>
        </div>

        <aside className="rounded-3xl bg-white p-6 text-ink shadow-[0_28px_70px_-32px_rgba(0,0,0,0.65)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cta">Что входит</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
                От совета до пройденного теста
              </h2>
            </div>
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy text-lg font-extrabold text-amber">
              А
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-snug text-steel">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-amber/15 text-sm font-bold text-amber-deep">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-steel-line pt-6">
            <div>
              <p className="text-3xl font-extrabold tracking-tight text-navy">30+</p>
              <p className="mt-1 text-sm leading-snug text-steel">лет в сфере техосмотра</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-navy">Компитест</p>
              <p className="mt-1 text-sm leading-snug text-steel">Кармиэль, бывший руководитель</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
