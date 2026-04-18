// Problem, Services, Testimonials, FAQ, Final CTA sections

// ─── PROBLEM ────────────────────────────────
const CountUp = ({ target, duration = 1400 }) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting && !seen) setSeen(true); });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  React.useEffect(() => {
    if (!seen) return;
    const n = parseFloat(String(target).replace(/[^\d.]/g, "")) || 0;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(n * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, target, duration]);

  const display = String(target).includes("~")
    ? (seen ? target : "0")
    : String(val);
  return <span ref={ref}>{display}</span>;
};

const Problem = ({ t }) => {
  const cards = [
    { e: t.p1Emoji, title: t.p1Title, quote: t.p1Quote, stat: t.p1Stat, unit: t.p1StatUnit, desc: t.p1StatDesc },
    { e: t.p2Emoji, title: t.p2Title, quote: t.p2Quote, stat: t.p2Stat, unit: t.p2StatUnit, desc: t.p2StatDesc },
    { e: t.p3Emoji, title: t.p3Title, quote: t.p3Quote, stat: t.p3Stat, unit: t.p3StatUnit, desc: t.p3StatDesc },
  ];
  return (
    <section className="section reveal" id="problem">
      <div className="container">
        <header className="section-head">
          <span className="kicker">{t.problemKicker}</span>
          <h2 className="section-title">{t.problemTitle}</h2>
          <p className="section-sub">{t.problemSub}</p>
        </header>
        <div className="problem-grid">
          {cards.map((c, i) => (
            <div className="problem-card" key={i}>
              <div className="p-emoji">{c.e}</div>
              <h3 className="p-title">{c.title}</h3>
              <p className="p-quote">{c.quote}</p>
              <div className="p-stat-row">
                <span className="p-stat"><CountUp target={c.stat} /></span>
                <span className="p-stat-unit">{c.unit}</span>
              </div>
              <div className="p-stat-desc">↳ {c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ───────────────────────────────
const Services = ({ t }) => {
  const [tab, setTab] = React.useState(0);
  const services = [
    { emoji: t.s1Emoji, label: t.tab1, title: t.s1Title, body: t.s1Body,
      bullets: [t.s1B1, t.s1B2, t.s1B3], cta: t.s1Cta, preview: "feed" },
    { emoji: t.s2Emoji, label: t.tab2, title: t.s2Title, body: t.s2Body,
      bullets: [t.s2B1, t.s2B2, t.s2B3], cta: t.s2Cta, preview: "novel" },
    { emoji: t.s3Emoji, label: t.tab3, title: t.s3Title, body: t.s3Body,
      bullets: [t.s3B1, t.s3B2, t.s3B3], cta: t.s3Cta, preview: "av", badge: t.tab3Badge },
  ];
  const cur = services[tab];

  return (
    <section className="section reveal" id="services">
      <div className="container">
        <header className="section-head">
          <span className="kicker">{t.servicesKicker}</span>
          <h2 className="section-title">{t.servicesTitle}</h2>
          <p className="section-sub">{t.servicesSub}</p>
        </header>

        <div className="tabs" role="tablist">
          {services.map((s, i) => (
            <button key={i} role="tab"
              className={"tab " + (tab === i ? "active" : "")}
              onClick={() => setTab(i)}>
              <span className="tab-emoji">{s.emoji}</span>
              <span>{s.label}</span>
              {s.badge && <span className="tab-badge">{s.badge}</span>}
            </button>
          ))}
        </div>

        <div className="service-grid" key={tab}>
          <div className="service-left">
            <h3 className="s-title">{cur.title}</h3>
            <p className="s-body">{cur.body}</p>
            <ul className="s-bullets">
              {cur.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="s-cta">{cur.cta}</div>
          </div>
          <div>
            <PhonePreview variant={cur.preview} t={t} />
          </div>
        </div>

        <div className="maker-note">
          <div className="avatar-stack">
            <div className="avatar">K</div>
            <div className="avatar">J</div>
          </div>
          <div className="mn-text">
            <b>{t.makerNote}</b>
            <small>{t.makerNoteSub}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ───────────────────────────
const Testimonials = ({ t }) => {
  const items = [
    { name: t.t1Name, meta: t.t1Meta, body: t.t1Body, hi: t.t1Highlight },
    { name: t.t2Name, meta: t.t2Meta, body: t.t2Body, hi: t.t2Highlight },
    { name: t.t3Name, meta: t.t3Meta, body: t.t3Body, hi: t.t3Highlight },
  ];
  const [idx, setIdx] = React.useState(0);
  const count = items.length;

  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  const renderBody = (body, hi) => {
    if (!hi || !body.includes(hi)) return body;
    const parts = body.split(hi);
    return <>{parts[0]}<b>{hi}</b>{parts[1]}</>;
  };

  return (
    <section className="section reveal" id="testi">
      <div className="container">
        <header className="section-head">
          <span className="kicker">{t.testiKicker}</span>
          <h2 className="section-title">{t.testiTitle}</h2>
          <p className="section-sub">{t.testiSub}</p>
        </header>

        <div className="testi-wrap">
          <div className="testi-track" style={{transform: `translateX(calc(-${idx} * (100% / 3 + 8px)))`}}>
            {items.map((it, i) => (
              <article className="testi-card" key={i}>
                <p className="body">{renderBody(it.body, it.hi)}</p>
                <div className="meta">
                  <span className="name">{it.name}</span>
                  <span className="sub">{it.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testi-controls">
          <button className="testi-arrow" onClick={() => setIdx(i => (i - 1 + count) % count)}>←</button>
          <button className="testi-arrow" onClick={() => setIdx(i => (i + 1) % count)}>→</button>
          <div className="testi-dots">
            {items.map((_, i) => <div key={i} className={"dot " + (i === idx ? "active" : "")} onClick={() => setIdx(i)} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ────────────────────────────────────
const FAQ = ({ t }) => {
  const items = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section reveal" id="faq">
      <div className="container">
        <header className="section-head">
          <span className="kicker">{t.faqKicker}</span>
          <h2 className="section-title">{t.faqTitle}</h2>
        </header>
        <div className="faq-wrap">
          {items.map((it, i) => (
            <div className={"faq-item " + (open === i ? "open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus" />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FINAL CTA ──────────────────────────────
const FinalCTA = ({ t }) => (
  <section className="final reveal" id="final">
    <div className="container final-inner">
      <div>
        <span className="kicker">{t.finalKicker}</span>
        <h2 className="section-title" style={{marginTop: 12}}>{t.finalTitle}</h2>
        <div className="final-body">
          <p>{t.finalBodyA}</p>
          <p><span className="emph">{t.finalBodyB}</span></p>
          <p>{t.finalBodyC}</p>
        </div>

        <ul className="final-checks">
          <li>{t.finalCheck1}</li>
          <li>{t.finalCheck2}</li>
          <li>{t.finalCheck3}</li>
        </ul>

        <div className="store-buttons">
          <button className="store-btn" disabled>
            <span className="glyph"></span>
            <span className="label-col">
              <small>{t.btnStatus}</small>
              <b>{t.btnAppStore}</b>
            </span>
          </button>
          <button className="store-btn" disabled>
            <span className="glyph">▶</span>
            <span className="label-col">
              <small>{t.btnStatus}</small>
              <b>{t.btnGooglePlay}</b>
            </span>
          </button>
        </div>

        <div className="final-foot">
          <span>{t.finalFoot}</span>
          <span>{t.finalFootSub}</span>
        </div>
      </div>

      <div className="qr-block">
        <div className="qr-img"><div className="qr-fake" /></div>
        <div>
          <div className="mono" style={{marginBottom: 4}}>BETA ACCESS</div>
          <div style={{color: "var(--bg)", fontSize: 14, lineHeight: 1.5}}>
            베타 참여 신청 폼.<br/>QR 스캔 → 이메일 한 줄이면 끝.
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="footer container">
    <div>{t.footerTag}</div>
    <div className="mono" style={{fontSize: 11}}>{t.footerMade}</div>
  </footer>
);

Object.assign(window, { Problem, Services, Testimonials, FAQ, FinalCTA, Footer, CountUp });
