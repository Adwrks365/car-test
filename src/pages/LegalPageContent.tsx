import { EMAIL, PHONE_DISPLAY, mailHref, telHref } from "../config";
import type { LegalPage } from "../i18n/types";
import { LegalLayout } from "./LegalLayout";

export function LegalPageContent({ page }: { page: LegalPage }) {
  return (
    <LegalLayout title={page.documentTitle}>
      <h1 className="text-3xl font-extrabold tracking-tight text-navy">{page.title}</h1>
      <p className="mt-3 text-sm font-semibold text-steel">{page.updated}</p>
      <p className="mt-4 leading-relaxed text-steel">{page.intro}</p>

      {page.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-xl font-extrabold text-navy">{section.heading}</h2>
          {section.list ? (
            <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed text-steel">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {page.contactHeading ? (
        <>
          <h2 className="mt-8 text-xl font-extrabold text-navy">{page.contactHeading}</h2>
          <p className="mt-3 leading-relaxed text-steel">
            {page.contactName}
            <br />
            {page.emailLabel}:{" "}
            <a className="font-semibold text-navy underline" href={mailHref()}>
              {EMAIL}
            </a>
            <br />
            {page.phoneLabel}:{" "}
            <a className="font-semibold text-navy underline" href={telHref()}>
              {PHONE_DISPLAY}
            </a>
          </p>
        </>
      ) : null}

      {page.questionsPrefix ? (
        <p className="mt-3 leading-relaxed text-steel">
          {page.questionsPrefix}:{" "}
          <a className="font-semibold text-navy underline" href={mailHref()}>
            {EMAIL}
          </a>
          ,{" "}
          <a className="font-semibold text-navy underline" href={telHref()}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      ) : null}
    </LegalLayout>
  );
}
