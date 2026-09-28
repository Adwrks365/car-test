import { CarFront, ClipboardCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services: {
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Предварительный осмотр и консультация",
    text: "Смотрю автомобиль до официального теста и говорю прямо: что уже в порядке и что может не пройти.",
    points: ["Понятный разбор без лишней теории", "Список того, что стоит закрыть заранее"],
    icon: ClipboardCheck,
  },
  {
    title: "Подготовка автомобиля к техосмотру",
    text: "Помогаю привести машину к требованиям теста, чтобы замечания не всплыли уже в очереди.",
    points: ["Свет, тормоза, стёкла, документы и другие частые пункты", "Машина приезжает на тест собранной"],
    icon: Wrench,
  },
  {
    title: "Прохождение теста за вас",
    text: "Сопровождаю на техосмотре или прохожу процедуру вместо вас — без потерянного дня и разбора на месте.",
    points: ["Не нужно стоять в очереди самому", "Рядом человек, который знает станцию"],
    icon: CarFront,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Услуги"
          title="Что я беру на себя"
          text="Можно прийти за советом, отдать подготовку или передать весь визит. Объём выбираете вы."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-3xl border border-steel-line bg-white p-6 shadow-[0_16px_40px_-32px_rgba(12,27,48,0.6)]"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
