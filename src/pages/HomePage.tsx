import { useEffect } from "react";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Steps } from "../components/Steps";
import { Why } from "../components/Why";

const HOME_TITLE = "Техосмотр в Кармиэле — Аркадий";

export function HomePage() {
  useEffect(() => {
    document.title = HOME_TITLE;
  }, []);

  return (
    <main id="main">
      <Hero />
      <Services />
      <Why />
      <Steps />
      <Contact />
    </main>
  );
}
