import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telHref, whatsappHref } from "../config";

type Tone = "amber" | "ghost" | "outline";

const tones: Record<Tone, string> = {
  amber: "bg-cta text-white hover:bg-cta-hover",
  ghost: "border border-white/35 bg-white/5 text-white hover:bg-white/12",
  outline: "border border-steel-line bg-white text-navy hover:border-cta hover:text-cta",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-semibold transition-colors";

export function PhoneButton({
  tone,
  className = "",
}: {
  tone: Tone;
  className?: string;
}) {
  return (
    <a
      href={telHref()}
      aria-label={`Позвонить ${PHONE_DISPLAY}`}
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
  label = "Написать в WhatsApp",
}: {
  tone: Tone;
  className?: string;
  message?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${tones[tone]} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}
