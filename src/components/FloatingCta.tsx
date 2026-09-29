import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref, whatsappHref } from "../config";

export function FloatingCta() {
  return (
    <div className="mobile-cta fixed bottom-5 right-4 z-40 flex flex-col gap-3 lg:hidden">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
      <a
        href={telHref()}
        aria-label={`Позвонить ${PHONE_DISPLAY}`}
        className="grid size-14 place-items-center rounded-full bg-cta text-white shadow-lg"
      >
        <Phone className="size-7" aria-hidden="true" />
      </a>
    </div>
  );
}
