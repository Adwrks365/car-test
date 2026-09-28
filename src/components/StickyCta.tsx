import { useEffect, useState } from "react";
import { PhoneButton, WhatsAppButton } from "./CtaButtons";

export function StickyCta() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (hide) return null;

  return (
    <div className="mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-steel-line bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <PhoneButton tone="amber" className="px-3 text-sm" />
        <WhatsAppButton tone="outline" className="px-3 text-sm" label="WhatsApp" />
      </div>
    </div>
  );
}
