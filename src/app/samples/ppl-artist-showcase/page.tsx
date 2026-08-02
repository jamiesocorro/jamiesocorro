"use client";

import { useEffect, useRef } from "react";

const BODY_HTML = `<header id="siteHeader">
  <nav class="wrap">
    <a href="#top" class="logo">
      <span class="mark"><span class="p1">P</span><span class="p2">P</span><span class="l">L</span><span class="spark">✦</span></span>
      <span class="sub">Professional<br>People's Lab</span>
    </a>
    <div class="nav-links">
      <a href="#top" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#artists">Artists</a>
      <a href="#brands">Brands</a>
      <a href="#team">Team</a>
      <a href="#services">Services</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="#contact" class="pill pill-outline">Contact Us
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </nav>
</header>

<div id="top"></div>

<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="we-manage script">We Manage
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
      </span>
      <h1>Talent.<br>Build Careers.<br><span class="red">Create Impact.</span></h1>
      <svg class="underline-squiggle" viewBox="0 0 210 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M2 8c20-10 40 8 60-2s40 8 60-2 40 8 86-2"/></svg>
      <p class="desc"><strong>PPL Professional People's Lab</strong> is a talent management company committed to developing artists and building lasting careers.</p>
      <a href="#about" class="pill pill-red">Discover More
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="hero-art">
      <img src="../../ppl-prime.png" alt="PPL Prime Artists" class="hero-photo">
    </div>
  </div>
</section>

<div class="wrap">
  <div class="about-band" id="about">
    <div>
      <span class="about-eyebrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
        About PPL
      </span>
      <p>We believe in people. We develop talent with purpose and create opportunities that open doors to the world.</p>
    </div>
    <div class="divider"></div>
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 16.8 6.1 20l1.2-6.5-4.8-4.6 6.6-.9L12 2z"/></svg>
      <h4>People First</h4>
      <p>We value people behind the talent.</p>
    </div>
    <div class="divider"></div>
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M9 3l3 6 3-6M12 9l-3 12M12 9l3 12"/></svg>
      <h4>Professional</h4>
      <p>We work with passion and integrity.</p>
    </div>
    <div class="divider"></div>
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.8 2.6 4.3 6 4.3 9.5s-1.5 6.9-4.3 9.5c-2.8-2.6-4.3-6-4.3-9.5S9.2 5.1 12 2.5z"/></svg>
      <h4>Limitless</h4>
      <p>We dream big and go beyond boundaries.</p>
    </div>
  </div>
</div>

<section class="profile" id="profile">
  <div class="wrap profile-grid">
    <div class="profile-portrait has-photo">
      <span class="cap">Perry P. Lansigan — President &amp; CEO</span>
    </div>
    <div class="profile-copy">
      <div class="sec-head" style="margin-bottom:18px;">
        <span class="sec-title">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
          Company Profile
        </span>
      </div>
      <p>Perry P. Lansigan started his career as a trainee at GMA Network more than thirty years ago — work so commendable the network kept him on. That origin story became the foundation for a company built on one conviction: hard work pays off.</p>
      <p>Today PPL represents a curated roster of actors, hosts, musicians, dancers, and public figures, backed by a team of managers, handlers, creatives, finance, and legal professionals who run the business behind the talent.</p>
      <blockquote>
        "Ako ang utak, ikaw ang puso."
        <cite>Perry P. Lansigan, President &amp; CEO — on the partnership with Creative Director Hazel Abonita Rivera</cite>
      </blockquote>
      <div class="profile-stats">
        <div><h3>17</h3><span>Years as PPL</span></div>
        <div><h3>30+</h3><span>Yrs Industry Roots</span></div>
        <div><h3>20+</h3><span>Artists Represented</span></div>
        <div><h3>143M</h3><span>Combined Followers</span></div>
      </div>
    </div>
  </div>
</section>

<section class="services" id="services">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-title">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
        What We Do
      </span>
    </div>
    <div class="services-grid">
      <div class="service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/><path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3z"/></svg>
        <h4>Talent Management</h4>
        <p>We handle your career so you can focus on what you do best.</p>
      </div>
      <div class="service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 10v4h4l6 5V5L7 10H3z"/><path d="M16 8.5a4.5 4.5 0 010 7M19 5.5a8.5 8.5 0 010 13"/></svg>
        <h4>Branding &amp; Marketing</h4>
        <p>We build your image and connect you to the right audience.</p>
      </div>
      <div class="service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>
        <h4>Music &amp; Production</h4>
        <p>From recording to release, we make great things happen.</p>
      </div>
      <div class="service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M12 14l1.2 2.4L16 17l-2.8.6L12 20l-1.2-2.4L8 17l2.8-.6L12 14z"/></svg>
        <h4>Events &amp; Shows</h4>
        <p>We create experiences that fans will never forget.</p>
      </div>
      <div class="service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V13M11 20V8M18 20v-6"/><path d="M3 20h19"/></svg>
        <h4>Career Development</h4>
        <p>We guide your growth and help you reach your full potential.</p>
      </div>
    </div>
  </div>
</section>

<section class="artists" id="artists">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-title">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
        Our Artists
      </span>
      <a href="#" class="pill pill-outline">View All Artists
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="tabs" id="artistTabs">
      <button class="tab active" data-filter="all">All</button>
      <button class="tab" data-filter="prime">Prime Artists</button>
      <button class="tab" data-filter="ppl">PPL Artists</button>
      <button class="tab" data-filter="performer">Performers</button>
    </div>
    <div class="artists-row-wrap">
      <div class="artists-row" id="artistsRow"></div>
    </div>
  </div>
</section>

<section class="team" id="team">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-title">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
        Our Team
      </span>
    </div>
    <div class="dept-grid">
      <div class="dept-card">
        <h4>Executive Leadership</h4>
        <div class="dept-person"><span class="dp-name">Perry P. Lansigan</span><span class="dp-title">President &amp; CEO</span></div>
        <div class="dept-person"><span class="dp-name">Apples Arizabal-Eigenmann</span><span class="dp-title">Senior Business Unit Head</span></div>
        <div class="dept-person"><span class="dp-name">Hazel Abonita Rivera</span><span class="dp-title">Creative Director</span></div>
        <div class="dept-person"><span class="dp-name">Paolo Luciano</span><span class="dp-title">Executive Liaison</span></div>
      </div>
      <div class="dept-card">
        <h4>Business Units</h4>
        <div class="dept-person"><span class="dp-name">Ferdie Fiegalan</span><span class="dp-title">Business Unit Head</span></div>
        <div class="dept-person"><span class="dp-name">Luj Velayo</span><span class="dp-title">Business Unit Head</span></div>
      </div>
      <div class="dept-card">
        <h4>Artist Relations &amp; Handlers</h4>
        <div class="dept-person"><span class="dp-name">Mike Anota</span><span class="dp-title">Road Manager</span></div>
        <div class="dept-person"><span class="dp-name">Siam Grant</span><span class="dp-title">Handler / Road Manager</span></div>
        <div class="dept-person"><span class="dp-name">Katt Leganson</span><span class="dp-title">Handler / Road Manager</span></div>
        <div class="dept-person"><span class="dp-name">Joshua Carino</span><span class="dp-title">Handler</span></div>
        <div class="dept-person"><span class="dp-name">Carlo Borral</span><span class="dp-title">Handler</span></div>
      </div>
      <div class="dept-card">
        <h4>Digital &amp; Social</h4>
        <div class="dept-person"><span class="dp-name">Joseph "Otep" Marcellana</span><span class="dp-title">Digital Manager</span></div>
        <div class="dept-person"><span class="dp-name">Markky Villacarlos</span><span class="dp-title">Social Media Specialist</span></div>
      </div>
      <div class="dept-card">
        <h4>Finance &amp; Legal</h4>
        <div class="dept-person"><span class="dp-name">Arvie Yumul</span><span class="dp-title">Finance Manager</span></div>
        <div class="dept-person"><span class="dp-name">Atty. Alaine Palomo</span><span class="dp-title">Company Lawyer</span></div>
        <div class="dept-person"><span class="dp-name">Atty. Melodie Esquejo</span><span class="dp-title">Company Lawyer / CPA</span></div>
        <div class="dept-person"><span class="dp-name">Benjie Mendoza</span><span class="dp-title">Accountant</span></div>
      </div>
      <div class="dept-card">
        <h4>Publicity</h4>
        <div class="dept-person"><span class="dp-name">Rose Garcia</span><span class="dp-title">Publicist</span></div>
        <div class="dept-person"><span class="dp-name">Random Republika / Kate Adajar</span><span class="dp-title">Digital Publicist</span></div>
      </div>
    </div>
  </div>
</section>

<section class="brands" id="brands">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-title">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
        Brands
      </span>
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

<div class="wrap cta-wrap">
  <div class="cta-band" id="news">
    <div class="cta-left">
      <svg class="cta-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 16.8 6.1 20l1.2-6.5-4.8-4.6 6.6-.9L12 2z"/></svg>
      <h2>Let's build your<span class="script">Success Story!</span></h2>
    </div>
    <a href="#contact" class="pill pill-white">Let's Work Together
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
    <svg class="cta-doodle cd1" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
    <svg class="cta-doodle cd2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>
  </div>
</div>

<footer id="contact">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a href="#top" class="logo">
        <span class="mark"><span class="p1" style="color:#fff;">P</span><span class="p2">P</span><span class="l" style="color:#fff;">L</span><span class="spark">✦</span></span>
        <span class="sub">Professional<br>People's Lab</span>
      </a>
      <p>We manage talent, build careers, and create impact across music, media, and entertainment.</p>
    </div>
    <div class="footer-col">
      <h5>Quick Links</h5>
      <a href="#top">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#news">News</a>
      <a href="#artists">Artists</a>
      <a href="#brands">Brands</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-col">
      <h5>Contact Us</h5>
      <a href="mailto:hello@ppplab.ph" class="row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
        hello@ppplab.ph
      </a>
      <span class="row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
        +63 912 345 6789
      </span>
      <span class="row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.3 7-11.5A7 7 0 005 9.5C5 14.7 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
        Manila, Philippines
      </span>
    </div>
    <div class="footer-col">
      <h5>Follow Us</h5>
      <div class="social-row">
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg></a>
        <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v10.5a3.5 3.5 0 11-3-3.46"/><path d="M14 3c0 2.5 2 4.5 4.5 4.5"/></svg></a>
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 10l4 2-4 2v-4z"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 21v-7h2.5l.5-3H14V9c0-1 .3-1.7 1.7-1.7H17V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.5v7H14z"/></svg></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">© 2025 PPL Professional People's Lab. All Rights Reserved. ✦</div>
</footer>`;

const SCRIPT_SRC = `
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

  // ---- Artist roster (same roster as the Professional People's Lab sample) ----
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
    {name:"Jennie Gabriel", role:"Singer, Comedienne & Impersonator", cat:"ppl performer", tag:"PPL Artist", photo:"../../jenniegabriel.jpg"},
    {name:"Kobe Medalla", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../kobemedalla.jpg"},
    {name:"Elio Wrick", role:"International Hockey Player", cat:"ppl", tag:"Athlete", photo:"../../eliowrick.jpg"},
    {name:"Lyra Micolob", role:"Alto Soul Singer", cat:"ppl performer", tag:"PPL Artist", photo:"../../lyramicolob.jpg"},
    {name:"Raven Molina", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../ravenmolina.jpg"},
    {name:"Mitzi Josh", role:"PPL Artist", cat:"ppl performer", tag:"PPL Artist", photo:"../../mitzijosh.jpg"},
    {name:"Kiel & Vito Gueco", role:"PPL Artists", cat:"ppl", tag:"PPL Artists", photo:"../../kielvitogueco.jpg"},
    {name:"Cody Jardiniano", role:"PPL Artist", cat:"ppl", tag:"PPL Artist", photo:"../../codyjardiniano.jpg"},
    {name:"1621", role:"P-pop Boy Group", cat:"performer", tag:"Group", photo:"../../1621.JPG"},
    {name:"El Manu & Jessy Kang", role:"Performers", cat:"performer", tag:"Performers", photo:"../../elmanu.jpg"},
    {name:"BRB", role:"Before Rain Begin", cat:"performer", tag:"Band", photo:"../../brb.jpg"},
  ];

  const doodles = [
    '<svg class="artist-doodle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.4 2.4 4.8 6 4.2c2-.3 3.8.7 6 3 2.2-2.3 4-3.3 6-3 3.6.6 5.6 4.2 4 7.7C19.5 16.4 12 21 12 21z"/></svg>',
    '<svg class="artist-doodle" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.9L20 10l-6.1 2.1L12 18l-1.9-5.9L4 10l6.1-2.1L12 2z"/></svg>',
    '<svg class="artist-doodle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12c4-6 8 6 12 0s5-4 6-2"/></svg>',
  ];

  const initials = n => n.split(/\\s|&/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();

  const row = document.getElementById('artistsRow');
  if (row) {
    row.innerHTML = roster.map((a, i) => \`
      <div class="artist-card" data-cat="\${a.cat}">
        <div class="artist-photo has-photo" style="background-image:url('\${a.photo}'); background-color:\${i % 2 ? 'var(--red)' : 'var(--gold-soft)'};">
          <span class="artist-tag">\${a.tag}</span>
          <span>\${initials(a.name)}</span>
          \${doodles[i % doodles.length]}
        </div>
        <div class="name-plate"><span>\${a.name}</span></div>
        <div class="artist-role">\${a.role}</div>
      </div>\`).join('');
  }

  const tabs = document.querySelectorAll('#artistTabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('#artistsRow .artist-card').forEach(card => {
        const cats = card.dataset.cat.split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
      });
    });
  });

  // ---- Brands marquee loop, two rows drifting opposite directions ----
  ['marqueeInnerA', 'marqueeInnerB'].forEach(id => {
    const m = document.getElementById(id);
    if (m) m.innerHTML += m.innerHTML;
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
