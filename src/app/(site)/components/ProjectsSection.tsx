"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";

export type Project = {
  name: string;
  href: string;
  img: string;
  alt: string;
  tagline: string;
  description: ReactNode;
  position: string;
  year?: string;
  technologies: string;
  hidden?: boolean;
  status?: "samples" | "in-progress" | "own-app" | "cancelled";
  /** Overrides the default badge text for this project's status (same color/tab grouping, different label). */
  badge?: string;
};

const TABS: { key: "all" | "samples" | "in-progress"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "samples", label: "Samples" },
  { key: "in-progress", label: "In Progress" },
];

const STATUS_BADGE: Record<string, string> = {
  samples: "Sample",
  "in-progress": "Waiting for Deployment",
  "own-app": "Own App",
  cancelled: "Cancelled",
};

const STATUS_STYLE: Record<string, string> = {
  samples: "border-sky-400/40 bg-sky-400/15 text-sky-300",
  "in-progress": "border-amber-400/40 bg-amber-400/15 text-amber-300",
  "own-app": "shimmer-badge border-[#e6c478]/30 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.7)] shadow-[0_0_10px_rgba(180,83,9,0.35)]",
  cancelled: "border-red-500/30 bg-red-950/40 text-red-400/90",
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [tab, setTab] = useState<"all" | "samples" | "in-progress">("all");

  const visible = projects.filter((p) => {
    if (p.hidden) return false;
    if (tab === "all") return true;
    return p.status === tab;
  });

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selected Work
          </h2>
        </div>

        <div className="mb-10 flex justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                tab === t.key
                  ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-black/30"
              >
                <ImageWithSkeleton
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {p.status && (
                  <span
                    className={`absolute left-3 top-3 z-10 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${STATUS_STYLE[p.status]}`}
                  >
                    {p.badge ?? STATUS_BADGE[p.status]}
                  </span>
                )}
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white">{p.name}</h3>
                  <svg
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-white/30 transition-colors group-hover:text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
                <div className="mt-0.5 text-sm font-medium text-emerald-300/90">{p.tagline}</div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/50">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[11px] text-white/40">
                  <span className="font-semibold text-white/70">{p.position}</span>
                  {p.year && (
                    <>
                      <span>·</span>
                      <span>{p.year}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
