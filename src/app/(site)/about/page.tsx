import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { basePath } from "../base-path";

export const metadata: Metadata = {
  title: "About — Jamie Socorro",
  description: "Senior Frontend Developer based in Manila, Philippines, with 15+ years of remote work experience.",
};

const SKILLS = [
  "ReactJS",
  "NextJS",
  "Angular",
  "TypeScript",
  "TailwindCSS",
  "React Native",
  "HTML & CSS",
  "Material UI",
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "14", label: "Projects Shipped" },
  { value: "1", label: "App of My Own" },
];

export default function About() {
  return (
    <div className="bg-[#0a0f1c]">
      <SiteNav active="About" />

      <section className="px-6 pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            About Me
          </span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            A developer who ships what he designs.
          </h1>

          <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start">
            <ImageWithSkeleton
              src={`${basePath}/Avatar.gif`}
              alt="Jamie Socorro"
              width={160}
              height={160}
              priority
              wrapperClassName="shrink-0 rounded-full"
              className="rounded-full shadow-2xl ring-4 ring-white/10"
            />

            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-white/70">
                A Web Developer based in Manila, Philippines, with 15+ years of remote work experience. Skilled in productivity, digital collaboration, and adapting to evolving industry trends.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Experienced front-end developer proficient in ReactJS, NextJS, Angular, CSS, and HTML, with a strong focus on building dynamic, responsive, and user-friendly web applications — from client sites to a product I own and run myself.
              </p>
              <p className="mt-6 text-lg font-semibold text-emerald-100">
                No confusing process. No unnecessary complexity. Just working software.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/40">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Skills &amp; Tools
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              What I work with.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
