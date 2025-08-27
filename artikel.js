const artikelData = [
  {
    judul: "Membagikan informasi positif melalui media digital.",
    deskripsi: "Bagaimana cara membedakan informasi positif dan negatif di media digital.",
    isi: `
      <p>
        Pada zaman sekarang kan banyak banget nih informasi yang kita dapat dari media digital nah kadangkan kita bingung nih bagaimana cara membedakan informasi positif dan negatifnya.

       <ul>
       <li><b>1. cari informasinya lebih dalam</b></li>
       -Maksudnya kan banyak nih informasi yang belum tentu benar dari sumbernya jadi kita jangan terpaku dari satu sumber</li>
       <li><b>2. coba lihat tanggapan orang-orang yang mengetahui</b></li>
       -Maksudnya kan banyak nih informasi yang belum tentu benar dari tanggapannya atau komentarnya lebih baik kita lebih menelaah lagi sebelum berkomentar</li>
      <li><b>3. coba lihat perkembangannya</b></li>
       -Maksudnya kan banyak nih informasi yang belum tentu benar dari saat waktu informasinya beredar luas lebih baik kita lihat dan menunggu bagaimana perkembangannya</li>
      </p>
    `
  },
  {
    judul: "Membagikan informasi positif melalui media digital.",
    deskripsi: "tips praktis membagikan informasi positif melalui media digital.",
    isi: `
      <p>
        <li><b>1. Gunakan bahasa yang sopan</b></li>
       -Maksudnya tidak semua bahasa itu sopan lebih baik menggunakan bahasa indonesia yang baku dan mudah di pahami</li>
       <li><b>2. Bagikan informasi yang bermanfaat</b></li>
       -misalnya berbagi cara membuat bisnis sendiri atau hal-hal yang bermanfaat bagi kita semua seperti lifehack atau tutorial dan lain-lain</li>
      <li><b>3. Periksa sumber dan fakta sebelum membagikan</b></li>
       -Maksudnya sebelum kita membagikan suatu informasi lebih baik kita mencari dan menyaring dahulu sumber informasi yang kita peroleh sebelum kita bagikan</li>
      </p>
    `
  },
  {
    judul: "Membagikan informasi positif melalui media digital.",
    deskripsi: "bijak dalam memilih konten.",
    isi: `
      <p>
        <li><b>1. unsur konten</b></li>
       -Maksudnya memilah dan memilih konten sangat berpengaruh kepada pola pikir kita karna pada jaman sekarang banyak konten yang bersifat ai dan tidak masuk akal manusia</li>
       <li><b>2. hindari konten yang berbau negatif</b></li>
       -misalnya konten yang berbau negatif seperti forno, judi online, dan hal-hal yang membuat kita merasakan dampak negatif bisa mempengaruhi kinerja otak</li>
      <li><b>3. tontonlah konten yang berbau value</b></li>
       -Maksudnya konten yang berisi tentang informasi pembelajaran dan pengajaran tentang suatu skils atau informasi untuk masa depan</li>
      </p>
    `
  },
];

function renderList() {
  const container = document.querySelector('.profile-container');
  if (!container) return;
  container.innerHTML = `
    <h2>Artikel Terbaru</h2>
    <div class="artikel-list"></div>
  `;
  const list = container.querySelector('.artikel-list');
  artikelData.forEach((art, idx) => {
    const item = document.createElement('div');
    item.className = 'artikel-item';
    item.innerHTML = `
      <h3>${art.judul}</h3>
      <p>${art.deskripsi}</p>
      <button class="btn-artikel" data-idx="${idx}">Lihat Isi</button>
    `;
    list.appendChild(item);
  });
}

function renderIsi(idx) {
  const container = document.querySelector('.profile-container');
  if (!container) return;
  const art = artikelData[idx];
  container.innerHTML = `
    <button class="btn-artikel" id="backBtn">&larr; Kembali ke Daftar</button>
    <div class="artikel-item">
      <h2>${art.judul}</h2>
      ${art.isi}
    </div>
  `;
  document.getElementById('backBtn').onclick = () => {
    renderList();
    attachListeners();
  };
}

function attachListeners() {
  document.querySelectorAll('.btn-artikel[data-idx]').forEach(btn => {
    btn.onclick = function() {
      renderIsi(this.getAttribute('data-idx'));
    };
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderList();
  attachListeners();
});