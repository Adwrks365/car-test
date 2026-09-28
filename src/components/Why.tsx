import { Award, MapPin, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";
import { SectionHeading } from "./SectionHeading";

const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "30+ лет в профессии",
    text: "Стаж в сфере техосмотра — больше тридцати лет. Знаю, на что смотрят на тесте и почему машина не проходит с первого раза.",
    icon: Award,
  },
  {
    title: "Кармиэль изнутри",
    text: "Бывший главный эксперт и руководитель Компитест Кармиэль. Это местная практика, а не общий совет из интернета.",
    icon: MapPin,
  },
  {
    title: "Ноль лишнего стресса",
    text: "Не нужно самому разбирать требования, отпрашиваться и гадать, что попросят исправить. Есть план и человек, который его ведёт.",
    icon: ShieldCheck,
  },
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionHeading
            eyebrow="Почему Аркадий"
            title="Человек, который сам руководил станцией"
            text="Время, очередь и неизвестность — вот что обычно стоит за отложенным тестом. Это как раз та работа, которую я забираю."
          />
          <div className="mt-8 space-y-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="flex gap-4 rounded-2xl bg-mist p-4 sm:p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-amber">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{reason.title}</h3>
                    <p className="mt-1 leading-relaxed text-steel">{reason.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="rounded-3xl bg-navy p-6 text-white sm:p-8 lg:sticky lg:top-24">
          <div className="grid size-16 place-items-center rounded-2xl bg-amber text-2xl font-extrabold text-navy">
            А
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-amber">Аркадий</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
            Бывший главный эксперт и руководитель
          </h3>
          <p className="mt-3 text-lg text-foam">Компитест Кармиэль</p>
          <p className="mt-6 border-t border-white/15 pt-6 font-serif text-xl leading-relaxed text-foam italic">
            Стаж в этой сфере более 30 лет.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <PhoneButton tone="amber" />
            <WhatsAppButton tone="ghost" />
          </div>
        </aside>
      </div>
    </section>
  );
}
