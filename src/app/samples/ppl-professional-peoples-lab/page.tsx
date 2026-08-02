"use client";

import { useEffect, useRef } from "react";

const BODY_HTML = `<header id="siteHeader">
  <nav class="wrap">
    <a href="#top" class="logo-mark">
      <div class="p">P</div>
      <div class="logo-text"><span class="ppl">PPL</span><span class="sub">Professional People's Lab</span></div>
    </a>
    <div class="nav-links">
      <a href="#about">Company</a>
      <a href="#roster">Roster</a>
      <a href="#team">Team</a>
      <a href="#brands">Brands</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="#contact" class="nav-cta">Work With Us</a>
  </nav>
</header>

<div id="top"></div>

<section class="hero">
  <div class="wall" id="wall"></div>
  <div class="hero-scrim"></div>
  <div class="hero-inner">
    <span class="eyebrow">Talent Management &amp; Talent Development — 17th Year</span>
    <h1>Talent Starts<span class="accent"> Here.</span></h1>
    <p class="sub">PPL — Professional People's Lab — is the Talent Management and Talent Development vertical of The Doorbell Collective, evolved from the namesake company of our President &amp; CEO, Perry P. Lansigan.</p>
    <div class="hero-ctas">
      <a href="#roster" class="btn btn-red">Discover Our Roster</a>
      <a href="#contact" class="btn btn-line">Partner With Us</a>
    </div>
  </div>
  <div class="scroll-cue"><span>Scroll</span><span class="stem"></span></div>
</section>
<div class="bulbs"></div>

<section class="about" id="about">
  <div class="wrap about-grid">
    <div class="portrait has-photo">
      <div class="cap">Perry P. Lansigan — President &amp; CEO</div>
    </div>
    <div class="about-copy">
      <span class="eyebrow">Company Profile</span>
      <h2>PPL is the captain of PPL's ship.</h2>
      <p>Perry P. Lansigan started his career as a trainee at GMA Network more than thirty years ago — work so commendable the network kept him on. That origin story became the foundation for a company built on one conviction: hard work pays off.</p>
      <p>Today PPL represents a curated roster of actors, hosts, musicians, dancers, and public figures, backed by a team of managers, handlers, creatives, finance, and legal professionals who run the business behind the talent.</p>
      <blockquote>
        "Ako ang utak, ikaw ang puso." <span style="font-style:normal; font-size:14px; color:var(--muted);">— on the partnership between PPL and Creative Director Hazel Abonita Rivera</span>
        <cite>Perry P. Lansigan, President &amp; CEO</cite>
      </blockquote>
      <div class="stat-row">
        <div><h3>17</h3><span>Years as PPL</span></div>
        <div><h3>30+</h3><span>Yrs Industry Roots</span></div>
        <div><h3>20+</h3><span>Artists Represented</span></div>
        <div><h3>143M</h3><span>Combined Followers</span></div>
      </div>
    </div>
  </div>
</section>

<section class="impact">
  <div class="wrap">
    <div class="num">143 Million</div>
    <div class="label">combined followers across all platforms — Artists &amp; PPL Team</div>
  </div>
</section>

<section class="roster" id="roster">
  <div class="wrap">
    <div class="section-head">
      <div><span class="eyebrow">The Roster</span><h2>Our Artists</h2></div>
      <p>Prime Artists, PPL Artists, and Performers — actors, hosts, singers, dancers, and groups.</p>
    </div>
    <div class="tabs" id="tabs">
      <button class="tab active" data-filter="all">All</button>
      <button class="tab" data-filter="prime">Prime Artists</button>
      <button class="tab" data-filter="ppl">PPL Artists</button>
      <button class="tab" data-filter="performer">Performers</button>
    </div>
    <div class="roster-grid" id="rosterGrid"></div>
  </div>
</section>

<section class="team" id="team">
  <div class="wrap">
    <div class="section-head">
      <div><span class="eyebrow">Behind The Roster</span><h2>Our Team</h2></div>
      <p>An eclectic mix of seasoned and fresh industry practitioners running the business behind every artist.</p>
    </div>
    <div class="dept-grid">
      <div class="dept-card">
        <h4>Executive Leadership</h4>
        <div class="person"><span class="name">Perry P. Lansigan</span><span class="title">President &amp; CEO</span></div>
        <div class="person"><span class="name">Apples Arizabal-Eigenmann</span><span class="title">Senior Business Unit Head</span></div>
        <div class="person"><span class="name">Hazel Abonita Rivera</span><span class="title">Creative Director</span></div>
        <div class="person"><span class="name">Paolo Luciano</span><span class="title">Executive Liaison</span></div>
      </div>
      <div class="dept-card">
        <h4>Business Units</h4>
        <div class="person"><span class="name">Ferdie Fiegalan</span><span class="title">Business Unit Head</span></div>
        <div class="person"><span class="name">Luj Velayo</span><span class="title">Business Unit Head</span></div>
      </div>
      <div class="dept-card">
        <h4>Artist Relations &amp; Handlers</h4>
        <div class="person"><span class="name">Mike Anota</span><span class="title">Road Manager</span></div>
        <div class="person"><span class="name">Siam Grant</span><span class="title">Handler / Road Manager</span></div>
        <div class="person"><span class="name">Katt Leganson</span><span class="title">Handler / Road Manager</span></div>
        <div class="person"><span class="name">Joshua Carino</span><span class="title">Handler</span></div>
        <div class="person"><span class="name">Carlo Borral</span><span class="title">Handler</span></div>
      </div>
      <div class="dept-card">
        <h4>Digital &amp; Social</h4>
        <div class="person"><span class="name">Joseph "Otep" Marcellana</span><span class="title">Digital Manager</span></div>
        <div class="person"><span class="name">Markky Villacarlos</span><span class="title">Social Media Specialist</span></div>
      </div>
      <div class="dept-card">
        <h4>Finance &amp; Legal</h4>
        <div class="person"><span class="name">Arvie Yumul</span><span class="title">Finance Manager</span></div>
        <div class="person"><span class="name">Atty. Alaine Palomo</span><span class="title">Company Lawyer</span></div>
        <div class="person"><span class="name">Atty. Melodie Esquejo</span><span class="title">Company Lawyer / CPA</span></div>
        <div class="person"><span class="name">Benjie Mendoza</span><span class="title">Accountant</span></div>
      </div>
      <div class="dept-card">
        <h4>Publicity</h4>
        <div class="person"><span class="name">Rose Garcia</span><span class="title">Publicist</span></div>
        <div class="person"><span class="name">Random Republika / Kate Adajar</span><span class="title">Digital Publicist</span></div>
      </div>
    </div>
  </div>
</section>

<section class="capabilities">
  <div class="wrap">
    <span class="eyebrow">17 Years In The Industry</span>
    <h2 style="margin-top:12px; font-size:clamp(28px,3.6vw,42px);">Successfully Created &amp; Executed</h2>
    <div class="cap-list">
      <span class="cap-pill">Concerts</span>
      <span class="cap-pill">Movies</span>
      <span class="cap-pill">Mall Shows</span>
      <span class="cap-pill">Events</span>
      <span class="cap-pill">Awards Nights</span>
      <span class="cap-pill">Corporate Events</span>
      <span class="cap-pill">Political Campaigns</span>
      <span class="cap-pill">Product Launches</span>
    </div>
  </div>
</section>

<section class="brands" id="brands">
  <div class="wrap">
    <div class="section-head">
      <div><span class="eyebrow">Trusted By</span><h2>Affiliated Brands</h2></div>
      <p>A selection of the brand partnerships our artists and roster have worked with.</p>
    </div>
  </div>
  <div class="marquee-track">
    <div class="marquee-inner" id="marqueeInnerA">
      <span class="brand-logo"><img src="../../brands/medicol-advance.png" alt="Medicol Advance" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/neurogen-e.png" alt="Neurogen-E" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/555-sardines.png" alt="555 Sardines" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/sbg-salveo-barley-grass.png" alt="SBG Salveo Barley Grass" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/bounty-fresh.png" alt="Bounty Fresh" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/gac-motor.png" alt="GAC Motor" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/mcdonalds.png" alt="McDonald's" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/asialink-finance.png" alt="Asialink Finance" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/kopiko.png" alt="Kopiko" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/san-marino.png" alt="San Marino" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/safeguard.png" alt="Safeguard" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/haier.png" alt="Haier" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/belo.png" alt="Belo" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/five-star-chicken.png" alt="Five Star Chicken" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/netflix.png" alt="Netflix" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/jollibee.png" alt="Jollibee" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/coca-cola.png" alt="Coca-Cola" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/bench.png" alt="Bench" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/jolly-eats.png" alt="Jolly Eats" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/nwow.png" alt="NWOW" loading="lazy"></span>
    </div>
  </div>
  <div class="marquee-track">
    <div class="marquee-inner reverse" id="marqueeInnerB">
      <span class="brand-logo"><img src="../../brands/caltex.png" alt="Caltex" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/bet88.png" alt="BET88" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/shopee.png" alt="Shopee" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/jc-organic-barley.png" alt="JC Organic Barley" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/bingo-plus.png" alt="Bingo Plus" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/siomai-king.png" alt="Siomai King" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/bioderm.png" alt="Bioderm" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/smart.png" alt="Smart" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/beautywise.png" alt="Beautywise" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/met-tathione.png" alt="MET Tathione" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/gcash.png" alt="GCash" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/cignal.png" alt="Cignal" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/rsg-ready-set-glow.png" alt="RSG Ready Set Glow" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/mesa.png" alt="Mesa" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/infinix.png" alt="Infinix" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/goldilocks.png" alt="Goldilocks" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/wilkins.png" alt="Wilkins" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/omron.png" alt="Omron" loading="lazy"></span>
      <span class="brand-logo"><img src="../../brands/uno-factory-outlet.png" alt="UNO Factory Outlet" loading="lazy"></span>
    </div>
  </div>
</section>

<div class="subbrands">
  <div class="wrap">
    <span class="lead">A Vertical Of The Doorbell Collective</span>
    <div class="subbrand-links">
      <a href="#top">PPL — Talent</a>
      <a href="#brands">Brand Partnerships</a>
      <a href="#contact">Press &amp; Bookings</a>
    </div>
  </div>
</div>

<div class="bulbs"></div>
<footer id="contact">
  <div class="wrap contact-cta">
    <span class="eyebrow">Let's Talk</span>
    <h2>Represented right, <em>discovered</em> everywhere.</h2>
    <div class="hero-ctas">
      <a href="mailto:hello@ppl-lab.com" class="btn btn-red">Submit Your Reel</a>
      <a href="mailto:press@ppl-lab.com" class="btn btn-line">Press Inquiries</a>
    </div>
  </div>

  <div class="wrap footer-grid">
    <div>
      <a href="#top" class="logo-mark">
        <div class="p">P</div>
        <div class="logo-text"><span class="ppl">PPL</span><span class="sub">Professional People's Lab</span></div>
      </a>
      <p>Talent Management &amp; Talent Development vertical of The Doorbell Collective.</p>
    </div>
    <div class="footer-col">
      <h5>Agency</h5>
      <a href="#about">Company</a>
      <a href="#roster">Roster</a>
      <a href="#team">Team</a>
      <a href="#brands">Brands</a>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <a href="mailto:hello@ppl-lab.com">hello@ppl-lab.com</a>
      <a href="#">Manila, Philippines</a>
    </div>
    <div class="footer-col">
      <h5>Follow</h5>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">TikTok</a>
      <a href="#">YouTube</a>
    </div>
  </div>

  <div class="wrap footer-bottom">
    <span>© 2026 PPL — Professional People's Lab. All rights reserved.</span>
    <span>A vertical of The Doorbell Collective.</span>
  </div>
</footer>`;

const SCRIPT_SRC = `
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40));

  // ---- Roster data (single source, drives hero wall + roster grid) ----
  const roster = [
    {name:"Dingdong Dantes", role:"Actor, Director & Host", cat:"prime", tag:"Prime Artist", photo:"../../dindongdantes.jpg"},
    {name:"Ivana Alawi", role:"Actress, Model & YouTuber", cat:"prime", tag:"Prime Artist", photo:"../../ivanaalawi.jpg"},
    {name:"Gabby Eigenmann", role:"Actor, Singer & Host", cat:"prime", tag:"Prime Artist", photo:"../../gabbyeigenmann.jpg"},
    {name:"Max Collins", role:"Actress & Model", cat:"prime", tag:"Prime Artist", photo:"../../maxcollins.jpg"},
    {name:"Rochelle Pangilinan", role:"Actress, Dancer & Singer", cat:"prime", tag:"Prime Artist", photo:"../../rochellepangilinan.jpg"},
    {name:"Carlo Gonzalez", role:"Prime Artist", cat:"prime", tag:"Prime Artist", photo:"../../carlogonzales.jpg"},
    {name:"Arthur Solinap", role:"Actor & Dancer", cat:"prime", tag:"Prime Artist", photo:"../../arthursolinap.jpg"},
    {name:"Paul Salas", role:"Prime Artist", cat:"prime", tag:"Prime Artist", photo:"../../paulsalas.jpg"},
    {name:"Wendell Ramos", role:"Actor", cat:"prime", tag:"Prime Artist", photo:"../../wendellramos.jpg"},
    {name:"Nikki Van", role:"Model & TV Personality", cat:"ppl", tag:"PPL Artist", photo:"../../nikkivan.jpg"},
    {name:"Jennie Gabriel", role:"Singer, Comedienne & Impersonator", cat:"ppl", tag:"PPL Artist", photo:"../../jenniegabriel.jpg"},
    {name:"Kobe Medalla", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../kobemedalla.jpg"},
    {name:"Elio Wrick", role:"International Hockey Player", cat:"ppl", tag:"Athlete", photo:"../../eliowrick.jpg"},
    {name:"Lyra Micolob", role:"Alto Soul Singer", cat:"ppl", tag:"PPL Artist", photo:"../../lyramicolob.jpg"},
    {name:"Raven Molina", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../ravenmolina.jpg"},
    {name:"Mitzi Josh", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../mitzijosh.jpg"},
    {name:"Kiel & Vito Gueco", role:"PPL Artists", cat:"ppl", tag:"PPL Artists", photo:"../../kielvitogueco.jpg"},
    {name:"Cody Jardiniano", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../codyjardiniano.jpg"},
    {name:"1621", role:"P-pop Boy Group", cat:"performer", tag:"Group", photo:"../../1621.JPG"},
    {name:"El Manu & Jessy Kang", role:"Performers", cat:"performer", tag:"Performers", photo:"../../elmanu.jpg"},
    {name:"Lyra Micolob", role:"Alto Soul Singer", cat:"performer", tag:"Performer", photo:"../../lyramicolob.jpg"},
    {name:"Mitzi Josh", role:"Performer", cat:"performer", tag:"Performer", photo:"../../mitzijosh.jpg"},
    {name:"BRB", role:"Before Rain Begin", cat:"performer", tag:"Band", photo:"../../brb.jpg"},
  ];

  const initials = n => n.split(/\\s|&/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();

  // roster grid
  const grid = document.getElementById('rosterGrid');
  roster.forEach(a => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.cat = a.cat;
    const photoStyle = a.photo ? \` style="background-image:url('\${a.photo}');background-size:cover;background-position:center top;"\` : '';
    el.innerHTML = \`
      <div class="frame\${a.photo ? ' has-photo' : ''}"\${photoStyle}>
        <span class="tag">\${a.tag}</span>
        \${a.photo ? '' : \`<span class="init">\${initials(a.name)}</span>\`}
      </div>
      <div class="name">\${a.name}</div>
      <div class="role">\${a.role}</div>\`;
    grid.appendChild(el);
  });

  const tabs = document.querySelectorAll('.tab');
  const cards = () => document.querySelectorAll('.card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards().forEach(c => { c.style.display = (filter === 'all' || c.dataset.cat === filter) ? '' : 'none'; });
    });
  });

  // hero wall — five columns, alternating drift direction, doubled for seamless loop
  const wall = document.getElementById('wall');
  const colCount = 5;
  for (let c = 0; c < colCount; c++) {
    const col = document.createElement('div');
    col.className = 'wall-col' + (c % 2 ? ' down' : '');
    const items = [];
    for (let i = 0; i < 6; i++) items.push(roster[(c * 6 + i) % roster.length]);
    const renderTile = a => \`<div class="tile\${a.photo ? ' has-photo' : ''}"\${a.photo ? \` style="background-image:url('\${a.photo}');background-size:cover;background-position:center top;"\` : ''}><div><span class="init">\${a.name}</span><span class="role">\${a.tag}</span></div></div>\`;
    col.innerHTML = items.map(renderTile).join('') + items.map(renderTile).join('');
    wall.appendChild(col);
  }

  // brands marquee loop, two rows drifting opposite directions
  ['marqueeInnerA', 'marqueeInnerB'].forEach(id => {
    const m = document.getElementById(id);
    m.innerHTML += m.innerHTML;
  });
`;

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = BODY_HTML;
    const script = document.createElement("script");
    script.textContent = SCRIPT_SRC;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} />;
}
