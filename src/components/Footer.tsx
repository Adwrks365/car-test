import { Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { EMAIL, PHONE_DISPLAY, mailHref, telHref, whatsappHref } from "../config";
import { useLanguage } from "../i18n";

const sectionHeading =
  "text-xs font-bold uppercase tracking-[0.14em] text-amber md:text-center lg:text-start";

export function Footer() {
  const { t, path } = useLanguage();

  const legalLinks = [
    { to: path("/accessibility"), label: t.footer.accessibility },
    { to: path("/privacy"), label: t.footer.privacy },
    { to: path("/terms"), label: t.footer.terms },
  ];

  const contactLinks = [
    {
      href: telHref(),
      label: PHONE_DISPLAY,
      icon: Phone,
      external: false,
    },
    {
      href: whatsappHref(t.whatsapp.prefill),
      label: t.footer.whatsappLink,
      icon: MessageCircle,
      external: true,
    },
    {
      href: mailHref(),
      label: EMAIL,
      icon: Mail,
      external: false,
    },
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-navy-deep pb-24 text-foam lg:pb-10">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 text-center lg:grid-cols-3 lg:gap-12 lg:text-start">
          <div className="flex flex-col items-center lg:items-start">
            <Link to={path("/")} className="inline-flex flex-col items-center lg:items-start">
              <img
                src="/logo.png?v=2"
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full ring-1 ring-white/15"
              />
              <span className="mt-4 text-lg font-extrabold text-white">{t.footer.brand}</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-foam/90">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.contactsNavAria} className="flex flex-col items-center lg:items-start">
            <p className={sectionHeading}>{t.footer.contacts}</p>
            <ul className="mt-4 flex w-full max-w-xs flex-col gap-3 text-sm lg:max-w-none">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center justify-center gap-2.5 font-medium text-white transition-colors hover:text-amber lg:justify-start"
                    >
                      <Icon className="size-4 shrink-0 text-amber" aria-hidden="true" />
                      <span className="break-all">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label={t.footer.legalNavAria} className="flex flex-col items-center lg:items-start">
            <p className={sectionHeading}>{t.footer.documents}</p>
            <ul className="mt-4 flex w-full max-w-xs flex-col gap-3 text-sm lg:max-w-none">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block text-foam transition-colors hover:text-white hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 max-w-3xl text-center text-xs leading-relaxed text-foam/75 lg:text-start">
          {t.disclaimer.short}{" "}
          <Link to={path("/terms")} className="font-semibold text-amber underline underline-offset-2 hover:text-white">
            {t.disclaimer.termsLink}
          </Link>
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-foam/80 lg:flex-row lg:items-center lg:justify-between lg:text-start">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="max-w-md leading-relaxed lg:max-w-none lg:text-end">{t.footer.subtitle}</p>
        </div>
      </div>
    </footer>
  );
}
