import Link from "next/link";

export default function PillarBand({ pillar, reverse = false }) {
  return (
    <div className="grid md:grid-cols-2">
      <div
        className={`relative h-72 md:h-[26rem] ${reverse ? "md:order-2" : ""}`}
      >
        <img
          src={`/posters/${pillar.video}.jpg`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-void/10" />
      </div>

      <div
        className={`bg-surface flex items-center px-6 sm:px-12 py-14 md:py-0 ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div className="max-w-md">
          <h3 className="font-display text-3xl sm:text-4xl text-bone">{pillar.name}</h3>
          <p className="mt-4 text-bone-dim leading-relaxed">{pillar.intro}</p>
          <Link
            href={`/pillars/${pillar.slug}`}
            className="mt-6 inline-block text-sm text-rust-bright border-b border-rust-bright/60 pb-0.5 hover:border-rust-bright transition-colors"
          >
            Explore {pillar.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
