import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { workCovers } from '../assets';
import { Chip } from '../components/ui/Chip';
import Button, { IconCircle } from '../components/ui/Button';
import { Starburst } from '../components/ui/Decor';
import { works, workFilters } from '../data/portfolioData';
import { caseHref } from '../hooks/useHashRoute';
import './Works.css';

export default function Works() {
  const [filter, setFilter] = useState('Semua');
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);

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
    if (!el || isDownRef.current) return;
    const cardW = el.children[0]?.offsetWidth + 20 || 1;
    setIndex(Math.round(el.scrollLeft / cardW));
  };

  // Drag-to-scroll dengan mouse
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    isDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    el.style.scrollSnapType = 'none';
    el.classList.add('is-dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.25;
    if (Math.abs(walk) > 6) {
      isDraggingRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    const el = trackRef.current;
    if (el) {
      el.style.scrollSnapType = 'x mandatory';
      el.classList.remove('is-dragging');
      const cardW = el.children[0]?.offsetWidth + 20 || 1;
      setIndex(Math.round(el.scrollLeft / cardW));
    }
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  return (
    <section id="works" className="section works">
      <div className="container">
        <div className="section-head">
          <Reveal as="h2" variant="fade-up" className="h-display-xl">
            Proyek <span className="accent-text">pilihan</span><br />dan studi kasus
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={80} className="works__filters" role="group" aria-label="Filter proyek">
          {workFilters.map((f) => (
            <button key={f} className={`filter-pill ${filter === f ? 'is-active' : ''}`}
              aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </Reveal>
      </div>

      <Reveal variant="scale-up" delay={120} className="works__viewport container">
        <div
          className="works__track"
          ref={trackRef}
          onScroll={onScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          role="group"
          aria-roledescription="carousel"
          aria-label="Daftar proyek"
        >
          {list.map((w, i) => (
            <article key={w.id} className="work-card" style={{ background: w.color }}
              aria-label={`${i + 1} dari ${list.length}: ${w.title}`}
              onClick={(e) => {
                if (isDraggingRef.current) {
                  e.preventDefault();
                  return;
                }
                window.location.hash = caseHref(w.slug);
              }}>
              <img src={workCovers[w.slug]} alt={w.title} className="work-card__char" loading="lazy" draggable={false} />
              {w.award && <Chip variant="lime" className="work-card__award">{w.award}</Chip>}
              <div className="work-card__shade" />
              <h3 className="work-card__title">{w.title}</h3>
              <IconCircle tone="white" size={44} href={caseHref(w.slug)} label={`Buka studi kasus ${w.title}`} className="work-card__go" onClick={(e) => {
                if (isDraggingRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                e.stopPropagation();
              }} />
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal variant="fade-up" delay={100} className="container works__controls">
        <button className="arrow-btn" onClick={() => goTo(index - 1)} aria-label="Proyek sebelumnya"><ChevronLeft size={20} /></button>
        <div className="works__dots">
          {list.map((w, i) => (
            <button key={w.id} className={`dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Lihat ${w.title}`} aria-current={i === index} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="arrow-btn" onClick={() => goTo(index + 1)} aria-label="Proyek berikutnya"><ChevronRight size={20} /></button>
      </Reveal>

      {current && (
        <Reveal variant="fade-up" delay={120} className="container works__detail" key={current.id} aria-live="polite">
          <div className="works__types">{current.types.map((t) => <Chip key={t} variant="dark">{t}</Chip>)}</div>
          <div className="works__name">
            <h3>{current.title}</h3>
            <IconCircle tone="lime" size={40} href={caseHref(current.slug)} label={`Buka ${current.title}`} />
          </div>
          <p className="works__cat">{current.cat}</p>
          <p className="works__desc">{current.desc}</p>
          <Button href={caseHref(current.slug)} icon={ArrowUpRight} className="works__case-btn">Baca studi kasus</Button>
        </Reveal>
      )}
    </section>
  );
}

