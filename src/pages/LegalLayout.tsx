import { useEffect, type ReactNode } from "react";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main id="main" className="bg-mist">
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <div className="rounded-3xl bg-white p-6 text-ink shadow-[0_16px_40px_-32px_rgba(12,27,48,0.7)] sm:p-10">
          {children}
        </div>
      </article>
    </main>
  );
}

export function LegalBlock({
  lang,
  dir,
  children,
}: {
  lang: "he" | "ru";
  dir: "rtl" | "ltr";
  children: ReactNode;
}) {
  return (
    <section lang={lang} dir={dir} className="mt-10 border-t border-steel-line pt-8 first:mt-0 first:border-0 first:pt-0">
      {children}
    </section>
  );
}
