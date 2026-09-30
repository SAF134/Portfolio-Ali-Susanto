"use client";

import { ArrowUp, MessageCircle, Phone, MapPin, ShieldCheck } from "lucide-react";
import { ProfileData } from "@/types/portfolio";

interface FooterProps {
  profile: ProfileData;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <footer className="bg-white border-t border-neutral-border pt-16 pb-12 text-neutral-body">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Identity Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-brand-blue flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-neutral-heading">
                {profile.name}, {profile.titles}
              </span>
            </div>
            <p className="text-xs font-semibold text-brand-blue">
              {profile.role}
            </p>
            <p className="text-xs text-neutral-muted leading-relaxed max-w-md">
              Portfolio resmi rekam jejak pengabdian birokrasi, pengawasan kelembagaan koperasi,
              dan pembinaan UMKM Kota Bogor & Jawa Barat.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <p className="font-bold text-neutral-heading uppercase tracking-wider mb-3">
              Navigasi Halaman
            </p>
            <ul className="space-y-2 text-neutral-muted">
              <li>
                <a href="#profil" className="hover:text-brand-blue transition-colors">
                  Profil & Data Diri
                </a>
              </li>
              <li>
                <a href="#pendidikan" className="hover:text-brand-blue transition-colors">
                  Riwayat Pendidikan
                </a>
              </li>
              <li>
                <a href="#kerja" className="hover:text-brand-blue transition-colors">
                  Pengalaman Kerja (22 Posisi)
                </a>
              </li>
              <li>
                <a href="#organisasi" className="hover:text-brand-blue transition-colors">
                  Pengalaman Organisasi
                </a>
              </li>
              <li>
                <a href="#sertifikat" className="hover:text-brand-blue transition-colors">
                  Sertifikat & Penghargaan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <p className="font-bold text-neutral-heading uppercase tracking-wider mb-3">
              Hubungi Langsung
            </p>
            <div className="space-y-2 text-neutral-muted">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {profile.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>{profile.officeAddress}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-muted">
          <p>© 2026 {profile.name}, {profile.titles}. Hak Cipta Dilindungi.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-neutral-heading font-semibold transition-all focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-blue" />
          </button>
        </div>
      </div>
    </footer>
  );
}
