import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "Quality execution",
    body: "Detailed method statements, staged inspections, and clear sign-offs at every critical layer of work.",
  },
  {
    title: "Materials you can trust",
    body: "In-house brick production and vetted suppliers for steel, concrete, and finishes—documented and traceable.",
  },
  {
    title: "Partnership & clarity",
    body: "Plain-language updates, realistic schedules, and no surprises on scope—built for long-term relationships.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="border-t border-stone-200 bg-[#faf9f7] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why choose us"
          title="Precision, materials, and trust—without the noise"
        />
        <ul className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-stone-200/90 bg-white p-8 shadow-sm shadow-stone-900/[0.03]"
            >
              <h3 className="font-serif text-xl text-stone-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
