import { Link } from "react-router-dom";
import { EMAIL, mailHref } from "../config";

const legalLinks = [
  { to: "/accessibility", label: "הצהרת נגישות · Доступность" },
  { to: "/privacy", label: "מדיניות פרטיות · Конфиденциальность" },
  { to: "/terms", label: "תנאי שימוש · Условия" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-28 text-foam lg:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-sm">
        <a href={mailHref()} className="font-semibold text-white underline-offset-2 hover:underline">
          {EMAIL}
        </a>
        <nav aria-label="Юридическая информация" className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to} className="underline-offset-2 hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Аркадий · Техосмотр в Кармиэле</p>
          <p>Бывший главный эксперт и руководитель Компитест Кармиэль</p>
        </div>
      </div>
    </footer>
  );
}
