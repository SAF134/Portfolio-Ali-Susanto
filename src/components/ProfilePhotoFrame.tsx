"use client";

import { useState } from "react";
import { ImageOff, Sparkles, SlidersHorizontal } from "lucide-react";

interface ProfilePhotoFrameProps {
  imageSrc?: string;
  name: string;
}

type AspectRatioType = "9:16" | "4:3" | "16:9";

export default function ProfilePhotoFrame({
  imageSrc,
  name,
}: ProfilePhotoFrameProps) {
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioType>("4:3");

  const ratioClasses: Record<AspectRatioType, string> = {
    "9:16": "aspect-[9/16] max-w-[280px] sm:max-w-[320px]",
    "4:3": "aspect-[4/3] max-w-[340px] sm:max-w-[400px]",
    "16:9": "aspect-[16/9] max-w-[380px] sm:max-w-[440px]",
  };

  const ratioLabels: Record<AspectRatioType, string> = {
    "9:16": "9:16 (Tall / Story)",
    "4:3": "4:3 (Portrait Formal)",
    "16:9": "16:9 (Landscape)",
  };

  return (
    <div className="flex flex-col items-center">
      {/* Ratio Selector Controls */}
      <div className="flex items-center gap-1.5 p-1 mb-3 bg-white/90 backdrop-blur-sm border border-neutral-border rounded-full shadow-sm">
        <div className="flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-muted">
          <SlidersHorizontal className="w-3 h-3 text-brand-blue" />
          <span>Rasio:</span>
        </div>
        {(["9:16", "4:3", "16:9"] as AspectRatioType[]).map((ratio) => (
          <button
            key={ratio}
            type="button"
            onClick={() => setSelectedRatio(ratio)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
              selectedRatio === ratio
                ? "bg-brand-blue text-white shadow-sm"
                : "text-neutral-body hover:bg-slate-100 hover:text-neutral-heading"
            }`}
            aria-pressed={selectedRatio === ratio}
          >
            {ratio}
          </button>
        ))}
      </div>

      {/* Main Frame Container */}
      <div
        className={`w-full ${ratioClasses[selectedRatio]} transition-all duration-300 relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-dashed border-slate-300 bg-gradient-to-b from-blue-50/70 via-slate-100 to-slate-200/60 p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-card group`}
      >
        {/* Decorative corner markers */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand-blue/50 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand-blue/50 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand-blue/50 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand-blue/50 rounded-br-sm" />

        {/* Ambient Gradient Glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-300/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-slate-300/40 rounded-full blur-2xl pointer-events-none" />

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Foto profil ${name}`}
            className="w-full h-full object-cover rounded-[20px]"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3 px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-neutral-border flex items-center justify-center text-neutral-muted group-hover:text-brand-blue group-hover:scale-105 transition-all">
              <ImageOff className="w-7 h-7 stroke-[1.6]" />
            </div>

            <div>
              <p className="text-sm sm:text-base font-bold text-neutral-heading tracking-tight">
                Belum ada gambar
              </p>
              <p className="text-xs text-neutral-muted mt-0.5">
                {ratioLabels[selectedRatio]}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-[11px] font-medium text-neutral-body shadow-xs">
              <Sparkles className="w-3 h-3 text-brand-blue" />
              <span>Frame foto siap pakai</span>
            </div>
          </div>
        )}
      </div>

      <span className="text-[11px] text-neutral-muted mt-2 text-center">
        Dapat disesuaikan dengan format foto vertikal, formal, maupun lanskap
      </span>
    </div>
  );
}
