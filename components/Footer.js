import Link from "next/link";
import { org, nav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-bone">Mars Society India</p>
          <p className="mt-3 text-sm text-bone-dim leading-relaxed max-w-xs">
            {org.affiliation}
          </p>
        </div>

        <div>
          <p className="text-sm text-bone-dim mb-3">Site</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-bone hover:text-rust-bright transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-bone-dim mb-3">Get in touch</p>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${org.emails.primary}`} className="text-sm text-bone hover:text-rust-bright transition-colors break-all">
                {org.emails.primary}
              </a>
            </li>
            <li>
              <a href={`mailto:${org.emails.secondary}`} className="text-sm text-bone hover:text-rust-bright transition-colors break-all">
                {org.emails.secondary}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 sm:px-8 py-5 text-xs text-bone-dim">
        India Chapter of The Mars Society.
      </div>
    </footer>
  );
}
