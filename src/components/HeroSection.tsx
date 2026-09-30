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

  const handleDownloadCv = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setToastMessage("Mengunduh berkas CV... (File sedang dalam proses pembaharuan)");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <section
      id="profil"
      className="pt-24 sm:pt-36 pb-16 sm:pb-24 border-b border-neutral-border/60 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-muted mb-2">
              Halo, Perkenalkan Saya
            </p>

            {/* Nama lengkap disambung dengan gelar */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-heading leading-tight mb-2">
              {profile.name} {profile.titles}
              <span className="text-brand-blue">.</span>
            </h1>

            {/* Jabatan Utama */}
            <p className="text-lg sm:text-xl font-bold text-brand-blue mb-4">
              {profile.role}
            </p>

            {/* Narrative Bio (Text Justify) */}
            <p className="text-sm sm:text-base text-neutral-body leading-relaxed max-w-xl mb-6 text-justify">
              {profile.bioSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <a
                href={`/${profile.cvFileName}`}
                download={profile.cvFileName}
                onClick={handleDownloadCv}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-heading text-white text-sm font-semibold shadow-md hover:bg-slate-800 hover:shadow-lg active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neutral-heading focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV Saya</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-neutral-border text-neutral-heading text-sm font-semibold shadow-sm hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50/50 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                aria-label="Hubungi Bapak Ali Susanto melalui WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Toast Notification */}
            {toastMessage && (
              <div className="mb-6 p-3 rounded-xl bg-blue-50 border border-blue-200 text-brand-blueDark text-xs flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Kartu Informasi: Kantor, Telepon, dan Domisili */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-border/70">
              {/* Kartu Kantor */}
              <div className="bg-white border border-neutral-border p-3.5 rounded-xl shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-heading mb-1.5">
                    <Building2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Kantor</span>
                  </div>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    {profile.officeAddress}
                  </p>
                </div>
              </div>

              {/* Kartu Telepon */}
              <div className="bg-white border border-neutral-border p-3.5 rounded-xl shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-heading mb-1.5">
                    <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Telepon / HP</span>
                  </div>
                  <p className="text-xs font-bold text-neutral-heading tracking-wide">
                    {profile.phone}
                  </p>
                </div>
                <span className="text-[11px] text-neutral-muted mt-2">Kanal Resmi</span>
              </div>

              {/* Kartu Domisili */}
              <div className="bg-white border border-neutral-border p-3.5 rounded-xl shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-heading mb-1.5">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Domisili</span>
                  </div>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    {profile.homeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Frame (9:16) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhotoFrame name={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
