import { ZoomIn } from "lucide-react";
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
    <section id="expert" className="scroll-mt-20 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow={t.credentials.eyebrow} title={t.credentials.title} text={t.credentials.text} />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.credentials.items.map((item, index) => (
            <Reveal key={item.id} delay={80 + index * 70}>
              <button
                type="button"
                className="hover-lift group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-steel-line bg-white text-start shadow-[0_12px_32px_-24px_rgba(12,27,48,0.5)]"
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
