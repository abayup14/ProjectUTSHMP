import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = [
    {
      judul: "Listrik Padam di Wilayah Surabaya Timur",
      deskripsi: "Hari ini, saya dan sejumlah warga Surabaya Timur dikejutkan oleh insiden listrik padam yang tiba-tiba terjadi. Suasana kaget dan kekhawatiran langsung menyelimuti pikiran saya ketika lampu-lampu di sekitar kami mati secara bersamaan. Pemadaman ini tidak hanya menimbulkan ketidaknyamanan, tetapi juga mengganggu jalannya aktivitas harian kami.",
      url_gambar: "https://purisuryajaya.com/wp-content/uploads/2020/07/Listrik-Bawah-Tanah.jpg",
      tujuan_instansi: "PLN",
      tanggal: new Date(2024, 3, 16).toISOString(),
      jumlah_like: 4,
      comment: ["Semoga PLN bisa cepat memperbaiki masalah ini. Kita semua butuh listrik untuk aktivitas sehari-hari.",
                "Kok sering banget ya listrik padam di Surabaya Timur? Harusnya ada langkah konkret dari PLN untuk mengatasi ini.",
                "Pernah dengar tentang rencana pemadaman listrik tapi nggak pernah dikabari jadinya repot. Komunikasi PLN harus lebih baik lagi."],
    },
    {
      judul: "",
      deskripsi: "",
      url_gambar: "",
      tujuan_instansi: "",
      tanggal: ""
    },
  ]

  constructor() { }
}
