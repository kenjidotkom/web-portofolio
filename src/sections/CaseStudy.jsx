import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowUpRight, Check, Quote, Target, Search, Lightbulb, Layers,
  Image as ImageIcon, Flag, TrendingUp, MessageCircle, Users, Clock, Monitor, Briefcase,
} from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { Chip, TechBadge } from '../components/ui/Chip';
import { Starburst, Sparkle } from '../components/ui/Decor';
import { workCovers, compCovers } from '../assets';
import { getCase, otherCases } from '../data/caseStudies';
import { person } from '../data/portfolioData';
import { caseHref } from '../hooks/useHashRoute';
import Footer from './Footer';
import './CaseStudy.css';

const covers = { ...workCovers, ...compCovers };

const NAV = [
  { id: 'konteks', label: 'Konteks proyek' },
  { id: 'problem', label: 'Problem statement' },
  { id: 'riset', label: 'Riset & insight' },
  { id: 'solusi', label: 'Solusi & proses' },
  { id: 'deliverables', label: 'Deliverables' },
  { id: 'impact', label: 'Challenge & impact' },
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

function SectionTitle({ icon: Icon, children }) {
  return (
    <Reveal as="h2" className="cs-title">
      <span className="cs-title__icon"><Icon size={20} aria-hidden="true" /></span>
      {children}
    </Reveal>
  );
}

function CheckList({ items }) {
  return (
    <ul className="cs-check">
      {items.map((t) => (
        <li key={t}><span className="cs-check__dot"><Check size={12} strokeWidth={3} /></span><span>{t}</span></li>
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
  const others = otherCases(c.slug, 4);
  const metaItems = [
    { icon: Briefcase, k: 'Peran', v: c.meta.role },
    { icon: Clock, k: 'Durasi', v: c.meta.duration },
    { icon: Users, k: 'Tim', v: c.meta.team },
    { icon: Monitor, k: 'Platform', v: c.meta.platform },
  ];

  return (
    <>
      <main className="cs">
        {/* ===== HERO ===== */}
        <header className="cs-hero">
          <div className="container">
            <a href={back} className="cs-back"><ArrowLeft size={16} aria-hidden="true" /> Semua {c.category === 'Lomba' ? 'lomba' : 'proyek'}</a>

            <div className="cs-hero__chips">
              <Chip variant="lime">{c.kind}</Chip>
              <Chip variant="outline">{c.year}</Chip>
              <Chip variant="outline">{c.badge}</Chip>
            </div>

            <h1 className="cs-hero__title">{c.title}</h1>
            <p className="cs-hero__tagline">{c.tagline}</p>

            <ul className="cs-meta">
              {metaItems.map(({ icon: Icon, k, v }) => (
                <li key={k}>
                  <Icon size={18} aria-hidden="true" />
                  <div><span>{k}</span><strong>{v}</strong></div>
                </li>
              ))}
            </ul>

            <div className="cs-tools" aria-label="Tools yang dipakai">
              <span>Tools</span>
              {c.meta.tools.map((t) => <TechBadge key={t} code={t} />)}
            </div>

            <div className="cs-cover" style={{ background: c.color }}>
              <Starburst size={260} color={c.burst} className="cs-cover__burst" />
              <Sparkle size={56} color="#0c0c0c" className="cs-cover__spark" />
              <img src={covers[c.slug]} alt={`Ilustrasi proyek ${c.title}`} className="cs-cover__char" />
              <span className="cs-cover__label">{c.title}</span>
            </div>
          </div>
        </header>

        {/* ===== BODY ===== */}
        <div className="container cs-layout">
          <aside className="cs-side" aria-label="Daftar isi">
            <p className="cs-side__label">Daftar isi</p>
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <button type="button" data-nav-id={n.id} className={`cs-side__link ${active === n.id ? 'is-active' : ''}`}
                    onClick={() => goTo(n.id)} aria-current={active === n.id ? 'true' : undefined}>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="cs-content">
            {/* --- Konteks --- */}
            <section id="konteks" className="cs-section">
              <SectionTitle icon={Flag}>Konteks proyek</SectionTitle>
              <Reveal as="p" className="cs-lead">{c.context.summary}</Reveal>
              <Reveal className="cs-facts">
                {c.context.facts.map((f) => (
                  <div key={f.k}><span>{f.k}</span><strong>{f.v}</strong></div>
                ))}
              </Reveal>
              <div className="cs-grid-2">
                <Reveal className="cs-card">
                  <h3>Tujuan proyek</h3>
                  <CheckList items={c.context.goals} />
                </Reveal>
                <Reveal className="cs-card" delay={80}>
                  <h3>Ruang lingkup pekerjaanku</h3>
                  <CheckList items={c.context.scope} />
                </Reveal>
              </div>
            </section>

            {/* --- Problem --- */}
            <section id="problem" className="cs-section">
              <SectionTitle icon={Target}>Problem statement</SectionTitle>
              <Reveal as="figure" className="cs-quote">
                <Quote size={40} aria-hidden="true" />
                <blockquote>“{c.problem.quote}”</blockquote>
                <figcaption>Suara pengguna</figcaption>
              </Reveal>
              <div className="cs-grid-2">
                <Reveal className="cs-card">
                  <h3>{c.problem.user.title}</h3>
                  <CheckList items={c.problem.user.points} />
                </Reveal>
                <Reveal className="cs-card" delay={80}>
                  <h3>{c.problem.business.title}</h3>
                  <CheckList items={c.problem.business.points} />
                </Reveal>
              </div>
              <Reveal className="cs-hmw">
                <span>How might we</span>
                <p>{c.problem.hmw}</p>
              </Reveal>
            </section>

            {/* --- Riset --- */}
            <section id="riset" className="cs-section">
              <SectionTitle icon={Search}>Riset & insight</SectionTitle>
              <h3 className="cs-sub">Metode yang dipakai</h3>
              <div className="cs-grid-3">
                {c.research.methods.map((m, i) => (
                  <Reveal key={m.title} className="cs-card cs-card--tight" delay={i * 70}>
                    <span className="cs-num">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </Reveal>
                ))}
              </div>
              <h3 className="cs-sub">Insight kunci</h3>
              <div className="cs-grid-3">
                {c.research.insights.map((m, i) => (
                  <Reveal key={m.title} className="cs-card cs-card--lime" delay={i * 70}>
                    <Lightbulb size={22} aria-hidden="true" />
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* --- Solusi --- */}
            <section id="solusi" className="cs-section">
              <SectionTitle icon={Layers}>Solusi & proses berpikir</SectionTitle>
              <h3 className="cs-sub">Prinsip desain</h3>
              <div className="cs-grid-3">
                {c.solution.principles.map((p, i) => (
                  <Reveal key={p.title} className="cs-card" delay={i * 70}>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </Reveal>
                ))}
              </div>

              <h3 className="cs-sub">Alur proses</h3>
              <ol className="cs-steps">
                {c.solution.process.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 70}>
                    <span className="cs-steps__n">{i + 1}</span>
                    <div><h4>{s.title}</h4><p>{s.desc}</p></div>
                  </Reveal>
                ))}
              </ol>

              <h3 className="cs-sub">Keputusan desain & alasannya</h3>
              <Reveal className="cs-table" role="table" aria-label="Keputusan desain">
                <div className="cs-table__head" role="row"><span role="columnheader">Keputusan</span><span role="columnheader">Mengapa</span></div>
                {c.solution.decisions.map((d) => (
                  <div className="cs-table__row" role="row" key={d.title}>
                    <strong role="cell">{d.title}</strong><p role="cell">{d.why}</p>
                  </div>
                ))}
              </Reveal>

              <h3 className="cs-sub">Persona</h3>
              <Reveal className="cs-persona">
                <div className="cs-persona__img" style={{ background: c.color }}>
                  <img src={covers[c.slug]} alt="" loading="lazy" />
                </div>
                <div className="cs-persona__body">
                  <h4>{c.solution.persona.name}</h4>
                  <p className="cs-persona__role">{c.solution.persona.role}</p>
                  <div className="cs-grid-2 cs-grid-2--inner">
                    <div><h5>Tujuan</h5><CheckList items={c.solution.persona.goals} /></div>
                    <div><h5>Kendala</h5><CheckList items={c.solution.persona.pains} /></div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* --- Deliverables --- */}
            <section id="deliverables" className="cs-section">
              <SectionTitle icon={ImageIcon}>Deliverables</SectionTitle>
              <Reveal as="p" className="cs-lead">Artefak yang dihasilkan sepanjang proyek, dari riset hingga hasil akhir.</Reveal>
              <div className="cs-grid-2">
                {c.deliverables.map((d, i) => (
                  <Reveal as="figure" key={d.title} className="cs-deliv" delay={(i % 2) * 70}>
                    <div className="cs-deliv__frame">
                      {d.img
                        ? <img src={d.img} alt={d.title} loading="lazy" />
                        : (<div className="cs-deliv__ph"><ImageIcon size={28} aria-hidden="true" /><span>Gambar {d.title}</span></div>)}
                    </div>
                    <figcaption><strong>{d.title}</strong><span>{d.caption}</span></figcaption>
                  </Reveal>
                ))}
              </div>

              <h3 className="cs-sub">Palet warna</h3>
              <Reveal className="cs-palette">
                {c.palette.map((p) => (
                  <div key={p.hex} className="cs-swatch">
                    <span style={{ background: p.hex }} />
                    <strong>{p.name}</strong>
                    <code>{p.hex}</code>
                  </div>
                ))}
              </Reveal>

              <h3 className="cs-sub">Tipografi</h3>
              <Reveal className="cs-type">
                <div><span>Display</span><p style={{ fontFamily: `"${c.type.display}", cursive` }}>{c.type.display}</p><small>Aa Bb Cc 123</small></div>
                <div><span>Body</span><p style={{ fontFamily: `"${c.type.body}", sans-serif` }}>{c.type.body}</p><small>Aa Bb Cc 123</small></div>
              </Reveal>
            </section>

            {/* --- Challenge & impact --- */}
            <section id="impact" className="cs-section">
              <SectionTitle icon={TrendingUp}>Challenge & impact</SectionTitle>
              <h3 className="cs-sub">Tantangan & cara menghadapinya</h3>
              <div className="cs-challenges">
                {c.challenges.map((ch, i) => (
                  <Reveal key={ch.title} className="cs-card" delay={i * 70}>
                    <h4>{ch.title}</h4>
                    <p><span className="cs-tag cs-tag--bad">Masalah</span>{ch.problem}</p>
                    <p><span className="cs-tag cs-tag--good">Tindakan</span>{ch.action}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="cs-impact" style={{ background: c.color }}>
                <Starburst size={180} color={c.burst} className="cs-impact__burst" />
                <h3>{c.impact.headline}</h3>
                <ul>
                  {c.impact.metrics.map((m) => (
                    <li key={m.label}><strong>{m.value}</strong><span>{m.label}</span></li>
                  ))}
                </ul>
              </Reveal>

              <h3 className="cs-sub">Refleksi</h3>
              <Reveal className="cs-card">
                <CheckList items={c.impact.reflections} />
              </Reveal>
            </section>
          </div>
        </div>

        {/* ===== PROYEK LAINNYA ===== */}
        <section className="cs-others">
          <div className="container">
            <Reveal as="h2" className="h-display-lg">Proyek <span className="accent-text">lainnya</span></Reveal>
            <ul className="cs-others__grid">
              {others.map((o, i) => (
                <Reveal as="li" key={o.slug} delay={i * 70}>
                  <a href={caseHref(o.slug)} className="cs-other" style={{ background: o.color }}>
                    <Starburst size={120} color={o.burst} className="cs-other__burst" />
                    <img src={covers[o.slug]} alt="" loading="lazy" />
                    <span className="cs-other__title">{o.title}</span>
                    <span className="cs-other__go"><ArrowUpRight size={18} aria-hidden="true" /></span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal className="cs-cta">
              <Sparkle size={36} color="#0c0c0c" className="cs-cta__spark" />
              <h2>Suka dengan cara berpikirku? <span>Yuk, ngobrol!</span></h2>
              <div className="cs-cta__actions">
                <Button href={person.whatsapp} target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Hubungi aku</Button>
                <Button href={back} variant="outline" icon={ArrowUpRight}>Lihat karya lain</Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

