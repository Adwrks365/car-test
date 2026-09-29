import { useLanguage } from "../i18n";
import { LegalPageContent } from "./LegalPageContent";

export function TermsOfUse() {
  const { t } = useLanguage();
  return <LegalPageContent page={t.legal.terms} />;
}
