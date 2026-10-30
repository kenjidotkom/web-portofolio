/**
 * Ilustrasi karakter bergaya sticker (outline putih).
 * - Beri `src` untuk memakai ilustrasi asli dari Figma (taruh di src/assets/illustrations).
 * - Tanpa `src`, tampil placeholder SVG sederhana.
 */
export default function Character({ src, alt = '', skin = '#f2c9a5', hair = '#1a1a1a', shirt = '#0c0c0c', className = '', style }) {
  if (src) {
    return <img src={src} alt={alt} className={`character ${className}`} style={style} loading="lazy" />;
  }
  return (
    <svg role={alt ? 'img' : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : 'true'}
      className={`character ${className}`} style={style} viewBox="0 0 200 240">
      <path d="M20 240c0-50 35-78 80-78s80 28 80 78z" fill={shirt} />
      <rect x="86" y="130" width="28" height="36" rx="12" fill={skin} />
      <path d="M52 100c0-60 28-80 48-80s48 20 48 80z" fill={hair} />
      <ellipse cx="100" cy="100" rx="42" ry="50" fill={skin} />
      <path d="M58 92c10-34 30-44 42-44s32 10 42 44c-14-14-30-20-42-20s-28 6-42 20z" fill={hair} />
      <circle cx="70" cy="104" r="14" fill="none" stroke="#0c0c0c" strokeWidth="4" />
      <circle cx="130" cy="104" r="14" fill="none" stroke="#0c0c0c" strokeWidth="4" />
      <path d="M84 104h32" stroke="#0c0c0c" strokeWidth="4" />
      <circle cx="70" cy="104" r="4" fill="#0c0c0c" />
      <circle cx="130" cy="104" r="4" fill="#0c0c0c" />
      <path d="M86 130q14 12 28 0" fill="none" stroke="#0c0c0c" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

