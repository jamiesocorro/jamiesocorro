import Image from "next/image";
import ImageWithSkeleton from "./components/ImageWithSkeleton";
import ProjectsSection, { type Project } from "./components/ProjectsSection";

const projects: Project[] = [
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
    status: "own-app",
  },
  {
    name: "Brandon Chan",
    href: "https://brandon-chan.vercel.app/",
    img: "./BrandonChan.png",
    alt: "Brandon Chan",
    tagline: "Fashion designer — concept design options",
    description: (
      <>
        A set of three concept homepage designs — Paper, Noir, and Magazine — presented for Brandon Chan, a fashion designer based in Manila, Philippines, each exploring a different visual direction for the client to choose from. Visit{" "}
        <a href="https://brandon-chan.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          brandon-chan.vercel.app
        </a>
        . <span className="italic text-sky-300/80">Currently being pitched to the client for them to pick a direction.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
    status: "samples",
  },
  {
    name: "The Drevan Clinic",
    href: "https://drevan-clinic.vercel.app/",
    img: "./DrevanClinic.png",
    alt: "The Drevan Clinic",
    tagline: "Aesthetic clinic website",
    description: (
      <>
        The Drevan Clinic is an aesthetic and anti-aging treatment clinic with 3 branches, led by an APTOS-certified, internationally trained doctor. The site covers services, patient results, and consultation booking. Visit{" "}
        <a href="https://drevan-clinic.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          drevan-clinic.vercel.app
        </a>
        . <span className="italic text-amber-300/80">Site is complete — just waiting on the client&apos;s confirmation to deploy.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
    status: "in-progress",
  },
  {
    name: "Vince Catacutan Films",
    href: "https://vcfilms.vercel.app/",
    img: "./VinceCatacutanFilms.png",
    alt: "Vince Catacutan Films",
    tagline: "Wedding videography portfolio",
    description: (
      <>
        Vince Catacutan Films is a wedding videography studio — &ldquo;honest moments, told beautifully&rdquo; — showcasing featured films, a full film library, and booking inquiries for couples. Visit{" "}
        <a href="https://vcfilms.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          vcfilms.vercel.app
        </a>
        . <span className="italic text-amber-300/80">Site is complete — just waiting on the client&apos;s confirmation to deploy.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
    status: "in-progress",
  },
  {
    name: "Kapwa Counseling",
    href: "https://kapwacounselingbc.com/",
    img: "./KapwaCounseling.png",
    alt: "Kapwa Counseling",
    tagline: "Counselling practice website",
    description: (
      <>
        Kapwa Counseling is a trauma-informed, culturally responsive counselling practice based in Prince George, BC, serving adults, couples, youth, and children — grounded in the Filipino value of kapwa (shared self). The site covers services, the team, specialties, fees, and online booking, with direct billing and multilingual support (English, Tagalog, Portuguese). Visit{" "}
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
        . <span className="italic text-amber-300/80">Downpayment paid — still waiting on the client to provide the remaining content and materials to finish the build.</span>
      </>
    ),
    position: "Senior Frontend Developer",
    year: "2026",
    technologies: "NextJS, ReactJS, TailwindCSS",
    status: "in-progress",
    badge: "Waiting for Materials",
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
    status: "cancelled",
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
            <ImageWithSkeleton
              src="./Avatar.gif"
              alt="Jamie Socorro"
              width={168}
              height={168}
              priority
              wrapperClassName="rounded-full"
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

      <ProjectsSection projects={projects} />

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-white/40">
        Copyright {new Date().getFullYear()} Jamie Socorro
      </footer>
    </div>
  );
}
