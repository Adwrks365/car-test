import { BadgeCheck, Clock3, Phone } from "lucide-react";
import { CORE_QUOTE, PHONE_DISPLAY, telHref } from "../config";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";

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

        <figure className="overflow-hidden rounded-3xl bg-white text-ink shadow-[0_28px_70px_-32px_rgba(0,0,0,0.65)]">
          <img
            src="/vehicle-license.png"
            alt="Стилизованный ришион рехев со штампом «Техосмотр пройден»"
            className="h-auto w-full"
          />
          <figcaption className="flex flex-col gap-3 border-t border-steel-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold tracking-wide text-emerald-700">ТЕХОСМОТР ПРОЙДЕН ✓</p>
              <p className="text-base font-semibold text-navy" dir="rtl" lang="he">
                נבדק ונמצא תקין
              </p>
            </div>
            <a
              href={telHref()}
              className="inline-flex min-h-11 items-center gap-2 text-lg font-extrabold text-navy"
            >
              <Phone className="size-5 text-cta" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
