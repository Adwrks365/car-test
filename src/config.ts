/**
 * PHONE_DISPLAY  Number as people should read it.
 * PHONE_E164     Digits only, country code, no "+" (used by the tel: link).
 * WHATSAPP_URL   Full WhatsApp link. Keep the number in sync with PHONE_E164.
 */
export const PHONE_DISPLAY = "053-727-3026";
export const PHONE_E164 = "972537273026";
export const WHATSAPP_URL = "https://wa.me/972537273026";
export const EMAIL = "arkadi.viner@gmail.com";

export const MAPS_URL = "https://maps.google.com/?q=Karmiel";

export function telHref(): string {
  return `tel:+${PHONE_E164}`;
}

export function mailHref(): string {
  return `mailto:${EMAIL}`;
}

export function whatsappHref(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsappMessage(
  fields: { name: string; phone: string; car: string; note: string },
  labels: { prefill: string; name: string; phone: string; car: string; note: string },
): string {
  const lines = [labels.prefill, `${labels.name}: ${fields.name.trim()}`, `${labels.phone}: ${fields.phone.trim()}`];

  if (fields.car.trim()) lines.push(`${labels.car}: ${fields.car.trim()}`);
  if (fields.note.trim()) lines.push(`${labels.note}: ${fields.note.trim()}`);

  return lines.join("\n");
}
