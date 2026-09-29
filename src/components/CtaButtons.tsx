import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref, whatsappHref } from "../config";
import { useLanguage } from "../i18n";

type Tone = "amber" | "ghost" | "outline";

const tones: Record<Tone, string> = {
  amber: "bg-cta text-white hover:bg-cta-hover",
  ghost: "border border-white/35 bg-white/5 text-white hover:bg-white/12",
  outline: "border border-steel-line bg-white text-navy hover:border-cta hover:text-cta",
};

const base =
  "hover-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-semibold";

export function PhoneButton({
  tone,
  className = "",
}: {
  tone: Tone;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <a
      href={telHref()}
      aria-label={`${t.cta.callAria} ${PHONE_DISPLAY}`}
      className={`${base} ${tones[tone]} ${className}`}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
    </a>
  );
}

export function WhatsAppButton({
  tone,
  className = "",
  message,
  label,
}: {
  tone: Tone;
  className?: string;
  message?: string;
  label?: string;
}) {
  const { t } = useLanguage();
  const text = label ?? t.cta.whatsapp;

  return (
    <a
      href={whatsappHref(message ?? t.whatsapp.prefill)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${tones[tone]} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      {text}
    </a>
  );
}
