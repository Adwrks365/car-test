import { X } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  src,
  alt,
  caption,
  open,
  onClose,
}: {
  src: string;
  alt: string;
  caption: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition-colors hover:bg-white/20"
        aria-label="Закрыть"
        onClick={onClose}
      >
        <X className="size-5" aria-hidden="true" />
      </button>
      <figure
        className="max-h-[90vh] max-w-5xl overflow-auto rounded-2xl bg-white p-2 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={src} alt={alt} className="max-h-[calc(90vh-4rem)] w-full object-contain" />
        <figcaption className="px-3 py-3 text-center text-sm font-semibold text-navy">{caption}</figcaption>
      </figure>
    </div>
  );
}
