import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { Starburst } from '../components/ui/Decor';
import { caraDesain1, caraDesain2, caraDesain3, caraDesain4 } from '../assets';
import { style as s } from '../data/portfolioData';
import './StyleSection.css';

export default function StyleSection() {
  return (
    <section id="style" className="section style-section" data-surface="ink">
      <div className="container container--md">
        {/* Header Section */}
        <div className="style-section__head">
          <div className="style-section__title-box">
            <h2 className="style-section__title">
              {s.titleA}<br />{s.titleB}
            </h2>
            <ArrowDownLeft size={22} className="style-section__arrow-tl" aria-hidden="true" />
          </div>

          <div className="style-section__tagline-wrap">
            <Starburst size={52} color="var(--lime-400)" className="style-section__tagline-burst" />
            <div className="style-section__tagline">
              <p>{s.taglineA}</p>
              <p>{s.taglineB}<span className="accent-text">{s.taglineHl}</span></p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento">
          {/* Baris 1: Quote */}
          <Reveal className="bento__cell bento__quote">
            <img src={caraDesain1} alt="Karakter kamera" className="bento__img bento__img--1" />
            <p className="bento__quote-text">{s.quote}</p>
          </Reveal>

          {/* Baris 2: Process & Visual */}
          <div className="bento__row-2">
            <Reveal delay={80} className="bento__cell bento__process">
              <img src={caraDesain2} alt="Karakter pose peace" className="bento__img bento__img--2" />
              <p className="bento__process-text">{s.process}</p>
            </Reveal>

            <Reveal delay={140} className="bento__cell bento__visual">
              <Starburst size={112} color="var(--lime-400)" className="bento__visual-star" />
              <img src={caraDesain3} alt="Karakter smartphone" className="bento__img bento__img--3" />
            </Reveal>
          </div>

          {/* Baris 3: Handoff */}
          <Reveal delay={80} className="bento__cell bento__handoff">
            <div className="bento__handoff-text">
              <p className="bento__handoff-l1">{s.handoffLine1}</p>
              <p className="bento__handoff-l2">{s.handoffLine2}</p>
            </div>
            <img src={caraDesain4} alt="Ilustrasi mata kacamata" className="bento__img bento__img--4" />
            <ArrowUpRight size={22} className="bento__corner--br" aria-hidden="true" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
