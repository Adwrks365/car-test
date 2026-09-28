import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Steps } from "./components/Steps";
import { StickyCta } from "./components/StickyCta";
import { Why } from "./components/Why";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Why />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
