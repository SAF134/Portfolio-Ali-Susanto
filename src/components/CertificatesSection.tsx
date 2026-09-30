"use client";

import { useState } from "react";
import { Award, FileText, ExternalLink, X, Info } from "lucide-react";
import { CertificateFrameItem } from "@/types/portfolio";

interface CertificatesSectionProps {
  certificates: CertificateFrameItem[];
}

export default function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateFrameItem | null>(null);

  return (
    <section id="sertifikat" className="py-20 sm:py-28 border-b border-neutral-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Sertifikat & <span className="text-brand-blue">Penghargaan.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-body">
            Bukti kompetensi pengawasan, diklat kedinasan, dan apresiasi pengabdian lembaga.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Frame disiapkan dengan rasio standar dokumen A4 (1,414 : 1)</span>
          </div>
        </div>

        {/* 2-Column Grid (Desktop) / 1-Column (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-neutral-border hover:border-slate-300 rounded-[24px] p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* A4 Landscape Frame (1.414 : 1) */}
              <div
                className="w-full aspect-[1.414/1] rounded-[18px] border-2 border-dashed border-slate-300 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-100 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center group-hover:border-brand-blue/50 transition-colors"
                role="img"
                aria-label={`${cert.code} - ${cert.title} (Belum ada gambar)`}
              >
                {/* Decorative Certificate Ornaments */}
                <div className="absolute inset-3 border border-slate-200/80 rounded-xl pointer-events-none" />
                <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-slate-400" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-slate-400" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-slate-400" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-slate-400" />

                {cert.imageSrc ? (
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-2.5 px-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:scale-105 transition-all">
                      <FileText className="w-6 h-6 stroke-[1.7]" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-neutral-heading tracking-tight">
                        {cert.placeholderText}
                      </p>
                      <p className="text-[11px] font-mono text-neutral-muted mt-0.5">
                        Rasio A4 Landscape (1,414 : 1)
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-blue bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100">
                      Ukuran 29,7 × 21 cm
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer Info & Action */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span className="text-xs font-mono font-bold text-neutral-muted">
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-heading truncate mt-0.5" title={cert.title}>
                    {cert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-heading text-white text-xs font-semibold shadow-xs hover:bg-slate-800 active:scale-95 transition-all"
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

      {/* Detail Modal Dialog */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-border relative animate-fade-in">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-neutral-muted hover:text-neutral-heading transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-blue mb-2">
              <Award className="w-4 h-4" />
              <span>{selectedCert.code}</span>
            </div>

            <h3 className="text-lg font-bold text-neutral-heading">
              {selectedCert.title}
            </h3>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-neutral-body space-y-2">
              <p>
                <strong>Format Dokumen:</strong> Standar Piagam/Sertifikat A4 Landscape (1,414 : 1 / 29,7 × 21 cm).
              </p>
              <p>
                <strong>Status Aset:</strong> Slot frame siap pakai ({selectedCert.placeholderText}). Berkas fisik digital dapat ditambahkan langsung ke direktori aset.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-full bg-neutral-heading text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
