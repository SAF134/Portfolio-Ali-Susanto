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
    // If physical PDF file does not exist yet in public/, notify the user gracefully
    setToastMessage("Mengunduh berkas CV... (File sedang dalam proses pembaharuan)");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <section
      id="profil"
      className="pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-neutral-border/60 relative overflow-hidden"
    >
      {/* Background Ambience Shaders */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/40 via-slate-200/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-greenBg border border-emerald-200 text-status-greenText text-xs font-semibold shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-status-greenDot animate-pulse" />
              <span>Tersedia untuk Sinergi & Pengawasan Koperasi</span>
            </div>

            {/* Kicker */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-muted mb-2">
              Halo, Perkenalkan Saya
            </p>

            {/* Name & Titles */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-heading leading-tight mb-2">
              {profile.name}
              <span className="text-brand-blue">.</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-neutral-body mb-4">
              {profile.titles} —{" "}
              <span className="text-brand-blue font-semibold">{profile.role}</span>
            </p>

            {/* Narrative Bio */}
            <p className="text-sm sm:text-base text-neutral-body leading-relaxed max-w-xl mb-6">
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

            {/* Direct Contact Metadata Chips */}
            <div className="w-full pt-6 border-t border-neutral-border/70 space-y-2 text-xs sm:text-sm text-neutral-muted">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-body">Kantor:</strong>{" "}
                  {profile.officeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>
                  <strong className="text-neutral-body">Telepon:</strong>{" "}
                  {profile.phone}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-body">Domisili:</strong>{" "}
                  {profile.homeAddress}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhotoFrame name={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
