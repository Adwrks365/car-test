import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref, whatsappHref } from "../config";
import { useLanguage } from "../i18n";

export function FloatingCta() {
  const { t } = useLanguage();

  return (
    <div className="mobile-cta fixed right-4 bottom-4 z-40 flex flex-col gap-2 lg:hidden">
      <a
        href={whatsappHref(t.whatsapp.prefill)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.cta.whatsappAria}
        className="grid size-11 place-items-center rounded-full bg-[#25D366] text-white shadow-md ring-1 ring-black/10 transition-shadow hover:shadow-lg"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <a
        href={telHref()}
        aria-label={`${t.cta.callAria} ${PHONE_DISPLAY}`}
        className="grid size-11 place-items-center rounded-full bg-cta text-white shadow-md ring-1 ring-black/10 transition-shadow hover:shadow-lg"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
