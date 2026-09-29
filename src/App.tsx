import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AccessibilityWidget } from "./components/AccessibilityWidget";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { Header } from "./components/Header";
import { LegacyLangQueryRedirect, RuAliasRedirect } from "./components/LocaleRedirects";
import { ScrollTop } from "./components/ScrollTop";
import { LanguageProvider } from "./i18n";
import { AccessibilityStatement } from "./pages/AccessibilityStatement";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

const siteRoutes = [
  { path: "", page: HomePage },
  { path: "accessibility", page: AccessibilityStatement },
  { path: "privacy", page: PrivacyPolicy },
  { path: "terms", page: TermsOfUse },
] as const;

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <LegacyLangQueryRedirect />
        <HashScroll />
        <Header />
        <Routes>
          <Route path="/ru" element={<Navigate to="/" replace />} />
          <Route path="/ru/*" element={<RuAliasRedirect />} />

          {siteRoutes.map(({ path, page: Page }) => (
            <Route key={`ru-${path || "home"}`} path={path ? `/${path}` : "/"} element={<Page />} />
          ))}

          {siteRoutes.map(({ path, page: Page }) => (
            <Route
              key={`he-${path || "home"}`}
              path={path ? `/he/${path}` : "/he"}
              element={<Page />}
            />
          ))}
        </Routes>
        <Footer />
        <FloatingCta />
        <ScrollTop />
        <AccessibilityWidget />
      </LanguageProvider>
    </BrowserRouter>
  );
}
