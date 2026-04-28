// DIRECTION 3 — CINEMATIC
// Scrollytelling, deep teal/midnight + bone + sunset accent. Soft serif
// display, generous whitespace, full-bleed image plates, ambient motion
// implied through composition. The "magazine longform" feel.

const D3 = {
  ink:    '#0B1F26',     // deep teal-black
  ink2:   '#13343F',     // ocean
  bone:   '#F2EBDD',     // warm bone
  bone2:  '#E6DCC8',
  sun:    '#E97451',     // burnt sunset
  sun2:   '#F2A65A',
  fg:     '#0B1F26',
  mute:   '#5A6E76',
  display: '"Instrument Serif", "Fraunces", Georgia, serif',
  serif:  '"Fraunces", Georgia, serif',
  sans:   '"Space Grotesk", -apple-system, sans-serif',
  mono:   '"JetBrains Mono", ui-monospace, monospace',
};

function D3Marker({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: D3.mono, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', color: D3.sun }}>
      <span style={{ width: 24, height: 1, background: D3.sun }} />
      {children}
    </div>
  );
}

// Stylised "ocean" placeholder for image plates
function D3Plate({ height = 320, label, accent = D3.ink2 }) {
  return (
    <div style={{ height, background: accent, position: 'relative', overflow: 'hidden' }}>
      {/* horizontal striations like sea */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(180deg, ${D3.bone}05 0 1px, transparent 1px 8px)` }} />
      {/* diagonal foil wake */}
      <svg viewBox="0 0 800 400" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id={`d3p${label?.replace(/\W/g,'')}`} x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor={D3.bone} stopOpacity="0" />
            <stop offset="100%" stopColor={D3.sun} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d={`M0,${400 - 40} Q200,${400 - 60} 400,${400 - 130} T800,${400 - 220}`} stroke={`url(#d3p${label?.replace(/\W/g,'')})`} strokeWidth="2" fill="none" opacity="0.9" />
        <path d={`M0,${400 - 20} Q220,${400 - 50} 420,${400 - 120} T800,${400 - 200}`} stroke={D3.bone} strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
      {/* Sun disc */}
      <div style={{ position: 'absolute', top: '22%', right: '14%', width: 110, height: 110, borderRadius: '50%', background: `radial-gradient(circle at 30% 30%, ${D3.sun2}, ${D3.sun} 60%, ${D3.ink} 100%)`, opacity: 0.85 }} />
      {/* Caption */}
      {label && (
        <div style={{ position: 'absolute', bottom: 16, left: 20, fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: D3.bone, opacity: 0.85 }}>
          ◷ Image plate · {label}
        </div>
      )}
    </div>
  );
}

// Vertical area chart — viewership rising
function D3ViewershipArea() {
  const W = 760, H = 280, P = 40;
  const max = Math.max(...VIEWERSHIP.map(v => v.peak)) * 1.15;
  const xs = (i) => P + (i * (W - 2 * P)) / (VIEWERSHIP.length - 1);
  const ys = (v) => H - P - (v / max) * (H - 2 * P);
  const peakPath = VIEWERSHIP.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ys(v.peak)}`).join(' ');
  const area     = peakPath + ` L${xs(VIEWERSHIP.length - 1)},${H - P} L${xs(0)},${H - P} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="d3area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={D3.sun} stopOpacity="0.55" />
          <stop offset="100%" stopColor={D3.sun} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 0.5, 1].map((p, i) => (
        <line key={i} x1={P} x2={W - P} y1={P + p * (H - 2 * P)} y2={P + p * (H - 2 * P)} stroke={D3.ink} strokeOpacity="0.12" />
      ))}
      <path d={area} fill="url(#d3area)" />
      <path d={peakPath} fill="none" stroke={D3.sun} strokeWidth="2.5" />
      {VIEWERSHIP.map((v, i) => (
        <g key={i}>
          <circle cx={xs(i)} cy={ys(v.peak)} r="5" fill={D3.bone} stroke={D3.sun} strokeWidth="2" />
          <text x={xs(i)} y={ys(v.peak) - 14} fill={D3.ink} fontSize="14" fontFamily={D3.serif} fontWeight="600" textAnchor="middle">{v.peak}M</text>
          <text x={xs(i)} y={H - P + 18} fill={D3.ink} fontSize="11" fontFamily={D3.mono} textAnchor="middle">{v.season}</text>
          <text x={xs(i)} y={H - P + 32} fill={D3.mute} fontSize="9.5" fontFamily={D3.mono} textAnchor="middle">{v.label}</text>
        </g>
      ))}
    </svg>
  );
}

function Direction3Cinematic() {
  return (
    <div className="ab-scroll" style={{ width: '100%', height: '100%', background: D3.bone, color: D3.ink, fontFamily: D3.sans, position: 'relative' }}>

      {/* Top-floating nav */}
      <div style={{ position: 'sticky', top: 0, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 40px', background: D3.bone + 'F2', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${D3.ink}15` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 22, height: 22, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: D3.ink, clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }} />
          </div>
          <span style={{ fontFamily: D3.display, fontSize: 22, letterSpacing: -0.3, lineHeight: 1 }}>Foiling / a case study</span>
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: D3.mono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          {['Brief', 'Story', 'Data', 'Teams', 'Framework', 'Questions', 'Sources'].map((s, i) => (
            <span key={i} style={{ color: i === 1 ? D3.sun : D3.ink, position: 'relative' }}>
              {s}
              {i === 1 && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -6, height: 1, background: D3.sun }} />}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '80px 64px 40px', display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 56, alignItems: 'center' }}>
        <div>
          <D3Marker>Stanford GSB · Working Case · 2026</D3Marker>
          <h1 style={{ fontFamily: D3.display, fontSize: 110, lineHeight: 0.92, letterSpacing: -3, fontWeight: 400, margin: '24px 0 28px' }}>
            Eight seasons<br/>above <em style={{ color: D3.sun }}>the water.</em>
          </h1>
          <p style={{ fontFamily: D3.serif, fontSize: 22, lineHeight: 1.5, color: D3.ink + 'CC', maxWidth: 560, margin: 0, fontWeight: 400 }}>
            A Stanford GSB case study, with Professor George Foster, on how SailGP turned a six-team Ellison experiment into a thirteen-nation league worth $200 million — and what it must do to scale to twenty.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 28, alignItems: 'center', fontFamily: D3.mono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: D3.mute }}>
            <span>Researcher · GSB '26</span>
            <span style={{ width: 16, height: 1, background: D3.ink + '30' }} />
            <span>Advisor · Prof. George Foster</span>
            <span style={{ width: 16, height: 1, background: D3.ink + '30' }} />
            <span>Subject · Russell Coutts</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <D3Plate height={520} label="F50 foiling at speed · Sydney" />
          <div style={{ position: 'absolute', bottom: -24, left: -24, background: D3.ink, color: D3.bone, padding: '20px 24px', maxWidth: 280 }}>
            <div style={{ fontFamily: D3.mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: D3.sun2 }}>Centerpiece</div>
            <div style={{ fontFamily: D3.display, fontSize: 36, lineHeight: 1, letterSpacing: -0.5, marginTop: 8, fontStyle: 'italic' }}>"By outworking the opposition."</div>
            <div style={{ fontFamily: D3.mono, fontSize: 10, marginTop: 12, color: D3.bone + 'AA', letterSpacing: 1 }}>R. COUTTS · TIME · 2024</div>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div style={{ padding: '80px 64px 56px' }}>
        <D3Marker>The case in six numbers</D3Marker>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, marginTop: 24, borderTop: `1px solid ${D3.ink}25`, borderBottom: `1px solid ${D3.ink}25` }}>
          {[
            [STATS.revenue,  STATS.revenueLabel],
            [STATS.viewers,  STATS.viewersLabel],
            [STATS.econ,     STATS.econLabel],
            [STATS.nps,      STATS.npsLabel],
            [STATS.ticketed, STATS.ticketedLabel],
            [STATS.teams,    STATS.teamsLabel],
          ].map(([v, l], i) => (
            <div key={i} style={{ padding: '28px 18px', borderRight: i < 5 ? `1px solid ${D3.ink}15` : 'none' }}>
              <div style={{ fontFamily: D3.display, fontSize: 56, lineHeight: 0.9, letterSpacing: -1.5, color: D3.ink }}>{v}</div>
              <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: D3.mute, marginTop: 12 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 1 — viewership */}
      <div style={{ padding: '40px 64px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 64, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter I</div>
            <h2 style={{ fontFamily: D3.display, fontSize: 64, lineHeight: 0.92, letterSpacing: -2, fontWeight: 400, margin: '14px 0 18px' }}>The audience problem, <em style={{ color: D3.sun }}>solved.</em></h2>
            <p style={{ fontFamily: D3.serif, fontSize: 17, lineHeight: 1.6, color: D3.ink + 'BB' }}>
              Sailing's old problem was television: white triangles on a blue background. F50s at sixty miles an hour, racing inside a city harbour, fixed it. Per-event US viewership has compounded six times in seven seasons.
            </p>
          </div>
          <div>
            <div style={{ background: D3.bone2, padding: 36, position: 'relative' }}>
              <D3ViewershipArea />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18, fontFamily: D3.mono, fontSize: 10, color: D3.mute, textTransform: 'uppercase', letterSpacing: 1.2 }}>
                <span>US viewers · millions · peak per event</span>
                <span>Source · TIME, Sportico, Fast Company</span>
              </div>
            </div>
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
              <div style={{ padding: '18px 0', borderTop: `1px solid ${D3.ink}30` }}>
                <div style={{ fontFamily: D3.display, fontSize: 38, color: D3.sun, lineHeight: 1, letterSpacing: -1 }}>Nov 2023</div>
                <p style={{ fontFamily: D3.serif, fontSize: 14, lineHeight: 1.5, color: D3.ink + 'CC', marginTop: 8 }}>1.78M US viewers for the Spain race on CBS — the most-watched US sailing broadcast since 1992. It outdrew F1 Brazil that same weekend.</p>
              </div>
              <div style={{ padding: '18px 0', borderTop: `1px solid ${D3.ink}30` }}>
                <div style={{ fontFamily: D3.display, fontSize: 38, color: D3.sun, lineHeight: 1, letterSpacing: -1 }}>Nov 2025</div>
                <p style={{ fontFamily: D3.serif, fontSize: 14, lineHeight: 1.5, color: D3.ink + 'CC', marginTop: 8 }}>3.47M for Race to Abu Dhabi. The most-watched sailing race in US history. The "Drive to Survive" docuseries (Uncharted, Apple TV+) launched five months earlier.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote plate */}
      <div style={{ background: D3.ink, color: D3.bone, padding: '90px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <D3Plate height={2400} label="" accent={D3.ink} />
        </div>
        <div style={{ position: 'relative', maxWidth: 980 }}>
          <D3Marker>From the interview archive</D3Marker>
          <blockquote style={{ fontFamily: D3.display, fontSize: 84, lineHeight: 1, fontWeight: 400, fontStyle: 'italic', margin: '28px 0 36px', letterSpacing: -2 }}>
            "I asked Larry the secret to business success. After a long answer, he stopped and said the key is <span style={{ color: D3.sun, fontStyle: 'normal' }}>not giving up.</span>"
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: D3.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>
            <span style={{ width: 40, height: 1, background: D3.sun }} />
            <span>Russell Coutts · TIME magazine · January 2024</span>
          </div>
        </div>
      </div>

      {/* Chapter II — cap table */}
      <div style={{ padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, marginBottom: 48 }}>
          <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter II</div>
          <h2 style={{ fontFamily: D3.display, fontSize: 80, lineHeight: 0.92, letterSpacing: -2.5, fontWeight: 400, margin: '14px 0 20px' }}>The cap table that <em style={{ color: D3.sun }}>built itself.</em></h2>
          <p style={{ fontFamily: D3.serif, fontSize: 19, lineHeight: 1.55, color: D3.ink + 'BB' }}>
            Lasry. Reynolds. Jackman. Hathaway. Mbappé. Vettel. DeVos. Ofer. Törnqvist. Ares. Mubadala. Quantum Pacific. Thirteen teams, thirteen ownership stories, and a quiet pattern: every team that has changed hands has set a new valuation record.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TEAMS.map((t, i) => (
            <div key={i} style={{ background: D3.bone2, padding: 22, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 28, background: t.color }} />
                  <div>
                    <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 1.5, color: D3.mute }}>{t.code}</div>
                    <div style={{ fontFamily: D3.display, fontSize: 22, lineHeight: 1, letterSpacing: -0.4, marginTop: 2 }}>{t.name}</div>
                  </div>
                </div>
                <div style={{ fontFamily: D3.display, fontSize: 28, color: D3.sun, lineHeight: 1, letterSpacing: -0.5 }}>${t.val}M</div>
              </div>
              <div style={{ height: 1, background: D3.ink + '20', margin: '14px 0' }} />
              <div style={{ fontFamily: D3.mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: D3.mute }}>Owners</div>
              <div style={{ fontFamily: D3.serif, fontSize: 14, lineHeight: 1.4, color: D3.ink, marginTop: 4 }}>{t.owners}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14 }}>
                <div>
                  <div style={{ fontFamily: D3.mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: D3.mute }}>Sponsor</div>
                  <div style={{ fontFamily: D3.serif, fontSize: 13, color: D3.ink, marginTop: 2 }}>{t.sponsor}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: D3.mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: D3.mute }}>Titles</div>
                  <div style={{ fontFamily: D3.serif, fontSize: 13, color: t.titles ? D3.sun : D3.mute, marginTop: 2 }}>{t.titles ? '★'.repeat(t.titles) : '—'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter III — Foster framework */}
      <div style={{ background: D3.bone2, padding: '80px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter III</div>
            <h2 style={{ fontFamily: D3.display, fontSize: 72, lineHeight: 0.92, letterSpacing: -2, fontWeight: 400, margin: '14px 0 20px' }}>Foster's <em style={{ color: D3.sun }}>thirteen.</em></h2>
            <p style={{ fontFamily: D3.serif, fontSize: 17, lineHeight: 1.6, color: D3.ink + 'BB' }}>
              The framework from Sports Business Management (3e), applied to SailGP. Each criterion scored 1–5; status flagged where the public record leaves the question open. The strongest pillars are capital and commercial. The softest are governance, talent depth, and the league's own P&L.
            </p>
          </div>
          <div>
            {FRAMEWORK.map((c) => {
              const col = c.status === 'strong' ? D3.ink2 : c.status === 'open' ? D3.sun : D3.mute;
              return (
                <div key={c.n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 90px 60px', gap: 14, alignItems: 'baseline', padding: '16px 0', borderBottom: `1px solid ${D3.ink}15` }}>
                  <div style={{ fontFamily: D3.mono, fontSize: 11, color: D3.mute }}>0{c.n < 10 ? '0' : ''}{c.n}</div>
                  <div>
                    <div style={{ fontFamily: D3.display, fontSize: 22, lineHeight: 1.05, letterSpacing: -0.3 }}>{c.name}</div>
                    <div style={{ fontFamily: D3.serif, fontSize: 13, color: D3.ink + 'AA', marginTop: 4, lineHeight: 1.5 }}>{c.summary}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} style={{ width: 12, height: 22, background: i < c.score ? col : D3.ink + '15' }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: D3.mono, fontSize: 9.5, color: col, textTransform: 'uppercase', letterSpacing: 1.5, textAlign: 'right', fontWeight: 600 }}>{c.status}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chapter IV — Timeline */}
      <div style={{ padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, marginBottom: 48 }}>
          <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter IV</div>
          <h2 style={{ fontFamily: D3.display, fontSize: 80, lineHeight: 0.92, letterSpacing: -2.5, fontWeight: 400, margin: '14px 0 20px' }}>From Ellison's idea<br/>to <em style={{ color: D3.sun }}>thirteen flags.</em></h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 100, top: 12, bottom: 12, width: 1, background: D3.ink + '25' }} />
          {TIMELINE.map((e, i) => {
            const colMap = { founding: D3.ink2, season: D3.ink, 'team-sale': D3.sun, broadcast: D3.ink2, sponsor: D3.ink2, incident: D3.sun, governance: D3.mute };
            const c = colMap[e.cat] || D3.ink;
            return (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '88px 32px 1fr', gap: 12, padding: '14px 0', alignItems: 'baseline' }}>
                <div style={{ fontFamily: D3.mono, fontSize: 11, color: D3.mute, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1, paddingTop: 4 }}>{e.date}</div>
                <div style={{ position: 'relative', height: 22 }}>
                  <div style={{ position: 'absolute', left: 4, top: 4, width: 13, height: 13, borderRadius: '50%', background: D3.bone, border: `2px solid ${c}` }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span style={{ fontFamily: D3.mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: c, fontWeight: 600 }}>{e.cat}</span>
                    <span style={{ fontFamily: D3.display, fontSize: 24, letterSpacing: -0.4 }}>{e.title}</span>
                  </div>
                  <div style={{ fontFamily: D3.serif, fontSize: 14, color: D3.ink + 'AA', marginTop: 4, lineHeight: 1.55, maxWidth: 720 }}>{e.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter V — Comparables */}
      <div style={{ background: D3.ink, color: D3.bone, padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, marginBottom: 48 }}>
          <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter V</div>
          <h2 style={{ fontFamily: D3.display, fontSize: 80, lineHeight: 0.92, letterSpacing: -2.5, fontWeight: 400, margin: '14px 0 20px', color: D3.bone }}>Measured against <em style={{ color: D3.sun }}>everyone.</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {COMPARABLES.map((c, i) => (
            <div key={i} style={{ padding: 22, border: `1px solid ${D3.bone}20` }}>
              <div style={{ fontFamily: D3.mono, fontSize: 9.5, letterSpacing: 1.5, color: D3.bone + '88', textTransform: 'uppercase' }}>Founded {c.founded}</div>
              <div style={{ fontFamily: D3.display, fontSize: 28, lineHeight: 1, letterSpacing: -0.6, marginTop: 6 }}>{c.name}</div>
              <div style={{ fontFamily: D3.mono, fontSize: 10, color: D3.bone + 'AA', marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>{c.parent}</div>
              <div style={{ height: 1, background: D3.bone + '25', margin: '14px 0' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: D3.mono, fontSize: 9, color: D3.bone + '88', textTransform: 'uppercase', letterSpacing: 1 }}>Revenue</div>
                  <div style={{ fontFamily: D3.display, fontSize: 22, color: D3.sun, lineHeight: 1, marginTop: 4 }}>{c.revenue ? `$${(c.revenue / 1000).toFixed(2)}B` : '—'}</div>
                </div>
                <div>
                  <div style={{ fontFamily: D3.mono, fontSize: 9, color: D3.bone + '88', textTransform: 'uppercase', letterSpacing: 1 }}>Events</div>
                  <div style={{ fontFamily: D3.display, fontSize: 22, color: D3.bone, lineHeight: 1, marginTop: 4 }}>{c.events}</div>
                </div>
              </div>
              <div style={{ fontFamily: D3.serif, fontSize: 13, color: D3.bone + 'BB', lineHeight: 1.5, marginTop: 14 }}>{c.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter VI — open questions */}
      <div style={{ padding: '80px 64px' }}>
        <div style={{ maxWidth: 880, marginBottom: 40 }}>
          <div style={{ fontFamily: D3.mono, fontSize: 10, letterSpacing: 2, color: D3.sun, textTransform: 'uppercase' }}>Chapter VI</div>
          <h2 style={{ fontFamily: D3.display, fontSize: 80, lineHeight: 0.92, letterSpacing: -2.5, fontWeight: 400, margin: '14px 0 20px' }}>What the public record <em style={{ color: D3.sun }}>won't say.</em></h2>
          <p style={{ fontFamily: D3.serif, fontSize: 17, lineHeight: 1.6, color: D3.ink + 'BB' }}>
            Twenty-seven questions, organised in ten themes, each cross-checked against five long-form Coutts interviews. This is the working draft of the interview brief.
          </p>
        </div>
        <div>
          {QUESTIONS.map((q, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 110px', gap: 18, alignItems: 'baseline', padding: '22px 0', borderBottom: `1px solid ${D3.ink}15` }}>
              <div style={{ fontFamily: D3.display, fontSize: 38, color: D3.ink + '40', lineHeight: 1, letterSpacing: -1 }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontFamily: D3.display, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.6 }}>{q.theme}</div>
                <div style={{ fontFamily: D3.serif, fontStyle: 'italic', fontSize: 16, color: D3.ink + 'AA', marginTop: 8, lineHeight: 1.5 }}>"{q.q}"</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'inline-block', padding: '4px 10px', background: q.priority === 'high' ? D3.sun : D3.ink + '15', color: q.priority === 'high' ? D3.bone : D3.ink, fontFamily: D3.mono, fontSize: 9.5, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
                  {q.priority} · {q.count} q
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: D3.ink, color: D3.bone + 'AA', padding: '36px 64px', display: 'flex', justifyContent: 'space-between', fontFamily: D3.mono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase' }}>
        <span>Foiling · A Stanford GSB case study</span>
        <span>With Prof. George Foster · v0.07</span>
        <span>Local research instrument · Not for distribution</span>
      </div>

    </div>
  );
}

window.Direction3Cinematic = Direction3Cinematic;
