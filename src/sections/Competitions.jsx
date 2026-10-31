import { Award, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { compCovers, certCovers, certPdfs } from '../assets';
import { Chip } from '../components/ui/Chip';
import { IconCircle } from '../components/ui/Button';
import Button from '../components/ui/Button';
import { Starburst, Waves, Sparkle } from '../components/ui/Decor';
import { competitions as c } from '../data/portfolioData';
import './Competitions.css';

export default function Competitions() {
  return (
    <section id="competitions" className="section competitions" data-surface="ink">
      <Waves className="competitions__waves" />
      <Sparkle size={24} color="#f6f9dc" className="competitions__sparkle competitions__sparkle--tl" />
      <Sparkle size={18} color="var(--lime-400)" className="competitions__sparkle competitions__sparkle--tr" />
      <div className="container container--md competitions__inner">
        <div className="section-head">
          <Reveal as="h2" className="h-display-xl">
            {c.titleA} <span className="accent-text">{c.titleHl}</span> {c.titleB}
          </Reveal>
          <Reveal as="p" delay={80} className="section-head__desc">{c.desc}</Reveal>
        </div>

        <ul className="competitions__grid">
          {c.items.map((it, i) => (
            <Reveal as="li" key={it.n} delay={(i % 3) * 80} className="card-glass comp-card">
              <div className="comp-card__cover" style={{ background: it.color }}>
                <Starburst size={176} color={it.burst || 'var(--red-500)'} className="comp-card__burst" style={{ left: -40, top: -40 }} />
                <img src={compCovers[it.slug]} alt="" className="comp-card__char" loading="lazy" />
                <span className="comp-card__n">{it.n}</span>
                <IconCircle tone="lime" size={48} label={`Lihat ${it.title}`} className="comp-card__go" />
              </div>
              <div className="comp-card__body">
                <div className="comp-card__meta">
                  <Chip variant="lime">{it.kind}</Chip>
                  <Chip variant="outline">{it.year}</Chip>
                  <span className="comp-card__handle">{it.handle}</span>
                </div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <div className="comp-card__tags">{it.tags.map((t) => <Chip key={t} variant="soft">{t}</Chip>)}</div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal as="h2" className="h-display-lg competitions__certs-title">
          {c.certsTitleA} <span className="accent-text">{c.certsTitleHl}</span>
        </Reveal>
        <ul className="competitions__certs">
          {c.certs.map((cert, i) => {
            const coverImg = certCovers[cert.id];
            const pdfUrl = certPdfs[cert.id];
            return (
              <Reveal as="li" key={cert.title} delay={i * 80} className="card-glass cert-card">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__img"
                  title={`Lihat sertifikat ${cert.title}`}
                >
                  {coverImg ? (
                    <img
                      src={coverImg}
                      alt={`Dokumentasi ${cert.title}`}
                      className={`cert-card__photo cert-card__photo--${cert.id}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="cert-card__placeholder">
                      <Award size={32} aria-hidden="true" />
                      <span>Gambar sertifikat</span>
                    </div>
                  )}
                  <span className="cert-card__zoom-hint" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <div className="cert-card__body">
                  <Chip variant="lime">{cert.kind}</Chip>
                  <h3>{cert.title}</h3>
                  <p className="cert-card__org">{cert.org}</p>
                  <p className="cert-card__proj">Proyek: {cert.project}</p>
                  <Button
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={ArrowUpRight}
                    className="cert-card__btn"
                  >
                    Lihat sertifikat
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

