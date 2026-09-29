/**
 * PHONE_DISPLAY  Number as people should read it.
 * PHONE_E164     Digits only, country code, no "+" (used by the tel: link).
 * WHATSAPP_URL   Full WhatsApp link. Keep the number in sync with PHONE_E164.
 */
export const PHONE_DISPLAY = "053-727-3026";
export const PHONE_E164 = "972537273026";
export const WHATSAPP_URL = "https://wa.me/972537273026";
export const EMAIL = "arkadi.viner@gmail.com";

export const WHATSAPP_PREFILL = "Здравствуйте Аркадий, мне нужна помощь с техосмотром.";

/** Replace with the real schedule. Shown as-is on the contact section. */
export const WORKING_HOURS: { days: string; time: string }[] = [
  { days: "Приём", time: "по предварительной договорённости" },
];

export const LOCATION_LABEL = "Кармиэль, Израиль";
export const LOCATION_DETAIL =
  "Встреча, подготовка и сопровождение на техосмотр — в Кармиэле.";
export const MAPS_URL = "https://maps.google.com/?q=Karmiel";

export const CORE_QUOTE =
  "Приближается годовой техосмотр вашего автомобиля? Нет времени, желания или есть другие причины? Помогу вам в этом советом и делом! Стаж в этой сфере более 30 лет. Аркадий.";

export function telHref(): string {
  return `tel:+${PHONE_E164}`;
}

export function mailHref(): string {
  return `mailto:${EMAIL}`;
}

export function whatsappHref(message: string = WHATSAPP_PREFILL): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsappMessage(fields: {
  name: string;
  phone: string;
  car: string;
  note: string;
}): string {
  const lines = [
    WHATSAPP_PREFILL,
    `Имя: ${fields.name.trim()}`,
    `Телефон: ${fields.phone.trim()}`,
  ];

  if (fields.car.trim()) lines.push(`Автомобиль: ${fields.car.trim()}`);
  if (fields.note.trim()) lines.push(`Комментарий: ${fields.note.trim()}`);

  return lines.join("\n");
}
