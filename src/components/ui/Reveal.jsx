import { useEffect, useRef, useState } from 'react';

/**
 * Komponen pembungkus animasi saat di-scroll (Reveal).
 *
 * Props:
 * - as: Tag HTML yang dipakai (default 'div')
 * - variant: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale-up' | 'pop' | 'tilt' | 'flip'
 * - delay: Penundaan animasi dalam milidetik (mis. 80, 160)
 * - duration: Durasi kustom animasi dalam milidetik (opsional)
 * - threshold: Ambang batas intersection (default 0.12)
 * - once: Hanya animasi 1x saat pertama terlihat (default true)
 * - className: Kelas tambahan
 * - children: Konten elemen
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  delay = 0,
  duration,
  threshold = 0.12,
  once = true,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let doneTimer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.classList.add('is-visible');
          // Setelah animasi masuk selesai, lepas delay agar hover responsif
          doneTimer = setTimeout(() => el.classList.add('is-done'), delay + (duration || 700) + 80);
          if (once) {
            observer.unobserve(el);
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
          clearTimeout(doneTimer);
          el.classList.remove('is-visible', 'is-done');
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => {
      clearTimeout(doneTimer);
      observer.disconnect();
    };
  }, [threshold, once, delay, duration]);

  const variantClass = variant ? `reveal--${variant}` : '';
  const mergedClass = `reveal ${variantClass} ${className}`.trim();

  const inlineStyles = {
    '--reveal-delay': `${delay}ms`,
    ...(duration ? { '--reveal-duration': `${duration}ms` } : {}),
    ...style,
  };

  return (
    <Tag ref={ref} className={mergedClass} style={inlineStyles} {...rest}>
      {children}
    </Tag>
  );
}
