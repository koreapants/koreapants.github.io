// App preview mockups — feed card, novel reader, AV lock

const FeedPreview = ({ t }) => {
  const posts = [
    { tag: "DC · 실시간", title: "소개팅에서 5분 만에 정체 들킨 이유가…", time: "03:42", blur: true },
    { tag: "더쿠 · 연애", title: "남친이 몰래 내 일기 읽고 남긴 반응", time: "04:08", blur: false },
    { tag: "에펨 · 오피스", title: "회식 끝나고 과장님이 보낸 카톡 한 줄", time: "04:21", blur: true },
  ];
  return (
    <>
      <div className="app-bar">
        <div>
          <div className="app-title">오늘의 썰</div>
          <div className="app-meta">{t.previewFeedTime} · {t.previewFeedN}</div>
        </div>
      </div>
      <div className="app-feed">
        {posts.map((p, i) => (
          <div key={i} className={"feed-card " + (p.blur ? "blurred" : "")}>
            <div className="fc-tag">{p.tag}</div>
            <div className="fc-title">{p.title}</div>
            {p.blur && (
              <div className="fc-thumb">
                <div className="mosaic">
                  {Array.from({length: 32}).map((_, k) => <span key={k} />)}
                </div>
              </div>
            )}
            <div className="fc-meta">
              <span>원문 · 디시</span>
              <span>·</span>
              <span>3분 읽기</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const NovelPreview = ({ t }) => {
  const [progress, setProgress] = React.useState(42);
  React.useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => (p >= 78 ? 42 : p + 1));
    }, 220);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="reader-bar">
        <div>
          <div className="chapter">{t.previewNovelChapter}</div>
          <div className="mono">{t.previewNovelReading}</div>
        </div>
        <div className="mono" style={{fontSize: 11, color: "var(--accent)"}}>Aa</div>
      </div>
      <div className="reader-progress" style={{width: progress + "%", top: 66}} />
      <div className="reader-body" style={{marginTop: 4}}>
        <p>퇴근길 지하철은 유난히 조용했다. 창밖으로 흐르는 불빛은 어제와 같은 속도였는데,</p>
        <p>오늘은 그녀의 얼굴이 너무 가까웠다. <span className="red">"이 정거장에서 내려요."</span></p>
        <p>그 말은 분명 안내방송이었지만, 그녀는 이쪽을 보고 있었다. 두 정거장이 남았다.</p>
        <p style={{color: "var(--ink-50)"}}>── 3화 계속 ──</p>
      </div>
      <div className="reader-footer">
        <span>CH. 03 / 06</span>
        <span>★ 4.7 · 3,284명</span>
      </div>
    </>
  );
};

const AvLockPreview = ({ t }) => (
  <div className="av-lock">
    <div className="grid-mosaic">
      {Array.from({length: 12}).map((_, i) => <span key={i} />)}
    </div>
    <div className="badge">COMING SOON</div>
    <h4>AV 한국어 큐레이션</h4>
    <p>{t.previewAvSoon}</p>
    <div style={{fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--ink-50)"}}>
      [ 북마크 동기화 ] [ 취향 추천 ] [ 한국어 정렬 ]
    </div>
  </div>
);

const PhonePreview = ({ variant, t }) => (
  <div className="service-phone">
    <div className="phone-screen">
      {variant === "feed" && <FeedPreview t={t} />}
      {variant === "novel" && <NovelPreview t={t} />}
      {variant === "av" && <AvLockPreview t={t} />}
    </div>
  </div>
);

Object.assign(window, { FeedPreview, NovelPreview, AvLockPreview, PhonePreview });
