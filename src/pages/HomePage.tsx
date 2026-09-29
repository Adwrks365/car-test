import { useEffect } from "react";
import { Contact } from "../components/Contact";
import { Credentials } from "../components/Credentials";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Steps } from "../components/Steps";
import { Why } from "../components/Why";
import { useLanguage } from "../i18n";

export function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
  }, [t.meta.title]);

  return (
    <main id="main">
      <Hero />
      <Credentials />
      <Services />
      <Why />
      <Steps />
      <Contact />
    </main>
  );
}
