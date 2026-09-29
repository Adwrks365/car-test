import { Accessibility } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import {
  applyA11yPrefs,
  defaultA11yPrefs,
  loadA11yPrefs,
  saveA11yPrefs,
  type A11yPrefs,
} from "../a11y";

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(defaultA11yPrefs);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = loadA11yPrefs();
    setPrefs(stored);
    applyA11yPrefs(stored);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function update(next: A11yPrefs) {
    setPrefs(next);
    saveA11yPrefs(next);
    applyA11yPrefs(next);
  }

  function toggle(key: keyof Omit<A11yPrefs, "fontScale">) {
    update({ ...prefs, [key]: !prefs[key] });
  }

  return (
    <div className="fixed left-3 top-1/2 z-50 -translate-y-1/2">
      <button
        type="button"
        className="a11y-launcher grid size-11 place-items-center rounded-full bg-navy text-white shadow-md ring-1 ring-white/20 transition-shadow hover:shadow-lg"
        aria-label="Accessibility Menu / נגישות"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <Accessibility className="size-5" aria-hidden="true" />
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="נגישות / Доступность"
          className="a11y-panel fixed left-[3.75rem] top-1/2 max-h-[min(32rem,80vh)] w-[min(18rem,calc(100vw-5rem))] -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-4 text-ink shadow-2xl ring-1 ring-steel-line"
        >
          <p className="text-sm font-extrabold text-navy">נגישות · Доступность</p>
          <div className="mt-3 grid gap-2">
            <Toggle
              pressed={prefs.highContrast}
              onClick={() => toggle("highContrast")}
              label="ניגודיות גבוהה / Контраст"
            />
            <Toggle
              pressed={prefs.darkMode}
              onClick={() => toggle("darkMode")}
              label="מצב כהה / Тёмная тема"
            />
            <div className="flex items-center justify-between gap-2 rounded-xl bg-mist px-3 py-2">
              <span className="text-sm font-semibold text-navy">גודל טקסט / Текст</span>
              <span className="flex gap-1">
                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-lg bg-white text-sm font-extrabold text-navy ring-1 ring-steel-line"
                  aria-label="Уменьшить текст"
                  disabled={prefs.fontScale === 0}
                  onClick={() =>
                    update({ ...prefs, fontScale: (Math.max(0, prefs.fontScale - 1) as 0 | 1 | 2) })
                  }
                >
                  A−
                </button>
                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-lg bg-white text-base font-extrabold text-navy ring-1 ring-steel-line"
                  aria-label="Увеличить текст"
                  disabled={prefs.fontScale === 2}
                  onClick={() =>
                    update({ ...prefs, fontScale: (Math.min(2, prefs.fontScale + 1) as 0 | 1 | 2) })
                  }
                >
                  A+
                </button>
              </span>
            </div>
            <Toggle
              pressed={prefs.highlightLinks}
              onClick={() => toggle("highlightLinks")}
              label="הדגשת קישורים / Ссылки и фокус"
            />
            <Toggle
              pressed={prefs.stopMotion}
              onClick={() => toggle("stopMotion")}
              label="עצירת אנימציות / Без анимации"
            />
            <Toggle
              pressed={prefs.readableFont}
              onClick={() => toggle("readableFont")}
              label="גופן קריא / Простой шрифт"
            />
            <button
              type="button"
              className="mt-1 min-h-10 rounded-xl text-sm font-semibold text-steel underline"
              onClick={() => update(defaultA11yPrefs)}
            >
              איפוס / Сбросить
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Toggle({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-xl px-3 text-start text-sm font-semibold ${
        pressed ? "bg-navy text-white" : "bg-mist text-navy"
      }`}
    >
      {label}
    </button>
  );
}
