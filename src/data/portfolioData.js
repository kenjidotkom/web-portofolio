// ===================================================================
// DATA PORTOFOLIO — edit file ini untuk mengubah isi seluruh website.
// Sumber struktur: docs/design-system/DESIGNSYSTEM.md
// Catatan: bagian bertanda (CONTOH) belum ada di Figma, silakan ganti.
// ===================================================================

import { cvPdf } from '../assets';

export const person = {
  name: 'Choirun Nisa',
  wordmark: 'CHOIRUN',
  email: 'choirun.pratini@gmail.com',
  phone: '+62-877-5059-7475',
  whatsapp: 'https://wa.me/6287750597475',
  instagram: 'https://instagram.com/seishu1nui/',
  instagramHandle: '@seishu1nui',
  resumeUrl: cvPdf,
  year: 2026,
};

export const navLeft = [
  { id: 'hero', label: 'Beranda' },
  { id: 'works', label: 'Proyek' },
  { id: 'competitions', label: 'Lomba' },
];
export const navRight = [
  { id: 'experience', label: 'Resume' },
  { id: 'about', label: 'Tentang' },
  { id: 'contact', label: 'Kontak' },
];

export const hero = {
  badge: 'Halo, selamat datang!',
  lead: 'Aku',
  highlight: 'Choirun',
  titleRest: 'UI/UX & Front-End',
  paragraph:
    'Mahasiswa TRPL IPB University yang merancang antarmuka berbasis user flow di Figma, lalu belajar membangunya dengan kode.',
  years: '3 tahun',
  subYears: '(50/50 mobile & web)',
  achievements: ['Finalis 5 Besar AMIKOM', 'Harapan 1 Univ. Jember'],
  quote: "Users don't care about what's behind the screen, they care about what's on it.",
  quoteCaption: 'Prinsip desainku',
};

export const techBadges = {
  Fg: { bg: '#2a1540', fg: '#c58bff' },
  HT: { bg: '#3a1405', fg: '#ff7a45' },
  CS: { bg: '#071d3d', fg: '#4aa3ff' },
  JS: { bg: '#332f05', fg: '#ffe14a' },
  Re: { bg: '#06242c', fg: '#5fe0ff' },
  La: { bg: '#3a0a0a', fg: '#ff5c5c' },
  Ps: { bg: '#0b2a4a', fg: '#4cb8ff' },
  Ai: { bg: '#3a1a05', fg: '#ff9a1f' },
  Pr: { bg: '#1b0f3f', fg: '#9d8bff' },
  Ae: { bg: '#16103a', fg: '#b79bff' },
  Bl: { bg: '#3a1d05', fg: '#ff8a2a' },
};

export const services = {
  titleA: 'Fokus yang',
  titleB: 'Aku Tekuni',
  intro: 'Dua bidang yang aku dalami: merancang pengalaman dan membangunnya jadi antarmuka nyata.',
  items: [
    { id: 'uiux', title: 'UI/UX Design', desc: 'Riset, user flow, wireframe hingga prototipe interaktif yang siap diuji pengguna.', tech: ['Fg'], href: '#competitions' },
    { id: 'frontend', title: 'Front-End Dev', desc: 'Mengubah desain jadi antarmuka responsif, aksesibel, dan rapi dengan kode bersih.', tech: ['HT', 'CS', 'JS', 'Re'], href: '#works' },
  ],
  stats: [
    { value: '6', label: 'Lomba UI/UX' },
    { value: '4', label: 'Proyek Portofolio' },
    { value: '2', label: 'Penghargaan' },
  ],
};

export const ribbonWords = ['UI/UX Design', 'Prototyping', 'User Flow', 'Front-End', 'Design System', 'Motion Graphic', 'Video Editing'];

export const workFilters = ['Semua', 'Klien', 'Lomba', 'PKL'];
export const works = [
  { id: 1, slug: 'speedlust-garage', title: 'Speedlust Garage', cat: 'Klien', color: '#d9f20e', burst: '#e8112d', award: null, types: ['Website', 'Landing Page', 'UI Design'], desc: 'Landing page bengkel modifikasi dengan gaya visual berani dan alur pemesanan yang singkat.' },
  { id: 2, slug: 'rie-charge', title: 'Rie.Charge', cat: 'Klien', color: '#f7a8b8', burst: '#d9f20e', award: null, types: ['Website', 'UI Design'], desc: 'Situs layanan isi ulang dengan antarmuka ramah dan alur transaksi yang jelas.' },
  { id: 3, slug: 'poly-board-games', title: 'Poly Board Games', cat: 'Klien', color: '#aeb5f7', burst: '#e8112d', award: null, types: ['Website', 'UI Design'], desc: 'Katalog dan reservasi board game dengan nuansa playful.' },
  { id: 4, slug: 'visensa', title: 'Visensa', cat: 'Lomba', color: '#e8112d', burst: '#d9f20e', award: 'Finalis 5 Besar', types: ['Mobile App', 'UI/UX'], desc: 'Aplikasi mobile hasil lomba UI/UX yang mengantar ke 5 besar nasional.' },
  { id: 5, slug: 'akseskota', title: 'AksesKota', cat: 'Lomba', color: '#ff3a12', burst: '#d9f20e', award: 'Harapan 1', types: ['Mobile App', 'UI/UX'], desc: 'Solusi aksesibilitas fasilitas kota bagi penyandang disabilitas.' },
  { id: 6, slug: 'project-pkl', title: 'Project PKL', cat: 'PKL', color: '#98a60a', burst: '#e8112d', award: null, types: ['Website', 'Dashboard'], desc: 'Dashboard internal yang dibangun saat praktik kerja lapangan.' },
];

export const competitions = {
  titleA: 'Arena',
  titleHl: 'lomba',
  titleB: 'UI/UX',
  desc: 'Tempat aku menguji ide: tantangan nyata, tenggat ketat, dan banyak belajar.',
  items: [
    { n: '01', slug: 'brainspace', title: 'Brainspace', kind: 'Mobile', year: '2025', handle: '@himiunsurya', color: '#f7a8b8', burst: '#2a1540', desc: 'Aplikasi belajar bergaya gamifikasi: mata kuliah, tugas, dan achievement dalam satu tempat.', tags: ['Edutech', 'Gamification'] },
    { n: '02', slug: 'elderlink', title: 'ElderLink', kind: 'Mobile', year: '2025', handle: '@himiunsurya', color: '#d9f20e', burst: '#161616', desc: 'Aplikasi pendamping lansia: jadwal obat, QR akses cepat, dan video call dengan keluarga.', tags: ['Healthcare', 'Accessibility'] },
    { n: '03', slug: 'bansoskita', title: 'BansosKita', kind: 'Mobile', year: '2025', handle: '@himiunsurya', color: '#aeb5f7', burst: '#2a1540', desc: 'Aplikasi penyaluran dan pemantauan bantuan sosial yang aman dan transparan.', tags: ['Social Impact', 'Fintech'] },
    { n: '04', slug: 'aurora', title: 'AURORA', kind: 'Mobile', year: '2026', handle: '@yayasanmuda', color: '#ff3a12', burst: '#d9f20e', desc: 'Aplikasi kesehatan dan kesejahteraan dengan dashboard progress dan pelacak harian.', tags: ['Health', 'Wellbeing'] },
    { n: '05', slug: 'agrosupply', title: 'AgroSupply', kind: 'Web', year: '2025', handle: '@himatepa_ipb', color: '#98a60a', burst: '#e8112d', desc: 'Dashboard pemantauan pasokan pertanian raya/lokal berbasis peta.', tags: ['Agritech', 'Dashboard'] },
    { n: '06', slug: 'apollo', title: 'APOLLO', kind: 'Web', year: '2026', handle: '@itb_aic', color: '#e8112d', burst: '#d9f20e', desc: 'Dashboard monitoring konversi sampah plastik menjadi energi listrik.', tags: ['Waste Tech', 'Cleantech'] },
  ],
  certsTitleA: 'Sertifikasi &',
  certsTitleHl: 'prestasi',
  certs: [
    { id: 'finalis-5-besar', title: 'Finalis 5 Besar', org: 'Lomba UI/UX Universitas AMIKOM', project: 'Visensa', kind: 'Lomba UI/UX' },
    { id: 'harapan-1', title: 'Harapan 1', org: 'Lomba UI/UX Universitas Jember', project: 'AksesKota', kind: 'Lomba UI/UX' },
  ],
};

// (CONTOH) — ganti dengan pengalaman asli
export const experience = {
  titleA: 'Perjalanan',
  titleHl: 'Kerjaku',
  items: [
    { org: 'Project PKL', period: '2025', role: 'Front-End Developer Intern', desc: 'Membangun dashboard internal dengan React dan berkolaborasi dengan tim desain.' },
    { org: 'Kuliah di IPB', period: '2024 – Sekarang', role: 'Teknologi Rekayasa Perangkat Lunak', desc: 'Kuliah di IPB jurusan Teknologi Rekayasa Perangkat Lunak dan sudah mempunyai 4 project.' },
    { org: 'Himpunan Mahasiswa', period: '2024 – 2025', role: 'Staf Desain & Media', desc: 'Merancang materi visual dan dokumentasi untuk 5 event kampus.' },
    { org: 'Komunitas Desain', period: '2023', role: 'Anggota Aktif', desc: 'Mengikuti workshop dan sesi kritik desain mingguan.' },
  ],
};

export const style = {
  titleA: 'Cara Aku',
  titleB: 'Mendesain',
  taglineA: 'Riset, struktur, lalu visual.',
  taglineB: 'Dengan ',
  taglineHl: 'konsistensi.',
  quote: "“Users don’t care about what’s behind the screen, they care about what’s on it.”",
  process: 'User flow dulu, pixel kemudian. Setiap layar harus punya alasan.',
  handoffLine1: 'Desain yang bisa dibangun.',
  handoffLine2: 'Aku belajar front-end supaya handoff-nya nyambung.',
};

export const about = {
  badge: 'Terbuka untuk magang & kerja',
  titleA: 'Tentang',
  titleHl: 'aku',
  paragraph:
    'Aku Choirun Nisa, mahasiswa Teknik dan Rekayasa Perangkat Lunak yang jatuh cinta pada desain antarmuka. Aku suka menjembatani desain dan kode agar produk terasa menyenangkan dipakai.',
  education: [
    { name: 'IPB University', period: '2024 – Sekarang', major: 'TRPL' },
    { name: 'SMK Karya Bahana Mandiri', period: '2021 – 2024', major: 'Multimedia' },
  ],
  stats: [
    { value: '6', label: 'Lomba UI/UX' },
    { value: '4', label: 'Proyek' },
    { value: '5', label: 'Event kampus' },
    { value: '2', label: 'Penghargaan' },
  ],
  skillsTitleA: 'Skills &',
  skillsTitleHl: 'tools',
  skillCategories: [
    {
      name: 'UI/UX Design',
      desc: 'Perancangan antarmuka, alur pengguna, wireframe & sistem desain.',
      skills: [
        { code: 'Fg', name: 'Figma', level: 'Tool utama' },
      ],
    },
    {
      name: 'Front-End Development',
      desc: 'Membangun antarmuka web responsif, interaktif, dan kode bersih.',
      skills: [
        { code: 'HT', name: 'HTML5', level: 'Struktur semantik' },
        { code: 'CS', name: 'CSS3', level: 'Styling & animasi' },
        { code: 'JS', name: 'JavaScript', level: 'Interaktivitas' },
        { code: 'Re', name: 'React', level: 'Komponen modern' },
        { code: 'La', name: 'Laravel', level: 'Dasar web backend' },
      ],
    },
    {
      name: 'Visual, Motion & 3D',
      desc: 'Ilustrasi digital, aset grafis, video editing, motion & elemen 3D.',
      skills: [
        { code: 'Ps', name: 'Photoshop', level: 'Manipulasi visual' },
        { code: 'Ai', name: 'Illustrator', level: 'Desain vektor' },
        { code: 'Pr', name: 'Premiere Pro', level: 'Video editing' },
        { code: 'Ae', name: 'After Effects', level: 'Motion graphics' },
        { code: 'Bl', name: 'Blender', level: 'Pemodelan 3D' },
      ],
    },
  ],
  skills: [
    { code: 'Fg', name: 'Figma', level: 'Tool utama' },
    { code: 'HT', name: 'HTML5', level: 'Struktur semantik' },
    { code: 'CS', name: 'CSS3', level: 'Styling & animasi' },
    { code: 'JS', name: 'JavaScript', level: 'Interaktivitas' },
    { code: 'Re', name: 'React', level: 'Komponen modern' },
    { code: 'La', name: 'Laravel', level: 'Dasar web backend' },
    { code: 'Ps', name: 'Photoshop', level: 'Manipulasi visual' },
    { code: 'Ai', name: 'Illustrator', level: 'Desain vektor' },
    { code: 'Pr', name: 'Premiere Pro', level: 'Video editing' },
    { code: 'Ae', name: 'After Effects', level: 'Motion graphics' },
    { code: 'Bl', name: 'Blender', level: 'Pemodelan 3D' },
  ],
};

export const contact = {
  titleA: 'Punya posisi atau proyek?',
  titleHl: 'Yuk, ngobrol!',
  desc: 'Ceritakan idemu, aku akan membalas secepat mungkin.',
  button: 'Kirim lewat email',
};

export const footer = {
  cta: 'Yuk, bikin sesuatu bareng',
  desc: 'UI/UX Designer & Front-End Developer yang suka membuat produk digital terasa menyenangkan.',
  tagline: 'Dibuat dengan kopi & Figma.',
};
