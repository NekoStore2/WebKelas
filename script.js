function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

const piket = {
  "Senin": ["A", "B", "C", "D"],
  "Selasa": ["E", "F", "G", "H"],
  "Rabu": ["I", "J", "K", "L"],
  "Kamis": ["M", "N", "O", "P"],
  "Jumat": ["Q", "R", "S", "T"]
};

const pelajaran = {
  "Senin": ["07.00-08.30: Matematika", "08.30-10.00: Bahasa Indonesia", "10.30-12.00: Sejarah"],
  "Selasa": ["07.00-08.30: IPA", "08.30-10.00: IPS", "10.30-12.00: Bahasa Inggris"],
  "Rabu": ["07.00-08.30: Seni Budaya", "08.30-10.00: PJOK", "10.30-12.00: Prakarya"],
  "Kamis": ["07.00-08.30: Agama", "08.30-10.00: TIK", "10.30-12.00: Kewirausahaan"],
  "Jumat": ["07.00-08.30: Pendidikan Pancasila", "08.30-10.00: Bahasa Jawa", "10.30-12.00: Kelas Meeting"]
};

function showPiket() {
  const hari = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const container = document.getElementById('jadwal-piket');
  if (hari === "Sabtu" || hari === "Minggu") {
    container.innerHTML = '<p>Libur Sekolah</p>';
  } else {
    container.innerHTML = piket[hari].map(name => `<p>${name}</p>`).join('');
  }
}

function showPelajaran() {
  const hari = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const container = document.getElementById('jadwal-pelajaran');
  if (hari === "Sabtu" || hari === "Minggu") {
    container.innerHTML = '<p>Libur Sekolah</p>';
  } else {
    container.innerHTML = pelajaran[hari].map(item => `<p>${item}</p>`).join('');
  }
}
