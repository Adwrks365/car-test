import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const reduce =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        document.documentElement.dataset.motion === "off";
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      document.querySelector(hash)?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
