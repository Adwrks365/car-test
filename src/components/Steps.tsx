import { BadgeCheck, Phone, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Свяжитесь",
    text: "Позвоните или напишите в WhatsApp. Достаточно марки, года и того, когда заканчивается тест.",
    icon: Phone,
  },
  {
    title: "Проверим автомобиль",
    text: "Осмотр и подготовка к требованиям теста. Вы заранее знаете, что в порядке и что ещё закрыть.",
    icon: Search,
  },
  {
    title: "Тест пройден",
    text: "Сопровождаю процедуру или прохожу её за вас. Вам остаётся результат, а не очередь.",
    icon: BadgeCheck,
  },
];

export function Steps() {
  return (
    <section id="steps" className="scroll-mt-20 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Как это работает"
          title="Три шага от звонка до пройденного теста"
          text="Без анкет на десять полей и без ожидания «мы вам перезвоним когда-нибудь»."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative rounded-3xl bg-white p-6 ring-1 ring-steel-line">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-cta text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-extrabold tracking-[0.18em] text-cta">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
