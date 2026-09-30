"use client";

import { useEffect, useState } from "react";
import { User, GraduationCap, Briefcase, Users, Award } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "profil", label: "Profil", icon: User },
  { id: "pendidikan", label: "Pendidikan", icon: GraduationCap },
  { id: "kerja", label: "Kerja", icon: Briefcase },
  { id: "organisasi", label: "Organisasi", icon: Users },
  { id: "sertifikat", label: "Sertifikat", icon: Award },
];

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState<string>("profil");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    /* Posisi: di Desktop ada di atas (top-6), di Mobile pindah ke bawah (bottom-4) */
    <header className="fixed bottom-4 sm:bottom-auto sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Navigasi Utama Portofolio"
        className={`pointer-events-auto flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-neutral-border shadow-nav"
            : "bg-white/90 backdrop-blur-sm border-neutral-border/90 shadow-card"
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              aria-label={item.label}
              className={`flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                isActive
                  ? "bg-neutral-heading text-white shadow-sm font-semibold"
                  : "text-neutral-body hover:text-neutral-heading hover:bg-slate-100"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-5 h-5 sm:w-4 sm:h-4 shrink-0" />
              {/* Di Mobile hanya ikon (hidden), di Desktop muncul teksnya (sm:inline) */}
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
