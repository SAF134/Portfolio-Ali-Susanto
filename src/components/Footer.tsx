"use client";

import { ArrowUp } from "lucide-react";
import { ProfileData } from "@/types/portfolio";

interface FooterProps {
  profile: ProfileData;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 pb-24 sm:pb-8 text-center text-xs text-white/90">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {profile.name}, {profile.titles}. Hak Cipta Dilindungi.</p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-neutral-heading font-semibold transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="Kembali ke atas"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5 text-brand-blue" />
        </button>
      </div>
    </footer>
  );
}
