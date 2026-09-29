import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref, whatsappHref } from "../config";

export function FloatingCta() {
  return (
    <div className="mobile-cta fixed bottom-3 right-3 z-40 flex flex-col gap-2 lg:hidden">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="grid size-11 place-items-center rounded-full bg-[#25D366] text-white shadow-md ring-1 ring-black/10 transition-shadow hover:shadow-lg"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <a
        href={telHref()}
        aria-label={`Позвонить ${PHONE_DISPLAY}`}
        className="grid size-11 place-items-center rounded-full bg-cta text-white shadow-md ring-1 ring-black/10 transition-shadow hover:shadow-lg"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
