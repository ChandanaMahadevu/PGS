type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-900/85">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
