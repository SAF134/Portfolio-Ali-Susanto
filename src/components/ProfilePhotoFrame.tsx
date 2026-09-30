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
      {/* Frame 9:16 Fixed with #D9D9D9 tone and pronounced shade */}
      <div className="w-full max-w-[270px] sm:max-w-[310px] aspect-[9/16] relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-neutral-borderHover bg-[#D9D9D9] p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-card hover:shadow-cardHover group transition-all duration-300">
        {/* Decorative corner markers */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-neutral-heading rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-neutral-heading rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-neutral-heading rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-neutral-heading rounded-br-sm" />

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Foto profil ${name}`}
            className="w-full h-full object-cover rounded-[20px] shadow-sm"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3 px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-btn border border-neutral-border flex items-center justify-center text-brand-blue group-hover:scale-105 transition-all">
              <ImageOff className="w-7 h-7 stroke-[1.8]" />
            </div>

            <div>
              <p className="text-sm sm:text-base font-extrabold text-neutral-heading tracking-tight">
                Belum ada gambar
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
