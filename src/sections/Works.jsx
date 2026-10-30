import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { workCovers } from '../assets';
import { Chip } from '../components/ui/Chip';
import { IconCircle } from '../components/ui/Button';
import { Starburst } from '../components/ui/Decor';
import { works, workFilters } from '../data/portfolioData';
import './Works.css';

export default function Works() {
  const [filter, setFilter] = useState('Semua');
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const list = filter === 'Semua' ? works : works.filter((w) => w.cat === filter);
  const current = list[Math.min(index, list.length - 1)];

  // Reset saat filter berganti
  useEffect(() => {
    setIndex(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [filter]);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(list.length - 1, i));
    const card = el.children[clamped];
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    setIndex(clamped);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardW = el.children[0]?.offsetWidth + 20 || 1;
    setIndex(Math.round(el.scrollLeft / cardW));
  };

  return (
    <section id="works" className="section works">
      <div className="container">
        <div className="section-head">
          <Reveal as="h2" className="h-display-xl">
            Proyek <span className="accent-text">pilihan</span><br />dan studi kasus
          </Reveal>
        </div>

        <Reveal className="works__filters" role="group" aria-label="Filter proyek">
          {workFilters.map((f) => (
            <button key={f} className={`filter-pill ${filter === f ? 'is-active' : ''}`}
              aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="works__viewport container">
        <div className="works__track" ref={trackRef} onScroll={onScroll}
          role="group" aria-roledescription="carousel" aria-label="Daftar proyek">
          {list.map((w, i) => (
            <article key={w.id} className="work-card" style={{ background: w.color }}
              aria-label={`${i + 1} dari ${list.length}: ${w.title}`}>
              <Starburst size={176} color={w.burst} className="work-card__burst" />
              <img src={workCovers[w.slug]} alt="" className="work-card__char" loading="lazy" />
              {w.award && <Chip variant="lime" className="work-card__award">{w.award}</Chip>}
              <div className="work-card__shade" />
              <h3 className="work-card__title">{w.title}</h3>
              <IconCircle tone="white" size={48} label={`Buka studi kasus ${w.title}`} className="work-card__go" />
            </article>
          ))}
        </div>
      </div>

      <div className="container works__controls">
        <button className="arrow-btn" onClick={() => goTo(index - 1)} aria-label="Proyek sebelumnya"><ChevronLeft size={20} /></button>
        <div className="works__dots">
          {list.map((w, i) => (
            <button key={w.id} className={`dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Lihat ${w.title}`} aria-current={i === index} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="arrow-btn" onClick={() => goTo(index + 1)} aria-label="Proyek berikutnya"><ChevronRight size={20} /></button>
      </div>

      {current && (
        <div className="container works__detail" key={current.id} aria-live="polite">
          <div className="works__types">{current.types.map((t) => <Chip key={t} variant="dark">{t}</Chip>)}</div>
          <div className="works__name">
            <h3>{current.title}</h3>
            <IconCircle tone="lime" size={40} label={`Buka ${current.title}`} />
          </div>
          <p className="works__cat">{current.cat}</p>
          <p className="works__desc">{current.desc}</p>
        </div>
      )}
    </section>
  );
}

