// galeri.js — interaksi galeri UMKM Azenka

// ES6 #1 — konstanta
const gambar = document.querySelectorAll('.galeri-img');

// ES6 #2 — arrow function
const tampilkanNama = (element) => {
  const caption = element.nextElementSibling;
  caption.textContent = element.dataset.name;
  caption.classList.remove("hidden"); // tampilkan caption
};

// ES6 #3 — forEach
gambar.forEach(img => {

  // Klik → tampilkan nama produk
  img.addEventListener("click", () => {
    tampilkanNama(img);
  });

  // Hover → glowing effect
  img.addEventListener("mouseenter", () => {
    img.classList.add("hover-glow"); // ES6 #4 classList
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("hover-glow");
  });

});
