// Hero section with floating phone & preview cards

const HeroPhone = ({ t }) => {
  return (
    <div className="phone-stage">
      {/* Subway straps motif */}
      <div className="strap-rail" style={{top: 20}} />
      <div className="strap" style={{left: "20%", top: 20}} />
      <div className="strap" style={{left: "60%", top: 20}} />

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <FeedPreview t={t} />
        </div>
      </div>

      <div className="float-card float-a">
        <span className="dot-accent" />
        <div>
          <div style={{fontWeight: 700}}>{t.previewFeedN}</div>
          <div className="mono">{t.previewFeedTime}</div>
        </div>
      </div>

      <div className="float-card float-b">
        <div style={{width: 28, height: 28, borderRadius: 6, background: "var(--ink)", color: "var(--bg)", display: "grid", placeItems: "center", fontSize: 14}}>📖</div>
        <div>
          <div style={{fontWeight: 700}}>{t.previewNovelChapter}</div>
          <div className="mono">{t.previewNovelReading}</div>
        </div>
      </div>

      <div className="float-card float-c">
        <span style={{fontSize: 16}}>🔒</span>
        <div>
          <div style={{fontWeight: 700, fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--accent)", letterSpacing: "0.06em"}}>BLURRED</div>
          <div className="mono" style={{fontSize: 10}}>공공장소 모드 ON</div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ t }) => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker">
            <span className="pulse" />
            <span>{t.heroStatus}</span>
          </div>
          <h1>
            {t.heroTitleLine1}<br/>
            <span className="accent-underline">{t.heroTitleLine2}</span>
          </h1>
          <div className="hero-sub">
            <p>{t.heroSubA}</p>
            <p><span className="emph">{t.heroSubB}</span></p>
            <p style={{marginTop: 12}}>{t.heroSubC}</p>
          </div>

          <div className="hero-cta-wrap">
            <button className="btn-primary" onClick={() => document.getElementById("final")?.scrollIntoView({behavior: "smooth", block: "start"})}>
              {t.heroCta} <span style={{fontSize: 18}}>→</span>
            </button>
            <div className="cta-meta">
              <span className="mono">{t.heroCtaSub}</span>
              <span>{t.heroCtaNote}</span>
            </div>
          </div>

          <div className="hero-chips">
            <span className="hero-chip">{t.heroChipA}</span>
            <span className="hero-chip">{t.heroChipB}</span>
            <span className="hero-chip">{t.heroChipC}</span>
          </div>
        </div>

        <HeroPhone t={t} />
      </div>
    </section>
  );
};

const Ticker = ({ t }) => {
  const items = [
    { src: "dcinside", ts: "04:02" },
    { src: "fmkorea", ts: "04:08" },
    { src: "theqoo", ts: "04:14" },
    { src: "instiz", ts: "04:19" },
    { src: "ppomppu", ts: "04:26" },
    { src: "nate pann", ts: "04:33" },
    { src: "ruliweb", ts: "04:41" },
    { src: "bobae", ts: "04:48" },
  ];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <span className="ticker-label">{t.tickerLabel} ──────</span>
      <div className="ticker-track">
        {doubled.map((it, i) => (
          <div className="ticker-item" key={i}>
            <span className="dot" />
            <span>{it.src}</span>
            <span className="ts">{it.ts}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Hero, Ticker, HeroPhone });
