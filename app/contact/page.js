import ContactForm from "@/components/ContactForm";
import { org } from "@/data/content";

export const metadata = {
  title: "Contact | Mars Society India",
};

export default function ContactPage() {
  return (
    <section className="px-5 sm:px-8 pt-32 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
      <div>
        <p className="text-sm text-dust mb-2">Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl text-bone">Get in touch</h1>
        <p className="mt-5 text-bone-dim leading-relaxed max-w-sm">
          Questions, collaborations, media enquiries, or anything else &mdash; reach us
          directly by email, or use the form.
        </p>
        <div className="mt-8 space-y-2">
          <a
            href={`mailto:${org.emails.primary}`}
            className="block text-bone hover:text-rust-bright transition-colors"
          >
            {org.emails.primary}
          </a>
          <a
            href={`mailto:${org.emails.secondary}`}
            className="block text-bone hover:text-rust-bright transition-colors"
          >
            {org.emails.secondary}
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
