"use client";

import { useState, useRef } from "react";
import { interestOptions } from "@/data/content";

const inputClasses =
  "w-full bg-transparent border border-white/20 focus:border-rust-bright px-4 py-3 text-bone placeholder:text-bone-dim/70 transition-colors";

const statusOptions = ["Student", "Professional", "Other"];

export default function JoinForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const startedAtRef = useRef(Date.now());

  function toggleInterest(name) {
    setSelectedInterests((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      city: form.city.value,
      status: form.applicantStatus.value,
      institution: form.institution.value,
      interests: selectedInterests,
      message: form.message.value,
      company: form.company.value,
      startedAt: startedAtRef.current,
    };

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
      setSelectedInterests([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-rust-bright/50 bg-surface px-6 py-8">
        <p className="font-display text-2xl text-bone">Application received.</p>
        <p className="mt-2 text-bone-dim">
          Thanks for applying to join Mars Society India. We&rsquo;ll be in touch by
          email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-bone-dim mb-2">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-bone-dim mb-2">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm text-bone-dim mb-2">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm text-bone-dim mb-2">
            City &amp; state
          </label>
          <input id="city" name="city" type="text" required className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="applicantStatus" className="block text-sm text-bone-dim mb-2">
            You are a
          </label>
          <select
            id="applicantStatus"
            name="applicantStatus"
            required
            defaultValue=""
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select one
            </option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="institution" className="block text-sm text-bone-dim mb-2">
            Institution / organisation
          </label>
          <input id="institution" name="institution" type="text" className={inputClasses} />
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm text-bone-dim mb-2">
          Areas of interest
        </legend>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((name) => {
            const active = selectedInterests.includes(name);
            return (
              <button
                type="button"
                key={name}
                onClick={() => toggleInterest(name)}
                aria-pressed={active}
                className={`px-4 py-2 text-sm border transition-colors ${
                  active
                    ? "border-rust-bright bg-rust-bright/10 text-bone"
                    : "border-white/20 text-bone-dim hover:border-white/40"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm text-bone-dim mb-2">
          Why do you want to join?
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
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
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}
