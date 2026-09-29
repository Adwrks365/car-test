import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="hover-lift fixed bottom-3 left-3 z-40 grid size-11 place-items-center rounded-full bg-navy text-white shadow-md ring-1 ring-white/20"
      aria-label="Наверх"
      onClick={() => {
        const reduce =
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          document.documentElement.dataset.motion === "off";
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
