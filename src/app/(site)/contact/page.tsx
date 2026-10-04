import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact — Jamie Socorro",
  description: "Get in touch with Jamie Socorro, Senior Frontend Developer.",
};

export default function Contact() {
  return (
    <div className="bg-[#0a0f1c]">
      <SiteNav active="Contact" />

      <section className="px-6 pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Get In Touch
          </span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Let&apos;s build something.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Have a project in mind, or just want to talk frontend? Send a message and I&apos;ll get back to you.
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mx-auto mt-12 flex max-w-xl flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-400/50"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-400/50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-emerald-400/50"
              placeholder="Tell me a bit about your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
