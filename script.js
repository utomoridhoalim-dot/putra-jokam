'use strict';
// Nomor WhatsApp format internasional: ganti 0 pertama dengan 62.
const whatsappNumber = '6281575385682';
const defaultMessage = 'Assalamualaikum Pak Nasrudhin, saya ingin bertanya tentang layanan pijat Putra Jokam. Apakah ada jadwal yang tersedia?';
document.querySelectorAll('a.wa').forEach((link) => {
  let message = defaultMessage;
  if (link.dataset.service) {
    message = `Assalamualaikum Pak Nasrudhin, saya ingin bertanya tentang layanan ${link.dataset.service} di Putra Jokam. Berapa biayanya dan kapan jadwal yang tersedia?`;
  }
  if (link.dataset.location) {
    message = 'Assalamualaikum Pak Nasrudhin, boleh minta titik lokasi Pijat Urut Putra Jokam di Karangturi, Indramayu Kota?';
  }
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.getElementById('year').textContent = new Date().getFullYear();
