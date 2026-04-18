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

          <div className="hero-store-wrap">
            <a className="store-badge google" href="https://play.google.com/store/apps/details?id=io.github.gptinfo.app" target="_blank" rel="noopener noreferrer">
              <svg className="store-badge-icon" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zM19.32 11.2l2.48 1.44c.48.28.48.72 0 1l-2.48 1.44-2.666-2.666L19.32 11.2zM5.864 3.471L16.8 9.804l-2.302 2.302L5.864 3.471z"/></svg>
              <span className="store-badge-text">
                <small>{t.btnGetOnGoogle}</small>
                <b>Google Play</b>
              </span>
            </a>
            <div className="store-badge apple disabled">
              <svg className="store-badge-icon" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="store-badge-text">
                <small>{t.btnStatusIos}</small>
                <b>App Store</b>
              </span>
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
