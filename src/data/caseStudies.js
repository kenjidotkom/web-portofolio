import { workCases } from './caseStudiesWorks';
import { compCases } from './caseStudiesComps';

export const caseStudies = [...workCases, ...compCases];

export const getCase = (slug) => caseStudies.find((c) => c.slug === slug);

/** Proyek sebelum & sesudah untuk navigasi Prev/Next di bawah studi kasus. */
export const getAdjacentCases = (slug) => {
  const len = caseStudies.length;
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1 || len === 0) return { prev: null, next: null };
  const prev = caseStudies[(i - 1 + len) % len];
  const next = caseStudies[(i + 1) % len];
  return { prev, next };
};

/** Daftar studi kasus lain untuk bagian “Proyek lainnya”. */
export const otherCases = (slug, n = 3) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const rest = [...caseStudies.slice(i + 1), ...caseStudies.slice(0, Math.max(i, 0))];
  return rest.slice(0, n);
};
