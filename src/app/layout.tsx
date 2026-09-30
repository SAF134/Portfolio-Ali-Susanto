import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ali-Susanto/Portfolio",
  description:
    "Website portfolio resmi Bapak Ali Susanto, S.Pt., M.Si. — Pengawas Koperasi Ahli Madya, birokrat senior, dan praktisi perkoperasian serta ketahanan pangan Kota Bogor, Jawa Barat.",
  keywords: [
    "Ali Susanto",
    "Pengawas Koperasi Ahli Madya",
    "Dinas Koperasi UKM Kota Bogor",
    "Koperasi Pegawai Republik Indonesia",
    "Portfolio Eksekutif",
    "Pemberdayaan UMKM",
  ],
  authors: [{ name: "Ali Susanto, S.Pt., M.Si." }],
  openGraph: {
    title: "Ali Susanto, S.Pt., M.Si. — Portfolio Eksekutif & Pengawas Koperasi",
    description:
      "Rekam jejak dedikasi, pendidikan, pengalaman struktural dinas, dan kepemimpinan koperasi Bapak Ali Susanto, S.Pt., M.Si.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans bg-canvas-main text-neutral-heading selection:bg-blue-100 selection:text-brand-blue antialiased">
        {children}
      </body>
    </html>
  );
}
