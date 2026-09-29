import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { EMAIL, PHONE_DISPLAY, mailHref, telHref } from "../config";
import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();

  const legalLinks = [
    { to: "/accessibility", label: t.footer.accessibility },
    { to: "/privacy", label: t.footer.privacy },
    { to: "/terms", label: t.footer.terms },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-deep pb-24 text-foam lg:pb-10">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <Link to="/" className="inline-block text-lg font-extrabold text-white hover:text-amber">
              {t.footer.brand}
            </Link>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-foam/90">{t.footer.tagline}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={mailHref()}
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-amber"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={telHref()}
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-amber"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label={t.footer.legalNavAria} className="md:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber">{t.footer.documents}</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-foam transition-colors hover:text-white hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-foam/80 sm:flex-row sm:items-center sm:justify-between sm:text-start">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>{t.footer.subtitle}</p>
        </div>
      </div>
    </footer>
  );
}
