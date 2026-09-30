"use client";

import { useState, useCallback } from "react";
import { Award, FileText, ExternalLink } from "lucide-react";
import { CertificateFrameItem } from "@/types/portfolio";
import CertificatePreviewModal from "./CertificatePreviewModal";

interface CertificatesSectionProps {
  certificates: CertificateFrameItem[];
}

export default function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cardFailedImages, setCardFailedImages] = useState<Record<string, boolean>>({});

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

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

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

        {/* 2-Column Grid dengan kartu #D9D9D9 (Hit box hanya ada di tombol Lihat Detail) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-[#D9D9D9] border border-neutral-borderHover rounded-[24px] p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* A4 Landscape Frame (1.414 : 1) - TIDAK ADA ONCLICK / BUKAN HIT BOX */}
              <div
                className="w-full aspect-[1.414/1] rounded-[18px] border-2 border-dashed border-slate-500/60 bg-slate-100/90 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center group-hover:border-neutral-heading transition-colors shadow-inner select-none"
                role="img"
                aria-label={`${cert.code} - ${cert.title} (Belum ada gambar)`}
              >
                {/* Decorative Certificate Ornaments */}
                <div className="absolute inset-3 border border-slate-300 rounded-xl pointer-events-none" />
                <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-slate-500" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-slate-500" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-slate-500" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-slate-500" />

                {cert.imageSrc && !cardFailedImages[cert.id] ? (
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    onError={() =>
                      setCardFailedImages((prev) => ({ ...prev, [cert.id]: true }))
                    }
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

              {/* Card Footer Info & Tombol Lihat Detail (SATU-SATUNYA HIT BOX) */}
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

                {/* Tombol Lihat Detail dengan animasi tekan (active:scale-90 hover:scale-105) */}
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-heading text-white text-xs font-bold shadow-btn hover:shadow-btnHover hover:bg-slate-800 active:scale-90 hover:scale-105 transition-all duration-150"
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

      {/* Modal Dialog Pratinjau Sertifikat */}
      {selectedIndex !== null && (
        <CertificatePreviewModal
          certificates={certificates}
          selectedIndex={selectedIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
