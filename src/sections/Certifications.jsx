import { useState, useEffect } from 'react';
import { Award, ArrowUpRight, ExternalLink, X, FileText, FolderArchive, Eye, Sparkles } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { Chip } from '../components/ui/Chip';
import { Starburst, Sparkle, Waves } from '../components/ui/Decor';
import { certificationsData as data } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  const [activeCat, setActiveCat] = useState('Semua');
  const [selectedCert, setSelectedCert] = useState(null);

  // Filter daftar sertifikat
  const filteredItems = activeCat === 'Semua'
    ? data.items
    : data.items.filter((it) => it.category === activeCat);

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="section certs-section" data-surface="ink">
      <Waves className="certs-section__waves" />
      <Sparkle size={26} color="var(--lime-400)" className="certs-section__sparkle certs-section__sparkle--tl" />
      <Sparkle size={20} color="#ffffff" className="certs-section__sparkle certs-section__sparkle--tr" />

      <div className="container container--md certs-section__inner">
        {/* Header Section */}
        <div className="section-head certs-section__head">
          <div>
            <Reveal as="div" variant="pop" className="certs-section__badge-wrap">
              <span className="chip chip--lime">{data.badge}</span>
            </Reveal>
            <Reveal as="h2" variant="fade-up" className="h-display-xl certs-section__title">
              {data.titleA} <span className="accent-text">{data.titleHl}</span>
            </Reveal>
          </div>
          <Reveal as="p" variant="fade-up" delay={80} className="section-head__desc certs-section__desc">
            {data.desc}
          </Reveal>
        </div>

        {/* Banner Google Drive Card */}
        <Reveal variant="scale-up" className="certs-drive-banner">
          <Starburst size={200} color="var(--lime-400)" className="certs-drive-banner__burst" />
          <div className="certs-drive-banner__content">
            <div className="certs-drive-banner__icon-box">
              <FolderArchive size={36} strokeWidth={2.2} />
            </div>
            <div className="certs-drive-banner__info">
              <div className="certs-drive-banner__tag">
                <Sparkles size={14} />
                <span>Google Drive Repository</span>
              </div>
              <h3 className="certs-drive-banner__title">Folder Seluruh Sertifikat Asli</h3>
              <p className="certs-drive-banner__text">
                Semua berkas asli, sertifikat resolusi tinggi, dan piagam kelulusan tersimpan rapi dan dapat diunduh langsung dalam format PDF/JPG.
              </p>
            </div>
          </div>
          <div className="certs-drive-banner__action">
            <Button
              href={data.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={ArrowUpRight}
              className="certs-drive-banner__btn"
            >
              Buka Google Drive Lengkap
            </Button>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <div className="certs-filter" role="tablist" aria-label="Filter kategori sertifikasi">
          {data.categories.map((cat) => {
            const count = cat === 'Semua'
              ? data.items.length
              : data.items.filter((it) => it.category === cat).length;
            const isActive = activeCat === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`certs-filter__btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                <span>{cat}</span>
                <span className="certs-filter__count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Kartu Sertifikat */}
        <ul className="certs-grid">
          {filteredItems.map((cert, i) => (
            <Reveal
              as="li"
              key={cert.id}
              variant="tilt"
              delay={(i % 3) * 100}
              className="card-glass certs-item"
            >
              {/* Cover / Gambar Preview */}
              <div
                className="certs-item__cover"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCert(cert); }}
                title={`Klik untuk melihat detail ${cert.title}`}
              >
                {cert.coverImg ? (
                  <img
                    src={cert.coverImg}
                    alt={`Sertifikat ${cert.title}`}
                    className="certs-item__photo"
                    loading="lazy"
                  />
                ) : (
                  <div className="certs-item__doc-art">
                    <Award size={48} strokeWidth={1.8} className="certs-item__doc-icon" />
                    <span className="certs-item__doc-stamp">OFFICIAL</span>
                  </div>
                )}
                <div className="certs-item__overlay">
                  <span className="certs-item__view-pill">
                    <Eye size={16} /> Pratinjau
                  </span>
                </div>
              </div>

              {/* Body Kartu */}
              <div className="certs-item__body">
                <div className="certs-item__chips">
                  <Chip variant={cert.badgeTone || 'lime'}>{cert.badge}</Chip>
                  <Chip variant="outline">{cert.year}</Chip>
                  <span className="certs-item__cat-label">{cert.category}</span>
                </div>

                <h3 className="certs-item__title">{cert.title}</h3>
                <p className="certs-item__org">{cert.org}</p>

                {cert.project && (
                  <div className="certs-item__proj">
                    <span className="certs-item__proj-lbl">Proyek:</span>
                    <strong className="certs-item__proj-val">{cert.project}</strong>
                  </div>
                )}

                <p className="certs-item__desc">{cert.desc}</p>

                {/* Footer Kartu & Aksi */}
                <div className="certs-item__footer">
                  <button
                    type="button"
                    className="btn btn--outline certs-item__btn-preview"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <Eye size={16} /> Lihat Dokumen
                  </button>

                  <a
                    href={cert.pdfUrl || cert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certs-item__drive-link"
                    title={cert.pdfUrl ? "Unduh / Buka PDF" : "Buka di Google Drive"}
                  >
                    {cert.pdfUrl ? <FileText size={18} /> : <ExternalLink size={18} />}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Modal Lightbox Preview */}
      {selectedCert && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
        >
          <div className="cert-modal__box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal__close"
              onClick={() => setSelectedCert(null)}
              aria-label="Tutup pratinjau sertifikat"
            >
              <X size={20} />
            </button>

            <div className="cert-modal__content">
              {/* Bagian Visual */}
              <div className="cert-modal__visual">
                {selectedCert.coverImg ? (
                  <img
                    src={selectedCert.coverImg}
                    alt={selectedCert.title}
                    className="cert-modal__img"
                  />
                ) : (
                  <div className="cert-modal__doc-placeholder">
                    <Award size={64} strokeWidth={1.8} />
                    <span className="cert-modal__doc-title">{selectedCert.title}</span>
                    <span className="cert-modal__doc-org">{selectedCert.org}</span>
                    <span className="cert-modal__doc-badge">{selectedCert.certNo || 'Dokumen Resmi Terverifikasi'}</span>
                  </div>
                )}
              </div>

              {/* Bagian Informasi */}
              <div className="cert-modal__info">
                <div className="cert-modal__chips">
                  <Chip variant={selectedCert.badgeTone || 'lime'}>{selectedCert.badge}</Chip>
                  <Chip variant="outline">{selectedCert.year}</Chip>
                  <span className="chip chip--soft">{selectedCert.category}</span>
                </div>

                <h3 id="cert-modal-title" className="cert-modal__title">
                  {selectedCert.title}
                </h3>
                <p className="cert-modal__org">{selectedCert.org}</p>

                {selectedCert.project && (
                  <div className="cert-modal__meta-row">
                    <span>Terkait Proyek:</span>
                    <strong>{selectedCert.project}</strong>
                  </div>
                )}

                {selectedCert.certNo && (
                  <div className="cert-modal__meta-row">
                    <span>Nomor Dokumen:</span>
                    <code>{selectedCert.certNo}</code>
                  </div>
                )}

                <p className="cert-modal__desc">{selectedCert.desc}</p>

                <div className="cert-modal__actions">
                  {selectedCert.pdfUrl && (
                    <Button
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      icon={FileText}
                      className="cert-modal__btn"
                    >
                      Buka File PDF
                    </Button>
                  )}
                  <Button
                    href={selectedCert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={selectedCert.pdfUrl ? 'outline' : 'primary'}
                    icon={ExternalLink}
                    className="cert-modal__btn"
                  >
                    Buka di Google Drive
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
