const artikelData = [
  {
    judul: "Gong Golek",
    deskripsi: "Gong Golek.",
    isi: `
      <p>
        Gong Golek
      </p>
    `
  },
  {
    judul: "Gong Golek",
    deskripsi: "Gong Golek.",
    isi: `
      <p>
        Gong Golek
      </p>
    `
  },
  {
    judul: "Gong Golek",
    deskripsi: "Gong Golek.",
    isi: `
      <p>
        Gong Golek
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