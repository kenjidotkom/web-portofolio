import { techBadges } from '../../data/portfolioData';

/** Chip. variant: lime | outline | soft | dark */
export function Chip({ variant = 'lime', className = '', children }) {
  return <span className={`chip chip--${variant} ${className}`}>{children}</span>;
}

/** Lencana teknologi. size: sm (32) | lg (56) */
export function TechBadge({ code, size = 'sm', title }) {
  const t = techBadges[code] || { bg: '#222', fg: '#fff' };
  return (
    <span className={`tech tech--${size}`} style={{ background: t.bg, color: t.fg }} title={title} aria-label={title}>
      {code}
    </span>
  );
}

