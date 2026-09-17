import { notFound } from "next/navigation";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import { pillars } from "@/data/content";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pillar = pillars.find((p) => p.slug === params.slug);
  if (!pillar) return {};
  return { title: `${pillar.name} | Mars Society India` };
}

export default function PillarPage({ params }) {
  const pillar = pillars.find((p) => p.slug === params.slug);
  if (!pillar) notFound();

  const others = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <VideoBackground name={pillar.video} />
        <div className="relative z-10 px-5 sm:px-8 pb-14 max-w-6xl mx-auto w-full">
          <p className="text-sm text-dust mb-3">Pillar</p>
          <h1 className="font-display text-4xl sm:text-6xl text-bone max-w-2xl">
            {pillar.name}
          </h1>
          <p className="mt-4 text-bone-dim max-w-xl text-lg">{pillar.intro}</p>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
        <div>
          <p className="text-sm text-dust mb-2">Objective</p>
          <p className="text-bone leading-relaxed">{pillar.objective}</p>
        </div>
        <div className="relative min-h-[12rem]">
          <img
            src={`/posters/${pillar.secondaryImage}.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-white/10 px-5 sm:px-8 py-16 max-w-4xl mx-auto">
        <p className="text-sm text-dust mb-6">Key areas</p>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {pillar.areas.map((area) => (
            <li key={area} className="text-bone-dim border-l border-white/15 pl-4 py-0.5">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10 px-5 sm:px-8 py-16 max-w-4xl mx-auto">
        <p className="text-bone-dim">
          Specific ongoing projects and publications under {pillar.name} will be listed
          here as they launch. See{" "}
          <Link href="/projects" className="text-rust-bright border-b border-rust-bright/60">
            Projects &amp; Publications
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-white/10 px-5 sm:px-8 py-16 max-w-4xl mx-auto">
        <p className="text-sm text-dust mb-6">The other pillars</p>
        <div className="flex flex-wrap gap-6">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/pillars/${p.slug}`}
              className="text-bone hover:text-rust-bright transition-colors font-display text-xl"
            >
              {p.name} &rarr;
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
