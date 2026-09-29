import { useLanguage } from "../i18n";
import { LegalPageContent } from "./LegalPageContent";

export function PrivacyPolicy() {
  const { t } = useLanguage();
  return <LegalPageContent page={t.legal.privacy} />;
}
