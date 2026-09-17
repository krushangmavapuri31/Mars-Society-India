import Link from "next/link";
import { pillars } from "@/data/content";

export const metadata = {
  title: "Projects & Publications | Mars Society India",
};

export default function ProjectsPage() {
  return (
    <section className="px-5 sm:px-8 pt-32 pb-24 max-w-4xl mx-auto">
      <p className="text-sm text-dust mb-2">Projects &amp; Publications</p>
      <h1 className="font-display text-4xl sm:text-5xl text-bone">
        Research, missions, and papers
      </h1>
      <p className="mt-5 text-bone-dim leading-relaxed max-w-2xl">
        This page will list the chapter&rsquo;s research papers, analog mission reports,
        and student-led projects as they are published. For now, here are the working
        areas each pillar covers.
      </p>

      <div className="mt-14 space-y-12">
        {pillars.map((pillar) => (
          <div key={pillar.slug} className="border-t border-white/10 pt-8">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-display text-2xl text-bone">{pillar.name}</h2>
              <Link
                href={`/pillars/${pillar.slug}`}
                className="text-sm text-rust-bright border-b border-rust-bright/60"
              >
                View pillar
              </Link>
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {pillar.areas.map((area) => (
                <li key={area} className="text-sm text-bone-dim">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-16 text-sm text-bone-dim border-t border-white/10 pt-8">
        Have a paper, project, or analog mission report to share? Get in touch via the{" "}
        <Link href="/contact" className="text-rust-bright border-b border-rust-bright/60">
          contact page
        </Link>
        .
      </p>
    </section>
  );
}
