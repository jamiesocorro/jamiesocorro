"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { icon: "★", title: "Talent Management", desc: "Career guidance, representation, and long-term growth." },
  { icon: "📣", title: "Brand Partnerships", desc: "Connecting talent with the right brands and campaigns." },
  { icon: "🎬", title: "Film & TV Production", desc: "From concept to screen, we help bring stories to life." },
  { icon: "🎵", title: "Music Management", desc: "Developing artists and creating lasting music careers." },
  { icon: "📷", title: "Digital & Social Strategy", desc: "Building influence and engagement in the digital world." },
  { icon: "🌐", title: "Global Network", desc: "A worldwide network opening doors to endless opportunities." },
];

const TALENT = [
  { name: "Dingdong Dantes", role: "Actor, Director & Host", cat: "prime", tag: "Prime Artist", photo: "../../dindongdantes.jpg" },
  { name: "Ivana Alawi", role: "Actress, Model & YouTuber", cat: "prime", tag: "Prime Artist", photo: "../../ivanaalawi.jpg" },
  { name: "Gabby Eigenmann", role: "Actor, Singer & Host", cat: "prime", tag: "Prime Artist", photo: "../../gabbyeigenmann.jpg" },
  { name: "Max Collins", role: "Actress & Model", cat: "prime", tag: "Prime Artist", photo: "../../maxcollins.jpg" },
  { name: "Rochelle Pangilinan", role: "Actress, Dancer & Singer", cat: "prime", tag: "Prime Artist", photo: "../../rochellepangilinan.jpg" },
  { name: "Carlo Gonzalez", role: "Prime Artist", cat: "prime", tag: "Prime Artist", photo: "../../carlogonzales.jpg" },
  { name: "Arthur Solinap", role: "Actor & Dancer", cat: "prime", tag: "Prime Artist", photo: "../../arthursolinap.jpg" },
  { name: "Paul Salas", role: "Prime Artist", cat: "prime", tag: "Prime Artist", photo: "../../paulsalas.jpg" },
  { name: "Wendell Ramos", role: "Actor", cat: "prime", tag: "Prime Artist", photo: "../../wendellramos.jpg" },
  { name: "Nikki Van", role: "Model & TV Personality", cat: "ppl", tag: "PPL Artist", photo: "../../nikkivan.jpg" },
  { name: "Jennie Gabriel", role: "Singer, Comedienne & Impersonator", cat: "ppl performer", tag: "PPL Artist", photo: "../../jenniegabriel.jpg" },
  { name: "Kobe Medalla", role: "PPL Artist", cat: "ppl", tag: "PPL Artist", photo: "../../kobemedalla.jpg" },
  { name: "Elio Wrick", role: "International Hockey Player", cat: "ppl", tag: "Athlete", photo: "../../eliowrick.jpg" },
  { name: "Lyra Micolob", role: "Alto Soul Singer", cat: "ppl performer", tag: "PPL Artist", photo: "../../lyramicolob.jpg" },
  { name: "Raven Molina", role: "PPL Artist", cat: "ppl", tag: "PPL Artist", photo: "../../ravenmolina.jpg" },
  { name: "Mitzi Josh", role: "PPL Artist", cat: "ppl performer", tag: "PPL Artist", photo: "../../mitzijosh.jpg" },
  { name: "Kiel & Vito Gueco", role: "PPL Artists", cat: "ppl", tag: "PPL Artists", photo: "../../kielvitogueco.jpg" },
  { name: "Cody Jardiniano", role: "PPL Artist", cat: "ppl", tag: "PPL Artist", photo: "../../codyjardiniano.jpg" },
  { name: "1621", role: "P-pop Boy Group", cat: "performer", tag: "Group", photo: "../../1621.JPG" },
  { name: "El Manu & Jessy Kang", role: "Performers", cat: "performer", tag: "Performers", photo: "../../elmanu.jpg" },
  { name: "BRB", role: "Before Rain Begin", cat: "performer", tag: "Band", photo: "../../brb.jpg" },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "prime", label: "Prime Artists" },
  { key: "ppl", label: "PPL Artists" },
  { key: "performer", label: "Performers" },
];

const DEPARTMENTS = [
  {
    name: "Executive Leadership",
    people: [
      { name: "Perry P. Lansigan", title: "President & CEO" },
      { name: "Apples Arizabal-Eigenmann", title: "Senior Business Unit Head" },
      { name: "Hazel Abonita Rivera", title: "Creative Director" },
      { name: "Paolo Luciano", title: "Executive Liaison" },
    ],
  },
  {
    name: "Business Units",
    people: [
      { name: "Ferdie Fiegalan", title: "Business Unit Head" },
      { name: "Luj Velayo", title: "Business Unit Head" },
    ],
  },
  {
    name: "Artist Relations & Handlers",
    people: [
      { name: "Mike Anota", title: "Road Manager" },
      { name: "Siam Grant", title: "Handler / Road Manager" },
      { name: "Katt Leganson", title: "Handler / Road Manager" },
      { name: "Joshua Carino", title: "Handler" },
      { name: "Carlo Borral", title: "Handler" },
    ],
  },
  {
    name: "Digital & Social",
    people: [
      { name: "Joseph \"Otep\" Marcellana", title: "Digital Manager" },
      { name: "Markky Villacarlos", title: "Social Media Specialist" },
    ],
  },
  {
    name: "Finance & Legal",
    people: [
      { name: "Arvie Yumul", title: "Finance Manager" },
      { name: "Atty. Alaine Palomo", title: "Company Lawyer" },
      { name: "Atty. Melodie Esquejo", title: "Company Lawyer / CPA" },
      { name: "Benjie Mendoza", title: "Accountant" },
    ],
  },
  {
    name: "Publicity",
    people: [
      { name: "Rose Garcia", title: "Publicist" },
      { name: "Random Republika / Kate Adajar", title: "Digital Publicist" },
    ],
  },
];

const BRANDS_A = [
  { file: "medicol-advance", alt: "Medicol Advance" },
  { file: "neurogen-e", alt: "Neurogen-E" },
  { file: "555-sardines", alt: "555 Sardines" },
  { file: "sbg-salveo-barley-grass", alt: "SBG Salveo Barley Grass" },
  { file: "bounty-fresh", alt: "Bounty Fresh" },
  { file: "gac-motor", alt: "GAC Motor" },
  { file: "mcdonalds", alt: "McDonald's" },
  { file: "asialink-finance", alt: "Asialink Finance" },
  { file: "kopiko", alt: "Kopiko" },
  { file: "san-marino", alt: "San Marino" },
  { file: "safeguard", alt: "Safeguard" },
  { file: "haier", alt: "Haier" },
  { file: "belo", alt: "Belo" },
  { file: "five-star-chicken", alt: "Five Star Chicken" },
  { file: "netflix", alt: "Netflix" },
  { file: "jollibee", alt: "Jollibee" },
  { file: "coca-cola", alt: "Coca-Cola" },
  { file: "bench", alt: "Bench" },
  { file: "jolly-eats", alt: "Jolly Eats" },
  { file: "nwow", alt: "NWOW" },
];

const BRANDS_B = [
  { file: "caltex", alt: "Caltex" },
  { file: "bet88", alt: "BET88" },
  { file: "shopee", alt: "Shopee" },
  { file: "jc-organic-barley", alt: "JC Organic Barley" },
  { file: "bingo-plus", alt: "Bingo Plus" },
  { file: "siomai-king", alt: "Siomai King" },
  { file: "bioderm", alt: "Bioderm" },
  { file: "smart", alt: "Smart" },
  { file: "beautywise", alt: "Beautywise" },
  { file: "met-tathione", alt: "MET Tathione" },
  { file: "gcash", alt: "GCash" },
  { file: "cignal", alt: "Cignal" },
  { file: "rsg-ready-set-glow", alt: "RSG Ready Set Glow" },
  { file: "mesa", alt: "Mesa" },
  { file: "infinix", alt: "Infinix" },
  { file: "goldilocks", alt: "Goldilocks" },
  { file: "wilkins", alt: "Wilkins" },
  { file: "omron", alt: "Omron" },
  { file: "uno-factory-outlet", alt: "UNO Factory Outlet" },
];

const STATS = [
  { icon: "people", value: "150+", label: "Talents Represented" },
  { icon: "star", value: "500+", label: "Successful Projects" },
  { icon: "trophy", value: "50+", label: "Awards & Nominations" },
  { icon: "globe", value: "20+", label: "Countries & Partners" },
];

function StatIcon({ name }: { name: string }) {
  if (name === "people")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M15 14.2c2.7.4 4.5 2.3 4.5 5.3" />
      </svg>
    );
  if (name === "star")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.9l1-6.1L3.2 9.5l6.1-.9L12 3z" />
      </svg>
    );
  if (name === "trophy")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
        <path d="M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3" />
        <path d="M12 14v4M9 21h6M9.5 18h5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3z" />
    </svg>
  );
}

const NAV_ITEMS = [
  { href: "#top", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#talent", label: "Talent" },
  { href: "#brands", label: "Brands" },
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#press", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Page() {
  const headerRef = useRef<HTMLElement>(null);
  const [tab, setTab] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleTalent = tab === "all" ? TALENT : TALENT.filter((t) => t.cat.split(" ").includes(tab));

  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="siteHeader" ref={headerRef}>
        <nav className="wrap">
          <a href="#top" className="logo">
            <span className="mark">PPL</span>
            <span className="tagline">
              People.
              <br />
              Talent.
              <br />
              Impact.
            </span>
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map((n) => (
              <a href={n.href} key={n.href} className={n.active ? "active" : undefined}>{n.label}</a>
            ))}
          </div>
          <a href="#contact" className="pill pill-outline desktop-only">
            Contact Us
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
          </a>
          <button
            className={`menu-btn${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </nav>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((n) => (
            <a href={n.href} key={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>
          ))}
        </div>
      </header>

      <div id="top" />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="kicker">Talent. Visibility. Legacy.</div>
            <h1>
              We Represent
              <em>Extraordinary.</em>
            </h1>
            <div className="hero-rule">
              <span className="line" />
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
              <span className="line" />
            </div>
            <p className="desc">
              PPL is a full-service entertainment agency representing exceptional talent across film, television, music, digital, and beyond.
            </p>
            <a href="#about" className="pill pill-outline">
              Discover PPL
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
            </a>
          </div>
          <div className="hero-photo">
            <img src="../../ppl-luxury.png" alt="PPL Talent" className="hero-photo-img" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="services-band" id="services">
          {SERVICES.map((s) => (
            <div className="service-item" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="wrap about-grid">
          <div className="about-copy">
            <span className="sec-eyebrow">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
              About PPL
            </span>
            <h2>
              More Than an Agency.
              <em>A Partner in Your Journey.</em>
            </h2>
            <p>We believe in talent with purpose. Our mission is to inspire, empower, and create impact that lasts a lifetime.</p>
            <p>Perry P. Lansigan started his career as a trainee at GMA Network more than thirty years ago — work so commendable the network kept him on. Today PPL represents a curated roster of actors, hosts, musicians, dancers, and public figures, backed by a team of managers, handlers, creatives, finance, and legal professionals who run the business behind the talent.</p>
            <blockquote className="quote">
              &ldquo;Ako ang utak, ikaw ang puso.&rdquo;
              <cite>Perry P. Lansigan, President &amp; CEO</cite>
            </blockquote>
            <a href="#contact" className="pill pill-outline">
              Learn More About Us
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
            </a>
          </div>
          <div className="set-photo has-photo">
            <span className="set-photo-cap">Perry P. Lansigan — President &amp; CEO</span>
          </div>
          <div className="stats-list">
            {STATS.map((s) => (
              <div className="stat-row" key={s.label}>
                <StatIcon name={s.icon} />
                <div>
                  <h3>{s.value}</h3>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talent">
        <div className="wrap">
          <div className="talent-head">
            <span className="sec-eyebrow">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
              Our Talent
            </span>
            <div className="talent-actions">
              <a href="#">
                View All Talents
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
              </a>
            </div>
          </div>
          <div className="tabs">
            {TABS.map((t) => (
              <button key={t.key} className={`tab${tab === t.key ? " active" : ""}`} onClick={() => setTab(t.key)}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="talent-row">
            {visibleTalent.map((t) => (
              <div className="talent-card" key={t.name}>
                <div className="talent-photo" style={{ backgroundImage: `url('${t.photo}')` }} />
                <span className="talent-tag">{t.tag}</span>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <span className="sec-eyebrow">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
            Our Team
          </span>
          <div className="dept-grid">
            {DEPARTMENTS.map((d) => (
              <div className="dept-card" key={d.name}>
                <h4>{d.name}</h4>
                {d.people.map((p) => (
                  <div className="dept-person" key={p.name}>
                    <span className="dp-name">{p.name}</span>
                    <span className="dp-title">{p.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="featured" id="press">
          <span className="sec-eyebrow">Featured In</span>
          <div className="press-row">
            <span className="press-variety">Variety</span>
            <span className="press-forbes">Forbes</span>
            <span className="press-billboard">billboard</span>
            <span className="press-vogue">Vogue</span>
            <span className="press-gma">GMA</span>
            <span className="press-mega">MEGA</span>
            <span className="press-rollingstone">Rolling Stone</span>
          </div>
        </div>
      </div>

      <section id="brands">
        <div className="wrap">
          <span className="sec-eyebrow">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z" /></svg>
            Affiliated Brands
          </span>
        </div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...BRANDS_A, ...BRANDS_A].map((b, i) => (
              <span className="brand-logo" key={`${b.file}-${i}`}>
                <img src={`../../brands/${b.file}.png`} alt={b.alt} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-track">
          <div className="marquee-inner reverse">
            {[...BRANDS_B, ...BRANDS_B].map((b, i) => (
              <span className="brand-logo" key={`${b.file}-${i}`}>
                <img src={`../../brands/${b.file}.png`} alt={b.alt} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="mark">PPL</span>
              <span className="tagline">
                People.
                <br />
                Talent.
                <br />
                Impact.
              </span>
            </a>
            <p>A leading talent and entertainment agency built on passion, integrity, and excellence.</p>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#talent">Talent</a>
            <a href="#services">Services</a>
            <a href="#press">News</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="#services">Talent Management</a>
            <a href="#services">Brand Partnerships</a>
            <a href="#services">Film & TV Production</a>
            <a href="#services">Music Management</a>
            <a href="#services">Global Network</a>
          </div>
          <div className="footer-col">
            <h5>Follow Us</h5>
            <div className="social-row">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg></a>
              <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 3v10.5a3.5 3.5 0 11-3-3.46" /><path d="M14 3c0 2.5 2 4.5 4.5 4.5" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 10l4 2-4 2v-4z" /></svg></a>
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 21v-7h2.5l.5-3H14V9c0-1 .3-1.7 1.7-1.7H17V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.5v7H14z" /></svg></a>
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4l16 16M20 4L4 20" /></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Contact Us</h5>
            <a href="mailto:hello@pplagency.com" className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              hello@pplagency.com
            </a>
            <span className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
              +63 912 345 6789
            </span>
            <span className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-6.3 7-11.5A7 7 0 005 9.5C5 14.7 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.4" /></svg>
              Manila, Philippines
            </span>
          </div>
        </div>
        <div className="footer-bottom">© 2025 PPL Professional People&apos;s Lab. All Rights Reserved. ✦</div>
      </footer>
    </>
  );
}
