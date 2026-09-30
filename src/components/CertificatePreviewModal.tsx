"use client";

import { useEffect, useState } from "react";
import {
  Award,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  ImageOff,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificateFrameItem } from "@/types/portfolio";

interface CertificatePreviewModalProps {
  certificates: CertificateFrameItem[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function CertificatePreviewModal({
  certificates,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}: CertificatePreviewModalProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);

  const currentCert = certificates[selectedIndex];
  if (!currentCert) return null;

  // Deduplicated handler for opening full resolution image securely
  const handleOpenOriginalImage = () => {
    if (currentCert.imageSrc && !failedImages[currentCert.id]) {
      window.open(currentCert.imageSrc, "_blank", "noopener,noreferrer");
    } else {
      alert("Berkas gambar fisik sertifikat belum diunggah atau tidak ditemukan.");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-neutral-border relative flex flex-col max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header Bar Modal */}
        <div className="flex items-start sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-200">
          {/* Title, Counter & Certificate Name */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <h3 className="text-base sm:text-lg font-extrabold text-neutral-heading tracking-tight">
                Pratinjau Sertifikat
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700 shrink-0">
                {selectedIndex + 1} dari {certificates.length}
              </span>
            </div>
            {/* Informasi Lengkap Nama Sertifikat */}
            <p
              className="text-sm sm:text-base font-extrabold text-neutral-heading mt-1 sm:mt-1.5 truncate text-slate-900"
              title={currentCert.title}
            >
              {currentCert.title}
            </p>
          </div>

          {/* Action Button: Tombol Tutup Pratinjau */}
          <div className="flex items-center shrink-0 pt-0.5 sm:pt-0">
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-heading text-white flex items-center justify-center shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-90 hover:scale-110 transition-all duration-150"
              aria-label="Tutup pratinjau"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Main Content: Certificate Frame (Rasio A4 Landscape) dengan Tombol Navigasi Kiri & Kanan */}
        <div className="relative my-3 sm:my-4 flex-1 flex items-center justify-center bg-slate-100 rounded-xl sm:rounded-2xl p-2 sm:p-6 overflow-hidden min-h-[300px] sm:min-h-[440px]">
          {/* Floating Left Button (Previous) - Desain seperti Tombol Lihat Resolusi Asli */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-heading text-white shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-90 hover:scale-110 transition-all duration-150 flex items-center justify-center"
            aria-label="Sertifikat sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Floating Right Button (Next) - Desain seperti Tombol Lihat Resolusi Asli */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-heading text-white shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-90 hover:scale-110 transition-all duration-150 flex items-center justify-center"
            aria-label="Sertifikat selanjutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Certificate Inner Canvas dengan animasi transisi slide pergantian */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-3xl aspect-[1.414/1] bg-white rounded-lg sm:rounded-xl shadow-lg border-2 border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Decorative Certificate Inner Border */}
              <div className="absolute inset-3 border-2 border-slate-200 rounded-md pointer-events-none" />
              <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-brand-blue" />
              <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-brand-blue" />
              <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-brand-blue" />
              <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-brand-blue" />

              {currentCert.imageSrc && !failedImages[currentCert.id] ? (
                <img
                  src={currentCert.imageSrc}
                  alt={currentCert.title}
                  onError={() =>
                    setFailedImages((prev) => ({
                      ...prev,
                      [currentCert.id]: true,
                    }))
                  }
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Footer Bar Modal */}
        <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          {/* Tombol Lihat Resolusi Asli: Desain disamakan dengan Tombol Lihat Detail */}
          <button
            type="button"
            onClick={handleOpenOriginalImage}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-heading text-white text-xs font-bold shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-90 hover:scale-105 transition-all duration-150"
          >
            <span>Lihat resolusi asli</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          {/* Informasi Lengkap Nama Sertifikat di Footer */}
          <p
            className="text-xs sm:text-sm font-extrabold text-neutral-heading truncate max-w-sm sm:max-w-md text-center sm:text-right"
            title={currentCert.title}
          >
            {currentCert.title}
          </p>
        </div>
      </div>
    </div>
  );
}
