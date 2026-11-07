import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown, Check, Target,
  Image as ImageIcon, Sparkles,
} from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { Chip } from '../components/ui/Chip';
import { Starburst, Sparkle } from '../components/ui/Decor';
import { workCovers, compCovers, charCovers } from '../assets';
import { getCase, getAdjacentCases, otherCases } from '../data/caseStudies';
import { person } from '../data/portfolioData';
import { caseHref } from '../hooks/useHashRoute';
import Footer from './Footer';
import DeliverableArtifact from '../components/ui/DeliverableArtifact';
import './CaseStudy.css';

const covers = { ...workCovers, ...compCovers };

const NAV = [
  { id: 'konteks', num: '01', label: 'Konteks proyek' },
  { id: 'problem', num: '02', label: 'Problem statement' },
  { id: 'solusi', num: '03', label: 'Solusi & proses' },
  { id: 'deliverables', num: '04', label: 'Deliverables' },
  { id: 'impact', num: '05', label: 'Challenges & impact' },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-15% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  useEffect(() => {
    const btn = document.querySelector(`.cs-side__link[data-nav-id="${active}"]`);
    if (btn && btn.scrollIntoView && window.innerWidth <= 1080) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active]);

  return active;
}

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function SectionHead({ num, title, subtitle }) {
  return (
    <Reveal className="cs-sec-head">
      <span className="cs-sec-head__badge">{num}</span>
      <h2 className="cs-title">{title}</h2>
      {subtitle && <p className="cs-sec-head__sub">{subtitle}</p>}
    </Reveal>
  );
}

function CheckList({ items }) {
  return (
    <ul className="cs-check">
      {items.map((t) => (
        <li key={t}>
          <span className="cs-check__dot"><Check size={11} strokeWidth={3} /></span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function PainList({ items }) {
  return (
    <ul className="cs-check cs-check--pain">
      {items.map((t) => (
        <li key={t}>
          <span className="cs-check__pain-dot" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudy({ slug }) {
  const c = getCase(slug);
  const active = useActiveSection(NAV.map((n) => n.id));

  useEffect(() => {
    document.title = c ? `${c.title} — Portofolio Choirun` : 'Portofolio Choirun';
    return () => { document.title = 'Portofolio Choirun'; };
  }, [c]);

  if (!c) {
    return (
      <main className="cs cs--missing">
        <div className="container">
          <h1 className="h-display-lg">Proyek tidak ditemukan</h1>
          <Button href="#works" icon={ArrowUpRight}>Kembali ke proyek</Button>
        </div>
      </main>
    );
  }

  const back = c.category === 'Lomba' ? '#competitions' : '#works';
  const { prev, next } = getAdjacentCases(c.slug);
  const others = otherCases(c.slug, 3);
  const metaItems = [
    { k: 'Peran', v: c.meta.role },
    { k: 'Konteks', v: c.meta.contextLabel || c.badge },
    { k: 'Tahun', v: c.year },
  ];

  const methodPills = c.meta.methodPills || ['Figma', 'UI/UX Design', 'Prototyping', 'Design Thinking'];
  const dtSteps = c.designThinking || [
    { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami kebutuhan, kebiasaan, dan kendala utama pengguna.' },
    { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan problem statement dan menyusun prioritas solusi.' },
    { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Mengeksplorasi solusi, user flow, dan arsitektur informasi.' },
    { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Merancang wireframe, design system, dan antarmuka high-fidelity.' },
    { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji keterbacaan serta alur interaksi bersama pengguna.' },
  ];

  const processDelivs = c.deliverablesProcess || c.deliverables?.slice(0, 4) || [];
  const finalDelivs = c.deliverablesFinal || [
    { title: 'Design System', caption: 'Komponen antarmuka, tipografi, dan sistem visual yang konsisten.' },
    { title: `UI Final — ${c.title}`, caption: 'Tampilan antarmuka akhir dengan alur utama produk.', isFeatured: true },
    { title: 'Prototype Interaktif', caption: 'Simulasi alur layar yang siap diuji dan didemokan.' },
  ];

  const solutionFeatures = c.solution.features || c.solution.decisions?.map((d) => `${d.title} — ${d.why}`) || [];
  const impactHighlights = c.impact.highlights || c.impact.metrics?.map((m) => `${m.value} ${m.label}`) || [];

  return (
    <>
      <main className="cs">
        {/* ===== HERO ===== */}
        <header className="cs-hero">
          <div className="container">
            <a href={back} className="cs-back">
              <ArrowLeft size={15} aria-hidden="true" /> Kembali ke beranda
            </a>

            <div className="cs-hero__chips">
              <Chip variant="lime">{c.kind}</Chip>
              <Chip variant="outline">{c.badge}</Chip>
            </div>

            <h1 className="cs-hero__title">{c.title}</h1>
            <p className="cs-hero__tagline">{c.tagline}</p>

            <ul className="cs-meta">
              {metaItems.map(({ k, v }) => (
                <li key={k}>
                  <span>{k}</span>
                  <strong>{v}</strong>
                </li>
              ))}
            </ul>

            <div className="cs-cover" style={{ '--cover-frame': c.color }}>
              <Starburst size={92} color={c.burst || '#4a3219'} className="cs-cover__burst" />
              <img src={covers[c.slug]} alt={`Mockup proyek ${c.title}`} className="cs-cover__char" />
            </div>

            <div className="cs-quicklinks" aria-label="Pintasan proyek">
              <button type="button" className="cs-quicklink" onClick={() => goTo('ui-final')}>
                <span>Figma prototype</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
              <button type="button" className="cs-quicklink" onClick={() => goTo('konteks')}>
                <span>Dokumentasi</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
              <button type="button" className="cs-quicklink" onClick={() => goTo('deliverables')}>
                <span>Pratinjau layar</span>
                <ArrowDown size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        {/* ===== BODY ===== */}
        <div className="container cs-layout">
          <aside className="cs-side" aria-label="Daftar isi">
            <p className="cs-side__label">Bagian</p>
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    data-nav-id={n.id}
                    className={`cs-side__link ${active === n.id ? 'is-active' : ''}`}
                    onClick={() => goTo(n.id)}
                    aria-current={active === n.id ? 'true' : undefined}
                  >
                    <span className="cs-side__link-text">{n.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="cs-content">
            {/* --- 01. Konteks proyek --- */}
            <section id="konteks" className="cs-section">
              <SectionHead
                num="01"
                title="Konteks proyek"
                subtitle="Latar belakang proyek, sasaran utama, serta peran yang kukerjakan."
              />
              <Reveal as="p" className="cs-lead">{c.context.summary}</Reveal>

              <div className="cs-grid-2">
                <Reveal className="cs-card">
                  <h3>Sasaran utama</h3>
                  <CheckList items={c.context.goals} />
                </Reveal>
                <Reveal className="cs-card" delay={70}>
                  <h3>Peran & kontribusi</h3>
                  <CheckList items={c.context.scope} />
                </Reveal>
              </div>

              <Reveal className="cs-card cs-method-card" delay={100}>
                <h3>Tools & metode yang dipakai</h3>
                <div className="cs-method-pills">
                  {methodPills.map((pill) => (
                    <span key={pill} className="cs-method-pill">{pill}</span>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* --- 02. Problem statement --- */}
            <section id="problem" className="cs-section">
              <SectionHead
                num="02"
                title="Problem statement"
                subtitle="Masalah utama pengguna dan tantangan desain yang ingin diselesaikan."
              />
              <Reveal as="figure" className="cs-quote">
                <Target size={110} className="cs-quote__watermark" aria-hidden="true" />
                <span className="cs-quote__eyebrow">Masalah utama pengguna</span>
                <blockquote>“{c.problem.quote}”</blockquote>
              </Reveal>

              <div className="cs-grid-2">
                <Reveal className="cs-card">
                  <h3>Mengapa masalah ini penting</h3>
                  {c.problem.whyItMatters ? (
                    <p className="cs-card__para">{c.problem.whyItMatters}</p>
                  ) : (
                    <CheckList items={c.problem.user.points} />
                  )}
                </Reveal>
                <Reveal className="cs-card" delay={70}>
                  <h3>Target pengguna & konteks</h3>
                  {c.problem.targetContext ? (
                    <p className="cs-card__para">{c.problem.targetContext}</p>
                  ) : (
                    <CheckList items={c.problem.business.points} />
                  )}
                </Reveal>
              </div>
            </section>

            {/* --- 03. Solusi & proses berpikir --- */}
            <section id="solusi" className="cs-section">
              <SectionHead
                num="03"
                title="Solusi & proses berpikir"
                subtitle="Pendekatan Design Thinking untuk merancang solusi yang tepat sasaran."
              />

              <div className="cs-dt-grid">
                {dtSteps.map((dt, i) => (
                  <Reveal key={dt.step} className="cs-dt-card" delay={i * 55}>
                    <span className="cs-dt-card__badge" style={{ background: dt.color }}>
                      {dt.n}
                    </span>
                    <div className="cs-dt-card__body">
                      <h4>{dt.step}</h4>
                      <p>{dt.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <h3 className="cs-sub">Riset & persona</h3>
              <div className="cs-grid-2">
                <Reveal className="cs-card">
                  <h3>Kebutuhan</h3>
                  <CheckList items={c.solution.persona.goals} />
                </Reveal>
                <Reveal className="cs-card" delay={70}>
                  <h3>Pain points</h3>
                  <PainList items={c.solution.persona.pains} />
                </Reveal>
              </div>

              <Reveal className="cs-persona">
                <div className="cs-persona__img">
                  <img src={charCovers[c.slug] || covers[c.slug]} alt={c.solution.persona.name} loading="lazy" />
                </div>
                <div className="cs-persona__body">
                  <span className="cs-persona__eyebrow">User Persona</span>
                  <h4>{c.solution.persona.name}</h4>
                  <p className="cs-persona__role">{c.solution.persona.role}</p>

                  <div className="cs-persona__facts">
                    <div>
                      <span>Usia</span>
                      <strong>{c.solution.persona.age || '19–25 thn'}</strong>
                    </div>
                    <div>
                      <span>Peran</span>
                      <strong>{c.solution.persona.occupation || 'Pengguna Aktif'}</strong>
                    </div>
                    <div>
                      <span>Lokasi / Konteks</span>
                      <strong>{c.solution.persona.location || c.meta.platform}</strong>
                    </div>
                  </div>

                  <div className="cs-persona__quote">
                    <span className="cs-persona__quote-icon" aria-hidden="true">
                      <Sparkle size={11} color="#0c0c0c" />
                    </span>
                    <p>“{c.solution.persona.quote || c.problem.hmw}”</p>
                  </div>
                </div>
              </Reveal>

              <Reveal className="cs-card cs-solutions-card">
                <h3>Solusi desain</h3>
                <ul className="cs-solutions-grid">
                  {solutionFeatures.map((feat) => (
                    <li key={feat}>
                      <Sparkles size={14} className="cs-solutions-grid__icon" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {/* --- 04. Deliverables --- */}
            <section id="deliverables" className="cs-section">
              <SectionHead
                num="04"
                title="Deliverables"
                subtitle="Artefak yang dihasilkan sepanjang proyek, dari tahap eksplorasi hingga tampilan akhir."
              />

              <h3 className="cs-deliv-group">
                <Sparkle size={15} color="#d9f20e" inline className="decor--inline" />
                <span>Proses desain</span>
              </h3>
              <div className="cs-grid-2">
                {processDelivs.map((d, i) => (
                  <Reveal as="figure" key={d.title} className="cs-deliv" delay={(i % 2) * 60}>
                    <div className="cs-deliv__frame cs-deliv__frame--art">
                      <DeliverableArtifact project={c} item={d} index={i} />
                    </div>
                    <figcaption>
                      <strong>{d.title}</strong>
                      <span>{d.caption}</span>
                    </figcaption>
                  </Reveal>
                ))}
              </div>

              <h3 className="cs-deliv-group">
                <Sparkle size={15} color="#d9f20e" inline className="decor--inline" />
                <span>Hasil akhir</span>
              </h3>
              <div className="cs-final-stack">
                {finalDelivs.map((d, idx) => {
                  if (d.isFeatured) {
                    return (
                      <Reveal as="figure" key={d.title} id="ui-final" className="cs-deliv cs-deliv--featured">
                        <div className="cs-deliv__frame cs-deliv__frame--featured">
                          <img src={covers[c.slug]} alt={d.title} loading="lazy" />
                        </div>
                        <figcaption>
                          <strong>{d.title}</strong>
                          <span>{d.caption}</span>
                        </figcaption>
                      </Reveal>
                    );
                  }
                  return (
                    <Reveal as="figure" key={d.title} className="cs-deliv cs-deliv--half" delay={(idx % 2) * 60}>
                      <div className="cs-deliv__frame cs-deliv__frame--art">
                        <DeliverableArtifact project={c} item={d} index={idx + 4} />
                      </div>
                      <figcaption>
                        <strong>{d.title}</strong>
                        <span>{d.caption}</span>
                      </figcaption>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal className="cs-card cs-palette-card">
                <h3>Palet warna</h3>
                <div className="cs-palette">
                  {c.palette.map((p) => (
                    <div key={p.hex} className="cs-swatch">
                      <span className="cs-swatch__bar" style={{ background: p.hex }} />
                      <code>{p.hex}</code>
                      <small>{p.name}</small>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* --- 05. Challenges & impact --- */}
            <section id="impact" className="cs-section">
              <SectionHead
                num="05"
                title="Challenges & impact"
                subtitle="Tantangan utama selama pengerjaan serta dampak dari solusi yang dirancang."
              />

              <div className="cs-grid-2">
                {c.challenges.slice(0, 2).map((ch, i) => (
                  <Reveal key={ch.title} className="cs-card cs-challenge-card" delay={i * 70}>
                    <span className="cs-challenge-card__num">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{ch.title}</h4>
                    <p>{ch.problem} {ch.action}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="cs-impact-banner">
                <div className="cs-impact-banner__top">
                  <span className="cs-impact-banner__eyebrow">Hasil & Dampak</span>
                  <Sparkle size={18} color="#d9f20e" inline className="decor--inline" />
                </div>
                <h3>{c.impact.headline}</h3>
                <ul className="cs-impact-banner__list">
                  {impactHighlights.map((item) => (
                    <li key={item}>
                      <span className="cs-check__dot"><Check size={11} strokeWidth={3} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="cs-card cs-takeaways-card">
                <h3>Apa yang kupelajari</h3>
                <ul className="cs-takeaways-grid">
                  {c.impact.reflections.map((ref) => (
                    <li key={ref}>{ref}</li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </div>
        </div>

        {/* ===== PREV / NEXT NAVIGATION ===== */}
        <div className="container">
          <nav className="cs-prevnext" aria-label="Navigasi proyek sebelum dan selanjutnya">
            {prev && (
              <a href={caseHref(prev.slug)} className="cs-prevnext__card cs-prevnext__card--prev">
                <span className="cs-prevnext__icon"><ArrowLeft size={16} aria-hidden="true" /></span>
                <div className="cs-prevnext__meta">
                  <span>Sebelumnya</span>
                  <strong>{prev.title}</strong>
                </div>
              </a>
            )}
            {next && (
              <a href={caseHref(next.slug)} className="cs-prevnext__card cs-prevnext__card--next">
                <div className="cs-prevnext__meta">
                  <span>Selanjutnya</span>
                  <strong>{next.title}</strong>
                </div>
                <span className="cs-prevnext__icon"><ArrowRight size={16} aria-hidden="true" /></span>
              </a>
            )}
          </nav>
        </div>

        {/* ===== PROYEK LAINNYA ===== */}
        <section className="cs-others">
          <div className="container">
            <Reveal as="h2" className="cs-others__heading">
              Proyek <span className="accent-text">lainnya</span>
            </Reveal>

            <ul className="cs-others__grid">
              {others.map((o, i) => (
                <Reveal as="li" key={o.slug} delay={i * 70}>
                  <a href={caseHref(o.slug)} className="cs-other-card">
                    <div className="cs-other-card__media" style={{ '--other-bg': o.color }}>
                      <img src={covers[o.slug]} alt={o.title} loading="lazy" />
                    </div>
                    <div className="cs-other-card__body">
                      <div className="cs-other-card__title-row">
                        <h3>{o.title}</h3>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </div>
                      <p>{o.tagline}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal className="cs-cta">
              <div className="cs-cta__content">
                <h2>
                  Suka dengan cara kerjaku? <span>Yuk, ngobrol!</span>
                </h2>
                <div className="cs-cta__actions">
                  <Button href={person.whatsapp} target="_blank" rel="noopener noreferrer" icon={ArrowUpRight}>
                    Hubungi aku
                  </Button>
                </div>
              </div>
              <Starburst size={112} color="#d9f20e" className="cs-cta__burst" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
