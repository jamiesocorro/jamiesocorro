"use client";

import { useForm, ValidationError } from "@formspree/react";

const inputClasses =
  "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-400/50";
const labelClasses = "text-xs font-semibold uppercase tracking-wider text-white/50";
const errorClasses = "text-xs text-red-400";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzedpykr");

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-10 text-center">
        <h2 className="text-xl font-bold text-white">Message sent.</h2>
        <p className="mt-2 text-sm text-white/60">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 flex max-w-xl flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@example.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`resize-none ${inputClasses}`}
          placeholder="Tell me a bit about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className={errorClasses} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>

      <ValidationError errors={state.errors} className={errorClasses} />
    </form>
  );
}
