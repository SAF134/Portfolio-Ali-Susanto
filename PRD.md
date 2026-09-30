# Product Requirement Document (PRD) — Final Specification
**Produk:** Website Portfolio Eksekutif — Ali Susanto, S.Pt., M.Si.  
**Versi:** 1.1 (Final MVP Specification)  
**Status:** Approved by Stakeholder  
**Role:** Senior Product Manager  
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vercel

---

## 1. Problem Statement

### Latar Belakang & Pihak yang Terdampak
1. **Tokoh Utama (Bapak Ali Susanto, S.Pt., M.Si.):**
   * Memiliki rekam jejak dedikasi lebih dari 3 dekade di bidang perkoperasian, ketahanan pangan, dan birokrasi pemerintahan daerah Kota Bogor & Jawa Barat.
   * Rekam jejak kepemimpinan yang luas (22+ posisi kerja strategis dan 10 riwayat organisasi) selama ini tersimpan dalam format dokumen konvensional (`BIODATA.md` / tabel cetak). Format ini kaku, tidak ramah perangkat modern, dan belum mencerminkan profil seorang eksekutif pengawas koperasi senior.
2. **Audiens Umum & Pemangku Kepentingan Presentasi (Stakeholders):**
   * Saat Bapak Ali menjadi narasumber seminar, memimpin sidang/rapat kerja koperasi, atau menghadiri pertemuan dinas, audiens membutuhkan referensi digital satu pintu (*single source of truth*) yang cepat diakses melalui ponsel atau ditayangkan di layar proyektor.

### Nilai Tambah Produk
Menghadirkan representasi digital satu halaman (*single-page vertical scroll*) yang elegan, kredibel, anti-generik (*anti-slop*), berkecepatan tinggi, dan dapat langsung dihubungi melalui kanal resmi WhatsApp.

---

## 2. Target User & Persona

### Target User Utama
Publik umum, mitra gerakan koperasi & UMKM, peserta seminar/forum kedinasan, jajaran instansi pemerintahan, serta panitia penyelenggara acara yang membutuhkan profil narasumber terpercaya untuk bahan tayang presentasi.

---

### Persona 1: Mitra Kerja & Pemangku Kepentingan Daerah
| Atribut | Keterangan |
| :--- | :--- |
| **Nama / Peran** | **Drs. Bambang Haryadi (52 tahun)** — Ketua Forum Koperasi Daerah |
| **Konteks** | Memerlukan verifikasi rekam jejak kepemimpinan Pak Ali sebelum penunjukan dewan pengawas gabungan. |
| **Pain Point** | Membaca riwayat kerja dalam berkas PDF berlembar-lembar di ponsel sangat melelahkan dan sering lambat dimuat. |
| **Kebutuhan Utama** | Tampilan ringkasan jabatan terkini, riwayat pengabdian di dinas & koperasi secara runut, serta tombol kontak langsung ke WhatsApp Pak Ali. |

---

### Persona 2: Panitia Acara & Audiens Presentasi
| Atribut | Keterangan |
| :--- | :--- |
| **Nama / Peran** | **Anisa Putri (27 tahun)** — Tim Dokumentasi & Acara Seminar Nasional UMKM |
| **Konteks** | Bertugas memproyeksikan profil narasumber di layar panggung sebelum Pak Ali memberikan materi paparan. |
| **Pain Point** | Slide profil statis sering kali tampak generik, kusam, dan teksnya sulit dibaca dari kejauhan. |
| **Kebutuhan Utama** | Halaman web modern, bersih, dengan tipografi tegas, kartu estetik, dan navigasi mulus yang dapat dibuka di laptop/layar proyektor rapat. |

---

## 3. Goals & Non-Goals

### Goals
* **Single-Page Scrolling Layout:** Halaman web tunggal memanjang ke bawah dengan scroll vertikal mulus, terbagi dalam 5 seksi utama: Profil, Pendidikan, Pengalaman Kerja, Pengalaman Organisasi, dan Sertifikat & Penghargaan.
* **Layout Sesuai Referensi Visual:** Meniru struktur visual referensi (`Desktop.jpeg` & `Mobile.jpeg`) dengan palet warna hitam, putih, biru elegan, latar abu-abu/slate modern dengan kontras tinggi (WCAG AA), dan kartu bergaya shader/glassmorphism halus.
* **Presentasi Data Komprehensif:** Menampilkan seluruh riwayat pendidikan (formal & non-formal), 22 riwayat kerja, dan 10 organisasi dalam bentuk deretan kartu terstruktur tanpa pemangkasan data.
* **Frame Placeholder A4 untuk Sertifikat:** Menyediakan kerangka slot kartu sertifikat visual rasio A4 (1.414 : 1) dengan label keterangan *"Belum ada gambar"*, siap diintegrasikan gambar fisik kapan pun.
* **Frame Placeholder Foto Profil Multi-Rasio:** Menyediakan area foto profil yang adaptif terhadap format 9:16, 16:9, dan 4:3 dengan label *"Belum ada gambar"*.
* **Aksi Kontak Langsung:** Tombol *"Hubungi Saya"* yang mengarah langsung ke WhatsApp dengan nomor `087870926855` lengkap dengan template pesan sapaan resmi.
* **Tombol Unduh CV:** Tombol *"Unduh CV"* yang disiapkan untuk mengunduh berkas fisik CV PDF.
* **Kualitas Teknis Tinggi:** 100% responsif (Mobile, Tablet, Desktop/Proyektor), performa cepat (*zero lag*), skor Lighthouse > 90 (Performance, A11y WCAG AA, Best Practices, SEO).

### Non-Goals
* Tidak membangun dashboard admin atau Content Management System (CMS) login.
* Tidak menyediakan formulir pengiriman email berbasis database/backend API.
* Tidak menyediakan fitur filter interaktif kompleks pada versi 1.0 (seluruh kartu tampil linier memanjang untuk kepentingan presentasi utuh).
* Tidak mendukung multi-bahasa (fokus Bahasa Indonesia di MVP).

---

## 4. User Stories

| No | Format Cerita Pengguna | Kriteria Penerimaan Ringkas |
| :-: | :--- | :--- |
| **US-01** | **Sebagai** audiens umum / peserta seminar,<br>**Saya ingin** melihat ringkasan identitas, placeholder foto profil, dan jabatan utama Pak Ali di area teratas (*Hero Section*),<br>**Supaya** saya segera memahami bidang keahlian dan kapasitas beliau dalam 5 detik pertama. | Area hero memuat nama lengkap, gelar, jabatan utama, status badge aktif, dan kartu foto berbingkai dengan label *"Belum ada gambar"*. |
| **US-02** | **Sebagai** mitra kerja / stakeholder dinas,<br>**Saya ingin** menelusuri seluruh riwayat jabatan struktural dan koperasi secara linier dari yang terbaru ke terlama,<br>**Supaya** saya mendapatkan bukti rekam jejak kepemimpinan beliau secara menyeluruh. | 22 kartu pengalaman kerja tersusun kronologis dengan detail institusi, jabatan, tahun, dan tag sorotan. |
| **US-03** | **Sebagai** audiens yang ingin menjalin komunikasi kedinasan,<br>**Saya ingin** menekan tombol *"Hubungi Saya"*,<br>**Supaya** aplikasi WhatsApp saya langsung terbuka dengan nomor Pak Ali dan draf pesan resmi yang siap dikirim. | Mengarah ke URL universal WhatsApp (`wa.me/6287870926855`) dengan pesan pembuka otomatis. |
| **US-04** | **Sebagai** pengguna ponsel pintar (mobile),<br>**Saya ingin** mengakses navigasi cepat melayang (*floating pill navbar*),<br>**Supaya** saya dapat langsung melompat ke seksi tertentu tanpa harus menggulir layar berulang kali. | Floating navbar tetap mudah dijangkau di bagian atas/bawah layar dan berfungsi mulus (*smooth scroll*). |
| **US-05** | **Sebagai** pemangku kepentingan / pemilik portofolio,<br>**Saya ingin** seksi sertifikat memiliki frame layout rasio A4 (1.414 : 1) dengan label *"Belum ada gambar"*,<br>**Supaya** tata letak halaman tetap rapi dan siap diisi file sertifikat di masa mendatang. | Grid kartu sertifikat memiliki aspek rasio A4 landscape (1.414 : 1) dan tombol aksi detail. |

---

## 5. Functional Requirements Detail

### FR-01: Floating Navigation Bar (Header)
* **Komponen:** Floating glass pill navigation bar di bagian atas viewport.
* **Item Menu:** Profil (`#profil`), Pendidikan (`#pendidikan`), Kerja (`#kerja`), Organisasi (`#organisasi`), Sertifikat (`#sertifikat`).
* **Fitur:** *Backdrop-blur*, transisi halus, indikator seksi aktif berbasis *Intersection Observer*, dan area sentuh minimal 44px di mobile.

### FR-02: Hero & Profile Section
* **Komponen:**
  * Greeting badge: *"Halo, Perkenalkan Saya"* + status ketersediaan aktif.
  * Nama & Gelar: `Ali Susanto, S.Pt., M.Si.`.
  * Jabatan: `Pengawas Koperasi Ahli Madya`.
  * Bio Singkat: Ringkasan naratif pengabdian, keahlian kelembagaan koperasi, dan UMKM.
  * Action Buttons:
    * Tombol *"Unduh CV"* (link file `CV-Ali-Susanto.pdf` dengan atribut `download`).
    * Tombol *"Hubungi Saya"* (direct link ke WhatsApp `087870926855`).
  * Frame Foto Profil:
    * Wadah foto dengan rasio adaptif (pilihan rasio 4:3, 16:9, dan 9:16).
    * Berisi placeholder grafis elegan bergradasi biru-abu-abu dengan label teks: **"Belum ada gambar"**.

### FR-03: Section Riwayat Pendidikan
* Menampilkan 6 pendidikan formal dan 4 pelatihan non-formal dari `BIODATA.md`.
* Disajikan dalam bentuk kartu memanjang dengan ikon akademik, nama instansi, jurusan/fokus, tahun, dan lokasi.

### FR-04: Section Pengalaman Kerja (22 Kartu Linier)
* Menampilkan seluruh 22 riwayat pekerjaan secara kronologis (2026/2031 hingga 1995).
* Format kartu: Nama Jabatan, Instansi/Dinas, Rentang Waktu, Lokasi, dan badge status aktif untuk periode saat ini (*Sekarang*).

### FR-05: Section Pengalaman Organisasi (10 Kartu Linier)
* Menampilkan 10 riwayat kepengurusan organisasi secara utuh dengan nama posisi, organisasi, tahun, dan wilayah.

### FR-06: Section Sertifikat & Penghargaan (A4 Frame Layout)
* Grid kartu dengan rasio aspek standar dokumen A4 landscape **(1.414 : 1 / 29.7 cm × 21 cm)**.
* Wadah berupa frame placeholder bergaya *blueprint/certificate skeleton* dengan label teks: **"Belum ada gambar"**.
* Dilengkapi nomor seri sertifikat (misal: *Sertifikat #01*, *Sertifikat #02*) dan tombol *"Lihat Detail"*.

---

## 6. Spesifikasi Data Model (TypeScript)

Data akan dikonversikan dari `BIODATA.md` ke dalam format TypeScript lokal (`src/data/biodata.ts`):

```typescript
export interface ProfileData {
  name: string;
  titles: string;
  role: string;
  bio: string;
  officeAddress: string;
  homeAddress: string;
  phone: string;
  whatsappNumber: string;
  defaultWhatsappMessage: string;
  avatarPlaceholderText: string;
  cvDownloadUrl: string;
}

export interface EducationItem {
  id: string;
  type: 'formal' | 'non-formal';
  institution: string;
  major?: string;
  period: string;
  location: string;
}

export interface WorkExperienceItem {
  id: string;
  position: string;
  institution: string;
  period: string;
  location: string;
  isCurrent?: boolean;
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  aspectRatio: string; // "1.414 / 1"
  hasImage: boolean;
  placeholderText: string; // "Belum ada gambar"
}
```

---

## 7. Edge Cases & Penanganan

| Skenario | Dampak | Penanganan |
| :--- | :--- | :--- |
| File CV fisik belum dimasukkan ke folder `public/` | Link unduh menghasilkan 404 jika diakses langsung sebelum file ada. | Tambahkan atribut download dan fallback pesan notifikasi interaktif yang sopan. |
| Nama jabatan panjang pada kartu kerja di layar ponsel 360px | Teks meluap (*overflow*) merusak tata letak kartu. | Penggunaan `break-words`, `hyphens-auto`, dan flexbox vertikal adaptif. |
| Perbedaan orientasi proyektor presentasi (4:3 vs 16:9) | Tata letak kartu terlihat terpotong atau terlalu rapat. | Desain berbasis container `max-w-5xl` terpusat dengan padding responsif (`px-4 sm:px-6 lg:px-8`). |

---

## 8. Success Metrics & Definition of Done

* **Technical Metrics:** Skor Google Lighthouse $\ge 95$ pada Performance, Accessibility (WCAG AA), Best Practices, dan SEO.
* **Content Accuracy:** 100% data riwayat dari `BIODATA.md` tampil tanpa ada yang hilang.
* **Visual Fidelity:** Kesesuaian tata letak kartu, navigasi floating, dan nuansa warna dengan referensi visual `Desktop.jpeg` & `Mobile.jpeg`.
* **Deployment Readiness:** Aplikasi lulus `npm run build` tanpa error dan siap dideploy langsung ke Vercel.
