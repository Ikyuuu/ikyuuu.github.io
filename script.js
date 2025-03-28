document.getElementById('exploreBtn').addEventListener('click', function () {
  alert('Selamat Menjelajahi Keindahan Gunung Bromo!');
});

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Terima Kasih Sudah Menghubungi Kami!');
});

// Galeri gambar dengan Navigasi
const galleryImages = document.querySelector('.gallery-images');
const images = galleryImages.children;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const totalImages = images.length;

// Atur lebar container galeri sesuai jumlah gambar
function updateGallery() {
  const imageWidth = images[0].clientWidth;
  galleryImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Navigasi ke Gambar Sebelumnya
prevBtn.addEventListener('click', function () {
  if (currentIndex === 0) {
      currentIndex = totalImages - 1; // Kembali ke gambar terakhir
  } else {
      currentIndex--;
  }
  updateGallery();
});

// Navigasi ke Gambar Berikutnya
nextBtn.addEventListener('click', function () {
  if (currentIndex === totalImages - 1) {
      currentIndex = 0; // Kembali ke gambar pertama
  } else {
      currentIndex++;
  }
  updateGallery();
});

// Feather icon replacement
feather.replace();
