// ===================================================================
// STUDI KASUS — PROYEK PORTOFOLIO (Klien, Lomba Terpilih, Kuliah, PKL)
// Seluruh konteks, fitur, persona, dan palet warna disesuaikan langsung
// dengan mockup asli pada folder src/assets/cover project/
// ===================================================================

export const workCases = [
  {
    slug: 'speedlust-garage',
    title: 'Speedlust Garage',
    tagline: 'Website layanan cuci helm profesional (Helmet Washing, Detailing & Nano Ceramic Coating) serta katalog produk perawatan helm terintegrasi.',
    kind: 'UI/UX & Front-End',
    year: '2025',
    category: 'Klien',
    badge: 'Client Project @speedlust.garage',
    color: '#9db6a8',
    burst: '#153230',
    meta: {
      role: 'UI/UX Designer & Front-End',
      contextLabel: 'Client Project @speedlust.garage',
      duration: '4 minggu',
      team: 'Solo bersama pemilik @speedlust.garage',
      platform: 'Web (Desktop & Mobile)',
      tools: ['Fg', 'HT', 'CS', 'JS'],
      methodPills: ['Figma', 'UI/UX Design', 'Wireframing', 'HTML/CSS', 'JavaScript', 'Responsive Web'],
    },
    context: {
      summary:
        'Speedlust Garage (@speedlust.garage) adalah penyedia layanan pencucian helm profesional, detailing, dan nano ceramic coating yang juga menjual produk perawatan helm & motor di Bogor dan Jakarta. Sebelumnya pemesanan layanan dan katalog produk hanya tersebar di Instagram dan Tokopedia. Website ini dirancang sebagai etalase resmi yang merangkum paket cuci helm, katalog produk, ulasan pelanggan, hingga lokasi cabang dan kontak admin.',
      facts: [
        { k: 'Klien', v: 'Speedlust Garage (@speedlust.garage)' },
        { k: 'Jenis produk', v: 'Landing Page & Katalog Layanan/Produk' },
        { k: 'Cabang', v: 'Bogor & Jakarta' },
        { k: 'Kanal konversi', v: 'Website → WhatsApp Admin & Tokopedia' },
      ],
      goals: [
        'Menyajikan layanan Helmet Washing (Basic Cleaning & Deep Cleaning) beserta harga secara jelas dan transparan.',
        'Menampilkan katalog produk perawatan (Helmet, Engine Parts, Apparels, Motorcycle) yang terhubung ke Tokopedia.',
        'Memudahkan pelanggan menemukan lokasi cabang Bogor & Jakarta serta menghubungi admin untuk Pick-Up & Delivery.',
      ],
      scope: [
        'Riset kebutuhan pelanggan layanan perawatan helm & audit akun @speedlust.garage',
        'Perancangan struktur informasi (Home, Service, Product, Reviews, Contact Us)',
        'Wireframing & desain antarmuka visual di Figma',
        'Implementasi website responsif untuk desktop dan perangkat mobile',
      ],
    },
    problem: {
      quote: 'Aku ingin cuci helm deep cleaning dan beli visor cleaner, tapi informasi paket harga, produk, dan titik jemputnya masih terpisah-pisah di media sosial.',
      whyItMatters:
        'Pemilik helm harian maupun helm koleksi membutuhkan kepastian standar kebersihan, rincian paket harga (Basic vs Deep Cleaning), serta kemudahan memesan layanan antar-jemput tanpa harus bertanya berulang kali ke admin.',
      targetContext:
        'Pengendara motor harian, komunitas motor, dan pemilik helm di wilayah Bogor dan Jakarta yang membutuhkan perawatan helm higienis serta produk pembersih praktis.',
      user: {
        title: 'Masalah yang dialami pelanggan',
        points: [
          'Perbedaan layanan Basic Cleaning (Rp 30.000) dan Deep Cleaning (Rp 45.000) sulit ditemukan dengan cepat di feed Instagram.',
          'Katalog produk seperti CLASH Glass Cleaner, parfum helm, dan aksesori tercampur tanpa filter kategori.',
          'Pelanggan bingung membedakan kontak admin dan titik peta untuk cabang Bogor maupun Jakarta.',
        ],
      },
      business: {
        title: 'Tantangan bisnis & desain',
        points: [
          'Admin sering menjawab pertanyaan berulang seputar harga cuci helm dan layanan Pick-Up & Delivery.',
          'Menyatukan dua fungsi utama dalam satu halaman: pemesanan jasa cuci helm dan etalase produk fisik Tokopedia.',
          'Membangun citra bengkel perawatan helm yang bersih, higienis, dan tepercaya melalui palet warna yang segar.',
        ],
      },
      hmw: 'Bagaimana kami merancang satu halaman web yang meyakinkan pemilik helm akan kualitas pencucian sekaligus mempermudah order jasa maupun pembelian produk?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mewawancarai pemilik @speedlust.garage dan membaca ulasan pelanggan tentang layanan cuci helm & produk.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan kebutuhan utama: transparansi paket cuci helm, katalog produk terfilter, dan akses cabang.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Menyusun alur halaman dari Hero → Why Choose Us → Services → Premium Products → Reviews → Find Us.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Merancang UI bersih bernuansa sage-teal dengan fotografi produk helm & botol perawatan yang menonjol.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji keterbacaan paket harga, filter produk, dan kemudahan akses tombol admin di layar desktop & HP.' },
    ],
    research: {
      methods: [
        { title: 'Wawancara pemilik usaha', desc: 'Menggali layanan unggulan, pertanyaan pelanggan paling sering, dan alur Pick-Up & Delivery.' },
        { title: 'Audit katalog Tokopedia & IG', desc: 'Mengelompokkan lini produk perawatan ke dalam kategori Helmet, Engine Parts, Apparels, dan Motorcycle.' },
        { title: 'Analisis ulasan pelanggan', desc: 'Mengidentifikasi poin kepuasan utama: kebersihan detail, wangi tahan lama, dan ketepatan waktu.' },
      ],
      insights: [
        { title: 'Transparansi harga mempercepat order', desc: 'Menampilkan harga Basic Cleaning (Rp 30.000) dan Deep Cleaning (Rp 45.000) langsung di kartu layanan meningkatkan keyakinan pelanggan.' },
        { title: 'Keunggulan layanan harus terlihat cepat', desc: 'Empat pilar nilai (Professional Cleaning, Premium Products, Accessories, Pick-Up & Delivery) menjawab keraguan pengguna baru.' },
        { title: 'Pemisahan cabang Bogor & Jakarta', desc: 'Peta ganda dan tombol khusus Admin Bogor serta Admin Jakarta mencegah salah hubungi cabang.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Bersih, segar, dan profesional', desc: 'Kombinasi warna mint-sage dan dark slate mencerminkan kesegaran helm yang baru dicuci bersih.' },
        { title: 'Jasa dan produk dalam satu alur', desc: 'Pengunjung dapat memesan jasa cuci helm sekaligus menjelajahi produk perawatan resmi.' },
        { title: 'Aksi lokasi & kanal yang jelas', desc: 'Bagian Find Us langsung menghubungkan pengguna ke peta cabang, WhatsApp tiap kota, dan Tokopedia.' },
      ],
      process: [
        { title: 'Arsitektur Informasi', desc: 'Menyusun 6 bagian utama landing page agar alur bercerita mengalir dari pengenalan ke konversi.' },
        { title: 'Wireframing Layout', desc: 'Merancang tata letak asimetris pada bagian Why Choose Us dan grid 3 kolom pada katalog produk.' },
        { title: 'Visual Design', desc: 'Mengintegrasikan identitas logo Speedlust Garage dengan visual helm Shoei dan produk CLASH.' },
        { title: 'Front-End Implementation', desc: 'Membangun halaman web responsif dengan filter kategori produk interaktif.' },
      ],
      decisions: [
        { title: 'Kartu perbandingan Basic vs Deep Cleaning', why: 'Memudahkan pelanggan memilih paket cuci sesuai kondisi helmnya tanpa perlu bertanya dulu.' },
        { title: 'Filter kategori pada Our Premium Products', why: 'Membantu pengunjung menyaring produk Helmet, Engine Parts, Apparels, dan Motorcycle dengan cepat.' },
        { title: 'Dual Map & Direct Admin Buttons di Find Us', why: 'Pelanggan Bogor dan Jakarta langsung diarahkan ke titik lokasi dan admin cabang yang tepat.' },
      ],
      persona: {
        name: 'Daniel Brown, 24',
        role: 'Komuter motor harian & pemilik helm full-face',
        age: '24 tahun',
        occupation: 'Karyawan swasta',
        location: 'Bogor & Jakarta',
        quote: 'Helm dipakai setiap hari di jalan, jadi aku butuh tempat cuci helm yang bersih, wangi, dan jelas harganya.',
        goals: [
          'Mengetahui harga dan rincian paket Basic maupun Deep Cleaning dengan cepat',
          'Membeli cairan pembersih visor dan parfum helm yang aman untuk coating',
          'Menggunakan layanan Pick-Up & Delivery saat sibuk bekerja',
        ],
        pains: [
          'Informasi layanan dan produk tersebar di banyak unggahan media sosial',
          'Takut busa dan lapisan coating helm rusak jika dicuci sembarangan',
          'Bingung mencari lokasi workshop dan kontak admin cabang terdekat',
        ],
      },
      features: [
        'Hero Banner "Welcome to Helmet Washing Services" dengan CTA Order Now instan',
        '4 Pilar Keunggulan: Professional Cleaning, Premium Products, Accessories, & Pick-Up Delivery',
        'Kartu Paket Layanan transparan: Basic Cleaning (Rp 30.000) & Deep Cleaning (Rp 45.000)',
        'Katalog Our Premium Products dengan filter kategori & tautan langsung ke Tokopedia',
        'Section Customer Reviews & Find Us dengan peta ganda serta tombol Admin Bogor & Jakarta',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow', caption: 'Alur pengunjung dari menemukan situs, memilih paket cuci helm atau produk, hingga menghubungi admin/Tokopedia.' },
      { title: 'Information Architecture', caption: 'Struktur navigasi satu halaman: Home, Service, Product, Reviews, dan Contact Us.' },
      { title: 'Sketsa & Eksplorasi Layout', caption: 'Eksplorasi penempatan visual helm melayang dan tata letak kartu keunggulan.' },
      { title: 'Wireframe', caption: 'Kerangka halaman desktop dan mobile untuk memastikan hierarki harga dan produk terbaca cepat.' },
    ],
    deliverablesFinal: [
      { title: 'Design System & Komponen', caption: 'Sistem tipografi, tombol kategori, kartu produk dengan rating bintang, dan badge cabang.' },
      { title: 'UI Final — Speedlust Garage', caption: 'Tampilan lengkap landing page Speedlust Garage dari Hero, Services, Premium Products, Reviews, hingga Find Us.', isFeatured: true },
      { title: 'Implementasi Web Responsif', caption: 'Halaman web interaktif yang responsif di layar laptop maupun smartphone.' },
    ],
    deliverables: [
      { title: 'User Flow & Sitemap', caption: 'Alur dari landing page menuju order layanan cuci helm dan katalog Tokopedia.' },
      { title: 'Wireframe Low-Fidelity', caption: 'Kerangka urutan section Home, Why Choose Us, Services, Products, Reviews, dan Find Us.' },
      { title: 'UI Final — Speedlust Garage', caption: 'Desain antarmuka lengkap layanan Helmet Washing dan katalog produk perawatan.' },
      { title: 'Komponen Katalog & Filter', caption: 'Kartu produk CLASH & helm lengkap dengan filter kategori dan tautan Tokopedia.' },
    ],
    palette: [
      { name: 'Garage Teal', hex: '#153230' },
      { name: 'Mint Mist', hex: '#C4D7D1' },
      { name: 'Carbon Dark', hex: '#0F171A' },
      { name: 'Pure White', hex: '#F5F7F6' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyatukan jasa layanan dan katalog produk fisik',
        problem: 'Pengunjung datang dengan dua niat berbeda: ingin mencuci helm atau membeli produk pembersih seperti visor cleaner.',
        action: 'Memisahkan section Helmet Washing Services (berfokus pada paket jasa) dengan section Our Premium Products (berfokus pada katalog berfilter yang mengarah ke Tokopedia).',
      },
      {
        title: 'Mengarahkan pelanggan ke cabang yang tepat',
        problem: 'Speedlust Garage melayani area Bogor dan Jakarta sehingga rawan salah kontak admin.',
        action: 'Merancang section Find Us dengan dua peta berdampingan serta tombol khusus Admin Bogor, Admin Jakarta, Tokopedia, dan Email.',
      },
    ],
    impact: {
      headline: 'Client project website resmi @speedlust.garage untuk layanan Helmet Washing & produk perawatan.',
      highlights: [
        'Menyajikan informasi paket Basic & Deep Cleaning secara transparan dalam satu halaman',
        'Mengintegrasikan katalog produk perawatan helm langsung ke ekosistem Tokopedia & WhatsApp cabang',
      ],
      metrics: [
        { value: '2', label: 'Cabang terintegrasi (Bogor & Jakarta)' },
        { value: '5', label: 'Kategori filter produk perawatan' },
        { value: '6', label: 'Section konversi terstruktur' },
      ],
      reflections: [
        'Memahami model bisnis klien secara menyeluruh sangat penting agar jasa layanan dan penjualan produk tidak saling menutupi.',
        'Kejelasan harga dasar dan lokasi cabang adalah elemen yang paling dicari pelanggan sebelum menekan tombol pesan.',
      ],
    },
  },

  {
    slug: 'rie-charge',
    title: 'Rie.Charge',
    tagline: 'Website pemesanan Cold Pressed Juice, Fitshot, dan Asinan buah segar khas Bogor dengan sistem keranjang Pre-Order (PO H-1).',
    kind: 'UI/UX & Front-End',
    year: '2025',
    category: 'Klien',
    badge: 'Client Project @rie.charge_juicesaladbgr',
    color: '#c9e870',
    burst: '#4e6e3a',
    meta: {
      role: 'UI/UX Designer & Front-End',
      contextLabel: 'Client Project @rie.charge_juicesaladbgr',
      duration: '5 minggu',
      team: 'Solo bersama pemilik @rie.charge_juicesaladbgr',
      platform: 'Web (Desktop & Mobile)',
      tools: ['Fg', 'HT', 'CS', 'JS'],
      methodPills: ['Figma', 'UI/UX Design', 'E-Commerce Flow', 'Wireframing', 'HTML/CSS', 'JavaScript'],
    },
    context: {
      summary:
        'Rie.Charge (@rie.charge_juicesaladbgr) adalah usaha minuman dan makanan sehat di Bogor yang memproduksi Cold Pressed Juice, Fitshot, dan Asinan/Rujak dari 100% buah & sayur segar tanpa tambahan gula. Karena produk dibuat segar setiap hari berdasarkan pesanan (sistem PO H-1), Rie.Charge membutuhkan website katalog dan checkout yang memudahkan pelanggan memilih varian, paket bundling mingguan, serta mengatur jadwal pengiriman.',
      facts: [
        { k: 'Klien', v: 'Rie.Charge (@rie.charge_juicesaladbgr)' },
        { k: 'Jenis produk', v: 'Website E-Commerce & Pre-Order Minuman Sehat' },
        { k: 'Lini produk', v: 'Cold Pressed Juice, Fitshot, & Asinan' },
        { k: 'Sistem pesanan', v: 'Pre-Order H-1 (dibuat segar setiap hari)' },
      ],
      goals: [
        'Menampilkan kesegaran produk Cold Pressed Juice, Fitshot, dan Asinan lewat visual yang menggugah selera.',
        'Memudahkan pelanggan memesan paket Bundling This Week maupun produk satuan melalui keranjang (My Cart).',
        'Menyediakan alur checkout yang jelas dengan informasi tanggal pengiriman PO H-1, diskon otomatis, dan alamat kirim.',
      ],
      scope: [
        'Pemetaan alur belanja pelanggan dari katalog hingga checkout PO H-1',
        'Perancangan halaman Home, Our Premium Products, My Cart Drawer, dan Checkout 3 tahap',
        'Penyusunan komponen kartu produk, testimoni pelanggan, dan FAQ akordeon',
        'Implementasi antarmuka front-end yang responsif',
      ],
    },
    problem: {
      quote: 'Aku ingin rutin pesan cold pressed juice dan fitshot untuk besok pagi, tapi lewat chat manual sering bingung varian mana yang ready dan berapa total harganya setelah diskon.',
      whyItMatters:
        'Pelanggan produk sehat menginginkan cara praktis untuk memesan minuman segar harian tanpa harus menunggu balasan chat admin untuk menghitung total belanja dan jadwal pengiriman PO H-1.',
      targetContext:
        'Mahasiswa, pekerja kantoran, dan ibu rumah tangga di Bogor yang ingin mengonsumsi nutrisi buah & sayur asli secara praktis.',
      user: {
        title: 'Masalah yang dialami pembeli',
        points: [
          'Sulit melihat seluruh varian rasa (Red Earth, Wild Nature, Yellow Sunrise, Red Moon) beserta harganya sekaligus.',
          'Sering lupa aturan pengiriman Pre-Order H-1 saat memesan lewat chat.',
          'Harus menghitung manual total harga pesanan dan potongan diskon paket.',
        ],
      },
      business: {
        title: 'Tantangan usaha & desain',
        points: [
          'Pencatatan alamat pengiriman dan item pesanan (Cold Pressed Juice, Fitshot, Rujak Kweni) lewat chat rawan terlewat.',
          'Menonjolkan klaim utama: 100% buah & sayur segar pilihan tanpa pengawet dan tanpa tambahan gula.',
          'Merancang alur checkout yang ringkas namun memuat tanggal kirim PO H-1 dengan jelas.',
        ],
      },
      hmw: 'Bagaimana kami merancang pengalaman belanja minuman sehat segar yang terasa praktis, transparan dalam perhitungan harga, dan jelas jadwal pengirimannya?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami kebiasaan pelanggan @rie.charge_juicesaladbgr saat memesan jus, fitshot, dan asinan.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menetapkan fokus desain pada kejelasan kategori produk, info PO H-1 di keranjang, dan kemudahan checkout.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang section Bundling This Week, carousel Best Seller, filter kategori, serta drawer My Cart.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun UI bernuansa hijau daun, lime segar, dan krem hangat dengan alur checkout 3 langkah.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji alur tambah ke keranjang, perubahan jumlah item, hingga pengisian form Destination Delivery.' },
    ],
    research: {
      methods: [
        { title: 'Wawancara pelanggan rutin', desc: 'Menggali alasan berlangganan Fitshot & Cold Pressed Juice serta kendala saat memesan via DM/WhatsApp.' },
        { title: 'Audit katalog @rie.charge_juicesaladbgr', desc: 'Menyusun pengelompokan menu ke dalam kategori Cold Pressed Juice, Fitshot, dan Asinan.' },
        { title: 'Evaluasi alur Pre-Order', desc: 'Merancang penempatan informasi Delivery Date (PO H-1) agar disadari pembeli sebelum membayar.' },
      ],
      insights: [
        { title: 'Paket bundling mempermudah pilihan', desc: 'Pelanggan baru sangat terbantu dengan rekomendasi Bundling This Week dan Best Seller Product.' },
        { title: 'Pengingat PO H-1 di dalam keranjang', desc: 'Menampilkan tanggal pengiriman H+1 tepat di bagian atas My Cart mencegah kesalahpahaman waktu kirim.' },
        { title: 'FAQ menjawab keraguan bahan baku', desc: 'Pertanyaan tentang pengawet, gula tambahan, dan daya tahan simpan terjawab langsung di halaman utama.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Segar dan alami secara visual', desc: 'Palet hijau organik dan warna botol jus yang cerah langsung mengomunikasikan kesegaran buah asli.' },
        { title: 'Transparan dari keranjang hingga bayar', desc: 'Rincian harga per item, diskon 10%, dan total akhir terhitung otomatis di My Cart dan halaman Checkout.' },
        { title: 'Edukasi tanpa menggurui', desc: 'Testimoni pelanggan nyata dan FAQ akordeon memperkuat kepercayaan terhadap kualitas bahan.' },
      ],
      process: [
        { title: 'Pemetaan User Flow E-Commerce', desc: 'Menyusun alur: pilih kategori → tambah ke keranjang → cek jadwal PO H-1 → isi alamat → konfirmasi pesanan.' },
        { title: 'Wireframing Katalog & Checkout', desc: 'Merancang tata letak halaman utama, katalog produk, drawer My Cart, dan form pengiriman.' },
        { title: 'Desain Visual & Fotografi Produk', desc: 'Menata botol Cold Pressed Juice (Red Earth, Wild Nature, Yellow Sunrise, Red Moon) sebagai pusat visual.' },
        { title: 'Implementasi Front-End', desc: 'Membangun antarmuka web responsif dengan interaksi keranjang belanja dan filter kategori.' },
      ],
      decisions: [
        { title: 'Banner Delivery Date (PO H-1) di My Cart', why: 'Memastikan pembeli langsung melihat tanggal pengiriman pesanan sebelum lanjut ke tahap checkout.' },
        { title: 'Filter pil kategori (All, Cold Pressed Juice, Fitshot, Asinan)', why: 'Mempercepat pembeli menemukan lini produk favoritnya dalam satu klik.' },
        { title: 'Stepper Checkout 3 tahap (My Cart → Information & Payment → Pesanan Saya)', why: 'Menjaga proses pengisian data pengiriman tetap terstruktur dan tidak membingungkan.' },
      ],
      persona: {
        name: 'Bagas, 21',
        role: 'Mahasiswa di Bogor yang aktif & peduli kesehatan',
        age: '21 tahun',
        occupation: 'Mahasiswa',
        location: 'Kota Bogor',
        quote: 'Semenjak rutin minum Fitshot dan Cold Pressed Juice dari Rie.Charge, badan jadi lebih enteng dan praktis dipesan tanpa ribet.',
        goals: [
          'Memesan Cold Pressed Juice, Fitshot, dan Rujak Kweni dengan cepat untuk pengiriman esok hari',
          'Mengetahui promo bundling mingguan dan potongan diskon secara otomatis',
          'Memastikan minuman dibuat dari 100% buah asli tanpa gula dan pengawet',
        ],
        pains: [
          'Harus bertanya satu per satu varian yang tersedia lewat chat',
          'Sering bingung menghitung total pesanan saat membeli beberapa varian sekaligus',
          'Khawatir salah jadwal pengiriman karena sistem PO H-1',
        ],
      },
      features: [
        'Hero "Cara Praktis Isi Ulang Energimu dengan Nutrisi Buah Asli" & highlight Bundling This Week',
        'Carousel Best Seller Product (Red Earth, Wild Nature, Yellow Sunrise, Red Moon) dengan tombol tambah cepat',
        'Halaman Our Premium Products dengan filter kategori: All, Cold Pressed Juice, Fitshot, dan Asinan',
        'Drawer My Cart interaktif dengan indikator Delivery Date (PO H-1) dan kalkulasi diskon otomatis',
        'Halaman Checkout terstruktur (Destination Delivery & Your Order) serta section Customer Reviews & FAQ',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Belanja & PO H-1', caption: 'Alur perjalanan pelanggan dari melihat katalog, mengatur isi keranjang, hingga menyelesaikan checkout.' },
      { title: 'Information Architecture', caption: 'Struktur halaman Home, Product’s, Blog’s, My Cart Drawer, dan 3 tahap Checkout.' },
      { title: 'Sketsa & Eksplorasi Layout', caption: 'Eksplorasi tata letak kartu Best Seller dan ringkasan pesanan.' },
      { title: 'Wireframe', caption: 'Kerangka halaman katalog, modal keranjang belanja, dan formulir pengiriman.' },
    ],
    deliverablesFinal: [
      { title: 'Design System & Komponen UI', caption: 'Palet hijau segar, pil kategori, kartu produk buah, komponen stepper kuantitas, dan akordeon FAQ.' },
      { title: 'UI Final — Rie.Charge', caption: 'Tampilan lengkap website Rie.Charge: Landing Page, Katalog Produk, My Cart PO H-1, dan halaman Checkout.', isFeatured: true },
      { title: 'Prototype & Implementasi Web', caption: 'Simulasi alur pemesanan minuman sehat dari pemilihan produk hingga checkout.' },
    ],
    deliverables: [
      { title: 'User Flow E-Commerce', caption: 'Alur pemesanan produk segar dengan sistem Pre-Order H-1.' },
      { title: 'Katalog & Bundling Produk', caption: 'Tampilan Best Seller, Bundling This Week, dan filter kategori produk.' },
      { title: 'UI Final — Rie.Charge', caption: 'Desain lengkap halaman utama, katalog, My Cart, dan alur Checkout.' },
      { title: 'Drawer Keranjang & Checkout', caption: 'Ringkasan item, tanggal kirim PO H-1, diskon, dan formulir alamat pengiriman.' },
    ],
    palette: [
      { name: 'Leaf Green', hex: '#4E6E3A' },
      { name: 'Fresh Lime', hex: '#C9E870' },
      { name: 'Citrus Orange', hex: '#F47C20' },
      { name: 'Warm Cream', hex: '#FAF6E8' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Mengomunikasikan aturan Pre-Order (PO H-1) dengan jelas',
        problem: 'Berbeda dengan pengiriman instan, produk jus segar dibuat berdasarkan pesanan untuk dikirim keesokan harinya.',
        action: 'Menempatkan kartu informasi Delivery Date (PO H-1) dan catatan waktu pengiriman secara menonjol di dalam drawer My Cart sebelum tombol Checkout.',
      },
      {
        title: 'Menjaga alur checkout tetap ringkas namun lengkap',
        problem: 'Pelanggan sering memesan beberapa item sekaligus (jus, fitshot, rujak) sehingga ringkasan pesanan harus jelas.',
        action: 'Menyajikan layout 2 kolom pada halaman Checkout: formulir Destination Delivery di kiri dan kartu Your Order lengkap dengan rincian diskon di kanan.',
      },
    ],
    impact: {
      headline: 'Client project website e-commerce minuman sehat @rie.charge_juicesaladbgr di Bogor.',
      highlights: [
        'Mempermudah pelanggan memesan Cold Pressed Juice, Fitshot, dan Asinan dengan sistem PO H-1',
        'Menghadirkan transparansi harga, paket bundling, dan perhitungan diskon otomatis di keranjang',
      ],
      metrics: [
        { value: '3', label: 'Lini produk utama (Juice, Fitshot, Asinan)' },
        { value: 'H-1', label: 'Sistem jadwal pengiriman terintegrasi' },
        { value: '3', label: 'Tahap alur checkout terstruktur' },
      ],
      reflections: [
        'Pada produk F&B segar, fotografi produk dan kejelasan waktu pengiriman (PO H-1) memegang peran kunci dalam membangun kepercayaan.',
        'Drawer keranjang belanja yang informatif membantu pelanggan memeriksa kembali pesanan tanpa kehilangan konteks halaman katalog.',
      ],
    },
  },

  {
    slug: 'poly-board-games',
    title: 'Poly Board Games',
    tagline: 'Web dashboard internal manajemen operasional dan staf untuk Poly Games Cafe: evaluasi kinerja, payroll, food kasbon, hingga persetujuan lembur.',
    kind: 'UI/UX & Web App',
    year: '2026',
    category: 'Klien',
    badge: 'Client Project @polyatpoly',
    color: '#8b3dff',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer & Front-End',
      contextLabel: 'Client Project @polyatpoly',
      duration: '5 minggu',
      team: 'Tim pengembang internal @polyatpoly',
      platform: 'Web App (Dashboard Desktop)',
      tools: ['Fg', 'HT', 'CS', 'JS', 'Re'],
      methodPills: ['Figma', 'Dashboard UI/UX', 'Design System', 'React', 'Data Visualization', 'HRIS Flow'],
    },
    context: {
      summary:
        'Poly Board Games (@polyatpoly / Poly Games Cafe) membutuhkan sistem informasi internal satu pintu untuk mengelola operasional staf kafe sehari-hari. Sebelumnya pencatatan jatah makan staf (Food Kasbon), pengajuan kasbon (Cash Advance), penilaian kinerja bulanan (Staff Evaluations), dan pengajuan lembur (Overtime Requests) masih dicatat terpisah. Dashboard ini dirancang agar manajer dan staf dapat memantau seluruh operasional kerja secara real-time dan transparan.',
      facts: [
        { k: 'Klien', v: 'Poly Board Games (@polyatpoly)' },
        { k: 'Jenis produk', v: 'Internal Staff & Operations Web Dashboard' },
        { k: 'Modul utama', v: 'Dashboard, Evaluations, Payroll, Food Allowance, Overtime' },
        { k: 'Pengguna', v: 'Manajer Operasional & Staf Poly Games Cafe' },
      ],
      goals: [
        'Menyatukan ringkasan operasional harian (jumlah karyawan, pending reviews, payroll, dan pengumuman staf) dalam satu Workspace Overview.',
        'Memudahkan pencatatan dan pemantauan kuota makan staf (Food Allowance & Food Kasbon) serta pengajuan Cash Advance.',
        'Menyediakan sistem evaluasi kinerja staf berbasis skor (System Performance Index) dan kalender persetujuan lembur.',
      ],
      scope: [
        'Riset alur operasional internal staf dan manajemen di Poly Games Cafe',
        'Perancangan arsitektur informasi 6 modul utama di sidebar navigasi',
        'Desain antarmuka high-fidelity untuk Dashboard, Food Allowance, Evaluations, dan Overtime Management',
        'Pengembangan komponen UI dashboard yang bersih dan konsisten',
      ],
    },
    problem: {
      quote: 'Sebagai manajer kafe, sulit memantau sisa limit food kasbon staf, pengajuan lembur, dan evaluasi bulanan kalau semuanya masih dicatat di spreadsheet yang berbeda.',
      whyItMatters:
        'Operasional kafe yang dinamis dengan puluhan staf membutuhkan pencatatan yang cepat, akurat, dan transparan agar perhitungan payroll bulanan tidak salah dan evaluasi tim berjalan objektif.',
      targetContext:
        'Manajer operasional dan seluruh staf Poly Games Cafe yang setiap hari berinteraksi dengan jadwal shift, konsumsi staf, lembur, dan evaluasi berkala.',
      user: {
        title: 'Masalah operasional staf & manajer',
        points: [
          'Pencatatan konsumsi harian staf (Food Kasbon) dan sisa plafon bulanan sering tidak sinkron saat rekap gaji.',
          'Penilaian performa staf sulit diukur secara konsisten tanpa indikator skala yang terstandar.',
          'Pengajuan jam lembur (Overtime) beserta bukti foto tugas sering tercecer di grup chat.',
        ],
      },
      business: {
        title: 'Tantangan desain sistem internal',
        points: [
          'Menyajikan banyak metrik operasional (Payroll, Kasbon, Rating, Overtime) tanpa membuat layar terasa padat.',
          'Membuat alur input Food Kasbon yang secepat aplikasi kasir (POS) lengkap dengan modal edit item.',
          'Menjaga transparansi antara pandangan manajemen (Oversight) dan pandangan staf (Employee View).',
        ],
      },
      hmw: 'Bagaimana kami merancang satu workspace digital yang merapikan administrasi staf, kasbon konsumsi, evaluasi, dan lembur di Poly Games Cafe?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memetakan rutinitas manajer dan staf @polyatpoly terkait absensi, jatah makan, lembur, dan evaluasi.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menentukan 5 modul inti yang wajib terhubung: Overview, Employees, Evaluations, Food Allowance, dan Overtime.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang pola Quick Actions (Instant Tools), kartu menu Food Kasbon, dan kalender persetujuan lembur.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun sistem desain dashboard bernuansa putih bersih dengan aksen ungu elektrik (#8B3DFF).' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji alur pencatatan Food Kasbon, pemberian skor evaluasi 10–100, serta approval lembur harian.' },
    ],
    research: {
      methods: [
        { title: 'Observasi alur kerja kafe', desc: 'Mempelajari cara staf mencatat pesanan makanan internal dan mengajukan lembur usai turnamen/event kafe.' },
        { title: 'Wawancara manajemen @polyatpoly', desc: 'Mengidentifikasi metrik yang paling dibutuhkan setiap pagi saat membuka dashboard.' },
        { title: 'Audit spreadsheet operasional', desc: 'Mengubah tabel manual kasbon, payroll, dan form evaluasi menjadi komponen UI terstruktur.' },
      ],
      insights: [
        { title: 'Instant Tools mempercepat tugas rutin', desc: 'Tombol pintas Issue Payroll, Add Employee, Review Requests, dan Export Data menghemat banyak klik.' },
        { title: 'Dual-view pada Food Allowance', desc: 'Staf butuh katalog menu cepat untuk mencatat makan, sedangkan manajer butuh ranking pemakaian kuota.' },
        { title: 'Kalender visual mempermudah cek lembur', desc: 'Menandai tanggal yang memiliki pengajuan lembur di kalender bulanan mempercepat proses review.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Terang, bersih, dan terstruktur', desc: 'Latar terang dengan aksen ungu memberikan kejelasan baca tinggi untuk tabel angka dan metrik.' },
        { title: 'Tindakan cepat tanpa pindah banyak halaman', desc: 'Penggunaan modal kontekstual (seperti Edit Entry Food Kasbon) menjaga alur kerja tetap fokus.' },
        { title: 'Transparansi dua arah', desc: 'Setiap catatan kasbon, skor evaluasi, dan status lembur memiliki riwayat yang jelas bagi staf maupun manajer.' },
      ],
      process: [
        { title: 'Arsitektur Modul Dashboard', desc: 'Menyusun navigasi sidebar: Dashboard, Employees, Evaluations, Payroll, Food Allowance, dan Overtime Requests.' },
        { title: 'Wireframing Data Cards & Tables', desc: 'Merancang tata letak kartu KPI, daftar pengumuman staf, dan panel ringkasan operasional.' },
        { title: 'High-Fidelity UI Design', desc: 'Menerapkan warna ungu khas Poly Games Cafe serta badge status warna-warni (Approved, Pending, Active).' },
        { title: 'Front-End Component Build', desc: 'Mengembangkan komponen dashboard modular yang responsif dan siap diintegrasikan.' },
      ],
      decisions: [
        { title: 'Kartu menu visual di halaman Food Kasbon', why: 'Staf dapat memilih item menu kafe (seperti Nasi Goreng, Iced Americano) layaknya memakai aplikasi POS.' },
        { title: 'Skala evaluasi 10–100 per kategori kepemimpinan', why: 'Membuat penilaian Staff Evaluations pada Active Management Audit lebih terukur dan adil.' },
        { title: 'Kalender interaktif di Overtime Management', why: 'Manajer dapat memilih tanggal dan langsung menyetujui (Approve/Reject) pengajuan lembur beserta foto buktinya.' },
      ],
      persona: {
        name: 'Sachio Senne D., 26',
        role: 'Operations Manager di Poly Games Cafe',
        age: '26 tahun',
        occupation: 'Manajer Operasional Kafe',
        location: 'Poly Games Cafe',
        quote: 'Aku butuh satu dashboard yang langsung memperlihatkan kondisi tim hari ini: siapa yang ajukan lembur, sisa kuota makan, dan jadwal evaluasi.',
        goals: [
          'Memantau total karyawan aktif, pengajuan yang menunggu persetujuan, dan ringkasan payroll dalam satu layar',
          'Mengawasi pemakaian Food Allowance & Cash Advance agar tidak melebihi batas bulanan',
          'Menjalankan evaluasi performa staf dan menyetujui lembur secara transparan',
        ],
        pains: [
          'Rekap manual food kasbon dan lembur memakan banyak waktu di akhir bulan',
          'Pengumuman internal staf sering tenggelam di grup percakapan',
          'Sulit melihat histori pemakaian kuota makan tiap karyawan secara real-time',
        ],
      },
      features: [
        'Workspace Overview dengan 4 KPI utama, Staff Announcements, Instant Tools, dan Staff Operations Summary',
        'Modul Food Allowance & Cash Advance lengkap dengan katalog Food Kasbon dan modal Edit Entry',
        'Halaman Food Allowance Oversight dengan fitur Staff Ranking by Usage & riwayat transaksi',
        'Modul Staff Evaluations dengan System Performance Index (88.1/100) & skala audit manajemen',
        'Halaman Overtime Management dengan kalender bulanan dan kartu persetujuan lembur (Approve/Reject)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Operasional & HR', caption: 'Alur pencatatan Food Kasbon, pengajuan Cash Advance, evaluasi staf, hingga persetujuan lembur.' },
      { title: 'Information Architecture', caption: 'Pemetaan 6 menu utama pada sidebar Poly Games Cafe beserta hak akses manajer dan staf.' },
      { title: 'Sketsa Layout Dashboard', caption: 'Eksplorasi grid kartu metrik, tabel ranking pemakaian kuota, dan kalender lembur.' },
      { title: 'Wireframe', caption: 'Kerangka layar Workspace Overview, Food Allowance, Staff Evaluations, dan Overtime Management.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Dashboard', caption: 'Komponen sidebar, kartu KPI, skala skor 10–100, badge status, dan modal formulir.' },
      { title: 'UI Final — Poly Board Games Dashboard', caption: 'Tampilan lengkap 5 layar utama sistem internal Poly Games Cafe (@polyatpoly).', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi perpindahan antarmodul operasional dan interaksi modal Edit Entry.' },
    ],
    deliverables: [
      { title: 'Workspace Overview Dashboard', caption: 'Ringkasan karyawan, payroll, pengumuman, instant tools, dan status operasional.' },
      { title: 'Modul Food Allowance & Kasbon', caption: 'Pencatatan konsumsi staf, pengajuan kasbon, dan pemantauan kuota oleh manajemen.' },
      { title: 'UI Final — Poly Board Games', caption: 'Desain antarmuka lengkap sistem manajemen staf dan operasional Poly Games Cafe.' },
      { title: 'Staff Evaluations & Overtime', caption: 'Halaman audit performa staf dan kalender persetujuan lembur harian.' },
    ],
    palette: [
      { name: 'Poly Purple', hex: '#8B3DFF' },
      { name: 'Soft Lavender', hex: '#F3ECFF' },
      { name: 'Slate Dark', hex: '#1E1B2E' },
      { name: 'Emerald Status', hex: '#10B981' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyederhanakan pencatatan Food Kasbon & Cash Advance',
        problem: 'Staf kafe membutuhkan cara cepat untuk mencatat makanan harian maupun mengajukan kasbon tanpa formulir yang rumit.',
        action: 'Menggabungkan grid pilihan menu makanan bergaya kasir, ringkasan sisa limit bulanan, dan formulir Cash Advance dalam satu layar terpadu.',
      },
      {
        title: 'Menjaga keterbacaan data evaluasi dan lembur',
        problem: 'Data evaluasi puluhan staf dan daftar pengajuan lembur berisiko terlihat monoton dan melelahkan mata.',
        action: 'Menggunakan kartu indeks performa berwarna ungu di bagian atas evaluasi serta memadukan kalender bulanan dengan kartu bukti lembur bergambar.',
      },
    ],
    impact: {
      headline: 'Client project sistem manajemen operasional & staf internal untuk @polyatpoly.',
      highlights: [
        'Menyatukan 5 alur administrasi kafe (Overview, Payroll, Food Kasbon, Evaluasi, & Lembur) dalam satu sistem',
        'Mempercepat proses audit pemakaian kuota makan dan persetujuan lembur staf secara transparan',
      ],
      metrics: [
        { value: '5', label: 'Modul operasional terintegrasi' },
        { value: '24', label: 'Staf terkelola dalam satu workspace' },
        { value: '100%', label: 'Transparansi limit kasbon & lembur' },
      ],
      reflections: [
        'Mendesain aplikasi internal (B2B/HRIS) menuntut efisiensi klik dan kejelasan hierarki angka di atas segalanya.',
        'Pemisahan tab Employee View dan Management Oversight menjaga antarmuka tetap relevan bagi masing-masing peran.',
      ],
    },
  },

  {
    slug: 'visensa',
    title: 'Visensa',
    tagline: 'Platform rehabilitasi tangan pasca-stroke dan terapi nyeri phantom limb berbasis AI Mirror Therapy langsung di browser tanpa perangkat tambahan.',
    kind: 'UI/UX & Web App',
    year: '2025',
    category: 'Lomba',
    badge: 'Finalis 5 Besar · Univ. AMIKOM',
    color: '#0d9488',
    burst: '#c5e827',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project Univ. AMIKOM',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (Finalis 5 Besar)',
      platform: 'Web App (Browser AI & Dashboard)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'Design Thinking', 'AI Healthcare UX', 'Data Visualization', 'Prototyping'],
    },
    context: {
      summary:
        'Visensa adalah proyek tim lomba UI/UX di Universitas AMIKOM yang berhasil meraih predikat Finalis 5 Besar. Visensa menghadirkan terapi cermin (Mirror Therapy) berbasis browser untuk penderita phantom limb pain dan pasien rehabilitasi tangan pasca-stroke. Dengan memanfaatkan pelacakan kamera AI terhadap 21 titik sendi tangan (21 hand joints), pasien dapat berlatih terapi mandiri dari rumah tanpa membeli alat khusus maupun mengunduh aplikasi berat, sementara terapis dapat memantau progres pemulihan dari jarak jauh.',
      facts: [
        { k: 'Kompetisi', v: 'Lomba UI/UX Universitas AMIKOM (Finalis 5 Besar)' },
        { k: 'Jenis produk', v: 'Browser-based AI Mirror Therapy & Rehab Dashboard' },
        { k: 'Teknologi inti', v: '21-Joint AI Hand Tracking via Webcam' },
        { k: 'Pengguna', v: 'Pasien Rehabilitasi & Terapis Okupasi (Clinician)' },
      ],
      goals: [
        'Memungkinkan pasien menjalankan sesi Mirror Therapy langsung dari browser hanya dengan kamera laptop/perangkat.',
        'Memberikan panduan gerakan jari langkah demi langkah secara visual dan real-time selama sesi latihan.',
        'Menyediakan dashboard pemantauan progres nyeri (pain score trend) dan kepatuhan latihan bagi pasien serta terapis.',
      ],
      scope: [
        'Riset metode klinis Mirror Therapy dan hambatan rehabilitasi mandiri di rumah',
        'Perancangan landing page edukatif ("Your hand still knows how to move")',
        'Desain antarmuka sesi latihan kamera AI (Mirror Plane & 8 tahapan latihan jari)',
        'Desain Patient Dashboard dan Clinician Patient Monitoring Dashboard',
      ],
    },
    problem: {
      quote: 'Terapi rehabilitasi tangan di klinik membutuhkan biaya dan perjalanan rutin, sedangkan saat latihan sendiri di rumah aku tidak tahu apakah gerakan jariku sudah benar dan ada kemajuan.',
      whyItMatters:
        'Keberhasilan pemulihan motorik pasca-stroke dan penurunan nyeri phantom limb sangat bergantung pada pengulangan terapi harian yang konsisten, terarah, dan terpantau oleh terapis.',
      targetContext:
        'Pasien rehabilitasi tangan pasca-stroke atau amputasi yang berlatih di rumah, serta terapis okupasi yang memantau perkembangan banyak pasien.',
      user: {
        title: 'Masalah pasien & terapis',
        points: [
          'Alat terapi cermin konvensional kurang praktis dan tidak memberikan umpan balik apakah gerakan jari sudah tepat.',
          'Pasien kesulitan melihat progres penurunan tingkat nyeri (pain score) dari minggu ke minggu.',
          'Terapis tidak memiliki catatan objektif mengenai konsistensi latihan pasien di luar jadwal kunjungan klinik.',
        ],
      },
      business: {
        title: 'Tantangan desain AI Healthcare',
        points: [
          'Membangun kepercayaan pengguna sejak halaman izin kamera (Allow camera access) bahwa proses berlangsung aman di perangkat.',
          'Menampilkan visualisasi 21 titik sendi tangan dan cermin virtual tanpa mengalihkan fokus pasien dari instruksi gerakan.',
          'Menyajikan grafik tren nyeri dan log sesi yang mudah dipahami baik oleh pasien maupun dokter/terapis.',
        ],
      },
      hmw: 'Bagaimana kami menghadirkan terapi cermin berbasis AI yang dapat diakses langsung lewat browser, menuntun latihan jari dengan tenang, dan menghubungkan progres pasien ke terapis?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mempelajari protokol Mirror Therapy untuk rehabilitasi tangan dan kebutuhan pemantauan terapis okupasi.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan 3 pilar produk: akses instan tanpa alat (zero hardware), panduan sesi AI, dan pelacakan progres.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang layar Mirror Plane dengan indikator 21 sendi, daftar 8 latihan jari, serta dua mode dashboard.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun prototipe lengkap dari landing page, onboarding kamera, sesi terapi, hingga dashboard klinis.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Mengevaluasi kejelasan instruksi layar terapi dan keterbacaan grafik Pain Score Trend.' },
    ],
    research: {
      methods: [
        { title: 'Studi literatur Mirror Therapy', desc: 'Mempelajari urutan gerakan rehabilitasi tangan (finger extension, spread, wrist rotation, thumb opposition).' },
        { title: 'Pemetaan journey pasien & klinisi', desc: 'Menghubungkan aktivitas latihan harian pasien di rumah dengan evaluasi mingguan oleh terapis.' },
        { title: 'Eksplorasi UX izin kamera & pencahayaan', desc: 'Merancang panduan posisi tangan dan peringatan pencahayaan ruangan saat kamera aktif.' },
      ],
      insights: [
        { title: 'Tanpa instalasi menurunkan hambatan mulai', desc: 'Pendekatan berbasis browser membuat pasien dapat langsung berlatih tanpa kendala teknis instalasi.' },
        { title: 'Umpan balik pencahayaan & posisi sangat krusial', desc: 'Banner halus seperti "Try moving to a brighter spot" membantu AI melacak sendi tangan dengan akurat.' },
        { title: 'Catatan terapis memotivasi pasien', desc: 'Menampilkan ulasan terapis (mis. Dr. Sarah K.) di dashboard pasien meningkatkan kepatuhan latihan.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Tenang, klinis, dan membangkitkan harapan', desc: 'Palet teal medis, putih bersih, dan aksen lime memberikan nuansa terapi yang menenangkan sekaligus modern.' },
        { title: 'Fokus penuh saat sesi terapi', desc: 'Layar kamera menggunakan mode gelap dengan teks instruksi besar di bawah Mirror Plane agar mata pasien tidak lelah.' },
        { title: 'Data pemulihan yang transparan', desc: 'Skor nyeri (pain rating), jumlah sesi, dan persentase kepatuhan dirangkum dalam kartu metrik yang jelas.' },
      ],
      process: [
        { title: 'Perancangan Alur Terapi & Monitoring', desc: 'Menyusun alur: Landing Page → Izin Kamera → Sesi Mirror Therapy → Patient Dashboard → Clinician View.' },
        { title: 'Wireframing Layar Kamera & Dashboard', desc: 'Menentukan tata letak panel daftar gerakan di kanan layar kamera dan grafik tren di dashboard.' },
        { title: 'Desain Visual High-Fidelity', desc: 'Merancang ilustrasi 21 titik sendi tangan, kartu progres mingguan, dan tabel rincian latihan.' },
        { title: 'Penyusunan Presentasi Lomba AMIKOM', desc: 'Mendemonstrasikan prototipe interaktif di hadapan dewan juri hingga meraih Finalis 5 Besar.' },
      ],
      decisions: [
        { title: 'Modal edukatif "Allow camera access to begin"', why: 'Menjelaskan dengan ramah cara mengizinkan kamera browser sebelum masuk ke sesi pelacakan AI.' },
        { title: 'Split Mirror Plane dengan checklist 8 gerakan di sisi kanan', why: 'Pasien dapat melihat pantulan tangan virtual sekaligus urutan latihan yang sedang dijalankan.' },
        { title: 'Dashboard terpisah untuk Pasien dan Clinician', why: 'Pasien fokus pada target latihan harian, sementara terapis fokus pada analisis tren nyeri dan rincian repetisi.' },
      ],
      persona: {
        name: 'Kenji Morales, 34',
        role: 'Pasien rehabilitasi motorik tangan minggu ke-4',
        age: '34 tahun',
        occupation: 'Pekerja lepas dalam masa pemulihan',
        location: 'Latihan mandiri dari rumah',
        quote: 'Aku ingin tahu apakah latihan gerakan jariku setiap hari benar-benar menurunkan rasa nyeri dan bisa dipantau oleh terapisku.',
        goals: [
          'Menjalankan 8 rangkaian gerakan terapi tangan dengan panduan yang jelas dari rumah',
          'Melihat penurunan tingkat nyeri (pain score) dan persentase kepatuhan latihan mingguan',
          'Mendapatkan evaluasi berkala dari terapis okupasi tanpa harus selalu datang ke klinik',
        ],
        pains: [
          'Bingung menentukan durasi dan urutan gerakan jari saat berlatih sendiri',
          'Sulit mengingat perkembangan rasa nyeri dari sesi ke sesi jika tidak tercatat otomatis',
          'Khawatir kamera tidak mengenali gerakan tangan dengan baik',
        ],
      },
      features: [
        'Landing Page edukatif "Your hand still knows how to move" dengan penjelasan AI 21-hand joints',
        'Onboarding izin kamera ramah pengguna & panduan kesiapan lingkungan sebelum sesi dimulai',
        'Layar Sesi AI Mirror Therapy real-time dengan Mirror Plane, timer, dan daftar 8 latihan jari',
        'Patient Dashboard dengan metrik Pain Rating, Adherence 93%, grafik Pain Trend, & riwayat sesi',
        'Clinician Patient Monitoring Dashboard lengkap dengan Exercise Breakdown & catatan Occupational Therapist',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Pasien & Terapis', caption: 'Alur dari memulai sesi latihan kamera di browser hingga hasil sesi masuk ke dashboard terapis.' },
      { title: 'Information Architecture', caption: 'Struktur halaman Landing Page, Camera Session, Patient Dashboard, dan Clinician Monitoring.' },
      { title: 'Sketsa Antarmuka Mirror Plane', caption: 'Eksplorasi tata letak kerangka 21 sendi tangan, timer, dan instruksi gerakan.' },
      { title: 'Wireframe', caption: 'Kerangka layar terapi kamera dan tata letak grafik perkembangan pasien.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Healthcare', caption: 'Komponen kartu metrik klinis, grafik tren nyeri, indikator status latihan, dan tipografi bersih.' },
      { title: 'UI Final — Visensa', caption: 'Tampilan lengkap Landing Page, AI Mirror Therapy Camera Session, Patient Dashboard, dan Clinician Monitoring.', isFeatured: true },
      { title: 'Prototype Interaktif Finalis 5 Besar', caption: 'Prototipe fungsional yang dipresentasikan pada babak final Lomba UI/UX Universitas AMIKOM.' },
    ],
    deliverables: [
      { title: 'Landing Page Visensa', caption: 'Pengenalan teknologi AI Mirror Therapy berbasis browser tanpa perangkat tambahan.' },
      { title: 'Layar Sesi Kamera AI', caption: 'Visualisasi 21 titik sendi tangan, Mirror Plane, dan panduan 8 gerakan rehabilitasi.' },
      { title: 'UI Final — Visensa', caption: 'Desain antarmuka lengkap platform rehabilitasi tangan Visensa.' },
      { title: 'Dashboard Pasien & Klinisi', caption: 'Pemantauan skor nyeri, kepatuhan latihan, dan evaluasi terapis okupasi.' },
    ],
    palette: [
      { name: 'Medical Teal', hex: '#0D9488' },
      { name: 'Recovery Lime', hex: '#C5E827' },
      { name: 'Deep Slate', hex: '#0F172A' },
      { name: 'Clean Mint', hex: '#F0FDFA' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Merancang layar kamera AI yang tidak mengintimidasi pasien',
        problem: 'Teknologi pelacakan 21 sendi tangan berisiko terlihat terlalu teknis dan menegangkan bagi pasien yang sedang pemulihan.',
        action: 'Menggunakan instruksi kalimat yang lembut ("Slowly extend your fingers outward, then let them relax back"), indikator pencahayaan yang ramah, dan daftar latihan yang ringkas.',
      },
      {
        title: 'Menyajikan data medis yang bermakna bagi dua peran berbeda',
        problem: 'Pasien membutuhkan motivasi sederhana, sedangkan terapis membutuhkan rincian repetisi dan tren klinis.',
        action: 'Menyusun Patient Dashboard yang menonjolkan progres mingguan dan semangat latihan, serta Clinician View yang merinci Exercise Breakdown per jenis gerakan jari.',
      },
    ],
    impact: {
      headline: 'Finalis 5 Besar Lomba UI/UX Universitas AMIKOM untuk inovasi rehabilitasi AI Mirror Therapy.',
      highlights: [
        'Berhasil menembus babak Finalis 5 Besar tingkat nasional di Universitas AMIKOM',
        'Menghadirkan konsep terapi cermin berbasis browser tanpa perangkat keras tambahan (zero hardware)',
      ],
      metrics: [
        { value: 'Top 5', label: 'Finalis 5 Besar Univ. AMIKOM' },
        { value: '21', label: 'Titik sendi tangan terlacak AI' },
        { value: '8', label: 'Modul gerakan terapi terpandu' },
      ],
      reflections: [
        'Dalam desain kesehatan (healthtech), ketenangan visual dan kejelasan instruksi sama pentingnya dengan kecanggihan teknologi di baliknya.',
        'Menghubungkan pengalaman pasien di rumah dengan pantauan terapis menciptakan ekosistem pemulihan yang utuh.',
      ],
    },
  },

  {
    slug: 'akseskota',
    title: 'AksesKota',
    tagline: 'Platform direktori tempat ramah disabilitas dan navigasi rute aksesibel dengan skor aksesibilitas, kenyamanan, serta keamanan jalur.',
    kind: 'UI/UX Design',
    year: '2025',
    category: 'Lomba',
    badge: 'Juara Harapan 1 · Univ. Jember',
    color: '#2dd4bf',
    burst: '#134e4a',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Lomba Team Project Univ. Jember',
      duration: '4 minggu',
      team: 'Tim Lomba UI/UX (Juara Harapan 1)',
      platform: 'Web & Mobile App',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'Inclusive Design', 'GIS & Map UX', 'Design Thinking', 'Wireframing', 'Prototyping'],
    },
    context: {
      summary:
        'AksesKota adalah proyek tim lomba UI/UX di Universitas Jember yang meraih penghargaan Juara Harapan 1. Penyandang disabilitas, pengguna kursi roda, dan lansia sering kesulitan mengetahui apakah suatu tempat umum atau rute jalan memiliki fasilitas pendukung seperti ramp, guiding block, lift, dan toilet aksesibel. AksesKota memadukan direktori tempat berbasis peta (seperti Direktori Bogor) dengan navigasi rute langkah demi langkah yang dilengkapi skor aksesibilitas dan ulasan komunitas.',
      facts: [
        { k: 'Kompetisi', v: 'Lomba UI/UX Universitas Jember (Juara Harapan 1)' },
        { k: 'Jenis produk', v: 'Web & Mobile Accessible City Directory & Navigation' },
        { k: 'Fitur utama', v: 'Direktori Fasilitas, Skor Rute Aksesibel, & Ulasan Komunitas' },
        { k: 'Target pengguna', v: 'Penyandang disabilitas, pengguna kursi roda, & pendamping' },
      ],
      goals: [
        'Menyediakan direktori tempat publik (taman, pusat belanja, stasiun, rumah sakit) lengkap dengan daftar fasilitas aksesibilitas yang terverifikasi.',
        'Menghadirkan rekomendasi rute perjalanan dengan skor Aksesibilitas, Kenyamanan, dan Keamanan.',
        'Memberikan ruang bagi komunitas untuk menulis ulasan dan menandai fasilitas yang tersedia di lapangan.',
      ],
      scope: [
        'Riset kebutuhan mobilitas pengguna kursi roda dan penyandang disabilitas di ruang publik',
        'Perancangan antarmuka Web Map Direktori Kota & modal Tulis Ulasan fasilitas',
        'Perancangan antarmuka Mobile Navigasi Rute Aksesibel lengkap dengan langkah perjalanan',
        'Pembuatan prototipe interaktif dan materi presentasi final Universitas Jember',
      ],
    },
    problem: {
      quote: 'Peta biasa hanya menunjukkan rute tercepat, tapi tidak memberi tahu apakah di jalurnya ada tangga curam, trotoar rusak, atau ketersediaan ramp kursi roda.',
      whyItMatters:
        'Satu anak tangga tanpa ramp atau stasiun tanpa lift dapat menghentikan perjalanan pengguna kursi roda sepenuhnya. Informasi fasilitas sebelum berangkat memberikan kemandirian dan rasa aman.',
      targetContext:
        'Pengguna kursi roda, teman netra, lansia, dan keluarga pendamping yang ingin mengunjungi ruang publik atau menggunakan transportasi umum di kota.',
      user: {
        title: 'Masalah mobilitas di ruang kota',
        points: [
          'Tidak adanya informasi fasilitas (Ramp, Kursi Roda, Toilet Aksesibel, Guiding Block) pada aplikasi peta umum.',
          'Rute jalan kaki terpendek sering kali melewati jembatan penyeberangan bertangga atau trotoar tanpa ramp.',
          'Pengalaman aksesibilitas suatu tempat hanya diketahui dari mulut ke mulut, belum terdokumentasi rapi.',
        ],
      },
      business: {
        title: 'Tantangan desain inklusif & pemetaan',
        points: [
          'Menyajikan informasi detail fasilitas di atas peta interaktif tanpa membuat antarmuka terasa semrawut.',
          'Merumuskan indikator alasan rekomendasi rute (mis. "Tidak ada tangga", "Ramp tersedia di 3 titik", "68% jalur teduh") yang mudah dipindai.',
          'Membuat formulir Tulis Ulasan yang praktis dengan pilihan tag fasilitas siap klik.',
        ],
      },
      hmw: 'Bagaimana kami membantu penyandang disabilitas merencanakan perjalanan di kota dengan kepastian fasilitas tempat dan rute yang benar-benar ramah dilalui?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami hambatan nyata pengguna kursi roda dan teman netra saat bernavigasi di fasilitas publik kota.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menetapkan kebutuhan utama: transparansi fasilitas tempat, skor aksesibilitas rute, dan kontribusi ulasan.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang konsep Direktori Kota berpeta, kartu "Mengapa Direkomendasikan?", dan panduan langkah perjalanan.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun UI Web & Mobile bernuansa teal-mint dengan kontras keterbacaan tinggi.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji alur pencarian tempat, pemilihan 3 rute alternatif, dan pengiriman ulasan aksesibilitas.' },
    ],
    research: {
      methods: [
        { title: 'Riset kebutuhan mobilitas inklusif', desc: 'Mengidentifikasi elemen fasilitas paling krusial: ramp, lift, guiding block, toilet aksesibel, dan tempat duduk.' },
        { title: 'Audit aplikasi navigasi populer', desc: 'Menganalisis celah informasi aksesibilitas pada peta navigasi konvensional.' },
        { title: 'Eksplorasi sistem skor rute', desc: 'Merancang pembobotan indikator Aksesibilitas, Kenyamanan, dan Keamanan pada setiap opsi rute.' },
      ],
      insights: [
        { title: 'Alasan rute lebih penting dari sekadar jarak', desc: 'Keterangan seperti "Tidak ada tangga" dan "Ramp tersedia di 3 titik" jauh lebih meyakinkan daripada selisih waktu 2 menit.' },
        { title: 'Detail fasilitas di setiap langkah transit', desc: 'Menampilkan info fasilitas di tiap titik pemberhentian (halte, persimpangan, koridor) membantu pengguna bersiap.' },
        { title: 'Tag fasilitas mempercepat ulasan komunitas', desc: 'Pilihan chip fasilitas (Ramp, Lift, Kursi Roda, Toilet Aksesibel, Jalur Guiding) memudahkan warga berbagi info akurat.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Kejelasan informasi di setiap titik', desc: 'Setiap tempat dan langkah perjalanan menampilkan badge fasilitas yang konkret dan mudah dikenali.' },
        { title: 'Kontras tinggi & ramah baca', desc: 'Warna deep teal di atas latar terang memastikan keterbacaan optimal di bawah sinar matahari saat di perjalanan.' },
        { title: 'Berbasis gotong royong komunitas', desc: 'Fitur Tulis Ulasan dan tombol Lapor menjaga data aksesibilitas kota tetap hidup dan mutakhir.' },
      ],
      process: [
        { title: 'Pemetaan Alur Direktori & Navigasi', desc: 'Menyusun alur eksplorasi tempat (Taman, Belanja, Transportasi) hingga memulai navigasi rute.' },
        { title: 'Wireframing Web & Mobile', desc: 'Merancang tata letak panel kiri-kanan di versi web dan bottom sheet bertingkat di versi mobile.' },
        { title: 'Visual Design & Komponen Aksesibilitas', desc: 'Membuat sistem badge fasilitas, bar skor tiga dimensi, dan timeline langkah perjalanan.' },
        { title: 'Finalisasi & Presentasi Univ. Jember', desc: 'Menyajikan solusi di hadapan juri dan berhasil meraih penghargaan Juara Harapan 1.' },
      ],
      decisions: [
        { title: 'Kotak highlight "Mengapa Direkomendasikan?"', why: 'Langsung menjawab kekhawatiran utama pengguna (tidak ada tangga, jumlah ramp, persentase jalur teduh).' },
        { title: 'Tiga bar indikator: Aksesibilitas, Kenyamanan, Keamanan', why: 'Memberikan gambaran kualitas rute secara menyeluruh sebelum pengguna menekan tombol Mulai Navigasi.' },
        { title: 'Modal Tulis Ulasan dengan chip fasilitas interaktif', why: 'Memudahkan kontributor menandai fasilitas yang ada di tempat tersebut hanya dengan beberapa ketukan.' },
      ],
      persona: {
        name: 'Rina, 23',
        role: 'Mahasiswa pengguna kursi roda yang aktif bermobilitas',
        age: '23 tahun',
        occupation: 'Mahasiswa',
        location: 'Bogor & Semarang',
        quote: 'Sebelum pergi ke tempat baru, aku selalu harus memastikan dulu apakah ada ramp, lift yang aktif, dan toilet aksesibel.',
        goals: [
          'Mencari taman, pusat belanja, dan stasiun yang ramah kursi roda beserta detail fasilitasnya',
          'Memilih rute perjalanan yang bebas tangga dan memiliki ramp di setiap persimpangan',
          'Membagikan ulasan pengalaman aksesibilitas untuk membantu sesama pengguna',
        ],
        pains: [
          'Sering terjebak di jalur trotoar yang berujung tangga tanpa ramp',
          'Informasi aksesibilitas gedung di internet sangat minim dan tidak terstruktur',
          'Sulit memperkirakan apakah jalur menuju halte cukup aman dan teduh',
        ],
      },
      features: [
        'Direktori Kota Berbasis Peta (Taman, Belanja, Transportasi) dengan badge fasilitas aksesibilitas lengkap',
        'Panel Detail Tempat dengan ulasan komunitas, jam buka, dan rincian fasilitas terverifikasi',
        'Modal Tulis Ulasan dengan pemilihan chip fasilitas (Ramp, Lift, Kursi Roda, Toilet Aksesibel, Guiding Block)',
        'Layar Perbandingan 3 Rute Alternatif & Detail Rute dengan skor Aksesibilitas, Kenyamanan, dan Keamanan',
        'Kartu "Mengapa Direkomendasikan?" & panduan Langkah Perjalanan 1–5 menuju tujuan',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow Pencarian & Navigasi', caption: 'Alur dari mencari tempat ramah disabilitas, membandingkan rute alternatif, hingga memulai navigasi.' },
      { title: 'Information Architecture', caption: 'Struktur fitur Direktori Tempat, Detail Fasilitas, Navigasi Rute, dan Ulasan Komunitas.' },
      { title: 'Sketsa Antarmuka Peta & Rute', caption: 'Eksplorasi penempatan kartu tempat, rute garis biru di peta, dan bottom sheet detail rute.' },
      { title: 'Wireframe Web & Mobile', caption: 'Kerangka layar desktop direktori kota dan layar mobile navigasi langkah demi langkah.' },
    ],
    deliverablesFinal: [
      { title: 'Design System Inklusif', caption: 'Komponen chip fasilitas, bar skor aksesibilitas, penanda langkah rute berwarna, dan kartu tempat.' },
      { title: 'UI Final — AksesKota', caption: 'Tampilan lengkap Web Direktori Bogor, Modal Tulis Ulasan, dan Mobile Navigasi Rute Aksesibel.', isFeatured: true },
      { title: 'Prototype Juara Harapan 1', caption: 'Prototipe interaktif lintas perangkat yang menghantarkan tim meraih Juara Harapan 1 di Universitas Jember.' },
    ],
    deliverables: [
      { title: 'Web Direktori Fasilitas Kota', caption: 'Peta interaktif tempat ramah disabilitas lengkap dengan filter kategori dan ulasan.' },
      { title: 'Mobile Navigasi Rute Aksesibel', caption: 'Rekomendasi rute dengan skor aksesibilitas dan langkah perjalanan terperinci.' },
      { title: 'UI Final — AksesKota', caption: 'Desain antarmuka lengkap platform AksesKota di desktop dan mobile.' },
      { title: 'Fitur Ulasan & Tag Fasilitas', caption: 'Formulir kontribusi komunitas untuk memverifikasi ketersediaan ramp, lift, dan guiding block.' },
    ],
    palette: [
      { name: 'Deep Teal', hex: '#134E4A' },
      { name: 'Accessible Mint', hex: '#2DD4BF' },
      { name: 'Step Amber', hex: '#F59E0B' },
      { name: 'Clean Surface', hex: '#F8FAFC' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menyajikan kepadatan informasi peta tanpa membingungkan',
        problem: 'Menampilkan peta, daftar tempat, detail fasilitas, dan ulasan sekaligus berisiko memenuhi layar.',
        action: 'Menerapkan tata letak panel mengambang yang bersih di atas peta untuk versi web, serta bottom sheet terfokus untuk navigasi mobile.',
      },
      {
        title: 'Menerjemahkan data aksesibilitas menjadi keputusan cepat',
        problem: 'Pengguna yang sedang di jalan membutuhkan kesimpulan cepat apakah suatu rute aman dilalui atau tidak.',
        action: 'Merangkum data teknis menjadi skor 0–100 (Aksesibilitas 88, Kenyamanan 72, Keamanan 81) disertai 3 poin alasan utama dalam kotak hijau lembut.',
      },
    ],
    impact: {
      headline: 'Juara Harapan 1 Lomba UI/UX Universitas Jember untuk solusi navigasi kota inklusif.',
      highlights: [
        'Meraih penghargaan Juara Harapan 1 pada kompetisi UI/UX tingkat nasional di Universitas Jember',
        'Mengintegrasikan direktori fasilitas ramah disabilitas dengan navigasi rute berbasis skor aksesibilitas',
      ],
      metrics: [
        { value: 'Harapan 1', label: 'Penghargaan Univ. Jember' },
        { value: '3', label: 'Indikator skor rute utama' },
        { value: '6+', label: 'Kategori fasilitas aksesibilitas' },
      ],
      reflections: [
        'Desain inklusif mengajarkan bahwa detail kecil pada informasi ruang publik memiliki dampak besar bagi kemandirian seseorang.',
        'Kombinasi tampilan web untuk perencanaan di rumah dan aplikasi mobile untuk navigasi di jalan menjawab kebutuhan pengguna secara utuh.',
      ],
    },
  },

  {
    slug: 'project-pkl',
    title: 'Project PKL',
    tagline: 'Rangkaian proyek tim Praktik Kerja Lapangan (PKL) SMK: perancangan aplikasi sosial mobile, platform psikotes online, dashboard analitik, dan sistem approval budget.',
    kind: 'UI/UX & Front-End',
    year: '2023',
    category: 'PKL',
    badge: 'Team Project PKL SMK',
    color: '#2563eb',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer & Front-End Intern',
      contextLabel: 'Team Project PKL SMK',
      duration: 'Masa PKL SMK',
      team: 'Tim Proyek PKL SMK',
      platform: 'Web & Mobile Apps',
      tools: ['Fg', 'HT', 'CS', 'JS', 'Re'],
      methodPills: ['Figma', 'UI/UX Design', 'Wireframing', 'Design Handoff', 'Dashboard UI', 'Team Collaboration'],
    },
    context: {
      summary:
        'Selama menjalani Praktik Kerja Lapangan (PKL) semasa SMK, aku tergabung dalam tim desain dan pengembang untuk mengerjakan empat lini produk digital nyata di ruang kerja Figma. Proyek tersebut meliputi: (1) perancangan aplikasi mobile sosial & pertemanan lengkap dari registrasi, peta lokasi, hingga ruang obrolan dan panggilan, (2) platform ujian & psikotes daring (Psikotes, Tree Tes, Wartegg Tes, Skolastik, Logika, dan TIU), (3) dashboard visualisasi grafik analitik, serta (4) sistem Enterprise Budget & Accounting Approval (WorkPlan / Approval BP).',
      facts: [
        { k: 'Konteks', v: 'Team Project Praktik Kerja Lapangan (PKL) SMK' },
        { k: 'Cakupan proyek', v: '4 Workspace Produk (Mobile & Web Enterprise)' },
        { k: 'Peran', v: 'UI/UX Designer & Front-End Intern' },
        { k: 'Kolaborasi', v: 'Tim Desain & Developer di Figma' },
      ],
      goals: [
        'Merancang alur layar yang lengkap dan terstruktur di Figma sehingga siap diserahkan (handoff) ke tim developer.',
        'Menyusun arsitektur modul ujian psikotes daring yang jelas per kategori tes.',
        'Membangun antarmuka tabel pengajuan dan persetujuan anggaran (Approval BP) lintas departemen dan C-Level.',
      ],
      scope: [
        'Pemetaan user flow & pengelompokan frame layar per modul di Figma',
        'Perancangan UI aplikasi mobile sosial (onboarding, profil, map, chat, call)',
        'Perancangan alur platform psikotes daring (Tree Tes, Wartegg, Skolastik, Logika, TIU)',
        'Perancangan wireframe & UI sistem Enterprise Budget Approval serta dashboard grafik',
      ],
    },
    problem: {
      quote: 'Dalam proyek nyata dengan puluhan layar dan modul yang berbeda, tanpa struktur frame dan alur yang rapi di Figma, tim developer akan kesulitan menerjemahkan desain ke kode.',
      whyItMatters:
        'Proyek skala tim saat PKL menuntut kerapian organisasi file Figma, konsistensi komponen, serta pemahaman atas alur bisnis yang kompleks seperti alur persetujuan anggaran bertingkat.',
      targetContext:
        'Tim pengembang internal, peserta psikotes daring, staf akuntansi/departemen perusahaan, serta pengguna aplikasi mobile.',
      user: {
        title: 'Tantangan pengguna di tiap produk',
        points: [
          'Peserta psikotes daring membutuhkan instruksi dan navigasi nomor soal yang jelas untuk tiap jenis tes (Wartegg, Tree, Logika, TIU).',
          'Staf keuangan dan manajer departemen membutuhkan kejelasan status pengajuan budget (Entry BP, Verify by Accounting, Approval C-Level).',
          'Pengguna aplikasi sosial mobile membutuhkan perpindahan yang mulus antara pencarian teman, profil, chat, dan panggilan.',
        ],
      },
      business: {
        title: 'Tantangan kerja tim saat PKL',
        points: [
          'Mengelola ratusan layar di beberapa workspace Figma bersama anggota tim tanpa tumpang tindih.',
          'Menyesuaikan revisi cepat dari mentor/klien (seperti restrukturisasi alur modul psikotes).',
          'Memastikan setiap state layar (tabel, grafik, form input, dan approval) terdokumentasi lengkap untuk handoff.',
        ],
      },
      hmw: 'Bagaimana kami mengorganisasi dan merancang antarmuka untuk berbagai kebutuhan produk—mulai dari aplikasi konsumen hingga sistem enterprise—secara rapi dan siap dikembangkan?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mempelajari brief bisnis dari mentor PKL untuk keempat produk: aplikasi sosial, psikotes, analitik, dan budget approval.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Memetakan daftar layar wajib dan alur persetujuan/navigasi pada masing-masing workspace.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Menyusun pohon arsitektur halaman (seperti cabang modul Psikotes dan alur bertingkat Approval BP).' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Mengerjakan desain layar secara kolaboratif di Figma dan merapikan komponen berulang.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Melakukan review desain bersama mentor dan tim developer untuk menyempurnakan alur revisi.' },
    ],
    research: {
      methods: [
        { title: 'Diskusi brief & alur bisnis', desc: 'Membedah kebutuhan tiap modul bersama mentor dan rekan tim PKL.' },
        { title: 'Pemetaan pohon halaman di Figma', desc: 'Mengelompokkan frame berdasarkan alur modul agar mudah ditelusuri saat sesi review.' },
        { title: 'Studi referensi UI dashboard & mobile', desc: 'Mempelajari pola tabel enterprise, grafik multi-seri, dan navigasi aplikasi sosial.' },
      ],
      insights: [
        { title: 'Organisasi kanvas Figma adalah kunci kolaborasi', desc: 'Menyusun frame secara berurutan per sub-modul (mis. kolom per jenis tes psikotes) mempercepat review tim.' },
        { title: 'Konsistensi template mempercepat pengerjaan', desc: 'Penggunaan template tabel dan kartu yang seragam sangat membantu saat merancang puluhan layar budget.' },
        { title: 'Komunikasi rutin dengan developer', desc: 'Menyama-ratakan istilah komponen sejak di Figma meminimalkan revisi saat tahap coding.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Terstruktur per alur modul', desc: 'Setiap workspace Figma ditata membentuk diagram alur visual yang jelas dari halaman utama ke sub-fitur.' },
        { title: 'Komponen yang siap dipakai ulang', desc: 'Tabel, form input, kartu grafik, dan navigasi dirancang modular agar efisien.' },
        { title: 'Adaptif terhadap jenis produk', desc: 'Gaya visual ekspresif untuk aplikasi sosial mobile, dan gaya bersih-fungsional untuk sistem psikotes serta akuntansi.' },
      ],
      process: [
        { title: 'Pembagian Modul Tim', desc: 'Membagi tanggung jawab layar dan menyepakati standar komponen di Figma.' },
        { title: 'Eksplorasi & Penyusunan Alur', desc: 'Merancang alur aplikasi sosial, pohon modul psikotes, dan alur approval budget.' },
        { title: 'Iterasi & Revisi Mentor', desc: 'Menindaklanjuti masukan struktur halaman dan kelengkapan state layar.' },
        { title: 'Handoff ke Pengembang', desc: 'Menyiapkan spesifikasi desain dan berpartisipasi dalam implementasi antarmuka.' },
      ],
      decisions: [
        { title: 'Pengelompokan pohon vertikal pada platform Psikotes', why: 'Memudahkan tim melihat urutan layar dari Halaman Utama ke 6 cabang jenis tes (Psikotes, Tree, Wartegg, Skolastik, Logika, TIU).' },
        { title: 'Standarisasi layout tabel pada sistem Approval BP', why: 'Menjaga konsistensi tampilan antara halaman Entry BP, Verify Accounting, dan Approval C-Level.' },
        { title: 'Grid komparasi pada dashboard grafik analitik', why: 'Memudahkan pemantauan tren metrik berdampingan dalam satu kanvas.' },
      ],
      persona: {
        name: 'Tim Produk & Operasional Internal',
        role: 'Pengguna sistem internal & tim pengembang tempat PKL',
        age: '20–35 tahun',
        occupation: 'Staf Operasional & Developer',
        location: 'Perusahaan mitra PKL SMK',
        quote: 'Kami membutuhkan rancangan layar yang lengkap di setiap langkahnya agar proses pengembangan sistem tidak terhambat.',
        goals: [
          'Memiliki alur layar yang jelas dari awal hingga akhir untuk setiap modul produk',
          'Menggunakan komponen tabel, grafik, dan formulir yang konsisten di seluruh sistem',
          'Mempercepat proses revisi dan handoff dari tim desain ke tim front-end',
        ],
        pains: [
          'Layar yang tidak terkelompokkan rapi di Figma menyulitkan pelacakan alur',
          'Perbedaan format tabel antarhalaman menghambat pembuatan komponen kode',
          'Alur approval bertingkat sering membingungkan jika tidak divisualisasikan secara berurutan',
        ],
      },
      features: [
        'Workspace Aplikasi Mobile Sosial: alur registrasi, profil, pencarian peta, friendlist, chat, dan panggilan',
        'Workspace Platform Psikotes Online: struktur 6 cabang tes (Psikotes, Tree Tes, Wartegg, Skolastik, Logika, TIU)',
        'Workspace Dashboard Grafik Analitik: komparasi multi-chart untuk pemantauan tren berkala',
        'Workspace Enterprise Budget & Accounting Approval: alur Entry BP, Verify Accounting, hingga Approval C-Level',
        'Pengorganisasian sistem layer dan komponen kolaboratif di Figma untuk kelancaran handoff tim',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow & Pohon Modul', caption: 'Pemetaan alur layar untuk keempat proyek di dalam kanvas kolaborasi Figma.' },
      { title: 'Information Architecture', caption: 'Struktur cabang modul ujian psikotes dan tahapan persetujuan anggaran perusahaan.' },
      { title: 'Wireframe Sistem Enterprise', caption: 'Kerangka tabel budget (Overhead, Operational, Marketing, Employee Cost) dan alur approval.' },
      { title: 'Eksplorasi Antarmuka Mobile', caption: 'Rancangan layar aplikasi sosial dari onboarding hingga fitur komunikasi.' },
    ],
    deliverablesFinal: [
      { title: 'Pustaka Komponen Tim', caption: 'Komponen tabel data, grafik analitik, kartu profil mobile, dan modul soal ujian.' },
      { title: 'UI Final — 4 Workspace Project PKL', caption: 'Dokumentasi keempat workspace Figma yang dikerjakan bersama tim selama masa PKL SMK.', isFeatured: true },
      { title: 'Design Handoff & Kolaborasi', caption: 'Spesifikasi desain siap kode beserta alur Flows untuk tim developer.' },
    ],
    deliverables: [
      { title: 'Mobile Social App Workspace', caption: 'Rancangan lengkap alur aplikasi pertemanan dan komunikasi mobile.' },
      { title: 'Online Psychotest Architecture', caption: 'Pemetaan layar untuk 6 kategori ujian psikotes dan skolastik daring.' },
      { title: 'UI Final — Project PKL', caption: 'Kumpulan 4 workspace proyek nyata selama Praktik Kerja Lapangan SMK.' },
      { title: 'Budget Approval & Analytics UI', caption: 'Rancangan sistem persetujuan anggaran perusahaan dan dashboard grafik.' },
    ],
    palette: [
      { name: 'Enterprise Blue', hex: '#2563EB' },
      { name: 'Analytics Green', hex: '#10B981' },
      { name: 'Canvas Dark', hex: '#1E293B' },
      { name: 'Surface Light', hex: '#F1F5F9' },
    ],
    type: { display: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Beradaptasi dengan ritme kerja tim industri sejak bangku SMK',
        problem: 'Mengerjakan berbagai jenis produk sekaligus dengan standar industri menuntut kecepatan belajar dan kerapian kerja.',
        action: 'Menyusun struktur penamaan layer dan pengelompokan frame yang disiplin di Figma serta aktif berdiskusi saat sesi review.',
      },
      {
        title: 'Memetakan alur sistem yang memiliki banyak cabang',
        problem: 'Modul psikotes dan sistem approval budget memiliki banyak kondisi serta peran pengguna yang berbeda.',
        action: 'Menata frame di kanvas Figma menyerupai flowchart terstruktur sehingga seluruh tim dapat membaca urutan layar dengan mudah.',
      },
    ],
    impact: {
      headline: 'Team project Praktik Kerja Lapangan (PKL) SMK lintas 4 produk mobile & web enterprise.',
      highlights: [
        'Menyelesaikan perancangan 4 workspace produk nyata bersama tim selama masa PKL SMK',
        'Membangun fondasi kolaborasi desain–developer dan kerapian sistem kerja di Figma',
      ],
      metrics: [
        { value: '4', label: 'Workspace produk dikerjakan' },
        { value: '6', label: 'Cabang modul psikotes terpetakan' },
        { value: '50+', label: 'Layar mobile & web dirancang' },
      ],
      reflections: [
        'Pengalaman PKL di SMK mengajarkan bahwa desain yang baik bukan hanya indah per layar, tetapi juga rapi secara alur sistem dan mudah dibangun oleh developer.',
        'Kerja sama tim yang terbuka membuat proses revisi menjadi ruang belajar yang sangat berharga.',
      ],
    },
  },

  {
    slug: 'aksaralensa',
    title: 'AksaraLensa',
    tagline: 'Aplikasi pembelajaran dan pemindaian Aksara Jawa berbasis Computer Vision yang membuat budaya lokal kembali relevan bagi generasi muda.',
    kind: 'UI/UX Design',
    year: '2025',
    category: 'Klien',
    badge: 'Team Project Computer Vision · 2025',
    color: '#98a60a',
    burst: '#4a3219',
    meta: {
      role: 'UI/UX Designer',
      contextLabel: 'Team Project Computer Vision',
      duration: '1 semester',
      team: 'Tim Proyek Mata Kuliah Computer Vision',
      platform: 'Mobile App (Android & iOS)',
      tools: ['Fg', 'Ai'],
      methodPills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Thinking', 'Mobile App', 'Computer Vision UX'],
    },
    context: {
      summary:
        'AksaraLensa adalah proyek tim mata kuliah Computer Vision yang menggabungkan pengenalan citra kamera (Lensa Aksara) dengan modul belajar bertahap dan latihan menulis di kanvas interaktif. Melalui pendekatan "Dari bentuk, jadi bunyi, jadi mengerti", aplikasi ini dirancang untuk membantu pelajar dan generasi muda mengenali, menulis, serta memahami Aksara Jawa lewat pengalaman belajar yang hangat dan menyenangkan.',
      facts: [
        { k: 'Konteks', v: 'Team Project Computer Vision' },
        { k: 'Jenis produk', v: 'Aplikasi Mobile Edukasi & Kamera AI' },
        { k: 'Target pengguna', v: 'Pelajar, mahasiswa, & generasi muda' },
        { k: 'Fitur inti', v: 'Lensa Aksara, Modul Bab, & Kanvas Tulis' },
      ],
      goals: [
        'Memudahkan pengguna mengenali dan menerjemahkan tulisan Aksara Jawa lewat kamera (Lensa Aksara) secara instan.',
        'Menyusun kurikulum belajar bertahap (Aksara Nglegena, Sandhangan Swara, Panyigeg & Pangkon) yang mudah diikuti.',
        'Menghadirkan latihan menulis aksara langsung di kanvas layar ("Giliran tanganmu bercerita") dengan panduan interaktif.',
      ],
      scope: [
        'Riset pengalaman belajar aksara tradisional & pemetaan user flow',
        'Perancangan karakter maskot blangkon, ilustrasi, dan sistem visual',
        'Desain UI untuk onboarding, modul bab, kanvas latihan tulis, Lensa Aksara, dan profil progres',
        'Pembuatan prototipe interaktif berfidelitas tinggi di Figma',
      ],
    },
    problem: {
      quote: 'Aksara Jawa makin jarang dipakai, sehingga generasi muda sulit membaca dan memahaminya sementara media belajarnya terasa kaku.',
      whyItMatters:
        'Tanpa media belajar yang dekat dengan kebiasaan digital generasi muda, Aksara Jawa hanya dianggap materi hafalan sekolah yang sulit dan cepat dilupakan.',
      targetContext:
        'Pelajar, mahasiswa, dan generasi muda yang ingin mempelajari kembali atau menerjemahkan Aksara Jawa melalui smartphone mereka.',
      user: {
        title: 'Masalah yang dialami pengguna',
        points: [
          'Materi belajar Aksara Jawa umumnya berupa tabel buku statis yang kaku dan sulit dihafal.',
          'Sulit mengidentifikasi bunyi dan arti per suku kata ketika menemukan tulisan Aksara Jawa di ruang publik atau naskah.',
          'Kurangnya media latihan motorik untuk menggambar/menulis lekukan bentuk aksara secara langsung di ponsel.',
        ],
      },
      business: {
        title: 'Tantangan teknis & desain',
        points: [
          'Menyajikan hasil deteksi Computer Vision per suku kata (seperti pemenggalan "bapak tindak pasar") tanpa membuat layar kamera terasa penuh.',
          'Menjaga keseimbangan antara nuansa budaya Jawa dan antarmuka modern yang akrab bagi anak muda.',
          'Merancang kanvas latihan tulis yang nyaman digunakan dengan jari di layar smartphone.',
        ],
      },
      hmw: 'Bagaimana kami membantu generasi muda membaca, menulis, dan memahami Aksara Jawa lewat pengalaman kamera AI dan latihan interaktif yang menyenangkan?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Memahami kesulitan pelajar saat membaca, menghafal, dan menulis Aksara Jawa.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Merumuskan masalah utama: butuhnya jembatan antara pengenalan kamera, latihan tulis, dan modul bertahap.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Mengembangkan konsep Lensa Aksara dengan rincian suku kata, kanvas tulis interaktif, dan maskot pendamping.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Merancang wireframe, design system bernuansa organik, ilustrasi maskot, hingga UI high-fidelity.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji kejelasan alur pemindaian kamera dan keterbacaan kartu suku kata bersama pengguna.' },
    ],
    research: {
      methods: [
        { title: 'Survei pelajar & mahasiswa', desc: 'Menggali kesulitan utama saat mempelajari Aksara Jawa di sekolah maupun secara mandiri.' },
        { title: 'Studi aplikasi belajar bahasa', desc: 'Mempelajari pola progres per bab, gamifikasi ringan, dan latihan goresan karakter.' },
        { title: 'Eksplorasi alur kamera CV', desc: 'Merancang cara kerja pemindaian kamera hingga menampilkan rincian transliterasi per suku kata.' },
      ],
      insights: [
        { title: 'Belajar dari bentuk ke bunyi', desc: 'Pengguna lebih cepat paham saat bentuk aksara langsung dihubungkan dengan bunyi dan arti katanya.' },
        { title: 'Latihan tulis memperkuat ingatan', desc: 'Menggoreskan aksara secara langsung di kanvas membuat bentuk karakter jauh lebih mudah diingat.' },
        { title: 'Maskot ramah menurunkan kejenuhan', desc: 'Kehadiran karakter maskot berblangkon membuat materi budaya terasa hangat dan bersahabat.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Dari bentuk, jadi bunyi, jadi mengerti', desc: 'Setiap aksara disajikan dengan visual bentuk, pelafalan audio, dan pemenggalan suku kata.' },
        { title: 'Hangat & berakar budaya', desc: 'Palet cokelat tanah, hijau daun, dan krem hangat berpadu dengan ilustrasi maskot blangkon.' },
        { title: 'Belajar bertahap & terukur', desc: 'Materi dibagi ke dalam bab ringkas (Aksara Nglegena, Sandhangan Swara, Panyigeg) dengan indikator progres.' },
      ],
      process: [
        { title: 'Empathize & Define', desc: 'Merumuskan masalah utama pembelajaran Aksara Jawa dan kebutuhan pengguna.' },
        { title: 'Ideate & Information Architecture', desc: 'Menyusun struktur modul belajar, alur kanvas tulis, dan fitur kamera Lensa Aksara.' },
        { title: 'Visual & Mascot Design', desc: 'Merancang maskot dan komponen antarmuka bernuansa organik.' },
        { title: 'Prototyping & Testing', desc: 'Menguji alur pemindaian kamera dan kejelasan hasil transliterasi.' },
      ],
      decisions: [
        { title: 'Bottom sheet rincian suku kata di Lensa Aksara', why: 'Pengguna dapat melihat hasil terjemahan kalimat sekaligus rincian tiap suku kata tanpa meninggalkan layar kamera.' },
        { title: 'Kanvas tulis interaktif "Giliran tanganmu bercerita"', why: 'Membantu pemula melatih tarikan garis aksara dengan tombol Hapus dan periksa latihan.' },
        { title: 'Kartu bab dengan bar progres & halaman profil', why: 'Memberi rasa pencapaian bertahap dari Aksara Nglegena hingga Panyigeg & Pangkon.' },
      ],
      persona: {
        name: 'Alya Putri, 19',
        role: 'Mahasiswa & pembelajar budaya Nusantara',
        age: '19 tahun',
        occupation: 'Mahasiswa',
        location: 'Yogyakarta / Jawa Tengah',
        quote: 'Aku ingin bisa membaca dan menulis Aksara Jawa lagi dengan cara yang seru di HP, bukan sekadar menghafal tabel.',
        goals: [
          'Memahami cara baca dan arti tulisan Aksara Jawa lewat kamera dengan cepat',
          'Mempelajari Aksara Nglegena, Sandhangan, dan Pasangan secara bertahap',
          'Berlatih menulis bentuk aksara langsung di layar ponsel',
        ],
        pains: [
          'Media belajar yang ada terasa kaku dan minim interaksi',
          'Bingung membedakan bunyi per suku kata saat membaca kalimat Aksara Jawa',
          'Tidak tahu apakah goresan tulisan aksaranya sudah tepat atau belum',
        ],
      },
      features: [
        'Onboarding ramah ("Dari bentuk, jadi bunyi, jadi mengerti" & "Mulai dari aksaramu!") bersama maskot',
        'Beranda Modul Belajar bertahap: Aksara Nglegena, Sandhangan Swara, serta Panyigeg & Pangkon',
        'Kanvas Latihan Menulis interaktif ("Giliran tanganmu bercerita") untuk berlatih goresan aksara',
        'Fitur Kamera Lensa Aksara (Computer Vision) dengan bottom sheet pemecahan per suku kata & audio',
        'Halaman Profil & Statistik Perjalanan Belajar (Bab tuntas, Pelajaran selesai, dan persentase progres)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow', caption: 'Alur perjalanan pengguna dari onboarding, memilih bab belajar, latihan menulis, hingga memindai lewat Lensa Aksara.' },
      { title: 'Arsitektur Informasi', caption: 'Struktur pengelompokan fitur Belajar, Latihan Tulis, Kamera Lensa Aksara, dan Profil.' },
      { title: 'Sketsa & Eksplorasi Awal', caption: 'Eksplorasi konsep karakter maskot blangkon dan tata letak hasil pemindaian kamera.' },
      { title: 'Wireframe', caption: 'Kerangka layar beranda modul, kanvas latihan tulis, dan bottom sheet hasil transliterasi.' },
    ],
    deliverablesFinal: [
      { title: 'Design System & Maskot', caption: 'Komponen kartu bab, tombol aksi, ilustrasi maskot, dan sistem tipografi.' },
      { title: 'UI Final — AksaraLensa', caption: 'Tampilan lengkap 6 layar utama AksaraLensa: Onboarding, Beranda Bab, Kanvas Tulis, Lensa Aksara, dan Profil.', isFeatured: true },
      { title: 'Prototype Interaktif', caption: 'Simulasi alur belajar dan pemindaian kamera Computer Vision di Figma.' },
    ],
    deliverables: [
      { title: 'User Flow & Arsitektur Informasi', caption: 'Alur dari onboarding, modul belajar, latihan tulis, hingga Lensa Aksara.' },
      { title: 'Onboarding & Beranda', caption: 'Sambutan maskot, progres belajar, dan daftar bab.' },
      { title: 'UI Final — AksaraLensa', caption: 'Pemindaian kamera dengan pemecahan detail per suku kata dan audio.' },
      { title: 'Kanvas Latihan & Profil', caption: 'Area gambar interaktif untuk berlatih goresan Aksara Jawa dan ringkasan progres.' },
    ],
    palette: [
      { name: 'Earth Brown', hex: '#4A3219' },
      { name: 'Sage Green', hex: '#9DB668' },
      { name: 'Leaf Lime', hex: '#98A60A' },
      { name: 'Warm Cream', hex: '#F5EFE6' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Menampilkan hasil deteksi AI secara ramah',
        problem: 'Output Computer Vision yang kompleks berisiko membingungkan pengguna awam saat memindai kalimat aksara.',
        action: 'Menyajikan hasil dalam bottom sheet terstruktur yang memuat arti kalimat utuh sekaligus kartu rincian per suku kata lengkap dengan tombol suara.',
      },
      {
        title: 'Membawa nuansa tradisional tanpa terlihat kuno',
        problem: 'Dominasi warna cokelat tradisional berisiko membuat aplikasi terlihat tua dan kurang menarik bagi pelajar.',
        action: 'Memadukan cokelat tanah dengan hijau daun segar, krem lembut, serta ilustrasi karakter maskot yang ekspresif.',
      },
    ],
    impact: {
      headline: 'Team project Computer Vision aksara Jawa untuk generasi muda.',
      highlights: [
        'Menggabungkan deteksi kamera Computer Vision dengan latihan menulis aksara interaktif',
        'Menyederhanakan pembacaan kalimat Aksara Jawa melalui pemecahan kartu per suku kata',
      ],
      metrics: [
        { value: '3', label: 'Fitur utama: Belajar, Tulis, & Lensa' },
        { value: '20', label: 'Aksara dasar & sandhangan tercakup' },
        { value: '6', label: 'Alur layar utama terintegrasi' },
      ],
      reflections: [
        'Teknologi Computer Vision terasa jauh lebih bermanfaat ketika dibungkus dalam alur edukasi yang empatik dan mudah dipahami.',
        'Pemecahan informasi per suku kata sangat membantu menurunkan beban kognitif pembelajar baru.',
      ],
    },
  },

  {
    slug: 'naik',
    title: 'NAIK',
    tagline: 'Platform Sistem Informasi Geografis (GIS) rute angkot Kota Bogor yang membantu warga dan pendatang keliling kota tanpa takut nyasar.',
    kind: 'UI/UX & Web GIS',
    year: '2026',
    category: 'Klien',
    badge: 'Project Sistem Informasi Geografis · 2026',
    color: '#1fb6d5',
    burst: '#ff8a2a',
    meta: {
      role: 'UI/UX Designer & Front-End',
      contextLabel: 'Project Sistem Informasi Geografis',
      duration: '1 semester',
      team: 'Tim Proyek Sistem Informasi Geografis',
      platform: 'Web (Desktop & Mobile)',
      tools: ['Fg', 'HT', 'CS', 'JS', 'Re'],
      methodPills: ['Figma', 'UI/UX Design', 'Web GIS', 'Wireframing', 'Front-End', 'Interactive Map'],
    },
    context: {
      summary:
        'NAIK adalah proyek Sistem Informasi Geografis (GIS) berbasis web untuk memetakan jaringan trayek angkot di Kota Bogor. Banyaknya nomor trayek dan titik transit sering membuat penumpang bingung. NAIK menggabungkan landing page edukatif ("Keliling Bogor Tanpa Takut Nyasar") dengan peta eksplorasi interaktif berisi filter rute, kontrol layer spasial, legenda kepadatan, dan pop-up informasi jalan.',
      facts: [
        { k: 'Konteks', v: 'Project Sistem Informasi Geografis' },
        { k: 'Jenis produk', v: 'Web GIS & Landing Page' },
        { k: 'Cakupan wilayah', v: 'Jaringan trayek angkot Kota Bogor' },
        { k: 'Target pengguna', v: 'Komuter, mahasiswa, & wisatawan Bogor' },
      ],
      goals: [
        'Menyediakan peta rute angkot Kota Bogor yang dapat langsung dipakai gratis di browser tanpa perlu mendaftar.',
        'Memudahkan pencarian rute berdasarkan nomor trayek, titik keberangkatan, dan tujuan.',
        'Menampilkan informasi kepadatan rute dan titik transit dalam satu layar peta yang bersih.',
      ],
      scope: [
        'Riset masalah navigasi transportasi umum lokal di Kota Bogor',
        'Perancangan landing page penjelasan cara kerja 4 langkah dan fitur utama',
        'Desain antarmuka Web GIS (panel filter rute, kontrol layer, legenda, dan pop-up jalan)',
        'Implementasi antarmuka front-end responsif',
      ],
    },
    problem: {
      quote: 'Rute angkot di Kota Bogor sulit dipahami karena trayeknya banyak dan informasinya tidak tersedia dalam peta yang mudah dieksplorasi.',
      whyItMatters:
        'Angkot merupakan tulang punggung mobilitas harian di Kota Bogor, namun informasi rutenya masih terfragmentasi dalam daftar teks yang sulit dibayangkan secara spasial oleh pendatang maupun warga.',
      targetContext:
        'Mahasiswa baru, komuter harian, dan wisatawan di Kota Bogor yang ingin mengetahui jalur angkot dari lokasi asal ke tujuan dengan cepat.',
      user: {
        title: 'Masalah penumpang',
        points: [
          'Pendatang dan mahasiswa baru kesulitan menghafal puluhan kode dan warna trayek angkot Bogor.',
          'Informasi rute yang beredar berupa daftar teks panjang tanpa visualisasi jalur di atas peta.',
          'Penumpang sering ragu menentukan titik naik-turun dan ruas jalan yang dilalui angkot.',
        ],
      },
      business: {
        title: 'Tantangan visualisasi GIS',
        points: [
          'Menampilkan banyak garis trayek dan layer spasial di peta tanpa terlihat kusut.',
          'Menyusun panel kontrol GIS agar tetap ramah bagi pengguna awam non-teknis.',
          'Memastikan informasi penting (jumlah rute, tingkat kepadatan, trayek yang lewat) muncul ringkas saat jalan diklik.',
        ],
      },
      hmw: 'Bagaimana kami menyajikan data geospasial trayek angkot Kota Bogor menjadi peta interaktif yang bisa dipahami siapa saja dalam hitungan detik?',
    },
    designThinking: [
      { n: '1', step: 'Empathize', color: '#d9f20e', desc: 'Mengamati kesulitan mahasiswa dan warga saat mencari tahu nomor angkot yang melewati ruas jalan di Bogor.' },
      { n: '2', step: 'Define', color: '#f7a8b8', desc: 'Menentukan kebutuhan utama: pencarian rute cepat, kontrol layer yang ramah awam, dan info kepadatan jalan.' },
      { n: '3', step: 'Ideate', color: '#aeb5f7', desc: 'Merancang floating panel di sisi kiri peta, pop-up atribut jalan, serta landing page panduan 4 langkah.' },
      { n: '4', step: 'Prototype', color: '#ff5a36', desc: 'Membangun desain visual berilustrasi Kota Bogor dengan palet hijau, sian, dan oranye yang kontras.' },
      { n: '5', step: 'Test', color: '#98a60a', desc: 'Menguji alur pemilihan rute, pengaktifan layer peta, dan keterbacaan pop-up informasi jalan.' },
    ],
    research: {
      methods: [
        { title: 'Observasi & wawancara penumpang', desc: 'Memahami cara mahasiswa dan warga bertanya rute angkot serta titik kebingungan utama.' },
        { title: 'Pengumpulan data spasial trayek', desc: 'Memetakan jaringan jalan, kode trayek, dan tingkat kepadatan rute di Kota Bogor.' },
        { title: 'Benchmark aplikasi navigasi', desc: 'Mempelajari tata letak floating panel, legenda peta, dan pop-up informasi spasial.' },
      ],
      insights: [
        { title: 'Langsung pakai tanpa login', desc: 'Pengguna yang sedang mencari rute di jalan butuh jawaban cepat tanpa hambatan registrasi akun.' },
        { title: 'Filter asal–tujuan lebih akrab', desc: 'Selain nomor trayek, pengguna sering mencari rute berdasarkan lokasi keberangkatan dan tujuan.' },
        { title: 'Legenda warna mempercepat baca peta', desc: 'Indikator warna tingkat kepadatan membantu pengguna mengantisipasi jalur ramai.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Satu layar, semua info rute', desc: 'Peta penuh dengan panel mengambang di sisi kiri agar area eksplorasi peta tetap maksimal.' },
        { title: 'Ramah pengguna awam', desc: 'Istilah GIS disederhanakan menjadi kontrol layer dan filter yang mudah dipahami.' },
        { title: 'Segar dan kontras di atas peta', desc: 'Palet hijau–biru dengan aksen oranye menjaga keterbacaan jalur di atas basemap.' },
      ],
      process: [
        { title: 'Pemetaan kebutuhan data GIS', desc: 'Menentukan atribut jalan, trayek, dan kepadatan yang relevan bagi penumpang.' },
        { title: 'Wireframing Web GIS & Landing Page', desc: 'Merancang alur dari halaman pengenalan menuju peta interaktif.' },
        { title: 'UI Design & Ilustrasi Kota', desc: 'Membangun ilustrasi lanskap Kota Bogor dan komponen kontrol peta.' },
        { title: 'Front-End & Integrasi Peta', desc: 'Mengimplementasikan antarmuka peta interaktif beserta filter dan pop-up.' },
      ],
      decisions: [
        { title: 'Floating sidebar di kiri peta', why: 'Memungkinkan pengguna memfilter rute dan mengatur layer sambil tetap melihat peta secara utuh.' },
        { title: 'Pop-up ringkas pada ruas jalan', why: 'Menampilkan nama jalan, jumlah rute, status kepadatan, dan nomor angkot yang melintas tepat di titik klik.' },
        { title: 'Landing page dengan panduan 4 langkah', why: 'Membantu pengguna baru memahami cara kerja Web GIS sebelum mulai mengeksplorasi peta.' },
      ],
      persona: {
        name: 'Rafi, 19',
        role: 'Mahasiswa rantau di Kota Bogor',
        age: '19 tahun',
        occupation: 'Mahasiswa',
        location: 'Kota Bogor',
        quote: 'Aku sering ragu harus naik angkot nomor berapa dan turun di sebelah mana kalau mau pergi ke tempat baru di Bogor.',
        goals: [
          'Menemukan angkot yang tepat menuju kampus dan tempat tujuan dengan cepat',
          'Melihat visualisasi jalur jalan yang dilewati angkot langsung di atas peta',
          'Mengetahui tingkat kepadatan rute dan titik transit terdekat',
        ],
        pains: [
          'Takut salah naik arah trayek angkot',
          'Sulit membayangkan jalur jika hanya membaca daftar nama jalan berbentuk teks',
          'Tampilan peta teknis biasanya terlalu rumit untuk dipakai sehari-hari',
        ],
      },
      features: [
        'Landing Page "Keliling Bogor Tanpa Takut Nyasar" dengan ilustrasi lanskap & panduan 4 langkah',
        'Peta Interaktif Web GIS Kota Bogor yang langsung dapat diakses gratis tanpa login',
        'Floating Panel Filter Rute berdasarkan nomor trayek, lokasi keberangkatan, dan tujuan',
        'Kontrol Layer Geospasial (Jaringan Jalan, Titik Transit, & Kepadatan) beserta Legenda Peta',
        'Pop-up Informasi Ruas Jalan real-time (nama jalan, jumlah rute, status kepadatan, & daftar angkot)',
      ],
    },
    deliverablesProcess: [
      { title: 'User Flow', caption: 'Alur pengguna dari membaca panduan singkat di landing page hingga mencari rute di peta GIS.' },
      { title: 'Arsitektur Informasi', caption: 'Struktur halaman pengenalan NAIK dan pengelompokan panel kontrol pada layar Web GIS.' },
      { title: 'Sketsa & Eksplorasi Awal', caption: 'Eksplorasi tata letak floating sidebar, legenda peta, dan kartu pop-up jalan.' },
      { title: 'Wireframe', caption: 'Kerangka halaman landing page dan antarmuka eksplorasi peta rute angkot.' },
    ],
    deliverablesFinal: [
      { title: 'Design System & Ilustrasi', caption: 'Komponen kontrol layer GIS, badge trayek, palet warna, dan ilustrasi vektor Kota Bogor.' },
      { title: 'UI Final — NAIK Web GIS', caption: 'Tampilan lengkap aplikasi Web GIS interaktif dan Landing Page NAIK Kota Bogor.', isFeatured: true },
      { title: 'Implementasi Web Responsif', caption: 'Antarmuka peta dan halaman pengenalan yang dapat diakses di laptop maupun ponsel.' },
    ],
    deliverables: [
      { title: 'Arsitektur Informasi & User Flow', caption: 'Alur dari landing page menuju eksplorasi peta dan filter rute.' },
      { title: 'Landing Page NAIK', caption: 'Hero ilustrasi Kota Bogor, cara kerja 4 langkah, dan pengenalan fitur.' },
      { title: 'UI Final — NAIK Web GIS', caption: 'Antarmuka peta interaktif dengan filter rute, kontrol layer, legenda, dan pop-up jalan.' },
      { title: 'Komponen Kontrol GIS', caption: 'Dropdown trayek, checkbox layer geospasial, dan indikator kepadatan.' },
    ],
    palette: [
      { name: 'Bogor Green', hex: '#148F5A' },
      { name: 'Sky Cyan', hex: '#1FB6D5' },
      { name: 'Mint Meadow', hex: '#B4E88E' },
      { name: 'Transit Orange', hex: '#FF8A2A' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      {
        title: 'Kepadatan informasi di atas peta',
        problem: 'Menampilkan rute, layer, dan legenda sekaligus berisiko menutupi area peta utama.',
        action: 'Menggunakan floating card modular yang ringkas di sisi kiri dan pop-up kontekstual yang hanya muncul saat ruas jalan dipilih.',
      },
      {
        title: 'Menyederhanakan fitur GIS untuk publik',
        problem: 'Antarmuka GIS sering kali terlalu teknis bagi masyarakat umum yang hanya ingin mencari angkot.',
        action: 'Mengemas fitur layer dan atribut spasial ke dalam bahasa sehari-hari disertai panduan singkat 4 langkah di halaman depan.',
      },
    ],
    impact: {
      headline: 'Project Sistem Informasi Geografis rute angkot Kota Bogor.',
      highlights: [
        'Memvisualisasikan jaringan trayek dan kepadatan rute angkot Kota Bogor dalam satu peta interaktif',
        'Dapat diakses langsung lewat browser tanpa registrasi untuk memudahkan warga dan pendatang',
      ],
      metrics: [
        { value: '4', label: 'Langkah mudah cari rute' },
        { value: '3', label: 'Layer geospasial interaktif' },
        { value: '100%', label: 'Gratis diakses tanpa login' },
      ],
      reflections: [
        'Data geospasial menjadi jauh lebih bernilai bagi warga ketika disajikan lewat antarmuka yang sederhana dan terfokus.',
        'Kombinasi landing page naratif dan aplikasi peta langsung pakai membantu menjembatani pengguna baru.',
      ],
    },
  },
];
