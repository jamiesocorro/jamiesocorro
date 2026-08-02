export const metadata = {
  title: "PPL — We Represent Extraordinary.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
  :root{
    --black:#0b0a08;
    --panel:#141210;
    --gold:#c9a24b;
    --gold-bright:#e8c878;
    --cream:#f5f1e8;
    --muted:#a39c8f;
    --line: rgba(245,241,232,0.12);
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{background:var(--black); color:var(--cream); font-family:'Inter',sans-serif; line-height:1.55; overflow-x:hidden;}
  a{color:inherit; text-decoration:none;}
  img,svg{display:block;}
  .serif{ font-family:'Playfair Display', serif; }
  .wrap{ max-width:1240px; margin:0 auto; padding:0 44px; }
  @media(max-width:640px){ .wrap{padding:0 22px;} }

  /* header */
  header{ position:sticky; top:0; z-index:100; background:rgba(11,10,8,0.9); backdrop-filter:blur(8px); border-bottom:1px solid transparent; transition:border-color .25s ease; }
  header.scrolled{ border-color:var(--line); }
  nav.wrap{ display:flex; align-items:center; justify-content:space-between; padding:22px 44px; }
  @media(max-width:640px){ nav.wrap{padding:16px 22px;} }
  .logo{ display:flex; align-items:baseline; gap:12px; }
  .logo .mark{ font-family:'Playfair Display', serif; font-weight:700; font-size:30px; color:var(--gold); letter-spacing:0.01em; }
  .logo .tagline{ font-size:10px; letter-spacing:0.14em; line-height:1.5; color:var(--muted); text-transform:uppercase; }
  .nav-links{ display:flex; gap:32px; font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; }
  .nav-links a{ color:var(--muted); padding-bottom:6px; border-bottom:1px solid transparent; transition:color .2s ease, border-color .2s ease; }
  .nav-links a:hover{ color:var(--cream); }
  .nav-links a.active{ color:var(--gold); border-color:var(--gold); }
  @media(max-width:900px){ .nav-links{display:none;} }
  .menu-btn{ display:none; flex-direction:column; justify-content:center; gap:5px; width:34px; height:34px; background:none; border:none; cursor:pointer; padding:0; }
  .menu-btn span{ display:block; width:100%; height:1.5px; background:var(--cream); transition:transform .25s ease, opacity .25s ease; }
  .menu-btn.open span:nth-child(1){ transform:translateY(6.5px) rotate(45deg); }
  .menu-btn.open span:nth-child(2){ opacity:0; }
  .menu-btn.open span:nth-child(3){ transform:translateY(-6.5px) rotate(-45deg); }
  @media(max-width:900px){ .menu-btn{display:flex;} .desktop-only{display:none !important;} }
  .mobile-menu{ display:none; flex-direction:column; max-height:0; overflow:hidden; transition:max-height .3s ease; background:var(--black); border-top:1px solid transparent; }
  @media(max-width:900px){ .mobile-menu{display:flex;} }
  .mobile-menu.open{ max-height:420px; border-top-color:var(--line); }
  .mobile-menu a{ padding:16px 44px; font-size:13px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); border-bottom:1px solid var(--line); }
  .mobile-menu a:hover{ color:var(--gold); }
  @media(max-width:640px){ .mobile-menu a{padding:16px 22px;} }
  .pill{ display:inline-flex; align-items:center; gap:8px; padding:11px 22px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; white-space:nowrap; }
  .pill-outline{ border:1px solid var(--gold); color:var(--cream); background:transparent; transition:all .25s ease; }
  .pill-outline:hover{ background:var(--gold); color:var(--black); }
  .pill svg{ width:13px; height:13px; color:var(--gold); }
  .pill-outline:hover svg{ color:var(--black); }

  /* hero */
  .hero{ position:relative; padding:70px 0 60px; }
  .hero-grid{ display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
  @media(max-width:960px){ .hero-grid{grid-template-columns:1fr;} }
  .hero h1{ font-size:clamp(38px,5.4vw,58px); line-height:1.08; font-weight:500; }
  .hero h1 em{ display:block; color:var(--gold); font-style:italic; font-weight:500; }
  .hero-rule{ display:flex; align-items:center; gap:14px; margin:26px 0 18px; color:var(--muted); }
  .hero-rule .line{ width:60px; height:1px; background:var(--line); }
  .hero-rule svg{ width:14px; height:14px; color:var(--gold); }
  .hero .kicker{ font-size:12.5px; letter-spacing:0.24em; text-transform:uppercase; color:var(--cream); font-weight:600; margin-bottom:16px; }
  .hero p.desc{ color:var(--muted); font-size:14.5px; max-width:420px; margin-bottom:30px; }
  .hero-photo{ position:relative; border-radius:6px; overflow:hidden; }
  .hero-photo-img{ width:100%; height:auto; display:block; border-radius:6px; }
  @media(max-width:960px){ .hero-photo{margin-top:30px;} }

  /* services band */
  .services-band{ background:var(--panel); border:1px solid var(--line); border-radius:4px; padding:40px 20px; margin:20px auto 90px; max-width:1240px; display:grid; grid-template-columns:repeat(6,1fr); }
  @media(max-width:960px){ .services-band{grid-template-columns:repeat(3,1fr); gap:32px 0;} }
  @media(max-width:560px){ .services-band{grid-template-columns:repeat(2,1fr);} }
  .service-item{ text-align:center; padding:0 14px; border-left:1px solid var(--line); }
  .service-item:first-child{ border-left:none; }
  @media(max-width:960px){ .service-item{border-left:none;} }
  .service-item .icon{ font-size:28px; margin-bottom:12px; }
  .service-item h4{ font-size:11.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:8px; color:var(--cream); }
  .service-item p{ font-size:11.5px; color:var(--muted); max-width:150px; margin:0 auto; }

  /* section heads */
  section{ padding:0 0 90px; }
  .sec-eyebrow{ display:inline-flex; align-items:center; gap:8px; color:var(--gold); font-size:11.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:14px; }
  .sec-eyebrow svg{ width:13px; height:13px; }

  /* about */
  .about-grid{ display:grid; grid-template-columns:1fr 1fr 0.75fr; gap:44px; align-items:center; }
  @media(max-width:980px){ .about-grid{grid-template-columns:1fr; gap:32px;} }
  .about-copy h2{ font-size:clamp(26px,3.4vw,36px); font-weight:500; line-height:1.2; margin-bottom:16px; }
  .about-copy h2 em{ display:block; color:var(--gold); font-style:italic; }
  .about-copy p{ color:var(--muted); font-size:14px; max-width:420px; margin-bottom:20px; }
  .about-copy .quote{ font-family:'Playfair Display',serif; font-style:italic; font-size:20px; color:var(--gold-bright); border-left:2px solid var(--gold); padding-left:18px; margin:8px 0 26px; max-width:400px; }
  .about-copy .quote cite{ display:block; font-family:'Inter',sans-serif; font-style:normal; font-weight:600; font-size:11px; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
  .set-photo{ aspect-ratio:4/3; border-radius:6px; position:relative; overflow:hidden; border:1px solid var(--line); display:flex; align-items:flex-end; padding:18px; }
  .set-photo.has-photo{ background-image:linear-gradient(0deg, rgba(11,10,8,0.9) 10%, transparent 50%), url('../../PPL.jpg'); background-size:cover; background-position:center top; }
  .set-photo-cap{ color:var(--gold-bright); font-size:10.5px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700; }
  .stats-list{ display:flex; flex-direction:column; gap:18px; }
  .stat-row{ display:flex; align-items:center; gap:16px; padding-bottom:16px; border-bottom:1px solid var(--line); }
  .stat-row:last-child{ border-bottom:none; padding-bottom:0; }
  .stat-row svg{ width:26px; height:26px; color:var(--gold); flex-shrink:0; }
  .stat-row h3{ font-family:'Playfair Display',serif; font-size:26px; font-weight:600; color:var(--cream); }
  .stat-row span{ display:block; font-size:10.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); margin-top:2px; }

  /* talent */
  .talent-head{ display:flex; align-items:center; justify-content:space-between; gap:20px; margin-bottom:36px; flex-wrap:wrap; }
  .talent-head .sec-eyebrow{ margin-bottom:0; }
  .talent-actions{ display:flex; align-items:center; gap:16px; }
  .talent-actions a{ font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); display:inline-flex; align-items:center; gap:6px; transition:color .2s ease; }
  .talent-actions a:hover{ color:var(--gold); }
  .talent-actions a svg{ width:12px; height:12px; }
  .carousel-btn{ width:36px; height:36px; border-radius:50%; border:1px solid var(--line); background:transparent; color:var(--cream); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .2s ease; }
  .carousel-btn:hover{ border-color:var(--gold); color:var(--gold); }
  .carousel-btn svg{ width:15px; height:15px; }
  .tabs{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom:30px; }
  .tab{ padding:9px 18px; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; border:1px solid var(--line); color:var(--muted); background:transparent; border-radius:999px; cursor:pointer; font-family:inherit; transition:all .2s ease; }
  .tab.active, .tab:hover{ background:var(--gold); border-color:var(--gold); color:var(--black); }
  .talent-row{ display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:24px 20px; padding-bottom:6px; }
  .talent-card{ text-align:center; position:relative; }
  .talent-photo{ aspect-ratio:3/4; border-radius:4px; background-size:cover; background-position:center top; filter:grayscale(1) contrast(1.05); transition:filter .3s ease; position:relative; }
  .talent-card:hover .talent-photo{ filter:grayscale(0) contrast(1.02); }
  .talent-tag{ position:absolute; top:10px; left:10px; z-index:2; font-size:9px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:var(--gold-bright); background:rgba(11,10,8,0.75); border:1px solid rgba(232,200,120,0.4); border-radius:999px; padding:3px 9px; }

  /* brands marquee */
  #brands{ padding-bottom:70px; }
  #brands > .wrap{ margin-bottom:24px; }
  .marquee-track{ overflow:hidden; border-bottom:1px solid var(--line); padding:20px 0; }
  .wrap + .marquee-track{ border-top:1px solid var(--line); }
  .marquee-inner{ display:flex; gap:24px; width:max-content; align-items:center; animation: scroll 40s linear infinite; }
  .marquee-inner.reverse{ animation-direction: reverse; }
  .marquee-track:hover .marquee-inner{ animation-play-state: paused; }
  @keyframes scroll{ from{transform:translateX(0);} to{transform:translateX(-50%);} }
  .brand-logo{ display:flex; align-items:center; justify-content:center; flex-shrink:0; background:#fff; border-radius:8px; height:56px; width:130px; padding:10px 16px; }
  .brand-logo img{ max-height:100%; max-width:100%; object-fit:contain; }

  /* team */
  .dept-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:32px; }
  @media(max-width:900px){ .dept-grid{grid-template-columns:repeat(2,1fr);} }
  @media(max-width:600px){ .dept-grid{grid-template-columns:1fr;} }
  .dept-card{ border:1px solid var(--line); border-radius:6px; padding:26px 24px; background:var(--panel); }
  .dept-card h4{ font-size:11.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--gold); font-weight:700; margin-bottom:16px; }
  .dept-person{ display:flex; justify-content:space-between; gap:14px; padding:10px 0; border-top:1px solid var(--line); }
  .dept-person:first-of-type{ border-top:none; }
  .dept-person .dp-name{ font-size:13.5px; color:var(--cream); font-weight:500; }
  .dept-person .dp-title{ font-size:11px; color:var(--muted); text-align:right; }
  .talent-card h4{ font-family:'Playfair Display',serif; font-size:16px; font-weight:600; color:var(--gold-bright); margin-top:14px; }
  .talent-card p{ font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); margin-top:4px; }

  /* featured in */
  .featured{ display:flex; align-items:center; gap:44px; flex-wrap:wrap; border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:34px 0; }
  .featured .sec-eyebrow{ margin-bottom:0; flex-shrink:0; }
  .press-row{ display:flex; gap:40px; flex-wrap:wrap; align-items:center; opacity:0.75; }
  .press-row span{ color:var(--cream); font-size:19px; letter-spacing:0.01em; white-space:nowrap; }
  .press-variety{ font-family:'Playfair Display',serif; font-style:italic; font-weight:600; }
  .press-forbes{ font-family:'Playfair Display',serif; font-weight:800; }
  .press-billboard{ font-family:'Inter',sans-serif; font-weight:800; letter-spacing:-0.02em; }
  .press-vogue{ font-family:'Playfair Display',serif; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; font-size:17px !important; }
  .press-gma{ font-family:'Inter',sans-serif; font-weight:800; letter-spacing:0.04em; }
  .press-mega{ font-family:'Playfair Display',serif; font-style:italic; font-weight:600; }
  .press-rollingstone{ font-family:'Playfair Display',serif; font-style:italic; font-weight:700; }

  /* footer */
  footer{ background:var(--panel); padding:64px 0 0; margin-top:90px; }
  .footer-grid{ display:grid; grid-template-columns:1.3fr 1fr 1fr 1fr 1.1fr; gap:32px; padding-bottom:44px; border-bottom:1px solid var(--line); }
  @media(max-width:900px){ .footer-grid{grid-template-columns:1fr 1fr; row-gap:32px;} }
  @media(max-width:560px){ .footer-grid{grid-template-columns:1fr;} }
  .footer-brand p{ margin-top:14px; font-size:13px; color:var(--muted); max-width:230px; }
  .footer-col h5{ color:var(--gold); font-size:11px; letter-spacing:0.14em; text-transform:uppercase; font-weight:700; margin-bottom:16px; }
  .footer-col a, .footer-col .row{ display:flex; align-items:center; gap:9px; color:var(--muted); font-size:13.5px; margin-bottom:12px; transition:color .2s ease; }
  .footer-col a:hover{ color:var(--cream); }
  .footer-col svg{ width:14px; height:14px; color:var(--gold); flex-shrink:0; }
  .social-row{ display:flex; gap:10px; }
  .social-row a{ width:34px; height:34px; border-radius:50%; border:1px solid var(--gold); display:flex; align-items:center; justify-content:center; color:var(--gold); transition:all .2s ease; }
  .social-row a:hover{ background:var(--gold); color:var(--black); }
  .social-row svg{ width:15px; height:15px; }
  .footer-bottom{ text-align:center; padding:22px 0; font-size:11.5px; color:var(--muted); }
` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
