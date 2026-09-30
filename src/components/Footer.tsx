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
    <footer className="py-8 pb-24 sm:pb-8 text-center text-xs text-neutral-muted bg-white border-t border-neutral-border">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-medium">© 2026 {profile.name}, {profile.titles}. Hak Cipta Dilindungi.</p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-neutral-heading font-bold transition-all shadow-btn hover:shadow-btnHover focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="Kembali ke atas"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5 text-brand-blue" />
        </button>
      </div>
    </footer>
  );
}
