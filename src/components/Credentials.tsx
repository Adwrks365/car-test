import { Award, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const credentials = [
  {
    id: "engineering",
    src: "/credentials-engineering.png",
    caption: "Диплом инженера-механика",
    alt: "Свидетельство о регистрации инженера-механика в Израиле",
  },
  {
    id: "inspector",
    src: "/credentials-inspector.png",
    caption: "Лицензия государственного инспектора",
    alt: "Государственная лицензия бухана рехев — Аркадий Винер",
  },
  {
    id: "technion",
    src: "/credentials-technion.png",
    caption: "Повышение квалификации в Технионе",
    alt: "Сертификат Техниона — переподготовка буханей рехев",
  },
] as const;

export function Credentials() {
  const [active, setActive] = useState<(typeof credentials)[number] | null>(null);

  return (
    <section id="expert" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Эксперт"
            title="Познакомьтесь с экспертом"
            text="Официальные документы и лицензии — не слова, а подтверждённая квалификация. Нажмите на документ, чтобы открыть его крупно."
          />
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <div className="relative">
                <img
                  src="/arkady-portrait.jpg"
                  alt="Аркадий Винер — государственный инспектор и инженер"
                  className="size-40 rounded-3xl object-cover object-top shadow-[0_20px_50px_-24px_rgba(12,27,48,0.55)] ring-4 ring-amber/30 sm:size-48"
                />
                <span className="absolute -bottom-3 -right-3 grid size-12 place-items-center rounded-2xl bg-navy text-amber shadow-lg">
                  <Award className="size-6" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy">Аркадий Винер</h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-steel">
                Инженер-механик, лицензированный государственный инспектор и бывший главный эксперт Компитест
                Кармиэль. Более 30 лет в сфере техосмотра.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {credentials.map((item, index) => (
              <Reveal key={item.id} delay={120 + index * 70}>
                <button
                  type="button"
                  className="hover-lift group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-steel-line bg-mist text-start shadow-[0_12px_32px_-24px_rgba(12,27,48,0.5)]"
                  onClick={() => setActive(item)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={item.src}
                      alt=""
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-navy/75 py-2 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="size-3.5" aria-hidden="true" />
                      Увеличить
                    </span>
                  </div>
                  <p className="px-3 py-3 text-sm font-bold leading-snug text-navy">{item.caption}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        src={active?.src ?? ""}
        alt={active?.alt ?? ""}
        caption={active?.caption ?? ""}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
