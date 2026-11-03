// ===================================================================
// STUDI KASUS — PROYEK PORTOFOLIO (klien, lomba terpilih, PKL)
// Draf analisis versi awal. Silakan sesuaikan angka/fakta lapangan
// (durasi, tim, hasil nyata) dengan data aslimu — struktur sudah siap.
// ===================================================================

export const workCases = [
  {
    slug: 'speedlust-garage',
    title: 'Speedlust Garage',
    tagline: 'Landing page bengkel modifikasi yang terasa seperti garasi: berani, cepat dipahami, dan langsung mengarah ke pemesanan.',
    kind: 'Website',
    year: '2025',
    category: 'Klien',
    badge: 'Proyek Klien',
    color: '#d9f20e',
    burst: '#e8112d',
    meta: {
      role: 'UI/UX Designer & Front-End Developer',
      duration: '4 minggu',
      team: 'Solo, bersama pemilik bengkel sebagai narasumber',
      platform: 'Web (desktop & mobile)',
      tools: ['Fg', 'HT', 'CS', 'JS'],
    },
    context: {
      summary:
        'Speedlust Garage adalah bengkel modifikasi kendaraan yang mengandalkan Instagram dan WhatsApp untuk menjaring pelanggan. Tanpa situs resmi, calon pelanggan sulit menilai kualitas hasil kerja, daftar layanan, dan estimasi proses. Aku diminta merancang landing page yang menjadi “etalase” sekaligus pintu masuk pemesanan.',
      facts: [
        { k: 'Klien', v: 'Speedlust Garage' },
        { k: 'Jenis produk', v: 'Landing page & katalog layanan' },
        { k: 'Target pengguna', v: 'Pemilik kendaraan usia 18–40 tahun' },
        { k: 'Kanal utama', v: 'Instagram → situs → WhatsApp' },
      ],
      goals: [
        'Membangun kepercayaan lewat galeri hasil kerja yang mudah dijelajahi.',
        'Memperpendek jalur dari “tertarik” ke “booking” menjadi maksimal 3 langkah.',
        'Menyajikan identitas visual yang berani dan konsisten dengan citra bengkel.',
      ],
      scope: [
        'Riset kompetitor & audit akun Instagram klien',
        'Struktur informasi dan alur pemesanan',
        'Wireframe → desain visual (Figma)',
        'Implementasi responsif (HTML, CSS, JavaScript)',
      ],
    },
    problem: {
      quote: 'Aku suka hasil modifikasinya, tapi bingung harus tanya ke siapa dan berapa kira-kira biayanya.',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Informasi layanan dan harga tersebar di caption dan DM sehingga sulit dibandingkan.',
          'Bukti kualitas hanya berupa foto lepas tanpa konteks (sebelum–sesudah, jenis kendaraan).',
          'Tidak ada kejelasan alur: dari konsultasi sampai kendaraan selesai dikerjakan.',
        ],
      },
      business: {
        title: 'Masalah bisnis',
        points: [
          'Pertanyaan berulang menyita waktu admin dan membuat respons lambat.',
          'Calon pelanggan yang tidak langsung dibalas cenderung berpindah ke bengkel lain.',
          'Sulit membedakan diri dari bengkel lain tanpa identitas yang kuat.',
        ],
      },
      hmw: 'Bagaimana kami membuat calon pelanggan yakin dengan kualitas bengkel dan siap menghubungi hanya dalam beberapa ketukan?',
    },
    research: {
      methods: [
        { title: 'Audit kompetitor', desc: 'Membandingkan 5 situs dan akun bengkel modifikasi: struktur halaman, gaya visual, dan pola ajakan bertindak (CTA).' },
        { title: 'Wawancara klien', desc: 'Menggali pertanyaan yang paling sering masuk ke admin, layanan unggulan, dan tipe pelanggan ideal.' },
        { title: 'Analisis perilaku Instagram', desc: 'Membaca konten dengan interaksi tertinggi untuk menentukan konten yang layak diangkat ke halaman utama.' },
      ],
      insights: [
        { title: 'Visual lebih meyakinkan daripada teks', desc: 'Pengunjung menilai bengkel dari foto hasil. Galeri harus menjadi elemen terbesar di halaman.' },
        { title: 'Harga adalah pertanyaan nomor satu', desc: 'Tanpa angka pasti pun, rentang estimasi mengurangi kecemasan dan pertanyaan berulang.' },
        { title: 'WhatsApp adalah kanal konversi', desc: 'Pelanggan sudah nyaman chat; tugas situs hanya menyiapkan konteks agar chat lebih terarah.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Visual dulu, penjelasan kemudian', desc: 'Hero berupa galeri unggulan dengan satu CTA jelas, lalu layanan dijelaskan secara ringkas.' },
        { title: 'Satu halaman, satu tujuan', desc: 'Seluruh section mengalir menuju satu aksi: booking via WhatsApp dengan pesan yang sudah terisi.' },
        { title: 'Berani tapi terbaca', desc: 'Palet kontras tinggi lime–merah–hitam dipakai hemat agar tetap nyaman dibaca di layar kecil.' },
      ],
      process: [
        { title: 'Pemetaan alur', desc: 'Menyusun user flow dari pintu masuk Instagram hingga tombol booking.' },
        { title: 'Wireframe low-fi', desc: 'Menguji urutan section: hero → layanan → galeri → proses → harga → kontak.' },
        { title: 'Desain visual & komponen', desc: 'Membangun komponen berulang (kartu layanan, galeri, CTA) agar konsisten.' },
        { title: 'Implementasi & uji perangkat', desc: 'Dikodekan responsif dan diuji di beberapa ukuran layar serta kecepatan muat gambar.' },
      ],
      decisions: [
        { title: 'Pesan WhatsApp otomatis', why: 'Pesan pra-isi (jenis kendaraan & layanan) mengurangi bolak-balik tanya jawab.' },
        { title: 'Filter galeri per jenis kendaraan', why: 'Calon pelanggan langsung menemukan contoh yang relevan dengan kendaraannya.' },
        { title: 'Rentang estimasi harga', why: 'Memberi gambaran awal tanpa mengikat klien pada harga final.' },
      ],
      persona: {
        name: 'Raka, 24',
        role: 'Karyawan & pemilik motor sport',
        goals: ['Menemukan bengkel yang hasilnya rapi', 'Tahu estimasi biaya sebelum datang'],
        pains: ['Bingung membandingkan bengkel', 'Takut hasil tidak sesuai ekspektasi'],
      },
    },
    deliverables: [
      { title: 'User flow & sitemap', caption: 'Alur dari Instagram sampai booking dan struktur halaman.' },
      { title: 'Wireframe low-fidelity', caption: 'Eksplorasi urutan section dan hierarki konten.' },
      { title: 'Desain halaman utama', caption: 'Hero, layanan, galeri, proses kerja, dan kontak.' },
      { title: 'Komponen & state', caption: 'Kartu layanan, filter galeri, tombol CTA, dan variasinya.' },
      { title: 'Versi mobile', caption: 'Penyesuaian layout, ukuran sentuh, dan prioritas konten.' },
      { title: 'Implementasi front-end', caption: 'Hasil kode responsif yang setia pada desain.' },
    ],
    palette: [
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Signal Red', hex: '#E8112D' },
      { name: 'Asphalt', hex: '#0C0C0C' },
      { name: 'Steel', hex: '#2B2B2B' },
      { name: 'Chalk', hex: '#F6F9DC' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Gaya berani vs keterbacaan', problem: 'Warna neon dan tipografi besar berisiko melelahkan mata dan menurunkan keterbacaan.', action: 'Membatasi aksen warna pada CTA dan judul, serta menjaga kontras teks isi minimal AA.' },
      { title: 'Galeri berat di koneksi lambat', problem: 'Banyak foto resolusi tinggi membuat halaman lambat di data seluler.', action: 'Menerapkan lazy-loading, ukuran gambar responsif, dan thumbnail sebelum lightbox.' },
      { title: 'Konten klien belum lengkap', problem: 'Harga dan foto sebelum–sesudah belum terdokumentasi rapi.', action: 'Menyediakan template konten dan placeholder terstruktur agar klien mudah melengkapi.' },
    ],
    impact: {
      headline: 'Etalase digital yang menyederhanakan percakapan pertama dengan pelanggan.',
      metrics: [
        { value: '3', label: 'Langkah menuju booking' },
        { value: '1', label: 'CTA utama yang konsisten' },
        { value: '2', label: 'Breakpoint utama (desktop & mobile)' },
      ],
      reflections: [
        'Desain yang kuat harus tetap bisa diisi konten nyata oleh klien tanpa merusak tata letak.',
        'Keputusan kecil seperti pesan WhatsApp pra-isi berdampak besar pada pengalaman pengguna.',
        'Selanjutnya: mengukur klik CTA untuk membuktikan dampak desain secara kuantitatif.',
      ],
    },
  },

  {
    slug: 'rie-charge',
    title: 'Rie.Charge',
    tagline: 'Situs layanan isi ulang yang ramah: pilih produk, pahami total bayar, dan selesaikan transaksi tanpa ragu.',
    kind: 'Website',
    year: '2025',
    category: 'Klien',
    badge: 'Proyek Klien',
    color: '#f7a8b8',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer & Front-End Developer',
      duration: '5 minggu',
      team: 'Solo, berkoordinasi dengan pemilik usaha',
      platform: 'Web (mobile-first)',
      tools: ['Fg', 'HT', 'CS', 'JS'],
    },
    context: {
      summary:
        'Rie.Charge adalah usaha layanan isi ulang (pulsa, paket data, dan token) yang melayani pembeli lewat chat. Transaksi manual membuat pembeli harus menanyakan harga satu per satu dan menunggu konfirmasi. Proyek ini merancang situs yang menampilkan produk, harga, dan alur pembayaran secara transparan.',
      facts: [
        { k: 'Klien', v: 'Rie.Charge' },
        { k: 'Jenis produk', v: 'Situs layanan & katalog produk isi ulang' },
        { k: 'Target pengguna', v: 'Mahasiswa dan pekerja muda pengguna ponsel harian' },
        { k: 'Perilaku utama', v: 'Transaksi cepat, sering, bernilai kecil' },
      ],
      goals: [
        'Menyajikan produk dan harga yang mudah dipindai dalam hitungan detik.',
        'Membangun rasa aman lewat alur transaksi yang jelas dan informasi kontak yang kredibel.',
        'Mengurangi pertanyaan berulang di chat.',
      ],
      scope: [
        'Pemetaan perjalanan pembeli (customer journey)',
        'Desain katalog, detail produk, dan alur checkout',
        'Pedoman visual dan komponen UI',
        'Implementasi front-end mobile-first',
      ],
    },
    problem: {
      quote: 'Aku cuma mau isi paket data, tapi harus nanya harga dulu dan nunggu dibalas.',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Daftar harga tidak terpusat, sehingga harus bertanya berulang kali.',
          'Tidak jelas apakah transaksi aman dan berapa lama prosesnya.',
          'Salah memasukkan nomor tujuan sering terjadi dan tidak ada konfirmasi sebelum bayar.',
        ],
      },
      business: {
        title: 'Masalah bisnis',
        points: [
          'Admin menghabiskan waktu menjawab pertanyaan identik.',
          'Kesalahan input nomor memicu komplain dan pengembalian dana.',
          'Kepercayaan pembeli baru sulit dibangun tanpa jejak profesional.',
        ],
      },
      hmw: 'Bagaimana kami membuat proses isi ulang terasa secepat, seaman, dan sejelas mungkin untuk pembeli baru maupun langganan?',
    },
    research: {
      methods: [
        { title: 'Wawancara pembeli', desc: 'Menggali alasan memilih penyedia, kekhawatiran, dan momen paling menyebalkan saat isi ulang.' },
        { title: 'Benchmark aplikasi dompet digital', desc: 'Mempelajari pola input nomor, konfirmasi, dan status transaksi yang sudah akrab bagi pengguna.' },
        { title: 'Pemetaan journey', desc: 'Menandai titik gesekan dari “butuh isi ulang” sampai “saldo masuk”.' },
      ],
      insights: [
        { title: 'Kecepatan adalah fitur', desc: 'Pengguna ingin selesai dalam kurang dari satu menit; setiap field tambahan adalah hambatan.' },
        { title: 'Konfirmasi menurunkan kecemasan', desc: 'Ringkasan nomor, produk, dan total sebelum bayar mengurangi salah transaksi.' },
        { title: 'Kepercayaan lahir dari detail', desc: 'Status transaksi, jam layanan, dan kontak yang jelas membuat usaha kecil terasa terpercaya.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Pilih, cek, bayar', desc: 'Tiga langkah linier tanpa pengalihan halaman yang membingungkan.' },
        { title: 'Ramah dan hangat', desc: 'Palet pink lembut dengan aksen lime untuk kesan bersahabat, bukan korporat kaku.' },
        { title: 'Transparan sejak awal', desc: 'Harga final tampil di kartu produk; tidak ada biaya tersembunyi di akhir.' },
      ],
      process: [
        { title: 'Prioritas fitur', desc: 'Memilah fitur wajib (katalog, checkout, status) dari yang bisa menyusul.' },
        { title: 'Prototipe alur checkout', desc: 'Menguji alur dengan beberapa calon pengguna dan memperbaiki titik bingung.' },
        { title: 'Sistem komponen', desc: 'Menyusun kartu produk, input nomor, dan indikator status agar konsisten.' },
        { title: 'Pengembangan mobile-first', desc: 'Kode dimulai dari layar kecil karena mayoritas pengguna di ponsel.' },
      ],
      decisions: [
        { title: 'Input nomor dengan deteksi operator', why: 'Menampilkan produk yang relevan otomatis dan memperkecil salah pilih.' },
        { title: 'Halaman ringkasan sebelum bayar', why: 'Memberi kesempatan terakhir memeriksa nomor dan total.' },
        { title: 'Status transaksi berwarna dan berikon', why: 'Informasi terbaca cepat dan tidak mengandalkan warna saja.' },
      ],
      persona: {
        name: 'Salsa, 20',
        role: 'Mahasiswa semester 4',
        goals: ['Isi paket data cepat di sela kuliah', 'Hemat dan tahu total bayar'],
        pains: ['Harus chat dulu untuk tanya harga', 'Khawatir salah nomor tujuan'],
      },
    },
    deliverables: [
      { title: 'Customer journey map', caption: 'Titik gesekan dan peluang dari awal hingga transaksi selesai.' },
      { title: 'Katalog & detail produk', caption: 'Kartu produk dengan harga, masa aktif, dan label promo.' },
      { title: 'Alur checkout', caption: 'Input nomor, ringkasan, pembayaran, dan status.' },
      { title: 'Komponen UI', caption: 'Input, tombol, badge status, dan state error.' },
      { title: 'Versi mobile', caption: 'Layout utama yang dirancang untuk satu tangan.' },
      { title: 'Implementasi front-end', caption: 'Halaman responsif yang siap diintegrasikan ke sistem pembayaran.' },
    ],
    palette: [
      { name: 'Rie Pink', hex: '#F7A8B8' },
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Ink', hex: '#161616' },
      { name: 'Blush', hex: '#FFE3EA' },
      { name: 'Cloud', hex: '#FFFFFF' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Mengurangi salah input', problem: 'Salah nomor tujuan adalah sumber komplain terbesar.', action: 'Menambahkan validasi, format otomatis, dan halaman konfirmasi sebelum pembayaran.' },
      { title: 'Ramah tanpa terlihat main-main', problem: 'Warna lembut berisiko mengurangi kesan aman pada transaksi uang.', action: 'Memadukan warna hangat dengan informasi kredibilitas dan hierarki yang tegas.' },
      { title: 'Belum ada gerbang pembayaran', problem: 'Integrasi pembayaran di luar cakupan awal proyek.', action: 'Merancang alur dan state lengkap agar integrasi nantinya hanya perlu menyambung data.' },
    ],
    impact: {
      headline: 'Alur transaksi tiga langkah yang jelas dan mengurangi ketergantungan pada chat.',
      metrics: [
        { value: '3', label: 'Langkah transaksi' },
        { value: '4', label: 'State status transaksi' },
        { value: '1', label: 'Halaman konfirmasi pencegah salah input' },
      ],
      reflections: [
        'Kepercayaan pada layanan transaksi dibangun dari kejelasan, bukan dekorasi.',
        'Merancang state (loading, error, sukses) sejak awal menghemat banyak revisi saat implementasi.',
        'Selanjutnya: uji kegunaan dengan pembeli langganan untuk mengukur waktu transaksi nyata.',
      ],
    },
  },

  {
    slug: 'poly-board-games',
    title: 'Poly Board Games',
    tagline: 'Katalog dan reservasi board game yang playful, membantu kelompok teman memilih permainan dan memesan meja tanpa drama.',
    kind: 'Website',
    year: '2025',
    category: 'Klien',
    badge: 'Proyek Klien',
    color: '#aeb5f7',
    burst: '#e8112d',
    meta: {
      role: 'UI/UX Designer & Front-End Developer',
      duration: '5 minggu',
      team: 'Solo, bekerja dengan pengelola kafe board game',
      platform: 'Web (responsif)',
      tools: ['Fg', 'HT', 'CS', 'JS'],
    },
    context: {
      summary:
        'Poly Board Games adalah tempat bermain board game yang menyediakan puluhan judul. Pengunjung sering datang tanpa tahu game apa yang cocok untuk jumlah pemain dan durasi mereka, sementara reservasi dilakukan lewat pesan manual. Situs ini dirancang untuk memandu pemilihan game sekaligus mempermudah reservasi.',
      facts: [
        { k: 'Klien', v: 'Poly Board Games' },
        { k: 'Jenis produk', v: 'Katalog game & sistem reservasi' },
        { k: 'Target pengguna', v: 'Kelompok teman, komunitas, dan pemain pemula' },
        { k: 'Konteks pakai', v: 'Merencanakan hangout sebelum datang' },
      ],
      goals: [
        'Membantu pengguna menemukan game yang sesuai jumlah pemain, durasi, dan tingkat kesulitan.',
        'Mempermudah reservasi meja dengan informasi ketersediaan yang jelas.',
        'Menyampaikan suasana seru dan komunitas tempat tersebut.',
      ],
      scope: [
        'Riset kebutuhan pemain pemula dan komunitas',
        'Rancangan filter dan pencarian katalog',
        'Alur reservasi meja',
        'Implementasi front-end responsif',
      ],
    },
    problem: {
      quote: 'Kita berempat, cuma punya dua jam, dan belum ada yang pernah main. Enaknya main apa?',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Pemula kewalahan oleh banyaknya judul dan istilah yang asing.',
          'Informasi jumlah pemain dan durasi tersebar di kotak game fisik saja.',
          'Reservasi lewat chat tidak memperlihatkan ketersediaan meja secara real time.',
        ],
      },
      business: {
        title: 'Masalah bisnis',
        points: [
          'Staf menghabiskan waktu merekomendasikan game satu per satu.',
          'Meja kosong di jam sepi dan penuh di jam ramai karena reservasi tidak terkelola.',
          'Pengunjung baru kurang terdorong datang karena tidak tahu apa yang ditawarkan.',
        ],
      },
      hmw: 'Bagaimana kami membantu sekelompok teman memilih game yang tepat dan memesan meja dalam satu sesi singkat?',
    },
    research: {
      methods: [
        { title: 'Wawancara pengunjung & staf', desc: 'Memahami cara orang memilih game dan pertanyaan yang paling sering diajukan.' },
        { title: 'Card sorting kategori', desc: 'Mengelompokkan game menurut cara pikir pengguna, bukan istilah industri.' },
        { title: 'Benchmark katalog digital', desc: 'Mempelajari pola filter di situs hobi dan e-commerce untuk diadaptasi.' },
      ],
      insights: [
        { title: 'Keputusan kelompok butuh filter cepat', desc: 'Jumlah pemain dan durasi adalah dua kriteria pertama yang selalu ditanyakan.' },
        { title: 'Pemula takut aturan rumit', desc: 'Label “mudah dipelajari” dan ringkasan cara main menurunkan hambatan.' },
        { title: 'Reservasi harus kasatmata', desc: 'Ketersediaan jam yang terlihat jelas mencegah bolak-balik konfirmasi.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Pilih berdasarkan situasi', desc: 'Filter utama: jumlah pemain, durasi, dan tingkat kesulitan.' },
        { title: 'Playful tapi rapi', desc: 'Warna lavender dan aksen merah, ilustrasi karakter, serta bentuk membulat untuk kesan santai.' },
        { title: 'Dari memilih ke memesan', desc: 'Dari kartu game, pengguna bisa langsung lanjut ke reservasi tanpa kehilangan konteks.' },
      ],
      process: [
        { title: 'Arsitektur informasi', desc: 'Menyusun kategori dan label dari hasil card sorting.' },
        { title: 'Desain filter & kartu game', desc: 'Menguji kepadatan informasi pada kartu agar tetap terbaca.' },
        { title: 'Alur reservasi', desc: 'Memilih tanggal, jam, jumlah orang, lalu konfirmasi.' },
        { title: 'Implementasi', desc: 'Filter interaktif dengan JavaScript dan layout responsif.' },
      ],
      decisions: [
        { title: 'Filter berbasis chip', why: 'Mudah disentuh di mobile dan memperlihatkan filter aktif secara eksplisit.' },
        { title: 'Label tingkat kesulitan berwarna', why: 'Membantu pemula menyaring cepat tanpa membaca deskripsi panjang.' },
        { title: 'Kartu game dengan “cocok untuk”', why: 'Menjawab pertanyaan utama pengguna langsung di kartu.' },
      ],
      persona: {
        name: 'Dimas, 22',
        role: 'Mahasiswa, penyelenggara hangout',
        goals: ['Memilih game cocok untuk 4 orang', 'Memastikan meja tersedia'],
        pains: ['Bingung memilih di antara banyak judul', 'Takut game terlalu rumit untuk teman pemula'],
      },
    },
    deliverables: [
      { title: 'Hasil card sorting', caption: 'Struktur kategori berdasarkan cara pikir pengguna.' },
      { title: 'Katalog & filter', caption: 'Pencarian, filter chip, dan kartu game.' },
      { title: 'Detail game', caption: 'Ringkasan cara main, durasi, jumlah pemain, dan level.' },
      { title: 'Alur reservasi', caption: 'Pilih jadwal, isi data, dan konfirmasi.' },
      { title: 'Ilustrasi & elemen brand', caption: 'Karakter dan ornamen yang memperkuat suasana.' },
      { title: 'Implementasi front-end', caption: 'Halaman responsif dengan filter interaktif.' },
    ],
    palette: [
      { name: 'Lavender', hex: '#AEB5F7' },
      { name: 'Play Red', hex: '#E8112D' },
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Night', hex: '#161616' },
      { name: 'Paper', hex: '#F6F9DC' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Katalog panjang tanpa melelahkan', problem: 'Puluhan judul dengan atribut berbeda mudah membuat halaman penuh dan membingungkan.', action: 'Menerapkan filter bertingkat, kartu ringkas, dan paginasi ringan.' },
      { title: 'Bahasa teknis pada board game', problem: 'Istilah seperti “worker placement” asing bagi pemula.', action: 'Mengganti dengan label sehari-hari dan memberi penjelasan singkat bila perlu.' },
      { title: 'Ketersediaan meja dinamis', problem: 'Data real time membutuhkan sistem yang belum tersedia.', action: 'Mendesain tampilan ketersediaan dan menyiapkan struktur data agar siap diintegrasikan.' },
    ],
    impact: {
      headline: 'Memilih game kini bisa dimulai dari situasi nyata: berapa orang, berapa lama, dan seberapa berpengalaman.',
      metrics: [
        { value: '3', label: 'Filter utama keputusan' },
        { value: '1', label: 'Alur pilih → reservasi' },
        { value: '3', label: 'Level kesulitan berlabel' },
      ],
      reflections: [
        'Merancang berdasarkan situasi pengguna membuat filter terasa alami, bukan sekadar daftar atribut.',
        'Ilustrasi yang konsisten memperkuat identitas tanpa mengorbankan keterbacaan.',
        'Selanjutnya: menguji dengan kelompok pemula untuk memvalidasi label kesulitan.',
      ],
    },
  },

  {
    slug: 'visensa',
    title: 'Visensa',
    tagline: 'Aplikasi mobile hasil lomba UI/UX yang membawa tim ke Finalis 5 Besar AMIKOM berkat riset yang tajam dan alur yang bersih.',
    kind: 'Mobile App',
    year: '2025',
    category: 'Lomba',
    badge: 'Finalis 5 Besar',
    color: '#e8112d',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer',
      duration: 'Masa lomba (± 3–4 minggu)',
      team: 'Tim lomba UI/UX',
      platform: 'Mobile (iOS & Android)',
      tools: ['Fg', 'Ai'],
    },
    context: {
      summary:
        'Visensa dirancang untuk Lomba UI/UX Universitas AMIKOM dengan tema solusi digital bagi permasalahan nyata. Tantangan lomba menuntut tim menyelesaikan siklus desain penuh: menentukan masalah, meriset pengguna, merancang solusi, hingga mempresentasikan prototipe interaktif di depan juri.',
      facts: [
        { k: 'Event', v: 'Lomba UI/UX Universitas AMIKOM' },
        { k: 'Pencapaian', v: 'Finalis 5 Besar' },
        { k: 'Jenis produk', v: 'Prototipe aplikasi mobile interaktif' },
        { k: 'Deliverable lomba', v: 'Prototipe, dokumen studi kasus, dan presentasi' },
      ],
      goals: [
        'Memilih masalah yang spesifik, relevan, dan dapat diukur dampaknya.',
        'Menunjukkan alasan di balik setiap keputusan desain, bukan sekadar tampilan.',
        'Menyampaikan solusi dengan prototipe yang bisa diuji juri.',
      ],
      scope: [
        'Riset pengguna & analisis masalah',
        'User flow, wireframe, dan prototipe berfidelitas tinggi',
        'Design system ringan (warna, tipografi, komponen)',
        'Presentasi dan dokumentasi studi kasus',
      ],
    },
    problem: {
      quote: 'Aku butuh solusi yang jelas dipakai di mana, oleh siapa, dan kenapa itu lebih baik dari cara yang ada sekarang.',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Pengguna harus berpindah banyak aplikasi atau cara untuk menyelesaikan satu kebutuhan.',
          'Informasi penting tidak tersaji dengan hierarki yang memandu keputusan.',
          'Antarmuka yang ada belum mengakomodasi pengguna dengan kemampuan dan konteks yang beragam.',
        ],
      },
      business: {
        title: 'Tantangan lomba',
        points: [
          'Waktu terbatas menuntut prioritas yang tegas pada fitur inti.',
          'Juri menilai kedalaman riset, kejelasan alur, konsistensi visual, dan kualitas presentasi.',
          'Solusi harus terasa layak diwujudkan, bukan hanya konsep.',
        ],
      },
      hmw: 'Bagaimana kami menyatukan kebutuhan inti pengguna ke dalam satu pengalaman sederhana yang bisa dipahami juri dalam beberapa menit?',
    },
    research: {
      methods: [
        { title: 'Riset sekunder', desc: 'Mengumpulkan data dan studi yang mendukung skala dan urgensi masalah.' },
        { title: 'Wawancara & survei singkat', desc: 'Menggali kebiasaan, hambatan, dan ekspektasi calon pengguna.' },
        { title: 'Analisis kompetitor', desc: 'Memetakan celah pada solusi yang sudah ada.' },
      ],
      insights: [
        { title: 'Fokus pada satu masalah inti', desc: 'Solusi yang melebar justru melemahkan cerita dan membingungkan pengguna.' },
        { title: 'Kejelasan mengalahkan fitur', desc: 'Pengguna lebih menghargai alur singkat daripada fitur yang banyak.' },
        { title: 'Aksesibilitas sebagai nilai tambah', desc: 'Kontras, ukuran sentuh, dan teks jelas memperluas jangkauan pengguna.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Satu tujuan per layar', desc: 'Setiap layar punya aksi utama yang jelas dan dapat diselesaikan cepat.' },
        { title: 'Visual berani, hierarki tegas', desc: 'Warna merah dan lime memandu perhatian ke elemen terpenting.' },
        { title: 'Alasan di balik keputusan', desc: 'Dokumentasi menjelaskan “mengapa” sehingga juri mengikuti logika desain.' },
      ],
      process: [
        { title: 'Define', desc: 'Merumuskan problem statement dan kriteria keberhasilan.' },
        { title: 'Ideate', desc: 'Mengeksplorasi alur, memilih yang paling sederhana dan berdampak.' },
        { title: 'Prototype', desc: 'Membangun prototipe interaktif di Figma lengkap dengan transisi.' },
        { title: 'Test & present', desc: 'Menguji cepat pada beberapa orang dan menyusun narasi presentasi.' },
      ],
      decisions: [
        { title: 'Onboarding singkat', why: 'Pengguna baru langsung memahami nilai utama tanpa membaca panjang.' },
        { title: 'Navigasi bawah dengan 4 tab', why: 'Mudah dijangkau satu tangan dan mengurangi beban kognitif.' },
        { title: 'Komponen yang konsisten', why: 'Mempercepat pembuatan layar dan memperkuat kesan profesional.' },
      ],
      persona: {
        name: 'Pengguna utama',
        role: 'Pengguna ponsel aktif dengan kebutuhan spesifik',
        goals: ['Menyelesaikan tugas inti dengan cepat', 'Merasa yakin pada informasi yang ditampilkan'],
        pains: ['Alur terlalu panjang', 'Antarmuka terasa membingungkan'],
      },
    },
    deliverables: [
      { title: 'Problem & research board', caption: 'Ringkasan masalah, temuan, dan peluang solusi.' },
      { title: 'User flow', caption: 'Alur utama dari onboarding hingga aksi inti.' },
      { title: 'Wireframe', caption: 'Eksplorasi struktur layar dan prioritas konten.' },
      { title: 'Prototipe hi-fi', caption: 'Layar utama dengan interaksi dan transisi.' },
      { title: 'Design system', caption: 'Warna, tipografi, ikon, dan komponen.' },
      { title: 'Slide presentasi final', caption: 'Narasi yang disampaikan di depan juri.' },
    ],
    palette: [
      { name: 'Vision Red', hex: '#E8112D' },
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Ink', hex: '#0C0C0C' },
      { name: 'Smoke', hex: '#2B2B2B' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Waktu terbatas', problem: 'Seluruh siklus desain harus selesai dalam masa lomba yang singkat.', action: 'Menetapkan prioritas fitur, pembagian tugas jelas, dan jadwal checkpoint harian.' },
      { title: 'Menjaga fokus masalah', problem: 'Banyak ide fitur menarik yang berisiko mengaburkan solusi inti.', action: 'Menggunakan problem statement sebagai filter untuk setiap fitur.' },
      { title: 'Presentasi yang meyakinkan', problem: 'Desain bagus perlu cerita yang kuat agar nilai solusi terlihat.', action: 'Menyusun alur presentasi: masalah → riset → solusi → bukti → dampak.' },
    ],
    impact: {
      headline: 'Mengantar tim menjadi Finalis 5 Besar Lomba UI/UX AMIKOM.',
      metrics: [
        { value: '5 Besar', label: 'Finalis nasional AMIKOM' },
        { value: '4', label: 'Tahap proses desain' },
        { value: '1', label: 'Prototipe interaktif lengkap' },
      ],
      reflections: [
        'Lomba mengajarkan bahwa cerita di balik desain sama pentingnya dengan visualnya.',
        'Keterbatasan waktu melatih keberanian memangkas fitur demi kejelasan.',
        'Selanjutnya: mengasah pengujian kegunaan agar klaim solusi didukung data pengguna.',
      ],
    },
  },

  {
    slug: 'akseskota',
    title: 'AksesKota',
    tagline: 'Solusi aksesibilitas fasilitas kota bagi penyandang disabilitas, yang meraih Harapan 1 Lomba UI/UX Universitas Jember.',
    kind: 'Mobile App',
    year: '2025',
    category: 'Lomba',
    badge: 'Harapan 1',
    color: '#ff3a12',
    burst: '#d9f20e',
    meta: {
      role: 'UI/UX Designer',
      duration: 'Masa lomba (± 3–4 minggu)',
      team: 'Tim lomba UI/UX',
      platform: 'Mobile (Android & iOS)',
      tools: ['Fg', 'Ai'],
    },
    context: {
      summary:
        'AksesKota menjawab tema lomba tentang kota inklusif. Banyak fasilitas publik yang secara fisik tersedia namun tidak benar-benar dapat diakses penyandang disabilitas karena informasi yang tidak akurat. Aplikasi ini memetakan kondisi aksesibilitas fasilitas kota secara kolaboratif agar pengguna bisa merencanakan perjalanan dengan percaya diri.',
      facts: [
        { k: 'Event', v: 'Lomba UI/UX Universitas Jember' },
        { k: 'Pencapaian', v: 'Harapan 1' },
        { k: 'Jenis produk', v: 'Aplikasi pemetaan aksesibilitas fasilitas kota' },
        { k: 'Pengguna utama', v: 'Penyandang disabilitas, pendamping, dan pengelola fasilitas' },
      ],
      goals: [
        'Memberikan informasi aksesibilitas yang akurat dan mudah dipahami sebelum bepergian.',
        'Melibatkan komunitas dalam memperbarui kondisi fasilitas.',
        'Merancang antarmuka yang benar-benar dapat dipakai beragam kebutuhan.',
      ],
      scope: [
        'Riset kebutuhan beragam ragam disabilitas',
        'Desain peta, penilaian, dan ulasan aksesibilitas',
        'Pedoman aksesibilitas (kontras, ukuran sentuh, label)',
        'Prototipe interaktif dan presentasi',
      ],
    },
    problem: {
      quote: 'Tempatnya katanya ramah kursi roda, tapi sampai sana ternyata tangganya tinggi dan tidak ada ramp.',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Informasi aksesibilitas tidak tersedia atau tidak akurat di aplikasi peta umum.',
          'Perjalanan harus direncanakan dengan bantuan orang lain karena risiko hambatan yang tidak terduga.',
          'Kebutuhan tiap pengguna berbeda (mobilitas, penglihatan, pendengaran) namun informasi disajikan seragam.',
        ],
      },
      business: {
        title: 'Tantangan solusi',
        points: [
          'Data harus tetap segar tanpa membebani satu pihak saja.',
          'Antarmuka harus memenuhi prinsip aksesibilitas sejak awal, bukan sebagai tambahan.',
          'Perlu insentif dan kepercayaan agar komunitas mau berkontribusi.',
        ],
      },
      hmw: 'Bagaimana kami membantu penyandang disabilitas menilai kelayakan akses sebuah fasilitas sebelum berangkat, dengan informasi yang dapat dipercaya?',
    },
    research: {
      methods: [
        { title: 'Riset literatur & regulasi', desc: 'Mempelajari standar aksesibilitas fasilitas publik dan pedoman WCAG sebagai acuan antarmuka.' },
        { title: 'Wawancara empatik', desc: 'Menggali pengalaman hambatan dan strategi yang sudah dilakukan pengguna.' },
        { title: 'Analisis aplikasi peta', desc: 'Menemukan celah informasi aksesibilitas pada aplikasi yang ada.' },
      ],
      insights: [
        { title: 'Informasi harus spesifik', desc: 'Label umum seperti “ramah disabilitas” tidak cukup; pengguna butuh detail: ramp, lift, toilet, jalur taktil.' },
        { title: 'Filter berdasarkan kebutuhan', desc: 'Setiap pengguna menyaring berdasarkan profil kebutuhan mereka sendiri.' },
        { title: 'Kepercayaan lewat verifikasi', desc: 'Foto, tanggal pembaruan, dan penilaian komunitas menjadi sinyal keandalan.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Dirancang untuk beragam kebutuhan', desc: 'Profil aksesibilitas mempersonalisasi hasil dan peringatan.' },
        { title: 'Kejelasan sebelum estetika', desc: 'Kontras tinggi, teks besar, label eksplisit, dan area sentuh luas.' },
        { title: 'Komunitas sebagai sumber data', desc: 'Ulasan terstruktur dengan foto dan tanggal membangun kepercayaan.' },
      ],
      process: [
        { title: 'Empathize', desc: 'Memahami kebutuhan lewat wawancara dan studi kasus.' },
        { title: 'Define & ideate', desc: 'Merumuskan kriteria aksesibilitas dan mengeksplorasi fitur inti.' },
        { title: 'Prototype', desc: 'Membangun alur: pilih profil → cari tempat → lihat rincian akses → rencana rute.' },
        { title: 'Evaluate', desc: 'Memeriksa kontras, ukuran sentuh, dan keterbacaan sesuai pedoman.' },
      ],
      decisions: [
        { title: 'Profil aksesibilitas saat onboarding', why: 'Hasil pencarian relevan sejak layar pertama.' },
        { title: 'Skor akses berbasis ikon & teks', why: 'Tidak mengandalkan warna saja sehingga inklusif bagi buta warna.' },
        { title: 'Ulasan terstruktur', why: 'Format checklist mempercepat kontribusi dan menjaga kualitas data.' },
      ],
      persona: {
        name: 'Bu Sari, 45',
        role: 'Pengguna kursi roda & pekerja kantoran',
        goals: ['Memastikan tempat dapat diakses sebelum berangkat', 'Mencari jalur yang aman dan datar'],
        pains: ['Informasi akses tidak akurat', 'Terpaksa bergantung pada bantuan orang lain'],
      },
    },
    deliverables: [
      { title: 'Empathy map & persona', caption: 'Pemahaman mendalam kebutuhan beragam pengguna.' },
      { title: 'User flow', caption: 'Dari profil aksesibilitas hingga perencanaan rute.' },
      { title: 'Peta & detail fasilitas', caption: 'Skor akses, rincian fitur, foto, dan ulasan.' },
      { title: 'Kontribusi komunitas', caption: 'Form ulasan terstruktur dan verifikasi.' },
      { title: 'Pedoman aksesibilitas', caption: 'Kontras, tipografi, ukuran sentuh, dan label.' },
      { title: 'Presentasi final', caption: 'Narasi inklusivitas dan dampak sosial.' },
    ],
    palette: [
      { name: 'Access Orange', hex: '#FF3A12' },
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Ink', hex: '#0C0C0C' },
      { name: 'Graphite', hex: '#2B2B2B' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Merancang untuk beragam kebutuhan', problem: 'Solusi untuk satu kelompok bisa menghambat kelompok lain.', action: 'Menggunakan profil kebutuhan dan menyediakan informasi dalam beberapa bentuk (teks, ikon, suara).' },
      { title: 'Menjaga keandalan data', problem: 'Data buatan komunitas rawan tidak akurat.', action: 'Merancang tanggal pembaruan, foto bukti, dan moderasi sebagai bagian alur.' },
      { title: 'Kontras vs identitas visual', problem: 'Warna cerah berisiko mengurangi keterbacaan.', action: 'Menguji kombinasi warna terhadap rasio kontras dan menyesuaikan penggunaan aksen.' },
    ],
    impact: {
      headline: 'Meraih Harapan 1 Lomba UI/UX Universitas Jember dengan solusi yang berpusat pada inklusivitas.',
      metrics: [
        { value: 'Harapan 1', label: 'Lomba UI/UX Universitas Jember' },
        { value: '3', label: 'Pilar: profil, peta, komunitas' },
        { value: '1', label: 'Pedoman aksesibilitas terdokumentasi' },
      ],
      reflections: [
        'Aksesibilitas bukan fitur tambahan, melainkan fondasi dari setiap keputusan desain.',
        'Empati yang dalam menghasilkan solusi yang lebih spesifik dan berdampak.',
        'Selanjutnya: menguji langsung bersama pengguna disabilitas untuk memvalidasi prototipe.',
      ],
    },
  },

  {
    slug: 'project-pkl',
    title: 'Project PKL',
    tagline: 'Dashboard internal yang dibangun saat praktik kerja lapangan: dari data mentah menjadi tampilan yang membantu tim mengambil keputusan.',
    kind: 'Dashboard',
    year: '2025',
    category: 'PKL',
    badge: 'Praktik Kerja Lapangan',
    color: '#98a60a',
    burst: '#e8112d',
    meta: {
      role: 'Front-End Developer Intern',
      duration: 'Masa PKL',
      team: 'Tim internal (desain, pengembang, dan pemangku kepentingan)',
      platform: 'Web (desktop)',
      tools: ['Fg', 'HT', 'CS', 'JS', 'Re'],
    },
    context: {
      summary:
        'Selama PKL, aku terlibat membangun dashboard internal yang menyajikan data operasional dalam satu tempat. Sebelumnya, tim mengandalkan spreadsheet dan laporan manual yang membutuhkan waktu untuk dirangkum. Fokusku adalah menerjemahkan desain menjadi antarmuka React yang rapi, cepat, dan mudah dirawat.',
      facts: [
        { k: 'Konteks', v: 'Praktik Kerja Lapangan' },
        { k: 'Jenis produk', v: 'Dashboard internal berbasis web' },
        { k: 'Pengguna', v: 'Tim internal & pengambil keputusan' },
        { k: 'Peran', v: 'Implementasi front-end & kolaborasi dengan tim desain' },
      ],
      goals: [
        'Mengganti rekap manual dengan tampilan data yang selalu diperbarui.',
        'Menjaga konsistensi UI melalui komponen yang dapat dipakai ulang.',
        'Membuat dashboard mudah dipindai oleh pengguna non-teknis.',
      ],
      scope: [
        'Membaca dan memahami spesifikasi desain',
        'Membangun komponen React (tabel, kartu metrik, filter, grafik)',
        'Integrasi data dari API/dummy dan penanganan state',
        'Perbaikan berdasarkan masukan tim',
      ],
    },
    problem: {
      quote: 'Aku cuma butuh tahu kondisi hari ini tanpa harus membuka lima file berbeda.',
      user: {
        title: 'Masalah pengguna',
        points: [
          'Data tersebar di beberapa spreadsheet dengan format yang berbeda.',
          'Menemukan angka penting memerlukan banyak langkah dan rawan salah baca.',
          'Tidak ada pembaruan otomatis, sehingga keputusan bergantung pada data lama.',
        ],
      },
      business: {
        title: 'Masalah organisasi',
        points: [
          'Rekap manual menghabiskan jam kerja yang bisa dipakai untuk analisis.',
          'Inkonsistensi data antar tim memicu diskusi berulang.',
          'Antarmuka internal sering terabaikan sehingga sulit dirawat.',
        ],
      },
      hmw: 'Bagaimana kami menyajikan data operasional agar dapat dipahami dalam sekilas dan dapat ditindaklanjuti?',
    },
    research: {
      methods: [
        { title: 'Observasi alur kerja', desc: 'Mengamati bagaimana tim membaca dan merangkum data setiap hari.' },
        { title: 'Diskusi dengan pemangku kepentingan', desc: 'Menentukan metrik utama dan prioritas informasi.' },
        { title: 'Review spesifikasi desain', desc: 'Menilai kelayakan implementasi dan mengusulkan penyederhanaan.' },
      ],
      insights: [
        { title: 'Metrik utama harus di atas', desc: 'Pengguna ingin melihat angka kunci tanpa menggulir.' },
        { title: 'Filter menentukan kegunaan', desc: 'Rentang waktu dan kategori adalah dua filter yang paling sering dipakai.' },
        { title: 'Konsistensi mempercepat belajar', desc: 'Pola tabel dan kartu yang seragam membuat halaman baru langsung dipahami.' },
      ],
    },
    solution: {
      principles: [
        { title: 'Ringkas lalu rinci', desc: 'Kartu metrik di atas, tren di tengah, tabel detail di bawah.' },
        { title: 'Komponen dapat dipakai ulang', desc: 'Satu komponen untuk banyak halaman agar mudah dirawat.' },
        { title: 'Performa terasa cepat', desc: 'Pemuatan bertahap dan state loading yang jelas.' },
      ],
      process: [
        { title: 'Analisis desain', desc: 'Memecah desain menjadi komponen dan merencanakan struktur proyek.' },
        { title: 'Pembangunan komponen', desc: 'Mengembangkan komponen dasar dan menyusunnya menjadi halaman.' },
        { title: 'Integrasi data', desc: 'Menghubungkan komponen dengan data, filter, dan paginasi.' },
        { title: 'Review & iterasi', desc: 'Memperbaiki berdasarkan masukan desain dan pengguna internal.' },
      ],
      decisions: [
        { title: 'Struktur komponen atomik', why: 'Mempercepat pembuatan halaman baru dan menjaga konsistensi.' },
        { title: 'State loading, kosong, dan error', why: 'Pengguna selalu tahu apa yang terjadi pada data.' },
        { title: 'Tabel dengan sorting & pencarian', why: 'Mempermudah menemukan data tanpa meninggalkan halaman.' },
      ],
      persona: {
        name: 'Pak Andi, 38',
        role: 'Manajer operasional',
        goals: ['Memantau kondisi harian dengan cepat', 'Mengambil keputusan berbasis data terbaru'],
        pains: ['Harus membuka banyak file', 'Data sering tidak konsisten'],
      },
    },
    deliverables: [
      { title: 'Analisis desain → komponen', caption: 'Pemetaan elemen desain ke komponen React.' },
      { title: 'Halaman ringkasan', caption: 'Kartu metrik, tren, dan aktivitas terbaru.' },
      { title: 'Tabel data', caption: 'Pencarian, sorting, filter, dan paginasi.' },
      { title: 'State antarmuka', caption: 'Loading, kosong, dan error.' },
      { title: 'Pustaka komponen', caption: 'Tombol, input, kartu, dan badge yang dapat dipakai ulang.' },
      { title: 'Dokumentasi singkat', caption: 'Panduan struktur proyek untuk tim.' },
    ],
    palette: [
      { name: 'Olive', hex: '#98A60A' },
      { name: 'Neon Lime', hex: '#D9F20E' },
      { name: 'Alert Red', hex: '#E8112D' },
      { name: 'Ink', hex: '#161616' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    type: { display: 'Chewy', body: 'Plus Jakarta Sans' },
    challenges: [
      { title: 'Menerjemahkan desain ke kode', problem: 'Beberapa detail desain sulit diimplementasikan secara konsisten.', action: 'Berdiskusi dengan desainer, menyepakati token dan komponen, serta menyederhanakan di titik yang tepat.' },
      { title: 'Belajar dalam waktu singkat', problem: 'Perlu menguasai alur kerja tim dan tools baru dengan cepat.', action: 'Membuat daftar prioritas belajar dan meminta review kode secara rutin.' },
      { title: 'Data yang tidak seragam', problem: 'Format data berbeda memengaruhi tampilan.', action: 'Menambahkan lapisan normalisasi data sebelum dirender.' },
    ],
    impact: {
      headline: 'Pengalaman pertama membangun produk internal bersama tim nyata.',
      metrics: [
        { value: '4', label: 'Tahap kerja: analisis → iterasi' },
        { value: '5+', label: 'Komponen dapat dipakai ulang' },
        { value: '3', label: 'State UI dirancang (loading, kosong, error)' },
      ],
      reflections: [
        'Kolaborasi desain–kode berjalan lancar bila ada bahasa bersama: komponen dan token.',
        'Kode yang rapi dan terdokumentasi sama pentingnya dengan tampilan yang menarik.',
        'Selanjutnya: menambah uji otomatis dan pengukuran performa.',
      ],
    },
  },
];

