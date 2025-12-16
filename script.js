document.getElementById('orderBtn').addEventListener('click', function(){
  const wa = 'https://wa.me/6281234567890?text=' + encodeURIComponent('Halo, saya ingin memesan Gamis Azenka Classic.');
  window.open(wa, '_blank');
});
// 1. Nama UMKM (pakai const)
const namaUMKM = "Azenka";

// 2. Jumlah produk awal (pakai let)
let jumlahProduk = 10;
console.log("Jumlah produk awal:", jumlahProduk);

// Modifikasi jumlah produk
jumlahProduk += 5;
console.log("Jumlah produk setelah penambahan:", jumlahProduk);

// 3. Variabel tambahan (misal jumlah produk berdasarkan jenis)
let produkGamis = 8;
let produkOneSet = 7;
let totalProduk = produkGamis + produkOneSet;
console.log("Total produk berdasarkan jenis:", totalProduk);

// Alert untuk menyapa pengguna
alert("Selamat datang di " + namaUMKM + "! Temukan keanggunan dalam setiap gamis kami 💫");

// CEK KATEGORI USIA (Percabangan + Validasi)
function cekUsia() {
  let usia = document.getElementById("usiaInput").value;

  if (usia === "" || isNaN(usia) || usia < 0) {
    alert("Masukkan usia yang valid!");
    return;
  }
  usia = Number(usia);
  let kategori = "";
  if (usia < 13) kategori = "Anak-anak";
  else if (usia <= 17) kategori = "Remaja";
  else if (usia <= 60) kategori = "Dewasa";
  else kategori = "Lansia";
  document.getElementById("usiaResult").innerText = "Kategori: " + kategori;
}

// ARRAY + LOOPING (Testimoni awal dari sistem)
const testimonis = [
  "Bahan adem dan jatuh 😍",
  "Model elegan, cocok untuk acara formal ✨",
  "Warna pastel-nya lembut banget 💕",
  "Harga terjangkau, kualitas premium ⭐",
  "Super puas, pengiriman cepat & rapi 🚚"
];
function tampilkanTestimoniAwal() {
  let html = "";
  testimonis.forEach((pesan, i) => {
    html += `<p>${i + 1}. ${pesan}</p>`;
  });
  document.getElementById("testimoniList").innerHTML = html;
}
// panggil otomatis saat page dibuka
tampilkanTestimoniAwal();
// TAMBAH TESTIMONI MANUAL DARI USER
function tambahTestimoni() {
  const input = document.getElementById("testiInput").value;
  if (input.trim() === "") {
    alert("Testimoni tidak boleh kosong!");
    return;
  }
  testimonis.push(input); // simpan ke array
  tampilkanTestimoniAwal(); // refresh daftar testimoni
  document.getElementById("testiInput").value = ""; // reset input
  alert("Terima kasih atas testimoni Anda 🤍");
}

// HITUNG TOTAL BELANJA (Fungsi + Validasi)
function hitungBelanja() {
  const harga = 250000; // harga gamis
  let jumlah = document.getElementById("jumlahInput").value;
  if (jumlah === "" || isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah pembelian yang valid!");
    return;
  }
  jumlah = Number(jumlah);
  const total = harga * jumlah;
  document.getElementById("totalResult").innerText = 
    `Total Belanja: Rp ${total.toLocaleString("id-ID")}`;
}
