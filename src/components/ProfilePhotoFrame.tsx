"use client";

import { ImageOff, Sparkles } from "lucide-react";

interface ProfilePhotoFrameProps {
  imageSrc?: string;
  name: string;
}

export default function ProfilePhotoFrame({
  imageSrc,
  name,
}: ProfilePhotoFrameProps) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Frame 9:16 Fixed */}
      <div className="w-full max-w-[270px] sm:max-w-[310px] aspect-[9/16] relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-dashed border-slate-300 bg-gradient-to-b from-blue-50/70 via-slate-100 to-slate-200/60 p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-card group transition-transform duration-300 hover:scale-[1.01]">
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
              <p className="text-xs text-neutral-muted mt-0.5 font-mono">
                Rasio 9:16
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-slate-200 text-[11px] font-medium text-neutral-body shadow-xs">
              <Sparkles className="w-3 h-3 text-brand-blue" />
              <span>Frame foto siap pakai</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
