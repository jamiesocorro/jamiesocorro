import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Jamie Socorro",
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

        <ContactForm />
      </section>

      <SiteFooter />
    </div>
  );
}
