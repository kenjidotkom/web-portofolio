// ===================================================================
// STUDI KASUS — ARENA LOMBA UI/UX
// Draf analisis versi awal. Sesuaikan fakta (tim, durasi, hasil) dengan
// data aslimu; struktur halaman otomatis mengikuti isi file ini.
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
    tagline: 'Aplikasi belajar bergaya gamifikasi yang merapikan mata kuliah, tugas, dan achievement dalam satu ruang yang menyenangkan.',
    kind: 'Mobile App', year: '2025', color: '#f7a8b8', burst: '#2a1540',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Mobile', tools: ['Fg', 'Ai'], event: '@himiunsurya' },
    context: {
      summary: 'Brainspace dirancang untuk lomba UI/UX bertema edutech. Mahasiswa sering kehilangan motivasi karena jadwal kuliah, tugas, dan target belajar tercecer di banyak aplikasi. Brainspace mengubah rutinitas belajar menjadi perjalanan yang terukur dengan elemen gamifikasi.',
      facts: [{ k: 'Penyelenggara', v: '@himiunsurya' }, { k: 'Tema', v: 'Edutech & produktivitas belajar' }, { k: 'Jenis produk', v: 'Aplikasi mobile' }, { k: 'Pengguna utama', v: 'Mahasiswa' }],
      goals: ['Menyatukan jadwal, tugas, dan target belajar dalam satu aplikasi.', 'Meningkatkan konsistensi belajar lewat umpan balik dan penghargaan.', 'Menjaga gamifikasi tetap bermakna, bukan sekadar hiasan.'],
      scope: ['Riset kebiasaan belajar mahasiswa', 'Desain sistem poin, level, dan achievement', 'Prototipe interaktif', 'Presentasi lomba'],
    },
    problem: {
      quote: 'Aku tahu harus belajar, tapi tugas dan jadwalnya berantakan jadi malah menunda terus.',
      user: { title: 'Masalah pengguna', points: ['Tugas dan jadwal tersebar di catatan, chat grup, dan kalender berbeda.', 'Motivasi turun karena progres belajar tidak terlihat.', 'Aplikasi produktivitas yang ada terasa kaku dan cepat ditinggalkan.'] },
      business: { title: 'Tantangan solusi', points: ['Gamifikasi yang berlebihan bisa mengalihkan dari tujuan belajar.', 'Harus tetap relevan bagi mahasiswa dengan gaya belajar berbeda.', 'Perlu retensi pengguna di luar masa tugas besar.'] },
      hmw: 'Bagaimana kami membuat rutinitas belajar terasa terukur, ringan, dan memotivasi tanpa menambah beban?',
    },
    research: {
      methods: [{ title: 'Survei kebiasaan belajar', desc: 'Memetakan cara mahasiswa mencatat tugas dan faktor yang membuat mereka menunda.' }, { title: 'Benchmark gamifikasi', desc: 'Mempelajari mekanik streak, level, dan reward pada aplikasi belajar populer.' }, { title: 'Wawancara singkat', desc: 'Menggali momen kehilangan motivasi dan pemicu untuk kembali belajar.' }],
      insights: [{ title: 'Progres yang terlihat memotivasi', desc: 'Visualisasi kemajuan harian mengurangi rasa kewalahan.' }, { title: 'Reward harus terkait aksi nyata', desc: 'Poin dari menyelesaikan tugas lebih bermakna daripada poin dari sekadar membuka aplikasi.' }, { title: 'Sederhana menang atas lengkap', desc: 'Input tugas yang cepat lebih menentukan penggunaan jangka panjang.' }],
    },
    solution: {
      principles: [{ title: 'Satu ruang, semua kebutuhan', desc: 'Beranda menampilkan jadwal, tugas terdekat, dan progres sekaligus.' }, { title: 'Gamifikasi bermakna', desc: 'Level dan achievement terkait penyelesaian tugas dan konsistensi.' }, { title: 'Ramah dan ringan', desc: 'Palet pastel dan ilustrasi untuk suasana belajar yang santai.' }],
      process: [{ title: 'Riset & sintesis', desc: 'Merangkum temuan menjadi persona dan prioritas fitur.' }, { title: 'Desain sistem gamifikasi', desc: 'Menyusun aturan poin, level, dan achievement yang adil.' }, { title: 'Prototipe', desc: 'Membangun alur beranda, tugas, jadwal, dan profil achievement.' }, { title: 'Penyempurnaan', desc: 'Menguji keterbacaan dan memangkas elemen yang tidak perlu.' }],
      decisions: [{ title: 'Quick-add tugas', why: 'Mengurangi gesekan input sehingga kebiasaan mencatat bertahan.' }, { title: 'Streak dengan toleransi', why: 'Mencegah rasa gagal berlebih saat melewatkan satu hari.' }, { title: 'Ringkasan mingguan', why: 'Memberikan refleksi dan alasan untuk kembali.' }],
      persona: { name: 'Nadia, 20', role: 'Mahasiswa semester 3', goals: ['Mengatur tugas dan jadwal dalam satu tempat', 'Tetap termotivasi belajar'], pains: ['Sering menunda', 'Bingung memprioritaskan tugas'] },
    },
    deliverables: [{ title: 'Persona & journey', caption: 'Pemahaman kebiasaan dan hambatan belajar.' }, { title: 'User flow', caption: 'Alur tambah tugas hingga penyelesaian dan reward.' }, { title: 'Beranda & tugas', caption: 'Ringkasan harian dan manajemen tugas.' }, { title: 'Sistem achievement', caption: 'Level, badge, dan progres.' }, { title: 'Design system', caption: 'Warna, tipografi, ikon, dan komponen.' }, { title: 'Presentasi lomba', caption: 'Narasi masalah, solusi, dan dampak.' }],
    palette: [{ name: 'Brain Pink', hex: '#F7A8B8' }, { name: 'Royal Purple', hex: '#2A1540' }, { name: 'Neon Lime', hex: '#D9F20E' }, { name: 'Ink', hex: '#161616' }, { name: 'White', hex: '#FFFFFF' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Gamifikasi yang tidak manipulatif', problem: 'Mekanik reward berisiko mendorong kebiasaan tidak sehat.', action: 'Mengaitkan reward dengan penyelesaian tugas nyata dan menambahkan toleransi streak.' }, { title: 'Terlalu banyak fitur', problem: 'Ide fitur berlimpah membuat aplikasi terasa penuh.', action: 'Memprioritaskan tiga fitur inti: tugas, jadwal, achievement.' }, { title: 'Waktu terbatas', problem: 'Prototipe dan presentasi harus selesai bersamaan.', action: 'Membagi tugas dan menetapkan checkpoint harian.' }],
    impact: { headline: 'Konsep belajar terukur yang mengubah kewajiban menjadi kebiasaan.', metrics: [{ value: '3', label: 'Fitur inti' }, { value: '1', label: 'Sistem achievement terintegrasi' }, { value: '1', label: 'Prototipe interaktif' }], reflections: ['Gamifikasi efektif bila selaras dengan tujuan pengguna.', 'Kesederhanaan input menentukan keberlanjutan penggunaan.', 'Selanjutnya: menguji retensi dengan kelompok mahasiswa nyata.'] },
  }),

  lombaBase({
    slug: 'elderlink',
    title: 'ElderLink',
    tagline: 'Aplikasi pendamping lansia dengan jadwal obat, QR akses cepat, dan video call keluarga yang dirancang untuk jari dan mata yang tidak lagi muda.',
    kind: 'Mobile App', year: '2025', color: '#d9f20e', burst: '#161616',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Mobile', tools: ['Fg', 'Ai'], event: '@himiunsurya' },
    context: {
      summary: 'ElderLink dirancang untuk tema healthcare. Lansia sering lupa minum obat, kesulitan memakai aplikasi yang rumit, dan terpisah jarak dari keluarga. ElderLink menyatukan pengingat obat, informasi medis darurat lewat QR, dan komunikasi keluarga dalam antarmuka yang sangat sederhana.',
      facts: [{ k: 'Penyelenggara', v: '@himiunsurya' }, { k: 'Tema', v: 'Healthcare & aksesibilitas' }, { k: 'Jenis produk', v: 'Aplikasi mobile' }, { k: 'Pengguna', v: 'Lansia, keluarga, dan pendamping' }],
      goals: ['Memastikan kepatuhan minum obat lewat pengingat yang jelas.', 'Menyediakan akses cepat ke informasi darurat.', 'Menjaga kedekatan dengan keluarga lewat komunikasi sederhana.'],
      scope: ['Riset kebutuhan dan keterbatasan pengguna lansia', 'Desain antarmuka ramah lansia', 'Fitur jadwal obat, QR, dan video call', 'Prototipe dan presentasi'],
    },
    problem: {
      quote: 'Tulisannya kecil, tombolnya banyak. Saya takut salah pencet.',
      user: { title: 'Masalah pengguna', points: ['Lansia lupa jadwal obat dan dosis, berisiko kesehatan.', 'Antarmuka aplikasi umum terlalu padat dan bertulisan kecil.', 'Keluarga sulit memantau kondisi lansia dari jauh.'] },
      business: { title: 'Tantangan solusi', points: ['Harus aman dan sederhana tanpa terkesan menggurui.', 'Ada dua kelompok pengguna: lansia dan keluarga dengan kebutuhan berbeda.', 'Informasi medis darurat harus mudah diakses orang lain.'] },
      hmw: 'Bagaimana kami membantu lansia mengelola obat dan tetap terhubung dengan keluarga tanpa membuat mereka merasa kewalahan oleh teknologi?',
    },
    research: {
      methods: [{ title: 'Studi pedoman aksesibilitas', desc: 'Mempelajari rekomendasi ukuran teks, kontras, dan target sentuh untuk lansia.' }, { title: 'Wawancara keluarga', desc: 'Menggali kekhawatiran dan cara keluarga memantau lansia saat ini.' }, { title: 'Analisis aplikasi kesehatan', desc: 'Menemukan hambatan penggunaan pada aplikasi pengingat obat populer.' }],
      insights: [{ title: 'Satu layar, satu keputusan', desc: 'Pilihan yang banyak membuat lansia ragu dan menghindari aplikasi.' }, { title: 'Bahasa yang akrab', desc: 'Kata sehari-hari dan ikon yang konkret lebih mudah dipahami.' }, { title: 'Keluarga adalah jaring pengaman', desc: 'Notifikasi untuk keluarga menambah rasa aman bagi kedua pihak.' }],
    },
    solution: {
      principles: [{ title: 'Besar, jelas, kontras', desc: 'Teks besar, tombol lebar, dan kontras tinggi di setiap layar.' }, { title: 'Sedikit pilihan', desc: 'Beranda hanya berisi obat berikutnya, panggil keluarga, dan darurat.' }, { title: 'Aman dan menenangkan', desc: 'Warna dan bahasa yang hangat, dengan konfirmasi sebelum aksi penting.' }],
      process: [{ title: 'Pemahaman pengguna', desc: 'Merangkum keterbatasan fisik dan kognitif menjadi pedoman desain.' }, { title: 'Rancang fitur inti', desc: 'Jadwal obat, QR darurat, dan video call satu ketukan.' }, { title: 'Prototipe & uji keterbacaan', desc: 'Memeriksa ukuran teks dan jarak antar tombol.' }, { title: 'Dashboard keluarga', desc: 'Menambahkan tampilan pemantauan sederhana untuk pendamping.' }],
      decisions: [{ title: 'Pengingat obat dengan konfirmasi “sudah minum”', why: 'Memberi kepastian bagi lansia dan keluarga.' }, { title: 'QR informasi medis', why: 'Orang lain dapat membantu cepat saat keadaan darurat.' }, { title: 'Video call satu ketukan dari kontak favorit', why: 'Menghilangkan langkah yang menyulitkan.' }],
      persona: { name: 'Pak Harun, 68', role: 'Pensiunan dengan penyakit kronis', goals: ['Tidak melewatkan jadwal obat', 'Mudah menghubungi anak dan cucu'], pains: ['Teks terlalu kecil', 'Takut salah pencet dan merusak aplikasi'] },
    },
    deliverables: [{ title: 'Pedoman ramah lansia', caption: 'Ukuran teks, kontras, dan target sentuh.' }, { title: 'User flow', caption: 'Dari pengingat obat sampai konfirmasi minum.' }, { title: 'Beranda sederhana', caption: 'Tiga aksi utama dalam satu layar.' }, { title: 'QR darurat', caption: 'Kartu informasi medis yang dapat dipindai.' }, { title: 'Video call keluarga', caption: 'Kontak favorit dan panggilan satu ketukan.' }, { title: 'Dashboard keluarga', caption: 'Pemantauan kepatuhan obat dan notifikasi.' }],
    palette: [{ name: 'Care Lime', hex: '#D9F20E' }, { name: 'Ink', hex: '#161616' }, { name: 'Calm White', hex: '#FFFFFF' }, { name: 'Soft Green', hex: '#98A60A' }, { name: 'Alert Red', hex: '#E8112D' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Menyederhanakan tanpa meremehkan', problem: 'Terlalu sederhana bisa terasa menggurui.', action: 'Menggunakan bahasa hormat dan kontrol penuh di tangan pengguna.' }, { title: 'Dua kelompok pengguna', problem: 'Kebutuhan lansia dan keluarga berbeda.', action: 'Memisahkan pengalaman: mode lansia yang minimalis dan mode keluarga yang informatif.' }, { title: 'Kontras vs estetika', problem: 'Kontras tinggi tidak boleh membuat tampilan keras.', action: 'Memakai blok warna besar dengan teks gelap yang tegas dan ruang putih cukup.' }],
    impact: { headline: 'Teknologi yang menenangkan: lebih sedikit tombol, lebih banyak kepastian.', metrics: [{ value: '3', label: 'Aksi utama di beranda' }, { value: '1', label: 'Ketukan untuk video call' }, { value: '2', label: 'Mode: lansia & keluarga' }], reflections: ['Mendesain untuk pengguna lansia melatih disiplin pada kejelasan dan hierarki.', 'Fitur terbaik adalah yang membuat pengguna merasa aman, bukan sekadar canggih.', 'Selanjutnya: uji langsung dengan lansia untuk memvalidasi ukuran dan alur.'] },
  }),

  lombaBase({
    slug: 'bansoskita',
    title: 'BansosKita',
    tagline: 'Aplikasi penyaluran dan pemantauan bantuan sosial yang aman, transparan, dan mudah dipahami oleh penerima maupun penyalur.',
    kind: 'Mobile App', year: '2025', color: '#aeb5f7', burst: '#2a1540',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Mobile', tools: ['Fg', 'Ai'], event: '@himiunsurya' },
    context: {
      summary: 'BansosKita dirancang untuk tema dampak sosial dan fintech. Penyaluran bantuan sosial kerap menghadapi masalah data penerima yang tidak tepat sasaran, proses antre yang panjang, dan kurangnya transparansi. BansosKita menyatukan verifikasi penerima, penyaluran, dan pelacakan dalam satu aplikasi.',
      facts: [{ k: 'Penyelenggara', v: '@himiunsurya' }, { k: 'Tema', v: 'Social impact & fintech' }, { k: 'Jenis produk', v: 'Aplikasi mobile' }, { k: 'Pengguna', v: 'Penerima, petugas penyalur, dan pengawas' }],
      goals: ['Memastikan bantuan tepat sasaran lewat verifikasi yang jelas.', 'Memberikan transparansi status dan riwayat bantuan.', 'Menyederhanakan proses untuk penerima dengan literasi digital beragam.'],
      scope: ['Analisis masalah penyaluran bansos', 'Desain alur verifikasi dan pencairan', 'Pelacakan status & riwayat', 'Prototipe dan presentasi'],
    },
    problem: {
      quote: 'Saya tidak tahu bantuan saya sudah cair atau belum, dan harus bertanya ke mana.',
      user: { title: 'Masalah pengguna', points: ['Penerima tidak mendapat kejelasan status dan jadwal bantuan.', 'Persyaratan dan dokumen sulit dipahami.', 'Antrean fisik memakan waktu dan biaya.'] },
      business: { title: 'Tantangan solusi', points: ['Data penerima rawan tidak akurat dan tumpang tindih.', 'Keamanan data pribadi dan transaksi harus terjamin.', 'Pengawasan publik membutuhkan transparansi tanpa membuka data sensitif.'] },
      hmw: 'Bagaimana kami membuat penyaluran bantuan terasa jelas dan adil bagi penerima sambil menjaga keamanan dan akuntabilitas?',
    },
    research: {
      methods: [{ title: 'Riset sistem penyaluran', desc: 'Memetakan alur dari pendataan hingga pencairan dan titik rawan kebocoran.' }, { title: 'Wawancara calon pengguna', desc: 'Memahami kesulitan penerima dan petugas di lapangan.' }, { title: 'Studi keamanan UX', desc: 'Mempelajari pola autentikasi yang aman namun mudah bagi pengguna awam.' }],
      insights: [{ title: 'Status yang jelas menenangkan', desc: 'Tahapan proses yang terlihat mengurangi kecemasan dan pertanyaan berulang.' }, { title: 'Bahasa sederhana', desc: 'Istilah administratif perlu diganti kalimat sehari-hari.' }, { title: 'Keamanan harus terasa', desc: 'Indikator verifikasi dan konfirmasi menumbuhkan rasa percaya.' }],
    },
    solution: {
      principles: [{ title: 'Transparan di setiap tahap', desc: 'Linimasa status dari terdaftar, diverifikasi, dijadwalkan, hingga diterima.' }, { title: 'Aman tanpa menyulitkan', desc: 'Verifikasi bertahap dan pesan keamanan yang mudah dipahami.' }, { title: 'Inklusif', desc: 'Bahasa sederhana, ikon jelas, dan dukungan bantuan di setiap langkah.' }],
      process: [{ title: 'Pemetaan alur', desc: 'Menggambar journey penerima dan petugas.' }, { title: 'Desain verifikasi', desc: 'Merancang unggah dokumen dan pengecekan status yang jelas.' }, { title: 'Pelacakan & riwayat', desc: 'Menyusun linimasa dan notifikasi.' }, { title: 'Prototipe & presentasi', desc: 'Menyatukan alur dan narasi dampak sosial.' }],
      decisions: [{ title: 'Linimasa status', why: 'Memberi kepastian dan mengurangi pertanyaan ke petugas.' }, { title: 'Checklist dokumen', why: 'Mengurangi pengajuan yang ditolak karena dokumen tidak lengkap.' }, { title: 'Pusat bantuan kontekstual', why: 'Membantu pengguna dengan literasi digital rendah.' }],
      persona: { name: 'Ibu Rahma, 42', role: 'Penerima bantuan, pedagang kecil', goals: ['Mengetahui status bantuan', 'Proses mudah tanpa antre'], pains: ['Persyaratan membingungkan', 'Tidak tahu harus bertanya ke mana'] },
    },
    deliverables: [{ title: 'Journey map', caption: 'Pengalaman penerima dari pendataan hingga pencairan.' }, { title: 'Alur verifikasi', caption: 'Unggah dokumen, cek status, dan konfirmasi.' }, { title: 'Linimasa bantuan', caption: 'Status tahap demi tahap dengan notifikasi.' }, { title: 'Riwayat & bukti', caption: 'Catatan penerimaan yang dapat diunduh.' }, { title: 'Dashboard petugas', caption: 'Pemantauan penyaluran dan antrian.' }, { title: 'Presentasi lomba', caption: 'Narasi dampak sosial dan akuntabilitas.' }],
    palette: [{ name: 'Trust Lavender', hex: '#AEB5F7' }, { name: 'Royal Purple', hex: '#2A1540' }, { name: 'Neon Lime', hex: '#D9F20E' }, { name: 'Ink', hex: '#161616' }, { name: 'White', hex: '#FFFFFF' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Menyeimbangkan keamanan & kemudahan', problem: 'Autentikasi ketat bisa menyulitkan pengguna awam.', action: 'Verifikasi bertahap dengan panduan kontekstual.' }, { title: 'Dua sisi pengguna', problem: 'Penerima dan petugas butuh antarmuka berbeda.', action: 'Merancang dua pengalaman dengan sistem desain yang sama.' }, { title: 'Transparansi vs privasi', problem: 'Data terbuka dapat membocorkan informasi sensitif.', action: 'Menampilkan status agregat dan menyamarkan data pribadi.' }],
    impact: { headline: 'Penyaluran bantuan yang terlihat, terlacak, dan dapat dipercaya.', metrics: [{ value: '4', label: 'Tahap status bantuan' }, { value: '2', label: 'Peran: penerima & petugas' }, { value: '1', label: 'Linimasa transparansi' }], reflections: ['Dalam layanan publik, kejelasan adalah bentuk empati.', 'Keamanan yang baik tidak membuat pengguna merasa dicurigai.', 'Selanjutnya: uji alur verifikasi dengan pengguna literasi digital rendah.'] },
  }),

  lombaBase({
    slug: 'aurora',
    title: 'AURORA',
    tagline: 'Aplikasi kesehatan dan kesejahteraan dengan dashboard progres dan pelacak harian yang mengajak pengguna merawat diri tanpa tekanan.',
    kind: 'Mobile App', year: '2026', color: '#ff3a12', burst: '#d9f20e',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Mobile', tools: ['Fg', 'Ai'], event: '@yayasanmuda' },
    context: {
      summary: 'AURORA dirancang untuk tema kesehatan dan kesejahteraan. Kaum muda sering mengabaikan tidur, aktivitas, dan kesehatan mental hingga muncul masalah. AURORA menggabungkan pelacak harian dengan dashboard progres yang menekankan kebiasaan kecil dan konsisten.',
      facts: [{ k: 'Penyelenggara', v: '@yayasanmuda' }, { k: 'Tema', v: 'Health & wellbeing' }, { k: 'Jenis produk', v: 'Aplikasi mobile' }, { k: 'Pengguna', v: 'Remaja dan dewasa muda' }],
      goals: ['Membantu pengguna membangun kebiasaan sehat secara bertahap.', 'Menyajikan data kesehatan dalam bentuk yang mudah dipahami.', 'Menjaga nada yang suportif, bukan menghakimi.'],
      scope: ['Riset kebiasaan & kesejahteraan', 'Desain pelacak harian', 'Dashboard progres dan insight', 'Prototipe & presentasi'],
    },
    problem: {
      quote: 'Aku ingin hidup lebih sehat, tapi aplikasinya bikin merasa gagal kalau sehari saja bolong.',
      user: { title: 'Masalah pengguna', points: ['Aplikasi kesehatan menuntut terlalu banyak input sehingga cepat ditinggalkan.', 'Data angka tidak memberi makna atau arahan tindakan.', 'Nada aplikasi yang menghakimi menurunkan motivasi.'] },
      business: { title: 'Tantangan solusi', points: ['Harus menjaga keterlibatan tanpa memicu kecemasan.', 'Data kesehatan sensitif memerlukan perlakuan privasi yang jelas.', 'Perlu menyeimbangkan aspek fisik dan mental dalam satu pengalaman.'] },
      hmw: 'Bagaimana kami membantu pengguna merawat diri lewat kebiasaan kecil yang konsisten tanpa membuat mereka merasa tertekan?',
    },
    research: {
      methods: [{ title: 'Survei kebiasaan', desc: 'Memetakan pola tidur, aktivitas, dan manajemen stres kaum muda.' }, { title: 'Benchmark aplikasi wellbeing', desc: 'Menganalisis cara aplikasi lain menyajikan progres dan umpan balik.' }, { title: 'Studi perilaku', desc: 'Mempelajari prinsip pembentukan kebiasaan dan desain yang suportif.' }],
      insights: [{ title: 'Kebiasaan kecil bertahan lebih lama', desc: 'Target realistis meningkatkan peluang konsistensi.' }, { title: 'Insight lebih bernilai dari angka', desc: 'Pengguna ingin tahu “apa artinya” dan “apa yang bisa dilakukan”.' }, { title: 'Nada suportif memotivasi', desc: 'Bahasa positif membuat pengguna ingin kembali.' }],
    },
    solution: {
      principles: [{ title: 'Kecil tapi konsisten', desc: 'Pelacak ringan dengan target harian yang dapat disesuaikan.' }, { title: 'Insight yang dapat ditindaklanjuti', desc: 'Dashboard menjelaskan tren dan memberi saran sederhana.' }, { title: 'Hangat dan suportif', desc: 'Warna oranye energik dan bahasa yang menyemangati.' }],
      process: [{ title: 'Memahami kebiasaan', desc: 'Merangkum temuan menjadi prioritas fitur.' }, { title: 'Desain pelacak', desc: 'Input cepat untuk tidur, aktivitas, dan suasana hati.' }, { title: 'Dashboard progres', desc: 'Visualisasi tren mingguan dan pencapaian.' }, { title: 'Prototipe & polesan', desc: 'Menguji keterbacaan dan nada pesan.' }],
      decisions: [{ title: 'Check-in harian 30 detik', why: 'Menjaga input tetap ringan agar konsisten.' }, { title: 'Pesan tanpa menghakimi', why: 'Menjaga motivasi saat target tidak tercapai.' }, { title: 'Ringkasan mingguan dengan satu saran', why: 'Memberi arah tanpa membebani.' }],
      persona: { name: 'Fira, 21', role: 'Mahasiswa dengan jadwal padat', goals: ['Tidur lebih teratur', 'Menjaga energi dan suasana hati'], pains: ['Mudah menyerah pada rutinitas', 'Tidak tahu harus mulai dari mana'] },
    },
    deliverables: [{ title: 'Persona & kebutuhan', caption: 'Profil pengguna dan kebiasaan kunci.' }, { title: 'User flow', caption: 'Alur check-in harian hingga insight mingguan.' }, { title: 'Pelacak harian', caption: 'Input tidur, aktivitas, dan suasana hati.' }, { title: 'Dashboard progres', caption: 'Tren, streak lembut, dan pencapaian.' }, { title: 'Design system', caption: 'Warna, tipografi, ikon, dan komponen.' }, { title: 'Presentasi lomba', caption: 'Narasi tentang kesejahteraan yang suportif.' }],
    palette: [{ name: 'Aurora Orange', hex: '#FF3A12' }, { name: 'Neon Lime', hex: '#D9F20E' }, { name: 'Ink', hex: '#0C0C0C' }, { name: 'Dusk', hex: '#2B2B2B' }, { name: 'White', hex: '#FFFFFF' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Menghindari tekanan', problem: 'Visualisasi target bisa membuat pengguna merasa gagal.', action: 'Streak lembut, bahasa positif, dan target yang bisa diatur.' }, { title: 'Privasi data', problem: 'Data kesehatan bersifat sensitif.', action: 'Menjelaskan penggunaan data secara ringkas dan memberi kontrol penuh.' }, { title: 'Menggabungkan fisik & mental', problem: 'Terlalu banyak metrik membingungkan.', action: 'Memilih tiga metrik inti dan satu insight utama per minggu.' }],
    impact: { headline: 'Kesejahteraan yang dibangun lewat kebiasaan kecil dan nada yang suportif.', metrics: [{ value: '3', label: 'Metrik inti harian' }, { value: '30 dtk', label: 'Target durasi check-in' }, { value: '1', label: 'Insight mingguan' }], reflections: ['Desain wellbeing menuntut kepekaan pada kata dan warna.', 'Insight yang bermakna lebih berharga daripada banyaknya grafik.', 'Selanjutnya: uji nada pesan dengan pengguna untuk memastikan terasa suportif.'] },
  }),

  lombaBase({
    slug: 'agrosupply',
    title: 'AgroSupply',
    tagline: 'Dashboard pemantauan pasokan pertanian berbasis peta yang membantu pengambil keputusan membaca ketersediaan komoditas dari hulu ke hilir.',
    kind: 'Web', year: '2025', color: '#98a60a', burst: '#e8112d',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Web (dashboard)', tools: ['Fg', 'Ai'], event: '@himatepa_ipb' },
    context: {
      summary: 'AgroSupply dirancang untuk tema agritech di lomba yang diselenggarakan HIMATEPA IPB. Ketersediaan komoditas pertanian sering tidak terpantau secara real time sehingga terjadi kesenjangan antara daerah surplus dan defisit. AgroSupply menyajikan peta pasokan, tren, dan peringatan dini dalam satu dashboard.',
      facts: [{ k: 'Penyelenggara', v: '@himatepa_ipb' }, { k: 'Tema', v: 'Agritech & ketahanan pangan' }, { k: 'Jenis produk', v: 'Dashboard web' }, { k: 'Pengguna', v: 'Pengambil kebijakan, pengelola logistik, dan analis' }],
      goals: ['Memvisualisasikan sebaran pasokan komoditas berbasis wilayah.', 'Memberi peringatan dini untuk potensi kelangkaan atau kelebihan.', 'Mendukung keputusan distribusi yang cepat dan tepat.'],
      scope: ['Riset kebutuhan data pengambil keputusan', 'Desain peta interaktif dan panel metrik', 'Sistem filter & peringatan', 'Prototipe & presentasi'],
    },
    problem: {
      quote: 'Saya perlu tahu daerah mana yang kekurangan stok sekarang, bukan laporan bulan lalu.',
      user: { title: 'Masalah pengguna', points: ['Data pasokan tersebar dan terlambat diperbarui.', 'Sulit membandingkan kondisi antar wilayah dan antar komoditas.', 'Peringatan kelangkaan baru diketahui setelah harga bergejolak.'] },
      business: { title: 'Tantangan solusi', points: ['Dashboard memuat banyak data namun harus tetap mudah dipindai.', 'Pengguna memiliki tingkat literasi data beragam.', 'Keputusan yang diambil berdampak luas sehingga data harus dapat dipercaya.'] },
      hmw: 'Bagaimana kami membuat kondisi pasokan antar wilayah terlihat sekilas dan mendorong tindakan tepat waktu?',
    },
    research: {
      methods: [{ title: 'Riset rantai pasok', desc: 'Memetakan alur komoditas dari produsen hingga konsumen dan titik krusialnya.' }, { title: 'Benchmark dashboard data', desc: 'Mempelajari pola peta, heatmap, dan panel ringkas pada dashboard publik.' }, { title: 'Pemetaan pengambil keputusan', desc: 'Merumuskan pertanyaan yang ingin dijawab tiap peran.' }],
      insights: [{ title: 'Peta adalah jangkar mental', desc: 'Pengguna berpikir per wilayah; peta menjadi pintu masuk utama.' }, { title: 'Anomali lebih penting dari rata-rata', desc: 'Dashboard harus menyorot yang menyimpang, bukan semua angka.' }, { title: 'Konteks waktu krusial', desc: 'Tren dan perbandingan periode membantu membaca kondisi.' }],
    },
    solution: {
      principles: [{ title: 'Peta sebagai pusat', desc: 'Heatmap pasokan per wilayah dengan detail saat dipilih.' }, { title: 'Sorot yang penting', desc: 'Peringatan dini dan anomali ditonjolkan dengan hierarki visual jelas.' }, { title: 'Bertahap dari ringkas ke rinci', desc: 'Ringkasan nasional → wilayah → komoditas.' }],
      process: [{ title: 'Menentukan pertanyaan kunci', desc: 'Merumuskan apa yang perlu dijawab dashboard.' }, { title: 'Rancang struktur data & layout', desc: 'Peta, kartu metrik, tren, dan daftar peringatan.' }, { title: 'Prototipe interaktif', desc: 'Filter komoditas, rentang waktu, dan detail wilayah.' }, { title: 'Pengujian keterbacaan', desc: 'Memastikan warna dan label mudah dibaca.' }],
      decisions: [{ title: 'Skala warna surplus–defisit', why: 'Mengomunikasikan kondisi secara intuitif dan aksesibel.' }, { title: 'Panel peringatan dini', why: 'Memprioritaskan tindakan sebelum masalah membesar.' }, { title: 'Filter komoditas & periode', why: 'Memberi fleksibilitas analisis tanpa kompleksitas.' }],
      persona: { name: 'Bu Dewi, 40', role: 'Analis ketahanan pangan daerah', goals: ['Memantau pasokan antar wilayah', 'Mengambil keputusan distribusi cepat'], pains: ['Data lambat dan tersebar', 'Sulit membandingkan wilayah'] },
    },
    deliverables: [{ title: 'Peta rantai pasok', caption: 'Alur komoditas dan titik pemantauan.' }, { title: 'Dashboard utama', caption: 'Peta, metrik kunci, dan tren.' }, { title: 'Detail wilayah', caption: 'Stok, produksi, dan perbandingan periode.' }, { title: 'Peringatan dini', caption: 'Daftar dan penandaan anomali.' }, { title: 'Design system data', caption: 'Skala warna, grafik, dan komponen.' }, { title: 'Presentasi lomba', caption: 'Narasi ketahanan pangan berbasis data.' }],
    palette: [{ name: 'Agro Olive', hex: '#98A60A' }, { name: 'Neon Lime', hex: '#D9F20E' }, { name: 'Alert Red', hex: '#E8112D' }, { name: 'Ink', hex: '#161616' }, { name: 'White', hex: '#FFFFFF' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Kepadatan data', problem: 'Terlalu banyak data membuat dashboard melelahkan.', action: 'Menerapkan hierarki dan pengungkapan bertahap.' }, { title: 'Warna untuk data', problem: 'Skala warna harus informatif dan ramah buta warna.', action: 'Memakai skala yang diuji kontras dan menambahkan label/ikon.' }, { title: 'Kepercayaan terhadap data', problem: 'Keputusan penting menuntut sumber jelas.', action: 'Menampilkan waktu pembaruan dan sumber data pada setiap panel.' }],
    impact: { headline: 'Kondisi pasokan antar wilayah yang terbaca dalam sekali pandang.', metrics: [{ value: '3', label: 'Level drill-down' }, { value: '1', label: 'Peta pasokan interaktif' }, { value: '1', label: 'Panel peringatan dini' }], reflections: ['Dashboard yang baik menjawab pertanyaan, bukan sekadar menampilkan data.', 'Hierarki visual adalah alat utama menghadapi kepadatan informasi.', 'Selanjutnya: menguji dengan analis nyata untuk memvalidasi prioritas metrik.'] },
  }),

  lombaBase({
    slug: 'apollo',
    title: 'APOLLO',
    tagline: 'Dashboard monitoring konversi sampah plastik menjadi energi listrik yang memperlihatkan dampak lingkungan secara jelas dan terukur.',
    kind: 'Web', year: '2026', color: '#e8112d', burst: '#d9f20e',
    meta: { role: 'UI/UX Designer', duration: 'Masa lomba (± 3–4 minggu)', team: 'Tim lomba UI/UX', platform: 'Web (dashboard)', tools: ['Fg', 'Ai'], event: '@itb_aic' },
    context: {
      summary: 'APOLLO dirancang untuk tema waste tech dan cleantech. Konversi sampah plastik menjadi energi listrik melibatkan banyak parameter operasional yang harus dipantau: volume masukan, efisiensi, keluaran energi, dan emisi. APOLLO menyatukan data tersebut ke dalam dashboard yang mudah dibaca operator dan manajer.',
      facts: [{ k: 'Penyelenggara', v: '@itb_aic' }, { k: 'Tema', v: 'Waste tech & clean energy' }, { k: 'Jenis produk', v: 'Dashboard web' }, { k: 'Pengguna', v: 'Operator, manajer fasilitas, dan analis keberlanjutan' }],
      goals: ['Memantau proses konversi secara real time dengan jelas.', 'Menyajikan dampak lingkungan dan energi yang dihasilkan.', 'Mendukung operator mengenali masalah proses lebih cepat.'],
      scope: ['Riset proses konversi & kebutuhan operator', 'Desain dashboard operasional dan laporan dampak', 'Sistem peringatan & status mesin', 'Prototipe & presentasi'],
    },
    problem: {
      quote: 'Saya perlu tahu mesin berjalan normal atau tidak, dan berapa listrik yang dihasilkan dari sampah hari ini.',
      user: { title: 'Masalah pengguna', points: ['Parameter proses tersebar di beberapa layar dan laporan.', 'Anomali operasional terlambat disadari.', 'Dampak lingkungan sulit dikomunikasikan kepada pemangku kepentingan.'] },
      business: { title: 'Tantangan solusi', points: ['Operator butuh tampilan cepat sedangkan manajer butuh analisis.', 'Data teknis harus diterjemahkan menjadi dampak yang mudah dipahami.', 'Peringatan harus akurat agar tidak memicu kelelahan alarm.'] },
      hmw: 'Bagaimana kami menampilkan kondisi proses dan dampak lingkungan sehingga operator bertindak cepat dan manajer memahami nilai proyek?',
    },
    research: {
      methods: [{ title: 'Studi proses konversi', desc: 'Memahami tahapan dan parameter kritis dari masukan sampah hingga keluaran listrik.' }, { title: 'Benchmark dashboard industri', desc: 'Mempelajari pola panel status dan peringatan pada sistem monitoring.' }, { title: 'Analisis peran pengguna', desc: 'Memisahkan kebutuhan operator, manajer, dan analis.' }],
      insights: [{ title: 'Status dulu, detail kemudian', desc: 'Operator pertama-tama perlu tahu normal atau tidak.' }, { title: 'Dampak harus diterjemahkan', desc: 'Angka seperti kWh dan kilogram lebih bermakna dengan padanan sehari-hari.' }, { title: 'Peringatan perlu prioritas', desc: 'Tingkat keparahan yang jelas mencegah alarm diabaikan.' }],
    },
    solution: {
      principles: [{ title: 'Status sekilas', desc: 'Indikator kondisi mesin dan proses di bagian atas.' }, { title: 'Dampak yang bercerita', desc: 'Kartu dampak: sampah terolah, energi dihasilkan, emisi dihindari.' }, { title: 'Peringatan berjenjang', desc: 'Informasi, peringatan, dan kritis dengan warna dan ikon berbeda.' }],
      process: [{ title: 'Pemahaman domain', desc: 'Menerjemahkan proses teknis menjadi struktur informasi.' }, { title: 'Rancang dashboard', desc: 'Panel status, grafik produksi, dan kartu dampak.' }, { title: 'Sistem peringatan', desc: 'Menentukan tingkat keparahan dan aksi yang disarankan.' }, { title: 'Prototipe & polesan', desc: 'Menguji keterbacaan dalam kondisi layar besar dan ruang kendali.' }],
      decisions: [{ title: 'Peringatan dengan aksi yang disarankan', why: 'Mempercepat respons operator.' }, { title: 'Kartu dampak berpadanan', why: 'Membuat nilai lingkungan mudah dipahami non-teknis.' }, { title: 'Mode laporan untuk manajer', why: 'Memisahkan kebutuhan operasional dan strategis.' }],
      persona: { name: 'Mas Bima, 30', role: 'Operator fasilitas', goals: ['Memastikan proses berjalan normal', 'Menanggapi anomali dengan cepat'], pains: ['Banyak layar terpisah', 'Alarm yang terlalu sering dan membingungkan'] },
    },
    deliverables: [{ title: 'Peta proses & parameter', caption: 'Dari masukan sampah hingga keluaran listrik.' }, { title: 'Dashboard operasional', caption: 'Status mesin, tren produksi, dan efisiensi.' }, { title: 'Pusat peringatan', caption: 'Tingkat keparahan dan aksi yang disarankan.' }, { title: 'Laporan dampak', caption: 'Sampah terolah, energi, dan emisi dihindari.' }, { title: 'Design system data', caption: 'Warna status, grafik, dan komponen.' }, { title: 'Presentasi lomba', caption: 'Narasi inovasi energi bersih.' }],
    palette: [{ name: 'Apollo Red', hex: '#E8112D' }, { name: 'Neon Lime', hex: '#D9F20E' }, { name: 'Ink', hex: '#0C0C0C' }, { name: 'Steel', hex: '#2B2B2B' }, { name: 'White', hex: '#FFFFFF' }],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [{ title: 'Menerjemahkan data teknis', problem: 'Istilah dan satuan teknis sulit dipahami non-teknis.', action: 'Menyediakan padanan sehari-hari dan tooltip penjelas.' }, { title: 'Kelelahan alarm', problem: 'Peringatan berlebih membuat operator abai.', action: 'Menerapkan tingkat keparahan dan menggabungkan peringatan serupa.' }, { title: 'Dua kebutuhan dalam satu produk', problem: 'Operator dan manajer butuh tampilan berbeda.', action: 'Memisahkan mode operasional dan laporan dengan sistem komponen yang sama.' }],
    impact: { headline: 'Dashboard yang menjembatani proses teknis dan dampak lingkungan yang bisa dirasakan.', metrics: [{ value: '3', label: 'Tingkat keparahan peringatan' }, { value: '3', label: 'Kartu dampak utama' }, { value: '2', label: 'Mode: operasional & laporan' }], reflections: ['Dashboard efektif menyorot yang butuh tindakan, bukan menampilkan segalanya.', 'Menerjemahkan angka menjadi cerita dampak membuat teknologi lebih diterima.', 'Selanjutnya: menguji dengan operator untuk memvalidasi urutan prioritas.'] },
  }),
];

