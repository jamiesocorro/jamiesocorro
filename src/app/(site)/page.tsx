import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Project = {
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
};

const projects: Project[] = [
  {
    name: "Amco Global Inc.",
    href: "https://amco-global-inc.vercel.app/",
    img: "./AmcoGlobal.png",
    alt: "Amco Global Inc.",
    tagline: "Industrial lifting equipment company website",
    description: (
      <>
        Amco Global Inc. designs, installs, and maintains heavy-duty cranes and elevators for industrial applications, backed by over 20 years of experience and 850+ installations across 30+ industries. Visit{" "}
        <a href="https://amco-global-inc.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          amco-global-inc.vercel.app
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "PPL — Professional People's Lab",
    href: "https://www.ppl.com.ph/",
    img: "./PplCompany.png",
    alt: "PPL — Professional People's Lab",
    tagline: "Talent management agency website",
    description: (
      <>
        PPL — Professional People&apos;s Lab is a Manila-based talent management and development agency representing actors, hosts, and performers, with sections for their artist roster, development programs, activations, and brand partners. Visit{" "}
        <a href="https://www.ppl.com.ph/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          ppl.com.ph
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "One App Sports",
    href: "https://www.oneappsports.com/",
    img: "./OneAppSports.png",
    alt: "One App Sports",
    tagline: "Pickleball ranking, managing & booking app",
    description: (
      <>
        One App Sports is a pickleball platform that lets competitive players log matches, climb global leaderboards, and connect with players in their area. Venue owners can manage courts and bookings while tracking player statistics through an XP-based ranking system. Visit{" "}
        <a href="https://www.oneappsports.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          oneappsports.com
        </a>
        .
      </>
    ),
    position: "CEO and Senior Frontend Developer",
    year: "2026",
    technologies: "ReactJS, React Native, Rails",
  },
  {
    name: "Lyra Micolob",
    href: "http://lyramicolob.space",
    img: "./Lyra.png",
    alt: "Lyra Micolob",
    tagline: "Artist profile website",
    description: (
      <>
        Lyra Micolob is an artist profile website showcasing the work and portfolio of the artist Lyra Micolob. Visit{" "}
        <a href="http://lyramicolob.space" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          lyramicolob.space
        </a>
        .
      </>
    ),
    position: "Frontend Developer",
    technologies: "WordPress, Elementor",
    hidden: true,
  },
  {
    name: "DIY EasyFit Shutters",
    href: "https://diyeasyfitshutters.com.au/",
    img: "./DiyEasyfit.png",
    alt: "DIY EasyFit Shutters",
    tagline: "Plantation shutters e-commerce website",
    description: (
      <>
        DIY EasyFit Shutters is an Australian company selling affordable, easy-to-install plantation shutters for windows, offering PVC, poly, and aluminium-reinforced options with a 25-year warranty. Visit{" "}
        <a href="https://diyeasyfitshutters.com.au/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          diyeasyfitshutters.com.au
        </a>
        .
      </>
    ),
    position: "Frontend Developer",
    technologies: "WordPress, PHP, Elementor",
  },
  {
    name: "Projectler",
    href: "https://app.projectler.com/login",
    img: "./Projectler.png",
    alt: "Projectler",
    tagline: "Project management software",
    description: (
      <>
        Projectler is a project management software that allows you to create, manage, and track your projects. I built the frontend architecture and implemented the core features of the project.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2024",
    technologies: "ReactJS, NextJS, Material UI, TypeScript, HTML",
  },
  {
    name: "Shiftbase",
    href: "https://app.shiftbase.com",
    img: "./Shiftbase.png",
    alt: "Shiftbase",
    tagline: "Employee management software",
    description: (
      <>
        Shiftbase provides an innovative scheduling solution for businesses employing part-time and flexible staff. I focused on the frontend development and implemented the core features of the project.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2022-2024",
    technologies: "Angular, TypeScript, TailwindCSS, Storybook, HTML",
  },
  {
    name: "Treatanyone",
    href: "https://practice.treatanyone.com/auth/login",
    img: "./Treatanyone.png",
    alt: "Treatanyone",
    tagline: "Mental health management software",
    description: (
      <>
        Treatanyone is a mental health web platform that allows you to manage your patients and appointments. I handled different modules of the frontend development and implemented the core features of the project.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2020-2022",
    technologies: "Angular, TypeScript, TailwindCSS, Ngprime, HTML, CSS",
  },
  {
    name: "Sunrise",
    href: "https://client.sunlife.com.ph/SunRisePortal/#/login",
    img: "./Sunlife.png",
    alt: "Sunrise",
    tagline: "Investment management software",
    description: (
      <>
        Sunrise is a Investment and Insurance for employees application. I handled the architecture of the frontend development and implemented the core features of the project.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2019-2020",
    technologies: "Angular, TypeScript, Bootstrap, HTML, CSS",
  },
  {
    name: "Nissan",
    href: "https://keepitfresh.nissanusa.com/",
    img: "./Nissan.png",
    alt: "Nissan",
    tagline: "Advertisment website for nissan car",
    description: (
      <>
        Starshot Software is outsourcing company that provides software development services. I handled frontend development for different projects for different clients of the company.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2017-2019",
    technologies: "Wordpress, ReactJS, Angular, TypeScript, Bootstrap, HTML, CSS",
  },
  {
    name: "Arcadier",
    href: "https://www.arcadier.com/",
    img: "./Arcadier.png",
    alt: "Arcadier",
    tagline: "Online Marketplace",
    description: (
      <>
        Arcadier is a online marketplace for buying and selling products. I created and implemented features of the project, also bug fixes.
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2016-2017",
    technologies: "Angular, TypeScript, Bootstrap, HTML, CSS",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0a0f1c]">
      {/* Floating pill nav */}
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 py-2 pl-2 pr-4 shadow-lg backdrop-blur-md">
          <Image src="./dev-icon.png" alt="Jamie Socorro" width={30} height={30} className="rounded-full" priority />
          <span className="mr-2 text-sm font-bold tracking-tight text-white">
            Jamie<span className="text-emerald-400">.</span>
          </span>
          <div className="h-4 w-px bg-white/15" />
          <a href="#projects" className="ml-2 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-white">
            Projects
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-[#0a0f1c] pb-40 pt-32 sm:pt-40"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
      >
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-white/30 blur-2xl" />
            <Image
              src="./Avatar.gif"
              alt="Jamie Socorro"
              width={168}
              height={168}
              priority
              className="rounded-full shadow-2xl ring-4 ring-white/40"
            />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Manila, Philippines
            </div>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Jamie Socorro
            </h1>
            <p className="mt-3 text-xl font-semibold text-emerald-100 sm:text-2xl">
              Senior Frontend Developer
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              15+ years of remote work experience building dynamic, responsive, and user-friendly web applications with ReactJS, NextJS, Angular, CSS, and HTML — skilled in productivity, digital collaboration, and adapting to evolving industry trends.
            </p>
          </div>

          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Selected Work
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06] ${
                  p.hidden ? "hidden" : ""
                }`}
              >
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-black/30"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {p.description}
                  </p>

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

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-white/40">
        Copyright {new Date().getFullYear()} Jamie Socorro
      </footer>
    </div>
  );
}
