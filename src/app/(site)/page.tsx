import Link from "next/link";
import ImageWithSkeleton from "./components/ImageWithSkeleton";
import CodeCard from "./components/CodeCard";
import ProjectsSection, { type Project } from "./components/ProjectsSection";
import GoogleReviews from "./components/GoogleReviews";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { basePath } from "./base-path";

const projects: Project[] = [
  {
    name: "One App Sports",
    href: "https://www.oneappsports.com/",
    img: `${basePath}/OneAppSports.png`,
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
    name: "Brandon Chan",
    href: "https://brandon-chan.vercel.app/",
    img: `${basePath}/BrandonChan.png`,
    alt: "Brandon Chan",
    tagline: "Fashion designer, concept design options",
    description: (
      <>
        Three concept homepage designs (Paper, Noir, and Magazine) presented for Brandon Chan, a fashion designer based in Manila, Philippines, each exploring a different visual direction for the client to choose from. Visit{" "}
        <a href="https://brandon-chan.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          brandon-chan.vercel.app
        </a>
        . <span className="italic text-sky-300/80">Currently being pitched to the client for them to pick a direction.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "The Drevan Clinic",
    href: "https://drevan-clinic.vercel.app/",
    img: `${basePath}/DrevanClinic.png`,
    alt: "The Drevan Clinic",
    tagline: "Aesthetic clinic website",
    description: (
      <>
        The Drevan Clinic is an aesthetic and anti-aging treatment clinic with 3 branches, led by an APTOS-certified, internationally trained doctor. The site covers services, patient results, and consultation booking. Visit{" "}
        <a href="https://drevan-clinic.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          drevan-clinic.vercel.app
        </a>
        . <span className="italic text-amber-300/80">Site is complete, just waiting on the client&apos;s confirmation to deploy.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "Vince Catacutan Films",
    href: "https://vincecatacutan.com/",
    img: `${basePath}/VinceCatacutanFilms.png`,
    alt: "Vince Catacutan Films",
    tagline: "Wedding videography portfolio",
    description: (
      <>
        Vince Catacutan Films is a wedding videography studio (&ldquo;honest moments, told beautifully&rdquo;) showcasing featured films, a full film library, and booking inquiries for couples. Visit{" "}
        <a href="https://vincecatacutan.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          vincecatacutan.com
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "Kapwa Counseling",
    href: "https://kapwacounselingbc.com/",
    img: `${basePath}/KapwaCounseling.png`,
    alt: "Kapwa Counseling",
    tagline: "Counselling practice website",
    description: (
      <>
        Kapwa Counseling is a trauma-informed, culturally responsive counselling practice based in Prince George, BC, serving adults, couples, youth, and children, grounded in the Filipino value of kapwa (shared self). The site covers services, the team, specialties, fees, and online booking, with direct billing and multilingual support (English, Tagalog, Portuguese). Visit{" "}
        <a href="https://kapwacounselingbc.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          kapwacounselingbc.com
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "Daryl Ong",
    href: "https://darylong.com/",
    img: `${basePath}/DarylOng.png`,
    alt: "Daryl Ong",
    tagline: "Filipino R&B singer-songwriter artist website",
    description: (
      <>
        Daryl Ong, known as &ldquo;The RnB Crooner,&rdquo; is a Filipino R&amp;B singer-songwriter known for his hits, available for concerts, corporate events, weddings, and private parties. The site covers his music, live performances, and booking inquiries. Visit{" "}
        <a href="https://darylong.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          darylong.com
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "Amco Global Inc.",
    href: "https://amcoglobalinc.com/",
    img: `${basePath}/AmcoGlobal.png`,
    alt: "Amco Global Inc.",
    tagline: "Industrial lifting equipment company website",
    description: (
      <>
        Amco Global Inc. designs, installs, and maintains heavy-duty cranes and elevators for industrial applications, backed by over 20 years of experience and 850+ installations across 30+ industries. Visit{" "}
        <a href="https://amcoglobalinc.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          amcoglobalinc.com
        </a>
        .
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
  },
  {
    name: "PPL (Professional People's Lab)",
    href: "https://www.ppl.com.ph/",
    img: `${basePath}/PplCompany.png`,
    alt: "PPL (Professional People's Lab)",
    tagline: "Talent management agency website",
    description: (
      <>
        PPL (Professional People&apos;s Lab) is a Manila-based talent management and development agency representing actors, hosts, and performers, with sections for their artist roster, development programs, activations, and brand partners. Visit{" "}
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
    name: "Lyra Micolob",
    href: "http://lyramicolob.space",
    img: `${basePath}/Lyra.png`,
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
    img: `${basePath}/DiyEasyfit.png`,
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
    img: `${basePath}/Projectler.png`,
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
    img: `${basePath}/Shiftbase.png`,
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
    img: `${basePath}/Treatanyone.png`,
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
    img: `${basePath}/Sunlife.png`,
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
    img: `${basePath}/Nissan.png`,
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
    img: `${basePath}/Arcadier.png`,
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

const SKILLS = [
  "Fast, modern websites",
  "Reliable code that just works",
  "Running a product from start to finish",
  "Connecting different systems together",
  "Fixing bugs and keeping things running",
];

const WHAT_I_DO = [
  {
    n: "01",
    title: "Build From Scratch",
    body: "Have an idea but nothing built yet? I'll take it from a blank page to a fully working website or app, ready to launch, hosting, domain, database, and registration systems included. One App Sports is proof: built from scratch and still running today.",
  },
  {
    n: "02",
    title: "Booking & Reservation Systems",
    body: "Need customers to book courts, slots, or appointments online? I've built this before, One App Sports handles real-time court bookings for pickleball venues, and I can build the same kind of system for your business.",
  },
  {
    n: "03",
    title: "HR & Admin Systems",
    body: "Need a system to manage staff, schedules, or records? I've worked on this before: Shiftbase for employee scheduling and Treatanyone for patient and practice management, and I can build the same kind of internal tool for your team.",
  },
  {
    n: "04",
    title: "Frontend Development",
    body: "Want your customers to actually enjoy using your product? I'll build the part they see and interact with, so it looks great and runs smoothly on any device, big project or small.",
  },
  {
    n: "05",
    title: "Debug & Maintain",
    body: "Already have a site or app that's broken, slow, or hard to maintain? I'll dig into your existing code, even a messy one, find what's wrong, and get it running smoothly again.",
  },
  {
    n: "06",
    title: "Team Player",
    body: "Need an extra developer who fits right into your team? I'll join your planning meetings, give you honest timelines, explain things in plain language, and work however your team already does.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#0a0f1c]">
      <SiteNav active="Home" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0f1c]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[640px]">
          <div className="relative h-[340px] sm:h-[460px] lg:h-auto">
            <ImageWithSkeleton
              src={`${basePath}/pictorial-jamie.png`}
              alt="Jamie Socorro"
              fill
              priority
              wrapperClassName="h-full w-full"
              className="object-cover object-[38%_10%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1c] lg:bg-gradient-to-r lg:to-[#0a0f1c]" />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-0">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Frontend Development • React &amp; Next.js • 15+ Years
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              I turn ideas into interfaces people actually enjoy using.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
              15+ years of frontend development, from client projects to a product I designed, built, and still run myself.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                See My Work
              </a>
              <Link
                href="/contact/"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Get In Touch
              </Link>
              <a
                href="https://www.linkedin.com/in/charlessocorro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
                </svg>
              </a>
            </div>

            <p className="mt-10 text-sm text-white/40">
              Every project ships with clean code, clear communication, and no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#0a0f1c] px-6 py-16 sm:py-20">
        <CodeCard filename="skills.ts" varName="skills" items={SKILLS} />
      </section>

      {/* What I Do */}
      <section className="border-b border-white/10 bg-[#0a0f1c] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
              What I Do
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How I can help.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
              Need a simple static website? Need a court booking system? Need an HR or admin system? Need something built from the ground up?
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_I_DO.map((item) => (
              <div
                key={item.n}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 text-sm font-bold text-emerald-300">
                  {item.n}
                </div>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection projects={projects} />

      <GoogleReviews />

      <SiteFooter />
    </div>
  );
}
