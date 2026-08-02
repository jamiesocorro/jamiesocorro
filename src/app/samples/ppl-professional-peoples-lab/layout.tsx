export const metadata = {
  title: "PPL — Professional People's Lab",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
  :root{
    --bg:#0c0b0d;
    --surface:#161417;
    --surface-2:#1e1b1f;
    --red:#d6392c;
    --red-bright:#ef4c3c;
    --gold:#e6b955;
    --gold-bright:#f3ce7f;
    --cream:#f3eee6;
    --muted:#9d97a0;
    --line: rgba(243,238,230,0.12);
    --line-strong: rgba(243,238,230,0.22);
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{background:var(--bg); color:var(--cream); font-family:'Roboto',sans-serif; line-height:1.5; overflow-x:hidden;}
  ::selection{background:var(--red); color:var(--cream);}
  h1,h2,h3,.display{ font-family:'Roboto', sans-serif; font-weight:500; letter-spacing:-0.01em; }
  a{color:inherit; text-decoration:none;}
  img{max-width:100%; display:block;}
  .eyebrow{ font-family:'Roboto',sans-serif; text-transform:uppercase; letter-spacing:0.28em; font-size:11px; color:var(--gold); font-weight:700; }
  .wrap{ max-width:1180px; margin:0 auto; padding:0 40px; }
  @media(max-width:640px){ .wrap{padding:0 22px;} }

  .bulbs{ height:22px; width:100%; background: radial-gradient(circle 3px, var(--red) 92%, transparent 100%); background-size: 34px 22px; background-repeat: repeat-x; background-position: 17px center; opacity:0.55; position:relative; }
  .bulbs::after{ content:''; position:absolute; inset:0; background: inherit; animation: twinkle 3.2s steps(2) infinite; }
  @keyframes twinkle{ 0%,100%{opacity:0.3;} 50%{opacity:1;} }
  @media (prefers-reduced-motion: reduce){ .bulbs::after{animation:none; opacity:0.7;} }

  header{ position:fixed; top:0; left:0; right:0; z-index:100; padding:22px 0; transition:all .35s ease; }
  header.scrolled{ background:rgba(12,11,13,0.9); backdrop-filter: blur(10px); padding:14px 0; border-bottom:1px solid var(--line); }
  nav.wrap{ display:flex; align-items:center; justify-content:space-between; }
  .logo-mark{ display:flex; align-items:center; gap:10px; }
  .logo-mark .p{ font-family:'Roboto', sans-serif; font-weight:800; font-size:26px; color:var(--red); border:2px solid var(--red); width:38px; height:38px; display:flex; align-items:center; justify-content:center; }
  .logo-text{ display:flex; flex-direction:column; line-height:1.05; }
  .logo-text .ppl{ font-family:'Roboto', sans-serif; font-weight:700; font-size:20px; color:var(--red); letter-spacing:0.02em; }
  .logo-text .sub{ font-size:8.5px; letter-spacing:0.18em; color:var(--gold); text-transform:uppercase; font-weight:600; }
  .nav-links{ display:flex; gap:34px; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; font-weight:600; }
  .nav-links a{ color:var(--muted); position:relative; padding-bottom:4px; transition:color .25s ease; }
  .nav-links a:hover{color:var(--cream);}
  .nav-links a::after{ content:''; position:absolute; left:0; bottom:0; width:0%; height:1px; background:var(--red); transition:width .3s ease; }
  .nav-links a:hover::after{width:100%;}
  .nav-cta{ border:1px solid var(--line-strong); padding:9px 18px; font-size:11.5px; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; transition:all .25s ease; }
  .nav-cta:hover{ border-color:var(--red); color:var(--red); }
  @media(max-width:900px){ .nav-links{display:none;} }

  /* ---- HERO: wall of stars ---- */
  .hero{ position:relative; height:100svh; min-height:640px; overflow:hidden; display:flex; align-items:center; justify-content:center; }
  .wall{ position:absolute; inset:0; display:flex; gap:14px; padding:100px 0; filter:saturate(0.9); }
  .wall-col{ display:flex; flex-direction:column; gap:14px; flex:1; animation: driftUp 60s linear infinite; }
  .wall-col.down{ animation-name: driftDown; }
  @keyframes driftUp{ from{transform:translateY(0);} to{transform:translateY(-50%);} }
  @keyframes driftDown{ from{transform:translateY(-50%);} to{transform:translateY(0);} }
  @media (prefers-reduced-motion: reduce){ .wall-col{animation:none;} }
  .tile{ aspect-ratio:3/4; border:1px solid var(--line); position:relative; flex-shrink:0; display:flex; align-items:flex-end; padding:12px; overflow:hidden; }
  .tile .init{ font-family:'Roboto', sans-serif; font-size:15px; color:var(--cream); position:relative; z-index:2; }
  .tile .role{ display:block; font-size:8px; letter-spacing:0.1em; text-transform:uppercase; color:var(--gold); margin-top:2px; position:relative; z-index:2; }
  .tile::before{ content:''; position:absolute; inset:0; background: linear-gradient(200deg, rgba(214,57,44,0.28), rgba(22,20,23,0.9) 65%); }
  .tile::after{ content:''; position:absolute; inset:0; background:linear-gradient(0deg, rgba(0,0,0,0.75) 5%, transparent 55%); }
  .hero-scrim{ position:absolute; inset:0; background: radial-gradient(ellipse 60% 55% at 50% 48%, rgba(12,11,13,0.94), rgba(12,11,13,0.55) 55%, rgba(12,11,13,0.9) 100%); z-index:2; }
  .hero-inner{ position:relative; z-index:3; text-align:center; padding:0 24px; }
  .hero .eyebrow{display:block; margin-bottom:18px;}
  .hero h1{ font-size:clamp(42px, 8vw, 96px); line-height:0.98; color:var(--cream); }
  .hero h1 .accent{ color:var(--red); }
  .hero p.sub{ max-width:520px; margin:26px auto 0; color:var(--muted); font-size:15.5px; }
  .hero-ctas{ margin-top:38px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
  .btn{ padding:15px 30px; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; font-weight:700; display:inline-block; transition:all .3s ease; border:1px solid transparent; }
  .btn-red{ background:var(--red); color:#fff; }
  .btn-red:hover{ background:var(--red-bright); transform:translateY(-2px); }
  .btn-line{ border-color:var(--line-strong); color:var(--cream); }
  .btn-line:hover{ border-color:var(--gold); color:var(--gold); }
  .scroll-cue{ position:absolute; bottom:26px; left:50%; transform:translateX(-50%); z-index:3; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); display:flex; flex-direction:column; align-items:center; gap:8px; }
  .scroll-cue .stem{ width:1px; height:30px; background:linear-gradient(var(--gold), transparent); }

  section{padding:120px 0;}
  @media(max-width:640px){ section{padding:80px 0;} }
  .section-head{ display:flex; justify-content:space-between; align-items:flex-end; gap:40px; margin-bottom:64px; border-bottom:1px solid var(--line); padding-bottom:28px; }
  .section-head h2{ font-size:clamp(32px, 4vw, 50px); margin-top:8px; }
  .section-head p{ color:var(--muted); max-width:340px; font-size:14px; padding-bottom:6px; }

  .about{background:var(--surface);}
  .about-grid{ display:grid; grid-template-columns: 0.8fr 1.2fr; gap:76px; align-items:center; }
  @media(max-width:860px){ .about-grid{grid-template-columns:1fr; gap:44px;} }
  .portrait{ aspect-ratio:3/4; background: linear-gradient(160deg,#241d1f,#161417 60%), radial-gradient(circle at 30% 20%, rgba(214,57,44,0.32), transparent 55%); border:1px solid var(--line-strong); position:relative; display:flex; align-items:flex-end; padding:26px; }
  .portrait.has-photo{ background-image: linear-gradient(0deg, rgba(12,11,13,0.9) 10%, transparent 45%), url('../../PPL.jpg'); background-size:cover; background-position:center top; }
  .portrait .mono{ font-family:'Roboto', sans-serif; font-size:110px; color:rgba(243,238,230,0.08); position:absolute; top:18px; right:18px; line-height:1; }
  .portrait .cap{ font-size:10.5px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); border-top:1px solid var(--line-strong); padding-top:13px; width:100%; }
  .about-copy .eyebrow{margin-bottom:16px;}
  .about-copy h2{ font-size:clamp(30px,3.8vw,42px); margin-bottom:22px; line-height:1.1; }
  .about-copy p{ color:var(--muted); font-size:15px; max-width:540px; margin-bottom:16px; }
  blockquote{ font-family:'Roboto', sans-serif; font-style:italic; font-size:20px; color:var(--cream); border-left:2px solid var(--red); padding-left:22px; margin:28px 0; max-width:490px; }
  blockquote cite{ display:block; font-style:normal; font-family:'Roboto',sans-serif; font-size:10.5px; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); margin-top:10px; }
  .stat-row{ display:flex; gap:42px; margin-top:40px; border-top:1px solid var(--line); padding-top:28px; flex-wrap:wrap; }
  .stat-row div h3{ font-size:30px; color:var(--red); font-weight:500; }
  .stat-row div span{ font-size:10.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }

  .impact{ background: linear-gradient(180deg, var(--bg), #120f11); text-align:center; padding:90px 0; }
  .impact .num{ font-family:'Roboto', sans-serif; font-size:clamp(54px,9vw,110px); color:var(--gold); line-height:1; }
  .impact .label{ margin-top:14px; color:var(--muted); font-size:14px; letter-spacing:0.04em; }

  /* ---- ROSTER: card grid like VAA's artist gallery ---- */
  .roster{background:var(--bg);}
  .tabs{ display:flex; gap:10px; flex-wrap:wrap; }
  .tab{ padding:11px 20px; font-size:11.5px; letter-spacing:0.11em; text-transform:uppercase; font-weight:700; border:1px solid var(--line-strong); color:var(--muted); cursor:pointer; background:none; transition:all .25s ease; font-family:inherit; }
  .tab.active, .tab:hover{ color:#fff; background:var(--red); border-color:var(--red); }
  .roster-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:56px; }
  @media(max-width:920px){ .roster-grid{grid-template-columns:repeat(3,1fr);} }
  @media(max-width:640px){ .roster-grid{grid-template-columns:repeat(2,1fr); gap:14px; margin-top:36px;} }
  .card{ position:relative; }
  .card .frame{ aspect-ratio:3/4; border:1px solid var(--line-strong); position:relative; overflow:hidden; display:flex; align-items:flex-end; padding:16px; transition:border-color .3s ease, transform .3s ease; }
  .card .frame::before{ content:''; position:absolute; inset:0; }
  .card:nth-child(5n+1) .frame::before{ background:linear-gradient(200deg, rgba(214,57,44,0.35), rgba(22,20,23,0.95) 65%); }
  .card:nth-child(5n+2) .frame::before{ background:linear-gradient(200deg, rgba(230,185,85,0.28), rgba(22,20,23,0.95) 65%); }
  .card:nth-child(5n+3) .frame::before{ background:linear-gradient(200deg, rgba(157,151,160,0.28), rgba(22,20,23,0.95) 65%); }
  .card:nth-child(5n+4) .frame::before{ background:linear-gradient(200deg, rgba(214,57,44,0.2), rgba(22,20,23,0.95) 65%); }
  .card:nth-child(5n+5) .frame::before{ background:linear-gradient(200deg, rgba(230,185,85,0.18), rgba(22,20,23,0.95) 65%); }
  .card:hover .frame{ border-color:var(--gold); transform:translateY(-4px); }
  .card .frame.has-photo::before{ background:none; }
  .tile.has-photo::before{ background:none; }
  .card .init{ font-family:'Roboto', sans-serif; font-size:20px; position:relative; z-index:2; color:var(--cream); }
  .card .name{ margin-top:14px; font-size:16px; font-weight:500; font-family:'Roboto', sans-serif; }
  .card .role{ margin-top:3px; font-size:11px; color:var(--muted); text-transform:uppercase; letter-spacing:0.06em; }
  .card .tag{ position:absolute; top:12px; left:12px; z-index:2; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); border:1px solid rgba(230,185,85,0.4); padding:4px 9px; background:rgba(12,11,13,0.4); }

  .team{background:var(--surface);}
  .dept-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:var(--line); border:1px solid var(--line); }
  @media(max-width:760px){ .dept-grid{grid-template-columns:1fr;} }
  .dept-card{ background:var(--surface); padding:34px 30px; }
  .dept-card h4{ font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:var(--red); font-weight:700; margin-bottom:20px; }
  .person{ display:flex; justify-content:space-between; gap:16px; padding:12px 0; border-top:1px solid var(--line); }
  .person:first-of-type{border-top:none;}
  .person .name{ font-size:15.5px; color:var(--cream); }
  .person .title{ font-size:11px; color:var(--muted); text-transform:uppercase; letter-spacing:0.06em; text-align:right; }

  .brands{background:var(--bg); padding:100px 0;}
  .brands .section-head{margin-bottom:44px;}
  .marquee-track{ overflow:hidden; border-bottom:1px solid var(--line); padding:22px 0; }
  .wrap + .marquee-track{ border-top:1px solid var(--line); }
  .marquee-inner{ display:flex; gap:28px; width:max-content; align-items:center; animation: scroll 70s linear infinite; }
  .marquee-inner.reverse{ animation-direction: reverse; }
  .marquee-track:hover .marquee-inner{ animation-play-state: paused; }
  @keyframes scroll{ from{transform:translateX(0);} to{transform:translateX(-50%);} }
  .brand-logo{ display:flex; align-items:center; justify-content:center; flex-shrink:0; background:#fff; border-radius:10px; height:64px; width:150px; padding:10px 18px; }
  .brand-logo img{ max-height:100%; max-width:100%; object-fit:contain; }

  .capabilities{background:var(--surface); text-align:center;}
  .cap-list{ display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:10px; }
  .cap-pill{ border:1px solid var(--line-strong); padding:12px 24px; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:var(--cream); }

  /* ---- sub-brand strip, VAA-style ---- */
  .subbrands{ background:var(--bg); padding:56px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
  .subbrands .wrap{ display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; }
  .subbrands .lead{ font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); }
  .subbrand-links{ display:flex; gap:32px; flex-wrap:wrap; }
  .subbrand-links a{ font-family:'Roboto', sans-serif; font-size:16px; color:var(--cream); border-bottom:1px solid transparent; padding-bottom:2px; transition:border-color .25s ease, color .25s ease; }
  .subbrand-links a:hover{ color:var(--gold); border-color:var(--gold); }

  footer{background:var(--bg);}
  .contact-cta{ padding:120px 0 90px; text-align:center; }
  .contact-cta h2{ font-size:clamp(34px, 5.4vw, 66px); max-width:760px; margin:0 auto 30px; line-height:1.08; }
  .contact-cta h2 em{color:var(--red); font-style:italic;}
  .footer-grid{ display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:36px; padding:64px 0 46px; border-top:1px solid var(--line); }
  @media(max-width:800px){ .footer-grid{grid-template-columns:1fr 1fr; row-gap:40px;} }
  .footer-grid p{ color:var(--muted); font-size:13px; max-width:260px; margin-top:12px; }
  .footer-col h5{ font-size:10.5px; letter-spacing:0.14em; text-transform:uppercase; color:var(--red); margin-bottom:16px; font-weight:700; }
  .footer-col a{ display:block; color:var(--muted); font-size:13.5px; margin-bottom:10px; transition:color .25s ease; }
  .footer-col a:hover{color:var(--cream);}
  .footer-bottom{ display:flex; justify-content:space-between; align-items:center; padding:24px 0; border-top:1px solid var(--line); font-size:11.5px; color:var(--muted); flex-wrap:wrap; gap:12px; }
` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
