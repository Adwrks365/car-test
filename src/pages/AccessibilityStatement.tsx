import { useLanguage } from "../i18n";
import { LegalPageContent } from "./LegalPageContent";

export function AccessibilityStatement() {
  const { t } = useLanguage();
  return <LegalPageContent page={t.legal.accessibility} />;
}
