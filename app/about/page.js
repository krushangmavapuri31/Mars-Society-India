import VideoBackground from "@/components/VideoBackground";
import { org, pillars } from "@/data/content";

export const metadata = {
  title: "About | Mars Society India",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] flex items-end">
        <VideoBackground name="landed-craft-habitat-pods" />
        <div className="relative z-10 px-5 sm:px-8 pb-12 max-w-6xl mx-auto w-full">
          <h1 className="font-display text-4xl sm:text-5xl text-bone">About</h1>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-3xl mx-auto">
        <p className="text-lg text-bone leading-relaxed">{org.affiliation}</p>

        <div className="mt-10 space-y-5">
          {org.vision.split("\n\n").map((para, i) => (
            <p key={i} className="text-bone-dim leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 sm:px-8 py-16 sm:py-20 max-w-3xl mx-auto">
        <p className="text-sm text-dust mb-2">What we do</p>
        <h2 className="font-display text-2xl sm:text-3xl text-bone mb-6">
          Organised around three pillars
        </h2>
        <ul className="space-y-6">
          {pillars.map((pillar) => (
            <li key={pillar.slug} className="border-l-2 border-rust-bright/60 pl-5">
              <p className="font-display text-xl text-bone">{pillar.name}</p>
              <p className="text-bone-dim mt-1 leading-relaxed">{pillar.objective}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10 px-5 sm:px-8 py-16 sm:py-20 max-w-3xl mx-auto">
        <p className="text-sm text-dust mb-2">Team</p>
        <p className="text-bone-dim leading-relaxed">
          Team and leadership information will be added here as the chapter grows.
        </p>
      </section>
    </>
  );
}
