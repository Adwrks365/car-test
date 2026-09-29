import { Award, ZoomIn } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n";
import type { CredentialItem } from "../i18n/types";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const credentialSrc: Record<CredentialItem["id"], string> = {
  engineering: "/credentials-engineering.png",
  inspector: "/credentials-inspector.png",
  technion: "/credentials-technion.png",
};

export function Credentials() {
  const { t } = useLanguage();
  const [active, setActive] = useState<CredentialItem | null>(null);

  return (
    <section id="expert" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow={t.credentials.eyebrow} title={t.credentials.title} text={t.credentials.text} />
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <div className="relative">
                <img
                  src="/arkady-portrait.jpg"
                  alt={t.credentials.portraitAlt}
                  className="size-40 rounded-3xl object-cover object-top shadow-[0_20px_50px_-24px_rgba(12,27,48,0.55)] ring-4 ring-amber/30 sm:size-48"
                />
                <span className="absolute -bottom-3 -end-3 grid size-12 place-items-center rounded-2xl bg-navy text-amber shadow-lg">
                  <Award className="size-6" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy">{t.credentials.name}</h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-steel">{t.credentials.bio}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.credentials.items.map((item, index) => (
              <Reveal key={item.id} delay={120 + index * 70}>
                <button
                  type="button"
                  className="hover-lift group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-steel-line bg-mist text-start shadow-[0_12px_32px_-24px_rgba(12,27,48,0.5)]"
                  onClick={() => setActive(item)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={credentialSrc[item.id]}
                      alt=""
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-navy/75 py-2 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="size-3.5" aria-hidden="true" />
                      {t.credentials.zoom}
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
        src={active ? credentialSrc[active.id] : ""}
        alt={active?.alt ?? ""}
        caption={active?.caption ?? ""}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
