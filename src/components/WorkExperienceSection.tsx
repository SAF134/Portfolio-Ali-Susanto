"use client";

import { Building2, Calendar, MapPin, ShieldCheck } from "lucide-react";
import { WorkExperienceItem } from "@/types/portfolio";

interface WorkExperienceSectionProps {
  workList: WorkExperienceItem[];
}

export default function WorkExperienceSection({
  workList,
}: WorkExperienceSectionProps) {
  const getCategoryBadgeClass = (category?: string) => {
    switch (category) {
      case "Dinas":
        return "bg-blue-50 text-brand-blue border-blue-200";
      case "Koperasi":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Pendidikan":
        return "bg-purple-50 text-purple-800 border-purple-200";
      default:
        return "bg-slate-50 text-neutral-heading border-slate-200";
    }
  };

  return (
    <section id="kerja" className="py-20 sm:py-28 border-b border-neutral-border/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Pengalaman Kerja & <span className="text-brand-blue">Kepemimpinan.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-muted">
            Jejak pengabdian struktural, pembinaan kelembagaan, dan pengawasan perkoperasian dari
            masa ke masa.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-4 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-neutral-heading shadow-xs">
            <span>Total: <strong>{workList.length} Posisi Strategis</strong></span>
          </div>
        </div>

        {/* 22 Linear Cards dengan warna #A3A3A3 dan bayangan tegas */}
        <div className="space-y-4 sm:space-y-5">
          {workList.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#A3A3A3] border border-neutral-borderHover rounded-2xl p-5 sm:p-7 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Left Side: Icon & Details */}
                <div className="flex items-start gap-4">
                  {/* Squircle Icon Box with Button Shade */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 bg-white border border-slate-200 text-brand-blue shadow-btn">
                    {item.category === "Koperasi" ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <Building2 className="w-6 h-6" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded-md bg-white border border-slate-300 text-neutral-heading shadow-xs">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      {item.category && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-md border shadow-xs ${getCategoryBadgeClass(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-heading group-hover:text-blue-900 transition-colors">
                      {item.position}
                    </h3>

                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {item.institution}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-slate-800 font-semibold pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Period Badge with Button Shade */}
                <div className="self-start shrink-0 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-300 text-neutral-heading shadow-btn">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
