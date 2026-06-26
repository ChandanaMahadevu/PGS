import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="border-t border-stone-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About us"
          title="Construction rooted in craft and material honesty"
          description="We partner with homeowners and developers to deliver residential projects with disciplined site management and transparent milestones. Our red soil brick operation supplies consistent, high-strength units—ideal for load-bearing work and architectural character."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-2xl bg-[#faf9f7] p-8 ring-1 ring-stone-200/80 sm:p-10">
            <h3 className="font-serif text-xl text-stone-900">Build</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              From foundation to handover, we coordinate structure, envelope,
              and finishes with a single accountable team—so timelines and
              quality stay aligned.
            </p>
          </div>
          <div className="rounded-2xl bg-[#faf9f7] p-8 ring-1 ring-stone-200/80 sm:p-10">
            <h3 className="font-serif text-xl text-stone-900">Bricks</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              Red soil bricks fired for durability and tonal depth—suited for
              feature walls, facades, and structural masonry where performance
              and aesthetics both matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
