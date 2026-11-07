// ===================================================================
// ARTEFAK VISUAL DELIVERABLES UI/UX (SESUAI PEDOMAN HALO DESIGNERS BLOG)
// 14 Proyek: 8 Proyek Portofolio + 6 Arena Lomba UI/UX
// Setiap proyek memiliki visual artefak: User Flow, IA, Sketsa, Wireframe,
// Design System, dan Prototipe Interaktif yang 100% kontekstual.
// ===================================================================

export const deliverableData = {
  // 1. SPEEDLUST GARAGE
  'speedlust-garage': {
    userFlow: {
      title: 'User Flow Layanan Cuci Helm & Produk',
      steps: [
        { num: '01', title: 'Landing Page', desc: 'Pengunjung membuka situs & membaca value proposition' },
        { num: '02', title: 'Pilih Layanan', desc: 'Bandingkan Basic Cleaning (Rp 30k) vs Deep Cleaning (Rp 45k)' },
        { num: '03', title: 'Pilih Cabang', desc: 'Tentukan lokasi workshop Bogor atau Jakarta' },
        { num: '04', title: 'Booking WhatsApp', desc: 'Konfirmasi slot jam cuci helm atau pick-up delivery' },
      ],
      altBranch: {
        label: 'Jalur Katalog Produk',
        dest: 'Filter CLASH & Aksesori → Direct Tokopedia Official',
      },
    },
    ia: {
      title: 'Information Architecture — Speedlust Garage',
      nodes: [
        { label: 'Home', items: ['Hero CTA', '4 Keunggulan', 'Highlight Shoei & CLASH'] },
        { label: 'Services', items: ['Basic Cleaning Rp 30k', 'Deep Cleaning Rp 45k', 'Nano Ceramic'] },
        { label: 'Products', items: ['Helmet Care', 'Engine Parts', 'Apparels', 'Tokopedia Link'] },
        { label: 'Reviews', items: ['Customer Feedbacks', 'Rating Bintang Komunitas Motor'] },
        { label: 'Find Us', items: ['Peta Bogor & Jakarta', 'Direct WhatsApp Tiap Cabang'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Tata Letak & Hierarchy',
      sections: ['#Hero-Floating-Helmet', '#Why-Choose-Us-Asymmetric', '#Service-Pricing-Cards', '#Product-Grid-3Col', '#Dual-Branch-Footer'],
      notes: ['Visual helm melayang di sisi kanan hero', 'Transparansi harga cuci helm di atas fold', 'Tombol WhatsApp spesifik cabang'],
    },
    wireframe: {
      platform: 'Web 1440px Desktop',
      heroTag: 'Helmet Washing & Detailing Bogor & Jakarta',
      cards: [
        { title: 'Basic Cleaning', price: 'Rp 30.000', badge: 'Fast Wash · 45m' },
        { title: 'Deep Cleaning', price: 'Rp 45.000', badge: 'Anti Bacterial · Detailing' },
      ],
      bottomPills: ['Tokopedia Official', 'Pick-Up Delivery', 'Nano Ceramic Coating'],
    },
    designSystem: {
      palette: [
        { name: 'Garage Teal', hex: '#153230' },
        { name: 'Mint Mist', hex: '#C4D7D1' },
        { name: 'Neon Lime', hex: '#D9F20E' },
        { name: 'Carbon Dark', hex: '#0F171A' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Button Primary Lime', 'Branch Badge Bogor/Jakarta', 'Pricing Card Tag', 'Rating Star 5.0'],
    },
    prototype: {
      platform: 'Web Interactive Simulator',
      action: 'Filter Kategori Produk & Direct WhatsApp Admin Booking',
      hotspots: ['Pilih Paket Cuci', 'Filter Tokopedia', 'Hubungi Admin Bogor'],
    },
  },

  // 2. RIE.CHARGE
  'rie-charge': {
    userFlow: {
      title: 'User Flow E-Commerce Pre-Order PO H-1',
      steps: [
        { num: '01', title: 'Katalog Produk', desc: 'Eksplor Cold Pressed Juice, Fitshot, & Asinan Buah' },
        { num: '02', title: 'Pilih Bundling', desc: 'Pilih Bundling This Week atau varian rasa satuan' },
        { num: '03', title: 'My Cart Drawer', desc: 'Atur kuantitas, cek Delivery Date PO H-1 & diskon' },
        { num: '04', title: 'Checkout & Kirim', desc: 'Isi Destination Delivery & checkout terkonfirmasi' },
      ],
      altBranch: {
        label: 'Catatan Jadwal',
        dest: 'Pesanan dibuat segar setiap pagi & dikirim H+1',
      },
    },
    ia: {
      title: 'Information Architecture — Rie.Charge',
      nodes: [
        { label: 'Home', items: ['Hero Nutrisi Buah Asli', 'Bundling This Week', 'Klaim 100% Segar'] },
        { label: 'Products', items: ['Cold Pressed Juice', 'Fitshot Vitality', 'Asinan & Rujak Kweni'] },
        { label: 'Cart Drawer', items: ['Quantity Stepper', 'Tanggal Kirim H-1', 'Perhitungan Diskon'] },
        { label: 'Checkout', items: ['Form Alamat Kirim', 'Pilihan Pembayaran', 'Ringkasan Order'] },
        { label: 'FAQ & Review', items: ['Cara Penyimpanan', 'Ulasan Pelanggan Bogor'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Cart Slide-Over & Best Seller',
      sections: ['#Hero-Juice-Banner', '#Best-Seller-Carousel', '#Bundling-Card-Grid', '#Drawer-Cart-PO-H1', '#Checkout-2-Column'],
      notes: ['Indikator PO H-1 wajib jelas di cart drawer', 'Kategori produk dengan ikon kesegaran', 'Total belanja terhitung otomatis'],
    },
    wireframe: {
      platform: 'Responsive Web · E-Commerce',
      heroTag: '100% Raw Cold Pressed Juice & Fitshot',
      cards: [
        { title: 'Red Earth Juice', price: 'Rp 28.000', badge: 'Beetroot · Carrot · Apple' },
        { title: 'Wild Nature Juice', price: 'Rp 28.000', badge: 'Kale · Cucumber · Lemon' },
      ],
      bottomPills: ['PO H-1 Fresh Delivery', 'Tanpa Tambahan Gula', 'Kota Bogor Area'],
    },
    designSystem: {
      palette: [
        { name: 'Leaf Green', hex: '#4E6E3A' },
        { name: 'Fresh Lime', hex: '#C9E870' },
        { name: 'Citrus Orange', hex: '#F47C20' },
        { name: 'Warm Cream', hex: '#FAF6E8' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Cart Stepper [-] 1 [+]', 'PO H-1 Badge', 'Varian Chip Filter', 'Price Summary Box'],
    },
    prototype: {
      platform: 'Cart Drawer & Checkout Simulator',
      action: 'Buka Slide-Over My Cart & Kalkulasi Diskon Otomatis',
      hotspots: ['Tambah Bundling', 'Cek Delivery Date', 'Lanjut ke Checkout'],
    },
  },

  // 3. POLY BOARD GAMES
  'poly-board-games': {
    userFlow: {
      title: 'User Flow Dashboard Operasional Kafe',
      steps: [
        { num: '01', title: 'Login Staf', desc: 'Akses role Game Master, Barista, atau Manager' },
        { num: '02', title: 'Pencatatan Shift', desc: 'Input jam kerja, tugas operasional, & status meja' },
        { num: '03', title: 'Klaim Kasbon/Lembur', desc: 'Input kasbon makan (food kasbon) & jam lembur' },
        { num: '04', title: 'Approval Manager', desc: 'Validasi otomatis & sinkronisasi slip payroll bulanan' },
      ],
      altBranch: {
        label: 'Monitoring Meja',
        dest: 'Cek durasi main board game & pesanan menu aktif',
      },
    },
    ia: {
      title: 'Information Architecture — Poly Dashboard',
      nodes: [
        { label: 'Overview', items: ['Meja Aktif 12/16', 'Shift Staf Hari Ini', 'Notif Lembur Pending'] },
        { label: 'Staf & Shift', items: ['Jadwal Game Master', 'Absensi QR', 'Tukar Shift Staf'] },
        { label: 'Kasbon & Makan', items: ['Form Food Kasbon', 'Riwayat Potongan', 'Limit Bulanan'] },
        { label: 'Payroll', items: ['Gaji Pokok', 'Kalkulasi Lembur', 'Generate Slip Gaji'] },
        { label: 'Laporan', items: ['Omzet Sesi Main', 'Rekapitulasi Jam Kerja Staf'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Layout Dashboard Manajemen',
      sections: ['#Sidebar-Navigation', '#Header-Role-Switcher', '#Metric-Summary-Cards', '#Staff-Shift-Table', '#Approval-Modal-Drawer'],
      notes: ['Tabel kasbon & lembur dengan quick action', 'Warna ungu & lime khas Poly Games Cafe', 'Visual status badge approval'],
    },
    wireframe: {
      platform: 'Web Dashboard 1440px',
      heroTag: 'Poly Games Cafe Operations & Staff Payroll',
      cards: [
        { title: 'Lembur Game Master', price: '4 Jam · Rp 120k', badge: 'Status: Approved' },
        { title: 'Food Kasbon Staf', price: 'Rp 35.000', badge: 'Status: Pending' },
      ],
      bottomPills: ['Role: Manager Access', 'Export Slip PDF', '16 Meja Terpantau'],
    },
    designSystem: {
      palette: [
        { name: 'Deep Purple', hex: '#8B3DFF' },
        { name: 'Neon Lime', hex: '#D9F20E' },
        { name: 'Dark Slate', hex: '#121118' },
        { name: 'Pure White', hex: '#FFFFFF' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Table Status Pill', 'Sidebar Compact Nav', 'Modal Approval Sheet', 'Metric Stat Card'],
    },
    prototype: {
      platform: 'Dashboard Staff Management Prototype',
      action: 'Validasi Pengajuan Lembur & Approval Food Kasbon',
      hotspots: ['Approve Lembur', 'Filter Periode Staf', 'Generate Slip Gaji'],
    },
  },

  // 4. VISENSA
  'visensa': {
    userFlow: {
      title: 'User Flow Skrining Mata & Reservasi Dokter',
      steps: [
        { num: '01', title: 'Beranda Visensa', desc: 'Buka layanan klinik mata, optik, & tes mandiri' },
        { num: '02', title: 'Skrining Refraksi', desc: 'Jawab kuesioner keluhan pandangan buram/mata lelah' },
        { num: '03', title: 'Pilih Spesialis', desc: 'Cari dokter spesialis mata & jadwal klinik terdekat' },
        { num: '04', title: 'E-Ticket Janji Temu', desc: 'Dapatkan nomor antrean & barcode registrasi' },
      ],
      altBranch: {
        label: 'Katalog Optik',
        dest: 'Pilih frame kacamata & lensa proteksi blue-ray',
      },
    },
    ia: {
      title: 'Information Architecture — Visensa Eye Care',
      nodes: [
        { label: 'Beranda', items: ['Skrining Mandiri', 'Promo Lensa Kacamata', 'Dokter Praktik Hari Ini'] },
        { label: 'Layanan Medis', items: ['Pemeriksaan Refraksi', 'Dry Eye Therapy', 'Katarak Care'] },
        { label: 'Spesialis Mata', items: ['Profil Dokter', 'Jadwal Hari & Jam', 'Rating Pasien'] },
        { label: 'Optik Store', items: ['Katalog Frame', 'Lensa Blue-Ray', 'Filter Bentuk Wajah'] },
        { label: 'E-Ticket', items: ['Nomor Antrean', 'Barcode Scan Klinik', 'Pengingat H-1'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Mobile Layout Kesehatan Mata',
      sections: ['#Header-Screening-Banner', '#Doctor-Horizontal-Cards', '#Optical-Frame-Grid', '#Appointment-Picker', '#Bottom-Nav-Bar'],
      notes: ['Nuansa warna biru medis yang menenangkan mata', 'Kartu dokter dengan jadwal praktik jelas', 'Akses mudah ke nomor antrean'],
    },
    wireframe: {
      platform: 'Mobile App 390px · Eye Clinic',
      heroTag: 'Klinik Spesialis Kesehatan Mata & Optik',
      cards: [
        { title: 'dr. Farhan, Sp.M', price: 'Senin - Kamis · 14:00', badge: 'Spesialis Refraksi' },
        { title: 'Lensa Blue Shield', price: 'Anti Radiasi UV', badge: 'Optik Visensa' },
      ],
      bottomPills: ['Booking Dokter Cepat', 'Skrining Mata Gratis', 'E-Antrean Digital'],
    },
    designSystem: {
      palette: [
        { name: 'Deep Navy', hex: '#0A192F' },
        { name: 'Medical Cyan', hex: '#00B4D8' },
        { name: 'Soft Ice', hex: '#E8F4F8' },
        { name: 'Coral Alert', hex: '#FF6B6B' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Doctor Card Grid', 'Date Time Picker', 'Antrean QR Ticket', 'Optical Frame Card'],
    },
    prototype: {
      platform: 'Mobile Interactive Flow Visensa',
      action: 'Simulasi Pemilihan Dokter & Pembuatan Nomor Antrean',
      hotspots: ['Pilih Tanggal Booking', 'Konfirmasi Dokter', 'Buka QR Antrean'],
    },
  },

  // 5. AKSESKOTA
  'akseskota': {
    userFlow: {
      title: 'User Flow Rute Aksesibel Ramah Disabilitas',
      steps: [
        { num: '01', title: 'Set Kebutuhan', desc: 'Pilih profil: Kursi Roda, Tunanetra, atau Lansia' },
        { num: '02', title: 'Cari Rute', desc: 'Input lokasi asal & stasiun/halte transit tujuan' },
        { num: '03', title: 'Rute Bebas Tangga', desc: 'Sistem memfilter rute dengan ramp aktif & lift menyala' },
        { num: '04', title: 'Panduan Suara', desc: 'Navigasi suara & haptik saat berpindah moda transit' },
      ],
      altBranch: {
        label: 'Lapor Hambatan',
        dest: 'Laporkan ramp rusak / eskalator mati secara real-time',
      },
    },
    ia: {
      title: 'Information Architecture — AksesKota',
      nodes: [
        { label: 'Navigasi', items: ['Pencarian Rute', 'Filter Ramp/Lift', 'Peta Aksesibel Kontras'] },
        { label: 'Transit Hub', items: ['Status Lift Stasiun', 'Guiding Block KRL', 'Halte Ramah Kursi Roda'] },
        { label: 'Lapor Cepat', items: ['Foto Fasilitas Rusak', 'Jalur Terhalang', 'Kirim ke Dishub'] },
        { label: 'Suara & Audio', items: ['Voice Guidance', 'Haptic Direction', 'Pengumuman Transit'] },
        { label: 'Profil Saya', items: ['Kebutuhan Aksesibilitas', 'Kontak Darurat', 'Bookmark Rute'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi UI High-Contrast & Big Targets',
      sections: ['#Top-Accessibility-Mode', '#Big-Target-Search', '#Route-Option-Cards', '#Facility-Status-Badge', '#Voice-Prompt-Button'],
      notes: ['Elemen interaktif minimal 48x48px', 'Rasio kontras warna 7:1 untuk penglihatan rendah', 'Instruksi suara di setiap belokan'],
    },
    wireframe: {
      platform: 'Inclusive Mobile Interface · A11y',
      heroTag: 'Navigasi Transportasi Bebas Halangan Fisik',
      cards: [
        { title: 'Rute KRL Jalur 2', price: 'Ramp 100% Aktif', badge: 'Ramah Kursi Roda' },
        { title: 'Stasiun Juanda Lift', price: 'Operasional Normal', badge: 'Terverifikasi 10m Lalu' },
      ],
      bottomPills: ['Voice Guide Aktif', 'High Contrast Mode', 'Tombol Bantuan SOS'],
    },
    designSystem: {
      palette: [
        { name: 'High Contrast Yellow', hex: '#FFD600' },
        { name: 'Dark Charcoal', hex: '#121212' },
        { name: 'Signal Blue', hex: '#1976D2' },
        { name: 'Safe Green', hex: '#00C853' },
      ],
      font: 'Inter (A11y Optimized)',
      components: ['Big Touch Button', 'High Contrast Card', 'Voice Indicator Ripple', 'Ramp Status Chip'],
    },
    prototype: {
      platform: 'Inclusive Navigation Flow Prototype',
      action: 'Simulasi Pemilihan Rute Bebas Tangga dengan Voice Feedback',
      hotspots: ['Pilih Mode Kursi Roda', 'Lihat Rute Aksesibel', 'Aktifkan Audio Guide'],
    },
  },

  // 6. PROJECT PKL
  'project-pkl': {
    userFlow: {
      title: 'User Flow Logbook & Bimbingan PKL Mahasiswa',
      steps: [
        { num: '01', title: 'Login Mahasiswa', desc: 'Masuk dashboard akademik magang/PKL' },
        { num: '02', title: 'Entri Jurnal Harian', desc: 'Isi ringkasan pekerjaan, jam kerja, & upload foto' },
        { num: '03', title: 'Review Pembimbing', desc: 'Dosen & mentor industri memeriksa logbook' },
        { num: '04', title: 'Validasi & Penilaian', desc: 'Approval paraf digital & penilaian rubrik PKL' },
      ],
      altBranch: {
        label: 'Laporan Akhir',
        dest: 'Upload berkas draf laporan bab 1-5 untuk revisi dosen',
      },
    },
    ia: {
      title: 'Information Architecture — Portal PKL',
      nodes: [
        { label: 'Dashboard', items: ['Hari Kerja Berjalan', 'Logbook Terverifikasi', 'Tenggat Laporan'] },
        { label: 'Jurnal Harian', items: ['Form Aktivitas Harian', 'Unggah Dokumentasi', 'Kalender Magang'] },
        { label: 'Bimbingan', items: ['Catatan Konsultasi', 'Draf Laporan PKL', 'Revisi Dosen'] },
        { label: 'Verifikasi', items: ['Approval Mentor Lapangan', 'Feedback Kinerja Mahasiswa'] },
        { label: 'Nilai Akhir', items: ['Rubrik Penilaian Kampus', 'Nilai Sikap', 'Transkrip SKS PKL'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Form Logbook & Status Approval',
      sections: ['#Header-Progress-Overview', '#Daily-Log-Form-Left', '#Activity-Timeline-Right', '#File-Upload-Dropzone', '#Mentor-Signature-Area'],
      notes: ['Form logbook dua sisi untuk kemudahan pengetikan', 'Indikator status verifikasi hijau/kuning', 'Riwayat bimbingan terarsip rapi'],
    },
    wireframe: {
      platform: 'Web App 1440px · Academic Portal',
      heroTag: 'Sistem Informasi Manajemen Magang Mahasiswa',
      cards: [
        { title: 'Logbook Hari Ke-24', price: 'Slicing UI Dashboard', badge: 'Status: Terverifikasi' },
        { title: 'Logbook Hari Ke-25', price: 'Implementasi API Fetch', badge: 'Status: Menunggu Dosen' },
      ],
      bottomPills: ['Total 40 Hari Kerja', 'Dosen Pembimbing Aktif', 'Format Laporan Resmi'],
    },
    designSystem: {
      palette: [
        { name: 'Academic Navy', hex: '#1E3A8A' },
        { name: 'Tech Cyan', hex: '#06B6D4' },
        { name: 'Emerald Done', hex: '#10B981' },
        { name: 'Neutral Gray', hex: '#F3F4F6' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Logbook Form Card', 'Status Badge Terverifikasi', 'Document File Dropper', 'Rating Rubrik Table'],
    },
    prototype: {
      platform: 'Portal Logbook & Approval Prototype',
      action: 'Simulasi Pengisian Logbook Harian & Validasi Dosen',
      hotspots: ['Submit Logbook', 'Upload Bukti Kegiatan', 'Cek Lembar Penilaian'],
    },
  },

  // 7. AKSARALENSA
  'aksaralensa': {
    userFlow: {
      title: 'User Flow Eksplorasi Cerita Foto Budaya',
      steps: [
        { num: '01', title: 'Galeri Arsip', desc: 'Jelajahi kurasi foto warisan budaya Nusantara' },
        { num: '02', title: 'Pilih Esai Foto', desc: 'Buka narasi tradisi, arsitektur adat, atau upacara' },
        { num: '03', title: 'Baca Cerita Visual', desc: 'Nikmati foto esai resolusi tinggi & audio sejarah' },
        { num: '04', title: 'Simpan & Bagikan', desc: 'Bookmark arsip ke koleksi pribadi atau bagikan' },
      ],
      altBranch: {
        label: 'Peta Budaya',
        dest: 'Jelajahi arsip berdasarkan koordinat wilayah kepulauan',
      },
    },
    ia: {
      title: 'Information Architecture — AksaraLensa',
      nodes: [
        { label: 'Kurasi Utama', items: ['Pilihan Kurator', 'Peta Geografis Budaya', 'Foto Esai Pekan Ini'] },
        { label: 'Koleksi Tematik', items: ['Arsitektur Vernakular', 'Ritual & Adat', 'Kain Tradisional'] },
        { label: 'Cerita Foto', items: ['Narasi Mendalam', 'Audio Wawancara Tetua', 'Metadata Arsip'] },
        { label: 'Pameran Virtual', items: ['Galeri 360 Derajat', 'Koleksi Arsip Langka', 'Kredit Fotografer'] },
        { label: 'Arsip Saya', items: ['Koleksi Tersimpan', 'Catatan Riset Budaya', 'Unduh Referensi'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Editorial Magazine Layout',
      sections: ['#Hero-Immersive-Photo', '#Culture-Map-Explorer', '#Asymmetric-Photo-Grid', '#Editorial-Story-Drawer', '#Archive-Metadata-Footer'],
      notes: ['Nuansa warna terakota dan linen klasik', 'Fokus pada ruang negatif dan keterbacaan teks cerita', 'Keterangan teknis kamera & lokasi foto'],
    },
    wireframe: {
      platform: 'Web Editorial 1440px · Cultural Heritage',
      heroTag: 'Dokumentasi Visual & Cerita Warisan Budaya',
      cards: [
        { title: 'Rumah Tongkonan Toraja', price: 'Arsip Seri Arsitektur', badge: '12 Foto Esai' },
        { title: 'Tari Saman Gayo Aceh', price: 'Warisan Takbenda', badge: 'Audio & Foto Seri' },
      ],
      bottomPills: ['Peta Budaya Nusantara', 'Resolusi Tinggi', 'Arsip Terbuka'],
    },
    designSystem: {
      palette: [
        { name: 'Terra Cotta', hex: '#A04000' },
        { name: 'Warm Ochre', hex: '#D35400' },
        { name: 'Charcoal Black', hex: '#1A1A1A' },
        { name: 'Antique Linen', hex: '#FDFEFE' },
      ],
      font: 'Cinzel & Plus Jakarta Sans',
      components: ['Editorial Photo Card', 'Audio Narrator Bar', 'Metadata Pill Box', 'Map Region Marker'],
    },
    prototype: {
      platform: 'Visual Storytelling Experience Prototype',
      action: 'Navigasi Foto Esai Budaya dengan Audio Narasi Adat',
      hotspots: ['Buka Cerita Foto', 'Dengarkan Audio Sejarah', 'Lihat Peta Koordinat'],
    },
  },

  // 8. NAIK
  'naik': {
    userFlow: {
      title: 'User Flow Perjalanan & Tiket Transit KRL/LRT',
      steps: [
        { num: '01', title: 'Input Rute', desc: 'Pilih stasiun keberangkatan & stasiun tujuan' },
        { num: '02', title: 'Bandingkan Jalur', desc: 'Cek opsi KRL tercepat, biaya tarif, & transit peron' },
        { num: '03', title: 'Beli Tiket Digital', desc: 'Bayar instan via saldo dompet transit terintegrasi' },
        { num: '04', title: 'Tap-In QR Code', desc: 'Scan tiket digital di gate stasiun & pantau posisi kereta' },
      ],
      altBranch: {
        label: 'Posisi Kereta',
        dest: 'Lihat live tracking posisi kereta & kepadatan gerbong',
      },
    },
    ia: {
      title: 'Information Architecture — NAIK! Transit',
      nodes: [
        { label: 'Perencana Rute', items: ['Pencarian Stasiun', 'Estimasi Waktu Tempuh', 'Peta Jalur KRL'] },
        { label: 'Tiket QR', items: ['Barcode Gate Masuk', 'Saldo Transit', 'Riwayat Perjalanan'] },
        { label: 'Live Tracking', items: ['Posisi Kereta Real-Time', 'Kepadatan Gerbong 1-8', 'Info Gangguan'] },
        { label: 'Integrasi Moda', items: ['Transfer LRT Jabodebek', 'Koneksi MRT Jakarta', 'TransJakarta'] },
        { label: 'Akun & Saldo', items: ['Top Up Cepat', 'Kartu Favorit Stasiun', 'Pusat Bantuan'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Mobile Ticket & Subway Map',
      sections: ['#Header-Quick-Station-Search', '#Route-Duration-Summary', '#Floating-QR-Ticket-Card', '#Live-Train-Tracker-Bar', '#Subway-Schema-View'],
      notes: ['Akses QR tiket dalam satu ketukan dari layar utama', 'Warna kuning transit & cyan listrik berenergi tinggi', 'Peta skema transit minimalis'],
    },
    wireframe: {
      platform: 'Mobile Transit App 390px · Commuter',
      heroTag: 'Navigasi Kereta & Tiket QR Terintegrasi',
      cards: [
        { title: 'Bogor → Manggarai', price: 'Tarif Rp 4.000 · 42m', badge: 'Kereta Masuk Jalur 2' },
        { title: 'Tiket Digital Aktif', price: 'Gerbang Buka Otomatis', badge: 'Scan di Gate 3' },
      ],
      bottomPills: ['KRL Commuter Line', 'Saldo Rp 50.000', 'Live Gerbong Lengang'],
    },
    designSystem: {
      palette: [
        { name: 'Transit Yellow', hex: '#FFC107' },
        { name: 'Electric Teal', hex: '#00E5FF' },
        { name: 'Midnight Black', hex: '#12131C' },
        { name: 'Clean White', hex: '#FFFFFF' },
      ],
      font: 'Outfit & Plus Jakarta Sans',
      components: ['QR Boarding Card', 'Station Node Marker', 'Fare Pill Tag', 'Train Occupancy Bar'],
    },
    prototype: {
      platform: 'Transit Ticket & Route Simulator',
      action: 'Simulasi Pemilihan Rute Cepat & Pemunculan Barcode Gate',
      hotspots: ['Pilih Stasiun Tujuan', 'Bayar Tiket Digital', 'Tap QR di Pintu Gate'],
    },
  },

  // 9. BRAINSPACE (LOMBA)
  'brainspace': {
    userFlow: {
      title: 'User Flow Belajar Interaktif & Gamifikasi',
      steps: [
        { num: '01', title: 'Beranda Timo', desc: 'Cek streak belajar harian & pilih mata pelajaran aktif' },
        { num: '02', title: 'Video Timestamp', desc: 'Pelajari konsep materi melalui chapter video terstruktur' },
        { num: '03', title: 'Jeda Mini-Game', desc: 'Segarkan fokus dengan kuis singkat bersama maskot Timo' },
        { num: '04', title: 'Klaim Achievement', desc: 'Raih XP poin, buka lencana heksagonal, & naik ranking' },
      ],
      altBranch: {
        label: 'Kuis Harian',
        dest: 'Selesaikan Math Quiz harian untuk mempertahankan streak belajar',
      },
    },
    ia: {
      title: 'Information Architecture — Brainspace Edutech',
      nodes: [
        { label: 'Beranda', items: ['Sapaan Karakter Timo', 'Kalender Streak Aktif', 'Pilihan Subjects'] },
        { label: 'Subjects', items: ['Economics (Macro/Micro)', 'Biology', 'Computer', 'Math Quizzes'] },
        { label: 'Video Player', items: ['Timestamp Chapters', 'Tab Info Materi', 'Ruang Diskusi Teman'] },
        { label: 'Game Timo', items: ['Mini-Game Refleksi', 'Kuis Kilat 60 Detik', 'Bonus XP Point'] },
        { label: 'Achievement', items: ['Lencana Heksagonal', 'Leaderboard Kelas', 'Progres Belajar'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Maskot Timo & Gamified Home',
      sections: ['#Header-Mascot-Greeting', '#Streak-Week-Tracker', '#Subject-Colorful-Cards', '#Video-Chapter-Timeline', '#Hexagon-Badge-Showcase'],
      notes: ['Karakter Timo ramah di pojok sapaan', 'Timestamp video memudahkan melompat ke inti materi', 'Lencana beranimasi saat kuis selesai'],
    },
    wireframe: {
      platform: 'Mobile Edutech App · @himiunsurya 2025',
      heroTag: 'Gamified Learning Platform with Timo Mascot',
      cards: [
        { title: 'Macroeconomics 101', price: 'Bab 3: GDP & Inflasi', badge: 'Progres: 80% Tuntas' },
        { title: 'Timo Quick Quiz', price: '5 Soal · 3 Menit', badge: 'Bonus +50 XP Point' },
      ],
      bottomPills: ['Streak 7 Hari Aktif', 'Timo Game On', 'Badge Master Terbuka'],
    },
    designSystem: {
      palette: [
        { name: 'Warm Marigold', hex: '#F9C932' },
        { name: 'Coral Burst', hex: '#EF7A4C' },
        { name: 'Minty Green', hex: '#2EC4B6' },
        { name: 'Soft Sand', hex: '#FDFBF7' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Timo Avatar Bubble', 'Hexagon Badge Award', 'Video Timestamp Pill', 'XP Progress Gauge'],
    },
    prototype: {
      platform: 'Gamified Edutech Mobile Prototype',
      action: 'Simulasi Menonton Video Chapter & Membuka Lencana Kuis',
      hotspots: ['Klik Timestamp Bab 2', 'Jawab Kuis Kilat', 'Klaim Lencana Timo'],
    },
  },

  // 10. ELDERLINK (LOMBA)
  'elderlink': {
    userFlow: {
      title: 'User Flow Pendamping Obat & Darurat Lansia',
      steps: [
        { num: '01', title: 'Alarm Jadwal Obat', desc: 'Pengingat bersuara muncul dengan foto fisik obat' },
        { num: '02', title: 'Konfirmasi Minum', desc: 'Lansia menekan tombol hijau besar "Sudah Diminum"' },
        { num: '03', title: 'Notif Keluarga', desc: 'Aplikasi mengirim laporan kepatuhan obat ke HP anak' },
        { num: '04', title: 'Fitur Darurat SOS', desc: 'Satu ketukan mengirim koordinat GPS & panggilan darurat' },
      ],
      altBranch: {
        label: 'Catatan Tensi',
        dest: 'Input angka tensi darah harian untuk laporan dokter bulanan',
      },
    },
    ia: {
      title: 'Information Architecture — ElderLink Care',
      nodes: [
        { label: 'Beranda Lansia', items: ['Jadwal Obat Pagi/Sore', 'Tombol Kontak Anak', 'Tombol SOS Darurat'] },
        { label: 'Kotak Obat', items: ['Foto Bentuk Pil', 'Waktu Sebelum/Sesudah Makan', 'Sisa Stok Obat'] },
        { label: 'Buku Kesehatan', items: ['Grafik Tensi Darah', 'Kadar Gula Mandiri', 'Catatan Keluhan'] },
        { label: 'Hub Keluarga', items: ['Foto Cucu & Panggilan Video', 'Pesan Suara Cepat', 'Status Kehadiran'] },
        { label: 'Bantuan Darurat', items: ['Sirine Suara Keras', 'Hubungi Ambulans 118', 'Kirim Lokasi'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Antarmuka Ramah Lansia',
      sections: ['#Emergency-SOS-Header', '#Current-Medication-Large-Card', '#Quick-Family-Dialer', '#Health-Vitals-Pills', '#Large-Bottom-Navigation'],
      notes: ['Tombol minimum 64px agar mudah ditekan jari gemetar', 'Warna lembut sage dan oranye hangat tidak menyilaukan', 'Foto asli bentuk obat'],
    },
    wireframe: {
      platform: 'Mobile App 390px · Elderly Care UX',
      heroTag: 'Aplikasi Pendamping Lansia & Koneksi Keluarga',
      cards: [
        { title: 'Obat Darah Tinggi (Amlodipine)', price: 'Pagi · 1 Tablet (Sesudah Makan)', badge: 'Status: Belum Diminum' },
        { title: 'Hubungi Anak (Rian)', price: 'Panggilan Cepat 1 Ketukan', badge: 'Terhubung' },
      ],
      bottomPills: ['Ukuran Teks Ekstra Besar', 'Audio Voice Prompt', 'Tombol SOS Standby'],
    },
    designSystem: {
      palette: [
        { name: 'Soft Sage', hex: '#588157' },
        { name: 'Warm Peach', hex: '#F4A261' },
        { name: 'Deep Forest', hex: '#344E41' },
        { name: 'Ivory White', hex: '#FEFAE0' },
      ],
      font: 'Plus Jakarta Sans (Large Scale)',
      components: ['Big Medication Button', 'Pill Visual Card', 'Emergency Red SOS Banner', 'Caregiver Status Tag'],
    },
    prototype: {
      platform: 'Elderly Friendly Interaction Simulator',
      action: 'Simulasi Pop-Up Pengingat Obat & Konfirmasi Minum',
      hotspots: ['Tekan Sudah Minum', 'Panggil Kontak Anak', 'Buka Buku Tensi'],
    },
  },

  // 11. BANSOSKITA (LOMBA)
  'bansoskita': {
    userFlow: {
      title: 'User Flow Cek Kelayakan Bansos & Kupon QR',
      steps: [
        { num: '01', title: 'Input NIK KTP', desc: 'Warga memasukkan nomor kependudukan 16 digit' },
        { num: '02', title: 'Validasi Sistem', desc: 'Verifikasi DTKS & parameter kelayakan keluarga' },
        { num: '03', title: 'Status & Jadwal', desc: 'Tampilan jenis bantuan (PKH/BLT) & tanggal pencairan' },
        { num: '04', title: 'Kupon Digital', desc: 'Bawa QR code ke balai warga untuk pengambilan bantuan' },
      ],
      altBranch: {
        label: 'Aduan Transparansi',
        dest: 'Laporkan pemotongan dana bantuan oleh oknum secara anonim',
      },
    },
    ia: {
      title: 'Information Architecture — BansosKita',
      nodes: [
        { label: 'Cek Bantuan', items: ['Form NIK 16 Digit', 'Status Penerima Manfaat', 'Jadwal Pencairan'] },
        { label: 'Kupon QR', items: ['Barcode Pengambilan', 'Lokasi Balai Kelurahan', 'Daftar Syarat'] },
        { label: 'Peta Kuota', items: ['Transparansi per RT/RW', 'Total Dana Tersalurkan', 'Audit Publik'] },
        { label: 'Kanal Aduan', items: ['Lapor Pungutan Liar', 'Formulir Bukti Foto', 'Pelacakan Laporan'] },
        { label: 'Bantuan & FAQ', items: ['Kriteria Penerima', 'Call Center Kemensos', 'Panduan Bansos'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Transparansi & Validasi NIK',
      sections: ['#Hero-Search-NIK-Bar', '#Eligibility-Status-Card', '#Collection-Schedule-Block', '#Public-Audit-Bar-Chart', '#Anonymous-Report-Form'],
      notes: ['Form NIK mudah diakses tanpa harus registrasi rumit', 'Kartu status jelas dengan warna hijau verifikasi', 'Akses laporan aduan langsung'],
    },
    wireframe: {
      platform: 'Public Service Portal · Anti-Fraud',
      heroTag: 'Transparansi Penyaluran Bansos Tepat Sasaran',
      cards: [
        { title: 'Status: Terdaftar PKH 2025', price: 'Bansos Sembako Tahap 1', badge: 'Terverifikasi DTKS' },
        { title: 'Jadwal Balai RW 04', price: 'Kamis, 15 Mei · 09:00 WIB', badge: 'Bawa KTP & Kartu Kupon' },
      ],
      bottomPills: ['Kanal Aduan Pungli Aktif', 'Data Real-Time DTKS', '100% Bebas Potongan'],
    },
    designSystem: {
      palette: [
        { name: 'Civic Emerald', hex: '#059669' },
        { name: 'Golden Shield', hex: '#F59E0B' },
        { name: 'Slate Blue', hex: '#1E293B' },
        { name: 'Clean White', hex: '#F8FAFC' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['NIK Input Field', 'Eligibility Badge Card', 'Public Audit Bar', 'Anonymous Whistleblower Card'],
    },
    prototype: {
      platform: 'Citizen Verification Portal Prototype',
      action: 'Simulasi Pencarian NIK & Generate Kupon Pengambilan Bantuan',
      hotspots: ['Cek NIK Kependudukan', 'Unduh QR Kupon', 'Buat Laporan Aduan'],
    },
  },

  // 12. AURORA (LOMBA)
  'aurora': {
    userFlow: {
      title: 'User Flow Mood Check-In & Guided Breathing',
      steps: [
        { num: '01', title: 'Daily Check-In', desc: 'Pilih spektrum suasana hati (Tenang, Lelah, Cemas, Bahagia)' },
        { num: '02', title: 'Jurnal Cepat', desc: 'Pilih faktor emosi (Pekerjaan, Hubungan, Istirahat, Tugas)' },
        { num: '03', title: 'Relaksasi Napas', desc: 'Ikuti irama visual pernapasan 4-7-8 untuk menenangkan detak' },
        { num: '04', title: 'Insight Mingguan', desc: 'Lihat ringkasan tren emosi & rekomendasi istirahat' },
      ],
      altBranch: {
        label: 'Soundscape Tidur',
        dest: 'Putar suara hujan hutan & white noise untuk mengatasi insomnia',
      },
    },
    ia: {
      title: 'Information Architecture — Aurora Sanctuary',
      nodes: [
        { label: 'Ruang Tenang', items: ['Sapaan Suasana Hati', 'Quote Mindfulness', 'Check-In Hari Ini'] },
        { label: 'Relaksasi Napas', items: ['Pola Napas 4-7-8', 'Animasi Panduan Irama', 'Timer 3-10 Menit'] },
        { label: 'Jurnal Hati', items: ['Catatan Terproteksi PIN', 'Audio Voice Diary', 'Refleksi Harian'] },
        { label: 'Soundscape', items: ['Hujan Hutan Tropis', 'Ombak Pantai Senja', 'Gelombang Meditasi'] },
        { label: 'Tren Emosi', items: ['Kalender 30 Hari', 'Analisis Pemicu Stres', 'Saran Kesejahteraan'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Calm UI & Breathing Orb',
      sections: ['#Daily-Mood-Slider-Header', '#Breathing-Orb-Center', '#Soundscape-Mini-Player', '#Private-Journal-Card', '#Monthly-Emotion-Heatmap'],
      notes: ['Nuansa lavender dan twilight lembut tanpa warna menyengat', 'Lingkaran pernapasan yang mengembang halus', 'Desain bebas distraksi'],
    },
    wireframe: {
      platform: 'Mobile Mental Wellness · Mindful UX',
      heroTag: 'Sahabat Kesehatan Mental & Refleksi Harian',
      cards: [
        { title: 'Latihan Napas 4-7-8', price: 'Sesi Menenangkan Pikiran', badge: 'Durasi: 5 Menit' },
        { title: 'Soundscape Hujan Hutan', price: 'Audio Relaksasi Alami', badge: 'Sedang Berputar' },
      ],
      bottomPills: ['PIN Keamanan Jurnal', 'Tren Mood Mingguan', '100% Privasi Terjaga'],
    },
    designSystem: {
      palette: [
        { name: 'Lavender Mist', hex: '#A78BFA' },
        { name: 'Rose Quartz', hex: '#F472B6' },
        { name: 'Deep Twilight', hex: '#1F1D36' },
        { name: 'Soft Sand', hex: '#FAF5FF' },
      ],
      font: 'Outfit & Plus Jakarta Sans',
      components: ['Emotion Selector Ring', 'Breathing Circle Guide', 'Journal Note Box', 'Soundscape Wave Card'],
    },
    prototype: {
      platform: 'Mindfulness & Breathing Simulator',
      action: 'Simulasi Pemilihan Mood & Animasi Ritme Pernapasan Halus',
      hotspots: ['Pilih Emosi Hari Ini', 'Mulai Sesi Napas', 'Buka Jurnal Pribadi'],
    },
  },

  // 13. AGROSUPPLY (LOMBA)
  'agrosupply': {
    userFlow: {
      title: 'User Flow Transaksi Grosir Komoditas Tani',
      steps: [
        { num: '01', title: 'Bursa Komoditas', desc: 'Pelaku usaha cek harga pasar harian (bawang, cabai, beras)' },
        { num: '02', title: 'Pilih Kelompok Tani', desc: 'Bandingkan kapasitas tonase, grade panen, & sertifikasi' },
        { num: '03', title: 'Kontrak Pembelian', desc: 'Buat PO grosir berulang dengan termin pembayaran aman' },
        { num: '04', title: 'Lacak Ekspedisi', desc: 'Pantau posisi armada truk pendingin hingga tiba di gudang' },
      ],
      altBranch: {
        label: 'Petani Dashboard',
        dest: 'Petani input perkiraan panen & terima penawaran harga wajar',
      },
    },
    ia: {
      title: 'Information Architecture — AgroSupply B2B',
      nodes: [
        { label: 'Bursa Tani', items: ['Indeks Harga Harian', 'Tren Naik/Turun Pasar', 'Komoditas Unggulan'] },
        { label: 'Katalog Panen', items: ['Bawang Merah Brebes', 'Cabai Rawit Merah', 'Sayur Hidroponik'] },
        { label: 'Kelompok Tani', items: ['Profil Koperasi Mitra', 'Sertifikasi Organik', 'Kapasitas Pasokan'] },
        { label: 'PO Kontrak', items: ['Formulir Pembelian Rutin', 'Faktur Tempo B2B', 'Escrow Payment'] },
        { label: 'Rantai Pasok', items: ['Pelacakan Truk Pendingin', 'Sensor Suhu Muatan', 'Surat Jalan'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi B2B Commodity Exchange',
      sections: ['#Live-Commodity-Ticker-Top', '#Market-Price-Trend-Chart', '#Supplier-Card-Grid', '#Bulk-Purchase-Calculator', '#Fleet-Logistics-Tracker'],
      notes: ['Ticker harga berjalan di bagian teratas layar', 'Kartu hasil panen dengan label Grade A / B jelas', 'Status truk pendingin real-time'],
    },
    wireframe: {
      platform: 'Web B2B Marketplace 1440px',
      heroTag: 'B2B Pertanian Langsung dari Petani ke Industri',
      cards: [
        { title: 'Bawang Merah Grade A', price: 'Rp 28.500 / Kg · Stok 4 Ton', badge: 'Koperasi Tani Brebes' },
        { title: 'Cabai Rawit Merah', price: 'Rp 34.000 / Kg · Stok 2 Ton', badge: 'Koperasi Maju Cianjur' },
      ],
      bottomPills: ['Harga Transparan Real-Time', 'Armada Rantai Dingin', 'Pembayaran Escrow Aman'],
    },
    designSystem: {
      palette: [
        { name: 'Agri Emerald', hex: '#2D6A4F' },
        { name: 'Solar Gold', hex: '#E9C46A' },
        { name: 'Earth Charcoal', hex: '#1B1B1E' },
        { name: 'Fresh Dew', hex: '#F4F9F4' },
      ],
      font: 'Plus Jakarta Sans',
      components: ['Commodity Ticker Card', 'Grade Harvest Badge', 'Volume Order Stepper', 'Fleet Map Pin'],
    },
    prototype: {
      platform: 'B2B Agricultural Exchange Prototype',
      action: 'Simulasi Pembuatan PO Kontrak Panen & Pelacakan Armada Truk',
      hotspots: ['Cek Tren Harga Pasar', 'Ajukan Kontrak Grosir', 'Lacak Muatan Truk'],
    },
  },

  // 14. APOLLO (LOMBA)
  'apollo': {
    userFlow: {
      title: 'User Flow Monitoring IoT Sensor & Kontrol Irigasi',
      steps: [
        { num: '01', title: 'Dashboard Telemetri', desc: 'Pantau indikator suhu, pH tanah, kelembaban, & sinar' },
        { num: '02', title: 'Deteksi Anomali', desc: 'Sistem memberi peringatan penurunan kelembaban tanah <40%' },
        { num: '03', title: 'Aktifkan Pompa', desc: 'Trigger sakelar pompa irigasi tetes otomatis via dashboard' },
        { num: '04', title: 'Normalisasi Nutrisi', desc: 'Sensor mencatat pemulihan kelembaban ideal tanaman' },
      ],
      altBranch: {
        label: 'Mode Otomatis',
        dest: 'Jadwal irigasi presisi berbasis algoritma machine learning',
      },
    },
    ia: {
      title: 'Information Architecture — Apollo Smart Farm',
      nodes: [
        { label: 'Telemetri', items: ['Sensor Suhu Udara', 'Kelembaban Tanah pH', 'Intensitas Cahaya Lux'] },
        { label: 'Aktuator', items: ['Pompa Irigasi Tetes', 'Exhaust Fan Ventilasi', 'Tirai Peneduh Otomatis'] },
        { label: 'Zona Greenhouse', items: ['Blok Melon Premium A', 'Blok Hidroponik B', 'Kamera Lahan'] },
        { label: 'Analitik & Panen', items: ['Grafik Konsumsi Air', 'Prediksi Tanggal Panen', 'Efisiensi Pupuk'] },
        { label: 'Sistem Alert', items: ['Pipa Mampet Warning', 'Suhu Ekstrem Bahaya', 'Logbook IoT'] },
      ],
    },
    sketch: {
      title: 'Eksplorasi Cyber Tech Greenhouse Dashboard',
      sections: ['#Live-Sensor-Gauge-Meters', '#Greenhouse-Zone-Map', '#Actuator-Toggle-Controls', '#Multi-Sensor-Graph', '#System-Alert-Console'],
      notes: ['Gauge meter lingkaran dengan jarum telemetri hidup', 'Sakelar toggle berdaya tinggi untuk kontrol pompa', 'Warna cyber jade dan amber'],
    },
    wireframe: {
      platform: 'Tablet & Web IoT Dashboard · Smart Farm',
      heroTag: 'Sistem Otomasi Pertanian Cerdas Berbasis Sensor IoT',
      cards: [
        { title: 'Kelembaban Tanah Blok A', price: 'Nilai: 68% (Ideal)', badge: 'Sensor Akurat' },
        { title: 'Pompa Irigasi Tetes', price: 'Debit: 12 L/m · Aktif', badge: 'Status: ON' },
      ],
      bottomPills: ['Telemetri Real-Time 1s', 'Otomasi Machine Learning', 'Proteksi Tanaman 24/7'],
    },
    designSystem: {
      palette: [
        { name: 'Cyber Jade', hex: '#00F5D4' },
        { name: 'Tech Amber', hex: '#FEE440' },
        { name: 'Space Carbon', hex: '#111827' },
        { name: 'Electric Cyan', hex: '#00BBF9' },
      ],
      font: 'JetBrains Mono & Plus Jakarta Sans',
      components: ['Gauge Sensor Dial', 'Actuator Switch Toggle', 'Telemetry Value Badge', 'Zone Status Map'],
    },
    prototype: {
      platform: 'IoT Greenhouse Automation Prototype',
      action: 'Simulasi Sakelar Kontrol Pompa Irigasi & Respons Sensor',
      hotspots: ['Nyalakan Irigasi Tetes', 'Ubah Threshold Suhu', 'Buka Analisis Panen'],
    },
  },
};

