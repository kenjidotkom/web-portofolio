import { techBadges } from '../../data/portfolioData';
import { BRAND_ICONS } from './BrandIcons';

/** Chip. variant: lime | outline | soft | dark */
export function Chip({ variant = 'lime', className = '', children }) {
  return <span className={`chip chip--${variant} ${className}`}>{children}</span>;
}

/** Lencana teknologi dengan logo otentik. size: sm (32) | lg (56) */
export function TechBadge({ code, size = 'sm', title }) {
  const IconComponent = BRAND_ICONS[code];
  const t = techBadges[code] || { bg: '#222', fg: '#fff' };
  const iconPx = size === 'lg' ? 36 : 20;

  return (
    <span
      className={`tech tech--${size} ${IconComponent ? 'tech--has-brand' : ''}`}
      style={IconComponent ? { background: 'transparent' } : { background: t.bg, color: t.fg }}
      title={title || code}
      aria-label={title || code}
    >
      {IconComponent ? <IconComponent size={iconPx} /> : code}
    </span>
  );
}

