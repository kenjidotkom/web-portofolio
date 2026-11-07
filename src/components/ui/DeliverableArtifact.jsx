import { useMemo } from 'react';
import {
  ArrowRight, CheckCircle2, Layers, Cpu, Compass, Layout,
  Smartphone, Monitor, GitFork, Play, Sparkles, SlidersHorizontal
} from 'lucide-react';
import { deliverableData } from '../../data/deliverableArtifacts';
import './DeliverableArtifact.css';

/**
 * Mendeteksi tipe artefak berdasarkan judul deliverable atau index
 */
function resolveArtifactKind(title = '', index = 0) {
  const t = title.toLowerCase();
  if (t.includes('flow') || t.includes('alur') || t.includes('journey')) return 'userFlow';
  if (t.includes('architecture') || t.includes('arsitektur') || t.includes('sitemap') || t.includes('struktur')) return 'ia';
  if (t.includes('sketsa') || t.includes('eksplorasi') || t.includes('moodboard') || t.includes('karakter')) return 'sketch';
  if (t.includes('wireframe') || t.includes('layar kunci') || t.includes('lo-fi') || t.includes('hi-fi')) return 'wireframe';
  if (t.includes('system') || t.includes('token') || t.includes('komponen') || t.includes('palet')) return 'designSystem';
  if (t.includes('proto') || t.includes('interaktif') || t.includes('implementasi')) return 'prototype';

  const fallbacks = ['userFlow', 'ia', 'sketch', 'wireframe', 'designSystem', 'prototype'];
  return fallbacks[index % fallbacks.length];
}

export default function DeliverableArtifact({ project, item, index = 0 }) {
  const slug = project?.slug || 'speedlust-garage';
  const data = deliverableData[slug] || deliverableData['speedlust-garage'];
  const kind = useMemo(() => resolveArtifactKind(item?.title, index), [item?.title, index]);

  return (
    <div className={`deliv-art deliv-art--${kind}`} style={{ '--art-accent': project?.color || 'var(--lime-400)' }}>
      {kind === 'userFlow' && <UserFlowArtifact data={data.userFlow} project={project} />}
      {kind === 'ia' && <IaArtifact data={data.ia} project={project} />}
      {kind === 'sketch' && <SketchArtifact data={data.sketch} project={project} />}
      {kind === 'wireframe' && <WireframeArtifact data={data.wireframe} project={project} />}
      {kind === 'designSystem' && <DesignSystemArtifact data={data.designSystem} project={project} />}
      {kind === 'prototype' && <PrototypeArtifact data={data.prototype} project={project} />}
    </div>
  );
}

// 1. USER FLOW ARTIFACT
function UserFlowArtifact({ data, project }) {
  return (
    <div className="art-flow">
      <div className="art-header">
        <span className="art-header__tag">
          <GitFork size={12} aria-hidden="true" /> USER FLOW DIAGRAM
        </span>
        <span className="art-header__status">● Logic Verified</span>
      </div>

      <div className="art-flow__track">
        {data.steps.map((st, i) => (
          <div key={st.num} className="art-flow__node-wrap">
            <div className={`art-flow__node ${i === data.steps.length - 1 ? 'is-goal' : ''}`}>
              <div className="art-flow__node-top">
                <span className="art-flow__num">{st.num}</span>
                <span className="art-flow__step-badge">{i === 0 ? 'START' : i === data.steps.length - 1 ? 'GOAL' : 'STEP'}</span>
              </div>
              <strong className="art-flow__node-title">{st.title}</strong>
              <p className="art-flow__node-desc">{st.desc}</p>
            </div>
            {i < data.steps.length - 1 && (
              <div className="art-flow__arrow" aria-hidden="true">
                <span className="art-flow__arrow-line" />
                <ArrowRight size={13} />
              </div>
            )}
          </div>
        ))}
      </div>

      {data.altBranch && (
        <div className="art-flow__branch">
          <span className="art-flow__branch-badge">Branch: {data.altBranch.label}</span>
          <span className="art-flow__branch-dest">↳ {data.altBranch.dest}</span>
        </div>
      )}
    </div>
  );
}

// 2. INFORMATION ARCHITECTURE (IA) ARTIFACT
function IaArtifact({ data, project }) {
  return (
    <div className="art-ia">
      <div className="art-header">
        <span className="art-header__tag">
          <Layers size={12} aria-hidden="true" /> SITEMAP & HIERARCHY (IA)
        </span>
        <span className="art-header__status">● Tree Architecture</span>
      </div>

      <div className="art-ia__tree">
        {/* Root Node */}
        <div className="art-ia__root">
          <span className="art-ia__root-pill">{project?.title || 'System Root'}</span>
          <span className="art-ia__root-meta">Core Navigation Architecture</span>
        </div>

        {/* Level 1 Sections */}
        <div className="art-ia__branches">
          {data.nodes.map((n) => (
            <div key={n.label} className="art-ia__branch">
              <div className="art-ia__branch-head">
                <strong>{n.label}</strong>
              </div>
              <ul className="art-ia__leaves">
                {n.items.map((it) => (
                  <li key={it} className="art-ia__leaf">
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. SKETCH & LAYOUT EXPLORATION ARTIFACT
function SketchArtifact({ data, project }) {
  return (
    <div className="art-sketch">
      <div className="art-header">
        <span className="art-header__tag">
          <Layout size={12} aria-hidden="true" /> LAYOUT BLUEPRINT & WIRE-SKETCH
        </span>
        <span className="art-header__status">● Low-Fidelity Canvas</span>
      </div>

      <div className="art-sketch__canvas">
        <div className="art-sketch__ruler" aria-hidden="true">
          <span>0px</span>
          <span>480px</span>
          <span>960px</span>
          <span>1440px</span>
        </div>

        <div className="art-sketch__blocks">
          {data.sections.map((sec, i) => (
            <div key={sec} className={`art-sketch__block art-sketch__block--${i}`}>
              <span className="art-sketch__block-label">{sec}</span>
              <div className="art-sketch__block-wire">
                <span className="wire-line wire-line--wide" />
                <span className="wire-line wire-line--short" />
              </div>
            </div>
          ))}
        </div>

        <div className="art-sketch__notes">
          {data.notes.map((note, i) => (
            <div key={i} className="art-sketch__note">
              <span className="art-sketch__note-pin">📌</span>
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. WIREFRAME ARTIFACT
function WireframeArtifact({ data, project }) {
  return (
    <div className="art-wf">
      <div className="art-header">
        <span className="art-header__tag">
          <Compass size={12} aria-hidden="true" /> STRUCTURAL WIREFRAME
        </span>
        <span className="art-header__status">● {data.platform}</span>
      </div>

      <div className="art-wf__frame">
        {/* Browser Topbar */}
        <div className="art-wf__topbar" aria-hidden="true">
          <div className="art-wf__dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="art-wf__url">https://{project?.slug || 'project'}.app</div>
        </div>

        {/* Wireframe Mockup Body */}
        <div className="art-wf__body">
          <div className="art-wf__nav">
            <div className="art-wf__nav-logo">{project?.title || 'Brand'}</div>
            <div className="art-wf__nav-links">
              <span className="wire-bar" />
              <span className="wire-bar" />
              <span className="wire-bar" />
            </div>
          </div>

          <div className="art-wf__hero">
            <div className="art-wf__hero-badge">{data.heroTag}</div>
            <div className="art-wf__hero-title">
              <span className="wire-title wire-title--1" />
              <span className="wire-title wire-title--2" />
            </div>
          </div>

          <div className="art-wf__grid">
            {data.cards.map((c) => (
              <div key={c.title} className="art-wf__card">
                <span className="art-wf__card-badge">{c.badge}</span>
                <strong className="art-wf__card-title">{c.title}</strong>
                <span className="art-wf__card-price">{c.price}</span>
                <span className="art-wf__card-btn">PILIH LAYANAN ↗</span>
              </div>
            ))}
          </div>

          <div className="art-wf__footer-pills">
            {data.bottomPills.map((p) => (
              <span key={p} className="art-wf__pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. DESIGN SYSTEM & TOKEN ARTIFACT
function DesignSystemArtifact({ data, project }) {
  return (
    <div className="art-ds">
      <div className="art-header">
        <span className="art-header__tag">
          <SlidersHorizontal size={12} aria-hidden="true" /> DESIGN SYSTEM & TOKEN UI
        </span>
        <span className="art-header__status">● Tokens Spec</span>
      </div>

      <div className="art-ds__grid">
        {/* Color Palette Tokens */}
        <div className="art-ds__section">
          <span className="art-ds__sec-title">Color Tokens</span>
          <div className="art-ds__swatches">
            {data.palette.map((p) => (
              <div key={p.hex} className="art-ds__swatch">
                <span className="art-ds__swatch-circle" style={{ background: p.hex }} />
                <div className="art-ds__swatch-meta">
                  <strong>{p.name}</strong>
                  <code>{p.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography & Components */}
        <div className="art-ds__section">
          <span className="art-ds__sec-title">Typography Token: {data.font}</span>
          <div className="art-ds__typo">
            <span className="art-ds__typo-spec">Aa Bb Gg 123 · Display 32px · Bold 800</span>
            <span className="art-ds__typo-body">Body 14px / Line-height 1.6 · Medium 500</span>
          </div>

          <span className="art-ds__sec-title art-ds__sec-title--sub">UI Component Tokens</span>
          <div className="art-ds__comps">
            {data.components.map((comp) => (
              <span key={comp} className="art-ds__comp-pill">{comp}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. PROTOTYPE ARTIFACT
function PrototypeArtifact({ data, project }) {
  return (
    <div className="art-proto">
      <div className="art-header">
        <span className="art-header__tag">
          <Play size={12} aria-hidden="true" /> FIGMA INTERACTIVE PROTOTYPE
        </span>
        <span className="art-header__status">● Live Simulator</span>
      </div>

      <div className="art-proto__viewport">
        <div className="art-proto__screen">
          <div className="art-proto__status-bar">
            <span>09:41</span>
            <span className="art-proto__status-icons">LTE · 100% 🔋</span>
          </div>

          <div className="art-proto__content">
            <div className="art-proto__hero">
              <span className="art-proto__badge">{project?.title || 'Interactive Prototype'}</span>
              <p className="art-proto__sub">{data.action}</p>
            </div>

            <div className="art-proto__hotspots">
              {data.hotspots.map((hs, i) => (
                <div key={hs} className="art-proto__hotspot">
                  <span className="art-proto__pulse" />
                  <span className="art-proto__hs-label">{hs}</span>
                </div>
              ))}
            </div>

            <div className="art-proto__footer">
              <span className="art-proto__indicator">● Smart Animate (300ms ease-out)</span>
              <span className="art-proto__play-btn">
                <Play size={11} fill="currentColor" /> Preview Sesi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
