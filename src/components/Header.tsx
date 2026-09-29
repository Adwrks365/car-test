import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";

const links = [
  { href: "/#services", label: "Услуги" },
  { href: "/#why", label: "Почему Аркадий" },
  { href: "/#steps", label: "Как это работает" },
  { href: "/#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-navy"
      >
        К содержанию
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 sm:flex-none">
          <img
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-9 shrink-0 sm:size-11"
          />
          <span className="text-[13px] font-extrabold leading-tight tracking-tight text-white sm:whitespace-nowrap sm:text-sm xl:text-base">
            Аркадий <span className="font-semibold text-foam">|</span> Техосмотр Кармиэль
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Разделы страницы">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-semibold text-foam transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <PhoneButton tone="ghost" className="min-h-10 px-4 text-sm" />
          <WhatsAppButton tone="amber" className="min-h-10 px-4 text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-navy px-5 py-4 xl:hidden">
          <nav className="flex flex-col" aria-label="Разделы страницы">
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
