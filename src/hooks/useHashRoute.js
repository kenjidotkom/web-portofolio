import { useEffect, useState } from 'react';

/**
 * Router hash sederhana (tanpa dependensi tambahan).
 *  - `#/proyek/<slug>`  → halaman detail studi kasus
 *  - selain itu         → beranda (hash lain, mis. `#works`, tetap dipakai sebagai anchor section)
 */
export const caseHref = (slug) => `#/proyek/${slug}`;

function parse(hash) {
  const m = hash.match(/^#\/proyek\/([\w-]+)/);
  return m ? { name: 'case', slug: m[1] } : { name: 'home', anchor: hash.replace(/^#/, '') };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  // Scroll: detail → paling atas; beranda → ke anchor (jika ada) setelah halaman dirender.
  useEffect(() => {
    if (route.name === 'case') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    if (route.anchor) {
      const t = setTimeout(() => {
        document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 30);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [route.name, route.slug, route.anchor]);

  return route;
}

