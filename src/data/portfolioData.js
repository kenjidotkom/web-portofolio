// ===================================================================
// DATA PORTOFOLIO — edit file ini untuk mengubah isi seluruh website.
// Sumber struktur: docs/design-system/DESIGNSYSTEM.md
// Catatan: bagian bertanda (CONTOH) belum ada di Figma, silakan ganti.
// ===================================================================

import { cvPdf, pdfSoftDev, pdfWebDev, certFinalis5Besar, certHarapan1 } from '../assets';

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
    { value: '4', label: 'Proyek Klien' },
    { value: '2', label: 'Penghargaan' },
  ],
};

export const ribbonWords = ['UI/UX Design', 'User Flow', 'Wireframing', 'Prototyping', 'Design System', 'Front-End', 'React', 'Responsive Web'];

export const workFilters = ['Semua', 'Klien', 'Lomba', 'PKL'];
export const works = [
  { id: 1, slug: 'speedlust-garage', title: 'Speedlust Garage', cat: 'Klien', color: '#153230', burst: '#d9f20e', award: null, types: ['Website', 'Landing Page', 'UI/UX'], desc: 'Website layanan cuci helm profesional (Helmet Washing & Detailing) dan katalog produk perawatan helm terintegrasi.' },
  { id: 2, slug: 'rie-charge', title: 'Rie.Charge', cat: 'Klien', color: '#4e6e3a', burst: '#c9e870', award: null, types: ['Website', 'E-Commerce', 'UI/UX'], desc: 'Website pemesanan Cold Pressed Juice, Fitshot, dan salad segar khas Bogor dengan sistem keranjang PO H-1.' },
  { id: 3, slug: 'poly-board-games', title: 'Poly Board Games', cat: 'Klien', color: '#8b3dff', burst: '#d9f20e', award: null, types: ['Web App', 'Dashboard', 'UI/UX'], desc: 'Dashboard internal manajemen staf, evaluasi kinerja, payroll, food kasbon, dan lembur untuk Poly Games Cafe.' },
  { id: 4, slug: 'visensa', title: 'Visensa', cat: 'Lomba', color: '#0d9488', burst: '#c5e827', award: 'Finalis 5 Besar', types: ['Web App', 'AI Health', 'UI/UX'], desc: 'Platform rehabilitasi tangan pasca-stroke dan terapi nyeri phantom limb berbasis AI Mirror Therapy di browser.' },
  { id: 5, slug: 'akseskota', title: 'AksesKota', cat: 'Lomba', color: '#134e4a', burst: '#2dd4bf', award: 'Harapan 1', types: ['Web & Mobile', 'GIS', 'UI/UX'], desc: 'Direktori fasilitas kota ramah disabilitas dan navigasi rute ramah kursi roda dengan skor aksesibilitas.' },
  { id: 6, slug: 'project-pkl', title: 'Project PKL', cat: 'PKL', color: '#2563eb', burst: '#d9f20e', award: null, types: ['Web & Mobile', 'Dashboard', 'UI/UX'], desc: 'Rangkaian proyek tim PKL SMK: aplikasi sosial mobile, platform psikotes online, dan sistem approval budget perusahaan.' },
  { id: 7, slug: 'aksaralensa', title: 'AksaraLensa', cat: 'Klien', color: '#98a60a', burst: '#4a3219', award: null, types: ['Mobile App', 'Computer Vision', 'UI/UX'], desc: 'Aplikasi pembelajaran dan pengenalan Aksara Jawa berbasis kamera (Computer Vision) yang interaktif untuk generasi muda.' },
  { id: 8, slug: 'naik', title: 'NAIK', cat: 'Klien', color: '#1fb6d5', burst: '#ff8a2a', award: null, types: ['Website', 'GIS', 'UI/UX'], desc: 'Platform Sistem Informasi Geografis (GIS) eksplorasi rute dan trayek angkot Kota Bogor dalam satu peta interaktif.' },
];

export const competitions = {
  titleA: 'Arena',
  titleHl: 'lomba',
  titleB: 'UI/UX',
  desc: 'Tempat aku menguji ide: tantangan nyata, tenggat ketat, dan banyak belajar.',
  items: [
    { n: '01', slug: 'brainspace', title: 'Brainspace', kind: 'Mobile', year: '2025', handle: '@himiunsurya', color: '#f9c932', burst: '#ef7a4c', desc: 'Aplikasi belajar interaktif bergaya gamifikasi bersama maskot Timo: materi, video, kuis, dan achievement.', tags: ['Edutech', 'Gamification'] },
    { n: '02', slug: 'elderlink', title: 'ElderLink', kind: 'Mobile', year: '2025', handle: '@invention.udayana', color: '#233d2c', burst: '#7ca982', desc: 'Aplikasi pendamping lansia: jadwal minum obat terorganisir, kode QR wali keluarga, dan panggilan darurat.', tags: ['Healthcare', 'Accessibility'] },
    { n: '03', slug: 'bansoskita', title: 'BansosKita', kind: 'Mobile', year: '2025', handle: '@fasilkomfest', color: '#6b21a8', burst: '#e11d48', desc: 'Aplikasi pemantauan dan verifikasi bantuan sosial terintegrasi data Dukcapil, BPJS, dan PLN secara transparan.', tags: ['Social Impact', 'GovTech'] },
    { n: '04', slug: 'aurora', title: 'AURORA', kind: 'Mobile', year: '2026', handle: '@ugmfindit', color: '#2563eb', burst: '#facc15', desc: 'Aplikasi skrining awal autisme dan pelacakan tumbuh kembang anak berbasis On-Device AI lewat mini-game interaktif.', tags: ['AI Healthcare', 'Child Dev'] },
    { n: '05', slug: 'agrosupply', title: 'AgroSupply', kind: 'Web', year: '2025', handle: '@technoday_unnes', color: '#16a34a', burst: '#d9f20e', desc: 'Platform pemetaan pasokan pertanian Jawa Barat dan manajemen distribusi langsung dari petani ke pembeli.', tags: ['Agritech', 'GIS Dashboard'] },
    { n: '06', slug: 'apollo', title: 'APOLLO', kind: 'Web', year: '2025', handle: 'PKM-KC IPB', color: '#b6f000', burst: '#f97316', desc: 'Website dan dashboard IoT monitoring reaktor pirolisis pengubah limbah plastik menjadi energi listrik (Waste-to-Energy).', tags: ['Waste-to-Energy', 'IoT Dashboard'] },
  ],
  certsTitleA: 'Sertifikasi &',
  certsTitleHl: 'prestasi',
  driveUrl: 'https://drive.google.com/drive/folders/1bmrBERN2P77b7ih0p_1aRAvtDWuj97mn?usp=sharing',
  certs: [
    { id: 'finalis-5-besar', title: 'Finalis 5 Besar', org: 'Lomba UI/UX Universitas AMIKOM', project: 'Visensa', kind: 'Lomba UI/UX' },
    { id: 'harapan-1', title: 'Harapan 1', org: 'Lomba UI/UX Universitas Jember', project: 'AksesKota', kind: 'Lomba UI/UX' },
  ],
  miniCerts: [
    {
      title: 'Finalis 15 Besar BMC NextGen',
      org: 'Universitas Ciputra Surabaya',
      year: '2026',
      badge: '15 Besar',
    },
    {
      title: 'Tim PDD (Publikasi, Desain & Dok.)',
      org: 'IPB University · MTE, Agridation, IT FEST',
      year: '2025',
      badge: 'Kepanitiaan',
    },
    {
      title: 'Sertifikat Peserta Lomba UI/UX',
      org: 'Kompetisi Desain Mahasiswa Nasional',
      year: '2025 – 2026',
      badge: 'Peserta',
    },
    {
      title: 'Praktik Kerja Lapangan (PKL)',
      org: 'CV. Teknologi Nusantara · UI/UX Designer',
      year: '2023',
      badge: 'Magang PKL',
    },
    {
      title: 'Volunteer Event Bekasi Keren',
      org: 'Pemkot Bekasi & Komunitas Pemuda',
      year: '2022',
      badge: 'Volunteer',
    },
  ],
};

// (CONTOH) — ganti dengan pengalaman asli
export const experience = {
  titleA: 'Perjalanan',
  titleHl: 'ku',
  items: [
    { org: 'Project PKL', period: '2023', role: 'Front-End Developer Intern', desc: 'Membangun dashboard internal dengan React dan berkolaborasi dengan tim desain.' },
    { org: 'Kuliah di IPB', period: '2024', role: 'Teknologi Rekayasa Perangkat Lunak', desc: 'Kuliah di IPB jurusan Teknologi Rekayasa Perangkat Lunak dan sudah mempunyai 4 project.' },
    { org: 'Himpunan Mahasiswa', period: '2024 – Sekarang', role: 'HIMAVO MICRO IT — Staf Desain & Media', desc: 'Merancang materi visual dan dokumentasi untuk 5 event kampus.' },
    { org: 'GDGOC IPB University', period: '2026 – Sekarang', role: 'Media & Creative — Staf / Anggota Aktif', desc: 'Merancang konten visual, materi publikasi, dan aset kreatif sebagai staf/anggota aktif divisi Media & Creative GDGOC IPB University.' },
    { org: 'Freelance', period: '2026 – Sekarang', role: 'Pengajar Coding Scratch', desc: 'Mengajar coding Scratch untuk anak 4 SD secara freelance, mengenalkan logika pemrograman lewat proyek game dan animasi sederhana.' },
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
