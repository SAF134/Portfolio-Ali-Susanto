"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Award,
  FileText,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ImageOff,
} from "lucide-react";
import { CertificateFrameItem } from "@/types/portfolio";

interface CertificatesSectionProps {
  certificates: CertificateFrameItem[];
}

export default function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : certificates.length - 1;
    });
  }, [certificates.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev < certificates.length - 1 ? prev + 1 : 0;
    });
  }, [certificates.length]);

  const handleClose = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const currentCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  return (
    <section
      id="sertifikat"
      className="py-20 sm:py-28 border-b border-neutral-border/80 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Sertifikat & <span className="text-brand-blue">Penghargaan.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-muted">
            Bukti kompetensi pengawasan, diklat kedinasan, dan apresiasi
            pengabdian lembaga.
          </p>
        </div>

        {/* 2-Column Grid dengan kartu #A3A3A3 dan bayangan tegas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-[#A3A3A3] border border-neutral-borderHover rounded-[24px] p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* A4 Landscape Frame (1.414 : 1) */}
              <div
                className="w-full aspect-[1.414/1] rounded-[18px] border-2 border-dashed border-slate-500/60 bg-slate-100/90 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center group-hover:border-neutral-heading transition-colors shadow-inner cursor-pointer"
                role="img"
                aria-label={`${cert.code} - ${cert.title} (Belum ada gambar)`}
                onClick={() => setSelectedIndex(index)}
              >
                {/* Decorative Certificate Ornaments */}
                <div className="absolute inset-3 border border-slate-300 rounded-xl pointer-events-none" />
                <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-slate-500" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-slate-500" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-slate-500" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-slate-500" />

                {cert.imageSrc ? (
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg shadow-sm"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-2.5 px-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-btn border border-slate-200 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-all">
                      <FileText className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-neutral-heading tracking-tight">
                        {cert.placeholderText}
                      </p>
                      <p className="text-[11px] font-mono text-slate-800 font-bold mt-0.5">
                        Rasio A4 Landscape (1,414 : 1)
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-blue bg-white px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                      Ukuran 29,7 × 21 cm
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer Info & Action with Button Shade */}
              <div className="mt-5 pt-4 border-t border-neutral-400/60 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span className="text-xs font-mono font-extrabold text-neutral-heading">
                      {cert.code}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-extrabold text-neutral-heading truncate mt-0.5"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-heading text-white text-xs font-bold shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-95 transition-all"
                  aria-label={`Lihat detail ${cert.code}`}
                >
                  <span>Lihat Detail</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog "Pratinjau Sertifikat" (Desain Identik dengan Referensi Gambar) */}
      {currentCert && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          {/* Modal Card */}
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-neutral-border relative flex flex-col max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Header Bar Modal */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200">
              {/* Title & Counter */}
              <div className="flex items-center gap-2 sm:gap-3">
                <h3 className="text-base sm:text-lg font-extrabold text-neutral-heading tracking-tight">
                  Pratinjau Sertifikat
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                  {selectedIndex + 1} dari {certificates.length}
                </span>
              </div>

              {/* Action Buttons: Buka Gambar Penuh & Tutup */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (currentCert.imageSrc) {
                      window.open(currentCert.imageSrc, "_blank");
                    } else {
                      alert("Berkas gambar fisik sertifikat belum diunggah.");
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-neutral-heading active:scale-95 transition-all shadow-xs"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Buka Gambar Penuh</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-500 hover:text-neutral-heading transition-colors shadow-xs"
                  aria-label="Tutup pratinjau"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Main Content: Certificate Frame (Rasio A4 Landscape) dengan Tombol Navigasi Kiri & Kanan */}
            <div className="relative my-3 sm:my-4 flex-1 flex items-center justify-center bg-slate-100 rounded-xl sm:rounded-2xl p-2 sm:p-6 overflow-hidden min-h-[300px] sm:min-h-[440px]">
              {/* Floating Left Button (Previous) */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 shadow-md border border-slate-200 flex items-center justify-center text-neutral-heading hover:bg-white active:scale-95 hover:scale-105 transition-all"
                aria-label="Sertifikat sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Floating Right Button (Next) */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 shadow-md border border-slate-200 flex items-center justify-center text-neutral-heading hover:bg-white active:scale-95 hover:scale-105 transition-all"
                aria-label="Sertifikat selanjutnya"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Certificate Inner Canvas (A4 Landscape 1,414 : 1) */}
              <div className="w-full max-w-3xl aspect-[1.414/1] bg-white rounded-lg sm:rounded-xl shadow-lg border-2 border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {/* Decorative Certificate Inner Border */}
                <div className="absolute inset-3 border-2 border-slate-200 rounded-md pointer-events-none" />
                <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-brand-blue" />
                <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-brand-blue" />
                <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-brand-blue" />
                <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-brand-blue" />

                {currentCert.imageSrc ? (
                  <img
                    src={currentCert.imageSrc}
                    alt={currentCert.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-3 px-4 max-w-md">
                    {/* Seal / Badge Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-amber-600 shadow-md">
                      <Award className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.6]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-brand-blue font-bold">
                        {currentCert.code}
                      </span>
                      <h4 className="text-base sm:text-xl font-extrabold text-neutral-heading tracking-tight leading-snug">
                        {currentCert.title}
                      </h4>
                    </div>

                    <div className="pt-2 flex flex-col items-center gap-1.5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-neutral-heading shadow-xs">
                        <ImageOff className="w-4 h-4 text-brand-blue" />
                        <span>Belum ada gambar</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500">
                        Rasio Dokumen Standar A4 (1,414 : 1 / 29,7 × 21 cm)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Footer Bar Modal */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <p className="flex items-center gap-1 text-[11px] sm:text-xs">
                <span>Gunakan tombol panah ◄ ► pada keyboard untuk navigasi cepat antar sertifikat.</span>
              </p>

              <button
                type="button"
                onClick={() => {
                  if (currentCert.imageSrc) {
                    window.open(currentCert.imageSrc, "_blank");
                  } else {
                    alert("Berkas gambar fisik sertifikat belum diunggah.");
                  }
                }}
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors"
              >
                <span>Lihat resolusi asli</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
