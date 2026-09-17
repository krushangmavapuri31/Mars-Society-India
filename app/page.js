import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import PillarBand from "@/components/PillarBand";
import { org, pillars } from "@/data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[560px] flex items-end">
        <VideoBackground name="mars-sunrise-dunes" />
        <div className="relative z-10 w-full px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm tracking-wide text-dust mb-4">
              {org.name}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-bone max-w-3xl leading-[1.05]">
              {org.heroLine}
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pillars"
                className="px-6 py-3 bg-rust-bright text-void font-medium hover:bg-dust transition-colors"
              >
                Explore the pillars
              </Link>
              <Link
                href="/join"
                className="px-6 py-3 border border-bone/40 text-bone hover:border-bone transition-colors"
              >
                Join the chapter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-void">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <p className="text-sm text-dust mb-3">Vision</p>
            {org.vision.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-bone leading-relaxed ${
                  i === 0 ? "text-xl sm:text-2xl font-display font-medium" : "mt-5 text-bone-dim"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
          <div className="md:col-span-2 relative min-h-[16rem]">
            <img
              src="/posters/mars-orbit.jpg"
              alt="Mars seen from orbit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars overview */}
      <section className="border-t border-white/10">
        <div className="px-5 sm:px-8 pt-16 pb-4 max-w-6xl mx-auto">
          <p className="text-sm text-dust mb-2">What we do</p>
          <h2 className="font-display text-3xl sm:text-4xl text-bone">Three pillars</h2>
        </div>
        <div className="divide-y divide-white/10">
          {pillars.map((pillar, i) => (
            <PillarBand key={pillar.slug} pillar={pillar} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-28 sm:py-36 flex items-center justify-center text-center px-5">
        <VideoBackground name="astronaut-ridge-overlook" overlay={false} />
        <div className="absolute inset-0 bg-void/70" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl text-bone">
            Be part of India&rsquo;s journey to Mars.
          </h2>
          <p className="mt-4 text-bone-dim">
            Students, researchers, engineers, and space enthusiasts across India are
            welcome to contribute.
          </p>
          <Link
            href="/join"
            className="mt-8 inline-block px-7 py-3 bg-rust-bright text-void font-medium hover:bg-dust transition-colors"
          >
            Join the chapter
          </Link>
        </div>
      </section>
    </>
  );
}
