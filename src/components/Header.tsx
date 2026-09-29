import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t, path } = useLanguage();
  const [open, setOpen] = useState(false);
  const home = path("/");

  const links = useMemo(
    () => [
      { href: `${home}#services`, label: t.header.navServices },
      { href: `${home}#why`, label: t.header.navWhy },
      { href: `${home}#steps`, label: t.header.navSteps },
      { href: `${home}#contact`, label: t.header.navContact },
    ],
    [home, t],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.toggleAttribute("data-menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-menu-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-navy"
      >
        {t.header.skipLink}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-5 xl:gap-4">
        <Link to={home} className="flex shrink-0 items-center gap-2.5">
          <img
            src="/logo.png?v=2"
            alt=""
            width={48}
            height={48}
            className="size-10 shrink-0 rounded-full sm:size-11"
          />
          <span className="hidden whitespace-nowrap text-sm font-extrabold leading-none tracking-tight text-white sm:inline xl:text-[15px]">
            {t.header.brand}
          </span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-6"
          aria-label={t.header.navAria}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="whitespace-nowrap text-[13px] font-semibold leading-none text-foam transition-colors hover:text-white 2xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
          <LanguageSwitcher />
          <PhoneButton tone="ghost" className="min-h-10 px-3 text-sm 2xl:px-4" />
          <WhatsAppButton
            tone="amber"
            className="min-h-10 px-3 text-sm 2xl:px-4"
            label={t.cta.whatsappShort}
          />
        </div>

        <div className="ms-auto flex shrink-0 items-center gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.header.closeMenu : t.header.openMenu}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-navy px-5 py-4 xl:hidden">
          <nav className="flex flex-col" aria-label={t.header.navAria}>
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="border-b border-white/10 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <PhoneButton tone="amber" />
            <WhatsAppButton tone="ghost" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
