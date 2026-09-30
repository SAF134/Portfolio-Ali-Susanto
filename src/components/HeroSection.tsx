"use client";

import { useState } from "react";
import { Download, MessageCircle, MapPin, Phone, Building2, CheckCircle2 } from "lucide-react";
import { ProfileData } from "@/types/portfolio";
import ProfilePhotoFrame from "./ProfilePhotoFrame";

interface HeroSectionProps {
  profile: ProfileData;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownloadCv = () => {
    setToastMessage("Mengunduh berkas CV... (File sedang dalam proses pembaharuan)");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <section
      id="profil"
      className="pt-24 sm:pt-36 pb-16 sm:pb-24 border-b border-neutral-border/80 relative overflow-hidden bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Unified Profile Card & Contact Info Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
            {/* Kartu Utama Profil (Menyatukan Kicker, Nama, Gelar, Jabatan, Bio, dan Tombol Aksi) */}
            <div className="w-full bg-[#D9D9D9] border border-neutral-borderHover rounded-[28px] p-4 sm:p-7 shadow-card hover:shadow-cardHover transition-all duration-300">
              {/* Kicker */}
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-800 mb-2">
                Halo, Perkenalkan Saya
              </p>

              {/* Nama lengkap & gelar: Ukuran disesuaikan agar selalu sejajar satu baris di semua device */}
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-heading leading-tight mb-2 whitespace-nowrap">
                {profile.name} {profile.titles}
              </h1>

              {/* Jabatan Utama */}
              <p className="text-sm sm:text-base md:text-lg font-extrabold text-blue-950 mb-4">
                {profile.role}
              </p>

              {/* Narrative Bio (Text Justify) */}
              <p className="text-sm sm:text-base text-neutral-heading font-medium leading-relaxed text-justify mb-8">
                {profile.bioSummary}
              </p>

              {/* Action Buttons with distinct frame shade/shadow */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                <a
                  href={`/${profile.cvFileName}`}
                  download={profile.cvFileName}
                  onClick={handleDownloadCv}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-heading text-white text-sm font-semibold shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neutral-heading focus-visible:ring-offset-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh CV Saya</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-neutral-heading text-neutral-heading text-sm font-bold shadow-btn hover:shadow-btnHover hover:bg-slate-50 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  aria-label="Hubungi Bapak Ali Susanto melalui WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Hubungi Saya</span>
                </a>
              </div>
            </div>

            {/* Toast Notification */}
            {toastMessage && (
              <div className="w-full p-3 rounded-xl bg-blue-50 border border-blue-200 text-brand-blueDark text-xs flex items-center gap-2 animate-fade-in shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Kartu Informasi: Sejajar 1x3 pada mobile dan desktop */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-3.5">
              {/* Kartu Kantor */}
              <div className="bg-[#D9D9D9] border border-neutral-borderHover p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold text-neutral-heading mb-1 sm:mb-1.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white text-brand-blue flex items-center justify-center shadow-xs shrink-0">
                      <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="truncate">Kantor</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-heading font-medium leading-tight sm:leading-relaxed">
                    {profile.officeAddress}
                  </p>
                </div>
              </div>

              {/* Kartu Telepon */}
              <div className="bg-[#D9D9D9] border border-neutral-borderHover p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold text-neutral-heading mb-1 sm:mb-1.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white text-brand-blue flex items-center justify-center shadow-xs shrink-0">
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="truncate">Telepon / HP</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-extrabold text-neutral-heading tracking-tight sm:tracking-wide mt-0.5 sm:mt-1 break-all sm:break-normal">
                    {profile.phone}
                  </p>
                </div>
              </div>

              {/* Kartu Alamat */}
              <div className="bg-[#D9D9D9] border border-neutral-borderHover p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold text-neutral-heading mb-1 sm:mb-1.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white text-brand-blue flex items-center justify-center shadow-xs shrink-0">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="truncate">Alamat</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-heading font-medium leading-tight sm:leading-relaxed">
                    {profile.homeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Frame (9:16) with Card Shade */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end sticky top-24">
            <ProfilePhotoFrame name={profile.name} imageSrc={profile.imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}
