import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  buildWhatsappMessage,
  mailHref,
  telHref,
  whatsappHref,
} from "../config";
import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FormState = {
  name: string;
  phone: string;
  car: string;
  note: string;
};

const emptyForm: FormState = { name: "", phone: "", car: "", note: "" };

export function Contact() {
  const { t, path } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState("");

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSent(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError(t.contact.errorRequired);
      setSent(false);
      return;
    }

    const url = whatsappHref(buildWhatsappMessage(form, t.whatsapp));
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setFallbackUrl(url);
    setSent(true);
    if (popup) popup.opener = null;
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-navy py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <SectionHeading
              light
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              text={t.contact.text}
            />
          </Reveal>

          <ul className="mt-8 space-y-4">
            <li>
              <a href={telHref()} className="group flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-white/15">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-foam">{t.contact.phoneLabel}</span>
                  <span className="block text-lg font-bold group-hover:text-amber">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={mailHref()} className="group flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-white/15">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-foam">{t.contact.emailLabel}</span>
                  <span className="block text-lg font-bold break-all group-hover:text-amber">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(t.whatsapp.prefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-white/15">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-foam">{t.contact.whatsappLabel}</span>
                  <span className="block text-lg font-bold group-hover:text-amber">{t.contact.whatsappDirect}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-white/15">
                <Clock3 className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-foam">{t.contact.hoursLabel}</span>
                <span className="mt-1 block text-base font-semibold">
                  {t.contact.hoursDays}: {t.contact.hoursTime}
                </span>
              </span>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-white/15">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-foam">{t.contact.locationNavLabel}</span>
                  <span className="block text-lg font-bold group-hover:text-amber">{t.contact.locationLabel}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-foam">{t.contact.locationDetail}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl bg-white p-6 text-ink shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <h3 className="text-2xl font-extrabold tracking-tight text-navy">{t.contact.formTitle}</h3>
            <p className="mt-2 text-steel">{t.contact.formIntro}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-navy">
                {t.contact.nameLabel}
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-steel-line bg-mist px-3 py-3 text-base font-medium text-ink outline-none"
                  placeholder={t.contact.namePlaceholder}
                />
              </label>
              <label className="block text-sm font-semibold text-navy">
                {t.contact.phoneLabelField}
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-steel-line bg-mist px-3 py-3 text-base font-medium text-ink outline-none"
                  placeholder={t.contact.phonePlaceholder}
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-semibold text-navy">
              {t.contact.carLabel}
              <input
                name="car"
                value={form.car}
                onChange={(event) => update("car", event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-steel-line bg-mist px-3 py-3 text-base font-medium text-ink outline-none"
                placeholder={t.contact.carPlaceholder}
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-navy">
              {t.contact.noteLabel}
              <textarea
                name="note"
                rows={4}
                value={form.note}
                onChange={(event) => update("note", event.target.value)}
                className="mt-1.5 w-full resize-y rounded-xl border border-steel-line bg-mist px-3 py-3 text-base font-medium text-ink outline-none"
                placeholder={t.contact.notePlaceholder}
              />
            </label>

            {error ? (
              <p role="alert" className="mt-4 text-sm font-semibold text-cta">
                {error}
              </p>
            ) : null}

            {sent ? (
              <p role="status" className="mt-4 text-sm font-semibold text-navy">
                {t.contact.sentOpening}{" "}
                {fallbackUrl ? (
                  <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    {t.contact.sentFallback}
                  </a>
                ) : null}
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cta px-5 text-base font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t.contact.submit}
            </button>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              {t.contact.privacyNote}{" "}
              <Link to={path("/privacy")} className="font-semibold text-navy underline">
                {t.contact.privacyLink}
              </Link>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
