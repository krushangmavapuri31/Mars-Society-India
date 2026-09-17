"use client";

import { useState, useRef } from "react";

const inputClasses =
  "w-full bg-transparent border border-white/20 focus:border-rust-bright px-4 py-3 text-bone placeholder:text-bone-dim/70 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const startedAtRef = useRef(Date.now());

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      company: form.company.value, // honeypot
      startedAt: startedAtRef.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-rust-bright/50 bg-surface px-6 py-8">
        <p className="font-display text-2xl text-bone">Message sent.</p>
        <p className="mt-2 text-bone-dim">
          Thanks for reaching out. We&rsquo;ll get back to you by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field, hidden from real visitors */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm text-bone-dim mb-2">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-bone-dim mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-bone-dim mb-2">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-bone-dim mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-rust-bright">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 bg-rust-bright text-void font-medium hover:bg-dust transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
