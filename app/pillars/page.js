import PillarBand from "@/components/PillarBand";
import { pillars } from "@/data/content";

export const metadata = {
  title: "Pillars | Mars Society India",
};

export default function PillarsIndexPage() {
  return (
    <>
      <section className="px-5 sm:px-8 pt-32 pb-10 max-w-6xl mx-auto">
        <p className="text-sm text-dust mb-2">What we do</p>
        <h1 className="font-display text-4xl sm:text-5xl text-bone">Three pillars</h1>
        <p className="mt-4 text-bone-dim max-w-xl">
          The India Chapter of The Mars Society is organised around research, analog
          missions, and community.
        </p>
      </section>
      <div className="divide-y divide-white/10 border-t border-white/10">
        {pillars.map((pillar, i) => (
          <PillarBand key={pillar.slug} pillar={pillar} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
