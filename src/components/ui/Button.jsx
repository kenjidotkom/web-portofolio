import { ArrowUpRight } from 'lucide-react';

/** variant: primary | outline | ghost  ·  size: md | lg */
export default function Button({ as, href, variant = 'primary', size = 'md', icon, iconRight = true, className = '', children, ...rest }) {
  const Tag = as || (href ? 'a' : 'button');
  const cls = `btn btn--${variant} ${size === 'lg' ? 'btn--lg' : ''} ${className}`;
  const Icon = icon === undefined ? null : icon;
  return (
    <Tag href={href} className={cls} {...rest}>
      {Icon && !iconRight && <Icon size={16} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && <Icon size={size === 'lg' ? 20 : 16} aria-hidden="true" />}
    </Tag>
  );
}

/** Tombol lingkaran berikon panah ↗. tone: lime | white | ink */
export function IconCircle({ tone = 'lime', size = 40, label, href = '#', icon: Icon = ArrowUpRight, className = '', ...rest }) {
  return (
    <a href={href} aria-label={label} className={`icon-circle icon-circle--${tone} ${className}`} style={{ '--ic-size': `${size}px` }} {...rest}>
      <Icon size={20} aria-hidden="true" />
    </a>
  );
}

