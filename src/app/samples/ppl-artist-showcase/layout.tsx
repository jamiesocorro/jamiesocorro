export const metadata = {
  title: "PPL — We Manage Talent, Build Careers, Create Impact",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
  :root{
    --cream:#f7f1e5;
    --cream-2:#f1e9d8;
    --ink:#1c1a17;
    --black:#141210;
    --red:#c31f26;
    --red-dark:#9c161c;
    --gold:#c79a2e;
    --gold-soft:#dab654;
    --muted:#5b564d;
    --line: rgba(28,26,23,0.12);
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{background:var(--cream); color:var(--ink); font-family:'Poppins',sans-serif; line-height:1.55; overflow-x:hidden;}
  a{color:inherit; text-decoration:none;}
  img,svg{display:block;}
  .script{ font-family:'Caveat',cursive; }
  .wrap{ max-width:1240px; margin:0 auto; padding:0 44px; }
  @media(max-width:640px){ .wrap{padding:0 22px;} }

  /* header */
  header{ position:sticky; top:0; z-index:100; background:rgba(247,241,229,0.92); backdrop-filter:blur(8px); border-bottom:1px solid transparent; transition:border-color .25s ease, box-shadow .25s ease; }
  header.scrolled{ border-color:var(--line); box-shadow:0 6px 24px rgba(20,18,16,0.06); }
  nav.wrap{ display:flex; align-items:center; justify-content:space-between; padding:20px 44px; }
  .logo{ display:flex; align-items:center; gap:12px; }
  .logo .mark{ font-family:'Poppins',sans-serif; font-weight:900; font-size:30px; letter-spacing:-0.02em; position:relative; }
  .logo .mark .p1{color:var(--black);} .logo .mark .p2{color:var(--red);} .logo .mark .l{color:var(--black);}
  .logo .mark .spark{ position:absolute; top:-2px; right:-14px; color:var(--red); font-size:16px; }
  .logo .sub{ font-size:12.5px; line-height:1.25; font-weight:600; color:var(--ink); }
  .nav-links{ display:flex; gap:30px; font-size:13px; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; }
  .nav-links a{ color:var(--muted); padding-bottom:4px; border-bottom:2px solid transparent; transition:color .2s ease, border-color .2s ease; }
  .nav-links a:hover{ color:var(--red); }
  .nav-links a.active{ color:var(--red); border-color:var(--red); }
  @media(max-width:900px){ .nav-links{display:none;} }
  .pill{ display:inline-flex; align-items:center; gap:8px; padding:11px 22px; border-radius:999px; font-size:12.5px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; white-space:nowrap; }
  .pill-outline{ border:1.5px solid var(--gold); color:var(--ink); background:transparent; transition:all .25s ease; }
  .pill-outline:hover{ background:var(--ink); color:var(--cream); border-color:var(--ink); }
  .pill-red{ background:var(--red); color:#fff; border:1.5px solid var(--red); transition:all .25s ease; }
  .pill-red:hover{ background:var(--red-dark); transform:translateY(-2px); }
  .pill-white{ background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.8); }
  .pill-white:hover{ background:#fff; color:var(--red); }
  .pill svg{ width:14px; height:14px; }

  /* hero */
  .hero{ position:relative; padding:72px 0 60px; overflow:hidden; }
  .hero-grid{ display:grid; grid-template-columns:1.05fr 0.95fr; gap:48px; align-items:center; }
  @media(max-width:920px){ .hero-grid{grid-template-columns:1fr; text-align:center;} }
  .we-manage{ display:inline-flex; align-items:center; gap:8px; font-size:32px; color:var(--gold); font-weight:700; }
  .we-manage svg{ width:20px; height:20px; color:var(--red); }
  .hero h1{ font-size:clamp(38px,6vw,60px); line-height:1.05; font-weight:900; letter-spacing:-0.01em; margin:8px 0 6px; text-transform:uppercase; }
  .hero h1 .red{ color:var(--red); }
  .underline-squiggle{ width:210px; height:14px; margin:6px 0 22px; color:var(--gold); }
  @media(max-width:920px){ .underline-squiggle{ margin-left:auto; margin-right:auto; } }
  .hero p.desc{ color:var(--muted); font-size:15px; max-width:430px; margin-bottom:30px; }
  @media(max-width:920px){ .hero p.desc{margin-left:auto; margin-right:auto;} }
  .hero p.desc strong{ color:var(--ink); font-weight:700; }

  .hero-art{ position:relative; display:flex; align-items:center; justify-content:center; }
  .hero-photo{ width:100%; height:auto; max-width:560px; border-radius:20px; }
  @media(max-width:920px){ .hero-art{margin-top:36px;} }

  /* about band */
  .about-band{ background:var(--black); border-radius:22px; padding:44px 40px; margin:20px auto 90px; display:grid; grid-template-columns:1.1fr 1px 0.8fr 1px 0.8fr 1px 0.8fr; gap:34px; align-items:center; max-width:1240px; }
  @media(max-width:980px){ .about-band{grid-template-columns:1fr; } .about-band .divider{display:none;} }
  .about-band .divider{ background:rgba(255,255,255,0.14); height:70%; align-self:center; }
  .about-eyebrow{ display:inline-flex; align-items:center; gap:8px; color:var(--gold); font-size:12.5px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; margin-bottom:12px; }
  .about-eyebrow svg{ width:14px; height:14px; }
  .about-band p{ color:rgba(247,241,229,0.72); font-size:14.5px; max-width:340px; }
  .pillar{ text-align:center; }
  .pillar svg{ width:38px; height:38px; margin:0 auto 14px; color:var(--gold); }
  .pillar h4{ color:#fff; font-size:16px; font-weight:700; margin-bottom:6px; }
  .pillar p{ color:rgba(247,241,229,0.6); font-size:12.5px; max-width:none; }

  /* section headings */
  section{ padding:0 0 90px; }
  .sec-head{ display:flex; align-items:center; justify-content:space-between; gap:24px; margin-bottom:44px; flex-wrap:wrap; }
  .sec-title{ display:inline-flex; align-items:center; gap:9px; color:var(--red); font-size:clamp(22px,3vw,28px); font-weight:800; text-transform:uppercase; letter-spacing:0.01em; }
  .sec-title svg{ width:20px; height:20px; color:var(--gold); }

  /* company profile */
  .profile-grid{ display:grid; grid-template-columns:0.8fr 1.2fr; gap:64px; align-items:center; }
  @media(max-width:860px){ .profile-grid{grid-template-columns:1fr; gap:36px;} }
  .profile-portrait{ aspect-ratio:3/4; border-radius:22px; background:linear-gradient(160deg,#241d1f,#141210 60%), radial-gradient(circle at 30% 20%, rgba(195,31,38,0.35), transparent 55%); border:1px solid var(--line); position:relative; overflow:hidden; display:flex; align-items:flex-end; padding:22px; }
  .profile-portrait.has-photo{ background-image:linear-gradient(0deg, rgba(20,18,16,0.85) 8%, transparent 45%), url('../../PPL.jpg'); background-size:cover; background-position:center top; }
  .profile-portrait .cap{ color:var(--gold-soft); font-size:11px; letter-spacing:0.14em; text-transform:uppercase; font-weight:700; }
  .profile-copy p{ color:var(--muted); font-size:14.5px; max-width:520px; margin-bottom:14px; }
  .profile-copy blockquote{ font-family:'Caveat',cursive; font-size:26px; font-weight:700; color:var(--red); border-left:3px solid var(--gold); padding-left:20px; margin:22px 0; max-width:480px; line-height:1.25; }
  .profile-copy blockquote cite{ display:block; font-family:'Poppins',sans-serif; font-style:normal; font-weight:600; font-size:11.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
  .profile-stats{ display:flex; gap:36px; margin-top:30px; border-top:1px solid var(--line); padding-top:24px; flex-wrap:wrap; }
  .profile-stats div h3{ font-size:28px; font-weight:800; color:var(--red); }
  .profile-stats div span{ font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); }

  /* team */
  .dept-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  @media(max-width:900px){ .dept-grid{grid-template-columns:repeat(2,1fr);} }
  @media(max-width:600px){ .dept-grid{grid-template-columns:1fr;} }
  .dept-card{ border:1px solid var(--line); border-radius:16px; padding:26px 24px; background:#fff; }
  .dept-card h4{ font-size:11.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--red); font-weight:800; margin-bottom:16px; }
  .dept-person{ display:flex; justify-content:space-between; gap:14px; padding:10px 0; border-top:1px solid var(--line); }
  .dept-person:first-of-type{ border-top:none; }
  .dept-person .dp-name{ font-size:14px; color:var(--ink); font-weight:600; }
  .dept-person .dp-title{ font-size:11px; color:var(--muted); text-align:right; }

  /* what we do */
  .services-grid{ display:grid; grid-template-columns:repeat(5,1fr); }
  @media(max-width:980px){ .services-grid{grid-template-columns:repeat(2,1fr); gap:36px 20px;} }
  @media(max-width:520px){ .services-grid{grid-template-columns:1fr;} }
  .service{ text-align:center; padding:0 20px; border-left:1px solid var(--line); }
  .service:first-child{ border-left:none; }
  @media(max-width:980px){ .service{border-left:none;} }
  .service svg{ width:40px; height:40px; color:var(--gold); margin:0 auto 16px; }
  .service h4{ font-size:14.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; margin-bottom:8px; }
  .service p{ color:var(--muted); font-size:13px; max-width:190px; margin:0 auto; }

  /* artists */
  .artists-row-wrap{ position:relative; }
  .artists-row{ display:flex; flex-wrap:wrap; gap:34px 28px; justify-content:center; padding:14px 6px 24px; }
  .artist-card{ scroll-snap-align:start; flex:0 0 auto; width:220px; position:relative; text-align:center; }
  .artist-photo{ width:220px; height:220px; border-radius:50%; display:flex; align-items:center; justify-content:center; position:relative; font-family:'Poppins',sans-serif; font-weight:800; font-size:52px; color:#fff; }
  .artist-card:nth-child(odd) .artist-photo{ background:radial-gradient(circle at 35% 30%, var(--gold-soft), var(--gold) 70%); color:var(--ink); }
  .artist-card:nth-child(even) .artist-photo{ background:radial-gradient(circle at 35% 30%, var(--red), var(--red-dark) 75%); }
  .artist-doodle{ position:absolute; top:6px; right:10px; width:24px; color:var(--ink); opacity:0.7; }
  .artist-card:nth-child(even) .artist-doodle{ color:var(--gold-soft); opacity:0.9; }
  .name-plate{ position:relative; margin:-30px auto 0; width:78%; background:var(--black); border-radius:50% 50% 40% 40% / 60% 60% 40% 40%; padding:14px 10px 10px; }
  .name-plate span{ font-family:'Caveat',cursive; font-weight:700; font-size:24px; color:var(--gold-soft); letter-spacing:0.02em; }
  .carousel-btn{ position:absolute; top:96px; width:40px; height:40px; border-radius:50%; border:1.5px solid var(--red); background:var(--cream); color:var(--red); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .2s ease; z-index:3; }
  .carousel-btn:hover{ background:var(--red); color:#fff; }
  .carousel-btn.prev{ left:-8px; }
  .carousel-btn.next{ right:-8px; }
  .carousel-btn svg{ width:16px; height:16px; }
  @media(max-width:640px){ .carousel-btn{display:none;} }
  .artist-photo.has-photo{ background-size:cover !important; background-position:center !important; }
  .artist-photo.has-photo span{ display:none; }
  .artist-role{ margin-top:8px; font-size:12px; color:var(--muted); }
  .artist-tag{ position:absolute; top:2px; left:6px; z-index:2; font-size:9px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:var(--ink); background:rgba(247,241,229,0.9); border:1px solid var(--gold); border-radius:999px; padding:3px 9px; }

  /* filter tabs */
  .tabs{ display:flex; gap:10px; flex-wrap:wrap; margin:-8px 0 28px; }
  .tab{ padding:9px 18px; font-size:11.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; border:1.5px solid var(--gold); color:var(--ink); background:transparent; border-radius:999px; cursor:pointer; font-family:inherit; transition:all .2s ease; }
  .tab.active, .tab:hover{ background:var(--red); border-color:var(--red); color:#fff; }
  .artist-card.hidden{ display:none; }

  /* brands */
  .brands .sec-head{ margin-bottom:24px; }
  .marquee-track{ overflow:hidden; border-bottom:1px solid var(--line); padding:20px 0; }
  .wrap + .marquee-track{ border-top:1px solid var(--line); }
  .marquee-inner{ display:flex; gap:24px; width:max-content; align-items:center; animation: scroll 32s linear infinite; }
  .marquee-inner.reverse{ animation-direction: reverse; }
  .marquee-track:hover .marquee-inner{ animation-play-state: paused; }
  @keyframes scroll{ from{transform:translateX(0);} to{transform:translateX(-50%);} }
  .brand-logo{ display:flex; align-items:center; justify-content:center; flex-shrink:0; background:#fff; border:1px solid var(--line); border-radius:10px; height:60px; width:140px; padding:10px 16px; }
  .brand-logo img{ max-height:100%; max-width:100%; object-fit:contain; }

  /* cta band */
  .cta-wrap{ margin:0 auto 70px; }
  .cta-band{ background:linear-gradient(120deg, var(--red), var(--red-dark)); border-radius:22px; padding:40px 44px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; position:relative; overflow:hidden; }
  .cta-left{ display:flex; align-items:center; gap:18px; }
  .cta-star{ width:46px; height:46px; color:var(--gold-soft); flex-shrink:0; }
  .cta-band h2{ color:#fff; font-size:clamp(22px,3.2vw,32px); font-weight:700; line-height:1.2; }
  .cta-band h2 .script{ display:block; color:var(--gold-soft); font-size:clamp(30px,4.4vw,42px); font-weight:700; }
  .cta-doodle{ position:absolute; color:rgba(255,255,255,0.35); }
  .cd1{ top:14px; right:120px; width:26px; }
  .cd2{ bottom:16px; left:36%; width:22px; color:var(--gold-soft); opacity:0.6; }

  /* footer */
  footer{ background:var(--black); color:rgba(247,241,229,0.8); padding:64px 0 0; }
  .footer-grid{ display:grid; grid-template-columns:1.4fr 1fr 1.1fr 1fr; gap:40px; padding-bottom:48px; border-bottom:1px solid rgba(255,255,255,0.1); }
  @media(max-width:820px){ .footer-grid{grid-template-columns:1fr 1fr; row-gap:36px;} }
  .footer-brand .logo .sub{ color:rgba(247,241,229,0.75); }
  .footer-brand p{ margin-top:14px; font-size:13px; color:rgba(247,241,229,0.55); max-width:240px; }
  .footer-col h5{ color:var(--gold); font-size:11.5px; letter-spacing:0.14em; text-transform:uppercase; font-weight:700; margin-bottom:16px; }
  .footer-col a, .footer-col .row{ display:flex; align-items:center; gap:9px; color:rgba(247,241,229,0.72); font-size:13.5px; margin-bottom:12px; transition:color .2s ease; }
  .footer-col a:hover{ color:#fff; }
  .footer-col svg{ width:15px; height:15px; color:var(--gold); flex-shrink:0; }
  .social-row{ display:flex; gap:12px; }
  .social-row a{ width:36px; height:36px; border-radius:50%; border:1.5px solid var(--gold); display:flex; align-items:center; justify-content:center; color:var(--gold); transition:all .2s ease; }
  .social-row a:hover{ background:var(--gold); color:var(--black); }
  .social-row svg{ width:16px; height:16px; }
  .footer-bottom{ text-align:center; padding:22px 0; font-size:12px; color:rgba(247,241,229,0.5); }
` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
