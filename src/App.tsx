import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccessibilityWidget } from "./components/AccessibilityWidget";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { AccessibilityStatement } from "./pages/AccessibilityStatement";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
      <Footer />
      <FloatingCta />
      <ScrollTop />
      <AccessibilityWidget />
    </BrowserRouter>
  );
}
