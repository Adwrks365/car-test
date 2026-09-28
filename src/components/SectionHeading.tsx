export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-cta">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-foam" : "text-steel"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
