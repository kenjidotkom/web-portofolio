// ===================================================================
// STUDI KASUS — ARENA LOMBA UI/UX
// Seluruh konteks, fitur, persona, dan palet warna disesuaikan langsung
// dengan mockup asli pada folder src/assets/cover project/
// ===================================================================

const lombaBase = (o) => ({
  category: 'Lomba',
  badge: o.badge || 'Lomba UI/UX',
  ...o,
});

export const compCases = [
  lombaBase({
    slug: 'brainspace',
    title: 'Brainspace',
    tagline: 'Aplikasi belajar interaktif bergaya gamifikasi bersama maskot Timo yang menyatukan materi pelajaran, video kursus, kuis, dan achievement.',
    kind: 'UI/UX Design',
    year: '2025',
    badge: 'Lomba Team Project @himiunsurya · 2025',
    color: '#f9c932',
    burst: '#ef7a4c',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project @himiunsurya',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (@himiunsurya)',
      platform: 'Mobile App (iOS & Android)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'Edutech', 'Gamification', 'Mascot Design', 'Prototyping'],
    },
    context: {
      summary:
        'Brainspace adalah proyek tim untuk kompetisi UI/UX Mobile yang diselenggarakan oleh @himiunsurya. Pelajar dan mahasiswa sering merasa jenuh saat belajar mandiri karena materi video, daftar tugas/kuis, dan progres mata pelajaran tersebar di tempat berbeda. Bersama karakter maskot Timo, Brainspace menyatukan kelas mata pelajaran (B. Indonesia, Biology, Computer, Economics, Math), video pembelajaran ber-timestamp, kuis harian, mini-game edukatif, serta lencana pencapaian (Achievement) dalam satu aplikasi yang ceria.',
      facts: [
        { k: 'Penyelenggara', v: 'Lomba UI/UX @himiunsurya' },
        { k: 'Tema', v: 'Edutech & Gamified Mobile Learning' },
        { k: 'Jenis produk', v: 'Aplikasi Mobile Pembelajaran Interaktif' },
        { k: 'Maskot', v: 'Timo (Teman Belajar Interaktif)' },
      ],
      goals: [
        'Menyatukan daftar mata pelajaran (Subjects), tugas/kuis (Tasks), dan kelas video (My Course) dalam satu beranda yang rapi.',
        'Menghadirkan jeda belajar yang menyenangkan lewat fitur mini-game ("Tired of Studying? Let’s Play a Game with Timo!").',
        'Memotivasi konsistensi belajar melalui kalender streak mingguan, sistem Ranking, dan koleksi lencana Achievement.',
      ],
      scope: [
        'Riset kebiasaan belajar pelajar/mahasiswa & faktor kejenuhan belajar daring',
        'Perancangan karakter maskot Timo dan palet warna hangat yang ramah',
        'Desain UI untuk Onboarding, Home, Class/Subjects, Video Course Player, Progress, dan Profile Achievement',
        'Pembuatan prototipe interaktif untuk presentasi lomba @himiunsurya',
      ],
    },
    problem: {
      quote: 'Saat belajar sendiri lewat aplikasi, materinya terasa monoton dan aku cepat bosan karena tidak ada variasi interaksi maupun progres yang terasa seru.',
      whyItMatters:
        'Motivasi belajar mandiri sangat dipengaruhi oleh suasana antarmuka. Ketika materi disajikan dalam potongan video ber-timestamp yang jelas dan diselingi kuis serta permainan singkat, retensi belajar meningkat.',
      targetContext:
        'Pelajar SMA dan mahasiswa tahun pertama yang mempelajari berbagai mata pelajaran (Ekonomi, Biologi, Matematika, Komputer, Bahasa) lewat perangkat mobile.',
      user: {
        title: 'Masalah yang dialami pelajar',
        points: [
          'Video materi berdurasi panjang sulit dinavigasi ulang jika tidak memiliki penanda waktu (timestamps) per subtopik.',
          'Daftar pekerjaan rumah (Homework) dan kuis (Math Quizzes) sering terlupa karena terpisah dari halaman materi.',
          'Kurangnya apresiasi visual atas konsistensi belajar harian membuat motivasi cepat turun.',
        ],
      },
      business: {
        title: 'Tantangan desain gamifikasi',
        points: [
          'Menjaga keseimbangan agar elemen gamifikasi (Timo, Badge, Ranking) mendukung fokus belajar, bukan mengalihkan perhatian.',
          'Menata banyak mata pelajaran dengan identitas warna dan ikon yang mudah dibedakan sekilas.',
          'Menyajikan progres tiap sub-materi (mis. Macroeconomics 80%, Microeconomics 30%) secara bersih dan jelas.',
        ],
      },
      hmw: 'Bagaimana kami merancang aplikasi belajar mobile yang terasa hangat, terstruktur dari video hingga kuis, dan menjaga semangat belajar lewat gamifikasi yang bermakna?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Menggali penyebab kebosanan pelajar saat menonton video materi dan mengerjakan tugas di ponsel.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menetapkan 4 pilar pengalaman: navigasi mata pelajaran jelas, video ber-timestamp, jeda game Timo, & badge.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang karakter maskot Timo, kartu Subjects warna-warni, tab Info/Discussion di video, dan lencana heksagonal.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun 6 layar utama berfidelitas tinggi dengan palet kuning hangat, koral, dan hijau mint.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji kemudahan berpindah dari beranda tugas menuju pemutar video Microeconomics dan halaman profil.' },
    ],
    research: {
      methods: [
        { title: 'Survei kebiasaan belajar', desc: 'Memetakan cara pelajar mengelola materi video, latihan soal, dan jadwal kuis harian.' },
        { title: 'Benchmark aplikasi Edutech', desc: 'Mempelajari mekanik streak, pembagian bab video, dan penggunaan maskot pendamping.' },
        { title: 'Eksplorasi visual karakter', desc: 'Merancang ekspresi maskot Timo agar terasa bersahabat bagi pelajar dan mahasiswa.' },
      ],
      insights: [
        { title: 'Timestamp video sangat membantu review', desc: 'Daftar waktu (00:00 Intro, 00:57 Definition, 02:04 Basic Concepts) memudahkan pelajar melompat ke bagian penting.' },
        { title: 'Jeda singkat memulihkan fokus', desc: 'Ajakan bermain game singkat bersama Timo membantu menyegarkan pikiran di sela mengerjakan kuis.' },
        { title: 'Visualisasi progres per topik memotivasi', desc: 'Bar persentase (80%, 30%, 70%) mendorong pengguna menuntaskan topik yang belum selesai.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Ceria, hangat, dan terorganisir', desc: 'Latar krem lembut dipadukan dengan kartu mata pelajaran berwarna koral dan mint agar nyaman dibaca lama.' },
        { title: 'Materi dan tugas saling terhubung', desc: 'Tab Subject dan Task berada dalam satu alur sehingga sehabis menonton video pengguna bisa langsung latihan.' },
        { title: 'Apresiasi di setiap pencapaian', desc: 'Kalender aktif harian, tab Badge, Ranking, dan Achievement heksagonal merayakan ketekunan pengguna.' },
      ],
      process: [
        { title: 'Arsitektur Informasi Kelas & Kuis', desc: 'Menyusun navigasi bawah 4 tab: Home, Class, Discussion/Chat, dan Profile.' },
        { title: 'Wireframing 6 Layar Inti', desc: 'Merancang tata letak Onboarding, Home, Class List, Video Player, Course Progress, dan Profile.' },
        { title: 'Ilustrasi Maskot & Ikonografi', desc: 'Membuat ilustrasi Timo serta ikon mata pelajaran bergaya outline tegas.' },
        { title: 'Prototyping Lomba @himiunsurya', desc: 'Menyusun interaksi antar-layar dan narasi presentasi kompetisi.' },
      ],
      decisions: [
        { title: 'Banner "Tired of Studying? Let’s Play a Game with Timo!" di Home', why: 'Memberikan penyegaran interaktif tepat di antara daftar Subjects dan Tasks harian.' },
        { title: 'Daftar timestamp terstruktur di bawah video My Course', why: 'Memudahkan pelajar meninjau subtopik Microeconomics tanpa harus menggeser bar video secara acak.' },
        { title: 'Kalender mingguan & koleksi Badge di Profil', why: 'Menampilkan jejak konsistensi belajar dan pencapaian secara visual dalam satu layar.' },
      ],
      persona: {
        name: 'Kenji Morales, 19',
        role: 'Mahasiswa tahun pertama yang mengambil banyak mata kuliah dasar',
        age: '19 tahun',
        occupation: 'Mahasiswa',
        location: 'Indonesia',
        quote: 'Aku lebih semangat belajar kalau materinya dibagi per poin singkat dan aku bisa melihat progres serta badge yang sudah kukumpulkan.',
        goals: [
          'Mengakses materi video dan rangkuman per mata pelajaran dengan cepat',
          'Menyelesaikan Math Quizzes dan Homework tepat waktu sebelum tenggat',
          'Mengumpulkan badge achievement dan menjaga konsistensi belajar mingguan',
        ],
        pains: [
          'Cepat jenuh saat menonton video pembelajaran yang panjang tanpa daftar isi waktu',
          'Sering lupa jadwal kuis karena tidak tampil di halaman depan',
          'Aplikasi belajar pada umumnya terlihat kaku seperti portal akademik lama',
        ],
      },
      features: [
        'Onboarding ceria "Hello! Welcome to BrainSpace" bersama ilustrasi karakter maskot Timo',
        'Beranda terpadu berisi pencarian, kartu Subjects, banner mini-game Timo, dan daftar Tasks/Quizzes',
        'Katalog Class (B. Indonesia, Biology, Computer, English) dengan informasi pengajar & jumlah course',
        'Halaman My Course Video Player lengkap dengan tab Info/Discussion dan daftar timestamp materi',
        'Halaman Course Progress per topik (Macroeconomics, Microeconomics, International Economics) & Profil Achievement',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Pembelajaran & Gamifikasi', caption: 'Alur dari memilih mata pelajaran, menonton video ber-timestamp, mengerjakan kuis, hingga meraih badge.' },
      { title: 'Information Architecture', caption: 'Struktur 4 menu navigasi utama (Home, Class, Chat, Profile) dan pengelompokan kursus.' },
      { title: 'Sketsa Karakter Timo & Ikon', caption: 'Eksplorasi ilustrasi maskot Timo dan ikonografi tiap mata pelajaran.' },
      { title: 'Wireframe', caption: 'Kerangka 6 layar utama aplikasi mobile Brainspace.' },
    ],
    deliverablesFinal: [
      { title: 'Design System & Gamification UI', caption: 'Komponen kartu mata pelajaran, lencana achievement heksagonal, progress bar, dan pemutar video.' },
      { title: 'UI Final — Brainspace', caption: 'Tampilan lengkap 6 layar aplikasi mobile Brainspace untuk kompetisi UI/UX @himiunsurya.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi alur belajar interaktif dan navigasi kelas mobile.' },
    ],
    deliverables: [
      { title: 'Onboarding & Profil Gamifikasi', caption: 'Sambutan maskot Timo, kalender streak mingguan, ranking, dan koleksi badge.' },
      { title: 'Beranda Subjects & Tasks', caption: 'Akses cepat mata pelajaran, mini-game Timo, dan pengingat kuis/PR.' },
      { title: 'UI Final — Brainspace', caption: 'Desain antarmuka lengkap aplikasi edukasi gamifikasi Brainspace.' },
      { title: 'Video Course & Topic Progress', caption: 'Pemutar materi Microeconomics dengan timestamp dan pelacak persentase bab.' },
    ],
    palette: [
      { name: 'Sunny Yellow', hex: '#F9C932' },
      { name: 'Timo Coral', hex: '#EF7A4C' },
      { name: 'Mint Green', hex: '#42D392' },
      { name: 'Warm Cream', hex: '#FDF4DC' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyeimbangkan keseruan gamifikasi dengan fokus akademik',
        problem: 'Ilustrasi dan warna cerah berisiko mengganggu keterbacaan teks materi pelajaran dan rincian video.',
        action: 'Menggunakan latar krem bersih (#FDF4DC) pada area bacaan materi dan membatasi warna cerah pada header, kartu kategori, serta badge.',
      },
      {
        title: 'Menyajikan materi video yang panjang agar mudah dipelajari',
        problem: 'Pelajar sering kesulitan menemukan bagian spesifik (seperti Supply and Demand Analysis) di dalam video.',
        action: 'Menambahkan daftar indeks waktu (timestamps) yang dapat diklik langsung di bawah ringkasan deskripsi video.',
      },
    ],
    impact: {
      headline: 'Lomba team project UI/UX Mobile @himiunsurya untuk aplikasi edutech Brainspace.',
      highlights: [
        'Mengintegrasikan materi kelas, timestamp video, pengingat tugas, dan mini-game dalam satu aplikasi',
        'Meningkatkan keterlibatan belajar melalui maskot Timo dan sistem koleksi Achievement',
      ],
      metrics: [
        { value: '6', label: 'Layar alur utama terintegrasi' },
        { value: '4', label: 'Pilar: Materi, Video, Tugas, & Badge' },
        { value: '100%', label: 'Kurikulum & progres tervisualisasi' },
      ],
      reflections: [
        'Gamifikasi pada produk edukasi bekerja paling baik ketika terhubung langsung dengan kemajuan belajar nyata pengguna.',
        'Detail kecil seperti timestamp video sangat membantu pengalaman belajar mandiri di layar ponsel.',
      ],
    },
  }),

  lombaBase({
    slug: 'elderlink',
    title: 'ElderLink',
    tagline: 'Aplikasi mobile pendamping lansia dengan jadwal minum obat terorganisir, integrasi wali keluarga lewat kode QR pribadi, dan panggilan suara darurat.',
    kind: 'UI/UX Design',
    year: '2025',
    badge: 'Lomba Team Project @invention.udayana · 2025',
    color: '#233d2c',
    burst: '#7ca982',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project @invention.udayana',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (@invention.udayana)',
      platform: 'Mobile App (iOS & Android)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'Accessible UI/UX', 'Healthcare Design', 'Elderly UX', 'Design Thinking', 'Prototyping'],
    },
    context: {
      summary:
        'ElderLink adalah proyek tim untuk kompetisi UI/UX Mobile @invention.udayana (Universitas Udayana). Lansia sering mengalami kesulitan mengingat jadwal minum berbagai jenis obat harian, sementara anggota keluarga (anak/wali) yang bekerja di tempat terpisah khawatir jadwal obat atau aktivitas penting orang tuanya terlewat. ElderLink menghubungkan akun lansia (seperti Bu Melani) dengan akun wali keluarga (seperti Kenji) hanya lewat pemindaian Kode QR pribadi, dilengkapi linimasa jadwal obat per jam dan panggilan keluarga yang sangat mudah diakses.',
      facts: [
        { k: 'Penyelenggara', v: 'Lomba UI/UX @invention.udayana (Univ. Udayana)' },
        { k: 'Tema', v: 'Healthcare & Elderly Care Companion' },
        { k: 'Jenis produk', v: 'Aplikasi Mobile Pendamping Lansia & Wali' },
        { k: 'Fitur inti', v: 'Jadwal Obat Harian, QR Wali, & Panggilan Cepat' },
      ],
      goals: [
        'Memastikan tidak ada jadwal minum obat atau aktivitas harian lansia yang terlewat lewat linimasa waktu yang terorganisir.',
        'Memudahkan penghubungan akun lansia dengan anggota keluarga sebagai Wali menggunakan pemindaian Kode QR pribadi.',
        'Menyediakan layar panggilan suara keluarga yang bersih, berkontras tinggi, dan mudah dioperasikan.',
      ],
      scope: [
        'Riset keterbacaan visual dan pola interaksi ramah lansia serta kebutuhan pemantauan keluarga',
        'Perancangan alur Splash, Onboarding, Login, Kode QR Wali, Jadwal Obat Harian, dan Panggilan Keluarga',
        'Penyusunan kartu obat berkode warna (kuning, hijau, biru, merah muda) untuk memudahkan identifikasi',
        'Pembuatan prototipe interaktif untuk kompetisi @invention.udayana',
      ],
    },
    problem: {
      quote: 'Ibu harus minum beberapa jenis obat di jam pagi, siang, dan sore, tapi sering lupa obat mana yang sudah diminum sementara aku sedang bekerja di luar rumah.',
      whyItMatters:
        'Ketidakpatuhan waktu dan dosis minum obat pada lansia berdampak langsung pada kesehatan. Di sisi lain, aplikasi kesehatan umum sering kali memiliki pengaturan yang terlalu rumit bagi lansia.',
      targetContext:
        'Lansia yang membutuhkan pengingat obat dan aktivitas harian, serta anak/anggota keluarga yang berperan sebagai Wali pemantau.',
      user: {
        title: 'Masalah lansia & keluarga pendamping',
        points: [
          'Lansia sering bingung membedakan beberapa jenis obat yang harus diminum pada jam 7:00 pagi, 12:00 siang, dan 6:00 sore.',
          'Proses menautkan akun orang tua ke ponsel anak pada aplikasi biasa sering kali rumit.',
          'Saat butuh bantuan, lansia kesulitan mencari kontak anak di daftar telepon yang panjang.',
        ],
      },
      business: {
        title: 'Tantangan desain ramah lansia',
        points: [
          'Menyajikan daftar obat harian beserta dosis (1 capsule / 1 tablets) dengan jarak antarelemen yang lega dan teks jelas.',
          'Menambahkan penanda blok warna pada tiap kartu obat agar mudah dikenali secara visual.',
          'Menjaga suasana aplikasi tetap tenang dan menumbuhkan rasa aman melalui palet hijau hutan yang teduh.',
        ],
      },
      hmw: 'Bagaimana kami membantu lansia dan keluarganya mengatur jadwal minum obat serta tetap terhubung setiap hari lewat antarmuka yang tenang dan sangat mudah dipakai?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami tantangan lansia dalam mengingat jadwal obat harian serta kekhawatiran anak yang memantau dari jauh.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menentukan 3 solusi kunci: pairing Wali via QR Code, jadwal obat berkode waktu & warna, serta panggilan cepat.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang linimasa vertikal (7:00 AM, 12:00 PM, 6:00 PM) dengan indikator warna di sisi kanan kartu obat.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun 6 layar utama bernuansa hijau daun tua (#233D2C) dan krem gading yang lembut di mata.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Mengevaluasi ukuran tombol, kejelasan teks dosis obat, dan kemudahan pemindaian QR Wali.' },
    ],
    research: {
      methods: [
        { title: 'Studi pedoman aksesibilitas lansia', desc: 'Mempelajari standar kontras warna, ukuran area sentuh, dan penyederhanaan hierarki informasi.' },
        { title: 'Wawancara keluarga pendamping', desc: 'Menggali cara anak mengatur jadwal obat orang tua dan kendala komunikasi sehari-hari.' },
        { title: 'Eksplorasi alur penautan akun', desc: 'Merancang mekanisme QR Code pribadi agar anak dapat langsung menjadi Wali hanya dengan memindai kamera.' },
      ],
      insights: [
        { title: 'Kode warna membantu mengenali obat', desc: 'Selain nama medis (seperti Acetaminophen 20mg atau Vitamin D), blok warna di kanan kartu membantu lansia mengenali obatnya.' },
        { title: 'QR Code memangkas langkah teknis', desc: 'Memindai QR Code jauh lebih mudah bagi lansia dibanding harus mengetik kode undangan panjang.' },
        { title: 'Layar panggilan harus bebas distraksi', desc: 'Saat menelepon anak (Kenji), layar hanya perlu menampilkan avatar besar, nama jelas, durasi, dan satu tombol tutup.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Terorganisir berdasarkan waktu', desc: 'Obat dikelompokkan tegas per jam (7:00 AM, 12:00 PM, 6:00 PM) sehingga pengguna fokus pada satu waktu.' },
        { title: 'Tenang dan tidak mengintimidasi', desc: 'Palet hijau natural dan putih gading memberikan rasa tenang, jauh dari kesan rumah sakit yang kaku.' },
        { title: 'Terhubung erat dengan keluarga', desc: 'Peran Wali memungkinkan anak ikut mengatur pengingat obat dan aktivitas harian orang tuanya.' },
      ],
      process: [
        { title: 'Pemetaan Journey Lansia & Wali', desc: 'Menyusun alur dari registrasi, pindai QR Wali, pengaturan jadwal obat Bu Melani, hingga panggilan suara.' },
        { title: 'Wireframing 6 Layar Utama', desc: 'Merancang struktur layar dengan tombol besar dan teks yang mudah dipindai.' },
        { title: 'Visual Design & Ilustrasi', desc: 'Membuat ilustrasi kalender-obat pada onboarding dan avatar keluarga pada layar telepon.' },
        { title: 'Prototyping Kompetisi Invention Udayana', desc: 'Menyatukan seluruh alur layar menjadi prototipe interaktif.' },
      ],
      decisions: [
        { title: 'Halaman Kode QR Pribadi untuk tambah Wali', why: 'Memudahkan anggota keluarga menautkan akun dan membantu mengelola pengingat obat orang tua dari ponsel mereka.' },
        { title: 'Kartu obat dengan indikator blok warna', why: 'Membantu pembedaan visual antarobat (mis. Acetaminophen 20mg, Heparin 30mg, Vitamin D, Vitamin E).' },
        { title: 'Panel Aktivitas Harian di bawah jadwal obat', why: 'Menyatukan jadwal minum obat dan rutinitas harian lansia dalam satu halaman yang sama.' },
      ],
      persona: {
        name: 'Bu Melani, 66 & Kenji (Anak)',
        role: 'Lansia dengan jadwal obat rutin & anak sebagai Wali pendamping',
        age: '66 tahun',
        occupation: 'Ibu rumah tangga / Pensiunan',
        location: 'Indonesia',
        quote: 'Dengan jadwal yang rapi dan dibantu anakku sebagai wali di aplikasi, aku tidak bingung lagi obat mana yang harus diminum pagi dan sore.',
        goals: [
          'Mengetahui jadwal dan dosis obat pagi (7:00 AM), siang (12:00 PM), dan sore (6:00 PM) tanpa terlewat',
          'Membiarkan anak (Wali) membantu mengatur jadwal pengingat lewat kode QR',
          'Menghubungi anak dengan mudah kapan pun dibutuhkan',
        ],
        pains: [
          'Sering lupa apakah obat jam siang sudah diminum atau belum',
          'Bingung dengan nama-nama obat jika tidak ada penanda visual yang jelas',
          'Kesulitan mengatur pengingat sendiri di aplikasi ponsel biasa',
        ],
      },
      features: [
        'Splash & Onboarding ramah ("Jadwal Harian Terorganisir") dengan ilustrasi kalender dan obat',
        'Halaman Masuk Akun yang bersih dengan opsi login cepat (Google, Facebook, Apple)',
        'Fitur Kode QR Pribadi untuk menambahkan anggota keluarga sebagai Wali pendamping dengan sekali pindai',
        'Layar Jadwal Obat Harian (Bu Melani) terkelompok per jam dengan dosis & penanda warna obat',
        'Section Aktivitas Harian serta Layar Panggilan Suara Keluarga berkontras tinggi ("Kenji (anak)")',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Lansia & Wali', caption: 'Alur dari login, pemindaian QR Wali oleh keluarga, pengaturan jadwal obat, hingga panggilan suara.' },
      { title: 'Information Architecture', caption: 'Struktur halaman autentikasi, penghubung QR Wali, linimasa obat harian, dan komunikasi.' },
      { title: 'Sketsa Antarmuka Ramah Lansia', caption: 'Eksplorasi ukuran kartu obat, indikator warna, dan tata letak tombol besar.' },
      { title: 'Wireframe', caption: 'Kerangka 6 layar utama aplikasi mobile ElderLink.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Aksesibel', caption: 'Tipografi jelas, kartu obat berkode warna, tombol kontras tinggi, dan palet hijau tenang.' },
      { title: 'UI Final — ElderLink', caption: 'Tampilan lengkap 6 layar ElderLink untuk kompetisi UI/UX @invention.udayana.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi alur penautan QR Wali, pengelolaan jadwal obat Bu Melani, dan panggilan keluarga.' },
    ],
    deliverables: [
      { title: 'Onboarding & Login Ramah Lansia', caption: 'Pengenalan manfaat jadwal terorganisir dan halaman masuk yang bersih.' },
      { title: 'Sistem Kode QR Wali', caption: 'Penautan akun lansia dan anggota keluarga secara aman lewat kamera.' },
      { title: 'UI Final — ElderLink', caption: 'Desain antarmuka lengkap aplikasi pendamping lansia ElderLink.' },
      { title: 'Linimasa Obat & Panggilan Cepat', caption: 'Jadwal obat pagi-siang-sore berkode warna dan layar telepon keluarga.' },
    ],
    palette: [
      { name: 'Forest Green', hex: '#233D2C' },
      { name: 'Sage Leaf', hex: '#7CA982' },
      { name: 'Warm Ivory', hex: '#F6F5EE' },
      { name: 'Soft Gold', hex: '#E9DC78' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Membuat daftar obat medis mudah dikenali lansia',
        problem: 'Nama obat seperti Acetaminophen atau Heparin sulit dibedakan jika hanya ditampilkan sebagai teks biasa.',
        action: 'Menambahkan kotak warna besar di sisi kanan tiap kartu obat serta mengelompokkannya secara tegas per jam minum (7:00 AM, 12:00 PM, 6:00 PM).',
      },
      {
        title: 'Menghubungkan akun orang tua dan anak tanpa langkah rumit',
        problem: 'Lansia sering kesulitan jika harus mengatur pengingat sendiri atau mengetik kode verifikasi.',
        action: 'Menyediakan layar Kode QR Pribadi sehingga anak cukup memindai layar ponsel orang tuanya untuk terhubung sebagai Wali.',
      },
    ],
    impact: {
      headline: 'Lomba team project UI/UX Mobile @invention.udayana untuk pendamping perawatan lansia.',
      highlights: [
        'Menyederhanakan kolaborasi perawatan lansia dan keluarga melalui fitur Kode QR Wali',
        'Menghadirkan linimasa jadwal minum obat berkode warna yang ramah bagi penglihatan lansia',
      ],
      metrics: [
        { value: '6', label: 'Layar alur utama terintegrasi' },
        { value: '1-Scan', label: 'Integrasi Wali via Kode QR' },
        { value: '3', label: 'Kelompok waktu obat harian' },
      ],
      reflections: [
        'Mendesain untuk pengguna lansia menuntut empati tinggi terhadap kejelasan visual dan penghapusan langkah teknis yang tidak perlu.',
        'Melibatkan keluarga sebagai Wali di dalam alur produk membuat solusi terasa jauh lebih realistis diterapkan di Indonesia.',
      ],
    },
  }),

  lombaBase({
    slug: 'bansoskita',
    title: 'BansosKita',
    tagline: 'Aplikasi mobile pemantauan, konfirmasi, dan verifikasi bantuan sosial yang aman serta terintegrasi dengan data Dukcapil, BPJS, dan PLN.',
    kind: 'UI/UX Design',
    year: '2025',
    badge: 'Lomba Team Project @fasilkomfest · 2025',
    color: '#6b21a8',
    burst: '#e11d48',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project @fasilkomfest',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (@fasilkomfest)',
      platform: 'Mobile App (iOS & Android)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'GovTech UX', 'Social Impact', 'Design Thinking', 'Prototyping'],
    },
    context: {
      summary:
        'BansosKita adalah proyek tim untuk kompetisi UI/UX Mobile @fasilkomfest. Masyarakat penerima manfaat sering kali tidak mengetahui apakah mereka terdaftar sebagai penerima bantuan baru, kapan dana cair, serta bagaimana cara memperbarui data keluarga dan ekonomi secara resmi. BansosKita menghadirkan aplikasi dengan enkripsi end-to-end yang terintegrasi dengan data Dukcapil, BPJS, dan PLN untuk memberikan notifikasi bantuan otomatis, konfirmasi penerimaan (seperti BLT dan KIP), serta pengelolaan dokumen pendukung secara transparan.',
      facts: [
        { k: 'Penyelenggara', v: 'Lomba UI/UX @fasilkomfest' },
        { k: 'Tema', v: 'GovTech & Transparansi Bantuan Sosial' },
        { k: 'Integrasi data', v: 'Dukcapil, BPJS, PLN, & Rekening Bank' },
        { k: 'Program tercakup', v: 'BLT (Bantuan Langsung Tunai) & KIP' },
      ],
      goals: [
        'Memberikan pemberitahuan otomatis ketika sistem mendeteksi warga berhak menerima bantuan baru ("Ada 1 Bantuan Baru!").',
        'Menyajikan status pencairan bantuan (Disetujui, Menunggu Konfirmasi, jadwal pencairan 3–5 hari kerja) secara transparan.',
        'Memudahkan warga memeriksa dan memperbarui Data Diri, Keluarga, Ekonomi, serta Dokumen Pendukung dalam satu aplikasi.',
      ],
      scope: [
        'Riset kendala informasi dan verifikasi data pada penyaluran bantuan sosial',
        'Perancangan alur Splash, Onboarding Keamanan, Beranda Notifikasi Bantuan, Daftar Bantuan, Profil Terintegrasi, dan Edit Data',
        'Penyusunan kartu status bantuan (BLT Dinas Sosial & KIP Kementerian Pendidikan)',
        'Pembuatan prototipe interaktif untuk kompetisi @fasilkomfest',
      ],
    },
    problem: {
      quote: 'Saya sering terlambat tahu kalau ada program bantuan seperti BLT atau KIP untuk anak sekolah, dan bingung harus mengurus pembaruan data keluarga ke mana.',
      whyItMatters:
        'Ketidakjelasan informasi status bantuan dan rumitnya birokrasi pembaruan data membuat warga yang berhak sering kehilangan kesempatan menerima bantuan tepat waktu.',
      targetContext:
        'Kepala keluarga dan warga penerima manfaat bantuan sosial (seperti BLT dan KIP) yang membutuhkan kepastian status, jadwal pencairan, dan kemudahan verifikasi data.',
      user: {
        title: 'Masalah warga penerima bantuan',
        points: [
          'Tidak ada notifikasi langsung ke ponsel saat warga terdeteksi berhak menerima program bantuan baru.',
          'Status pengajuan dan perkiraan waktu pencairan dana ke rekening bank tidak terlihat secara jelas.',
          'Perubahan data jumlah tanggungan anak, kondisi ekonomi, dan dokumen pendukung sulit diperbarui secara mandiri.',
        ],
      },
      business: {
        title: 'Tantangan desain aplikasi layanan publik',
        points: [
          'Meyakinkan warga bahwa data pribadi dan NIK mereka aman melalui komunikasi enkripsi end-to-end sejak onboarding.',
          'Menampilkan data lintas instansi (Dukcapil, PLN 450 VA, BPJS PBI, pendapatan, dan jumlah anak) secara ringkas dan mudah dibaca.',
          'Membagi formulir Edit Profil & Data Pendukung yang panjang ke dalam tab bertahap agar tidak membingungkan.',
        ],
      },
      hmw: 'Bagaimana kami membuat proses pengecekan, konfirmasi, dan pembaruan data bantuan sosial menjadi transparan, aman, dan mudah dipahami oleh setiap kepala keluarga?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mempelajari kebingungan warga saat mengecek hak bantuan sosial dan memperbarui data tanggungan keluarga.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan 3 kebutuhan utama: deteksi & konfirmasi bantuan proaktif, transparansi status cair, dan profil terintegrasi.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang kartu alert "Ada 1 Bantuan Baru!", tab Bantuan Saya/Semua Bantuan, dan 4 tab Edit Data Pendukung.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun 6 layar utama dengan palet ungu tepercaya (#6B21A8) dan badge status yang kontras.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji kejelasan alur konfirmasi KIP/BLT dan kemudahan pengisian form Data Kepala Keluarga & Data Anak.' },
    ],
    research: {
      methods: [
        { title: 'Studi alur penyaluran bansos', desc: 'Memetakan proses dari verifikasi NIK, penentuan kelayakan (BLT & KIP), hingga pencairan ke rekening bank.' },
        { title: 'Analisis keterbacaan layanan publik', desc: 'Menyederhanakan istilah birokrasi menjadi kalimat aktif yang langsung memberi tahu langkah selanjutnya.' },
        { title: 'Perancangan struktur form bertahap', desc: 'Memecah input data verifikasi menjadi 4 kategori: Pribadi, Keluarga, Ekonomi, dan Dokumen.' },
      ],
      insights: [
        { title: 'Notifikasi proaktif sangat krusial', desc: 'Kotak peringatan "Sistem mendeteksi Anda berhak menerima bantuan" dengan tombol merah langsung mengarahkan warga bertindak.' },
        { title: 'Integrasi data mengurangi input berulang', desc: 'Menampilkan data yang sudah terhubung dari Dukcapil, BPJS, dan PLN memudahkan warga memeriksa kesesuaian datanya.' },
        { title: 'Estimasi hari kerja menenangkan penerima', desc: 'Keterangan seperti "Pencairan dijadwalkan 3–5 hari kerja" memberikan kepastian waktu yang jelas.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Transparan dan proaktif', desc: 'Setiap hak bantuan, nilai rupiah (Rp 600.000 / Rp 1.000.000), dan status konfirmasi ditampilkan secara terbuka.' },
        { title: 'Aman & terverifikasi', desc: 'Badge "NIK Terverifikasi" dan informasi enkripsi end-to-end menumbuhkan rasa percaya warga.' },
        { title: 'Formulir yang terbagi rapi', desc: 'Pembaruan data keluarga dan anak disusun dalam tab pendek agar warga tidak kewalahan.' },
      ],
      process: [
        { title: 'Arsitektur Informasi 3 Menu Utama', desc: 'Menyusun navigasi bawah yang fokus: Beranda, Bantuan, dan Profil.' },
        { title: 'Wireframing Alur Konfirmasi & Profil', desc: 'Merancang tata letak kartu bantuan, ringkasan data terintegrasi, dan form edit keluarga.' },
        { title: 'Visual Design & Ilustrasi Keamanan', desc: 'Membuat ilustrasi keamanan data pada onboarding dan header banner bantuan.' },
        { title: 'Prototyping Lomba @fasilkomfest', desc: 'Menyusun prototipe lengkap 6 layar utama untuk demonstrasi lomba.' },
      ],
      decisions: [
        { title: 'Kartu alert "Ada 1 Bantuan Baru!" di Beranda', why: 'Memastikan warga langsung menyadari adanya bantuan yang memerlukan konfirmasi segera (seperti KIP anak sekolah).' },
        { title: 'Panel Data Diri & Keluarga Terintegrasi (Dukcapil, BPJS, PLN)', why: 'Memperlihatkan dasar penentuan kelayakan bantuan (daya listrik 450 VA, jumlah anak, pendapatan, status BPJS PBI) secara transparan.' },
        { title: 'Tab 4 kategori pada Edit Profil & Data Pendukung', why: 'Memudahkan kepala keluarga memperbarui data Pribadi, Keluarga, Ekonomi, dan Dokumen (0/6) secara bertahap.' },
      ],
      persona: {
        name: 'Burhan Amin, 44',
        role: 'Kepala keluarga dengan 3 anak usia sekolah',
        age: '44 tahun',
        occupation: 'Pekerja harian / pedagang',
        location: 'Kota Bandung, Jawa Barat',
        quote: 'Saya ingin tahu dengan jelas bantuan apa yang berhak diterima keluarga saya dan kapan dananya masuk ke rekening BRI saya.',
        goals: [
          'Menerima pemberitahuan otomatis saat berhak mendapatkan BLT atau KIP untuk anak-anaknya',
          'Memantau status pencairan bantuan langsung dari ponsel tanpa harus antre di kantor kelurahan',
          'Memperbarui data anggota keluarga dan NIK anak dengan mudah untuk keperluan verifikasi',
        ],
        pains: [
          'Sering bingung apakah bantuan masih menunggu konfirmasi atau sudah disetujui',
          'Tidak tahu apakah data daya listrik, BPJS, dan jumlah anak di sistem pemerintah sudah sesuai',
          'Formulir pengajuan manual biasanya rumit dan membingungkan',
        ],
      },
      features: [
        'Splash & Onboarding "Aman & Terpercaya" dengan jaminan enkripsi end-to-end',
        'Beranda personal ("Halo, Burhan · NIK Terverifikasi") dengan banner Notifikasi Bantuan & alert Bantuan Baru',
        'Halaman Manajemen Bantuan (Bantuan Saya & Semua Bantuan) untuk konfirmasi KIP dan pemantauan BLT',
        'Halaman Profil Terintegrasi (Dukcapil, BPJS PBI, PLN 450 VA, pendapatan, & nomor rekening BRI)',
        'Halaman Edit Profil & Data Pendukung dengan 4 tab terstruktur (Pribadi, Keluarga, Ekonomi, Dokumen)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Verifikasi & Konfirmasi Bansos', caption: 'Alur warga dari menerima notifikasi bantuan baru, melakukan konfirmasi KIP/BLT, hingga memperbarui data keluarga.' },
      { title: 'Information Architecture', caption: 'Struktur 3 menu utama (Beranda, Bantuan, Profil) dan sub-tab dokumen verifikasi.' },
      { title: 'Sketsa Kartu Status Bantuan', caption: 'Eksplorasi tata letak informasi nominal bantuan, instansi penyalur, dan badge status.' },
      { title: 'Wireframe', caption: 'Kerangka 6 layar utama aplikasi mobile BansosKita.' },
    ],
    deliverablesFinal: [
      { title: 'Design System GovTech', caption: 'Komponen badge status (Disetujui / Menunggu Konfirmasi), kartu data terintegrasi, dan tab form.' },
      { title: 'UI Final — BansosKita', caption: 'Tampilan lengkap 6 layar aplikasi BansosKita untuk kompetisi UI/UX @fasilkomfest.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi alur konfirmasi bantuan sosial dan pembaruan data keluarga.' },
    ],
    deliverables: [
      { title: 'Onboarding & Beranda Notifikasi', caption: 'Edukasi keamanan data dan pemberitahuan proaktif bantuan baru.' },
      { title: 'Manajemen & Konfirmasi Bantuan', caption: 'Daftar status BLT dan KIP lengkap dengan nominal serta jadwal pencairan.' },
      { title: 'UI Final — BansosKita', caption: 'Desain antarmuka lengkap aplikasi transparansi bantuan sosial BansosKita.' },
      { title: 'Profil Terintegrasi & Edit Data', caption: 'Sinkronisasi data Dukcapil/BPJS/PLN dan formulir pembaruan data keluarga.' },
    ],
    palette: [
      { name: 'Royal Purple', hex: '#6B21A8' },
      { name: 'Deep Indigo', hex: '#3B0764' },
      { name: 'Alert Crimson', hex: '#E11D48' },
      { name: 'Soft Lavender', hex: '#F3E8FF' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyajikan data kependudukan dan ekonomi yang kompleks secara sederhana',
        problem: 'Data verifikasi bansos mencakup banyak variabel (NIK, alamat, daya listrik, jumlah anak, pendapatan, BPJS, rekening bank).',
        action: 'Mengelompokkan informasi ke dalam kartu ringkasan berikon di halaman Profil dan memisahkan mode edit ke dalam 4 tab pendek.',
      },
      {
        title: 'Mendorong tindakan cepat saat ada bantuan yang butuh konfirmasi',
        problem: 'Beberapa bantuan seperti KIP mengharuskan penerima melakukan konfirmasi terlebih dahulu sebelum dicairkan.',
        action: 'Menempatkan kartu alert berwarna kontras di Beranda dan tombol "Konfirmasi" penuh pada kartu bantuan yang berstatus Menunggu Konfirmasi.',
      },
    ],
    impact: {
      headline: 'Lomba team project UI/UX Mobile @fasilkomfest untuk transparansi penyaluran bantuan sosial.',
      highlights: [
        'Menghadirkan transparansi status pencairan BLT dan KIP yang terintegrasi dengan data Dukcapil, BPJS, & PLN',
        'Memudahkan kepala keluarga mengonfirmasi hak bantuan dan memperbarui data tanggungan secara mandiri',
      ],
      metrics: [
        { value: '6', label: 'Layar alur utama terintegrasi' },
        { value: '3', label: 'Integrasi data (Dukcapil, BPJS, PLN)' },
        { value: '4', label: 'Tab verifikasi data & dokumen' },
      ],
      reflections: [
        'Pada aplikasi layanan publik (GovTech), kejelasan status dan bahasa yang lugas adalah bentuk empati paling nyata bagi masyarakat.',
        'Transparansi kriteria data (seperti daya listrik dan tanggungan) membantu membangun kepercayaan terhadap keadilan sistem.',
      ],
    },
  }),

  lombaBase({
    slug: 'aurora',
    title: 'AURORA',
    tagline: 'Aplikasi skrining awal autisme (Early Autism Screening) dan pelacakan tumbuh kembang anak berbasis On-Device AI melalui mini-game interaktif.',
    kind: 'UI/UX Design',
    year: '2026',
    badge: 'Lomba Team Project @ugmfindit · 2026',
    color: '#2563eb',
    burst: '#facc15',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project @ugmfindit',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (@ugmfindit)',
      platform: 'Mobile App (iOS & Android)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'On-Device AI UX', 'Child Healthcare', 'Privacy-First Design', 'Prototyping'],
    },
    context: {
      summary:
        'AURORA adalah proyek tim untuk kompetisi UI/UX Mobile @ugmfindit (Find IT! Universitas Gadjah Mada). Mengusung visi "Early Autism Screening: Satu Sistem, Sejuta Kebaikan untuk Indonesia", AURORA membantu orang tua melakukan observasi dini tumbuh kembang anak usia dini (seperti Kenji, 2 tahun 8 bulan) lewat 3 permainan interaktif berdurasi ~5 menit. Selama anak bermain (misalnya memecahkan gelembung di layar), AI memproses indikator tatapan (Gaze Tracking), perhatian (Attention), dan ekspresi (Expression) sepenuhnya secara on-device tanpa pernah mengunggah video anak ke server.',
      facts: [
        { k: 'Penyelenggara', v: 'Lomba UI/UX @ugmfindit (UGM)' },
        { k: 'Tema', v: 'Early Autism Screening & Child Development AI' },
        { k: 'Teknologi inti', v: '100% On-Device AI (Gaze, Attention, Expression)' },
        { k: 'Pengguna', v: 'Orang tua & anak usia dini (balita)' },
      ],
      goals: [
        'Memberikan rasa aman penuh kepada orang tua melalui komitmen privasi On-Device AI (video tidak pernah meninggalkan ponsel).',
        'Mengemas sesi observasi tumbuh kembang anak menjadi 3 permainan interaktif singkat (~5 menit) yang menyenangkan bagi balita.',
        'Menyajikan grafik perkembangan 4 dimensi (Sosial, Perhatian, Visual, Respons) dan asisten Tanya AURORA AI bagi orang tua.',
      ],
      scope: [
        'Riset kekhawatiran orang tua terkait skrining tumbuh kembang anak dan privasi data kamera',
        'Perancangan alur Splash, Komitmen Privasi, Beranda Anak, Grafik Perkembangan, Mini-Game Screening, dan Pengaturan Privasi',
        'Desain antarmuka permainan "Pop the bubbles!" dengan indikator AI real-time di bagian bawah layar',
        'Pembuatan prototipe interaktif untuk kompetisi @ugmfindit',
      ],
    },
    problem: {
      quote: 'Sebagai orang tua, aku ingin memantau perkembangan sosial dan respons anakku sejak dini, tapi kuesioner medis terasa membingungkan dan aku khawatir soal privasi jika harus merekam video anak.',
      whyItMatters:
        'Deteksi dan observasi dini sangat penting bagi tumbuh kembang anak, namun rasa cemas orang tua terhadap stigma diagnosis serta privasi rekaman wajah anak sering menjadi penghalang utama.',
      targetContext:
        'Orang tua dengan anak balita (usia 1–5 tahun) di Indonesia yang ingin memantau perkembangan sosial, perhatian, visual, dan respons anak secara berkala dari rumah.',
      user: {
        title: 'Masalah yang dialami orang tua',
        points: [
          'Kuesioner skrining konvensional bersifat subjektif dan sering membuat orang tua cemas atau bingung.',
          'Anak balita sulit diminta diam saat diobservasi jika medianya tidak berbentuk permainan yang menarik.',
          'Kekhawatiran tinggi jika video wajah anak diunggah ke internet atau disalahgunakan.',
        ],
      },
      business: {
        title: 'Tantangan desain AI & privasi anak',
        points: [
          'Menegaskan sejak layar awal bahwa AURORA memberikan wawasan observasional (bukan alat diagnosis medis mutlak) dan seluruh analisis terjadi on-device.',
          'Merancang layar permainan yang bersih bagi anak sekaligus menampilkan status sensor (Gaze, Attention, Expression) yang tidak mengganggu.',
          'Menerjemahkan hasil analisis ke dalam 4 skor ramah orang tua (Sosial, Perhatian, Visual, Respons) dengan tren waktu ke waktu.',
        ],
      },
      hmw: 'Bagaimana kami membantu orang tua memantau tumbuh kembang dan skrining awal autisme anak secara menyenangkan lewat permainan, sambil menjamin 100% privasi data di perangkat?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami kecemasan orang tua seputar tumbuh kembang balita dan sensitivitas privasi data video anak.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menetapkan prinsip Privacy-First On-Device AI, skrining berbasis mini-game 5 menit, dan laporan perkembangan 4 aspek.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang layar persetujuan 4 jaminan privasi, game "Pop the bubbles!", kartu skor 4 warna, dan fitur Tanya AURORA AI.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun 6 layar utama dengan palet biru tenang (#2563EB), ungu lembut, dan aksen pastel yang ramah keluarga.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Mengevaluasi kejelasan informasi privasi, kemudahan memulai sesi permainan, dan keterbacaan grafik perkembangan.' },
    ],
    research: {
      methods: [
        { title: 'Studi observasi tumbuh kembang dini', desc: 'Mempelajari indikator observasi perilaku anak: kontak mata (gaze), fokus perhatian, ekspresi, dan kecepatan respons.' },
        { title: 'Eksplorasi Privacy-by-Design UX', desc: 'Merancang komunikasi transparan mengenai pemrosesan AI lokal di perangkat dan enkripsi AES 256-bit.' },
        { title: 'Desain interaksi ramah balita', desc: 'Memilih mekanik ketuk gelembung (Pop the bubbles!) yang intuitif bagi anak usia 2–4 tahun.' },
      ],
      insights: [
        { title: 'Layar komitmen privasi membangun kepercayaan', desc: 'Menampilkan 4 poin jaminan (Video tidak pernah diunggah, Bukan alat diagnosis, Hapus kapan saja, Data tidak dijual) menenangkan orang tua sejak awal.' },
        { title: 'Durasi 5 menit menjaga fokus balita', desc: 'Membagi sesi ke dalam 3 permainan singkat (~5 menit) mencegah anak bosan atau rewel.' },
        { title: 'Label kualitatif lebih ramah dari sekadar angka', desc: 'Menambahkan badge "+ Stabil" dan "↑ Bagus" di bawah skor (75, 82, 77, 85) membantu orang tua memahami kondisi anak tanpa panik.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Privasi sebagai fondasi utama', desc: 'Kontrol penuh ada di tangan orang tua dengan indikator Pemrosesan On-Device dan Enkripsi AES 256-bit yang selalu terlihat.' },
        { title: 'Bermain sambil mengobservasi', desc: 'Anak hanya merasakan pengalaman bermain gelembung yang seru, sementara sistem mencatat metrik observasi secara halus.' },
        { title: 'Hangat, empatik, dan menenangkan', desc: 'Bahasa antarmuka menghindari nada menghakimi dan didukung asisten Tanya AURORA AI untuk panduan tumbuh kembang.' },
      ],
      process: [
        { title: 'Arsitektur Informasi 5 Tab', desc: 'Menyusun navigasi bawah: Beranda, Progres, Screening (tombol tengah utama), Asisten, dan Profil.' },
        { title: 'Wireframing Privasi, Game, & Grafik', desc: 'Merancang alur dari onboarding privasi menuju sesi permainan dan laporan perkembangan.' },
        { title: 'Visual Design & Ilustrasi', desc: 'Menerapkan warna pastel lembut pada kartu metrik Sosial, Perhatian, Visual, dan Respons.' },
        { title: 'Prototyping Kompetisi Find IT! UGM', desc: 'Menyelesaikan prototipe 6 layar utama untuk kompetisi @ugmfindit.' },
      ],
      decisions: [
        { title: 'Halaman khusus "Privasimu aman bersama kami" di awal', why: 'Menjawab kekhawatiran terbesar orang tua bahwa video anak tidak pernah diunggah ke cloud dan aplikasi hanya memberi wawasan observasional.' },
        { title: 'Tiga indikator AI halus di bawah kanvas game (Gaze, Attention, Expression)', why: 'Memberi tahu orang tua bahwa sensor berjalan aktif tanpa mengganggu area bermain gelembung anak.' },
        { title: 'Empat kartu metrik perkembangan + grafik tren waktu ke waktu', why: 'Memudahkan orang tua memantau perkembangan Sosial (75), Perhatian (82), Visual (77), dan Respons (85) dari sesi ke sesi.' },
      ],
      persona: {
        name: 'Ibu Dinda & Kenji (2 thn 8 bln)',
        role: 'Orang tua muda yang peduli tumbuh kembang optimal anak',
        age: '29 tahun (Ibu) & 2 thn 8 bln (Anak)',
        occupation: 'Orang tua',
        location: 'Indonesia',
        quote: 'Aku ingin memantau perkembangan sosial dan fokus perhatian Kenji lewat cara yang menyenangkan untuknya dan 100% aman privasinya.',
        goals: [
          'Melakukan cek perkembangan rutin anak dari rumah melalui permainan singkat 5 menit',
          'Melihat tren perkembangan Sosial, Perhatian, Visual, dan Respons anak dari waktu ke waktu',
          'Memastikan rekaman kamera anak diproses di dalam ponsel saja dan tidak pernah diunggah ke server luar',
        ],
        pains: [
          'Takut data video anak bocor jika menggunakan aplikasi berbasis cloud',
          'Anak cepat bosan jika proses observasi terasa kaku atau terlalu lama',
          'Bingung membaca hasil laporan perkembangan yang terlalu medis',
        ],
      },
      features: [
        'Splash & Onboarding Komitmen Privasi ("Privasimu aman bersama kami" — On-device AI & kontrol penuh data)',
        'Beranda Anak ("Hai, Kenji! 2 thn 8 bln") dengan kartu mulai sesi 3 permainan (~5 menit) & pintasan Tanya AURORA AI',
        'Halaman Pelacakan Perkembangan ("Perjalanan Kenji") dengan 4 skor (Sosial, Perhatian, Visual, Respons) & grafik tren',
        'Layar Mini-Game Interaktif ("Pop the bubbles!") dengan indikator real-time Gaze Tracking, Attention, & Expression',
        'Halaman Profil Anak & Panel Privasi/Keamanan (Pemrosesan on-device Aktif & Enkripsi AES 256-bit Aktif)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Skrining & Pelacakan', caption: 'Alur dari persetujuan privasi, memulai sesi 3 permainan bersama anak, hingga membaca hasil perkembangan.' },
      { title: 'Information Architecture', caption: 'Struktur 5 menu utama: Beranda, Progres, Screening, Asisten AI, dan Profil & Privasi.' },
      { title: 'Sketsa Layar Game & Sensor AI', caption: 'Eksplorasi tata letak gelembung interaktif, timer 15 detik, dan status pelacakan tatapan.' },
      { title: 'Wireframe', caption: 'Kerangka 6 layar utama aplikasi mobile AURORA.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Ramah Keluarga', caption: 'Komponen kartu perkembangan 4 dimensi, grafik garis multi-indikator, dan badge privasi.' },
      { title: 'UI Final — AURORA', caption: 'Tampilan lengkap 6 layar aplikasi Early Autism Screening AURORA untuk kompetisi @ugmfindit.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi alur onboarding privasi, sesi permainan skrining, dan dashboard perkembangan anak.' },
    ],
    deliverables: [
      { title: 'Onboarding Privasi On-Device', caption: 'Transparansi pemrosesan AI lokal di perangkat dan persetujuan orang tua.' },
      { title: 'Beranda & Mini-Game Screening', caption: 'Sesi permainan "Pop the bubbles!" dengan pelacakan Gaze, Attention, dan Expression.' },
      { title: 'UI Final — AURORA', caption: 'Desain antarmuka lengkap aplikasi Early Autism Screening AURORA.' },
      { title: 'Dashboard Perjalanan Tumbuh Kembang', caption: 'Skor dan grafik perkembangan Sosial, Perhatian, Visual, serta Respons anak.' },
    ],
    palette: [
      { name: 'Aurora Blue', hex: '#2563EB' },
      { name: 'Soft Violet', hex: '#7C3AED' },
      { name: 'Warm Sun', hex: '#FACC15' },
      { name: 'Cloud Blue', hex: '#EFF6FF' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Membangun kepercayaan orang tua terhadap penggunaan kamera AI',
        problem: 'Orang tua sangat sensitif terhadap perekaman wajah anak balita mereka.',
        action: 'Menyediakan layar komitmen privasi khusus di awal dan panel status "Pemrosesan on-device: Video tidak pernah meninggalkan ponselmu" di profil.',
      },
      {
        title: 'Menyajikan hasil observasi tanpa memicu kepanikan',
        problem: 'Istilah medis yang kaku dapat membuat orang tua merasa terhakimi atau cemas berlebihan.',
        action: 'Menegaskan bahwa aplikasi memberikan wawasan observasional (bukan diagnosis), menggunakan warna lembut, serta menyediakan fitur Tanya AURORA AI untuk konsultasi awal.',
      },
    ],
    impact: {
      headline: 'Lomba team project UI/UX Mobile @ugmfindit untuk inovasi Early Autism Screening berbasis On-Device AI.',
      highlights: [
        'Menggabungkan 3 mini-game interaktif ramah balita dengan pelacakan Gaze, Attention, & Expression',
        'Menjamin 100% privasi keluarga dengan arsitektur pemrosesan On-Device AI dan enkripsi AES 256-bit',
      ],
      metrics: [
        { value: '4', label: 'Dimensi perkembangan terpantau' },
        { value: '~5 mnt', label: 'Durasi 3 mini-game observasi' },
        { value: '100%', label: 'Analisis video secara On-Device' },
      ],
      reflections: [
        'Dalam merancang produk AI untuk anak dan keluarga, transparansi privasi dan empati komunikasi harus ditempatkan di urutan pertama.',
        'Mengubah proses observasi menjadi permainan singkat membuat pengalaman skrining terasa hangat bagi orang tua maupun anak.',
      ],
    },
  }),

  lombaBase({
    slug: 'agrosupply',
    title: 'AgroSupply',
    tagline: 'Platform digital dan dashboard GIS yang menghubungkan petani Jawa Barat dengan pembeli untuk memetakan pasokan serta menstabilkan distribusi komoditas.',
    kind: 'UI/UX & Web App',
    year: '2025',
    badge: 'Lomba Team Project @technoday_unnes · 2025',
    color: '#16a34a',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project @technoday_unnes',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (@technoday_unnes)',
      platform: 'Web App (Landing Page & GIS Dashboard)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'Agritech', 'GIS Supply Map', 'Dashboard UI', 'Prototyping'],
    },
    context: {
      summary:
        'AgroSupply adalah proyek tim untuk kompetisi UI/UX @technoday_unnes (Universitas Negeri Semarang). Mengangkat misi "Stabilkan Pasokan, Sejahterakan Petani Jawa Barat", AgroSupply menjembatani kesenjangan informasi antara 500+ petani di 27 kabupaten/kota Jawa Barat dengan para pembeli (pasar, warung, dan distributor). Platform ini menggabungkan Peta Supply Jawa Barat secara real-time untuk pembeli dengan dashboard manajemen Produk Saya dan Distribusi Penjualan bagi petani.',
      facts: [
        { k: 'Penyelenggara', v: 'Lomba UI/UX @technoday_unnes (UNNES)' },
        { k: 'Tema', v: 'Agritech & Transparansi Rantai Pasok Pangan' },
        { k: 'Cakupan wilayah', v: '27 Kabupaten/Kota di Jawa Barat' },
        { k: 'Pengguna', v: 'Petani Lokal & Pembeli / Distributor Komoditas' },
      ],
      goals: [
        'Memvisualisasikan sebaran pasokan komoditas pertanian di 27 kabupaten/kota Jawa Barat melalui peta interaktif (Supply Tinggi, Sedang, Rendah).',
        'Memudahkan petani mengelola katalog hasil panen (lengkap dengan Grade Kualitas A/A+/B+ dan kalkulasi nilai otomatis) serta mencatat riwayat distribusi penjualan.',
        'Membantu pembeli menemukan daerah dengan pasokan tinggi untuk mendapatkan harga yang adil dan kompetitif langsung dari petani.',
      ],
      scope: [
        'Riset masalah ketimpangan pasokan dan transparansi harga komoditas pertanian di Jawa Barat',
        'Perancangan Landing Page AgroSupply ("Stabilkan Pasokan, Sejahterakan Petani Jawa Barat")',
        'Desain Dashboard Pembeli (Peta Supply Jawa Barat, detail wilayah Kota Sukabumi, & Tips Pembeli)',
        'Desain Dashboard Petani (Distribusi Penjualan, modal Tambah Produk Baru, & modal Tambah Riwayat Penjualan)',
      ],
    },
    problem: {
      quote: 'Saat panen raya di daerah kami harga anjlok karena pembeli tidak tahu stok kami melimpah, sementara di kota sebelah justru kekurangan pasokan.',
      whyItMatters:
        'Ketidakmerataan informasi pasokan antarwilayah di Jawa Barat merugikan petani saat surplus dan membebani pembeli saat terjadi kelangkaan di daerah tertentu.',
      targetContext:
        'Petani komoditas pangan (tomat, cabai merah, bayam, ubi jalar, singkong) dan pembeli/pedagang pasar di 27 kabupaten/kota Jawa Barat.',
      user: {
        title: 'Masalah petani & pembeli komoditas',
        points: [
          'Pembeli kesulitan mengetahui kabupaten/kota mana di Jawa Barat yang sedang memiliki pasokan tinggi dan harga stabil.',
          'Petani belum memiliki pencatatan digital yang rapi untuk stok panen, grade kualitas, dan riwayat distribusi penjualan ke toko/pasar.',
          'Kurangnya akses kontak langsung antara pembeli dan petani memicu rantai perantara yang panjang.',
        ],
      },
      business: {
        title: 'Tantangan desain platform Agritech dua sisi',
        points: [
          'Menyajikan Peta Supply Jawa Barat 27 kabupaten/kota yang informatif namun mudah dipahami dalam sekali pandang.',
          'Merancang formulir Tambah Produk Baru dan Tambah Riwayat Penjualan yang sederhana bagi petani dengan kalkulasi Estimasi Total Nilai otomatis.',
          'Menampilkan indikator status permintaan (seperti "Permintaan Tinggi") dan rekomendasi pintar ("Tips Pembeli") di panel wilayah.',
        ],
      },
      hmw: 'Bagaimana kami menghubungkan petani dan pembeli di Jawa Barat lewat peta pasokan transparan dan pencatatan distribusi yang mudah digunakan?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mempelajari alur penjualan hasil panen petani Jawa Barat dan cara pembeli mencari pasokan komoditas.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan dua tampilan terhubung: Dashboard Peta Supply untuk pembeli dan Dashboard Distribusi untuk petani.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang peta choropleth Jawa Barat 3 warna, kartu Tips Pembeli, dan modal input panen ber-grade.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun UI web lengkap dari Landing Page hingga kedua sisi dashboard bernuansa hijau agrikultur.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji alur eksplorasi wilayah di peta (mis. Kota Sukabumi) dan pengisian form tambah produk/penjualan.' },
    ],
    research: {
      methods: [
        { title: 'Studi distribusi komoditas Jabar', desc: 'Memetakan komoditas utama (cabai, tomat, bayam, ubi, singkong) dan sebaran 27 wilayah kabupaten/kota.' },
        { title: 'Pemetaan kebutuhan dua peran', desc: 'Membedakan kebutuhan informasi antara petani penyedia stok dan pembeli pencari komoditas.' },
        { title: 'Eksplorasi visualisasi peta supply', desc: 'Merancang legenda warna Supply Tinggi (>70%), Sedang (30–70%), dan Rendah (<30%) di atas peta Jawa Barat.' },
      ],
      insights: [
        { title: 'Rekomendasi pintar membantu pembeli', desc: 'Kotak "Tips Pembeli: Daerah ini memiliki produk dengan supply tinggi" memudahkan pembeli mengambil keputusan.' },
        { title: 'Kalkulasi otomatis mencegah salah hitung', desc: 'Menampilkan "Estimasi Total Nilai (Kuantitas × Harga per satuan)" secara otomatis di modal produk sangat membantu petani.' },
        { title: 'Badge Grade Kualitas meningkatkan kepercayaan', desc: 'Label Grade A, Grade A+, dan Grade B+ pada daftar komoditas memperjelas standar harga jual.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Transparan berbasis peta wilayah', desc: 'Kondisi pasokan seluruh kabupaten/kota di Jawa Barat terlihat jelas melalui kode warna dan panel detail wilayah.' },
        { title: 'Pencatatan usaha tani yang praktis', desc: 'Petani dapat menambah produk panen dan mencatat riwayat penjualan ke pasar/warung hanya lewat satu modal ringkas.' },
        { title: 'Segar, tepercaya, dan membumi', desc: 'Fotografi sawah Jawa Barat dan palet hijau zamrud mencerminkan semangat ketahanan pangan lokal.' },
      ],
      process: [
        { title: 'Perancangan Arsitektur Dua Peran', desc: 'Menyusun alur untuk akun Pembeli (Dashboard & Data Supply) dan akun Petani (Produk Saya, Distribusi, Permintaan Pasar, Analitik).' },
        { title: 'Wireframing Peta & Tabel Distribusi', desc: 'Menata tata letak Peta Supply Jawa Barat berdampingan dengan panel detail Kota/Kabupaten.' },
        { title: 'Desain Visual & Modal Interaktif', desc: 'Merancang komponen kartu komoditas, legenda peta, dan modal formulir input.' },
        { title: 'Prototyping Lomba @technoday_unnes', desc: 'Menyelesaikan prototipe web lengkap untuk presentasi kompetisi.' },
      ],
      decisions: [
        { title: 'Split-view Peta Supply Jawa Barat & Panel Detail Wilayah', why: 'Saat pembeli mengklik wilayah (mis. Kota Sukabumi), ringkasan jumlah petani, jenis produk, daftar komoditas, dan Tips Pembeli langsung tampil di sisi kanan.' },
        { title: 'Tabel Distribusi Penjualan dengan badge status & grade', why: 'Petani dapat memantau produk yang masih Aktif maupun Terjual beserta nama pembeli, daerah tujuan, dan tanggal jual.' },
        { title: 'Kalkulator Estimasi Total Nilai di modal Tambah Produk Baru', why: 'Memberikan gambaran langsung nilai ekonomi panen saat petani memasukkan kuantitas dan harga satuan.' },
      ],
      persona: {
        name: 'Pak Darto (Petani Lembang) & Kenji (Pembeli)',
        role: 'Petani sayuran Jawa Barat & pemilik toko sayur/pembeli komoditas',
        age: '42 tahun & 27 tahun',
        occupation: 'Petani & Pedagang Komoditas',
        location: 'Lembang, Bandung Barat & Sukabumi, Jawa Barat',
        quote: 'Dengan peta pasokan dan pencatatan distribusi yang jelas, hasil panen kami bisa langsung ditemukan pembeli dari berbagai kota dengan harga yang adil.',
        goals: [
          'Memasarkan hasil panen (Tomat, Cabai Merah, Bayam) langsung ke pembeli di berbagai daerah Jawa Barat',
          'Mencatat stok tersedia, grade kualitas, dan riwayat distribusi penjualan secara rapi',
          'Melihat peta wilayah mana yang sedang memiliki pasokan tinggi dan harga kompetitif',
        ],
        pains: [
          'Harga panen sering jatuh karena informasi stok tidak sampai ke pembeli di luar daerah',
          'Pencatatan penjualan ke warung dan pasar tradisional masih manual dan mudah hilang',
          'Pembeli kesulitan membandingkan ketersediaan stok antarkabupaten di Jawa Barat',
        ],
      },
      features: [
        'Landing Page "Stabilkan Pasokan, Sejahterakan Petani Jawa Barat" dengan statistik 500+ Petani & 27 Kabupaten',
        'Dashboard Pembeli dengan Peta Supply Jawa Barat interaktif (Legenda Supply Tinggi, Sedang, Rendah)',
        'Panel Detail Wilayah (mis. Kota Sukabumi) berisi ringkasan pasokan, daftar komoditas, & kotak Tips Pembeli',
        'Dashboard Petani — halaman Distribusi Penjualan lengkap dengan status komoditas, Grade Kualitas, dan tujuan kirim',
        'Modal Tambah Produk Baru (dengan Estimasi Total Nilai otomatis) & modal Tambah Riwayat Penjualan',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Petani & Pembeli', caption: 'Alur dari petani mengunggah stok panen hingga pembeli menemukan pasokan wilayah lewat Peta Supply.' },
      { title: 'Information Architecture', caption: 'Struktur navigasi Landing Page, Dashboard Pembeli, dan Dashboard Manajemen Petani.' },
      { title: 'Sketsa Visualisasi Peta Jabar', caption: 'Eksplorasi penempatan peta 27 kabupaten/kota Jawa Barat dan kartu ringkasan wilayah.' },
      { title: 'Wireframe', caption: 'Kerangka halaman utama, dashboard peta, tabel distribusi, dan modal input.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Agritech', caption: 'Komponen peta choropleth, badge grade komoditas, kartu metrik, dan formulir kalkulasi otomatis.' },
      { title: 'UI Final — AgroSupply', caption: 'Tampilan lengkap Landing Page, Dashboard Peta Supply Jawa Barat, Distribusi Penjualan, dan Modal Input.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi ekosistem agrikultur dua sisi untuk kompetisi @technoday_unnes.' },
    ],
    deliverables: [
      { title: 'Landing Page AgroSupply', caption: 'Pengenalan ekosistem digital penghubung petani dan pembeli di Jawa Barat.' },
      { title: 'Dashboard Peta Supply Jabar', caption: 'Pemetaan pasokan 27 kabupaten/kota dengan rincian komoditas dan Tips Pembeli.' },
      { title: 'UI Final — AgroSupply', caption: 'Desain antarmuka lengkap platform rantai pasok pertanian AgroSupply.' },
      { title: 'Manajemen Distribusi & Modal Input', caption: 'Pencatatan produk panen ber-grade dan riwayat distribusi penjualan petani.' },
    ],
    palette: [
      { name: 'Agro Green', hex: '#16A34A' },
      { name: 'Deep Forest', hex: '#064E3B' },
      { name: 'Fresh Leaf', hex: '#22C55E' },
      { name: 'Clean Surface', hex: '#F8FAFC' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyajikan peta 27 kabupaten/kota Jawa Barat agar mudah dieksplorasi',
        problem: 'Banyaknya wilayah di Jawa Barat dapat membuat peta terlihat penuh dan membingungkan pembeli.',
        action: 'Menggunakan kode warna status pasokan yang jelas pada peta dan menampilkan rincian komoditas di panel samping saat suatu kota/kabupaten dipilih.',
      },
      {
        title: 'Membuat pencatatan produk dan penjualan yang ramah bagi petani',
        problem: 'Formulir yang terlalu rumit akan menghambat petani dalam memperbarui stok panen mereka.',
        action: 'Merancang modal Tambah Produk Baru dan Tambah Riwayat Penjualan yang bersih, terstruktur, dan menghitung estimasi nilai jual secara otomatis.',
      },
    ],
    impact: {
      headline: 'Lomba team project UI/UX @technoday_unnes untuk platform pemetaan pasokan pertanian Jawa Barat.',
      highlights: [
        'Menghubungkan pemetaan pasokan 27 kabupaten/kota Jawa Barat dengan manajemen penjualan petani',
        'Mendorong transparansi harga dan efisiensi distribusi komoditas langsung dari petani ke pembeli',
      ],
      metrics: [
        { value: '27', label: 'Kabupaten/Kota Jabar terpetakan' },
        { value: '2', label: 'Ekosistem peran: Petani & Pembeli' },
        { value: '5', label: 'Layar & modal utama terintegrasi' },
      ],
      reflections: [
        'Produk agritech yang efektif harus mampu menjembatani pandangan makro (peta pasokan wilayah) dengan pencatatan mikro (penjualan harian petani).',
        'Rekomendasi kontekstual seperti Tips Pembeli mengubah data peta menjadi keputusan transaksi yang nyata.',
      ],
    },
  }),

  lombaBase({
    slug: 'apollo',
    title: 'APOLLO',
    tagline: 'Website dan IoT monitoring dashboard untuk reaktor pirolisis cerdas pengubah limbah plastik menjadi energi listrik bersih (PKM-KC IPB University).',
    kind: 'UI/UX & IoT Web',
    year: '2025',
    badge: 'Lomba Team Project PKM-KC · IPB University',
    color: '#b6f000',
    burst: '#f97316',
    meta: {
      role: 'UI/UX Designer & Front-End',
      contextLabel: 'Lomba Team Project PKM-KC IPB',
      duration: 'Masa PKM-KC',
      team: 'Tim PKM-KC Sekolah Vokasi IPB University',
      platform: 'Web (Landing Page & IoT Dashboard)',
      tools: ['Fg', 'HT', 'CS', 'JS', 'Re'],
      methodPills: ['Figma', 'UI/UX Design', 'IoT Dashboard', 'Waste-to-Energy', 'PKM-KC IPB', 'Data Visualization'],
    },
    context: {
      summary:
        'APOLLO adalah proyek tim Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) dari Sekolah Vokasi IPB University. Mengusung gagasan "Ubah Plastik Jadi Listrik Dengan Cerdas", APOLLO merupakan reaktor pirolisis berbasis IoT (ESP32 · GSM · Cloud) yang mengonversi limbah plastik menjadi energi listrik bersih sebagai solusi Waste-to-Energy untuk wilayah dan desa terpencil di Indonesia. Proyek ini mencakup perancangan Landing Page publik untuk memperkenalkan teknologi dan tim APOLLO, serta Web IoT Monitoring Dashboard untuk memantau suhu reaktor, tegangan listrik, kadar gas, dan riwayat reduksi emisi secara real-time.',
      facts: [
        { k: 'Program', v: 'PKM-KC Sekolah Vokasi · IPB University' },
        { k: 'Jenis produk', v: 'Landing Page & IoT Telemetry Web Dashboard' },
        { k: 'Perangkat keras', v: 'Smart Pyrolysis Reactor + ESP32 GSM Cloud' },
        { k: 'Fokus solusi', v: 'Waste-to-Energy (Limbah Plastik → Listrik AC 220V)' },
      ],
      goals: [
        'Memperkenalkan cara kerja, dampak lingkungan, dan integrasi sistem Reaktor Pirolisis APOLLO lewat landing page yang futuristik dan meyakinkan.',
        'Memantau parameter kritis reaktor secara real-time: Suhu Tungku (570°C), Suhu Kondensor (248°C), Tegangan (220.4V), Daya Output (2.4 kW), dan Kadar Gas MQ-2 (22 ppm).',
        'Menyajikan grafik tren pemantauan suhu serta laporan riwayat reduksi emisi CO2 dan komposisi output pirolisis.',
      ],
      scope: [
        'Riset parameter telemetri sensor IoT bersama tim rekayasa perangkat keras PKM-KC IPB',
        'Perancangan Landing Page APOLLO (Hero live status, Solusi Waste-to-Energy, Sistem Terintegrasi, Tim, & Kolaborasi)',
        'Desain IoT Monitoring Dashboard (Overview Reaktor, Pemantauan Suhu Multi-Chart, Kesehatan Alat, & Riwayat Emisi)',
        'Implementasi antarmuka web modern untuk demonstrasi dan pemantauan sistem',
      ],
    },
    problem: {
      quote: 'Reaktor pirolisis bekerja pada suhu ratusan derajat celcius untuk mengubah plastik menjadi listrik; tanpa dashboard pemantauan IoT yang jelas, operator sulit memantau kestabilan suhu, daya, dan keamanan gas dari jarak jauh.',
      whyItMatters:
        'Keamanan operasional reaktor pirolisis dan pembuktian efisiensi konversi energi (kWh listrik yang dihasilkan per kg plastik) sangat bergantung pada pembacaan sensor real-time yang akurat dan mudah dipahami.',
      targetContext:
        'Tim operator dan peneliti PKM-KC IPB University, pengelola fasilitas pengolahan sampah desa, serta mitra kolaborasi Waste-to-Energy.',
      user: {
        title: 'Masalah operasional & komunikasi teknologi',
        points: [
          'Data sensor mentah dari mikrokontroler ESP32 (suhu tungku, kondensor, tegangan, arus, dan gas MQ-2) sulit dianalisis jika hanya tampil dalam bentuk angka log.',
          'Operator perlu segera mengetahui apakah suhu reaktor berada di rentang optimal (450–660°C) dan status gas tetap aman.',
          'Masyarakat dan calon mitra membutuhkan penjelasan visual yang mudah dipahami mengenai cara kerja konversi limbah plastik menjadi listrik.',
        ],
      },
      business: {
        title: 'Tantangan desain IoT & Cleantech',
        points: [
          'Merancang antarmuka berlatar gelap (dark mode) pada landing page untuk menonjolkan kesan teknologi tinggi, serta mode terang bersih pada dashboard pemantauan.',
          'Menampilkan 4 grafik garis real-time sekaligus (Suhu Tungku, Suhu Kondensor, Daya Output, dan Kadar Gas MQ-2) dengan kode warna yang tegas.',
          'Menyajikan metrik keberlanjutan (Reduksi Emisi CO2 85%, plastik terolah, dan output energi) secara meyakinkan.',
        ],
      },
      hmw: 'Bagaimana kami merancang antarmuka digital yang menjelaskan inovasi Waste-to-Energy APOLLO kepada publik sekaligus memberikan kendali pemantauan IoT yang presisi bagi operator reaktor?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Berdiskusi dengan tim perangkat keras PKM-KC IPB mengenai sensor reaktor pirolisis dan indikator keselamatan kerja.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menentukan struktur dua antarmuka: Landing Page edukasi publik & IoT Dashboard untuk telemetri operasional.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang widget live suhu 525°C di hero, kartu 6 parameter sensor di dashboard, dan halaman analitik Riwayat.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun desain visual dengan kontras Volt Lime (#B6F000) dan Reactor Orange (#F97316) di atas warna dark space.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji keterbacaan indikator status sensor (Optimal/Aman) dan grafik tren waktu nyata bersama tim PKM-KC.' },
    ],
    research: {
      methods: [
        { title: 'Pemetaan sensor IoT ESP32', desc: 'Mengidentifikasi parameter utama: Suhu Tungku (°C), Suhu Kondensor (°C), Tegangan (V), Daya (kW), Efisiensi (%), dan Gas MQ-2 (ppm).' },
        { title: 'Studi dashboard industri & energi', desc: 'Mempelajari tata letak kartu telemetri dengan bar indikator batas aman dan grafik tren multi-kanal.' },
        { title: 'Penyusunan narasi PKM-KC', desc: 'Mengemas data masalah sampah plastik Indonesia dan solusi Waste-to-Energy ke dalam alur landing page.' },
      ],
      insights: [
        { title: 'Indikator batas aman mempercepat respons', desc: 'Menampilkan bar progres dan label "Optimal" atau "Aman" di bawah angka suhu/gas membuat operator tidak perlu menghafal ambang batas.' },
        { title: 'Live preview di halaman depan menarik perhatian', desc: 'Menampilkan kartu simulasi "Suhu Reaktor Saat Ini: 525°C · Output 5.6 kWh · 18.4 kg Plastik" di hero langsung menjelaskan fungsi produk.' },
        { title: 'Data dampak lingkungan memperkuat nilai inovasi', desc: 'Grafik batang Reduksi Emisi CO2 dan donut chart Komposisi Output Pirolisis membuktikan manfaat ekologis alat.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Presisi dan real-time', desc: 'Setiap kartu sensor menampilkan nilai terkini, satuan ukur yang jelas, serta indikator status konektivitas ESP32 LIVE.' },
        { title: 'Hierarki warna berbasis fungsi', desc: 'Oranye untuk parameter panas/suhu tungku, biru untuk kondensor, hijau/lime untuk energi listrik dan efisiensi, serta merah muda untuk sensor gas.' },
        { title: 'Komunikasi sains yang memukau', desc: 'Landing page memadukan tipografi tegas dengan kartu bento yang menjelaskan 5 keunggulan sistem APOLLO.' },
      ],
      process: [
        { title: 'Arsitektur Informasi Landing Page & Dashboard', desc: 'Menyusun navigasi Landing Page (Tentang, Teknologi, Tim, Hubungi Kami) dan Sidebar Dashboard (Dashboard, Pemantauan Suhu, Kesehatan Alat, Riwayat, Pengaturan).' },
        { title: 'Wireframing Telemetri & Grafik', desc: 'Merancang grid kartu metrik sensor, grafik garis waktu nyata, dan grafik riwayat emisi.' },
        { title: 'High-Fidelity Visual Design', desc: 'Menerapkan estetika cleantech modern dengan aksen lime elektrik dan indikator status menyala.' },
        { title: 'Integrasi & Presentasi PKM-KC IPB', desc: 'Menyajikan antarmuka sebagai bagian dari ekosistem karya cipta Reaktor Pirolisis APOLLO.' },
      ],
      decisions: [
        { title: 'Widget Live Status Reaktor di Hero Landing Page', why: 'Langsung menunjukkan kepada pengunjung bagaimana sistem IoT memantau suhu 525°C, output 5.6 kWh, dan plastik yang diproses.' },
        { title: 'Grid 2x2 Grafik Real-Time di halaman Pemantauan Suhu', why: 'Memungkinkan operator membandingkan kurva Suhu Tungku, Suhu Kondensor, Daya Output, dan Kadar Gas MQ-2 secara simultan.' },
        { title: 'Halaman Riwayat dengan analitik emisi & komposisi output', why: 'Mendokumentasikan dampak jangka panjang reaktor terhadap pengurangan emisi CO2 dan volume sampah plastik terolah.' },
      ],
      persona: {
        name: 'Kenji Morales & Tim Operator PKM-KC',
        role: 'Operator Reaktor Pirolisis & Peneliti Muda IPB University',
        age: '20 tahun',
        occupation: 'Mahasiswa Teknik & Operator Sistem IoT',
        location: 'Sekolah Vokasi IPB University, Bogor',
        quote: 'Saat reaktor beroperasi mengubah plastik menjadi listrik, kami harus bisa memantau kestabilan suhu tungku, daya output, dan kadar gas secara real-time dari layar dashboard.',
        goals: [
          'Memantau suhu reaktor (570°C), suhu kondensor (248°C), dan daya listrik (2.4 kW) secara akurat dan real-time',
          'Memastikan kadar gas MQ-2 tetap berada di ambang aman selama proses pirolisis berlangsung',
          'Menunjukkan bukti dampak konversi sampah plastik dan reduksi emisi kepada dosen pembimbing, juri, dan mitra desa',
        ],
        pains: [
          'Sulit mengawasi kestabilan suhu dan tegangan jika hanya mengandalkan layar LCD kecil di dekat alat panas',
          'Risiko keterlambatan deteksi jika terjadi lonjakan suhu atau kebocoran gas tanpa grafik tren',
          'Butuh media presentasi web yang profesional untuk memperkenalkan teknologi APOLLO ke publik',
        ],
      },
      features: [
        'Landing Page "Ubah Plastik Jadi Listrik Dengan Cerdas" lengkap dengan widget Live Reactor Status (525°C, 5.6 kWh)',
        'Section Solusi Waste-to-Energy, Bento Grid Sistem Terintegrasi Penuh, Profil Tim PKM-KC, & Form Kolaborasi',
        'Dashboard Utama Reaktor Pirolisis APOLLO (timer operasi, suhu reaktor 570°C, kondensor 248°C, 220.4V, 2.4 kW, 22 ppm)',
        'Halaman Pemantauan Suhu dengan 4 grafik kurva real-time (Suhu Tungku, Suhu Kondensor, Daya Output, Kadar Gas MQ-2)',
        'Halaman Riwayat & Analitik Keberlanjutan (Reduksi Emisi CO2, Komposisi Output Pirolisis, & Pertumbuhan Sampah Terolah)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Operator & Pengunjung', caption: 'Alur dari halaman pengenalan teknologi publik menuju dashboard pemantauan sensor IoT reaktor.' },
      { title: 'Information Architecture', caption: 'Struktur menu Landing Page dan 5 modul pada Sidebar IoT Monitoring Dashboard.' },
      { title: 'Sketsa Kartu Telemetri & Grafik', caption: 'Eksplorasi tata letak indikator suhu, voltase, gas, dan grafik multi-sensor.' },
      { title: 'Wireframe', caption: 'Kerangka Landing Page Waste-to-Energy dan 3 layar utama Dashboard IoT APOLLO.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Cleantech & IoT', caption: 'Komponen widget sensor, badge status ESP32 Connected, grafik telemetri, dan tombol Manual Book.' },
      { title: 'UI Final — APOLLO (PKM-KC IPB)', caption: 'Tampilan lengkap Landing Page dan 3 layar IoT Monitoring Dashboard Reaktor Pirolisis APOLLO.', isFeatured: true },
      { title: 'Prototype & Implementasi Web', caption: 'Antarmuka web terintegrasi untuk mendukung demonstrasi karya cipta PKM-KC IPB University.' },
    ],
    deliverables: [
      { title: 'Landing Page Waste-to-Energy', caption: 'Penjelasan teknologi reaktor pirolisis IoT, metrik performa, dan profil tim PKM-KC IPB.' },
      { title: 'Dashboard Utama Reaktor IoT', caption: 'Pemantauan 7 parameter inti reaktor secara langsung beserta timer durasi operasi.' },
      { title: 'UI Final — APOLLO', caption: 'Desain antarmuka lengkap website dan dashboard monitoring Reaktor Pirolisis APOLLO.' },
      { title: 'Pemantauan Suhu & Riwayat Emisi', caption: 'Grafik tren sensor real-time dan analitik dampak pengurangan sampah plastik.' },
    ],
    palette: [
      { name: 'Volt Lime', hex: '#B6F000' },
      { name: 'Reactor Orange', hex: '#F97316' },
      { name: 'Space Dark', hex: '#0B0D17' },
      { name: 'Cyber Slate', hex: '#161B2E' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Membuat data sensor teknik mesin & elektro mudah dipahami sekilas',
        problem: 'Banyaknya satuan ukur (°C, V, kW, %, ppm, kkal/kg) berisiko membuat operator lambat mengenali anomali.',
        action: 'Memberikan kode warna spesifik untuk tiap jenis sensor serta menambahkan bar batas aman dan badge status ("Optimal", "Aman", "Stabil") di setiap kartu.',
      },
      {
        title: 'Menyatukan identitas Landing Page publik dan Dashboard operasional',
        problem: 'Landing page membutuhkan kesan futuristik yang kuat, sedangkan dashboard membutuhkan kejelasan baca untuk grafik rapat.',
        action: 'Menggunakan tema dark-futuristic beraksen Volt Lime pada Landing Page dan Sidebar, dipadukan dengan kanvas putih bersih pada area grafik Dashboard.',
      },
    ],
    impact: {
      headline: 'Team project PKM-KC IPB University untuk inovasi Waste-to-Energy Reaktor Pirolisis berbasis IoT.',
      highlights: [
        'Menghubungkan pemantauan sensor ESP32 (suhu, daya listrik, & gas) ke dalam satu dashboard web real-time',
        'Mempresentasikan inovasi konversi sampah plastik menjadi listrik bersih bagi desa terpencil di Indonesia',
      ],
      metrics: [
        { value: '570°C', label: 'Pemantauan suhu tungku real-time' },
        { value: '220V', label: 'Output listrik bersih terukur' },
        { value: '4', label: 'Layar web & dashboard IoT utama' },
      ],
      reflections: [
        'Berkolaborasi dalam tim lintas disiplin di PKM-KC mengajarkan cara menerjemahkan cara kerja perangkat keras (hardware/IoT) menjadi antarmuka digital yang intuitif.',
        'Visualisasi data yang baik bukan hanya membantu operator menjaga keamanan alat, tetapi juga membuat dampak inovasi teknologi terlihat nyata bagi masyarakat.',
      ],
    },
  }),
];
